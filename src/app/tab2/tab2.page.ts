import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { ApiFakeStore } from '../api-fake-store';
import { FakeStore } from '../services/produtos.service'



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
    IonIcon
  ]
})
export class Tab2Page {
  
  

  

  constructor(private fakeStoreService: FakeStore) { addIcons({ arrowBackOutline, arrowForwardOutline }); }

  produtos: ApiFakeStore[] = [];

  indiceAtual = 0;

  ngOnInit() {

    this.fakeStoreService.getFakeStore().subscribe(dados => {

      this.produtos= dados;

    });


  }


  passar(){
    this.indiceAtual += 1;

    if(this.indiceAtual > 19){
      this.indiceAtual--
    }
    
  }
  voltar(){
    this.indiceAtual -= 1;

    if(this.indiceAtual < 0){
      this.indiceAtual++
    }
  }
}