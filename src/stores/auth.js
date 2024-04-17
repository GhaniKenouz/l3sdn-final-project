// Définition des informations d'authentification pour les utilisateurs
export const users = [
  { username: 'utilisateur1', password: '123' },
  { username: 'utilisateur2', password: 'motdepasse2' },
]

// informations d'authentification pour les administrateurs
export const admins = [
  { username: 'admin1', password: 'admin123' },
  { username: 'admin2', password: 'admin456' },
]

// valider l'authentification de l'utilisateur
export function validateUser(username, password) {
  return users.some(user => user.username === username && user.password === password)
}

// valider l'authentification de l'administrateur
export function validateAdmin(username, password) {
  return admins.some(admin => admin.username === username && admin.password === password)
}
