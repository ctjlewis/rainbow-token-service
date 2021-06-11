// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Token } from 'rainbow-token-list/dist/constants';

const updateUrl = `https://raw.githubusercontent.com/ctjlewis/rainbow-token-list/service-compatibility/output/rainbow-token-list.json`;

export default async (req: NextApiRequest, res: NextApiResponse<Token[]>) => {
  /**
   * Mark stale once an hour.
   */
  res.setHeader(
    'Cache-Control',
    `public, max-age=${60}, stale-while-revalidate`
  );

  const tokens = await fetch(updateUrl)
  res.status(200).json(await tokens.json());
}
