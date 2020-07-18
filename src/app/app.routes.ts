import { RouterModule, Routes } from '@angular/router';

const app: Routes = [
  { path: '',  loadChildren: () => import('./pages/home/home.module')
  .then(mod => mod.HomeModule) }
]

export const APP_ROUTE = RouterModule.forRoot(app);
