<template>
  <div class="nombre-manages">
    <h2>Nombre de Manages (Admin)</h2>
    <q-btn color="primary" @click="addNewManage">Ajouter un manage</q-btn>
    <div class="table-container">
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
              <q-icon name="edit" @click="editManage(index)" />
              <span class="button-space"></span> <!-- Ajouter un espace -->
              <q-icon name="delete" @click="deleteManage(index)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <q-modal v-if="dialogVisible" v-model="dialogVisible" position="top" class="dialog">
      <h3>{{ editedIndex !== null ? 'Modifier' : 'Ajouter' }} le manage</h3>
      <q-input v-model="editedManage.nom" label="Nom (Titre du Job)" />
      <q-input v-model="editedManage.age" type="number" label="Âge" />
      <q-input v-model="editedManage.prenom" label="Prénom" />
      <q-input v-model="editedManage.salaire" type="number" label="Salaire" />
      <q-input v-model="editedManage.adresse" label="Adresse" />
      <q-input v-model="editedManage.telephone" label="Numéro de téléphone" />
      <q-checkbox v-model="editedManage.employed" label="Employé" />
      <q-btn color="primary" @click="saveChanges">{{ editedIndex !== null ? 'Modifier' : 'Ajouter' }}</q-btn>
      <q-btn color="negative" @click="cancelChanges">Annuler</q-btn>
    </q-modal>

    <q-overlay v-if="dialogVisible" />
  </div>
</template>

<script>
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
      dialogVisible: false,
      editedManage: {
        nom: '',
        age: null,
        prenom: '',
        salaire: null,
        adresse: '',
        telephone: '',
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
        salaire: null,
        adresse: '',
        telephone: '',
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
        salaire: null,
        adresse: '',
        telephone: '',
        employed: false
      }
      this.editedIndex = null
      this.dialogVisible = false
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

.table-container {
  overflow: hidden;
}

.button-space {
  margin-left: 10px; /* Ajustez la valeur selon vos besoins */
}
</style>
