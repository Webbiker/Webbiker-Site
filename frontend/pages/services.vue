<template>
  <div>
    <h1>
      {{ page?.title || 'Diensten' }}
      <small>{{ page?.subtitle || 'Wat kan Webbiker voor u doen?' }}</small>
    </h1>
    <div v-if="page?.content" v-html="page.content" />
    <template v-else>
      <p>
        Dolorem eius a aliquam, corporis nihil nobis itaque culpa, quod qui recusandae quibusdam laboriosam
        obcaecati, reiciendis, nesciunt voluptate aspernatur. Iure quos recusandae dolore? Voluptas itaque error,
        cupiditate deleniti quibusdam vel!
      </p>
      <p>
        <img src="/media/placeholders/back_to_the_future.jpg" alt="Back to the Future">
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('services')
const page = computed(() => (data.value as any)?.data?.attributes ?? null)

useHead({ title: 'Diensten – Webbiker.nl' })
</script>
