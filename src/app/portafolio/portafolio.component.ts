import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortafolioService } from './../portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  providers: [PortafolioService]
})
export class PortafolioComponent implements OnInit {

  /*proyectos = [
    {id: 1, nombre: 'Sitio Web Centro Comercial Oviedo', url: 'oviedo.com.co', img: '../../../assets/imagenes/oviedo.com.co.PNG'},
    {id: 2, nombre: 'Sitio Web Pizzería Olivia', url: 'pizzeriaolivia.co', img: './assets/imagenes/pizzeriaolivia.co.PNG'},
    {id: 3, nombre: 'Sitio Web Proplas', url: 'proplas.com.co', img: './assets/imagenes/proplas.com.co.PNG'},
  ];*/

  proyectos = [];

  constructor(private router: Router, private _portafolioService: PortafolioService) { }

  ngOnInit() {
    this.proyectos = this._portafolioService.getPortafolio();
  }

  onSelect(proyecto){
    this.router.navigate(['/portafolio', proyecto.id]);
  }

}
