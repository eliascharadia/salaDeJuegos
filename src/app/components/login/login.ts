import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(Auth); 
  email =  '';
  password = '';

  loading = signal(false);
  errorMensaje = signal<string | null>(null);
  
  async onSumbit(){
    this.loading.set(true);
    const success = await this.auth.login(this.email, this.password);
    if(!success)this.errorMensaje.set('Error de credenciales');
    this.loading.set(false);
  }
}
