import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { UsuarioRegistro } from '../../models/usuario';


@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private auth = inject(Auth);

  email =  '';
  password = '';
  confirmPassword = '';
  name = '';
  lastName = '';
  age = 0;

  usuarioData: UsuarioRegistro = {
    nombre: this.name,
      apellido: this.lastName,
      edad: this.age,
      email: this.email,
      password: this.password,
  }
  
  loading = signal(false);
  errorMensaje = signal<string | null>(null);
  
  async onSubmit(){
    this.usuarioData = {
      nombre: this.name,
      apellido: this.lastName,
      edad: this.age,
      email: this.email,
      password: this.password,
    };
    
    this.loading.set(true);
    const res = await this.auth.register(this.usuarioData);
    if (res !== null){
      this.errorMensaje.set(res)
    }
    this.loading.set(false);
  }
}
