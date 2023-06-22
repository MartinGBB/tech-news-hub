import NewsCard from './NewsCard'

export default async function HomeList() {
  const endpoint = `https://newsapi.org/v2/everything?q=from=2023-06-21&to=2023-06-21&sortBy=popularity&pageSize=10`
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': `${process.env.API_KEY}`,
    },
  })

  const data = await response.json()
  console.log(data.articles)
  return (
    <section className="grid grid-cols-2 gap-4">
      {data.articles.map((news, index) => (
        <NewsCard key={index} news={news} large={index % 3 === 0} />
      ))}
    </section>
  )
}
