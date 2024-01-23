import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavegacionService {
  public routes = inject(Router);


  navegacion(nav: string){
    console.log(nav);
    this.routes.navigate(["/", nav]);
  }
  constructor() { }
}
