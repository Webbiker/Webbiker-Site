export interface StrapiImage {
  data?: {
    attributes?: {
      url: string
      alternativeText?: string
      width?: number
      height?: number
    }
  }
}

export interface StrapiAttributes {
  title?: string
  subtitle?: string
  content?: string
  description?: string
  image?: StrapiImage
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface StrapiItem {
  id: number
  attributes: StrapiAttributes
}

export interface StrapiSingleResponse<T = StrapiAttributes> {
  data: { id: number; attributes: T }
  meta: Record<string, unknown>
}

export interface StrapiCollectionResponse<T = StrapiAttributes> {
  data: Array<{ id: number; attributes: T }>
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
