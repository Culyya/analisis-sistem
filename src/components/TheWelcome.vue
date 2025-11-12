<template>
  <div
    class="text-gray-800 relative min-h-screen font-poppins overflow-auto [-ms-overflow-style:none] [scrollbar-width:none]">

    <!-- HERO SECTION -->
    <section
      class="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-purple-200 text-center overflow-hidden px-5 sm:px-6">

      <!-- Header -->
      <header class="absolute top-0 left-0 w-full px-5 sm:px-10 py-4 sm:py-6 flex justify-between items-center">
        <div class="flex items-center text-xl sm:text-2xl font-bold text-gray-800">
          <img src="../../public/logo.png" class="h-6 sm:h-7 mr-2" alt="Hricho Logo" />
          hricho
        </div>
        <button
          class="text-white bg-purple-600 shadow-lg px-4 sm:px-6 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition">
          Eksplor
        </button>
      </header>

      <!-- Hero Text -->
      <div class="max-w-md sm:max-w-4xl mx-auto mt-28 sm:mt-36 space-y-6 sm:space-y-8 px-2 sm:px-6">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Dapatkan Diagnosis Rambutmu,<br class="hidden sm:block" />
          Secara Instan Bersama
          <span class="inline-flex items-center text-purple-600 ml-1 sm:ml-2">
            <img src="../../public/logo-second.png" alt="T logo" class="h-8 sm:h-10 md:h-12" />
            <span class="font-extrabold tracking-tight ml-1">hricho</span>
          </span>
        </h1>

        <p class="text-gray-600 text-base sm:text-lg px-1 sm:px-16 md:px-32 leading-relaxed">
          Platform analisis rambut untuk mendeteksi kondisi kulit kepala dan rambutmu secara cepat dan akurat.
          Temukan solusi perawatan terbaik hanya dalam hitungan detik.
        </p>

        <button
          class="bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-md hover:shadow-lg inline-flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
            <path
              d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
          Mulai Analisis Sekarang
        </button>
      </div>

      <!-- Character Illustration (Hidden on Mobile) -->
      <div class="absolute hidden md:block -bottom-2 left-10 lg:left-44">
        <img src="../../public/character.png" alt="character" class="h-48 md:h-72 lg:h-[20rem]" />
      </div>

      <!-- Badge -->
      <div
        class="absolute bottom-6 sm:bottom-10 right-1/2 sm:right-10 translate-x-1/2 sm:translate-x-0 bg-white rounded-xl shadow-lg px-4 py-2 text-xs sm:text-sm font-semibold text-blue-600">
        49.823 Analisis Harian
      </div>

      <!-- Glow Background -->
      <div
        class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-300 opacity-30 blur-3xl rounded-full -z-10">
      </div>
    </section>


    <!-- FITUR -->
    <section class="py-16 sm:py-20 bg-white text-center flex flex-col items-center px-4">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold inline-flex flex-wrap items-center justify-center gap-2">
        Fitur Unggulan
        <div class="font-bold text-gray-800 flex items-center">
          <img src="../../public/logo.png" class="h-6 sm:h-8 mr-2" alt="Thricho Logo" />
          hricho
        </div>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 py-6">
        <div class="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-300 shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg sm:text-xl mb-3 text-blue-700">Diagnosis Otomatis</h3>
          <p class="text-gray-600 text-sm sm:text-base">Sistem kami menganalisis kondisi rambut dan kulit kepala dari
            foto yang kamu unggah.</p>
        </div>
        <div class="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-300 shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg sm:text-xl mb-3 text-blue-700">Rekomendasi Perawatan</h3>
          <p class="text-gray-600 text-sm sm:text-base">Dapatkan saran produk dan tindakan perawatan yang disesuaikan
            dengan kebutuhanmu.</p>
        </div>
        <div class="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-300 shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg sm:text-xl mb-3 text-blue-700">Riwayat & Pemantauan</h3>
          <p class="text-gray-600 text-sm sm:text-base">Pantau perkembangan kesehatan rambutmu secara berkala dengan
            laporan terperinci.</p>
        </div>
      </div>
    </section>

    <!-- TESTIMONI -->
    <section
      class="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50 text-center flex items-center justify-center px-4">
      <div class="max-w-4xl mx-auto space-y-6">
        <blockquote class="text-xl sm:text-2xl md:text-3xl italic text-gray-700 leading-relaxed">
          “Setelah pakai Thricho, aku bisa tahu penyebab rambut rontokku dalam hitungan menit. Sekarang rambutku jauh
          lebih sehat!”
        </blockquote>
        <div class="flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=120&q=80"
            alt="User" class="w-16 sm:w-20 h-16 sm:h-20 mx-auto rounded-full object-cover mb-3 shadow" />
          <p class="font-semibold text-base sm:text-lg">Sarah Lestari</p>
          <p class="text-gray-500 text-xs sm:text-sm">Pengguna Thricho sejak 2025</p>
        </div>
      </div>
    </section>

    <!-- TENTANG HRICHO -->
    <section class="py-16 sm:py-20 bg-white flex justify-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="flex justify-center">
          <img
            src="https://cdn1-production-images-kly.akamaized.net/59BjKnUHw1JpeoACVfOsZiAXDsM=/1x52:1000x615/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4321545/original/004054600_1676200201-shutterstock_547263844.jpg"
            alt="Hair Analysis" class="rounded-xl shadow-lg w-[280px] sm:w-[350px] md:w-[400px] object-cover" />
        </div>
        <div class="space-y-4 sm:space-y-6 text-center md:text-left">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">Solusi Cerdas untuk Rambut Sehat</h2>
          <p class="text-gray-600 text-sm sm:text-base">
            Thricho adalah platform berbasis kecerdasan buatan yang membantu menganalisis kondisi rambutmu secara akurat
            dan memberi solusi yang sesuai dengan kebutuhan pribadi.
          </p>
          <ul class="list-disc list-inside text-center sm:text-left pt-4 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Analisis cepat dan akurat</li>
            <li>Didukung oleh ahli dermatologi</li>
            <li>Rekomendasi berbasis data</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="py-16 sm:py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center flex justify-center px-4">
      <div class="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">Mulai Perjalanan Rambut Sehatmu Sekarang!</h2>
        <p class="text-base sm:text-lg text-blue-100 pb-4 pt-4">
          Dapatkan diagnosis pertama kamu secara gratis dan lihat hasilnya dalam hitungan detik.
        </p>
        <button
          class="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg">
          Coba Sekarang
        </button>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 sm:py-20 bg-white flex justify-center relative px-4">
      <div class="w-full max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">Pertanyaan yang Sering Diajukan</h2>
        <div class="space-y-4 sm:space-y-6 text-left py-8 sm:py-10">
          <details class="p-4 border rounded-xl shadow-sm">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base">Apakah analisis Thricho akurat?</summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Ya, sistem kami menggunakan model AI yang telah dilatih dengan ribuan data citra rambut dan kulit kepala.
            </p>
          </details>
          <details class="p-4 border rounded-xl shadow-sm">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base">Apakah hasil diagnosis bisa dipercaya?
            </summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Hasil diagnosis didukung oleh pakar dermatologi dan disertai rekomendasi berbasis penelitian klinis.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gray-900 text-gray-300 py-8 sm:py-10 text-center text-sm sm:text-base">
      <p>© 2025 Thricho. Semua hak cipta dilindungi.</p>
      <div class="mt-4 space-x-2 sm:space-x-4">
        <a href="#" class="hover:text-white transition">Instagram</a>
        <a href="#" class="hover:text-white transition">TikTok</a>
        <a href="#" class="hover:text-white transition">YouTube</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Tidak ada interaksi dinamis
</script>

<style>
/* TailwindCSS sudah mengatur styling */
</style>
