import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { ProduitService } from '../../service/produit/produit.service';
import { Produit } from '../../service/interface/produit';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../layout/spinner/spinner.component';
import { ErreurPageComponent } from '../erreur-page/erreur-page.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SpinnerComponent, ErreurPageComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products!: Array<Produit>;
  //For prod mod
  //documentLoaded: any = document.readyState;
  constructor(private router: Router){}
  
  ngOnInit(): void {
    this.displayProduct();
  }
  displayProduct(){
    const produitService = new ProduitService();
    this.products = produitService.produit;
  }
  voirProduit(categorie: string, uuid: string){
    this.router.navigateByUrl(`fiche-technique/${categorie}/${uuid}`)
  }
}
