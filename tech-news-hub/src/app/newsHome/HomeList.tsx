'use client'
import { memo, useEffect, useState } from 'react'
import LoadingNewsEverything from '@/app/components/loadingSkeletors/NewsEverything'
import { fetchNews } from '@/app/utils/fetchData'
import NewsCard from './NewsCard'

export interface News {
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
}

function HomeList() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  const pageSize = '10'
  const page = '1'
  const sortBy = 'popularity'
  useEffect(() => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_HOME}?sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`

    async function fetchData() {
      const newsData = await fetchNews(endpoint)

      try {
        if (newsData && !newsData.error) {
          setNews(newsData.articles)
        } else {
          setHasError(true)
          throw new Error(newsData.error)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        setHasError(true)
      } finally {
        // setLoading(false)
      }
    }
    fetchData()
  })

  if (loading) return <LoadingNewsEverything />
  if (hasError) return <p>Error: An error occurred while loading the news.</p>

  return (
    <section className="grid grid-cols-3 gap-4">
      {news.map((news: News, index: number) => (
        <NewsCard key={index} news={news} large={index % 5 === 0} />
      ))}
    </section>
  )
}

export default memo(HomeList)
