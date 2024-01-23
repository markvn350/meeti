import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from "../../shared/modules/slider/slider.component";
import { CardsComponent } from "../../shared/modules/cards/cards.component";
import { HorariosComponent } from "../../shared/modules/horarios/horarios.component";
import { ProductosComponent } from "../productos/productos.component";
import { CitaComponent } from "../cita/cita.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [CommonModule, SliderComponent, CardsComponent, HorariosComponent, ProductosComponent, CitaComponent]
})
export class LandingPageComponent {

}
