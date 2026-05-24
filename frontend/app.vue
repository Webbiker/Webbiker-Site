<template>
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { usePageLoader } from '~/composables/usePageLoader'

const { show, hideWhenReady } = usePageLoader()

const pageTransition = {
  mode: 'out-in',
  css: false,
  onLeave(el: Element, done: () => void) {
    const htmlEl = el as HTMLElement
    htmlEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
    htmlEl.style.opacity = '0'
    htmlEl.style.transform = 'translateY(8px)'
    setTimeout(done, 300)
  },
  onAfterLeave() {
    show()
  },
  onBeforeEnter(el: Element) {
    const htmlEl = el as HTMLElement
    htmlEl.style.opacity = '0'
    htmlEl.style.transform = 'translateY(8px)'
  },
  onEnter(el: Element, done: () => void) {
    hideWhenReady(el, () => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
      htmlEl.style.opacity = '1'
      htmlEl.style.transform = 'translateY(0)'
      setTimeout(done, 300)
    })
  },
}
</script>
