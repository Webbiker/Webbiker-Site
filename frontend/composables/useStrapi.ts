export interface StrapiImage {
  id: number
  documentId: string
  url: string
  alternativeText?: string
  width?: number
  height?: number
}

export interface StrapiData {
  id: number
  documentId: string
  title?: string
  subtitle?: string
  content?: string
  description?: string
  image?: StrapiImage
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface StrapiPortfolioItem extends StrapiData {
  title: string
  url?: string
  year?: number
}

export interface StrapiSingleResponse<T = StrapiData> {
  data: T
  meta: Record<string, unknown>
}

export interface StrapiCollectionResponse<T = StrapiData> {
  data: T[]
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number }
  }
}

export function useStrapi() {
  const config = useRuntimeConfig()
  const baseUrl = config.public.strapiUrl

  function fetchSingle<T extends StrapiAttributes = StrapiAttributes>(endpoint: string) {
    return useFetch<StrapiSingleResponse<T>>(
      `${baseUrl}/api/${endpoint}?populate=*`,
      { server: true }
    )
  }

  function fetchCollection<T extends StrapiAttributes = StrapiAttributes>(endpoint: string) {
    return useFetch<StrapiCollectionResponse<T>>(
      `${baseUrl}/api/${endpoint}?populate=*`,
      { server: true }
    )
  }

  return { fetchSingle, fetchCollection }
}
