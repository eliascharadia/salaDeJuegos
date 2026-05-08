import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { QuienSoy } from './components/quien-soy/quien-soy';
import { BienvenidaHome } from './components/bienvenida-home/bienvenida-home';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        component: BienvenidaHome,
        canActivate: [], // cuando haga el guard ponerlo aca
        children: []
    },
    { path: 'login', component: Login },
    {path: 'register', component: Registro},
    {path: 'quiensoy', component: QuienSoy},
    { path: '**', redirectTo: 'home' }
];
