// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Readable>
) {
  res.status(200);
  const json: Data = { name: 'John Doe' };
  const content = Readable.from(JSON.stringify(json));
  res.setHeader("Content-Type", "application/json");
  res.send(content);
}
