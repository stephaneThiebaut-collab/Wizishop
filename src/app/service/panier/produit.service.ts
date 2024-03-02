import { Injectable } from '@angular/core';
import { Panier } from '../interface/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  result!: number;
  constructor() { }
  addToPanier(uuid: string, quantite: number, prix: number){

    const ficheTechniqueRecherche = this.panier.find(item => item.uuid == uuid);
    if (ficheTechniqueRecherche) {
      this.result = quantite +  ficheTechniqueRecherche.quantite;
      ficheTechniqueRecherche.quantite = this.result;
      alert("Produit ajouter avec success !");
    } else {
      this.panier.push({uuid: uuid, quantite: quantite, prix: prix});
      alert("Produit ajouter avec success !");
    }

  }
  panier: Array<Panier> = [];
}
