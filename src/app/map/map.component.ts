import { Component, OnInit } from '@angular/core';
import { Costumer } from '../Costumer';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  costumers: Array<Costumer> = 
  [
    {name: "בית אהרוני",       address:"לב הקריה 15, קרית מלאכי" , zone: "6", phone: "0549327482", lanlat: {lat: 31.729913, lng: 34.74603745}, amount: "-17,343"},
    {name: "תות עץ", address: "טרומפלדור 95, באר שבע", zone: "7", phone: "0549327482", lanlat: {lat:31.240423, lng:  34.792262}, amount: "-330"},
    {name:  "לה קאזה", address: "פאולוס השישי 3, נצרת", zone: "3", phone: "0549327482", lanlat: {lat:32.693913, lng: 35.291134}, amount: "-330"},
    {name: "פסטל הום דיזיין", address: "בן עמי 55, עכו", zone: "1", phone: "0549327482", lanlat: {lat:32.9256497 ,lng: 35.07821660000002}, amount: "-330"},
    {name: "טליה דרורי", address: "בת חן 7 ,חיפה", zone: "1", phone: "0549327482", lanlat: {lat: 32.7843439, lng:35.008685499999956}, amount: "-330"}
  ];
  zoneSelected: number;
  lat: number = 31.782630005414884;
  lng: number = 34.763649702072144;
  constructor() { }

  ngOnInit() {
  }
  selectZone(zone) {
    this.zoneSelected = zone;
  }
  show(point){
    console.log(point);
  }
}
