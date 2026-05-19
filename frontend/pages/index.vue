<template>
  <div>
    <h1 class="heading--avatar">
      <img src="/assets/img/header/avatar.jpg" alt="Joost Brommert - Webdesigner" class="avatar">
      {{ page?.title || 'Joost Brommert' }}
      <small>{{ page?.subtitle || 'Webdesigner' }}</small>
    </h1>
    <div v-if="page?.content" v-html="page.content" />
  </div>
</template>

<script setup lang="ts">
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('home')
const page = computed(() => data.value?.data ?? null)

useHead({ title: 'Webbiker.nl – Joost Brommert, Webdesigner' })
</script>
