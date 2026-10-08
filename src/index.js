export default {
  async fetch(request) {
    const userAgent = request.headers.get("User-Agent") ?? "Unknown";

    const headerText = [...request.headers]
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    console.log("----- INCOMING HEADERS -----");
    console.log(headerText);
    console.log(`Extracted User-Agent: ${userAgent}`);

    return new Response(
      `Your User-Agent: ${userAgent}\n\nFull Headers:\n${headerText}\n`,
      { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  },
};