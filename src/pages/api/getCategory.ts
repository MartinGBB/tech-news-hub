import { NextApiRequest, NextApiResponse } from 'next'

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currentLanguage = 'en'
  try {
    const endpoint = `${process.env.API_OF_CATEGORY}${req.query.category}&language=${currentLanguage}`

    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Key': `${process.env.API_KEY}`,
    }

    const response = await fetch(endpoint, { headers })
    const data = await response.json()

    if (data.status === 'error') {
      throw new Error(data.error)
    } else {
      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
