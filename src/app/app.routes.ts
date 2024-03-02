import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FicheTechniqueComponent } from './component/fiche-technique/fiche-technique.component';
import { ErreurPageComponent } from './component/erreur-page/erreur-page.component';
import { SpinnerComponent } from './component/layout/spinner/spinner.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path:"fiche-technique/:categorie/:uuid", component: FicheTechniqueComponent},
    {path: "spinner", component: SpinnerComponent},
    {path:"**", component: ErreurPageComponent}
];
