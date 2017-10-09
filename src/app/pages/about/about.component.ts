import {Component, OnInit} from "@angular/core";
import {PagesContentService} from "../pages-content.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [PagesContentService]
})
export class AboutComponent implements OnInit {

    constructor(private paSer: PagesContentService) {
    }

    ngOnInit() {
    }

    getResponse() {

    }

}
