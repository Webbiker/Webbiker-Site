<template>
  <div>
    <h1>
      {{ page?.title || 'Contact' }}
      <small>{{ page?.subtitle || 'Neem contact op' }}</small>
    </h1>
    <div v-if="page?.content" v-html="page.content" />
    <form @submit.prevent="submitForm">
      <p>
        <label for="name">Naam</label><br>
        <input id="name" v-model="form.name" type="text" name="name" required>
      </p>
      <p>
        <label for="email">E-mail</label><br>
        <input id="email" v-model="form.email" type="email" name="email" required>
      </p>
      <p>
        <label for="message">Bericht</label><br>
        <textarea id="message" v-model="form.message" name="message" rows="5" required />
      </p>
      <p>
        <button type="submit" class="button">Verzenden</button>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('contact')
const page = computed(() => data.value?.data ?? null)

const form = reactive({ name: '', email: '', message: '' })

function submitForm() {
  // TODO: wire up to Strapi contact form endpoint or external service
  alert('Bedankt voor uw bericht!')
  Object.assign(form, { name: '', email: '', message: '' })
}

useHead({ title: 'Contact – Webbiker.nl' })
</script>
