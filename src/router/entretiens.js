let entretiens = [
  { id: 1, manager: 'Manager 1', date: '2024-04-18', time: '10:00', rating: 0 },
  { id: 2, manager: 'Manager 2', date: '2024-04-19', time: '14:00', rating: 0 },
  { id: 3, manager: 'Manager 1', date: '2024-04-18', time: '11:00', rating: 0 },
  { id: 4, manager: 'Manager 2', date: '2024-04-19', time: '15:00', rating: 0 },
  { id: 5, manager: 'Manager 1', date: '2024-04-18', time: '12:00', rating: 0 },
  { id: 6, manager: 'Manager 2', date: '2024-04-19', time: '16:00', rating: 0 },
  { id: 7, manager: 'Manager 1', date: '2024-04-18', time: '13:00', rating: 0 },
  { id: 8, manager: 'Manager 2', date: '2024-04-19', time: '17:00', rating: 0 },
  { id: 9, manager: 'Manager 1', date: '2024-04-18', time: '18:00', rating: 0 },
  { id: 10, manager: 'Manager 2', date: '2024-04-19', time: '19:00', rating: 0 }
]

export const updateEntretiens = (newEntretiens) => {
  entretiens = newEntretiens
}

export { entretiens }
