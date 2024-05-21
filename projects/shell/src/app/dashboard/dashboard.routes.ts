import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { environment } from "../../environments/environment";

export const dashboardRoutes: Routes = [
  {path: '', loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
    children: [
    // path: 'heroes',  loadChildren: () => import('./../heroes/heroes.routes').then(r => r.heroesRoutes)
    {
      path: 'heroes',
      loadChildren: () => loadRemoteModule({
        // type: 'manifest',
        // remoteName: `${environment.mfe["heroes-mfe"]}/remoteEntry.js`,
        type: 'module',
        remoteEntry: `${environment.mfe["heroes-mfe"]}/remoteEntry.js`,
        exposedModule: './public-api'
      }).then(r => r.heroesRoutes)
        // import('heroes-mfe/heroes.routes').then((module) => module.heroesRoutes),
    }
    ]
  }
]
