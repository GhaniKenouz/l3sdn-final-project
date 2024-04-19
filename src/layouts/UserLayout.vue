<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="custom-toolbar">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Menu</q-toolbar-title>

        <q-icon
          style="font-size: 1.2rem; margin-right: 2px; margin-top:2px"
          class="moon-icon"
          :name="isDark ? 'wb_sunny' : 'brightness_3'"
          @click="toggleDarkMode"
        />

        <!-- Bouton Home -->
        <q-btn flat dense icon="home" aria-label="Home" @click="goToDashboard" />

        <!-- Bouton de déconnexion dans la barre d'outils -->
        <q-btn flat dense icon="logout" aria-label="Déconnexion" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :class="{ 'q-dark': isDark }" show-if-above bordered>
      <q-list>
        <!-- Liste des liens vers les différentes pages -->
        <q-item v-for="link in links" :key="link.path" clickable  @click="goTo(link.path)">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>{{ link.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container :class="{ 'q-dark': isDark }">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'UserLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const router = useRouter()
    const isDark = ref(false) 

    // Définition des liens du menu
    const links = [
      { path: 'user-dashboard', label: 'Dashboard Utilisateur', icon: 'dashboard' },
      { path: 'nombre-manages', label: 'Nombre de Manages', icon: 'group' },
      { path: 'mon-prochain-entretien', label: 'Mon Prochain Entretien', icon: 'event' },
      { path: 'mon-manager', label: 'Mon Manager', icon: 'assignment_ind' },
      { path: 'mon-prochain-entretien-personnel', label: 'Mon Prochain Entretien Personnel', icon: 'event' },
      { path: 'mon-profil', label: 'Mon Profil', icon: 'person' }
    ]

    const goTo = (path) => {
      router.push('/dashboard/' + path)
    }

    const goToDashboard = () => {
      router.push('/dashboard/user-dashboard')
    }

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const toggleDarkMode = () => {
      isDark.value = !isDark.value
    }

    const logout = () => {
      router.push('/ConnexionUser')
    }

    return {
      leftDrawerOpen,
      isDark,
      links,
      toggleLeftDrawer,
      toggleDarkMode,
      logout,
      goTo,
      goToDashboard
    }
  }
})
</script>

<style scoped>
.q-page-container {
  height: 100%;
}
.custom-toolbar {
  background-color: grey; /* Change la couleur de la toolbar en gris */
}
.moon-icon {
  cursor: pointer;
}

.menu--dark {
  background-color: dark;
  color: white;
}

.q-dark .q-drawer__content {
  background-color: #121212; /* Changer la couleur de fond pour le mode sombre */
}

.body--dark {
  background-color: #121212;
}
</style>
