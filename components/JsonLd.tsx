/** One JSON-LD @graph per page, rendered on the server into the HTML. */
export function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  // Escaping "<" keeps any copy from closing the script tag early.
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
