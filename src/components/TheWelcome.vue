<template>
  <div
    class="text-gray-800 relative h-screen overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] font-poppins">

    <!-- Navbar -->
    <header class="absolute top-0 left-0 w-full flex justify-between items-center px-6 sm:px-12 lg:px-20 py-6 z-50">
      <div class="flex  text-2xl font-bold text-gray-800">
        <img src="/logo.png" alt="Hricho Logo" class="h-6.5 sm:h-6.5 mr-2" />
        hricho
      </div>
      <button
        class="bg-gradient-to-r from-purple-500 to-purple-700 cursor-pointer text-white px-5 py-2 rounded-md font-semibold text-sm shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
        Eksplor
      </button>
    </header>

    <!-- HERO SECTION -->
    <section
      class="relative flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-white to-purple-200 overflow-hidden pt-8 sm:pt-0">
      <!-- Left Section -->
      <div class="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-28 md:py-0">
        <!-- Hero Text -->
        <div class="space-y-6 md:space-y-8 mt-14 md:mt-0">
          <span class="inline-block text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            Rambut Sehat
          </span>

          <h1 class="text-[37px] md:text-5xl font-extrabold leading-tight text-gray-900">
            Dapatkan Diagnosis Rambutmu,
            <br class="hidden sm:block" />
            Secara Instan Bersama
            <span class="inline-flex  text-purple-600 ml-1 sm:ml-2">
              <img src="/logo-second.png" alt="hricho logo" class="h-9 sm:h-12" />
              <span class="font-extrabold tracking-tight ml-1">hricho</span>
            </span>
          </h1>

          <p class="text-gray-600 text-base text-sm sm:text-lg leading-relaxed max-w-xl pb-6">
            Platform analisis rambut untuk mendeteksi kondisi kulit kepala dan
            rambutmu secara cepat dan akurat. Temukan solusi perawatan terbaik
            hanya dalam hitungan detik.
          </p>

          <div class="flex items-center justify-center sm:justify-start">
            <button
              class="bg-gradient-to-r from-purple-600  to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg inline-flex items-center gap-2 transition duration-300 hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                class="w-5 h-5 sm:w-6 sm:h-6">
                <path
                  d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
              <router-link to="/questionnare" class="text-white">
                Mulai Analisis Sekarang
              </router-link>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto sm:block hidden">
        <img src="/doctor.jpg" alt="Dokter Hricho" class="absolute inset-0 w-full h-full object-cover object-center" />
      </div>
    </section>

    <!-- FITUR -->
    <section class="py-16 sm:py-20 bg-white text-center flex flex-col items-center px-4">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold inline-flex flex-wrap items-center justify-center gap-2">
        Fitur Unggulan
        <div class="font-bold text-gray-800 flex">
          <img src="/logo.png" class="h-6 sm:h-8 mr-2" alt="" />
          hricho
        </div>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <div class="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-300 shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg sm:text-xl mb-3 text-blue-700">
            Diagnosis Otomatis
          </h3>
          <p class="text-gray-600 text-sm sm:text-base">
            Sistem kami menganalisis kondisi rambut dan kulit kepala dari foto
            yang kamu unggah.
          </p>
        </div>

        <div class="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-300 shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg sm:text-xl mb-3 text-blue-700">
            Rekomendasi Perawatan
          </h3>
          <p class="text-gray-600 text-sm sm:text-base">
            Dapatkan saran produk dan tindakan perawatan yang disesuaikan dengan
            kebutuhanmu.
          </p>
        </div>

        <div class="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-300 shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-lg sm:text-xl mb-3 text-blue-700">
            Riwayat & Pemantauan
          </h3>
          <p class="text-gray-600 text-sm sm:text-base">
            Pantau perkembangan kesehatan rambutmu secara berkala dengan laporan
            terperinci.
          </p>
        </div>
      </div>
    </section>

    <!-- TESTIMONI -->
    <section
      class="pb-6 sm:py-2 bg-gradient-to-b from-white to-blue-50 text-center flex items-center justify-center px-4">
      <div class="max-w-4xl mx-auto space-y-6">
        <blockquote class="text-xl sm:text-2xl md:text-3xl italic text-gray-700 leading-relaxed">
          “Setelah pakai Thricho, aku bisa tahu penyebab rambut rontokku dalam
          hitungan menit. Sekarang rambutku jauh lebih sehat!”
        </blockquote>

        <div class="flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=120&q=80"
            alt="User" class="w-16 sm:w-20 h-16 sm:h-20 mx-auto rounded-full object-cover mb-3 shadow" />
          <p class="font-semibold text-base sm:text-lg">Sarah Lestari</p>
          <p class="text-gray-500 text-xs sm:text-sm">
            Pengguna Thricho sejak 2025
          </p>
        </div>
      </div>
    </section>

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

    <!-- TEAM -->
    <section class="py-16 bg-white flex justify-center items-center px-4">
      <div class="max-w-6xl mx-auto flex flex-col items-center">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-semibold text-gray-800">Tim Kami</h2>
          <p class="text-gray-500 max-w-2xl mx-auto mt-4">
            Tim di balik pengembangan platform
            <span class="font-semibold text-purple-600">Thricho</span>
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 w-full">
          <div v-for="member in team" :key="member.name"
            class="text-center bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4">
            <img :src="member.image" :alt="member.name"
              class="w-full aspect-auto object-cover h-[20rem] rounded-lg pb-4" />
            <h3 class="text-purple-600 font-semibold text-lg">
              {{ member.name }}
            </h3>
            <p class="text-gray-500 text-sm">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-4 sm:py-20 bg-white flex justify-center relative px-4">
      <div class="w-full max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div class="space-y-5 sm:space-y-7 text-left py-8 sm:py-10">

          <!-- Single FAQ -->
          <details class="group p-4 border rounded-xl shadow-sm transition">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base flex items-center justify-between">
              Apakah analisis Thricho akurat?
              <span class="transition group-open:rotate-45 text-gray-500 text-xl select-none">+</span>
            </summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Sistem kami dilatih dengan ribuan data citra rambut.
            </p>
          </details>

          <details class="group p-4 border rounded-xl shadow-sm transition">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base flex items-center justify-between">
              Apakah hasil diagnosis bisa dipercaya?
              <span class="transition group-open:rotate-45 text-gray-500 text-xl select-none">+</span>
            </summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Didukung pakar dermatologi dan riset klinis.
            </p>
          </details>

          <details class="group p-4 border rounded-xl shadow-sm transition">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base flex items-center justify-between">
              Berapa lama hasil analisis keluar?
              <span class="transition group-open:rotate-45 text-gray-500 text-xl select-none">+</span>
            </summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Hasil analisis tersedia hanya dalam beberapa detik.
            </p>
          </details>

          <details class="group p-4 border rounded-xl shadow-sm transition">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base flex items-center justify-between">
              Apakah data saya aman?
              <span class="transition group-open:rotate-45 text-gray-500 text-xl select-none">+</span>
            </summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Data Anda dienkripsi dan tidak disimpan tanpa izin.
            </p>
          </details>

          <details class="group p-4 border rounded-xl shadow-sm transition">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base flex items-center justify-between">
              Apakah Thricho cocok untuk semua jenis rambut?
              <span class="transition group-open:rotate-45 text-gray-500 text-xl select-none">+</span>
            </summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Ya, sistem dapat menganalisis berbagai jenis rambut & kulit kepala.
            </p>
          </details>
        </div>
      </div>
    </section>


    <!-- FOOTER -->
    <footer class="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div class="sm:px-16 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10  pb-4">

          <!-- Brand -->
          <div class=" text-left">
            <h2 class="text-2xl font-semibold text-white">Thricho</h2>
            <p class="mt-3 text-sm text-gray-400">
              Teknologi analisis rambut untuk kesehatan kulit kepala Anda.
            </p>

            <!-- Social -->
            <div class="flex justify-start space-x-4 mt-4">
              <a href="#" class="hover:text-white transition">Instagram</a>
              <a href="#" class="hover:text-white transition">TikTok</a>
              <a href="#" class="hover:text-white transition">YouTube</a>
            </div>
          </div>

          <!-- Menu -->
          <div class="text-left">
            <h3 class="text-white font-semibold text-lg"></h3>
            <ul class="mt-4 space-y-2 text-sm">
              <li><a href="#" class="hover:text-white transition">Beranda</a></li>
              <li><a href="#" class="hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#" class="hover:text-white transition">Fitur</a></li>
              <li><a href="#" class="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="text-left">
            <h3 class="text-white font-semibold text-lg">Kontak</h3>
            <ul class="mt-4 space-y-2 text-sm">
              <li>Email: support@thricho.com</li>
              <li>WhatsApp: +62 812-3245-4511</li>
              <li>Batam, Indonesia</li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2025 Thricho. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
const team = [
  {
    name: "Surya Tirta Chandra",
    role: "Fullstack Developer",
    image: "/surya.JPG",
  },
  {
    name: "Reva Unieq Faizila",
    role: "UI/UX Designer",
    image: "/reva.jpeg",
  },
  {
    name: "Zahara Putri Nurliati",
    role: "UI/UX Designer",
    image: "/zara.jpeg",
  },
];
</script>

<style scoped></style>
