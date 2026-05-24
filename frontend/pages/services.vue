<template>
  <div>
    <h1>
      {{ page?.title || t('nav.services') }}
      <small v-if="page?.subtitle">{{ page.subtitle }}</small>
    </h1>
    <div v-if="page?.content" v-html="renderMarkdown(page.content)" />
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const { renderMarkdown } = useMarkdown()
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('services', locale)
const page = computed(() => data.value?.data ?? null)

useHead({ title: t('meta.services') })
</script>
