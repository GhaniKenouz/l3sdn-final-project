<template>
  <q-page class="dashboard-page" :class="{ 'q-dark': isDark }">
    <q-container>
      <h2 class="dashboard-title">Dashboard</h2>

      <div class="dashboard-grid">
        <!-- Nombre de managés -->
        <q-item clickable tag="a" :href="'#/dashboard/nombre-manages'" class="grid-item">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-icon name="people" size="40px"/>
              <q-card-title class="dashboard-card-title">Nombre de managés</q-card-title>
              <div class="category-description">
                Nombre total de gestionnaires dans l'entreprise
              </div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Prochain entretien personnel -->
        <q-item clickable tag="a" :href="'#/dashboard/mon-prochain-entretien-personnel'" class="grid-item">
          <q-card v-if="prochainEntretien" class="dashboard-card">
            <q-card-section>
              <q-icon name="schedule" size="40px"/>
              <q-card-title class="dashboard-card-title">Prochain entretien personnel</q-card-title>
              <div class="category-description">Date : {{ prochainEntretien.date }}, Heure : {{ prochainEntretien.time }}</div>
            </q-card-section>
          </q-card>
          <q-card v-else class="dashboard-card">
            <q-card-section>
              <q-icon name="schedule" size="40px"/>
              <q-card-title class="dashboard-card-title">Prochain entretien personnel</q-card-title>
              <div class="category-description">Aucun entretien personnel planifié</div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Mon manager -->
        <q-item clickable tag="a" :href="'#/dashboard/mon-manager'" class="grid-item">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-icon name="supervisor_account" size="40px"/>
              <q-card-title class="dashboard-card-title">Mon manager</q-card-title>
              <div class="category-description">Nom de votre superviseur ou manager</div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Mon profil -->
        <q-item clickable tag="a" :href="'#/dashboard/mon-profil'" class="grid-item">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-icon name="account_circle" size="40px"/>
              <q-card-title class="dashboard-card-title">Mon profil</q-card-title>
              <div class="category-description">Voir mon profil</div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Prochain entretien -->
        <q-item clickable tag="a" :href="'#/dashboard/mon-prochain-entretien'" class="grid-item">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-icon name="event" size="40px"/>
              <q-card-title class="dashboard-card-title">Prochain entretien</q-card-title>
              <div class="category-description">Date du prochain entretien planifié</div>
            </q-card-section>
          </q-card>
        </q-item>
      </div>

    </q-container>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { entretiens, updateEntretiens } from '../router/entretiens.js'

export default {
  name: 'user-dashboard',
  data() {
    return {
      prochainEntretien: null,
      isDark: false // Ajout de la référence pour suivre l'état du mode sombre
    }
  },
  mounted() {
    this.prochainEntretien = this.findNextPersonalEntretien()
  },
  methods: {
    findNextPersonalEntretien() {
      const currentDate = new Date()
      for (const entretien of entretiens) {
        const entretienDate = new Date(entretien.date)
        if (entretienDate >= currentDate) {
          return entretien
        }
      }
      return null
    },
    toggleDarkMode() {
      this.isDark = !this.isDark
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  padding: 1px;
  margin-top: 0.1%;
}

.dashboard-title {
  text-align: center;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-right: 0px;
}

.dashboard-grid {
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
}

.grid-item:nth-child(1) {
  /*grid-column: 1 / 4;   */
  grid-row: 1 / 4;
}

.grid-item:nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
}

.grid-item:nth-child(3) {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

.grid-item:nth-child(4) {
  grid-column: 4 / 1;
  grid-row: 4 / 4;
}

.grid-item:nth-child(5) {
  grid-column: 4 / 3;
  grid-row: 4 / 2;
}

.dashboard-card {
  transition: transform 0.3s;
}

.dashboard-card:hover {
  transform: scale(1.05);
}

.dashboard-card-title {
  font-size: 24px;
  width: 100%;
}

.category-description {
  font-size: 14px;
  margin-top: 10px; /* Augmentation de l'espacement */
}

.q-item {
  min-width: 45%;
  padding: 0px;
  margin: -1.5%;
  color: inherit;
}

.q-card {
  font-size: 10px;
  font-weight: 500;
  width: 100%;
}

/* Styles mode sombre */
.q-dark .dashboard-page {
  background-color: #121212;
}

.q-dark .dashboard-card {
  background-color: #1f1f1f; 
}

.dashboard-title {
  margin-top: 1%;
}

.q-dark .dashboard-title,
.q-dark .category-description {
  color: #fff; /* Changer la couleur du texte pour le mode sombre */
}
</style>
