import {Component, OnInit} from '@angular/core';
import Image from "../../models/images-models";
import {ImageService} from "../../services/images.service";
import Poste from "../../models/postes-models";

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrl: './poste.component.css'
})
export class PosteComponent implements OnInit{
  displayDialog: boolean = false;
  postes: Poste[]=[];
  selectedPoste: Poste | null = null;
  constructor(private imageService: ImageService

  ){}

  showDialog(poste: Poste) {
    this.selectedPoste = poste;
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
    this.selectedPoste = null; // Réinitialise le poste sélectionné
  }
  ngOnInit() {
    this.imageService.getpostes().subscribe((result) => {
      this.postes = result;
      console.log("Images récupérées:", this.postes); // Ajoute ce log
    });
  }
}
