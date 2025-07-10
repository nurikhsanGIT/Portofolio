<script setup>
import { RouterView } from 'vue-router'
import bg from '@/assets/foto/backgroundweb.jpg'
</script>

<template>
  <div
    class="font-sans min-h-screen"
    :style="{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <RouterView />
  </div>
</template>
