import { Component } from '@angular/core';
import { IonContent, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
import { FakeStore } from '../services/produtos.service';
import { ApiFakeStore } from '../api-fake-store';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonContent,IonButton,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class Tab3Page {
  produtos: ApiFakeStore[] = []
  constructor(private fakeStoreService: FakeStore) {}

  ngOnInit(){

  this.fakeStoreService.getFakeStore().subscribe(dados => {

    this.produtos = dados;

  });

}

  listaAberta = false;

  abrirLista(){
    this.listaAberta = true
  }
  fecharLista(){
    this.listaAberta = false
  }
  
}
