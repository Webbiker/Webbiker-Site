<template>
  <div>
    <h1>
      Portfolio
      <small>Work from the past</small>
    </h1>
    <div v-for="item in items" :key="item.id">
      <h2>{{ item.title }}</h2>
      <div v-if="item.description" v-html="item.description" />
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
const config = useRuntimeConfig()
const strapiUrl = config.public.strapiUrl

const { fetchCollection } = useStrapi()
const { data } = await fetchCollection('portfolio-items')
const items = computed(() => data.value?.data ?? [])

useHead({ title: 'Portfolio – Webbiker.nl' })
</script>
