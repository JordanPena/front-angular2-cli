import { Route } from '@angular/router';

import { ResultadoComponent } from './resultado.component';


export const ResultadoRouter: Route[]= [
{
  path: 'resultados/:id',
  component: ResultadoComponent
}
];