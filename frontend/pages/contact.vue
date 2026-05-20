<template>
  <div>
    <h1>
      {{ page?.title || 'Contact' }}
      <small>{{ page?.subtitle || 'Neem contact op' }}</small>
    </h1>
    <div v-if="page?.content" v-html="renderMarkdown(page.content)" />
    <form @submit.prevent="submitForm">
      <p>
        <label for="name">{{ t('contact.nameLabel') }}</label><br>
        <input id="name" v-model="form.name" type="text" name="name" required>
      </p>
      <p>
        <label for="email">{{ t('contact.emailLabel') }}</label><br>
        <input id="email" v-model="form.email" type="email" name="email" required>
      </p>
      <p>
        <label for="message">{{ t('contact.messageLabel') }}</label><br>
        <textarea id="message" v-model="form.message" name="message" rows="5" required />
      </p>
      <p>
        <button type="submit" class="button">{{ t('contact.sendButton') }}</button>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const { renderMarkdown } = useMarkdown()
const { fetchSingle } = useStrapi()
const { data } = await fetchSingle('contact', locale.value)
const page = computed(() => data.value?.data ?? null)

const form = reactive({ name: '', email: '', message: '' })

function submitForm() {
  alert(t('contact.thanks'))
  Object.assign(form, { name: '', email: '', message: '' })
}

useHead({ title: t('meta.contact') })
</script>
