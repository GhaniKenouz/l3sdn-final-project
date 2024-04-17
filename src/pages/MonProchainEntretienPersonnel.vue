<template>
  <div class="container">
    <div class="table-container">
      <table class="entretiens-table">
        <thead>
          <tr>
            <th @click="sortColumn('manager')">Manager</th>
            <th @click="sortColumn('date')">Date</th>
            <th @click="sortColumn('time')">Heure</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entretien, index) in sortedEntretiens" :key="index">
            <td>{{ entretien.manager }}</td>
            <td>{{ entretien.date }}</td>
            <td>{{ entretien.time }}</td>
            <td>
              <q-icon
                name="delete"
                class="cursor-pointer"
                @click="deleteEntretien(index)"
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

    <!-- Bouton pour revenir en arrière vers user-dashboard -->
    <div class="button-container">
      <q-btn
        class="back-button"
        color="primary"
        label="Retour"
        @click="redirectToUserDashboard"
      />
    </div>
  </div>
</template>

<script>
import { entretiens } from '../router/entretiens.js'

export default {
  name: 'MonProchainEntretienPersonnel',
  data() {
    return {
      entretiens: entretiens,
      sortDirection: 'asc',
      sortBy: 'date'
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
    // Méthode pour rediriger vers la page user-dashboard
    redirectToUserDashboard() {
      this.$router.push('/user-dashboard')
    },
    // Méthode pour rediriger vers la page MonProchaineEntretien
    redirectToMonProchainEntretien() {
      this.$router.push('/mon-prochain-entretien')
    },
    // Méthode pour supprimer un entretien
    deleteEntretien(index) {
      this.entretiens.splice(index, 1)
    }
  }
}
</script>

<style scoped>
/* Styles CSS pour les tableaux */
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

/* Animation d'agrandissement léger */
.table-container:hover .entretiens-table {
  transform: scale(1.05);
}
</style>
