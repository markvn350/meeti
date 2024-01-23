import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';


export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    loadChildren: () => import("./modules/home/home.routes").then(m => m.homeRoutes),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }