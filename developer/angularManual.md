# Angular technology

## setup

- Step 1. Set up the Development Environment 安装设置开发环境

```npm
npm install -g @angular/cli
```

- Step 2. Create a new project

```npm
ng new my-app
```

or install on exist project

```npm
npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest typescript@latest --save
```

- Step 3: Serve the application

```npm
cd my-app
ng serve --open
```

Using the --open (or just -o) option will automatically open your
browser on http://localhost:4200/.
- Step 4: Edit your first Angular component

## document structure 项目目录结构

```angular2html
src
|-app
|   |-app.component.ts
|   |-app.module.ts
|-main.ts
```

## Ahead-of-time (AOT) vs just-in-time (JIT)

There is actually only one Angular compiler. The difference between AOT
and JIT is a matter of timing and tooling. With AOT, the compiler runs
once at build time using one set of libraries; with JIT it runs every
time for every user at runtime using a different set of libraries.

## Why do AOT compilation? 为什么要提前编译

1、更快渲染 Faster rendering

With AOT, the browser downloads a pre-compiled version of the
application. The browser loads executable code so it can render the
application immediately, without waiting to compile the app first.

2、较少的异步请求 Fewer asynchronous requests

The compiler inlines external HTML templates and CSS style sheets within
the application JavaScript, eliminating separate ajax requests for those
source files.

3、体积更小 Smaller Angular framework download size

There's no need to download the Angular compiler if the app is already
compiled. The compiler is roughly half of Angular itself, so omitting it
dramatically reduces the application payload.

4、更早发现模板错误 Detect template errors earlier

The AOT compiler detects and reports template binding errors during the
build step before users can see them.

5、更安全 Better security

AOT compiles HTML templates and components into JavaScript files long
before they are served to the client. With no templates to read and no
risky client-side HTML or JavaScript evaluation, there are fewer
opportunities for injection attacks.

## Compile with AOT 提前编译

[reference](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)

1、安装依赖

```npm
npm install @angular/compiler-cli @angular/platform-server --save
```

2、更改配置文件tsconfig.json为tsconfig-aot.json

ngc requires its own tsconfig.json with AOT-oriented settings. Copy the
original src/tsconfig.json to a file called tsconfig-aot.json on the
project root, then modify it as follows.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": ["es2015", "dom"],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  },

  "files": [
    "src/app/app.module.ts",
    "src/main.ts"
  ],

  "angularCompilerOptions": {
   "genDir": "aot",
   "skipMetadataEmit" : true
 }
}

```

3、开始编译应用,Compiling the application

```npm
node_modules/.bin/ngc -p tsconfig-aot.json
```

on Windows users should surround the ngc command in double quotes::

```npm
"node_modules/.bin/ngc" -p tsconfig-aot.json
```

4、引导,Bootstrap

修改之前main.ts里的bootsrap配置为：

```typescript
import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
```

origin is：main-jit.ts

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';
console.log('Running JIT compiled');
platformBrowserDynamic().bootstrapModule(AppModule);
```

5、代码瘦身Tree shaking工具 _`Rollup`_

- 安装Rollup

```npm
 npm install rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify --save-dev
```

- 创建配置文件 `rollup-config.js`

```typescript
import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
  entry: 'src/main.js',
  dest: 'src/build.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      uglify()
  ]
}
```

- rollup 插件 uglify()为Rollup plugin to minify and mangle the code.
- Run Rollup Execute the Rollup process with this command:

```npm
node_modules/.bin/rollup -c rollup-config.js
```

Windows users should surround the rollup command in double quotes:
```npm
"node_modules/.bin/rollup" -c rollup-config.js
```

6、Load the bundle

Loading the generated application bundle does not require a module
loader like SystemJS. Remove the scripts that concern SystemJS. Instead,
load the bundle file using a single `<script>` tag after the `</body>`
tag:

`index.html (load bundle)`

```html
   <script src="build.js"></script>
```
## 工作流与便利脚本
   
   每当修改时，我们都将重新构建应用的AOT版本。 那些npm命令太长，很难记。
   
   把下列npm便利脚本添加到package.json中，以便用一条命令就可以完成编译和Rollup打包工作。
```json
{
 "scripts": {
   "build:aot": "ngc -p tsconfig-aot.json && rollup -c rollup-config.js"
 }
}

```
   打开终端窗口，并试一下。
```cmd
npm run build:aot
```
   
## 检查打包后的js合法性（ Inspect the Bundle）
It's fascinating to see what the generated JavaScript bundle looks like after Rollup.
The code is minified, so you won't learn much from inspecting the bundle directly.
 But the `source-map-explorer` tool can be quite revealing.

Install it:

```npm
npm install source-map-explorer --save-dev
```
Run the following command to generate the map.

```npm
node_modules/.bin/source-map-explorer aot/dist/build.js
```
The `source-map-explorer` analyzes the source map generated with the bundle
and draws a map of all dependencies, showing exactly which application and
Angular modules and classes are included in the bundle.
