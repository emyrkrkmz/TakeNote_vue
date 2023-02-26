<template>
  
    <NavBar />

    <v-container class="mt-15">
      <RouterView />
    </v-container>


    <FooterBar />
</template>

<script setup>

import FooterBar from '@/components/Layout/FooterBar.vue';
import NavBar from '@/components/Layout/NavBar.vue'


</script>

<style>
#app {
  background: url('/src/assets/mini.jpg')
    center center fixed !important;
  background-size: cover;
}
</style>