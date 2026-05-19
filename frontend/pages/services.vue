<template>
  <div>
    <h1>
      {{ page?.title || 'Diensten' }}
      <small>{{ page?.subtitle || 'Wat kan Webbiker voor u doen?' }}</small>
    </h1>
    <div v-if="page?.content" v-html="page.content" />
  </div>
</template>

<script setup lang="ts">
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('services')
const page = computed(() => data.value?.data ?? null)

useHead({ title: 'Diensten – Webbiker.nl' })
</script>
