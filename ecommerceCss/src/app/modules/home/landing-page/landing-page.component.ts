import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from "../../tienda/tienda.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    imports: [CommonModule, TiendaComponent]
})
export class LandingPageComponent {

}
