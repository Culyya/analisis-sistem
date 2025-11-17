<template>
  <LoadingScreen />

  <div
  class="relative h-screen overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] 
             w-full bg-purple-600 flex justify-center items-start font-poppins px-4 py-10">

  <!-- HEADER -->
  <header class="fixed sm:absolute top-0 left-0 w-full flex justify-between items-center 
                 px-4 sm:px-10 lg:px-62 py-4 bg-purple-600 z-20">
    <div class="flex text-xl sm:text-2xl font-bold text-white items-center">
      <img src="/logo-third.png" alt="Logo" class="h-6 sm:h-7 mr-2" />
      hricho
    </div>
    <RouterLink
      to="/"
      class="bg-white text-gray-800 px-4 py-2 rounded-md font-semibold 
             text-xs sm:text-sm shadow hover:bg-gray-100">
      Halaman Utama
    </RouterLink>
  </header>

  <!-- MAIN CONTENT WRAPPER -->
  <div class="w-full max-w-5xl pt-12 sm:pt-40 lg:pt-16 pb-20">

    <!-- SCORE CARD -->
    <div class="bg-white rounded-2xl shadow p-6 sm:p-8 text-center border border-gray-100">
      
      <!-- USER TAGS -->
      <div class="flex flex-wrap gap-2 text-sm justify-center mb-4">
        <span class="px-3 py-1 bg-gray-100 rounded-lg">{{ name }}</span>
        <span class="px-3 py-1 bg-gray-100 rounded-lg">{{ age }} Tahun</span>
        <span class="px-3 py-1 bg-gray-100 rounded-lg">{{ gender }}</span>
      </div>

      <div class="flex flex-col items-center">
      <!-- ICON -->
      <div class="pb-4 pt-4">
        <img src="../../public/analisis.png" class="h-20 sm:h-24 text-center" alt="">
      </div>

      <!-- SCORE -->
      <div class="text-4xl sm:text-5xl font-extrabold text-purple-600 leading-tight">
        {{ overallScore }}<span class="text-gray-600 text-2xl sm:text-3xl">/100</span>
      </div>

      <!-- DESCRIPTION -->
      <div class="pt-2 text-gray-600 text-sm max-w-md mx-auto">
        Ringkasan kondisi rambut berdasarkan analisis trikologi, mencakup kulit kepala,
        kerusakan batang rambut, dan kebiasaan yang memengaruhi kesehatan rambut.
      </div>

      <!-- BUTTONS -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        <button
          @click="downloadPDF"
          class="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 
                 border border-gray-300 shadow-lg transition">
          Download Analytic
        </button>

        <RouterLink
          to="/questionnare"
          class="px-4 py-2 rounded-xl bg-gradient-to-r 
                 from-purple-500 to-purple-700 text-white shadow">
          Mulai Ulang
        </RouterLink>
      </div>
      </div>

    </div>

    <!-- GRID DETAIL -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">

      <!-- DONUT CHART -->
      <div class="bg-white p-6 rounded-2xl shadow border border-gray-100 flex flex-col items-center justify-center">
        <apexchart
          ref="chartRef"
          type="donut"
          :options="chartOptions"
          :series="chartSeries"
          width="240"
          class="max-w-full" />

        <div class="text-center pt-4">
          <div class="text-sm text-gray-500">Skor Kesehatan Rambut</div>
          <div class="text-2xl font-bold text-gray-800">{{ overallScore }}%</div>
          <div class="text-xs text-gray-400 pt-1">Nilai rata-rata dari kategori</div>
        </div>
      </div>

      <!-- TEXT DETAILS -->
      <div class="lg:col-span-2 space-y-6">

        <!-- SCALP -->
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow border border-gray-100">
          <div class="p-3 rounded-xl shadow-inner">
            <img src="../../public/hair-care.png" class="h-14 sm:h-16" alt="">
          </div>

          <div class="flex-1">
            <div class="flex justify-between">
              <div>
                <h4 class="text-sm text-gray-600">Kondisi Kulit Kepala</h4>
                <div class="text-lg font-semibold text-gray-800">{{ result.scalpCondition }}</div>
              </div>
              <div class="text-sm text-gray-700 font-medium">{{ scoreScalp }}%</div>
            </div>
            <p class="text-sm text-gray-500 pt-2">{{ scalpAdviceShort }}</p>
          </div>
        </div>

        <div class="pb-4 pt-4">
        <!-- DAMAGE -->
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow border border-gray-100">
          <div class="p-3 rounded-xl shadow-inner">
            <img src="../../public/dandruff.png" class="h-14 sm:h-16" alt="">
          </div>

          <div class="flex-1">
            <div class="flex justify-between">
              <div>
                <h4 class="text-sm text-gray-600">Tingkat Kerusakan</h4>
                <div class="text-lg font-semibold text-gray-800">{{ result.damageLevel }}</div>
              </div>
              <div class="text-sm text-gray-700 font-medium">{{ scoreDamage }}%</div>
            </div>
            <p class="text-sm text-gray-500 pt-2">{{ damageAdviceShort }}</p>
          </div>
        </div>
        </div>

        <!-- HABITS -->
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow border border-gray-100">
          <div class="p-3 rounded-xl shadow-inner">
            <img src="../../public/kering.png" class="h-14 sm:h-16" alt="">
          </div>

          <div class="flex-1">
            <div class="flex justify-between">
              <div>
                <h4 class="text-sm text-gray-600">Kebiasaan Berisiko</h4>
                <div class="text-lg font-semibold text-gray-800">{{ result.habitsRisk }}</div>
              </div>
              <div class="text-sm text-gray-700 font-medium">{{ scoreHabits }}%</div>
            </div>
            <p class="text-sm text-gray-500 pt-2">{{ habitsAdviceShort }}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- EXTRA INFO -->
    <div class="pt-6 space-y-6">

      <div v-if="result.caution?.length" class="p-6 bg-white rounded-2xl shadow">
        <h3 class="text-lg font-semibold text-red-600">Perhatian Khusus</h3>
        <ul class="list-disc pl-6 pt-2 text-gray-700">
          <li v-for="(c, i) in result.caution" :key="i">{{ c }}</li>
        </ul>
      </div>

      <div class="pt-4 pb-4">
      <div v-if="result.recommendations?.length" class="p-6 bg-white rounded-2xl shadow">
        <h3 class="text-lg font-semibold text-purple-600">Rekomendasi Produk & Perawatan</h3>
        <ul class="list-disc pl-6 pt-2 text-gray-700">
          <li v-for="(r, i) in result.recommendations" :key="i">{{ r }}</li>
        </ul>
      </div>
      </div>

      <div v-if="result.weeklyRoutine?.length" class="p-6 bg-white rounded-2xl shadow">
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

