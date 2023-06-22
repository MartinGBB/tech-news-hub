import { NextApiRequest, NextApiResponse } from 'next'

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentLanguage = 'en'
  try {
    const endpoint = `https://newsapi.org/v2/top-headlines/sources?category=${req.query.category}&language=${currentLanguage}`
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': `${process.env.API_KEY}`,
      },
    })
    const data = await response.json()

    if (data.status === 'error') {
      throw new Error(data.error)
    } else {
      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from API' })
  }
}
