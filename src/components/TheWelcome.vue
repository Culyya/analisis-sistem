<template>
  <div
    class="text-gray-800 relative h-screen  overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] font-poppins">

    <!-- HERO SECTION -->
     <section class="relative flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-white to-purple-200 overflow-hidden">
    <!-- Left Section -->
    <div class="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
      <!-- Navbar -->
      <header class="absolute top-0 left-0 w-full flex justify-between items-center px-6 sm:px-12 lg:px-20 py-6 z-50">
        <div class="flex items-center text-2xl font-bold text-gray-800">
          <img src="/logo.png" alt="Hricho Logo" class="h-8 mr-2" />
          hricho
        </div>
        <button
          class="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-5 py-2 rounded-md font-semibold text-sm shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Eksplor
        </button>
      </header>

      <!-- Hero Text -->
      <div class="mt-32 md:mt-0 space-y-6 md:space-y-8">
        <span class="inline-block text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
          Rambut Sehat
        </span>

        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Dapatkan Diagnosis Rambutmu,
          <br class="hidden sm:block" />
          Secara Instan Bersama
         <span class="inline-flex text-purple-600 ml-1 sm:ml-2"> <img src="../../public/logo-second.png" alt="hricho logo" class="h-10 sm:h-12" /> <span class="font-extrabold tracking-tight ml-1">hricho</span> </span>
        </h1>

        <p class="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl pb-4">
          Platform analisis rambut untuk mendeteksi kondisi kulit kepala dan rambutmu secara cepat dan akurat.
          Temukan solusi perawatan terbaik hanya dalam hitungan detik.
        </p>

        <div>
          <button
            class="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg inline-flex items-center gap-2 transition duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
              class="w-5 h-5 sm:w-6 sm:h-6">
              <path
                d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
            Mulai Analisis Sekarang
          </button>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="relative w-full md:w-1/2 h-[60vh] md:h-auto">
      <img
        src="/doctor.jpg"
        alt="Dokter Hricho"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <!-- overlay lembut supaya teks tetap kontras -->
      
    </div>
  </section>

    <!-- FITUR -->
    <section class="py-16 sm:py-20 bg-white text-center flex flex-col items-center px-4">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold inline-flex flex-wrap items-center justify-center gap-2">
        Fitur Unggulan
        <div class="font-bold text-gray-800 flex">
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

  <section class="py-16 bg-white flex justify-center items-center">
  <div class="max-w-6xl mx-auto px-4 flex flex-col items-center">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-semibold text-gray-800">Our Team</h2>
      <p class="text-gray-500 max-w-2xl mx-auto mt-4">
        Tim di balik pengembangan platform <span class="font-semibold text-purple-600">Thricho</span> —
        gabungan antara profesional di bidang teknologi, kesehatan, dan desain untuk menghadirkan solusi analisis rambut yang cepat, akurat, dan intuitif.
      </p>
    </div>

    <!-- Team Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
      <!-- Member 1 -->
      <div class="text-center bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4">
        <img
          src="../../public/surya.JPG"
          alt="Surya Pratama"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <h3 class="text-gray-800 font-semibold text-lg">Surya Tirta Chandra</h3>
        <p class="text-gray-500 text-sm">Fullstack Developer</p>
      </div>

      <!-- Member 2 -->
      <div class="text-center bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4">
        <img
          src="../../public/reva.jpeg"
          alt="Nadia Putri"
          class="w-full aspect-square object-cover rounded-lg mb-4"
        />
        <h3 class="text-gray-800 font-semibold text-lg">Reva unieq faizila</h3>
        <p class="text-gray-500 text-sm">UI/UX Designer</p>
      </div>

      <!-- Member 3 -->
      <div class="text-center bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4">
        <img
          src="../../public/zara.jpeg"
          alt="Farhan Rizky"
          class="w-full aspect-square object-cover rounded-lg mb-4"
        />
        <h3 class="text-gray-800 font-semibold text-lg">Zahara Putri Nurliati </h3>
        <p class="text-gray-500 text-sm">Product Designer</p>
      </div>
    </div>
  </div>
</section>


    <!-- FAQ -->
    <section class="py-16 sm:py-20 bg-white flex justify-center relative px-4">
      <div class="w-full max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">Pertanyaan yang Sering Diajukan</h2>
        <div class="space-y-5 sm:space-y-7 text-left py-8 sm:py-10">
          <details class="p-4 border rounded-xl shadow-sm">
            <summary class="font-semibold cursor-pointer text-sm sm:text-base">Apakah analisis Thricho akurat?</summary>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              Ya, sistem kami menggunakan model yang telah dilatih dengan ribuan data citra rambut dan kulit kepala.
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
const team = [
  {
    name: "Surya Tirta Chandra",
    role: "Co-Founder, Chief Architect",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Reva unieq faizila",
    role: "Co-Founder, Architect",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f3b9f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Zahara Putri Nurliati ",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
  },
];
</script>

<style>
/* TailwindCSS sudah mengatur styling */
</style>
