'use client'
import { memo, useEffect, useState } from 'react'
import LoadingNewsEverything from '@/app/components/loadingSkeletors/NewsEverything'
import { fetchNews } from '@/app/utils/fetchData'
import NewsCard from './NewsCard'
import { definedLarge } from '../utils/largeLayoutConfig'

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
  const [currentPage, setCurrentPage] = useState<number>(1)

  const pageSize = '10'
  const sortBy = 'popularity'

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const selectPage = (target: EventTarget) => {
    const page = Number((target as HTMLInputElement).value)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const btnPage = [...Array(6).keys()].splice(1)

  useEffect(() => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_HOME}?sortBy=${sortBy}&pageSize=${pageSize}&page=${currentPage}`
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
        setLoading(false)
      }
    }
    fetchData()
  })

  if (loading) return <LoadingNewsEverything />
  if (hasError) return <p>Error: An error occurred while loading the news.</p>

  return (
    <>
      <section className="grid grid-cols-3 gap-4">
        {news.map((news: News, index: number) => (
          <NewsCard key={index} news={news} large={definedLarge(index)} />
        ))}
      </section>
      <div className="flex justify-center my-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md mr-2 disabled:opacity-50"
        >
          Prev
        </button>
        {btnPage.map((btn) => (
          <button
            key={btn}
            value={btn}
            onClick={({ target }) => selectPage(target)}
            className={`
              ${btn === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
              } 
              py-2 px-4 rounded-md mr-2 disabled:opacity-50
              `}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage > 4}
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default memo(HomeList)
