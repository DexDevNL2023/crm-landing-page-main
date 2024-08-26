import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './landing-pages/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: '**', redirectTo: ''},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
