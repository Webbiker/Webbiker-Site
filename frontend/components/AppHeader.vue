<template>
  <header class="header" :class="{ 'header--sticky': isSticky }">
    <nav class="submenu">
      <div>
        <ul class="submenu__mobile">
          <li>
            <a href="#" aria-label="Open menu" @click.prevent="$emit('openOffcanvas')">
              <svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-menu" /></svg>
            </a>
          </li>
        </ul>
        <ul class="submenu__social">
          <li>
            <a href="#" aria-label="Twitter">
              <svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-twitter" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Facebook">
              <svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-facebook" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn">
              <svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-linkedin" /></svg>
            </a>
          </li>
        </ul>
        <ul class="submenu__language">
          <li><NuxtLink :to="switchLocalePath('nl')" :class="{ active: locale === 'nl' }">NL</NuxtLink></li>
          <li><NuxtLink :to="switchLocalePath('en')" :class="{ active: locale === 'en' }">EN</NuxtLink></li>
        </ul>
      </div>
    </nav>
    <nav class="mainmenu">
      <ul>
        <template v-for="item in leftNavItems" :key="item.id">
          <li>
            <NuxtLink v-if="!item.isExternal" :to="item.url" activeClass="active">{{ item.title }}</NuxtLink>
            <a
              v-else
              :href="item.url"
              :target="item.openInNewTab ? '_blank' : undefined"
              rel="noopener noreferrer"
            >
              {{ item.title }}
            </a>
          </li>
        </template>

        <li>
          <NuxtLink to="/" class="logo" exactActiveClass="">
            <img src="/assets/img/header/logo.svg" alt="Webbiker logo">
          </NuxtLink>
        </li>

        <template v-for="item in rightNavItems" :key="item.id">
          <li>
            <NuxtLink v-if="!item.isExternal" :to="item.url" activeClass="active">{{ item.title }}</NuxtLink>
            <a
              v-else
              :href="item.url"
              :target="item.openInNewTab ? '_blank' : undefined"
              rel="noopener noreferrer"
            >
              {{ item.title }}
            </a>
          </li>
        </template>
      </ul>
    </nav>
    <div class="clouds clouds__horizon" />
    <div class="clouds clouds__cloudone" />
    <div class="clouds clouds__cloudtwo" />
    <div class="clouds clouds__cloudthree" />
  </header>
</template>

<script setup lang="ts">
import type { StrapiNavigationItem } from '~/composables/useStrapi'

const props = defineProps<{ isSticky: boolean; navItems: StrapiNavigationItem[] }>()
defineEmits<{ openOffcanvas: [] }>()

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const leftNavItems = computed(() => {
  const split = Math.ceil(props.navItems.length / 2)
  return props.navItems.slice(0, split)
})

const rightNavItems = computed(() => {
  const split = Math.ceil(props.navItems.length / 2)
  return props.navItems.slice(split)
})
</script>
