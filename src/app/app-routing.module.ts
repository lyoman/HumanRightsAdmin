import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: "",
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    pathMatch: "full"
  },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then((m) => m.HelpModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'financial',
    loadChildren: () => import('./financial-summary/financial-summary.module').then((m) => m.FinancialSummaryModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'sellstock',
    loadChildren: () => import('./sell-stock/sell-stock.module').then((m) => m.SellStockModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'addstock',
    loadChildren: () => import('./add-stock/add-stock.module').then((m) => m.AddStockModule),
    canActivate: [AuthGuard]
  },


  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },


  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard]
  },

  // {
  //   path: 'error',
  //   loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
  // },
  // {
  //   path: 'access-denied',
  //   loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
  // },
  // { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
