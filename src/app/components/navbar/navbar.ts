import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
CommonModule
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isLogged = true; // simulación

  logout() {
    console.log('Cerrar sesión');
  }
}
