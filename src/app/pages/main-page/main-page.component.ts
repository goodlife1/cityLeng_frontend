import {Component, OnInit, HostListener, ViewChild} from "@angular/core";
import {trigger, state, style, transition, animate, keyframes} from "@angular/animations";
import {PagesContentService} from "../pages-content.service";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
    providers: [PagesContentService],
    animations: [
        trigger('bounces', [
            state('normal', style({

                transform: 'translateY(-50px) scale(1)',
                display: 'none'
            })),
            state('bounce', style({
                transform: 'translateY(0) scale(1)',
            })),
            transition('normal => bounce', [
                animate(1200, keyframes([
                    style({

                        transform: 'translateY(-150px) scale(1)',
                        display: 'block',
                        offset: 0
                    }),
                    style({
                        transform: 'translateY(0) scale(1)',
                        offset: 0.2
                    }),
                    style({
                        transform: 'translateY(-100px) scale(1)',
                        offset: 0.5
                    }),
                    style({

                        transform: 'translateY(0) scale(1)',
                        offset: 0.8

                    }),
                ])),
            ]),

        ]),
        trigger('slider', [
            state('normal', style({
                visibility: 'visible',
                height: 'auto'
            })),

            transition('* => normal', [
                animate(2000, keyframes([
                    style({
                        visibility: 'visible',
                        height: '0',
                        offset: 0
                    }),

                    style({
                        height: '*',
                        offset: 0.9

                    }),
                ])),
            ]),


        ]),
        trigger('count', [
            // state(),
        ]),
    ],

})
export class MainPageComponent implements OnInit {
    @ViewChild('slider_2') slider_2;
    @ViewChild('count_id') count_id;

    image_animate = 'normal';
    count_init = false;
    slider;
    count_incom = {first: 200, second: 1800, last: 100};
    count = {first: 0, second: 0, last: 0};
    content :any;
    content_loaded:boolean = false;

    constructor(private getCont: PagesContentService) {
        this.getCont.getPageContent('/').subscribe(data=>{
            this.content = data.json();
            this.content_loaded = true;
        });

    }

    ngOnInit() {

    }

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll(event: Event): void {
        (this.slider_2.nativeElement.offsetTop - (window.outerHeight * 0.65))
        <= document.body.scrollTop ? this.slider = 'normal' : '';

        (this.count_id.nativeElement.offsetTop - (window.outerHeight * 0.65))
        <= document.body.scrollTop && !this.count_init ? this.countStart() : '';
    }

    countStart() {
        this.count_init = true;
        let first = 1000/this.count_incom.first;
        let counted = setInterval(() => {
            if (this.count.first == this.count_incom.first) {
                clearInterval(counted);
            } else {
                this.count.first++;
            }

        }, first);
        let second = 1000/this.count_incom.second;
        let counted_q = setInterval(() => {
            if (this.count.second == this.count_incom.second) {
                clearInterval(counted_q);
            } else {
                this.count.second++;
            }

        }, second);
        let last = 1000/this.count_incom.last;
        let counted_w = setInterval(() => {
            if (this.count.last == this.count_incom.last) {
                clearInterval(counted_w);
            } else {
                this.count.last++;
            }

        }, last)
    }

    bounceStart() {
        setTimeout(() => {
            this.image_animate = 'bounce';
        }, 500);
    }



}
