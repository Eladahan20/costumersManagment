import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css']
})
export class AddCostumerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addCostumer(costumer) {
    console.log(this.getCordinates(costumer));
  }

  getCordinates(costumer) {
    let temp = costumer.cordinates.split(",");
    let newCordinates = {lan: temp[0], lng: temp[1]}
    costumer.cordinates = newCordinates;
    return costumer;
  }
}
