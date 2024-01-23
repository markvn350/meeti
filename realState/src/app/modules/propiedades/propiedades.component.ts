import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedades } from 'src/app/shared/interfaces/propiedades';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent {
  properties: Propiedades[] =[
  {
    nombre:"Casa 3 piso de lujo",
    precio: "$ 10,000,000.00",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores dolorum minima esse inventore pariatur"
  },
  {
    nombre:"Departamento duplex",
    precio: "$ 2,000,000.00",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores dolorum minima esse inventore pariatur"
  },
  {
    nombre:"Departamento tipo estudio",
    precio: "$ 1,000,000.00",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores dolorum minima esse inventore pariatur"
  },
  {
    nombre:"Casa de playa de 4 habitaciones",
    precio: "$ 7,000,000.00",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores dolorum minima esse inventore pariatur"
  },
  {
    nombre:"Casa rural para escapadas",
    precio: "$ 750,000.00",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores dolorum minima esse inventore pariatur"
  },
  {
    nombre:"Departamento duplex",
    precio: "$ 2,000,000.00",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores dolorum minima esse inventore pariatur"
  },
]

  imgURL ="../../../assets/img/propiedad_"
  ext=".jpg"
}
