import { NextApiRequest, NextApiResponse } from 'next'

export default async function getEverythingNews(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const endpoint = `${process.env.API_NEWS_EVERYTHING}?q=from=2023-06-21&sortBy=${req.query.sortBy}&pageSize=${req.query.pageSize}&page=${req.query.page}`

    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Key': `${process.env.API_KEY}`,
    }

    const response = await fetch(endpoint, { headers })
    const data = await response.json()

    if (data.status === 'error') {
      throw new Error(data.message)
    } else {
      res.status(200).json(data)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}
