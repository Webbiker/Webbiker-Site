<template>
  <div>
    <h1>
      {{ page?.title || 'Over Webbiker' }}
      <small>{{ page?.subtitle || 'Joost Brommert' }}</small>
    </h1>
    <div v-if="page?.content" v-html="page.content" />
    <template v-else>
      <p>
        Proin aliquet, metus at mollis tincidunt, dui quam facilisis nunc, quis congue felis mi sed libero.
        Sed a dignissim nisl. Morbi vitae magna fermentum, auctor tellus vel, pulvinar metus.
      </p>
      <p>
        <img src="/media/placeholders/terminator_2.jpg" alt="Terminator 2">
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('about')
const page = computed(() => (data.value as any)?.data?.attributes ?? null)

useHead({ title: 'Over Webbiker – Webbiker.nl' })
</script>
