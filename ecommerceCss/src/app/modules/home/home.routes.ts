
import {  Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { TiendaComponent } from '../tienda/tienda.component';
import { BlogComponent } from '../blog/blog.component';
import { EntradaComponent } from '../entrada/entrada.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { ContactoComponent } from '../contacto/contacto.component';


export const homeRoutes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    
  },
  {
    path: "nosotros",
    loadChildren: ()=> import('../nosotros/nosotros.routes').then(m => m.nosotrosRoutes),

  },
  {
    path: "home",
    component: LandingPageComponent,
    
  },
  {
    path: "tienda",
    component: TiendaComponent,
    
  },
  {
    path: "blog",
    component: BlogComponent,
    
  },
  {
    path: "entrada",
    component: EntradaComponent,
    
  },
  {
    path: "galeria",
    component: GaleriaComponent,
    
  },
  {
    path: "contacto",
    component: ContactoComponent,
    
  },

];

