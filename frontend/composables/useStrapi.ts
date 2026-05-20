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

export interface StrapiNavigationItem extends StrapiData {
  title: string
  url: string
  order?: number
  isExternal?: boolean
  openInNewTab?: boolean
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

  function fetchSingle<T extends StrapiData = StrapiData>(endpoint: string, locale?: string) {
    const localeParam = locale ? `&locale=${locale}` : ''
    return useFetch<StrapiSingleResponse<T>>(
      `${baseUrl}/api/${endpoint}?populate=*${localeParam}`,
      { server: true, key: `${endpoint}-${locale ?? 'default'}` }
    )
  }

  function fetchCollection<T extends StrapiData = StrapiData>(endpoint: string, query = 'populate=*', locale?: string) {
    const localeParam = locale ? `&locale=${locale}` : ''
    return useFetch<StrapiCollectionResponse<T>>(
      `${baseUrl}/api/${endpoint}?${query}${localeParam}`,
      { server: true, key: `${endpoint}-${locale ?? 'default'}` }
    )
  }

  return { fetchSingle, fetchCollection }
}
