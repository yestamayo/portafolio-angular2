import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PortafolioDetalleComponent } from './portafolio-detalle/portafolio-detalle.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ContactoComponent } from './contacto/contacto.component';

export const router: Routes = [
    {path: '',redirectTo: 'about',pathMatch:'full'},
    {path: 'about',component: AboutComponent},
    {path: 'services',component: ServicesComponent},
    {path: 'portafolio',component: PortafolioComponent},
    {path: 'portafolio/:id',component: PortafolioDetalleComponent},
    {path: 'educacion',component: EducacionComponent},
    {path: 'contacto',component: ContactoComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);