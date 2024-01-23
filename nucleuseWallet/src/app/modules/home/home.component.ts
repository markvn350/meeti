import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, HeaderComponent, LandingPageComponent, FooterComponent, RouterModule, RouterOutlet]
})
export class HomeComponent {

}
