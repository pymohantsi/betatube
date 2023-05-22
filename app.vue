<template>
  <div :class="{ 'dark': darkMode }">
    <div class="h-screen w-screen bg-transparent relative overflow-hidden">
      <Sidebar />
      <div class="pl-16 h-full w-full absolute top-0 left-0">
        <div class="">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/sidebar';

const darkMode = ref(false);
</script>
