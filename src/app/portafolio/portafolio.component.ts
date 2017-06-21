import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  proyectos = [
    {id: 1, nombre: 'Sitio Web Centro Comercial Oviedo', url: 'oviedo.com.co'},
    {id: 2, nombre: 'Sitio Web Pizzería Olivia', url: 'pizzeriaolivia.co'},
    {id: 3, nombre: 'Sitio Web Proplas', url: 'proplas.com.co'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(proyecto){
    this.router.navigate(['/portafolio', proyecto.id]);
  }

}
