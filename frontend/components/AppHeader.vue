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
          <li><NuxtLink to="/" class="active">NL</NuxtLink></li>
          <li><NuxtLink to="/">EN</NuxtLink></li>
        </ul>
      </div>
    </nav>
    <nav class="mainmenu">
      <ul>
        <li><NuxtLink to="/about" activeClass="active">Over Webbiker</NuxtLink></li>
        <li><NuxtLink to="/portfolio" activeClass="active">Portfolio</NuxtLink></li>
        <li>
          <NuxtLink to="/" class="logo" exactActiveClass="">
            <img src="/assets/img/header/logo.svg" alt="Webbiker logo">
          </NuxtLink>
        </li>
        <li><NuxtLink to="/services" activeClass="active">Diensten</NuxtLink></li>
        <li><NuxtLink to="/contact" activeClass="active">Contact</NuxtLink></li>
      </ul>
    </nav>
    <div class="clouds clouds__horizon" />
    <div class="clouds clouds__cloudone" />
    <div class="clouds clouds__cloudtwo" />
    <div class="clouds clouds__cloudthree" />
  </header>
</template>

<script setup lang="ts">
defineProps<{ isSticky: boolean }>()
defineEmits<{ openOffcanvas: [] }>()
</script>
