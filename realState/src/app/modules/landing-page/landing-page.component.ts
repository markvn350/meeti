import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropiedadesComponent } from "../propiedades/propiedades.component";
import { PropiedadesDestacadaComponent } from "../propiedades-destacada/propiedades-destacada.component";
import { BlogTestimonialComponent } from "../blog-testimonial/blog-testimonial.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [CommonModule, PropiedadesComponent, PropiedadesDestacadaComponent, BlogTestimonialComponent]
})
export class LandingPageComponent {

}
