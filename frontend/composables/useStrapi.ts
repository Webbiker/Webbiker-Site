import { isRef, type Ref } from 'vue'

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

  function fetchSingle<T extends StrapiData = StrapiData>(endpoint: string, locale?: Ref<string> | string) {
    const loc = () => isRef(locale) ? locale.value : locale
    const watchSources = isRef(locale) ? [locale as Ref<string>] : []
    return useFetch<StrapiSingleResponse<T>>(
      () => `${baseUrl}/api/${endpoint}?populate=*${loc() ? `&locale=${loc()}` : ''}`,
      { server: true, key: `${endpoint}-${loc() ?? 'default'}`, watch: watchSources }
    )
  }

  function fetchCollection<T extends StrapiData = StrapiData>(endpoint: string, query = 'populate=*', locale?: Ref<string> | string) {
    const loc = () => isRef(locale) ? locale.value : locale
    const watchSources = isRef(locale) ? [locale as Ref<string>] : []
    return useFetch<StrapiCollectionResponse<T>>(
      () => `${baseUrl}/api/${endpoint}?${query}${loc() ? `&locale=${loc()}` : ''}`,
      { server: true, key: `${endpoint}-${loc() ?? 'default'}`, watch: watchSources }
    )
  }

  return { fetchSingle, fetchCollection }
}
