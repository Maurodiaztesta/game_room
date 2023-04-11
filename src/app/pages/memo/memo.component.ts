import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/shared/models/card.interface';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit{

  arrayCards?: CardInterface[];

  hits: number = 0;

  attempts: number = 0;

  clickedCard?: CardInterface;

  cardArray: any [] = [
    {
      id: 1,
      name: "earth",
      img: "/assets/earth.svg",
      selected: false,
      checked: false
    },
    {
      id: 2,
      name: "jupiter",
      img: "/assets/jupiter.svg",
      selected: false,
      checked: false
    },
    {
      id: 3,
      name: "mars",
      img: "/assets/mars.svg",
      selected: false,
      checked: false
    },
    {
      id: 4,
      name: "mercury",
      img: "/assets/mercury.svg",
      selected: false,
      checked: false
    },
    {
      id: 5,
      name: "saturn",
      img: "/assets/saturn.svg",
      selected: false,
      checked: false
    },
    {
      id: 6,
      name: "uranus",
      img: "/assets/uranus.svg",
      selected: false,
      checked: false
    },
    {
      id: 7,
      name: "earth",
      img: "/assets/earth.svg",
      selected: false,
      checked: false
    },
    {
      id: 8,
      name: "jupiter",
      img: "/assets/jupiter.svg",
      selected: false,
      checked: false
    },
    {
      id: 9,
      name: "mars",
      img: "/assets/mars.svg",
      selected: false,
      checked: false
    },
    {
      id: 10,
      name: "mercury",
      img: "/assets/mercury.svg",
      selected: false,
      checked: false
    },
    {
      id: 11,
      name: "saturn",
      img: "/assets/saturn.svg",
      selected: false,
      checked: false
    },
    {
      id: 12,
      name: "uranus",
      img: "/assets/uranus.svg",
      selected: false,
      checked: false
    },
  ];


  ngOnInit(): void {
    this.cardArray = this.shuffleCards(this.cardArray);
  }

  turnCard(card: CardInterface){
    if (this.clickedCard) {
      if ((this.clickedCard.id === card.id) && (this.clickedCard.selected === true) && (this.clickedCard.name !== card.name)) {
        this.clickedCard.checked = false;
        this.clickedCard.selected = false;
      }
      else if (this.clickedCard.name === card.name) {
        card.checked = true;
        this.clickedCard.selected = false;
        this.clickedCard.checked = true;
        this.clickedCard = undefined;
        this.hits++;

        if (this.hits === 6) {
          window.alert("CONGRATULATIONS, YOU'VE WON!")
          
        }
      } else {
        card.selected = true;
        setTimeout(() => {
          card.selected = false;
          this.clickedCard!.selected = false;
          this.clickedCard = undefined
        }, 500)
      }
      this.attempts++;
    } else {
      this.clickedCard = card;
      card.selected = true;
    }
   
  }


  shuffleCards(array: any){
    return array.sort(() => Math.random() - 0.5)
  }

  reset(){
    location.reload();
  }
}
