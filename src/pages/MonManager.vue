<template>
  <div class="mon-manager">
    <h1>Profil du Manager</h1>
    <div class="manager-info">
      <div class="info-item">
        <div class="info-label">Nom et Prénom :</div>
        <div class="info-value">John Doe</div>
      </div>
      <div class="info-item">
        <div class="info-label">Poste :</div>
        <div class="info-value">Directeur des ventes</div>
      </div>
      <div class="info-item">
        <div class="info-label">Disponibilité :</div>
        <div class="info-value">Lundi - Vendredi, 9h00 - 17h00</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonManager'
}
</script>

<style scoped>
.mon-manager {
  text-align: center;
  padding: 20px;
}

.manager-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-item {
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
}

/* Effet de zoom au survol */
.info-item:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
