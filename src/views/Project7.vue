<script setup lang="ts">
import image71 from '@/assets/71.png'

const images = [
  {
    id: '1',
    src: image71,
    title: '1',
  },
]
</script>

<template>
  <div class="project-container">
    <div class="image-gallery">
      <div v-for="image in images" :key="image.id" class="image-item">
        <div class="image-wrapper">
          <img :src="image.src" :alt="image.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  width: 100%;
  max-width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 70px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 100%;
}

.image-item {
  width: 100%;
  overflow: hidden;
}

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

h3 {
  padding: 1rem;
  margin: 0;
  text-align: center;
  color: #333;
  background: #f8f8f8;
  border-bottom: 1px solid #eee;
}

@media (max-width: 768px) {
  .project-container {
    padding: 10px;
  }

  .image-gallery {
    gap: 0rem;
  }
}
</style>
