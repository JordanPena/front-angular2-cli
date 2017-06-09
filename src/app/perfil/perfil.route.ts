import { Route } from '@angular/router';

import { PerfilComponent } from './perfil.component';


export const PerfilRouter: Route[]= [
{
  path: 'perfil/:id',
  component: PerfilComponent
}
];