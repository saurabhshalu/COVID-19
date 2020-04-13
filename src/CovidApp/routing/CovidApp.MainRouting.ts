import { WelcomeComponent } from '../Master/welcome.component';

export const MainRoutes = [ 
  {
    path: 'map', 
    loadChildren: () => import('../map/map.module').then(mod => mod.MapModule)
  },
  {
    path: 'details', 
    loadChildren: () => import('../details/details.module').then(mod => mod.DetailsModule)
  },
  {
    path: 'help', 
    loadChildren: () => import('../help/help.module').then(mod => mod.HelpModule)
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: '**',
    component: WelcomeComponent
  }
]
