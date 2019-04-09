/*******
 * 共享模块，去除公共模块在特性模块中的分别导入，而只需要导入一个共享模块
 *******/

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {TranslateModule} from '@ngx-translate/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {QRCodeModule} from 'angularx-qrcode';

import {TimestampPipe} from './pipes/timestamp.pipe';

import {HeaderComponent} from './components/header/header.component';
import {LimitInputDirective} from './directive/limit-input.directive';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: false,
};

@NgModule({
    imports: [
        SwiperModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        TranslateModule,
        NgxEchartsModule,
        RouterModule,
        QRCodeModule,
        PerfectScrollbarModule
    ],
    declarations: [
        HeaderComponent,
        TimestampPipe,
        LimitInputDirective,
    ],
    exports: [
        HeaderComponent,
        SwiperModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        TranslateModule,
        NgxEchartsModule,
        TimestampPipe,
        QRCodeModule,
        LimitInputDirective,
        PerfectScrollbarModule
    ],
    /** 配置 ng-zorro-antd 国际化 **/
    providers: [
        {
            provide: NZ_I18N,
            useValue: zh_CN
        },
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})

export class SharedModule {
}
