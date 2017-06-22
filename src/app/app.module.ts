import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PortafolioDetalleComponent } from './portafolio-detalle/portafolio-detalle.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortafolioComponent,
    PortafolioDetalleComponent,
    EducacionComponent,
    ContactoComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
