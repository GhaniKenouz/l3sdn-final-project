<template>
  <q-page class="q-pa-sm bg-white">
    <!-- Fiche d'information pour le manager -->
    <q-card v-if="managerInfo" class="manager-info">
      <q-card-section>
        <q-card-title>Informations sur le manager</q-card-title>
        <p>Nom : {{ managerInfo.name }}</p>
        <p>Position : {{ managerInfo.position }}</p>
        <p>Adresse professionnelle: {{ managerInfo.address }}</p>
        <p>Email : {{ managerInfo.email }}</p>
        <p>Email de l'entreprise : {{ managerInfo.company_email }}</p>
        <p>Site Web : {{ managerInfo.website }}</p>
        <p>Numéro de téléphone: {{ managerInfo.phone }}</p>
        <p>Numéro de téléphone secondaire: {{ managerInfo.secondary_phone }}</p>
      </q-card-section>
    </q-card>

    <!-- Calendrier -->
    <q-calendar-month
      ref="calendar"
      v-model="selectedDate"
      animated
      bordered
      focusable
      hoverable
      no-active-date
      :day-min-height="140"
      :day-height="10"
      @change="onChange"
      @moved="onMoved"
      @click-date="onClickDate"
      @click-day="onClickDay"
      @click-workweek="onClickWorkweek"
      @click-head-workweek="onClickHeadWorkweek"
      @click-head-day="onClickHeadDay"
    >
      <!-- Affichage des événements -->
      <template #day="{ scope: { timestamp } }">
        <template
          v-for="event in eventsMap[timestamp.date]"
          :key="event.id"
        >
          <div
            :class="badgeClasses(event, 'day')"
            :style="badgeStyles(event, 'day')"
            class="my-event"
            @click="showEventDetails(event)"
          >
            <abbr
              :title="event.details"
              class="tooltip"
            >
              <span class="title q-calendar__ellipsis">{{ event.title + (event.time ? ' - ' + event.time : '') }}</span>
            </abbr>
          </div>
        </template>
        <template v-if="!eventsMap[timestamp.date] && timestamp.date === selectedDate">
          <div
            class="no-event"
            @click="showNoEventDetails"
          >
            Pas d'événement programmé
          </div>
        </template>
      </template>
    </q-calendar-month>

    <!-- Modal pour afficher les détails de l'événement -->
    <q-dialog v-model="eventModal" persistent>
      <q-card>
        <q-card-section>
          <p>Évènement : {{ selectedEvent.title  }}</p>
          <p>Détails : {{ selectedEvent.details }}</p>
          <p>Date : {{ selectedEvent.date }}</p>
          <p>Heure : {{ selectedEvent.time }}</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" label="Fermer" @click="closeEventModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { QCalendarMonth, addToDate, parseDate, parseTimestamp, today } from '@quasar/quasar-ui-qcalendar'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'
import { defineComponent } from 'vue'

const CURRENT_DAY = new Date()

function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY)
  newDay.setDate(day)
  const tm = parseDate(newDay)
  return tm.date
}

export default defineComponent({
  name: 'UserCalendar',
  components: {
    QCalendarMonth
  },
  data() {
    return {
      selectedDate: today(),
      events: [
        {
          id: 1,
          title: 'Meeting',
          details: 'Discussion sur le projet X',
          date: getCurrentDay(5),
          time: '14:00',
          bgcolor: 'orange'
        },
        {
          id: 2,
          title: 'Entretien',
          details: 'Recrutement d\'un nouveau developpeur',
          date: getCurrentDay(10),
          time: '09:30',
          bgcolor: 'green'
        },
        {
          id: 3,
          title: 'Conférence',
          details: 'Présentation des dernières tendances en informatique',
          date: getCurrentDay(15),
          time: '11:00',
          bgcolor: 'blue'
        },
      ],
      managerInfo: {
        name: 'Nom du manager',
        position: 'Développeur',
        email: 'email@example.com',
        company_email: 'company_email@example.com',
        website: 'www.example.com',
        phone: 'Numéro de téléphone du manager',
        secondary_phone: 'Numéro de téléphone secondaire du manager',
        address: 'Adresse du manager'
      },
      eventModal: false,
      selectedEvent: {}
    }
  },
  computed: {
    eventsMap() {
      const map = {}
      if (this.events.length > 0) {
        this.events.forEach(event => {
          (map[event.date] = (map[event.date] || [])).push(event)
          if (event.days !== undefined) {
            let timestamp = parseTimestamp(event.date)
            let days = event.days
            do {
              timestamp = addToDate(timestamp, { day: 1 })
              if (!map[timestamp.date]) {
                map[timestamp.date] = []
              }
              map[timestamp.date].push(event)
            } while (--days > 1)
          }
        })
      }
      return map
    }
  },
  methods: {
    badgeClasses(event, type) {
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        'rounded-border': true
      }
    },
    badgeStyles(day, event) {
      const s = {}
      return s
    },
    onToday() {
      this.$refs.calendar.moveToToday()
    },
    onPrev() {
      this.$refs.calendar.prev()
    },
    onNext() {
      this.$refs.calendar.next()
    },
    onMoved(data) {
      console.log('onMoved', data)
    },
    onChange(data) {
      console.log('onChange', data)
    },
    onClickDate(data) {
      console.log('onClickDate', data)
    },
    onClickDay(data) {
      console.log('onClickDay', data)
      const date = data.date
      if (this.eventsMap[date]) {
        this.selectedEvent = this.eventsMap[date][0]
        this.eventModal = true
      }
    },
    onClickWorkweek(data) {
      console.log('onClickWorkweek', data)
    },
    onClickHeadDay(data) {
      console.log('onClickHeadDay', data)
    },
    onClickHeadWorkweek(data) {
      console.log('onClickHeadWorkweek', data)
    },
    showEventDetails(event) {
      this.selectedEvent = event
      this.eventModal = true
    },
    showNoEventDetails() {
      this.selectedEvent = {
        title: 'Pas d\'événement programmé',
        details: ''
      }
      this.eventModal = true
    },
    closeEventModal() {
      this.eventModal = false
    }
  }
})
</script>

<style>
.manager-info {
  margin-top: 20px;
}
.no-event {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}

</style>
