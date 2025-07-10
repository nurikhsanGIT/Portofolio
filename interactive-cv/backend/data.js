// backend/data.js
const educationHistory = [
{ id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
{ id: 2, period: '2019 - 2023', institution: 'SMKN 2 BANJARBARU', major: 'TEKNIK KOMPUTER JARINGAN' }
];
const skills = [
{ name: 'Vue.js', level: 'beginner' }, { name: 'JavaScript', level: 'pemula' },
{ name: 'Tailwind CSS', level: 'pemula' }, { name: 'Node.js', level: 'menengah' },
{ name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL', level: 'Menengah' },
{ name: 'Git & GitHub', level: 'Menengah' }, { name: 'HTML5 & CSS3', level: 'Menengah' },
];
const projects = [
{ title: 'Website pengaduan Masyarakat', image: 'https://via.placeholder.com/500x300?text=Proyek+1',
description: 'Platform untuk masyarakat melakukan pengaduan untuk fasilitas publik yang rusak', tech: ['Vue.js', 'Express.js',
'PostgreSQL'], link: '#' },
{ title: 'Aplikasi e-commerce biliard', image: 'https://via.placeholder.com/500x300?text=Proyek+2',
description: 'Aplikasi untuk melacak progres tugas harian.', tech: ['React', 'Firebase'], link: '#' }
];
module.exports = { educationHistory, skills, projects }