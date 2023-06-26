export async function fetchNews(endpoint: string) {
  try {
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
