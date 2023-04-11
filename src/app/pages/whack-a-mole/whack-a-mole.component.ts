import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-whack-a-mole',
  templateUrl: './whack-a-mole.component.html',
  styleUrls: ['./whack-a-mole.component.scss']
})
export class WhackAMoleComponent implements OnInit{

  arrayNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  position?: number;

  score: number = 0;

  timer: number = 30;

  interval?: number;

  isMoleHit: boolean = false;

  gameActive: boolean = false;
  
  constructor(){}

  ngOnInit(): void{
    
  }

  randomPosition(array: number[]){
    const randomI = Math.floor(Math.random() * array.length)
    return array[randomI]
  }
  
  startInterval(){
    setInterval(() => {
      const elementoAleatorio = this.randomPosition(this.arrayNumbers);
      this.position = elementoAleatorio;
      this.isMoleHit = false;
      console.log(this.position);
    }, 500);
    setInterval(() => {
      this.timer = this.timer - 1;
    }, 1000)
  }

  golpe(event: any){
    const square = event.target;
    if (square.classList.contains('b-mole') && !this.isMoleHit) {
      this.score++;
      this.isMoleHit = true; 
    }
  }
  
  startGame(){
    this.startInterval();
    this.gameActive = true;
    setInterval(() => {
      this.endGame();
    }, 1000);
  }

  endGame(){
    if (this.timer == 0) {
      clearInterval(this.interval);
      window.alert(`Your score is: ${this.score}`);
      this.resetGame();
    }
  }

  resetGame() {
    clearInterval(this.interval); 
    this.score = 0; 
    this.timer = 30; 
    this.position = undefined;
    location.reload();
  }
  
}
