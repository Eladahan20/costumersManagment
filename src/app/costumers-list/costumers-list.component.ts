import { Component, OnInit } from '@angular/core';
import { Costumer } from '../Costumer';
@Component({
  selector: 'app-costumers-list',
  templateUrl: './costumers-list.component.html',
  styleUrls: ['./costumers-list.component.css']
})
export class CostumersListComponent implements OnInit {
  costumers: Array<Costumer> = 
  [
    {name: "מורגן", address: "ירכא 44", zone: "2", lanlat: {lan: 145.3241242, lat: 133.342422}, amount: "-17,343"},
    {name: "ממלכת לאמהא", address: "רהט 44", zone: "7", lanlat: {lan: 45.3241242, lat: 13.342422}, amount: "-330"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
