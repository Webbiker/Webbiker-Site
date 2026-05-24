<template>
  <div>
    <AppLoader />
    <div class="wrapper">
      <AppOffcanvas
        :is-open="offcanvasOpen"
        :nav-items="navItems"
        @close="offcanvasOpen = false"
      />
      <AppHeader
        :is-sticky="isSticky"
        :nav-items="navItems"
        @open-offcanvas="offcanvasOpen = true"
      />
      <main class="main" id="main-content">
        <article>
          <slot />
        </article>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StrapiNavigationItem } from '~/composables/useStrapi'
import { useStrapi } from '~/composables/useStrapi'

const offcanvasOpen = ref(false)
const isSticky = ref(false)

const { locale, t } = useI18n()
const localePath = useLocalePath()
const { fetchCollection } = useStrapi()

const { data: menuData } = await fetchCollection<StrapiNavigationItem>(
  'navigation-items',
  'populate=*&sort=order:asc',
  locale
)

const fallbackNavItems = computed<StrapiNavigationItem[]>(() => [
  { id: 1, title: t('nav.about'), url: '/about', order: 1, documentId: '', createdAt: '', updatedAt: '' },
  { id: 2, title: t('nav.portfolio'), url: '/portfolio', order: 2, documentId: '', createdAt: '', updatedAt: '' },
  { id: 3, title: t('nav.services'), url: '/services', order: 3, documentId: '', createdAt: '', updatedAt: '' },
  { id: 4, title: t('nav.contact'), url: '/contact', order: 4, documentId: '', createdAt: '', updatedAt: '' },
])

const normalizeNavUrl = (item: any): string => {
  if (item.isExternal || !item.url) return item.url ?? '#'
  const path = item.url.startsWith('/') ? item.url : `/${item.url}`
  return localePath(path)
}

const navItems = computed<StrapiNavigationItem[]>(() => {
  const items = (menuData.value as any)?.data ?? []
  return items.length
    ? items.map((item: any) => ({
        id: item.id,
        title: item.title,
        url: normalizeNavUrl(item),
        order: item.order,
        isExternal: item.isExternal,
        openInNewTab: item.openInNewTab,
        documentId: item.documentId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
      }))
    : fallbackNavItems.value
})

onMounted(() => {
  const handleScroll = () => {
    isSticky.value = window.scrollY > 40
  }
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
