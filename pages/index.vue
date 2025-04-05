<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="text-5xl font-extrabold text-center text-white animate-fade-in">Mastering Nuxt</h1>
      <p class="text-lg text-center text-gray-200 mt-4 animate-fade-in-delayed">Master the art of Nuxt.js with interactive learning.</p>
      <div class="mt-6 text-center">
        <NuxtLink to="/course/chapter/1-introduction-to-web-development/lesson/4-setting-up-dev-environment" class="cta-button animate-bounce">
          Start Course 🚀
        </NuxtLink>
      </div>
    </section>
    
    <!-- Course Overview -->
    <section class="overview py-12 px-6">
      <h2 class="text-4xl font-bold text-center text-white">What You Will Learn</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div class="course-card">
          <h3 class="text-2xl font-semibold">Nuxt Basics</h3>
          <p class="text-gray-600">Understand the core concepts of Nuxt.js, including layouts, pages, and components.</p>
        </div>
        <div class="course-card">
          <h3 class="text-2xl font-semibold">State Management</h3>
          <p class="text-gray-600">Master Vuex and Pinia for managing application state efficiently.</p>
        </div>
        <div class="course-card">
          <h3 class="text-2xl font-semibold">API Integrations</h3>
          <p class="text-gray-600">Learn how to fetch and manage data from APIs using Nuxt's built-in features.</p>
        </div>
        <div class="course-card">
          <h3 class="text-2xl font-semibold">SEO Optimization</h3>
          <p class="text-gray-600">Enhance your Nuxt applications for better search engine rankings.</p>
        </div>
        <div class="course-card">
          <h3 class="text-2xl font-semibold">Performance Optimization</h3>
          <p class="text-gray-600">Learn best practices to make your Nuxt app fast and scalable.</p>
        </div>
        <div class="course-card">
          <h3 class="text-2xl font-semibold">Deploying Nuxt Apps</h3>
          <p class="text-gray-600">Get hands-on experience with deploying your Nuxt applications.</p>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="testimonials py-12 px-6">
      <h2 class="text-4xl font-bold text-center text-white">What Our Students Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div class="testimonial-card">
          <p class="text-gray-300">“This course helped me land my first frontend developer job! The best Nuxt.js resource out there.”</p>
          <h4 class="text-xl font-semibold text-yellow-300 mt-4">- Alex M.</h4>
        </div>
        <div class="testimonial-card">
          <p class="text-gray-300">“The explanations and hands-on projects are amazing. Highly recommended!”</p>
          <h4 class="text-xl font-semibold text-yellow-300 mt-4">- Sarah L.</h4>
        </div>
        <div class="testimonial-card">
          <p class="text-gray-300">“I went from beginner to pro in just weeks! This course is a game-changer.”</p>
          <h4 class="text-xl font-semibold text-yellow-300 mt-4">- Michael T.</h4>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="cta-section py-12 px-6 text-center">
      <h2 class="text-4xl font-bold text-white animate-fade-in">Join Now & Master Nuxt.js!</h2>
      <p class="text-lg text-gray-300 mt-4 animate-fade-in-delayed">Don’t miss out on your opportunity to become a Nuxt expert.</p>
      <NuxtLink to="/course/chapter/1-introduction-to-web-development/lesson/4-setting-up-dev-environment" class="cta-button animate-pulse mt-6">
        Start Learning Today 🎯
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
// No additional script needed as this is a static promotional component
</script>

<style scoped>
.home-page {
  background: linear-gradient(to right, #1a1a2e, #16213e);
  min-height: 100vh;
  color: white;
  padding: 20px;
}
.hero {
  text-align: center;
}
.cta-button {
  background: linear-gradient(to right, #ff0080, #ff8c00);
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s;
}
.cta-button:hover {
  transform: scale(1.05);
}
.overview, .testimonials, .cta-section {
  text-align: center;
}
.course-card, .testimonial-card {
  background: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
.animate-fade-in-delayed {
  animation: fade-in 1.5s ease-in-out;
}
.animate-bounce {
  animation: bounce 1.5s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>
