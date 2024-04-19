const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'ConnexionUser', component: () => import('pages/ConnexionUser.vue') },
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'user-dashboard', component: () => import('pages/UserDashboard.vue') },
      { path: 'nombre-manages', component: () => import('pages/NombreManages.vue') },
      { path: 'mon-prochain-entretien', component: () => import('pages/MonProchainEntretien.vue') },
      { path: 'mon-manager', component: () => import('pages/MonManager.vue') },
      { path: 'mon-prochain-entretien-personnel', component: () => import('pages/MonProchainEntretienPersonnel.vue') },
      { path: 'mon-profil', component: () => import('pages/MonProfil.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'), 
    children: [
      { path: 'admin-dashboard', component: () => import('pages/AdminDashboard.vue') },
      { path: 'mon-prochain-entretien', component: () => import('pages/MonProchainEntretien.vue') },
      { path: 'mon-manager', component: () => import('pages/MonManager.vue') },
      { path: 'mon-prochain-entretien-personnel', component: () => import('pages/MonProchainEntretienPersonnel.vue') },
      { path: 'mon-profil', component: () => import('pages/MonProfil.vue') },
      { path: 'nombre-manages-admin', component: () => import('pages/NombreManagesAdmin.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
