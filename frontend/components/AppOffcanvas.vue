<template>
  <div class="wrapper__offcanvas" :class="{ 'wrapper__offcanvas--open': isOpen }">
    <nav class="offcanvas">
      <div class="offcanvas__list">
        <template v-for="item in navItems" :key="item.id">
          <NuxtLink
            v-if="!item.isExternal"
            :to="item.url"
            @click="$emit('close')"
          >
            {{ item.title }}
          </NuxtLink>
          <a
            v-else
            :href="item.url"
            :target="item.openInNewTab ? '_blank' : undefined"
            rel="noopener noreferrer"
            @click="$emit('close')"
          >
            {{ item.title }}
          </a>
        </template>
      </div>
      <ul class="offcanvas__social">
        <li>
          <a href="#" aria-label="Twitter">
            <svg class="offcanvas__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-twitter" /></svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Facebook">
            <svg class="offcanvas__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-facebook" /></svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="LinkedIn">
            <svg class="offcanvas__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-linkedin" /></svg>
          </a>
        </li>
      </ul>
    </nav>
    <button class="close-button" @click="$emit('close')">Close Menu</button>
  </div>
</template>

<script setup lang="ts">
import type { StrapiNavigationItem } from '~/composables/useStrapi'

defineProps<{ isOpen: boolean; navItems: StrapiNavigationItem[] }>()
defineEmits<{ close: [] }>()
</script>
