<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>Jo's Portfolio</h1>
    <nav>
      <div class="nav-item">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="nav-item">
        <a href="/CV.pdf">My CV</a>
      </div>
      <div class="nav-item">
        <RouterLink to="/project1">Project</RouterLink>
        <DropdownNavItem
          label="服务"
          :items="[
            { text: 'Project 1', href: '/project1' },
            { text: 'Project 2', href: '/project2' },
            { text: 'Project 3', href: '/project3' },
          ]"
        />
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b2b2b;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 3rem;
  background-color: #e5eae5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}

header h1 {
  margin: 0;
  font-size: 1.8rem;
  color: #32d823;
  margin-right: 3rem;
  font-weight: bold;
}

nav {
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-left: 7rem;
}

.nav-item {
  display: flex;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2b2b2b;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

nav a:hover,
nav a.router-link-exact-active {
  color: #34db25;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 1rem;
  }

  nav {
    margin: 1rem 0 0 0;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