const name = computed(() => route.query.name || '')

const gender = computed(() => route.query.gender || '')
const age = computed(() => route.query.age || '')

const userData = {
  name: name.value,
  age: age.value,
  gender: gender.value
}



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
    const apex = chartRef.value?.chart
    if (!apex) {
      alert('Chart belum siap.')
      return
    }

    const uri = await apex.dataURI()
    const chartImage = uri.imgURI

    const pdf = new jsPDF('p', 'mm', 'a4')
    let y = 18

    // Header
    pdf.setFontSize(18)
    pdf.text('Hasil Analisis Thricho', 14, y)
    y += 10

    pdf.setFontSize(11)
    pdf.text(`Nama: ${userData.name}`, 14, y);
    y += 6;

    pdf.text(`Umur: ${userData.age}`, 14, y);
    y += 6;

    pdf.text(`Gender: ${userData.gender}`, 14, y);
    y += 10;


    // CHART
    const imgProps = pdf.getImageProperties(chartImage);
    const width = 80;
    const height = (imgProps.height * width) / imgProps.width;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const xCenter = (pageWidth - width) / 2;
    pdf.addImage(chartImage, 'PNG', xCenter, y, width, height);
    y += height + 12;

    // RINGKASAN
    pdf.setFontSize(13)
    pdf.text('Ringkasan:', 14, y)
    y += 8

    pdf.setFontSize(11)
    pdf.text(`Kondisi Kulit Kepala: ${result.scalpCondition ?? '-'}`, 14, y); y += 6
    pdf.text(`Tingkat Kerusakan: ${result.damageLevel ?? '-'}`, 14, y); y += 6
    pdf.text(`Kebiasaan Berisiko: ${result.habitsRisk ?? '-'}`, 14, y); y += 10

    // -----------------------------------------
    // 🎯 RUTINITAS MINGGUAN (BARU DITAMBAHKAN)
    // -----------------------------------------
    if (result.weeklyRoutine?.length) {
      pdf.setFontSize(13)
      pdf.text('Rutinitas Mingguan:', 14, y)
      y += 8

      pdf.setFontSize(11)
      result.weeklyRoutine.forEach(item => {
        pdf.text(`• ${item}`, 16, y)
        y += 6

        if (y > 270) {
          pdf.addPage()
          y = 20
        }
      })

      y += 6
    }

    // -----------------------------------------
    // REKOMENDASI
    // -----------------------------------------
    if (result.recommendations?.length) {
      pdf.setFontSize(13)
      pdf.text('Rekomendasi:', 14, y);
      y += 8

      pdf.setFontSize(11)
      result.recommendations.forEach(r => {
        pdf.text(`- ${r}`, 16, y)
        y += 6

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
