import { News } from './HomeList'

interface NewsProps {
  large: boolean
  news: News
}

export default function NewsCard({ news, large }: NewsProps) {
  const { author, title, description, url, urlToImage, publishedAt } = news
  return (
    <div
      className={`
        bg-white
        shadow-lg
        rounded-lg
        p-6
        mb-4
        ${large ? 'col-span-2' : 'col-span-1'}
      `}
    >
      <div className="mb-4 bg">
        <h2
          className={`
            text-xl
            font-bold
            ${large ? 'text-2xl' : 'text-lg'}
          `}
        >
          {title}
        </h2>
        <p className="text-gray-500 mt-1">By {author}</p>
        <p className="text-gray-500 mt-1">
          {Intl.DateTimeFormat('en', {
            dateStyle: 'long',
            timeStyle: 'short',
          }).format(new Date(publishedAt))}
        </p>
      </div>
      <div className="mb-4">
        <img
          src={urlToImage}
          alt={title}
          className={`w-full h-auto rounded ${large ? 'mb-4' : ''}`}
        />
      </div>
      <p className={`text-gray-600 ${large ? 'text-lg' : ''}`}>{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        Read More
      </a>
    </div>
  )
}
