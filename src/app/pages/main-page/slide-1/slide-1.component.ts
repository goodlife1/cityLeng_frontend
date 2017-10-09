import {Component, OnInit, ElementRef, HostListener, ViewChild} from "@angular/core";
import {trigger, state, style, transition, animate, keyframes, query, stagger} from "@angular/animations";

@Component({
    selector: 'app-slide-1',
    templateUrl: './slide-1.component.html',
    styleUrls: ['./slide-1.component.css'],
    animations: [

        trigger('images', [

            state('in', style({
                transform: 'translateY(10px) scale(1)',
            })),
            transition('* => activated', [
                query('.item', stagger('700ms', [
                    animate('2s  ease-in-out', keyframes([
                        style({
                            transform: 'translateY(-150px) scale(1)',
                            display: 'block',
                            opacity: "0.5",
                            offset: 0
                        }),
                        style({
                            transform: 'translateY(0) scale(1)',
                            opacity: '1',
                            offset: 0.2
                        }),
                        style({
                            transform: 'translateY(-20px) scale(1)',
                            offset: 0.3
                        }),
                        style({
                            transform: 'translateY(0) scale(1)',
                            offset: 0.7
                        }),
                        style({
                            transform: 'translateY(-5) scale(1)',
                            offset: 0.9
                        }),
                        style({
                            transform: 'translateY(0) scale(1)',
                            offset: 1
                        }),
                    ])),
                ])),
            ]),


        ]),
        trigger('plane', [
            state('start', style({
                visibility: 'hidden'
            })),
            state('finish', style({
                transform: 'translateY(250px) translateX(18vw) rotate(-5deg)',
                visibility: 'visible'
            })),
            transition('start<=>finish', animate('2s  ease-in-out'))
        ]),
        trigger('slider', [
            state('show', style({})),
            state('hide', style({})),
            transition('show => hide', [
                query('.big_item', stagger('3800ms', [
                    animate('3800ms .2s ease-out',
                        keyframes([
                            style({
                                opacity: 1,
                                width: '338px',
                                height: '338px',
                                transform: "rotate3d(1,1,0,-90deg)",
                                offset: 0
                            }),
                            style({
                                opacity: 1,
                                width: '338px',
                                height: '338px',
                                offset: 0.1,
                                transform: "rotate3d(0,1,0,0deg)",

                            }),
                            style({
                                opacity: 1,
                                width: '338px',
                                height: '338px',
                                offset: 0.99,
                                transform: "rotate3d(0,1,0,0deg)",

                            }),
                            style({
                                opacity: 1,
                                width: '338px',
                                height: '338px',
                                transform: "rotate3d(1,1,0,90deg)",
                                offset: 1
                            }),
                        ]),
                    ),
                ])),
            ]),
        ])
    ]

})
export class Slide1Component implements OnInit {
    @ViewChild('plane_id') id_plane;
    public plane = 'start';
    public count_init: boolean = false;
    public state = 'init';
    public slider_state = 'show';
    public state_finish = 0;
    public slider_img =
        [
            {path: '/assets/image/learn-korean.png', description: 'lorem this 3 is spar'},
            {path: '/assets/image/learn-portuguese.png', description: 'lorem this 2 is spar'},

        ];
    public items_animate: any = [
        {path: '/assets/image/first_item.png', description: 'lorem this is spar'},
        {path: '/assets/image/first_item.png', description: 'lorem this is spar'},
        {path: '/assets/image/first_item.png', description: 'lorem this is spar'}
    ];

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll(event: Event): void {
        (this.id_plane.nativeElement.offsetTop - (window.outerHeight * 0.1)) <= window.pageYOffset && !this.count_init ? this.images_item() : '';
    }

    constructor(private _el: ElementRef) {
    }


    images_item() {
        this.count_init = true;
        this.plane = 'finish';
        this.state = 'activated';
        this.slider_state = 'hide';
    }


    state_f() {
        this.state_finish = this.count_init ? 1 : 0;
    }

    ngOnInit() {
    }

    onEnd(event) {
        this.slider_state = 'show';
        if (event.toState === 'show') {
            this.slider_state = 'hide';
        }
    }

}
