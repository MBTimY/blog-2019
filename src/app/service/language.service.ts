import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TranslateService} from '@ngx-translate/core';
import {Subject} from 'rxjs/Subject';
import {en_US, zh_CN, ko_KR, NzI18nService } from 'ng-zorro-antd';
import {StorageService} from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    /*-----Data Part-----*/

    private langSubject = new Subject<any>();

    /*-----Constructor Part-----*/

    constructor(private translate: TranslateService,
                private storageService: StorageService,
                private nzI18nService: NzI18nService) {

    }

    /*-----Methods Part-----*/

    /**
     * 获取当前语言
     */
    getCurrentLanguage(): string {
        // 获取浏览器语言
        const explorer = navigator.language || navigator['userLanguage'];
        let langExplorer = explorer.substr(0, 2);
        if (langExplorer !== 'zh' && langExplorer !== 'en' && langExplorer !== 'ko') {
            langExplorer = 'en';
        }

        const lang = this.storageService.getLang();
        return lang ? lang : langExplorer;
    }

    /**
     * 设置显示语言
     * @param language  当前语言
     * @param saveLanguage  是否保存当前语言
     */
    setCurrentLanguage(language: string, saveLanguage: boolean = false) {
        // 切换翻译语言
        this.translate.use(language);
        // ng-zorro框架切换翻译语言
        this.nzI18nService.setLocale(this.getLocaleLanguage(language));

        // 缓存语言
        if (saveLanguage) {
            this.storageService.setLang(language);
        }
        // 推送主题
        this.sendLanguageSubject(language);
    }

    /**
     * 设置语言消息
     */
    private sendLanguageSubject(type: string) {
        this.langSubject.next(type);
    }

    /**
     * 监视语言消息
     */
    getLanguageObserver(): Observable<any> {
        return this.langSubject.asObservable();
    }

    /**
     * 柜台语言是否支持当前浏览器默认语言
     */
    hasExplorerLanguage() {
        // 获取浏览器语言
        const explorer = navigator.language || navigator['userLanguage'];
        const langExplorer = explorer.substr(0, 2);
        return !(langExplorer !== 'zh' && langExplorer !== 'en' && langExplorer !== 'ko');
    }

    /**
     * ng-zorro框架语言映射
     * @param language
     */
    getLocaleLanguage(language) {
        switch (language) {
            case 'zh' :
                return zh_CN;
            case 'en':
                return en_US;
            case 'ko':
                return ko_KR;
            default :
                return en_US;
        }
    }
}
