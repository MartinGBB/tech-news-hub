import NewsListCategory from './NewsListCategory'

interface ParamsProps {
  params?: {
    category: string
  }
}

export default async function News({ params }: ParamsProps) {
  const currentCategory = params?.category ?? 'general'

  return (
    <section>
      <NewsListCategory category={currentCategory} />
    </section>
  )
}
