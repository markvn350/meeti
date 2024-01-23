import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';

export const homeRoutes: Routes = [
  {
    path:"",
    component: LandingPageComponent,
    loadChildren: () => import("../landing-page/landing-page.routes").then(m => m.landingRoutes)
  }
];
