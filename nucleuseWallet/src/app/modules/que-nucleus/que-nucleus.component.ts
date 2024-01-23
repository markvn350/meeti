import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-que-nucleus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './que-nucleus.component.html',
  styleUrls: ['./que-nucleus.component.css']
})
export class QueNucleusComponent {

  listP=[
    "Crea una cuenta, envía tu documentación y comienza a utilizar nucleus en un par de horas",
    "Por su tecnología digital nucleus es imposible de hackear o robar",
    "Añade o transfiere fondos a tu banco, añade limites o controla tus gastos"];
  listHeading=["Fácil","Seguro","Administrable"];
}
