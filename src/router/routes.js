const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'ConnexionUser', component: () => import('pages/ConnexionUser.vue') },
      { path: 'ConnexionAdmin', component: () => import('pages/ConnexionAdmin.vue') },
      { path: 'user-dashboard', component: () => import('pages/UserDashboard.vue') }, // Route pour le dashboard de l'utilisateur
      { path: 'admin-dashboard', component: () => import('pages/AdminDashboard.vue') }, // Route pour le dashboard de l'administrateur
      { path: 'nombre-manages', component: () => import('pages/NombreManages.vue') }, // Nouvelle route pour la page NombreManages
      { path: 'nombre-manages-admin', component: () => import('pages/NombreManagesAdmin.vue') }, // Nouvelle route pour la page NombreManages
      { path: 'prochain-entretien', component: () => import('pages/ProchainEntretien.vue') }, // Nouvelle route pour la page ProchainEntretien
      { path: 'mon-manager', component: () => import('pages/MonManager.vue') }, // Nouvelle route pour la page MonManager
      { path: 'prochain-entretien-personnel', component: () => import('pages/ProchainEntretienPersonnel.vue') } // Nouvelle route pour la page ProchainEntretienPersonnel
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
