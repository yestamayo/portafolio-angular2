import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos = [
    {id: 1, empresa: 'CCP Colombia', descripcion: 'Ingeniero de desarrollo, Desarrollador Front-End, Proyecto: Programador y maquetador de sitios web con Wordpress, Javascript nativo, PHP y MySql, ademas de la administración de servidores en Amazon Web Services.'},
    {id: 2, empresa: 'Himed Solutions', descripcion: 'Ingeniero de desarrollo, Desarrollador Front-End, Proyecto: Sistema de consultas e historias clinicas web, realizado en PHP y MySQL.'},
    {id: 3, empresa: 'Segmento Activo S.A.S', descripcion: 'Ingeniero de desarrollo, Desarrollador Front-End y Back-End, Proyectos: '},
    {id: 4, empresa: 'SITT S.A.S', descripcion: 'Ingeniero de desarrollo, Desarrollador Front-End y Back-End, Proyectos: '}
  ];

  constructor() { }

  ngOnInit() {
  }

}
