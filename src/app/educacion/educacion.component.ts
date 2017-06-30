import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios = [
    {id: 1, universidad: 'Universidad EAFIT', titulo: 'Maestría en Ingeniería', fecha_inicio:'julio 2016',fecha_fin:'julio 2019'},
    {id: 2, universidad: 'Universidad Católica de Manizales', titulo: 'Ingeniero Telemático', fecha_inicio:'1999 julio',fecha_fin:'febrero 2005'},
    {id: 3, universidad: 'Aptech Manizales', titulo: 'Sun Certified Java Web Component Developer', fecha_inicio:'julio 2007',fecha_fin:'febrero 2008'},
    {id: 4, universidad: 'Aptech Manizales', titulo: 'Sun Certified Java Progammer', fecha_inicio:'enero 2007',fecha_fin:'junio 2007'},
    {id: 5, universidad: 'Universidad de Manizales', titulo: 'Diplomado CISCO CCNA 3.1', fecha_inicio:'enero 2006',fecha_fin:'diciembre 2006'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
