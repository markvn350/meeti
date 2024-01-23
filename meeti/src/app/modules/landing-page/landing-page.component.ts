import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioInlineComponent } from "../../shared/modules/formulario-inline/formulario-inline.component";
import { ProximosEventosComponent } from "../../shared/modules/proximos-eventos/proximos-eventos.component";
import { CategoriasComponent } from "../../shared/modules/categorias/categorias.component";
import { BlockGroupComponent } from "../../shared/modules/block-group/block-group.component";
import { HeroComponent } from "../../shared/modules/hero/hero.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [CommonModule, FormularioInlineComponent, ProximosEventosComponent, CategoriasComponent, BlockGroupComponent, HeroComponent]
})
export class LandingPageComponent {

}
