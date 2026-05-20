import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ IonContent, ExploreContainerComponent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class Tab1Page {
  constructor() {}
}
