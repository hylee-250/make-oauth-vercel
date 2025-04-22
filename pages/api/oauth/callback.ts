import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;
  const state = req.query.state as string;

  // FastAPI 서버에 전달
  await fetch("https://922f-14-52-23-180.ngrok-free.app", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, state }),
  });

  // 사용자에게 간단한 완료 메시지
  res.status(200).send("OAuth 인증이 완료되었습니다. 이 창은 닫으셔도 됩니다.");
}
