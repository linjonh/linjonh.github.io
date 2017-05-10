/**
 * Created by jaysen.lin@foxmail.com on 2017/5/4.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    id: module.id,
    declarations: [
        AppComponent
    ],
    imports:[ BrowserModule,],
    providers: [],

    bootstrap: [AppComponent],
})
export class AppModule {
}