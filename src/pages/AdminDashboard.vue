<template>
  <q-page class="dashboard-page">
    <q-container>
      <h2 class="dashboard-title">Dashboard</h2>

      <q-card-group class="dashboard-cards">
        <!-- Nombre de managés -->
        <q-item clickable tag="a" :to="{ path: '/nombre-manages-admin' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Nombre de managés</q-card-title>
              <div class="text-h6">5</div> <!-- Exemple de nombre de managés -->
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Prochain entretien -->
        <q-item clickable tag="a" :to="{ path: '/prochain-entretien' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Prochain entretien</q-card-title>
              <div class="text-h6">25 avril 2024</div> <!-- Exemple de date de prochain entretien -->
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Mon manager -->
        <q-item clickable tag="a" :to="{ path: '/mon-manager' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Mon manager</q-card-title>
              <div class="text-h6">John Doe</div> <!-- Exemple de nom de manager -->
            </q-card-section>
          </q-card>
        </q-item>

        <!-- Mon prochain entretien personnel -->
        <q-item clickable tag="a" :to="{ path: '/prochain-entretien-personnel' }">
          <q-card class="dashboard-card">
            <q-card-section>
              <q-card-title class="dashboard-card-title">Mon prochain entretien personnel</q-card-title>
              <div class="text-h6">30 avril 2024</div> <!-- Exemple de date de prochain entretien personnel -->
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
  padding: 20px;
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
  margin-bottom: 20px;
}

.dashboard-card-title {
  font-size: 25px;
  width: 100%; /* Largeur de la carte */
}

.q-item {
  min-width: 110px; /* Largeur minimale */
  min-height: 90px; /* Hauteur minimale */
  padding: 10px; /* Espacement interne */
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
}

.q-card {
  font-size: 14px; /* Taille de police */
  font-weight: 400; /* Poids de la police */
}
</style>
