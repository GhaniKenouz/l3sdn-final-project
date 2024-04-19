<template>
  <div class="q-pa-md" :class="{ 'q-dark': isDarkMode }">
    <q-stepper ref="stepper" v-model="step" color="primary" animated>
      <!-- Première étape: Message d'introduction -->
      <q-step :name="1" title="Introduction" icon="info" :done="step > 1" style="min-height: 200px">
        <q-banner class="bg-purple-8 text-white q-px-lg">
          Bienvenue ! Vous êtes sur la page de programmation d'entretien. Vous pourrez consulter et
          supprimer cet entretien ultérieurement dans l'onglet 'Mon prochain entretien personnel'.
        </q-banner>
        <q-stepper-navigation>
          <q-btn color="primary" label="Continuer" @click="nextStep"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <!-- Deuxième étape: Choix du manager -->
      <q-step
        :name="2"
        title="Choix du manager"
        icon="people"
        :done="step > 2"
        style="min-height: 200px"
      >
        <q-radio v-model="selectedManager" val="Manager 1" label="Manager 1" />
        <q-radio v-model="selectedManager" val="Manager 2" label="Manager 2" />
        <q-stepper-navigation>
          <q-btn color="primary" label="Continuer" @click="nextStep"></q-btn>
          <q-btn color="primary" label="Retour" class="q-ml-sm" flat @click="prevStep"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <!-- Troisième étape: Choix de la date -->
      <q-step
        :name="3"
        title="Choix de la date"
        icon="event"
        :done="step > 3"
        style="min-height: 200px"
      >
        <!-- En-tête avec une icône pour déployer/replier -->
        <q-item v-ripple clickable @click="toggleDateSelection">
          <q-item-section avatar>
            <q-icon :name="isDateExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Veuillez sélectionner une date</q-item-label>
          </q-item-section>
        </q-item>
        <!-- Composant de sélection de la date -->
        <q-date v-show="isDateExpanded" v-model="selectedDate" calendar="gregorian" locale="fr" />
        <q-stepper-navigation>
          <q-btn color="primary" label="Continuer" @click="nextStep"></q-btn>
          <q-btn color="primary" label="Retour" class="q-ml-sm" flat @click="prevStep"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <!-- Quatrième étape: Choix de l'heure -->
      <q-step
        :name="4"
        title="Choix de l'heure"
        icon="access_time"
        :done="step > 4"
        style="min-height: 200px"
      >
        <!-- Composant de sélection de l'heure -->
        <q-time v-model="selectedTime" locale="fr" />
        <q-stepper-navigation>
          <q-btn color="primary" label="Terminer" @click="finish"></q-btn>
          <q-btn color="primary" label="Retour" class="q-ml-sm" flat @click="prevStep"></q-btn>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import {
  QStepper,
  QStep,
  QBtn,
  QBanner,
  QRadio,
  QDate,
  QTime,
  QIcon,
  QItem,
  QItemSection,
  QItemLabel
} from 'quasar'
import { entretiens } from '../router/entretiens.js'

export default {
  components: {
    QStepper,
    QStep,
    QBtn,
    QBanner,
    QRadio,
    QDate,
    QTime,
    QIcon,
    QItem,
    QItemSection,
    QItemLabel
  },
  data() {
    return {
      step: 1,
      selectedManager: null,
      selectedDate: null,
      selectedTime: null,
      isDarkMode: false,
      isDateExpanded: false 
    }
  },
  methods: {
    nextStep() {
      this.step++
    },
    prevStep() {
      this.step--
    },
    finish() {
      const newEntretien = {
        manager: this.selectedManager,
        date: this.selectedDate,
        time: this.selectedTime
      }

      entretiens.push(newEntretien)

      this.$router.push('/dashboard/mon-prochain-entretien-personnel')
    },
    toggleDateSelection() {
      this.isDateExpanded = !this.isDateExpanded
    }
  }
}
</script>
