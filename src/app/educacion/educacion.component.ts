import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios = [
    {id: 1, universidad: 'Universidad Católica de Manizales', titulo: 'Ingeniero Telemático'},
    {id: 2, universidad: 'Universidad de Manizales', titulo: 'Diplomado CISCO CCNA'},
    {id: 3, universidad: 'Aptech Manizales', titulo: 'Java Progammer'},
    {id: 4, universidad: 'Aptech Manizales', titulo: 'Java Web Component Developer'},
    {id: 5, universidad: 'Universidad EAFIT', titulo: 'Maestría en Ingeniería'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
