import NewsCard from './NewsCard'

export interface News {
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
}

export default async function HomeList() {
  const endpoint = `https://newsapi.org/v2/everything?q=from=2023-06-21&to=2023-06-21&sortBy=popularity&pageSize=10&page=1`
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': `${process.env.API_KEY}`,
    },
  })

  const data = await response.json()
  const dataIsNotNull = data.articles.filter(
    (item: News) => !Object.values(item).includes(null),
  )

  return (
    <section className="grid grid-cols-3 gap-4">
      {dataIsNotNull.map((news: News, index: number) => (
        <NewsCard key={index} news={news} large={index % 5 === 0} />
      ))}
    </section>
  )
}
