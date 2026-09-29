export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org payload is built server-side from typed local content.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
