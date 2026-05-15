import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  imports: [],
  templateUrl: './ahorcado.html',
  styleUrl: './ahorcado.css',
})
export class Ahorcado {

  word: string = 'ANGULAR';
  hiddenWord: string[] = [];
  letters: string[] = [];

  selectedLetters: string[] = [];

  maxErrors: number = 6;
  errors: number = 0;

  gameOver = signal<boolean | null>(null);
  win: boolean = false;

  startTime!: number;

  ngOnInit() {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  selectLetter(letter: string) {

    if (this.gameOver()) return;

    this.selectedLetters.push(letter);

    if (this.word.includes(letter)) {
      this.revealLetter(letter);
    } else {
      this.errors++;
    }

    this.checkGameStatus();
  }

  startGame() {
    this.hiddenWord = Array(this.word.length).fill('_');
    this.selectedLetters = [];
    this.errors = 0;
    this.gameOver.set(false);
    this.win = false;
    this.startTime = Date.now();
  }

  revealLetter(letter: string) {

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        this.hiddenWord[i] = letter;
      }
    }
  }
  checkGameStatus() {

    // ❌ PERDISTE
    if (this.errors >= this.maxErrors) {
      this.gameOver.set(true);
      this.win = false;
      this.finishGame();
    }

    // ✅ GANASTE
    if (!this.hiddenWord.includes('_')) {
      this.gameOver.set(true);
      this.win = true;
      this.finishGame();
    }
  }

  finishGame() {

    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;

    console.log('FIN DEL JUEGO');
    console.log('WIN:', this.win);
    console.log('TIEMPO:', duration);
    console.log('letters USADAS:', this.selectedLetters.length);

    // acá después conectás Supabase
  }
}
