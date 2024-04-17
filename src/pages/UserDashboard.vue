<template>
  <q-page class="dashboard-page">
    <q-container>
      <h2 class="dashboard-title">Dashboard</h2>

      <q-card-group class="dashboard-cards">
        <!-- Nombre de managés -->
        <q-item clickable tag="a" :href="'#/nombre-manages'">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Nombre de managés</q-card-title>
              <div class="category-description">
                Nombre total de gestionnaires dans l'entreprise
              </div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Prochain entretien personnel -->
        <q-item clickable tag="a" :href="'#/mon-prochain-entretien-personnel'">
          <q-card v-if="prochainEntretien" class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Prochain entretien personnel</q-card-title>
              <div class="category-description">Date : {{ prochainEntretien.date }}, Heure : {{ prochainEntretien.time }}</div>
            </q-card-section>
          </q-card>
          <q-card v-else class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Prochain entretien personnel</q-card-title>
              <div class="category-description">Aucun entretien personnel planifié</div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Mon manager -->
        <q-item clickable tag="a" :href="'#/mon-manager'">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Mon manager</q-card-title>
              <div class="category-description">Nom de votre superviseur ou manager</div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Prochain entretien -->
        <q-item clickable tag="a" :href="'#/mon-prochain-entretien'">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Prochain entretien</q-card-title>
              <div class="category-description">Date du prochain entretien planifié</div>
            </q-card-section>
          </q-card>
        </q-item>

      </q-card-group>
    </q-container>
  </q-page>
</template>

<script>
import { entretiens, updateEntretiens } from '../router/entretiens.js'

export default {
  name: 'user-dashboard',
  data() {
    return {
      prochainEntretien: null
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
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  padding: 10px;
}

.dashboard-title {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.dashboard-card {
  flex: calc(50% - 20px);
  margin-bottom: 0px;
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
  margin-top: 5px;
}

.q-item {
  min-width: 45%;
  padding: 0px;
  margin: 1%;
  color: inherit;
}

.q-card {
  font-size: 10px;
  font-weight: 500;
}
</style>
