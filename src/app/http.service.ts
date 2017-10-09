import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {GlobalVarsService} from "./global-vars.service";
@Injectable()
export class HttpService {

    constructor(private http: Http, private gv: GlobalVarsService) {
    }

     get_request(path, args = '') {
        return this.http.get(this.gv.host+path,args);
    }

    post_request(path,args={}){
        return this.http.post(this.gv.host+path,args);
    }

}
