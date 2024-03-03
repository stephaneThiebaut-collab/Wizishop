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
import { ResultFinal } from '../../service/interface/result-final';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NavbarComponent, SpinnerComponent, FooterComponent, ErreurPageComponent, ReactiveFormsModule ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent implements OnInit {
  Userpanier!: Array<Panier>;
  produits!: Array<Produit>;
  resultFinalProduit!: Array<ResultFinal>;
  result!: number;
  prixTotal: number= 0;
  userCommandeForm!: FormGroup;
  formIsVisible: boolean = false;

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

  panierUser(){
    this.resultFinalProduit = this.panier.resultFinalPanier;
    this.Userpanier = this.panier.panier;
    this.produits = this.arrayProduit.produit;
    for (let i = 0; i < this.Userpanier.length; i++) {
      const element = this.Userpanier[i];
      const produitRecherche = this.produits.find(item => item.uuid === element.uuid);
      if (produitRecherche) {
        this.result = element.quantite * element.prix;
        this.prixTotal += this.result;
        console.log(this.prixTotal)
        this.panier.pushArticle(element.uuid, element.quantite, element.prix, produitRecherche.name, this.result);
      }
    }
  }

  onSubmit(){
    if (this.userCommandeForm.valid) {
      if (this.Userpanier.length > 0) {
        alert(`Votre commande a bien été enregistrée. Elle est enregistrée avec l'ID numéro : ${this.getUniqueId()}. Merci de votre confiance.`);
      } else {
        alert("Votre panier est vide");
      }
    } else {
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

  removePanier(uuid: string){
    this.panier.removePanier(uuid);
  }
  onCommande(){
    this.formIsVisible = !this.formIsVisible;
  }
  constructor(private panier: PanierService, private fb: FormBuilder, private arrayProduit: ProduitService){}
}
