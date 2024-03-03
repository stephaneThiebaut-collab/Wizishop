import { Injectable } from '@angular/core';
import { Panier } from '../interface/panier';
import { ResultFinal } from '../interface/result-final';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  result!: number;
  panier: Array<Panier> = [];
  resultFinalPanier: Array<ResultFinal> = [];
  constructor() { }

  addToPanier(uuid: string, quantite: number, prix: number) {
    const ficheTechniqueRecherche = this.panier.find(item => item.uuid == uuid);
    if (ficheTechniqueRecherche) {
      this.result = quantite + ficheTechniqueRecherche.quantite;
      ficheTechniqueRecherche.quantite = this.result;
      alert("Produit ajouter avec success !");
    } else {
      this.panier.push({ uuid: uuid, quantite: quantite, prix: prix });
      alert("Produit ajouter avec success !");
    }

  }
  pushArticle(uuid: string, quantite: number, prix: number, name: string, prixTotalQuantite: number) {
    const produitRecherche = this.resultFinalPanier.find(item => item.uuid === uuid);
    if (!produitRecherche) {
      this.resultFinalPanier.push({ uuid: uuid, quantite: quantite, prix: prix, name: name, prixTotalQuantite: prixTotalQuantite });
    }
  }

  removePanier(uuid: string) {
    const indexresultPanier = this.resultFinalPanier.findIndex(objet => objet.uuid === uuid);

    if (indexresultPanier !== -1) {
      this.resultFinalPanier.splice(indexresultPanier, 1);
      console.log(`Objet avec l'UUID ${uuid} retiré du tableau.`);

    } else {
      console.log(`Aucun objet avec l'UUID ${uuid} trouvé dans le tableau.`);
    }
    const panier = this.panier.findIndex(objet => objet.uuid === uuid);
    if (panier !== -1) {
      this.panier.splice(panier, 1);
      console.log(`Objet avec l'UUID ${uuid} retiré du tableau.`);

    } else {
      console.log(`Aucun objet avec l'UUID ${uuid} trouvé dans le tableau.`);
    }
  }
}
