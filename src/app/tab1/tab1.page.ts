import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: 
  [ 
    IonContent, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle
  ]
})
export class Tab1Page {
  constructor() {}
}
