import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { QuienSoy } from './components/quien-soy/quien-soy';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    {path: 'register', component: Registro},
    {path: 'quiensoy', component: QuienSoy},
    { path: '**', redirectTo: 'login' }
];
