import NewsListCategory from './NewsListCategory'

interface ParamsProps {
  params: {
    category: string
  }
}

export default function News({ params: { category } }: ParamsProps) {
  return (
    <section>
      <NewsListCategory category={category} />
    </section>
  )
}
