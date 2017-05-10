// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// import {AppModule} from "./app/app.module";
//
// /**
//  * Created by jaysen.lin@foxmail.com on 2017/5/4.
//  */
// platformBrowserDynamic().bootstrapModule(AppModule);

// aot修改为以下的方式引导
import { AppModuleNgFactory } from '../aot/angular/app/app.module.ngfactory';
import { platformBrowser }    from '@angular/platform-browser';
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);