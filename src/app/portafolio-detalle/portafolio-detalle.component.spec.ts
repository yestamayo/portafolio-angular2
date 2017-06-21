import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioDetalleComponent } from './portafolio-detalle.component';

describe('PortafolioDetalleComponent', () => {
  let component: PortafolioDetalleComponent;
  let fixture: ComponentFixture<PortafolioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
