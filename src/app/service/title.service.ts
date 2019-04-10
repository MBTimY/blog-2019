import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TitleService {

    /*-----Data Part-----*/

    /*-----Constructor Part-----*/

    constructor(
        private translate: TranslateService,
        private titleService: Title
    ) {
    }

    /*-----Method Part-----*/

    /**
     * 设置默认标题
     */
    setDefaultTitle() {
        this.setTitle(this.translate.instant('Title'));
    }

    /**
     * 设置标题
     */
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
