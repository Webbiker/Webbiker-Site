<template>
  <div class="wrapper__offcanvas" :class="{ 'wrapper__offcanvas--open': isOpen }">
    <nav class="offcanvas">
      <div class="offcanvas__list">
        <NuxtLink to="/about" @click="$emit('close')">Over Webbiker</NuxtLink>
        <NuxtLink to="/portfolio" @click="$emit('close')">Portfolio</NuxtLink>
        <NuxtLink to="/services" @click="$emit('close')">Diensten</NuxtLink>
        <NuxtLink to="/contact" @click="$emit('close')">Contact</NuxtLink>
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
defineProps<{ isOpen: boolean }>()
defineEmits<{ close: [] }>()
</script>
