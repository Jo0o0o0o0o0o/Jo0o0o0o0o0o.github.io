<template>
  <div class="home-container">
    <div class="content-wrapper">
      <div class="welcome-section">
        <h3>Welcome to My Website</h3>
        <p>
          Hello! I am a student at KTH, studying for a Master's degree in Interactive Media
          Technology.
        </p>
        <p>Please do take a look at my CV <a href="/CV.pdf">right here</a> and portfolio</p>
        <p>You can contact me at <a href="mailto:yuzhai@kth.se">yuzhai@kth.se</a></p>
      </div>

      <div class="project-section">
        <router-link to="/project1" class="project-link">
          <img src="@/assets/01logo.png" alt="enter project 1" class="project-image" />
          <p class="project-description">Extended Reality/User Experience/Interface Design</p>
        </router-link>

        <router-link to="/project2" class="project-link">
          <img src="@/assets/02logo.png" alt="enter project 2" class="project-image" />
          <p class="project-description">
            Interface Design/User Experience/Artificial Intelligence
          </p>
        </router-link>

        <router-link to="/project3" class="project-link">
          <img src="@/assets/03logo.png" alt="enter project 3" class="project-image" />
          <p class="project-description">
            Product Design/Interface Design/System Design/Programming
          </p>
        </router-link>

        <router-link to="/project4" class="project-link">
          <img src="@/assets/04logo.png" alt="enter project 4" class="project-image" />
          <p class="project-description">
            Human-computer interaction/Augmented Reality/Arduino Prototype
          </p>
        </router-link>

        <router-link to="/project5" class="project-link">
          <img src="@/assets/05logo.png" alt="enter project 4" class="project-image" />
          <p class="project-description">System Design/Product Design/Economy</p>
        </router-link>

        <router-link to="/project6" class="project-link">
          <img src="@/assets/06logo.png" alt="enter project 4" class="project-image" />
          <p class="project-description">Upgraded Project5/ Graduation Design</p>
        </router-link>

        <router-link to="/project7" class="project-link">
          <img src="@/assets/07logo.png" alt="enter project 4" class="project-image" />
          <p class="project-description">Other works/Product Design</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #e5eae5;
  margin-top: 75px;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding-left: 0rem;
}

.welcome-section {
  text-align: left;
  padding-right: 2rem;
}

.welcome-section h3 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #32d823;
  font-weight: bold;
}

.welcome-section p {
  margin: 1rem 0;
  line-height: 1.6;
  color: #2b2b2b;
  font-size: 1.2rem;
}

.project-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.project-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  flex: 0 0 calc(33.333% - 1rem);
  margin-bottom: 1.5rem;
}

.project-link:nth-child(4),
.project-link:nth-child(5) {
  flex: 0 0 calc(33.333% - 1rem);
}

.project-link:hover {
  transform: scale(1.02);
}

.project-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.project-description {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #666;
  text-align: center;
}

a {
  color: #0b6f02;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #0c9100;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .welcome-section {
    text-align: center;
    padding-right: 0;
  }

  .project-section {
    flex-direction: column;
    align-items: center;
  }

  .project-image {
    max-width: 100%;
  }
}
</style>
