import NewsListCategory from './NewsListCategory'

interface ParamsProps {
  params: {
    category: string
  }
}

export default async function News({ params: { category } }: ParamsProps) {
  console.log(category)
  return (
    <section>
      <NewsListCategory category={category} />
    </section>
  )
}
