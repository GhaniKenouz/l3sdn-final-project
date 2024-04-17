<template>
  <q-page class="flex flex-center">
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

          <q-card-actions align="right">
            <q-btn label="Se connecter" type="submit" color="primary" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      // comparer les identifiants saisis avec des identifiants prédéfinis pour l'administrateur
      if (this.username === 'admin' && this.password === 'admin123') {
        // Connexion réussie pour l'administrateur
        console.log('Connexion en tant qu\'administrateur réussie')
        // Redirection vers une page spécifique pour l'administrateur
        this.$router.push('/admin-dashboard')
      } else {
        // Identifiants incorrects, affichez un message d'erreur ou effectuez une action appropriée
        console.log('Identifiants administrateur incorrects')
      }
    }
  }
}
</script>
