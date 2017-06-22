import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  habilidades = [
    {id: 1, nombre: 'Javascript', porcentaje: 80},
    {id: 3, nombre: 'Angular 2', porcentaje: 60},
    {id: 2, nombre: 'Typescript', porcentaje: 50},
    {id: 3, nombre: 'nodejs', porcentaje: 60},
    {id: 4, nombre: 'Express', porcentaje: 60},
    {id: 5, nombre: 'Wordpress', porcentaje: 90}
  ];

  //public currentPercentage = '90';

  constructor(){}

  ngOnInit() {
  }

}
