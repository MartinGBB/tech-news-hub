'use client'
import { memo, useEffect, useState } from 'react'
import NewsCategoryCard from './NewsCategoryCard'

export interface News {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

interface CategoryProps {
  category: string
}

function NewsListCategoryCategory({ category }: CategoryProps) {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const endpoint = `/api/getCategory?category=${category}`
        const response = await fetch(endpoint)

        if (response.ok) {
          const data = await response.json()
          setNews(data.sources)
        } else {
          const errorData = await response.json()
          throw new Error(errorData)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        setHasError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [category])

  if (loading) return <p>loading...</p>
  if (hasError) return <p>Error: An error occurred while loading the news.</p>

  return (
    <section>
      <h1 className="text-3xl text-red-500 font-bold underline">{category}</h1>
      {news.map((news) => (
        <NewsCategoryCard key={news.id} news={news} />
      ))}
    </section>
  )
}

export default memo(NewsListCategoryCategory)
