// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Token } from 'rainbow-token-list/dist/constants';
import { build } from 'rainbow-token-list-test'

export default async (req: NextApiRequest, res: NextApiResponse<Token[]>) => {
  /**
   * Mark stale once an hour.
   */
  res.setHeader(
    'Cache-Control',
    `public, max-age=${60}, stale-while-revalidate`
  );

  const tokens = await build();
  res.status(200).json(tokens);
}
