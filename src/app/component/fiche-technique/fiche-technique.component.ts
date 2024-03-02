import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../service/produit/produit.service';
import { Produit } from '../../service/interface/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { SpinnerComponent } from '../layout/spinner/spinner.component';
import { ErreurPageComponent } from '../erreur-page/erreur-page.component';
import { FicheProduitService } from '../../service/produit/fiche-produit.service';
import { FicheProduit } from '../../service/interface/fiche-produit';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-fiche-technique',
  standalone: true,
  imports: [NavbarComponent, SpinnerComponent, ErreurPageComponent, FooterComponent],
  templateUrl: './fiche-technique.component.html',
  styleUrl: './fiche-technique.component.scss'
})
export class FicheTechniqueComponent implements OnInit {
  products!: Array<Produit>;
  ficheTechnique!: Array<FicheProduit>;
  uuidProduit!: string;

  // produit 
  name!: string;
  description!: string;
  littleDescription!: string;
  type!: string;
  imageProduit1!: string;
  imageProduit2!: string;
  imageProduit3!: string;
  prix!: number;
  delayLivraison!: number;

  marque!: string;
  modele!: string;
  taille!: string;
  title!: string;
  descriptif1!: string;
  descriptif2? : string;
  descriptif3?: string;
  caracteristiques1!: string;
  caracteristiques2!: string;
  caracteristiques3!: string;
  caracteristiques4!: string;

  caracteristiques5?: string;
  caracteristiques6?: string;
  caracteristiques7?: string;
  caracteristiques8?: string;
  caracteristiques9?: string;
  caracteristiques10?: string;
  caracteristiques11?: string;
  caracteristiques12?: string;

  IsEmptyOrIsNullcaracteristiques5!: boolean;
  IsEmptyOrIsNullcaracteristiques6!: boolean;
  IsEmptyOrIsNullcaracteristiques7!: boolean;
  IsEmptyOrIsNullcaracteristiques8!: boolean;
  IsEmptyOrIsNullcaracteristiques9!: boolean;
  IsEmptyOrIsNullcaracteristiques10!: boolean;
  IsEmptyOrIsNullcaracteristiques11!: boolean;
  IsEmptyOrIsNullcaracteristiques12!: boolean;

  ngOnInit(): void {
    this.displayProduct();
  }
  displayProduct(){
    this.route.params.subscribe(params => {
      const produitService = new ProduitService();
      this.products = produitService.produit;

      const ficheProduitService = new FicheProduitService();
      this.ficheTechnique = ficheProduitService.ficheProduitArray;

      this.uuidProduit = params['uuid'];
        const produitRecherche = this.products.find(item => item.uuid === this.uuidProduit);
        const ficheTechniqueRecherche = this.ficheTechnique.find(item => item.uuidProduit == this.uuidProduit);

        if (produitRecherche && ficheTechniqueRecherche) {

          this.name = produitRecherche.name;
          this.description = produitRecherche.description;
          this.littleDescription = produitRecherche.littleDescription;
          this.type = produitRecherche.type;
          this.imageProduit1 = produitRecherche.imageProduit1;
          this.imageProduit2 = produitRecherche.imageProduit2;
          this.imageProduit3 = produitRecherche.imageProduit3;
          this.prix = produitRecherche.prix;
          this.delayLivraison = produitRecherche.delayLivraison;

          this.marque = ficheTechniqueRecherche.marque;
          this.modele = ficheTechniqueRecherche.modele;
          this.taille = ficheTechniqueRecherche.taille;
          this.title = ficheTechniqueRecherche.title;
          this.descriptif1 = ficheTechniqueRecherche.descriptif1;
          this.descriptif2  = ficheTechniqueRecherche.descriptif2;
          this.descriptif3 = ficheTechniqueRecherche.descriptif3;
          this.caracteristiques1 = ficheTechniqueRecherche.caracteristiques1;
          this.caracteristiques2 = ficheTechniqueRecherche.caracteristiques2;
          this.caracteristiques3 = ficheTechniqueRecherche.caracteristiques3;
          this.caracteristiques4 = ficheTechniqueRecherche.caracteristiques4;
          this.caracteristiques5 = ficheTechniqueRecherche.caracteristiques5;
          this.caracteristiques6 = ficheTechniqueRecherche.caracteristiques6;
          this.caracteristiques7 = ficheTechniqueRecherche.caracteristiques7;
          this.caracteristiques8 = ficheTechniqueRecherche.caracteristiques8;
          this.caracteristiques9 = ficheTechniqueRecherche.caracteristiques9;
          this.caracteristiques10 = ficheTechniqueRecherche.caracteristiques10;
          this.caracteristiques11 = ficheTechniqueRecherche.caracteristiques11;
          this.caracteristiques12 = ficheTechniqueRecherche.caracteristiques12;

          this.caracterisitqueIsNullOrIsEmpty(this.caracteristiques5, this.caracteristiques6, this.caracteristiques7, this.caracteristiques8, this.caracteristiques9, this.caracteristiques10, this.caracteristiques11, this.caracteristiques12)
        } else {
          this.router.navigateByUrl("**");
        }
    })
    
  }

  caracterisitqueIsNullOrIsEmpty(cara5: unknown, cara6: unknown, cara7: unknown, cara8: unknown, cara9: unknown, cara10: unknown, cara11: unknown, cara12:unknown){
    if (cara5 == "" || cara5 == null || cara5 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques5 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques5 = true;
    }
    if (cara6 == "" || cara6 == null || cara6 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques6 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques6 = true;
    }
    if (cara7 == "" || cara7 == null || cara7 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques7 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques7 = true;
    }
    if (cara8 == "" || cara8 == null || cara8 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques8 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques8 = true;
    }
    if (cara9 == "" || cara9 == null || cara9 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques9 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques9 = true;
    }
    if (cara10 == "" || cara10 == null || cara10 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques10 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques10 = true;
    }
    if (cara11 == "" || cara11 == null || cara11 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques11 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques11 = true;
    }
    if (cara12 == "" || cara12 == null || cara12 == undefined) {
      this.IsEmptyOrIsNullcaracteristiques12 = false;
    }
    else{
      this.IsEmptyOrIsNullcaracteristiques12 = true;
    }
  }

  constructor(private route: ActivatedRoute, private router: Router){}
}
