<template>
  <LoadingScreen />
  <div class="h-screen overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] font-poppins p-6">
    <div class=" mx-auto  p-8">
      <!-- Header -->
      <div class="flex items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="p-3 bg-purple-100 rounded-xl">
            <!-- simple icon -->
            <svg class="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">Hasil Analisis Thricho</h1>
            <p class="text-sm text-gray-600">Ringkasan kondisi & rekomendasi perawatan rambut</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="downloadPDF"
            type="button"
            class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 shadow"
          >
            Download PDF
          </button>

          <button
            @click="goBack"
            type="button"
            class="px-4 py-2 rounded-lg border border-purple-600 text-purple-700 hover:bg-purple-50"
          >
            Mulai Ulang
          </button>
        </div>
      </div>

      <!-- Main -->
      <div class="pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <!-- Chart card -->
        <div class="lg:col-span-1 bg-white p-4 rounded-xl shadow">
          <div class="flex flex-col items-center">
            <apexchart
              ref="chartRef"
              type="donut"
              :options="chartOptions"
              :series="chartSeries"
              width="260"
            />
            <div class="pt-4 text-center">
              <div class="text-sm text-gray-500">Skor Kesehatan Rambut</div>
              <div class="text-2xl font-extrabold text-gray-800">{{ overallScore }}%</div>
              <div class="text-xs text-gray-400 pt-1">Nilai rata-rata dari kategori</div>
            </div>
          </div>
        </div>

        <!-- Detail cards -->
        <div class="lg:col-span-2 space-y-4 ">
          <div class="pb-4">
          <div class="p-4 rounded-xl bg-gray-50 shadow flex gap-4 ">
            <div class="p-3 bg-purple-100 rounded-lg flex items-center">
              <svg class="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-3 19.5c.5.1.7-.2.7-.5v-3c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.9-.6 2.3-1 .1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 015.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v3.5c0 .3.2.6.7.5A10 10 0 0012 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm text-gray-500">Kondisi Kulit Kepala</div>
                  <div class="text-lg font-semibold text-gray-800 pt-1">{{ result.scalpCondition || '-' }}</div>
                </div>
                <div class="text-sm text-gray-600">{{ result.scoreScalp ?? '-' }}%</div>
              </div>
              <p class="text-sm text-gray-500 pt-2">{{ scalpAdviceShort }}</p>
            </div>
          </div>
          </div>

           <div class="pb-4">
          <div class="p-4 rounded-xl bg-gray-50 shadow flex gap-4">
            <div class="p-3 bg-red-100 rounded-lg flex items-center">
              <svg class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 21h22L12 2zm0 4.8L19.53 19H4.47L12 6.8zm-1 4.7h2v5h-2v-5zm0 6h2v2h-2v-2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm text-gray-500">Tingkat Kerusakan</div>
                  <div class="text-lg font-semibold text-gray-800 mt-1">{{ result.damageLevel || '-' }}</div>
                </div>
                <div class="text-sm text-gray-600">{{ result.scoreDamage ?? '-' }}%</div>
              </div>
              <p class="text-sm text-gray-500 mt-2">{{ damageAdviceShort }}</p>
            </div>
          </div>
          </div>

          <div class="p-4 rounded-xl bg-gray-50 shadow flex gap-4">
            <div class="p-3 bg-yellow-100 rounded-lg flex items-center">
              <svg class="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm text-gray-500">Kebiasaan Berisiko</div>
                  <div class="text-lg font-semibold text-gray-800 pt-1">{{ result.habitsRisk || '-' }}</div>
                </div>
                <div class="text-sm text-gray-600">{{ result.scoreHabits ?? '-' }}%</div>
              </div>
              <p class="text-sm text-gray-500 pt-2">{{ habitsAdviceShort }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Expanded sections -->
      <div class="pt-6 ">
        <div v-if="result.caution?.length" class="p-4 bg-red-50 rounded-xl ">
          <h3 class="text-lg font-semibold text-red-600">Perhatian Khusus</h3>
          <ul class="list-disc ml-6 mt-2 text-gray-700">
            <li v-for="(c, i) in result.caution" :key="i">{{ c }}</li>
          </ul>
        </div>

        <div class="pb-4">
        <div v-if="result.recommendations?.length" class="p-4 bg-purple-50 rounded-xl  ">
          <h3 class="text-lg font-semibold text-purple-600">Rekomendasi Produk & Perawatan</h3>
          <ul class="list-disc pl-6 pt-2 text-gray-700 ">
            <li v-for="(r, i) in result.recommendations" :key="i">{{ r }}</li>
          </ul>
        </div>
        </div>

        <div v-if="result.weeklyRoutine?.length" class="p-4 bg-blue-50 rounded-xl  ">
          <h3 class="text-lg font-semibold text-blue-600">Rutinitas Mingguan</h3>
          <ul class="list-disc pl-6 pt-2 text-gray-700">
            <li v-for="(w, i) in result.weeklyRoutine" :key="i">{{ w }}</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoadingScreen from "./Loading.vue";
import jsPDF from 'jspdf'

const route = useRoute()
const router = useRouter()

const result = JSON.parse(route.query.data || '{}')

// scores
const scoreScalp = Number(result.scoreScalp ?? 60)
const scoreDamage = Number(result.scoreDamage ?? 40)
const scoreHabits = Number(result.scoreHabits ?? 50)

const chartRef = ref(null)

// donut chart values
const chartSeries = ref([scoreScalp, scoreDamage, scoreHabits])

const overallScore = computed(() => {
  return Math.round((scoreScalp + scoreDamage + scoreHabits) / 3)
})

// donut chart configs
const chartOptions = ref({
  labels: ['Kulit Kepala', 'Kerusakan', 'Kebiasaan'],
  colors: ['#7C3AED', '#EF4444', '#F59E0B'],

  legend: { position: 'bottom' },

  tooltip: {
    y: { formatter: val => `${val}%` }
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: true,
          name: { show: true },
          value: {
            show: true,
            formatter: val => `${val}%`
          },
          total: {
            show: true,
            label: 'Rata-rata',
            formatter: () => `${overallScore.value}%`
          }
        }
      }
    }
  }
})

