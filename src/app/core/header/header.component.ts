import {Component, OnInit, ElementRef} from "@angular/core";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    animations: [
        trigger('wildState', [
            state('normal', style({
                'background-color': 'red',
                transform: 'translateX(0) scale(1)'
            })),
            state('highlighted', style({
                'background-color': 'blue',
                transform: 'translateX(100px) scale(1)'
            })),
            state('shrunken', style({
                'background-color': 'green',
                transform: 'translateX(0) scale(0.5)'
            })),
            transition('normal => highlighted', animate(300)),
            transition('highlighted => normal', animate(800)),
            transition('shrunken <=> *', [
                style({
                    'background-color': 'orange'
                }),
                animate(1000, style({
                    borderRadius: '50px'
                })),
                animate(500)
            ])
        ]),
    ]

})
export class HeaderComponent implements OnInit {

    state: string = 'small';
    wildState = 'normal';
    constructor(private _el: ElementRef) {
    }
    animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }
    ngOnInit() {

       // alert(this._el.nativeElement.offsetTop);
    }
    onShrink() {


        this.wildState = 'shrunken';
    }

}
