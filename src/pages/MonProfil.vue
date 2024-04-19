<template>
  <q-page class="mon-profil-page" :class="{ 'q-dark': isDark }">
    <q-container>
      <h2 class="page-title">Mon Profil</h2>

      <div class="profil-grid">
        <!-- Numéro de téléphone -->
        <div class="grid-item">
          <q-card class="profil-card" :class="{ 'q-dark': isDark }">
            <q-card-section>
              <q-card-title class="profil-card-title">Numéro de téléphone</q-card-title>
              <div v-if="!isEditing.phone" class="profil-info">{{ user.phoneNumber }}</div>
              <q-input v-else v-model="editedUser.phoneNumber" dense outlined />
              <q-btn v-if="!isEditing.phone" flat dense icon="edit" @click="toggleEdit('phone')" />
              <q-btn v-else flat dense icon="done" @click="saveEdit('phone')" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Date d'anniversaire -->
        <div class="grid-item">
          <q-card class="profil-card" :class="{ 'q-dark': isDark }">
            <q-card-section>
              <q-card-title class="profil-card-title">Date d'anniversaire</q-card-title>
              <div v-if="!isEditing.birthDate" class="profil-info">{{ user.birthDate }}</div>
              <q-input v-else v-model="editedUser.birthDate" dense outlined />
              <q-btn v-if="!isEditing.birthDate" flat dense icon="edit" @click="toggleEdit('birthDate')" />
              <q-btn v-else flat dense icon="done" @click="saveEdit('birthDate')" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Salaire -->
        <div class="grid-item">
          <q-card class="profil-card" :class="{ 'q-dark': isDark }">
            <q-card-section>
              <q-card-title class="profil-card-title">Salaire</q-card-title>
              <div v-if="!isEditing.salary" class="profil-info">{{ user.salary }}</div>
              <q-input v-else v-model="editedUser.salary" dense outlined />
              <q-btn v-if="!isEditing.salary" flat dense icon="edit" @click="toggleEdit('salary')" />
              <q-btn v-else flat dense icon="done" @click="saveEdit('salary')" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Job -->
        <div class="grid-item">
          <q-card class="profil-card" :class="{ 'q-dark': isDark }">
            <q-card-section>
              <q-card-title class="profil-card-title">Job</q-card-title>
              <div v-if="!isEditing.job" class="profil-info">{{ user.job }}</div>
              <q-input v-else v-model="editedUser.job" dense outlined />
              <q-btn v-if="!isEditing.job" flat dense icon="edit" @click="toggleEdit('job')" />
              <q-btn v-else flat dense icon="done" @click="saveEdit('job')" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Adresse -->
        <div class="grid-item">
          <q-card class="profil-card" :class="{ 'q-dark': isDark }">
            <q-card-section>
              <q-card-title class="profil-card-title">Adresse</q-card-title>
              <div v-if="!isEditing.address" class="profil-info">{{ user.address }}</div>
              <q-input v-else v-model="editedUser.address" dense outlined />
              <q-btn v-if="!isEditing.address" flat dense icon="edit" @click="toggleEdit('address')" />
              <q-btn v-else flat dense icon="done" @click="saveEdit('address')" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-container>
  </q-page>
</template>

<script>
export default {
  name: 'MonProfil',
  data() {
    return {
      user: {
        phoneNumber: '0123456789',
        birthDate: '01/01/1990',
        salary: '50000€',
        job: 'Développeur',
        address: '123 Rue de la Liberté, 75001 Paris'
      },
      editedUser: {}, // Stocker les données éditées
      isEditing: {
        phone: false,
        birthDate: false,
        salary: false,
        job: false,
        address: false
      },
      isDark: false // Suivi de l'état du mode sombre
    }
  },
  methods: {
    toggleEdit(field) {
      this.editedUser[field] = this.user[field]
      this.isEditing[field] = !this.isEditing[field] // Basculer entre l'édition et la non-édition
    },
    saveEdit(field) {
      this.user[field] = this.editedUser[field]
      this.isEditing[field] = !this.isEditing[field] // Basculer entre l'édition et la non-édition
    }
  }
}
</script>

<style scoped>
.mon-profil-page {
  padding: 10px;
}

.page-title {
  text-align: center;
  margin-bottom: 20px;
}

.profil-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.grid-item {
  margin-bottom: 0px;
}

.profil-card {
  transition: transform 0.3s;
}

.profil-card:hover {
  transform: scale(1.05);
}

.profil-card-title {
  font-size: 18px;
  width: 100%;
}

.profil-info {
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
}

.q-dark .profil-card {
  background-color: #212121;
  color: #fff; 
}
</style>
