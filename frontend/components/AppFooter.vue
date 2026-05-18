<template>
  <footer>
    &copy;{{ year }} Webbiker
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
