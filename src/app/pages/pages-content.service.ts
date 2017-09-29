import {Injectable} from "@angular/core";
import {GlobalVarsService} from "../global-vars.service";
import {Http, URLSearchParams} from "@angular/http";
@Injectable()
export class PagesContentService {

    constructor(private http: Http, private gv: GlobalVarsService) {
    }

    getContent() {
        return this.http.get('http://cityleng.dev/api');
    }

    getPageContent(slug) {
        let params = new URLSearchParams();
        params.set('slug', slug);
        return this.http.get(this.gv.host + 'page', {search: params});
    }


}
