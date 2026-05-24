<template>
  <div>
    <h1 class="heading--avatar">
      <img src="/assets/img/header/avatar.jpg" alt="Joost Brommert - Webdesigner" class="avatar">
      {{ page?.title || 'Joost Brommert' }}
      <small>{{ page?.subtitle || 'Webdesigner' }}</small>
    </h1>
    <div v-if="page?.content" v-html="renderMarkdown(page.content)" />
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const { renderMarkdown } = useMarkdown()
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('home', locale)
const page = computed(() => data.value?.data ?? null)

useHead({ title: t('meta.home') })
</script>
