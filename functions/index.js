export async function onRequestGet({ request }) {
  const userAgent = request.headers.get("User-Agent") ?? "Unknown";

  // Headers 객체를 "키: 값" 문자열로 변환
  const headerText = [...request.headers]
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  // 서버 콘솔 로그 (아래 로그 확인 방법 참고)
  console.log("----- INCOMING HEADERS -----");
  console.log(headerText);
  console.log(`Extracted User-Agent: ${userAgent}`);

  return new Response(
    `Your User-Agent: ${userAgent}\n\nFull Headers:\n${headerText}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}