import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {RoutersModule} from "./route/routers.module";
import {HeaderComponent} from "./core/header/header.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {Slide1Component} from "./pages/main-page/slide-1/slide-1.component";
import {FooterComponent} from "./core/footer/footer.component";
import {AboutComponent} from "./pages/about/about.component";
import {MainComponent} from "./core/main/main.component";
import {GlobalVarsService} from "./global-vars.service";
import {HowItWorkComponent} from "./pages/about/how-it-work/how-it-work.component";
import {TeachersComponent} from "./pages/about/teachers/teachers.component";
import { OurMethodComponent } from './pages/about/our-method/our-method.component';
import { PriceComponent } from './pages/about/price/price.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainPageComponent,
        Slide1Component,
        FooterComponent,
        AboutComponent,
        MainComponent,
        HowItWorkComponent,
        TeachersComponent,
        OurMethodComponent,
        PriceComponent,
    ],
    imports: [

        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RoutersModule,
        HttpModule
    ],
    providers: [GlobalVarsService],
    bootstrap: [AppComponent]
})
export class AppModule {


}
