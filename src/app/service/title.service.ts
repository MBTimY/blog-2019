import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TitleService {

    /*-----Data Part-----*/

    /*-----Constructor Part-----*/

    constructor(private titleService: Title) {
    }

    /*-----Method Part-----*/

    /**
     * 设置默认标题
     */
    setDefaultTitle() {
        this.setTitle('Bithumb Global');
    }

    /**
     * 设置标题
     */
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
