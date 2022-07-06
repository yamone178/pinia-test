<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>

    

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <router-link :to="{name: 'jobView'}">Jobview</router-link>
      </nav>
    
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

nav a.router-link-exact-active {
 background: yellow
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

</style>
