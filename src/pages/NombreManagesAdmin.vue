<template>
  <div class="nombre-manages">
    <h2>Nombre de Manages (Admin)</h2>
    <button @click="addNewManage">Ajouter un manage</button>
    <table id="manages-table">
      <thead>
        <tr>
          <th>Nom (Titre du Job)</th>
          <th>Âge</th>
          <th>Prénom</th>
          <th>Employé</th>
          <th>Actions</th>
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
          <td>
            <button @click="editManage(index)">Modifier</button>
            <button @click="deleteManage(index)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="dialogVisible">
      <div class="dialog">
        <h3>{{ editedIndex !== null ? 'Modifier' : 'Ajouter' }} le manage</h3>
        <input v-model="editedManage.nom" type="text" placeholder="Nom (Titre du Job)" />
        <input v-model="editedManage.age" type="number" placeholder="Âge" />
        <input v-model="editedManage.prenom" type="text" placeholder="Prénom" />
        <span>
          <input id="employed" v-model="editedManage.employed" type="checkbox" />
          <label for="employed">Employé</label>
        </span>
        <button @click="saveChanges">{{ editedIndex !== null ? 'Modifier' : 'Ajouter' }}</button>
        <button @click="cancelChanges">Annuler</button>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
import 'jspdf-autotable'

export default {
  data() {
    return {
      manages: [
        {
          nom: 'Directeur Général',
          age: 35,
          prenom: 'John',
          employed: true
        },
        {
          nom: 'Commercial',
          age: 40,
          prenom: 'Alice',
          employed: false
        },
        {
          nom: 'Chef de projet',
          age: 32,
          prenom: 'Bob',
          employed: true
        }
      ],
      sortByColumn: null,
      sortAscending: true,
      dialogVisible: false,
      editedManage: {
        nom: '',
        age: null,
        prenom: '',
        employed: false
      },
      editedIndex: null
    }
  },
  methods: {
    toggleEmployed(index) {
      this.manages[index].employed = !this.manages[index].employed
    },
    addNewManage() {
      this.editedManage = {
        nom: '',
        age: null,
        prenom: '',
        employed: false
      }
      this.dialogVisible = true
    },
    editManage(index) {
      this.editedManage = { ...this.manages[index] }
      this.editedIndex = index
      this.dialogVisible = true
    },
    deleteManage(index) {
      this.manages.splice(index, 1)
    },
    saveChanges() {
      if (this.editedIndex !== null) {
        this.manages.splice(this.editedIndex, 1, { ...this.editedManage })
        this.editedIndex = null
      } else {
        this.manages.push({ ...this.editedManage })
      }
      this.dialogVisible = false
    },
    cancelChanges() {
      this.editedManage = {
        nom: '',
        age: null,
        prenom: '',
        employed: false
      }
      this.editedIndex = null
      this.dialogVisible = false
    },
    generatePDF() {

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

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 100;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
</style>
