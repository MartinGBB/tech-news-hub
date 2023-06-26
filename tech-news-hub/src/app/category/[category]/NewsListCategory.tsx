'use client'
import { memo, useEffect, useState } from 'react'
import NewsCategoryCard from './NewsCategoryCard'
import LoadingNewsListCategory from '@/app/components/loadingSkeletors/NewsCategory'
import { fetchNews } from '@/app/utils/fetchData'

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

function NewsListCategory({ category }: CategoryProps) {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    const endpoint = process.env.NEXT_PUBLIC_API_CATEGORY + category

    async function fetchData() {
      const newsData = await fetchNews(endpoint)

      try {
        if (newsData && !newsData.error) {
          setNews(newsData.sources)
        } else {
          setHasError(true)
          throw new Error(newsData.error)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        setHasError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [category])

  if (loading) return <LoadingNewsListCategory />
  if (hasError) return <p>Error: An error occurred while loading the news.</p>

  const titleCategory =
    category?.at(0)?.toLocaleUpperCase() + category.substring(1)

  return (
    <section>
      <h1 className="text-3xl font-bold">{titleCategory}</h1>
      {news.map((news) => (
        <NewsCategoryCard key={news.id} news={news} />
      ))}
    </section>
  )
}

export default memo(NewsListCategory)
