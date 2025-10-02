import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then(m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./search/search.page').then(m => m.SearchPage)
      },
      {
        path: 'sell',
        loadComponent: () =>
          import('./sell/sell.page').then(m => m.SellPage)
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./chat/chat.page').then(m => m.ChatPage)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: 'upload',
    loadComponent: () =>
      import('./upload/upload.page').then(m => m.UploadPage)
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // fontos: fő app.routes-hez forRoot kell
  exports: [RouterModule]
})
export class AppRoutingModule {}
