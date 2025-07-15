<template>
  <section id="pendidikan" class="py-20 min-h-screen font-sans edu"> +
    <div class="container mx-auto px-6 md:px-16">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <SectionTitle title="PENDIDIKAN" class="text-gray-800" />
      </div>
      <div class="relative">
        <div
          class="absolute hidden md:block top-0 bottom-0 left-1/2 border-l-2 border-gray-300"
        ></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-10 md:mb-14 w-full relative"
        >
          <div
            :class="[
              'flex flex-col md:flex-row w-full items-center justify-between',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            ]"
          >
            <div class="w-full md:w-1/2 md:px-4 flex justify-end relative">
              <div
                class="hidden md:block absolute top-1/2 w-4 h-4 bg-blue-600 rounded-full z-10"
                :class="
                  index % 2 === 0 ? '-right-2 translate-y-[-50%]' : '-left-2 translate-y-[-50%]'
                "
              ></div>

              <div
                class="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition duration-300 flex items-center gap-4 w-full max-w-md"
                data-aos="fade-up"
              >
                <img
                  :src="edu.image"
                  class="w-14 h-14 object-contain"
                  loading="lazy"
                  :alt="`Logo ${edu.institution}`"
                />
                <div class="text-left w-full">
                  <p class="text-sm font-semibold text-blue-600 mb-1">
                    {{ edu.period }}
                  </p>
                  <h3 class="text-xl font-bold text-gray-800 mb-1">
                    {{ edu.institution }}
                  </h3>
                  <p class="text-gray-600 text-sm">
                    {{ edu.major }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  background-image: linear-gradient(to right, #f5f5f5 , #e0e0e0);
  background-size: cover;
  background-position: center;
}
</style>
