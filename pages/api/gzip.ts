// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream';
import { createGzip } from 'zlib';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Readable>
) {
  res.status(200);
  const json: Data = { name: 'John Doe' };
  const content = Readable.from(JSON.stringify(json)).pipe(createGzip());
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Encoding", "gzip");
  res.send(content);
}
