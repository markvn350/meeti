import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimoniales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimoniales.component.html',
  styleUrls: ['./testimoniales.component.css']
})
export class TestimonialesComponent {
  testimonialTexto= ["Excelente app, muy sencillo de manejar y enviar dinero",
  "Excelente app, muy sencillo de manejar y enviar dinero",
  "Excelente app, muy sencillo de manejar y enviar dinero",
  "Excelente app, muy sencillo de manejar y enviar dinero",
  "Excelente app, muy sencillo de manejar y enviar dinero",
  "Excelente app, muy sencillo de manejar y enviar dinero"];

  testimonialAutor=["Juan de la Torre",
  "Juan de la Torre",
  "Juan de la Torre",
  "Juan de la Torre",
  "Juan de la Torre",
  "Juan de la Torre"];

}
