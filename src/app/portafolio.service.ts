import { Injectable } from '@angular/core';

@Injectable()
export class  PortafolioService {

    getPortafolio(){
        return [
            {id: 1, nombre: 'Sitio Web Centro Comercial Oviedo', url: 'http://oviedo.com.co', img: '../../../assets/imagenes/oviedo.com.co.PNG'},
            {id: 2, nombre: 'Sitio Web Pizzería Olivia', url: 'http://pizzeriaolivia.co', img: './assets/imagenes/pizzeriaolivia.co.PNG'},
            {id: 3, nombre: 'Sitio Web Proplas', url: 'http://proplas.com.co', img: './assets/imagenes/proplas.com.co.PNG'}
        ];
    }
}