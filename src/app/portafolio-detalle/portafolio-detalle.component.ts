import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  //selector: 'app-portafolio-detalle',
  templateUrl: './portafolio-detalle.component.html',
  styleUrls: ['./portafolio-detalle.component.css']
})
export class PortafolioDetalleComponent implements OnInit {

  public proyectoId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  /*ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.proyectoId = id;
  }*/

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.proyectoId = id;
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
