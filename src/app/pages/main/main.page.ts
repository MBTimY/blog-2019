import {Component, OnInit, OnDestroy} from '@angular/core';
import {LanguageService} from '../../service/language.service';

@Component({
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.less']
})
export class MainPage implements OnInit, OnDestroy {

    /*-----Data Part-----*/


    /*-----Constructor Part-----*/

    constructor(
        private languageService: LanguageService,
        ) {

    }

    /*-----Lifecycle Part-----*/

    ngOnInit() {
        this.showLanguageText();

    }

    ngOnDestroy() {

    }

    /*-----Methods Part-----*/

    /**
     * 导航栏显示当前语言
     */
    showLanguageText(value?) {
        const currLang = value || this.languageService.getCurrentLanguage();
        this.languageService.setCurrentLanguage(currLang, true);
    }
}
