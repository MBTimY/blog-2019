import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from './service/storage.service';
import {TitleService} from './service/title.service';
import {LanguageService} from './service/language.service';
import {NzIconService} from 'ng-zorro-antd';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    constructor(
        private translate: TranslateService,
        private nzIconService: NzIconService,
        private storageService: StorageService,
        private titleService: TitleService,
        private languageService: LanguageService
    ) {
        this.nzIconService.fetchFromIconfont({
            scriptUrl: '../../../assets/icon-font/iconfont.js'
        });
    }

    ngOnInit() {
        // 设置默认Title
        this.setDefaultTitle();
        // 设置默认语言
        const currentLanguage = this.languageService.getCurrentLanguage();
        this.languageService.setCurrentLanguage(currentLanguage);
    }

    // title
    setDefaultTitle() {
        this.titleService.setDefaultTitle();
    }
}
