import { Component, inject, OnInit } from '@angular/core';
import { QuienSoyService } from '../../services/quienSoy';

@Component({
  selector: 'app-quien-soy',
  imports: [],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css',
})
export class QuienSoy implements OnInit{

  private quienSoyService = inject(QuienSoyService);

  user = this.quienSoyService.userA;

  ngOnInit(): void {
    this.quienSoyService.loadUser();
  }
}
