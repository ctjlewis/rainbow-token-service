// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Token } from 'rainbow-token-list/dist/constants';

export default async (req: NextApiRequest, res: NextApiResponse<any[]>) => {
  /**
   * Mark stale once an hour.
   */
  res.setHeader(
    'Cache-Control',
    `public, max-age=${60}, stale-while-revalidate`
  );

  console.log(Date.now(), res.headersSent, res.getHeaders());

  // const tokens = await build();
  res.status(200).json([ Math.random() ]);
}
