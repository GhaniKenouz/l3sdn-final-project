<template>
  <q-page class="dashboard-page">
    <q-container>
      <h2 class="dashboard-title">Dashboard</h2>

      <q-card-group class="dashboard-cards">
        <!-- Nombre de managés -->
        <q-item clickable tag="a" :to="{ path: '/nombre-manages' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Nombre de managés</q-card-title>
              <div class="text-h6">5</div>
              <!-- Exemple de nombre de managés -->
              <div class="category-description">
                Nombre total de gestionnaires dans l'entreprise
              </div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Prochain entretien -->
        <q-item clickable tag="a" :to="{ path: '/prochain-entretien' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Prochain entretien</q-card-title>
              <div class="text-h6">25 avril 2024</div>
              <!-- Exemple de date de prochain entretien -->
              <div class="category-description">Date du prochain entretien planifié</div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Mon manager -->
        <q-item clickable tag="a" :to="{ path: '/mon-manager' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Mon manager</q-card-title>
              <div class="text-h6">John Doe</div>
              <!-- Exemple de nom de manager -->
              <div class="category-description">Nom de votre superviseur ou manager</div>
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Mon prochain entretien personnel -->
        <q-item clickable tag="a" :to="{ path: '/prochain-entretien-personnel' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title"
                >Mon prochain entretien personnel</q-card-title
              >
              <div class="text-h6">30 avril 2024</div>
              <!-- Exemple de date de prochain entretien personnel -->
              <div class="category-description">Date de votre prochain entretien personnel</div>
            </q-card-section>
          </q-card>
        </q-item>
      </q-card-group>
    </q-container>
  </q-page>
</template>

<script>
export default {
  name: 'user-dashboard'
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
  flex: calc(50% - 20px); /* Largeur initiale */
  margin-bottom: 0px;
  transition: transform 0.3s; /* Animation au survol */
}

.dashboard-card:hover {
  transform: scale(1.05); /* Zoom au survol */
}

.dashboard-card-title {
  font-size: 30px;
  width: 100%; /* Largeur de la carte */
}

.category-description {
  font-size: 14px; /* Taille de police */
  margin-top: 5px; /* Espacement par rapport au titre */
}

.q-item {
  min-width: 110px; /* Largeur minimale */
  min-height: 90px; /* Hauteur minimale */
  padding: 0px; /* Espacement interne */
  padding-top: 0px;
  margin-left: 5%;
  margin-top: 5%;
  padding-bottom: 0px;
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
}

.q-card {
  font-size: 10px; /* Taille de police */
  font-weight: 500; /* Poids de la police */
}
</style>
