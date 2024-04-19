<template>
  <div class="container" :class="{ 'q-dark': isDark }">
    <div class="table-container">
      <table class="entretiens-table">
        <thead>
          <tr>
            <th @click="sortColumn('manager')">Manager</th>
            <th @click="sortColumn('date')">Date</th>
            <th @click="sortColumn('time')">Heure</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entretien in sortedEntretiens" :key="entretien.id">
            <td>{{ entretien.manager }}</td>
            <td>{{ entretien.date }}</td>
            <td>{{ entretien.time }}</td>
            <td>
              <star-rating :rating="entretien.rating" :editable="true" @input="updateRating(entretien.id, $event)" />
            </td>
            <td>
              <q-icon
                name="delete"
                class="cursor-pointer"
                @click="deleteEntretien(entretien.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Bouton pour créer un nouvel entretien -->
    <div class="button-container">
      <q-btn
        class="create-button"
        color="primary"
        label="Créer un nouvel entretien"
        @click="redirectToMonProchainEntretien"
      />
    </div>
  </div>
</template>

<script>
import { entretiens, updateEntretiens } from '../router/entretiens.js'
import StarRating from '../pages/StarRating.vue'

export default {
  name: 'MonProchainEntretienPersonnel',
  components: {
    StarRating
  },
  data() {
    return {
      entretiens: entretiens,
      sortDirection: 'asc',
      sortBy: 'date',
      isDark: false
    }
  },
  computed: {
    sortedEntretiens() {
      return this.entretiens.slice().sort((a, b) => {
        if (this.sortDirection === 'asc') {
          return a[this.sortBy] > b[this.sortBy] ? 1 : -1
        } else {
          return a[this.sortBy] < b[this.sortBy] ? 1 : -1
        }
      })
    }
  },
  methods: {
    sortColumn(column) {
      if (this.sortBy === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortBy = column
        this.sortDirection = 'asc'
      }
    },
    // rediriger vers la page user-dashboard
    redirectToUserDashboard() {
      this.$router.push('/user-dashboard')
    },
    // rediriger vers la page MonProchaineEntretien
    redirectToMonProchainEntretien() {
      this.$router.push('/dashboard/mon-prochain-entretien')
    },
    // supprimer un entretien
    deleteEntretien(id) {
      const index = this.entretiens.findIndex(entretien => entretien.id === id)
      if (index !== -1) {
        this.entretiens.splice(index, 1)
        updateEntretiens(this.entretiens) // Mettre à jour les entretiens dans le fichier entretiens.js
      }
    },
    // mise à jour de la note d'entretien
    updateRating(id, rating) {
      const entretien = this.entretiens.find(entretien => entretien.id === id)
      if (entretien) {
        entretien.rating = rating
        updateEntretiens(this.entretiens) // Mettre à jour les entretiens dans le fichier entretiens.js
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table-container {
  width: 80%;
  margin-top:15px;
  margin-bottom: 20px;
}

.entretiens-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  transition: transform 0.2s ease;
}

.entretiens-table th,
.entretiens-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.entretiens-table th {
  background-color: #f2f2f2;
  cursor: pointer;
}

.cursor-pointer {
  cursor: pointer;
}

.button-container {
  width: 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.back-button {
  width: 100px;
  margin-right: 10px;
}

.create-button {
  width: 250px;
}

.table-container:hover .entretiens-table {
  transform: scale(1.05);
}

.q-dark .entretiens-table th,
.q-dark .entretiens-table td {
  border-color: #fff;
}

.q-dark .button-container {
  color: #fff;
}

.q-dark .back-button,
.q-dark .create-button {
  color: #fff; 
}
</style>
