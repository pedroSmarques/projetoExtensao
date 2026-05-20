import { Component } from '@angular/core';
import { IonContent, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent, ExploreContainerComponent, IonCard]
})
export class Tab2Page {

  constructor() {}

}
