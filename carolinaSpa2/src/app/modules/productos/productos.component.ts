import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/shared/interfaces/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      nombre: "Producto 1",
      descripcion: "Lorem ipsum dolor sit amet consec adipisicing elit.",
      precio: "25$",
    },
    {
      nombre: "Producto 2",
      descripcion: "Lorem ipsum dolor sit amet consec adipisicing elit. ",
      precio: "25$",
    },
    {
      nombre: "Producto 3",
      descripcion: "Lorem ipsum dolor sit amet consec adipisicing elit. ",
      precio: "25$",
    },
    {
      nombre: "Producto 4",
      descripcion: "Lorem ipsum dolor sit amet consec adipisicing elit. ",
      precio: "25$",
    },
    
  ];

}
