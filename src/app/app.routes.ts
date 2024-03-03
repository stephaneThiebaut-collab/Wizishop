import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FicheTechniqueComponent } from './component/fiche-technique/fiche-technique.component';
import { ErreurPageComponent } from './component/erreur-page/erreur-page.component';
import { SpinnerComponent } from './component/layout/spinner/spinner.component';
import { PanierComponent } from './component/panier/panier.component';
import { FooterComponent } from './component/layout/footer/footer.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path:"fiche-technique/:categorie/:uuid", component: FicheTechniqueComponent},
    {path: "panier", component: PanierComponent},
    {path: "footer", component: FooterComponent},
    {path:"**", component: ErreurPageComponent}
];
