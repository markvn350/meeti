import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seguridad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent {

  listP=[
    "Nucleus es seguro e imposible de clonar",
    "Utiliza tu cara o dedo para confirmar un deposito o registrar una cuenta",
    "Paga en un establecimiento con una tarjeta de credito que se desactiva una vez has hecho tu compra"];
  
}
