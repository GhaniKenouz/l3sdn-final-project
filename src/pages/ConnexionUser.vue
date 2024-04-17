<template>
  <q-page class="login-page">
    <div class="center-container">
      <q-card style="width: 300px;">
        <q-card-section>
          <q-form @submit="onSubmit">
            <q-input
              v-model="username"
              label="Nom d'utilisateur"
              :rules="[val => !!val || 'Champ obligatoire']"
              required
            />

            <q-input
              v-model="password"
              type="password"
              label="Mot de passe"
              :rules="[val => !!val || 'Champ obligatoire']"
              required
            />

            <div v-if="errorMessage" class="text-red">
              {{ errorMessage }}
            </div>

            <q-card-actions align="right">
              <q-btn label="Se connecter" type="submit" color="grey-7" /> <!-- Changement de la couleur en gris -->
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
// méthodes de validation depuis le fichier auth.js dans le répertoire store
import { validateUser, validateAdmin } from '../stores/auth.js'

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '' // Ajout de la variable errorMessage pour afficher les messages d'erreur
    }
  },
  methods: {
    onSubmit() {
      if (validateUser(this.username, this.password)) {
        console.log('Connexion utilisateur réussie')
        this.$router.push('/user-dashboard')
      } else if (validateAdmin(this.username, this.password)) {
        console.log('Connexion administrateur réussie')
        this.$router.push('/admin-dashboard')
      } else {
        // Affiche un message d'erreur lorsque les identifiants sont incorrects
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect. Veuillez réessayer.'
        console.log('Identifiants incorrects')
      }
    }
  }
}
</script>

<style scoped>
/* Styles CSS spécifiques à ce composant */
.login-page {
  background-image: url('../assets/teamwork.jpg');
  background-size: cover;
  height: 100vh; /* Hauteur de la page égale à la hauteur de la fenêtre */
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
