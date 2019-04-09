import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    /*-----Data Part-----*/

    /*-----Constructor Part-----*/

    constructor(private cookieService: CookieService) {
    }

    /*-----Method Part-----*/

    /**
     * 存语言
     */
    setLang(data) {
        localStorage.setItem('LANG', data);
    }

    /**
     * 取语言
     */
    getLang() {
        return localStorage.getItem('LANG');
    }
}
