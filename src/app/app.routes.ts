import { Route, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeRouter } from './home/home.route';
import { FeedRouter } from './feed/feed.route';
import { QuizRouter } from './quiz/quiz.route';
import { CadastreRouter } from './cadastre/cadastre.route';
import { PerfilRouter } from './perfil/perfil.route';
import { ResultadoRouter } from './resultado/resultado.route';

const indexRoute: Route[] = [
  {
    path: "",
    component: HomeComponent
  }
];

const appRoutes: Routes = [
...indexRoute,
...FeedRouter,
...QuizRouter,
...CadastreRouter,
...PerfilRouter,
...ResultadoRouter,
...HomeRouter
];

export const Routers = RouterModule.forRoot(appRoutes);
