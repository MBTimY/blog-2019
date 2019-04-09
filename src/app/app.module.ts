import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NZ_I18N, en_US, NZ_MESSAGE_CONFIG, NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {AppRoutingModule} from './app-routing.module';
import {ApiInterceptor} from './util/api/api-interceptor';
import {ApiUtilService} from './util/api/api-util.service';
import {SharedModule} from './shared.module';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

registerLocaleData(en);

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json?v=' + environment.config.resourceVersion);
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [
                    HttpClient,
                ]
            }
        }),
    ],
    providers: [
        ApiUtilService,
        CookieService,
        // 应用拦截器
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
        },
        {provide: NZ_I18N, useValue: en_US},
        {provide: NZ_MESSAGE_CONFIG, useValue: {nzMaxStack: 1}},
        {provide: NZ_NOTIFICATION_CONFIG, useValue: {
                nzMaxStack: 10,
                nzPlacement: 'topLeft',
            }
        } // Fix: DCEX-3740
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
