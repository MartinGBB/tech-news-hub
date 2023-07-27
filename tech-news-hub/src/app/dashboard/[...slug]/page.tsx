import HomeList from './HomeList'

interface HomeSlugParams {
  params?: { slug: string[] }
}

export default function NewsHome({ params }: HomeSlugParams) {
  const slug = params?.slug || []

  const defaultSlug = ['sortby-popularity', 'pageSize-10', 'page-1']

  const updatedSlug = defaultSlug.map((defaultParam) => {
    const param = slug.find((s: string) =>
      s.startsWith(defaultParam.split('-')[0]),
    )
    if (param) {
      return param
    }
    return defaultParam
  })

  const findParams = (findParam: string) => {
    const currentParam = updatedSlug.find((param: string) =>
      param.startsWith(findParam),
    )
    return currentParam?.split('-')[1]
  }
  const slugParams = {
    sortBy: findParams('sortby-'),
    page_size: findParams('pageSize-'),
    page: findParams('page-'),
  }

  return (
    <section>
      <HomeList queryParams={slugParams} />
    </section>
  )
}
