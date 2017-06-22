import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PortafolioService } from './../portafolio.service';

@Component({
  //selector: 'app-portafolio-detalle',
  templateUrl: './portafolio-detalle.component.html',
  styleUrls: ['./portafolio-detalle.component.css'],
  providers: [PortafolioService]
})
export class PortafolioDetalleComponent implements OnInit {

  public proyectoId;
  public proyectos = [];
  public proyectoActual;

  constructor(private route: ActivatedRoute, private router: Router, private _portafolioService: PortafolioService) { }

  /*ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.proyectoId = id;
  }*/

  ngOnInit(){
      this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.proyectoId = id;
      this.proyectos = this._portafolioService.getPortafolio();
      this.proyectoActual = this.proyectos.find(x => x.id === this.proyectoId);
    })
  }

  goPrevious(){
    let previousId = this.proyectoId - 1;
    this.router.navigate(['/portafolio', previousId]);
  }

  goNext(){
    let nextId = this.proyectoId + 1;
    this.router.navigate(['/portafolio', nextId]);
  }

}
