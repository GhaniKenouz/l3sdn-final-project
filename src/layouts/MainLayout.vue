<template>
  <q-layout :view="isDark ? 'lHh Lpr lFf dark' : 'lHh Lpr lFf'">
    <q-header elevated class="custom-toolbar">
      <q-toolbar>
        <!-- Bouton pour le darkmode -->
        <q-icon
          style="font-size: 1.2rem; margin-right: 10px"
          class="moon-icon"
          :name="isDark ? 'wb_sunny' : 'brightness_3'"
          @click="toggleDarkMode"
        />

        <!-- Bouton de déconnexion dans la barre d'outils -->
        <q-btn flat dense icon="logout" aria-label="Déconnexion" @click="goTo('ConnexionUser')" />
      </q-toolbar>
    </q-header>

    <q-page-container :class="{ 'q-dark': isDark }" class="login-page">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const router = useRouter()
    const isDark = ref(false)

    onMounted(() => {
      router.push('/ConnexionUser')
    })

    const goTo = (page) => {
      router.push('/' + page)
    }

    const toggleDarkMode = () => {
      isDark.value = !isDark.value
    }

    return {
      isDark,
      goTo,
      toggleDarkMode
    }
  }
})
</script>

<style scoped>
.custom-toolbar {
  background-color: grey;
}

.moon-icon {
  cursor: pointer;
}

.login-page {
  background-image: url('../assets/teamwork.jpg');
  background-size: cover;
  height: 100vh;
}
</style>
