import { Injectable } from '@angular/core';

@Injectable()
export class  PortafolioService {

    getPortafolio(){
        return [
            {id: 1, nombre: 'Sitio Web Pizzería Olivia', url: 'http://pizzeriaolivia.co', img: './assets/imagenes/pizzeriaolivia.co.PNG'},
            {id: 2, nombre: 'Sitio Web Proplas', url: 'http://proplas.com.co', img: './assets/imagenes/proplas.com.co.PNG'},
            {id: 3, nombre: 'Sitio WebVilá Decoración', url: 'http://viladecoracion.com', img: '../../../assets/imagenes/viladecoracion.com.png'},
            {id: 4, nombre: 'Sitio Web Centro Comercial Oviedo', url: 'http://oviedo.com.co', img: '../../../assets/imagenes/oviedo.com.co.PNG'},
            {id: 5, nombre: 'Sitio Web Dh Visual', url: 'http://dhvisual.com', img: '../../../assets/imagenes/dhvisual.com.png'},
            {id: 6, nombre: 'Sitio Web Cuántica', url: 'http://cuantica.co', img: '../../../assets/imagenes/cuantica.co.png'},
            {id: 7, nombre: 'Sitio Web Polito', url: 'http://polito.com.co', img: '../../../assets/imagenes/polito.com.co.png'},
            {id: 8, nombre: 'Sitio Web People Link', url: 'http://peoplelink.com.co', img: '../../../assets/imagenes/peoplelink.com.co.png'},
            {id: 9, nombre: 'Sitio Web Muma', url: 'http://muma.co', img: '../../../assets/imagenes/muma.co.png'},
            {id: 10, nombre: 'Sitio Web Socoda', url: 'http://socoda.com.co', img: '../../../assets/imagenes/socoda.com.co.png'},
        ];
    }
}