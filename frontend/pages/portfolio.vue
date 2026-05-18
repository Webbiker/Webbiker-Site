<template>
  <div>
    <h1>
      Portfolio
      <small>Work from the past</small>
    </h1>
    <template v-if="items?.length">
      <div v-for="item in items" :key="item.id">
        <h2>{{ item.attributes.title }}</h2>
        <p v-if="item.attributes.description">{{ item.attributes.description }}</p>
        <p v-if="item.attributes.image?.data">
          <img
            :src="strapiUrl + item.attributes.image.data.attributes.url"
            :alt="item.attributes.image.data.attributes.alternativeText || item.attributes.title"
          >
        </p>
      </div>
    </template>
    <template v-else>
      <p>
        Dolorem eius a aliquam, corporis nihil nobis itaque culpa, quod qui recusandae quibusdam laboriosam
        obcaecati, reiciendis, nesciunt voluptate aspernatur.
      </p>
      <p><img src="/media/placeholders/prometheus.jpg" alt="Prometheus"></p>
      <p><img src="/media/caroussel/klompenschuurtje.jpg" alt="Klompenschuurtje"></p>
      <p><img src="/media/caroussel/natec.jpg" alt="Natec"></p>
      <p><img src="/media/caroussel/randwyck.jpg" alt="Randwyck"></p>
    </template>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const strapiUrl = config.public.strapiUrl

const { fetchCollection } = useStrapi()
const { data } = await fetchCollection('portfolio-items')
const items = computed(() => (data.value as any)?.data ?? [])

useHead({ title: 'Portfolio – Webbiker.nl' })
</script>
