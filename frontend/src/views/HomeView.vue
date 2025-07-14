<script setup>
import Navbar from '@/components/NavbarAPP.vue';
import Hero from '@/components/HeroAPP.vue';
import Education from '@/components/EducationAPP.vue';
import Skills from '@/components/SkillsAPP.vue';
import Projects from '@/components/ProjectsAPP.vue';
import Contact from '@/components/ContactAPP.vue';
</script>
<template>
<div>
<Navbar />
<main>
<Hero />
<div v-animate-on-scroll><Education /></div>
<div v-animate-on-scroll><Skills /></div>
<div v-animate-on-scroll><Projects /></div>
<div v-animate-on-scroll><Contact /></div>
</main>
</div>
</template>