const scalpAdviceShort = result.scalpCondition
  ? `Saran singkat: ${result.scalpCondition}`
  : 'Tidak ada data kulit kepala.'

const damageAdviceShort = result.damageLevel
  ? `Saran singkat: ${result.damageLevel}`
  : 'Tidak ada data kerusakan.'

const habitsAdviceShort = result.habitsRisk
  ? `Saran singkat: ${result.habitsRisk}`
  : 'Tidak ada data kebiasaan.'

function goBack() {
  router.push({ name: 'question' })
}

//
// FIX NO. 1 — Chart instance harus diambil dari: chartRef.value.chart ⬅️
//
async function downloadPDF() {
  try {
    const apex = chartRef.value?.chart // ⬅️ INI FIX PALING KRITIS

    if (!apex) {
      alert('Chart belum siap.')
      return
    }

    //
    // FIX NO. 2 — ambil donut chart jadi image PNG super rapih
    //
    const uri = await apex.dataURI()
    const chartImage = uri.imgURI

    const pdf = new jsPDF('p', 'mm', 'a4')
    let y = 18

    pdf.setFontSize(18)
    pdf.text('Hasil Analisis Thricho', 14, y)
    y += 10

    pdf.setFontSize(11)
    pdf.text(`Nama: ${result.name ?? '-'}`, 14, y); y += 6
    pdf.text(`Umur: ${result.age ?? '-'}`, 14, y); y += 6
    pdf.text(`Gender: ${result.gender ?? '-'}`, 14, y); y += 10

    //
    // FIX NO. 3 — Chart otomatis menyesuaikan ukuran A4
    //
    const imgProps = pdf.getImageProperties(chartImage)
    const width = pdf.internal.pageSize.getWidth() - 28
    const height = (imgProps.height * width) / imgProps.width

    pdf.addImage(chartImage, 'PNG', 14, y, width, height)
    y += height + 15

    pdf.setFontSize(13)
    pdf.text('Ringkasan:', 14, y); y += 8

    pdf.setFontSize(11)
    pdf.text(`Kondisi Kulit Kepala: ${result.scalpCondition ?? '-'}`, 14, y); y += 6
    pdf.text(`Tingkat Kerusakan: ${result.damageLevel ?? '-'}`, 14, y); y += 6
    pdf.text(`Kebiasaan Berisiko: ${result.habitsRisk ?? '-'}`, 14, y); y += 10

    if (result.recommendations?.length) {
      pdf.setFontSize(13)
      pdf.text('Rekomendasi:', 14, y); y += 7

      pdf.setFontSize(11)
      result.recommendations.forEach(r => {
        pdf.text(`- ${r}`, 16, y)
        y += 6

        // page break
        if (y > 270) {
          pdf.addPage()
          y = 20
        }
      })
    }

    pdf.save('hasil-analisis-thricho.pdf')
  } catch (e) {
    console.error(e)
    alert('Gagal membuat PDF.')
  }
}
</script>


<style scoped>
/* small style tweaks */
</style>
