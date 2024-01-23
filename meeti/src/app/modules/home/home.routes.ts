import { Routes } from "@angular/router";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { InfoComponent } from "src/app/shared/modules/info/info.component";

export const homeRoutes: Routes = [
    {
      path: "",
      component: LandingPageComponent,
     
    },
    {
      path: "info",
      component: InfoComponent
    }
    
  ];