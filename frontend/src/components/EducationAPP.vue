<template>
  <section id="pendidikan" class="py-20 min-h-screen font-sans edu">
    <div class="container mx-auto px-6 md:px-16">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <SectionTitle title="PENDIDIKAN" class="text-black" />
      </div>

      <div class="relative">
        <!-- Garis vertikal tengah desktop -->
        <div class="absolute hidden md:block top-0 bottom-0 left-1/2 border-l-2 border-gray-300"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-10 md:mb-14 w-full relative"
        >
          <!-- Dot atas untuk mobile -->
          <div class="md:hidden w-full flex justify-center mb-4">
            <div class="w-4 h-4 bg-blue-600 rounded-full"></div>
          </div>

          <div class="w-full flex flex-col md:flex-row items-center md:justify-between relative">
            <!-- Card kiri -->
            <template v-if="index % 2 === 0">
              <div class="w-full md:w-[47%] md:pr-4 text-left md:text-right relative">
                <div
                  class="hidden md:block w-4 h-4 bg-blue-600 rounded-full absolute top-1/2 -right-2 -translate-y-1/2 z-10"
                ></div>
                <div
                  class="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition duration-300 w-full max-w-md ml-auto"
                  data-aos="fade-right"
                >
                  <div class="flex items-center gap-4">
                    <img
                      :src="edu.image"
                      class="w-14 h-14 object-contain"
                      loading="lazy"
                      :alt="`Logo ${edu.institution}`"
                    />
                    <div class="text-left w-full">
                      <p class="text-sm font-semibold text-blue-600 mb-1">{{ edu.period }}</p>
                      <h3 class="text-xl font-bold text-gray-800 mb-1">{{ edu.institution }}</h3>
                      <p class="text-gray-600 text-sm">{{ edu.major }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden md:block w-[53%]"></div>
            </template>

            <!-- Card kanan -->
            <template v-else>
              <div class="hidden md:block w-[53%]"></div>
              <div class="w-full md:w-[47%] md:pl-4 text-left relative">
                <div
                  class="hidden md:block w-4 h-4 bg-blue-600 rounded-full absolute top-1/2 -left-2 -translate-y-1/2 z-10"
                ></div>
                <div
                  class="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition duration-300 w-full max-w-md mr-auto"
                  data-aos="fade-left"
                >
                  <div class="flex items-center gap-4">
                    <img
                      :src="edu.image"
                      class="w-14 h-14 object-contain"
                      loading="lazy"
                      :alt="`Logo ${edu.institution}`"
                    />
                    <div class="text-left w-full">
                      <p class="text-sm font-semibold text-blue-600 mb-1">{{ edu.period }}</p>
                      <h3 class="text-xl font-bold text-gray-800 mb-1">{{ edu.institution }}</h3>
                      <p class="text-gray-600 text-sm">{{ edu.major }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Jika tidak ada data -->
        <div v-if="educationHistory.length === 0" class="text-center text-gray-500 mt-10">
          Data pendidikan belum tersedia.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error('Gagal memuat data pendidikan:', error)
  }
})
</script>

<style scoped>
.edu {
  background-image: linear-gradient(to right, #fdfbfb, #ebedee);
  background-size: cover;
  background-position: center;
}
</style>
w