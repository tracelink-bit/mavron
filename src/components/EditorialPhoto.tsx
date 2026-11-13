import Image from "next/image";

type EditorialPhotoProps = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  sizes?: string;
};

export function EditorialPhoto({ src, alt, caption, className = "", sizes = "(max-width: 767px) 100vw, 50vw" }: EditorialPhotoProps) {
  return (
    <figure className={`editorial-photo ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
