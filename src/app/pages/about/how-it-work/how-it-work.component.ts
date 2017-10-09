import {Component, OnInit, ViewChild} from '@angular/core';
import {trigger, transition, query, style, stagger, animate} from "@angular/animations";
import {NavigationEnd , Router} from "@angular/router";

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.css'],
  animations:[
    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),
        query('.icon-line', style({ opacity: 0 })),
        query('.col', stagger('200ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
        query('.icon-line', stagger('500ms', [
          animate('800ms .2s ease-out', style({
            opacity: 1,
          })),
        ]))

      ])
    ])
  ]
})
export class HowItWorkComponent implements OnInit {
@ViewChild('leftColum') leftColum;
  constructor(private router: Router) { }

  ngOnInit() {

  }

}
