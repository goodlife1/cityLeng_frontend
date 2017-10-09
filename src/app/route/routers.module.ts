import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "../pages/main-page/main-page.component";
import {TeachersComponent} from "../pages/about/teachers/teachers.component";
import {AboutComponent} from "../pages/about/about.component";
import {HowItWorkComponent} from "../pages/about/how-it-work/how-it-work.component";
import {OurMethodComponent} from "../pages/about/our-method/our-method.component";
import {PriceComponent} from "../pages/about/price/price.component";

const route: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'teachers',
        component: TeachersComponent
      },
      {
        path:'',
        component:HowItWorkComponent
      },
      {
        path:'our-methods',
        component:OurMethodComponent
      },
      {
        path:'cost',
        component:PriceComponent
      }
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route),

  ],
  exports:[
      RouterModule
  ],
  declarations: [

  ]
})
export class RoutersModule { }
