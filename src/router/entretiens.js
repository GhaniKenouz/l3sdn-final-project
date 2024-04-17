// entretiens.js

// Définissez votre tableau d'entretiens initial
let entretiens = [
  { manager: 'Manager 1', date: '2024-04-18', time: '10:00' },
  { manager: 'Manager 2', date: '2024-04-19', time: '14:00'},
  { manager: 'Manager 1', date: '2024-04-18', time: '11:00' },
  { manager: 'Manager 2', date: '2024-04-19', time: '15:00'},
  { manager: 'Manager 1', date: '2024-04-18', time: '12:00' },
  { manager: 'Manager 2', date: '2024-04-19', time: '16:00'},
  { manager: 'Manager 1', date: '2024-04-18', time: '13:00' },
  { manager: 'Manager 2', date: '2024-04-19', time: '17:00'},
  { manager: 'Manager 1', date: '2024-04-18', time: '18:00' },
  { manager: 'Manager 2', date: '2024-04-19', time: '19:00'},
]

// Exportez une fonction pour mettre à jour les entretiens
export const updateEntretiens = (newEntretiens) => {
  entretiens = newEntretiens
}

// Exportez votre tableau d'entretiens initial
export { entretiens }
