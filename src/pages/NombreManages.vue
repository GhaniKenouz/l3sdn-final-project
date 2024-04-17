<template>
  <q-page class="nombre-manages">
    <q-toolbar>
      <q-toolbar-title>
        Nombre de Manages
      </q-toolbar-title>
    </q-toolbar>

    <table id="manages-table">
      <thead>
        <tr>
          <th @click="sortBy('nom')">Nom (Titre du Job)</th>
          <th @click="sortBy('age')">Âge</th>
          <th>Prénom</th>
          <th>Employé</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(manage, index) in manages" :key="index">
          <td>{{ manage.nom }}</td>
          <td>{{ manage.age }}</td>
          <td>{{ manage.prenom }}</td>
          <td>
            <span class="checked" @click="toggleEmployed(index)">
              {{ manage.employed ? '✔️' : '❌' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </q-page>
</template>

<script>
import jsPDF from 'jspdf/dist/jspdf.umd'
import 'jspdf-autotable'

export default {
  data() {
    return {
      manages: [
        { nom: 'Directeur Général', age: 35, prenom: 'John', employed: true },
        { nom: 'Commercial', age: 40, prenom: 'Alice', employed: false },
        { nom: 'Chef de projet', age: 32, prenom: 'Bob', employed: true }
      ],
      sortByColumn: null,
      sortAscending: true
    }
  },
  methods: {
    sortBy(column) {
      if (column === this.sortByColumn) {
        this.sortAscending = !this.sortAscending
      } else {
        this.sortByColumn = column
        this.sortAscending = true
      }
      this.manages.sort((a, b) => {
        if (this.sortAscending) {
          return a[column] > b[column] ? 1 : -1
        } else {
          return a[column] < b[column] ? 1 : -1
        }
      })
    },
    toggleEmployed(index) {
      this.manages[index].employed = !this.manages[index].employed
    },
    generatePDF() {
      const doc = new jsPDF()
      const tableData = this.manages.map((manage) => [
        manage.nom,
        manage.age,
        manage.prenom,
        manage.employed ? '✔️' : '❌'
      ])
      doc.autoTable({
        head: [['Nom (Titre du Job)', 'Âge', 'Prénom', 'Employé']],
        body: tableData
      })
      doc.save('manages.pdf')
    }
  }
}
</script>

<style scoped>
.nombre-manages {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  cursor: pointer;
}

th:hover {
  background-color: #f2f2f2;
}

.checked {
  color: green;
  cursor: pointer;
}
</style>
