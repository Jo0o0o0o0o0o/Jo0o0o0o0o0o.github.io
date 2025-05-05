<script setup lang="ts">
import image61 from '@/assets/61.png'
import image62 from '@/assets/62.png'
import image63 from '@/assets/63.png'
import image64 from '@/assets/64.png'
import image65 from '@/assets/65.png'
import image66 from '@/assets/66.png'
import image67 from '@/assets/67.png'
import image68 from '@/assets/68.png'
import image69 from '@/assets/69.png'
import image70 from '@/assets/70.png'

const images = [
  {
    id: '1',
    src: image61,
    title: '1',
  },
  {
    id: '2',
    src: image62,
    title: '2',
  },
  {
    id: '3',
    src: image63,
    title: '3',
  },
  {
    id: '4',
    src: image64,
    title: '4',
  },
  {
    id: '5',
    src: image65,
    title: '5',
  },
  {
    id: '6',
    src: image66,
    title: '6',
  },
  {
    id: '7',
    src: image67,
    title: '7',
  },
  {
    id: '8',
    src: image68,
    title: '8',
  },
  {
    id: '9',
    src: image69,
    title: '9',
  },
  {
    id: '10',
    src: image70,
    title: '10',
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
  background-color: #e5eae5;
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
