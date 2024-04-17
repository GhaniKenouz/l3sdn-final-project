<script>
import { QStepper, QStep, QBtn, QBanner, QRadio, QDate, QTime } from 'quasar'
import { useRouter } from 'vue-router'

export default {
  components: {
    QStepper,
    QStep,
    QBtn,
    QBanner,
    QRadio,
    QDate,
    QTime
  },
  data() {
    return {
      step: 1,
      selectedManager: null,
      selectedDate: null,
      selectedTime: null
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
      // Enregistrer les choix de l'entretien
      const newEntretien = {
        manager: this.selectedManager,
        date: this.selectedDate,
        time: this.selectedTime
      }

      // Envoyer les données à la page MonProchainEntretienPersonnel.vue
      this.$router.push({ name: 'MonProchainEntretienPersonnel', params: { newEntretien } })
    }
  }
}
</script>
