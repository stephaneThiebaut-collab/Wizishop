import { Component, OnInit } from '@angular/core';
import { Panier } from '../../service/interface/panier';
import { PanierService } from '../../service/panier/produit.service';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { SpinnerComponent } from '../layout/spinner/spinner.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ErreurPageComponent } from '../erreur-page/erreur-page.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProduitService } from '../../service/produit/produit.service';
import { Produit } from '../../service/interface/produit';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NavbarComponent, SpinnerComponent, FooterComponent, ErreurPageComponent, ReactiveFormsModule ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent implements OnInit {
  Userpanier!: Array<Panier>;
  produits: Array<Produit> = [];
  resultFinalProduit: Array<{uuid:string, quantite: number, prix: number, name: string, prixTotalQuantite: number}> = [];
  result!: number;
  userCommandeForm!: FormGroup;
  ngOnInit(): void {
    this.panierUser();
    this.userCommandeForm = this.fb.group({
      email: [null, Validators.required],
      userName: [null, Validators.required],
      userLastName: [null, Validators.required],
      addresse: [null, Validators.required],
      message:[null]
    })
  }
  formUser(){
    this.userCommandeForm = this.fb.group({
      email: [null, Validators.required],
      userName: [null, Validators.required],
      userLastName: [null, Validators.required],
      addresse: [null, Validators.required],
      message:[null]
    })
  }
  panierUser(){
    this.Userpanier = this.panier.panier;
    this.produits = this.arrayProduit.produit;
    for (let i = 0; i < this.Userpanier.length; i++) {
      const element = this.Userpanier[i];
      const produitRecherche = this.produits.find(item => item.uuid === element.uuid);
      if (produitRecherche) {
        this.result = element.quantite * element.prix;
        this.resultFinalProduit.push({uuid: element.uuid, quantite: element.quantite, prix: element.prix, name: produitRecherche.name, prixTotalQuantite: this.result});
        console.log(this.resultFinalProduit);
      } else {
        console.log("empty")
      }
    }
  }
  onSubmit(){
    if (this.userCommandeForm.valid) {
      alert(this.getUniqueId())
    }else {
      alert("Tout les champs avec * sont obligatoire");
    }
  }
  getUniqueId(): string {
    const stringArr = [];
    for(let i = 0; i< Math.floor(Math.random() * 50); i++){
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
  constructor(private panier: PanierService, private fb: FormBuilder, private arrayProduit: ProduitService){}
}
