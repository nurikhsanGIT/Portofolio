<template>
  <section id="skill" class="py-20 min-h-screen font-sans skill-bg">
    <div class="container mx-auto px-6">
      <SectionTitle title="KEAHLIAN" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          :class="[
            getBgColor(skill.level),
            'p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300',
          ]"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

const getBgColor = (level) => {
  switch (level.toLowerCase()) {
    case 'mahir':
      return 'bg-green-100'
    case 'menengah':
      return 'bg-yellow-100'
    default:
      return 'bg-white'
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
.skill-bg {
  background-image: linear-gradient(to bottom, #d4d4d4, #bcbcbc);
  background-size: cover;
  background-position: center;
}
</style>
