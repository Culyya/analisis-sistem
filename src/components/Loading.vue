<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-500"
    :class="fadeOut ? 'opacity-0' : 'opacity-100'"
  >
   <div class="flex  text-5xl font-bold text-gray-800 pb-4">
        <img src="/logo.png" alt="Hricho Logo" class=" h-10 mr-2" />
        hricho
    </div>
    <!-- Spinner -->
    <div class="animate-spin rounded-full h-10 w-10 border-4  border-purple-500 border-t-transparent mb-4"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visible = ref(true);
const fadeOut = ref(false);

// Set durasi loading (ms)
const LOADING_DURATION = 2500;

onMounted(() => {
  setTimeout(() => {
    fadeOut.value = true;

    // Tambahan delay agar animasi fade-out selesai
    setTimeout(() => {
      visible.value = false;
    }, 500);
  }, LOADING_DURATION);
});
</script>
