import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-treasure',
  templateUrl: './find-treasure.component.html',
  styleUrls: ['./find-treasure.component.scss']
})
export class FindTreasureComponent implements OnInit{
  
  rows?: any;
  columns?: any;
  rowsArray:any[] = [];
  columnsArray:any[] = [];
  treasure: any;
  img: any [][] = [];
  attempts: any = 0;
  table?: boolean;

  

  constructor(){
    this.img = [];
  }

  ngOnInit(): void {
  }

  drawTable(){

    this.rowsArray = Array.from({length: this.rows});
    this.columnsArray = Array.from({length: this.columns});
    
    const treasureRow = Math.floor(Math.random() * this.rows);
    const treasureColumn = Math.floor(Math.random() * this.columns);

    this.treasure = [treasureRow, treasureColumn];

    this.table = true;

    this.img = Array.from({ length: this.rows }, () => Array.from({ length: this.columns }).fill('/assets/x.png'));

    
  }

  changeImg(fila: number, columna: number) {
    if (this.treasure[0] === fila && this.treasure[1] === columna) {
      this.img[fila][columna] = "/assets/chest.png";
    } else if (this.img[fila][columna] === "/assets/skull.png") {
      this.img[fila][columna] = "/assets/x.png";
    } else if (this.img[fila][columna] !== "/assets/skull.png") {
      this.img[fila][columna] = "/assets/skull.png";
    }

    if(this.img[fila][columna] === "/assets/chest.png"){
      alert(`Congratulations, you've found the treasure in ${this.attempts} attempts!`)
    }
  }

  attemptsCounter(){
    this.attempts++
  }

  reset(){
    location.reload();
  }
}
