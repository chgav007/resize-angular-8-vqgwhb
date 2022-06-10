import { Component } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  width: number;
  height: number;
 
  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;

    console.log('width', this.width);
    console.log('height', this.height);
  }
}
