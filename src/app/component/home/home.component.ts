import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { ProduitService } from '../../service/produit/produit.service';
import { Produit } from '../../service/interface/produit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products!: Array<Produit>;
  constructor(){}
  
  ngOnInit(): void {
    this.displayProduct();
  }
  displayProduct(){
    const produitService = new ProduitService();
    this.products = produitService.produit;
  }
  
}
