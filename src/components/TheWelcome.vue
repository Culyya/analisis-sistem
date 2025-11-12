<template>
  <div class="font-sans text-gray-800 overflow-x-hidden">

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-purple-50 px-6 text-center">
      <header class="absolute top-0 left-0 w-full flex justify-between items-center p-6  mx-auto">
        <div class="text-2xl font-bold text-gray-800">Look</div>
        <nav class="hidden md:flex space-x-8 justify-between mx-auto items-center text-gray-600 font-medium">
          <a href="#" class="hover:text-gray-900">Product Hub</a>
          <a href="#" class="hover:text-gray-900">Explore</a>
          <a href="#" class="hover:text-gray-900">Contacts</a>
        </nav>
        <div class="gap-4">
          <button class="text-blue-600 font-semibold hover:underline ">Sign Up</button>
          <button class="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 shadow-sm transition">Login</button>
        </div>
      </header>

      <div class="max-w-4xl mx-auto mt-32 md:mt-40 space-y-8">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
          Find the Perfect Care, <br />
          Compare Clinics <span class="text-purple-600">Seamlessly</span>
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover top healthcare options with ease. Enter two clinic websites, and we’ll
          highlight key differences in services, facilities, and reviews.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <input
            type="text"
            placeholder="Enter First Website URL"
            class="px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none w-full md:w-80"
          />
          <input
            type="text"
            placeholder="Enter Second Website URL"
            class="px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none w-full md:w-80"
          />
        </div>

        <button
          class="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-lg mt-6"
        >
          Start Comparison
        </button>
      </div>

      <!-- Floating Cards -->
      <div class="absolute bottom-10 left-10 bg-white rounded-xl shadow-lg px-4 py-2 text-sm font-semibold text-purple-600">
        $2000 Value Pricing
      </div>
      <div class="absolute bottom-10 right-10 bg-white rounded-xl shadow-lg px-4 py-2 text-sm font-semibold text-blue-600">
        49823 Daily Comparisons
      </div>

      <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-purple-200 opacity-30 blur-3xl rounded-full -z-10"></div>
    </section>

    <!-- WHAT YOU'LL LEARN -->
    <section class="py-20 bg-white text-center flex flex-col items-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">What You'll Learn Inside</h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div class="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-xl mb-3 text-blue-700">Causes of Hair Loss</h3>
          <p class="text-gray-600">Understand the hidden triggers and how to fix them naturally.</p>
        </div>
        <div class="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-xl mb-3 text-blue-700">Actionable Solutions</h3>
          <p class="text-gray-600">Learn the step-by-step method that has helped thousands regrow hair.</p>
        </div>
        <div class="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
          <h3 class="font-semibold text-xl mb-3 text-blue-700">Expert Guidance</h3>
          <p class="text-gray-600">Follow advice backed by years of medical research and case studies.</p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="py-20 bg-gradient-to-b from-white to-blue-50 text-center flex items-center justify-center">
      <div class="max-w-4xl mx-auto space-y-6 px-6">
        <blockquote class="text-2xl md:text-3xl italic text-gray-700 leading-relaxed">
          “This book is the missing piece that helps you reclaim not just your hair — but your confidence.”
        </blockquote>
        <div class="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=120&q=80"
            alt="Author"
            class="w-20 h-20 mx-auto rounded-full object-cover mb-3 shadow"
          />
          <p class="font-semibold">Dr. John Smith</p>
          <p class="text-gray-500 text-sm">Author of Grow It Back</p>
        </div>
      </div>
    </section>

    <!-- BOOK PREVIEW -->
    <section class="py-20 bg-white flex justify-center">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div class="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80"
            alt="Grow It Back Book"
            class="rounded-xl shadow-lg w-[350px] md:w-[400px] object-cover"
          />
        </div>
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold">A Revolution in Hair Restoration</h2>
          <p class="text-gray-600">
            “Grow It Back” reveals a step-by-step approach backed by research and real success stories.
          </p>
          <ul class="list-disc list-inside text-left space-y-2 text-gray-700">
            <li>Scientifically proven techniques</li>
            <li>Simple lifestyle changes</li>
            <li>Backed by dermatologists</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center flex justify-center">
      <div class="max-w-4xl mx-auto space-y-6 px-6">
        <h2 class="text-3xl md:text-4xl font-bold">How much is keeping your hair worth to you?</h2>
        <p class="text-lg text-blue-100">
          Take action now — stop hair loss before it’s too late.
        </p>
        <button
          class="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg"
        >
          Get the Book Today
        </button>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-white flex justify-center relative">
      <div class="min-w-3xl mx-auto text-center px-6">
        <h2 class="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <div class="space-y-6 text-left py-10">
          <details class="p-4 border rounded-xl shadow-sm">
            <summary class="font-semibold cursor-pointer">Does it really work?</summary>
            <p class="mt-2 text-gray-600">
              Yes, the methods shared are based on proven clinical studies and real user results.
            </p>
          </details>
          <details class="p-4 border rounded-xl shadow-sm">
            <summary class="font-semibold cursor-pointer">Is this suitable for all ages?</summary>
            <p class="mt-2 text-gray-600">
              It’s suitable for adults and safe for both men and women.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gray-900 text-gray-300 py-10 text-center">
      <p>© 2025 Grow It Back. All rights reserved.</p>
      <div class="mt-4 space-x-4">
        <a href="#" class="hover:text-white transition">Facebook</a>
        <a href="#" class="hover:text-white transition">Instagram</a>
        <a href="#" class="hover:text-white transition">YouTube</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
// kosong, karena tidak ada interaksi dinamis
</script>

<style>
/* TailwindCSS akan handle styling */
</style>
