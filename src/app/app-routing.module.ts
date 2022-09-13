import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./pages/home-page/home-page.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: 'dishes',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./pages/search-page/search-page.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./pages/not-found/not-found.module').then(
            (m) => m.NotFoundModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
