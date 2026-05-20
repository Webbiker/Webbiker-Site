<template>
  <div>
    <h1>
      {{ t('portfolio.title') }}
      <small>{{ t('portfolio.subtitle') }}</small>
    </h1>
    <div v-for="item in items" :key="item.id">
      <h2>{{ item.title }}</h2>
      <div v-if="item.description" v-html="renderMarkdown(item.description)" />
      <p v-if="item.image">
        <img
          :src="strapiUrl + item.image.url"
          :alt="item.image.alternativeText || item.title"
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const { renderMarkdown } = useMarkdown()
const config = useRuntimeConfig()
const strapiUrl = config.public.strapiUrl

const { fetchCollection } = useStrapi()
const { data } = await fetchCollection('portfolio-items', 'populate=*', locale.value)
const items = computed(() => data.value?.data ?? [])

useHead({ title: t('meta.portfolio') })
</script>
