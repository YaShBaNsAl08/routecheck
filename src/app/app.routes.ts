import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckcompComponent } from './checkcomp/checkcomp.component';
import { Checkcomp2Component } from './checkcomp2/checkcomp2.component';

export const routes: Routes = [
    {path:'', component: AppComponent},
    {path:'about',  component: CheckcompComponent},
    {path:'about2',  component: Checkcomp2Component},
];
