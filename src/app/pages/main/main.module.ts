import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared.module';
import {MainPage} from './main.page';

// @ts-ignore
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: MainPage,
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomeModule',
                    },
                ],
            }
        ]),
    ],
    providers: [
        MainPage,
    ],
    entryComponents: [
    ],
    declarations: [MainPage]
})
export class MainModule {
}
