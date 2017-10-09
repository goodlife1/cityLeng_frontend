import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpService} from "../../http.service";
import {NavigationEnd, Router} from "@angular/router";
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers:[HttpService]
})
export class FooterComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpService,private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        // scroll to top when  routing betwen pages

        this.form = this.fb.group({
            name: [''],
            email: [''],
            content: ['']
        });
    }

    onSubmit(form) {
        this.http.post_request('message/admin',form.value).subscribe((data) => console.log(data));
}

}
