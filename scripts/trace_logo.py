"""Trace the supplied black-on-white logo into scalable SVG artwork.

Usage: python scripts/trace_logo.py source.jpg public/brand
"""

from collections import defaultdict
from pathlib import Path
import sys

import numpy as np
from PIL import Image, ImageFilter


REGIONS = {
    "logo": (72, 128, 742, 628),
    "mark": (185, 132, 635, 427),
    "wordmark": (76, 466, 741, 626),
}


def simplify(points, tolerance=2.0):
    """Keep corners and the major bends of a closed pixel contour."""
    if len(points) < 5:
        return points
    first = np.asarray(points[0], dtype=float)
    farthest = max(range(1, len(points)), key=lambda i: np.sum((np.asarray(points[i]) - first) ** 2))

    def segment(start, end):
        values = np.asarray(points[start : end + 1], dtype=float)
        if len(values) <= 2:
            return [start, end]
        a, b = values[0], values[-1]
        vector = b - a
        length = np.linalg.norm(vector)
        if length == 0:
            distances = np.linalg.norm(values - a, axis=1)
        else:
            distances = np.abs(vector[0] * (values[:, 1] - a[1]) - vector[1] * (values[:, 0] - a[0])) / length
        middle = int(np.argmax(distances))
        if distances[middle] <= tolerance:
            return [start, end]
        cut = start + middle
        return segment(start, cut)[:-1] + segment(cut, end)

    closed = points + [points[0]]
    points = closed
    indexes = segment(0, farthest)[:-1] + segment(farthest, len(points) - 1)[:-1]
    return [points[i] for i in indexes]


def trace(mask):
    height, width = mask.shape
    padded = np.pad(mask, 1, constant_values=False)
    edges = defaultdict(list)
    for y, x in zip(*np.nonzero(mask)):
        py, px = y + 1, x + 1
        if not padded[py - 1, px]:
            edges[(x, y)].append((x + 1, y))
        if not padded[py, px + 1]:
            edges[(x + 1, y)].append((x + 1, y + 1))
        if not padded[py + 1, px]:
            edges[(x + 1, y + 1)].append((x, y + 1))
        if not padded[py, px - 1]:
            edges[(x, y + 1)].append((x, y))

    loops = []
    while edges:
        start = next(iter(edges))
        current = start
        previous = None
        loop = [start]
        while True:
            choices = edges[current]
            if previous is None or len(choices) == 1:
                following = choices.pop()
            else:
                dx, dy = current[0] - previous[0], current[1] - previous[1]
                priority = [(dy, -dx), (dx, dy), (-dy, dx), (-dx, -dy)]
                following = next((point for direction in priority for point in choices if (point[0] - current[0], point[1] - current[1]) == direction), choices[-1])
                choices.remove(following)
            if not choices:
                del edges[current]
            if following == start:
                break
            loop.append(following)
            previous, current = current, following
        area = abs(sum(loop[i][0] * loop[(i + 1) % len(loop)][1] - loop[(i + 1) % len(loop)][0] * loop[i][1] for i in range(len(loop)))) / 2
        if area >= 5:
            loops.append(simplify(loop))
    return loops, width, height


def write_svg(output, loops, width, height, color):
    path = " ".join("M" + " ".join(f"{x},{y}" for x, y in loop) + "Z" for loop in loops)
    output.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" role="img">'
        f'<path fill="{color}" fill-rule="evenodd" d="{path}"/></svg>\n',
        encoding="utf-8",
    )


def main():
    source = Path(sys.argv[1])
    output = Path(sys.argv[2])
    output.mkdir(parents=True, exist_ok=True)
    image = Image.open(source).convert("L").filter(ImageFilter.GaussianBlur(0.6))
    for name, bounds in REGIONS.items():
        mask = np.asarray(image.crop(bounds)) < 125
        loops, width, height = trace(mask)
        for tone, color in (("black", "#000000"), ("white", "#ffffff")):
            destination = output / f"mavron-{name}-{tone}.svg"
            write_svg(destination, loops, width, height, color)
            print(destination, len(loops), destination.stat().st_size)


if __name__ == "__main__":
    main()
