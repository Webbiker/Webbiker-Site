<template>
  <Transition name="loader">
    <div v-if="loading" class="loader__overlay" />
  </Transition>
</template>

<script setup lang="ts">
const loading = ref(true)

onMounted(() => {
  loading.value = false
})
</script>

<style scoped>
.loader-leave-active {
  transition: opacity 0.5s ease;
}
.loader-leave-to {
  opacity: 0;
}
</style>
