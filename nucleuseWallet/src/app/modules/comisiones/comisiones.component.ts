import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comisiones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comisiones.component.html',
  styleUrls: ['./comisiones.component.css']
})
export class ComisionesComponent {
  listP=[
    "de todas tus transaciones si tus movimientos son menores a $900 USD",
    "de todas tus transaciones si tus movimientos son mayores a $900 USD"];
  listHeading=["3%","2.5%"];
}
