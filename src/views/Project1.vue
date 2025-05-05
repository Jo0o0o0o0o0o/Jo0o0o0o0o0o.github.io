<script setup lang="ts">
import image00 from '@/assets/00.png'
import image11 from '@/assets/11.png'
import image12 from '@/assets/12.png'
import image13 from '@/assets/13.png'

const images = [
  {
    id: '1',
    src: image00,
    title: '0',
  },
  {
    id: '2',
    src: image11,
    title: '1',
  },
  {
    id: '3',
    src: image12,
    title: '2',
  },
  {
    id: '4',
    src: image13,
    title: '3',
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
