import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { QueNucleusComponent } from "../que-nucleus/que-nucleus.component";
import { SeguridadComponent } from "../seguridad/seguridad.component";
import { ComisionesComponent } from "../comisiones/comisiones.component";
import { TestimonialesComponent } from "../testimoniales/testimoniales.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    imports: [CommonModule, HeaderComponent, QueNucleusComponent, SeguridadComponent, ComisionesComponent, TestimonialesComponent]
})
export class LandingPageComponent {

}
