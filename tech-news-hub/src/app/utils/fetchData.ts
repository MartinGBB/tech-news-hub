export async function fetchNews(category: string) {
  try {
    const endpoint = `/api/getCategory?category=${category}`
    const response = await fetch(endpoint)

    if (response.ok) {
      const data = await response.json()
      return data.sources
    } else {
      const errorData = await response.json()
      throw new Error(errorData)
    }
  } catch (error) {
    console.error('Error fetching news:', error)
    return error
  }
}
