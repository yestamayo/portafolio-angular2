import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos = [
    {id: 1, empresa: 'CCP Colombia', cargo: 'Ingeniero de Desarrollo, Desarrollador Front-End' , descripcion: 'Diseño e implementación de proyectos web a la medida utilizando tecnologías como PHP, MySQL, CSS, JQuery, Javascript y HTML5, Administración de servidores web en Cloud Computing (Amazon AWS) y desarrollo de aplicaciones móviles IOS y Andriod.', fecha_inicio: 'junio 2013', fecha_fin:'octubre 2016'},
    {id: 2, empresa: 'Himed Solutions', cargo: 'Ingeniero de desarrollo, Desarrollador Front-End', descripcion: 'Diseño e implementación de Sistemas de Historias Clínicas Electrónicas, estructuración de procesos de documentación y desarrollo de software, dirección y coordinación de proyectos, diseño y desarrollo de software en Php y MySQL.', fecha_inicio: 'noviembre 2011', fecha_fin:'marzo 2012'},
    {id: 3, empresa: 'Segmento Activo S.A.S', cargo: 'Ingeniero de Desarrollo, Desarrollador Front-End y Back-End' , descripcion: 'Desarrollo de software back-end y Front-end con PHP, MySQL, Java, CSS, Javascript, Actionscript 3, Flex Builder, XML y WebServices. - Manejo de Servidores de Streaming en vivo y en ondemand. - Diseño e implementación de soluciones de Telepresencia y Videoconferencia. - Diseño e implementación de soluciones de Señalización Digital.', fecha_inicio: 'junio 2009', fecha_fin:'octubre 2011'},
    {id: 4, empresa: 'SITT S.A.S', cargo: 'Ingeniero de Desarrollo, Desarrollador Front-End y Back-End', descripcion: 'Diseño e implementación de Proyecto SITT Sistema de administración, seguridad y posicionamiento global para el transporte público Taxis. “Ganador en la tercera convocatoria de fondo emprender”, Cooperación en la formulación del plan de negocio para concurso fondo emprender (Ganador entre 14.000 concursantes a nivel nacional).', fecha_inicio: 'octubre 2006', fecha_fin:'abril 2009'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
