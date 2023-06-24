'use client'
import { memo, useEffect, useState } from 'react'
import NewsCategoryCard from './NewsCategoryCard'

import dynamic from 'next/dynamic'

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

const Load = () => {
  const skeletor = 'animate-pulse bg-gray-200 rounded-md h-4'
  const repeat = [...Array(3).keys()]
  return (
    <>
      <h1 className={`${skeletor} w-24 my-9`}></h1>
      {repeat.map((_, i) => {
        return (
          <div
            key={i}
            className="animate-pulse bg-white rounded-lg shadow-md p-4 m-2"
          >
            <h2 className={`${skeletor} mb-2`}></h2>
            <p className={`${skeletor} mb-4 w-8/12`}></p>
            <p className={`${skeletor} mt-2 w-12`}></p>
          </div>
        )
      })}
    </>
  )
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

  if (loading) return <Load />
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

export default memo(NewsListCategoryCategory)
