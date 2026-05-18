<template>
  <div>
    <AppLoader />
    <div class="wrapper">
      <AppOffcanvas :is-open="offcanvasOpen" @close="offcanvasOpen = false" />
      <AppHeader :is-sticky="isSticky" @open-offcanvas="offcanvasOpen = true" />
      <main class="main" id="main-content">
        <article>
          <slot />
        </article>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const offcanvasOpen = ref(false)
const isSticky = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isSticky.value = window.scrollY > 40
  }
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
