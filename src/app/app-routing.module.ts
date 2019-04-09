import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const pagesRoutes: Routes = [
    {
        path: '',
        loadChildren: './pages/main/main.module#MainModule',
    },
    {path: '**', redirectTo: '/abnormal/404', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(pagesRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
