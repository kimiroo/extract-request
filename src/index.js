export default {
  async fetch(request) {
    const url = request.url;
    const body = ["GET", "HEAD"].includes(request.method)
      ? "(no body)"
      : await request.text();

    const headerText = [...request.headers]
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const out = `${request.method} ${url}\n\n${headerText}\n\nBODY:\n${body}\n`;
    console.log(out);

    return new Response(out, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
};