/**
 * Created by jaysen.lin@foxmail.com on 2017/5/4.
 */
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {ContentService} from "./content.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdTabsModule} from "@angular/material";
@NgModule({
    id: module.id,
    declarations: [
        AppComponent
        , FooterComponent
        , HeaderComponent
        , ContentComponent
    ],
    imports: [BrowserModule,BrowserAnimationsModule,MdTabsModule],
    providers: [ContentService],

    bootstrap: [AppComponent],
})
export class AppModule {
}