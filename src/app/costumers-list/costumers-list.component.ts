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
    {name: "בית אהרוני",       address:"לב הקריה 15, קרית מלאכי" , zone: "6", phone: "0549327482", lanlat: {lan: 31.729913, lat: 34.74603745}, amount: "-17,343"},
    {name: "תות עץ", address: "טרומפלדור 95, באר שבע", zone: "7", phone: "0549327482", lanlat: {lan:31.240423, lat:  34.792262}, amount: "-330"},
    {name:  "לה קאזה", address: "פאולוס השישי 3, נצרת", zone: "3", phone: "0549327482", lanlat: {lan:32.693913, lat: 35.291134}, amount: "-330"},
    {name: "פנינה", address: "ויצמן 40,כפר סבא", zone: "4", phone: "0549327482", lanlat: {lan:32.177157, lat: 34.900912}, amount: "-330"},
    {name: "טליה דרורי", address: "בת חן 7 ,חיפה", zone: "1", phone: "0549327482", lanlat: {lan: 32.784640,  lat: 35.00863}, amount: "-330"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
