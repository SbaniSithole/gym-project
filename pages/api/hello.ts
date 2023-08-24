// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const resp=await fetch("http://localhost:8084/movie/all");
  const data=await resp.json();
  res.status(200).json({ name: 'John Doe' })
}
