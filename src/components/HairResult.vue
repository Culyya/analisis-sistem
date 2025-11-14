<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
      <h1 class="text-3xl font-bold text-gray-900">Hasil Analisis thricho</h1>
      <p class="text-gray-600 mt-2">
        Berdasarkan jawaban Anda, berikut adalah analisis dan rekomendasi perawatan rambut.
      </p>

      <!-- SECTION -->
      <div class="mt-8 space-y-8">
        <!-- Scalp -->
        <div>
          <h2 class="text-xl font-semibold">Kondisi Kulit Kepala</h2>
          <p class="mt-2 text-gray-700">{{ result.scalpCondition }}</p>
        </div>

        <!-- Damage -->
        <div>
          <h2 class="text-xl font-semibold">Tingkat Kerusakan Rambut</h2>
          <p class="mt-2 text-gray-700">{{ result.damageLevel }}</p>
        </div>

        <!-- Risk -->
        <div>
          <h2 class="text-xl font-semibold">Kebiasaan Berisiko</h2>
          <p class="mt-2 text-gray-700">{{ result.habitsRisk }}</p>
        </div>

        <!-- Caution -->
        <div v-if="result.caution.length">
          <h2 class="text-xl font-semibold text-red-600">Perhatian Khusus</h2>
          <ul class="mt-2 list-disc ml-6 text-gray-700">
            <li v-for="(c, i) in result.caution" :key="i">{{ c }}</li>
          </ul>
        </div>

        <!-- Recommendation -->
        <div>
          <h2 class="text-xl font-semibold text-purple-600">Rekomendasi Produk & Perawatan</h2>
          <ul class="mt-2 list-disc ml-6 text-gray-700">
            <li v-for="(r, i) in result.recommendations" :key="i">{{ r }}</li>
          </ul>
        </div>

        <!-- Weekly routine -->
        <div>
          <h2 class="text-xl font-semibold">Rutinitas Mingguan yang Disarankan</h2>
          <ul class="mt-2 list-disc ml-6 text-gray-700">
            <li v-for="(r, i) in result.weeklyRoutine" :key="i">{{ r }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex justify-end">
        <button
          @click="$emit('restart')"
          class="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Mulai Ulang
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  result: Object
})
</script>
