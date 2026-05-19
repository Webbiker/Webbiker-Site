<template>
  <div>
    <h1>
      {{ page?.title || 'Over Webbiker' }}
      <small>{{ page?.subtitle || 'Joost Brommert' }}</small>
    </h1>
    <div v-if="page?.content" v-html="page.content" />
  </div>
</template>

<script setup lang="ts">
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('about')
const page = computed(() => data.value?.data ?? null)

useHead({ title: 'Over Webbiker – Webbiker.nl' })
</script>
