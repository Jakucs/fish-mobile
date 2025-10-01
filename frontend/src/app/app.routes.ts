import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./search/search.component').then(m => m.SearchComponent)
      },
      {
        path: 'sell',
        loadComponent: () => import('./sell/sell.component').then(m => m.SellComponent)
      },
      {
        path: 'messages',
        loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: '',
        redirectTo: 'home',   // itt elég a relatív útvonal
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'profile2',
    loadComponent: () => import('./profile2/profile2.page').then( m => m.Profile2Page)
  }
];
