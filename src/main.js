"use strict";
// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// import {AppModule} from "./app/app.module";
//
// /**
//  * Created by jaysen.lin@foxmail.com on 2017/5/4.
//  */
// platformBrowserDynamic().bootstrapModule(AppModule);
Object.defineProperty(exports, "__esModule", { value: true });
// aot修改为以下的方式引导
var app_module_ngfactory_1 = require("../aot/src/app/app.module.ngfactory");
var platform_browser_1 = require("@angular/platform-browser");
console.log('Running AOT compiled');
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=main.js.map