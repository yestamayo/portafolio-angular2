import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  proyectos = [
    {id: 1, nombre: 'Sitio Web Centro Comercial Oviedo', url: 'oviedo.com.co', img: '../../../assets/imagenes/oviedo.com.co.PNG'},
    {id: 2, nombre: 'Sitio Web Pizzería Olivia', url: 'pizzeriaolivia.co', img: './assets/imagenes/pizzeriaolivia.co.PNG'},
    {id: 3, nombre: 'Sitio Web Proplas', url: 'proplas.com.co', img: './assets/imagenes/proplas.com.co.PNG'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(proyecto){
    this.router.navigate(['/portafolio', proyecto.id]);
  }

}
