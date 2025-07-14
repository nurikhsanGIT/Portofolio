<script setup>
import backgroundImage from '@/assets/foto/backgroundweb.jpg';
</script>

<template>
  <section
    id="profil"
    class="relative bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1
          class="text-5xl font-bold text-white mb-4 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Halo, Saya <span class="text-blue-600">nur ikhsan cleviriadi</span>
        </h1>
        <p class="text-xl text-white mb-8 animate-slide-in-left" style="animation-delay: 400ms">
          Halo, Saya Nur Ikhsan Cleviriadi, Mahasiswa Teknik Informatika yang berfokus pada
          pengembangan web modern dan desain antarmuka yang fungsional serta user-friendly.
        </p>

        <a
          href="#kontak"
          class="bg-[#B8CFCE] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block animate-slide-in-left"
          style="animation-delay: 600ms"
        >
          Hubungi Saya
        </a>
      </div>

      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
        <img
          src="@/assets/foto/fotoprofil.jpg"
          alt="Foto Profil"
          class="w-80 h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
</template>
