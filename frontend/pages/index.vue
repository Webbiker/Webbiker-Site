<template>
  <div>
    <h1 class="heading--avatar">
      <img src="/assets/img/header/avatar.jpg" alt="Joost Brommert - Webdesigner" class="avatar">
      {{ page?.title || 'Joost Brommert' }}
      <small>{{ page?.subtitle || 'Webdesigner' }}</small>
    </h1>
    <div v-if="page?.content" v-html="page.content" />
    <template v-else>
      <p>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut molestias, voluptatum cumque aut nostrum,
          nisi sint voluptates illo repellat quis voluptate iure quos dolorum ullam incidunt vitae quisquam tempore
          possimus. <NuxtLink to="/about">Over Webbiker</NuxtLink>.
        </strong>
      </p>
      <p>
        Dolorem eius a aliquam, corporis nihil nobis itaque culpa, quod qui recusandae quibusdam laboriosam
        obcaecati, reiciendis, nesciunt voluptate aspernatur. Iure quos recusandae dolore? Voluptas itaque error,
        cupiditate deleniti quibusdam vel! Incidunt aliquam facere odio blanditiis suscipit aspernatur?
      </p>
      <blockquote>You can't handle the truth!</blockquote>
      <p>
        Curabitur laoreet pulvinar dui, vitae interdum ligula tincidunt at. Cras rhoncus velit urna, vel eleifend
        orci accumsan ut. Aliquam eget consequat massa, eget vulputate elit.
      </p>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut molestias, voluptatum cumque aut nostrum,
        nisi sint voluptates illo repellat quis voluptate iure quos dolorum ullam incidunt vitae quisquam tempore.
      </p>
      <p>
        <NuxtLink to="/about" class="button">Over Webbiker</NuxtLink>
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('home')
const page = computed(() => (data.value as any)?.data?.attributes ?? null)

useHead({ title: 'Webbiker.nl – Joost Brommert, Webdesigner' })
</script>
