import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';


@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.less']
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {

    /*-----Data Part-----*/


    /*-----Constructor Part-----*/

    constructor() {
    }

    /*-----Lifecycle Part-----*/

    ngOnInit() {
        // 初始化
        this.init();
    }

    ngOnDestroy() {
    }

    /*-----Methods Part-----*/

    /**
     * 初始化
     */
    init() {

    }

    ngAfterViewInit() {
    }

}
