import {Component, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(event: Event): void {
   // console.log(this.document.body.scrollTop);
   //  console.log(event.srcElement.scrollHeight);
  }
  title = 'app';
}
