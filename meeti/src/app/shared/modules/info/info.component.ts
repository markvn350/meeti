import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-info',
    standalone: true,
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class InfoComponent {

}
