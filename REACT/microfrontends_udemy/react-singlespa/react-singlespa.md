Documentation : https://single-spa.js.org/docs/getting-started-overview/
https://www.youtube.com/watch?v=MLVv516-QWA&list=PLIG0QvRvxgMO5qsPIAoTzcm1r-VDUatr1
https://www.youtube.com/playlist?list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU

Research more on 
--> SystemJs-ImportMap

Practical Example: https://youtu.be/WUFkd1cEAsM 

**https://www.youtube.com/watch?v=3EUfbnHi6Wg&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU 

Notes:

Concepts:
Single-Spa root-config
Single-Spa Application
Single-Spa Parcel
Single-Spa Helpers/Utilites

________________________________________________________________________________________________________________________
**in-Browser Module Vs build-time module?**
--> Both in-browser modules and build-time modules are ways of structuring JavaScript code and dependencies. They represent two different approaches to dealing with modules.

***In Browser-Modules:*** (SystemJs is the tool for in-browser modules)
-------------------------
    In-browser modules are a native mechanism provided by modern browsers for importing and exporting modules.
    Example:
    Let's say you have two JS files: main.js and helpers.js.
   // helpers.js
   export function helperFunction() {
         return 'Hello World!';
   }

   //Inside main.js
   import { helperFunction } from './helpers.js';
   console.log(helperFunction());  // prints: Hello World!

   //inside index.html
   <script type="module" src="main.js"></script>
   The browser will automatically fetch and import the helpers.js module when it runs main.js.

***Build-Time Modules:***   (Webpack/Rollup is the tool for build-time modules)
--------------------------    
Build-time modules, on the other hand, don't run in the browser directly. Instead, they are processed by a build tool (like Webpack, Browserify or Rollup) at build-time. The build tool will analyze all the dependencies and bundle them into one (or more) JavaScript file which can be run in the browser.

Let's use the same JS files as above but with commonJS syntax which is widely used in build systems.

//helpers.js
module.exports =  {
  helperFunction: function() {
    return 'Hello World!';
  }
}

//main.js
var helpers = require('./helpers.js');
console.log(helpers.helperFunction());  // prints: Hello World!

You would use a build tool like Webpack to bundle these files into a single JS file which can be included in your HTML file.

The major advantage of build-time modules is the ability to use NPM packages directly and a much broader browser compatibility. They often come with other benefits like tree-shaking (eliminating unused code) and code splitting (breaking up output into smaller pieces).

React supports both in-browser and build-time modules. However, build-time modules are the more commonly used method in React applications, particularly because Create React App, the official scaffolding tool for React, is built around a build system (Webpack and Babel), which supports build-time modules.

In-browser modules and build-time modules can be used in React, however, for complex applications, it's more common to use build-time bundling tools like Webpack that handle the JavaScript bundles efficiently.

Here we're showcasing a simple example of a React component exported and imported using both import methods.

***In-Browser Modules:***
--------------------------
You can use ES6 modules in a React Application, but due to the lack of support for JSX in the browser, we have to stick to React.createElement method to define components.

Let's say we have this file structure:
/index.html
/helpers.js
/App.js
This is how it will look:

//helpers.js
export function helperFunction() {
    return 'Hello from helperFunction()!';
}
// App.js
import * as React from 'https://unpkg.com/react@17/umd/react.development.js';
import { helperFunction } from './helpers.js';

function App() {
    return React.createElement('h1', null, helperFunction());
}
export default App;

//index.html
<html>
<head>
<title>React in-browser ES6 modules</title>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        import React from 'https://unpkg.com/react@17/umd/react.development.js';
        import ReactDOM from 'https://unpkg.com/react-dom@17/umd/react-dom.development.js';
        import App from './App.js';

        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>
In-browser modules are great for small applications and experiments where the set up of build tools seems unnecessary.

***Build-Time Modules:***
-------------------------
Let’s display the same React component using CommonJS (Node.js) module system:
//helpers.js
module.exports = {
  helperFunction: function() {
    return 'Hello from helperFunction()!';
  }
};

//App.js
var helperFunction = require('./helpers').helperFunction;
var React = require('react');
function App() {
  return <h1>{helperFunction()}</h1>;
}
module.exports = App;

Then, we use Webpack or a similar tool to bundle our React Application for the browser. We also use Babel to allow use of JSX syntax in .js files, which by default is not supported in Node.js environment.

After running the build tool, we can include the built file in an HTML file in a script tag. The difference from the previous example is that these files aren’t ES6 modules anymore, but regular JS files processed by Webpack.
________________________________________________________________________________________________________________________

**Does modules with import syntax work in browsers?**
Yes, the use of ES6 module syntax with import and export statements is supported in modern browsers (like Chrome, Firefox, Safari, and Edge). However, they work in strict mode, can't be used conditionally, all imported modules are hoisted, and you must refer to them by the exact file path. Furthermore, while the import/export syntax is supported, many ES6+ features (like JSX in React) still need transpiling for browser compatibility.

For example, you can include an ES6 module in HTML using a script tag with type="module":
<script type="module">
    import { function } from './module.js';
    // Using the imported module
</script>
or, within a JavaScript file in the same way:

import { function } from './module.js';

// Using the imported module
Keep in mind that not all browsers support ESM (ES Modules), so for a better coverage of the market you'd need to compile your code down to ECMAScript 5 or a version that has wider browser support. This is often done using tools like Babel and webpack in a build step before deploying your code to production.

Finally, CORS policy will apply as the import statement uses a fetch under the hood. That means you can't import modules from different domains or locally without a server.

________________________________________________________________________________________________________________________

**What are "importmaps"  and why do we use them ?**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps

//To check if importmap is supported by the environment or not ? Check Browser-Compatability
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}

Import maps are a new feature currently specified by the W3C that allows you to control the behavior of JavaScript imports in the browser.

With import maps, you can specify exactly which version of a package to use and at which URL to fetch it. This allows you to use bare import specifiers in your JavaScript code, which were previously only usable when bundling your code through build tools.

Here’s what an import map could look like:

html

<script type="importmap">
{
  "imports": {
    "moment": "/node_modules/moment/src/moment.js",
    "lodash": "https://cdn.skypack.dev/lodash"
  }
}
</script>
Then when you go to import a module in your code, instead of providing the full path, you only provide the bare specifier you defined in your import map:

import moment from 'moment';
import _ from 'lodash';

Without import maps, developers can't use bare import specifiers like the above without bundlers or build tools such as Rollup or Webpack which bundle and resolve all necessary dependencies into a single file.

With the above import map, moment will resolve to /node_modules/moment/src/moment.js and lodash will resolve to the URL https://cdn.skypack.dev/lodash

Also, you can specify which version of a library to load, to avoid conflicts between libraries.

Import maps are still in the experimental stage and are not widely supported natively by all browsers. Browsers like Chrome can support them by enabling the built-in experimental feature, and for other browsers, polyfills like es-module-shims exist.

Import maps could potentially make JavaScript development faster, more efficient, and more flexible in the future, simplifying the way developers deal with JavaScript libraries and modules.

***Ways in which you can use import maps?***
1) Direct import remapping - This is the most simple use case where you remap bare specifiers to the absolute URL of the module.

<script type="importmap" crossorigin>
 {
  "imports": { 
    "lodash": "/node_modules/lodash-es/lodash.js"
  }
}
</script>

//Usage Inside JS file
import _ from 'lodash';

2) Package sub-paths - You can also provide remapping for sub-paths of packages. (pay attention to trialing "/")
{
  "imports": {
    "lodash/": "/node_modules/lodash-es/",
  }
}

//Usage Inside Js
import cloneDeep from 'lodash/cloneDeep.js';

3) Fallback URLs - You can provide fallback URLs in case the primary URL fails to load the module for some reason.
{
  "imports": {
    "lodash": [
      "/node_modules/lodash-es/lodash.js",
      "https://cdn.skypack.dev/lodash-es"
    ]
  }
}
The browser will use the first URL that successfully imports the module.

4) Scopes - You can also define resolution behavior specific to certain import contexts (scopes).
Note: yarn-resolution, npm-overrides/npm-force-updates
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js"
  },
  "scopes": {
    "/admin/": {
      "lodash": "/node_modules/lodash/lodash.js"
    }
  }
}

***Does importmap compatabile with browsers? What is the solution? ***
No, chrome only supports experimentally(didn't try)
SystemJS provides polyfill-like behavior for import maps and in-browser modules. It is not a true polyfill of import maps, due to limitations of the JavaScript language in polyfilling the resolution of bare import specifiers to URLs.

***What is SystemJS in context of single-spa?**
https://single-spa.js.org/docs/recommended-setup/ , read section of SystemJs
________________________________________________________________________________________________________________________

***What is import-map-overrides?***
https://github.com/single-spa/import-map-overrides/blob/main/docs/installation.md
Video: https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=4 

Scenario: Assume you have 20 people and 10 Microfrontends, each microapp with its own tech-stack
In such cases we have 10packagejsons, webpackconfigs, 10 diff repos and it ends up into a maintenance hassle 

Solution: first deploy all the microapps boilerplate to a dev-environment(qa machine or something like that)
then using import-map-override you can override the particular microapp loading url with your localhost and point to your development environment 

This way the development will be smooth and seamless

________________________________________________________________________________________________________________________

***Why is built javascript+html+css are called as static files ? While JAVA/.NET are built and produces JAR/DLL why are they not called static assets?***
"Static" in the context of web development refers to files that are not processed by the server prior to being sent to the client. They're named "static" because they're directly served by the server as they are, without any server-side processing or modification, and their content does not change in response to different requests.

HTML, CSS, and JavaScript files are a good example of static assets since they are sent to the client exactly as they exist on the server.

On the other hand, "dynamic" content is generated by the server in response to a request, often using data from a database. For example, server-side languages like PHP, ASP.NET or Java (JSP, Servlets) are used to create dynamic content.

Java JAR files or .NET DLL files are not considered static assets in the context of web development because they are not served to the client in their original form. Instead, they are used on the server to generate HTML, CSS, JavaScript, or other types of files that are then sent to the client. These server-side applications provide dynamic creating/manipulating content on the server side based on various factors like user input, database access, and more.

So, basically, the term "static" comes down to whether or not the file is directly served to the client without change and is not a commentary on whether or not the file can include dynamic behavior (like a JavaScript file can).
________________________________________________________________________________________________________________________

CI/CD: import-map-deployer

________________________________________________________________________________________________________________________

***can we use single-spa + module-federation together?***
Yes, https://www.youtube.com/watch?v=wxnwPLLIJCY


***Examples from documnetation: ***
https://single-spa.js.org/docs/examples/#community-examples

***single-spa CLI:***
https://single-spa.js.org/docs/create-single-spa

npm install --global create-single-spa

Alternatively, you may use create-single-spa without global installation:
npm init single-spa
      OR
npx create-single-spa

***What does "create-single-spa" do?***
-----------------------------------
--> Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa.
--> It is primarily intended for the creation of new projects, but may also be useful for migrating existing projects (especially migrating CRA or frameworkless projects).


***Recommended Setup for single-spa?***
***https://single-spa.js.org/docs/recommended-setup/
We recommend a setup that uses in-browser ES modules + import maps (or SystemJS to polyfill these if you need better browser support). This setup has several advantages:
1) Common libraries are easy to manage, and are only downloaded once. If you're using SystemJS, you can also preload them for a speed boost as well.
2) Sharing code / functions / variables is as easy as import/export, just like in a monolithic setup
3) Lazy loading applications is easy, which enables you to speed up initial load times
4) Each application (AKA microservice, AKA ES module) can be independently developed and deployed. Teams are enabled to work at their own speed, experiment (within reason as defined by the organization), QA, and deploy on their own schedules. This usually also means that release cycles can be decreased to days instead of weeks or months
5) A great developer experience (DX): go to your dev environment and add an import map that points the application's url to your localhost. See sections below for details

***What are the advantages of "create-single-spa"? ***


***How to initialize the project using "create-single-spa"?***
**command : create-single-spa --dir first-react-mfe-spa --framework react**
Where did you get this command from :  https://single-spa.js.org/docs/create-single-spa 
What will this command create for you ?
Initialized git repository
   create first-react-mfe-spa\package.json
   create first-react-mfe-spa\jest.config.js
   create first-react-mfe-spa\babel.config.json
   create first-react-mfe-spa\.eslintrc
   create first-react-mfe-spa\.gitignore
   create first-react-mfe-spa\.husky\pre-commit
   create first-react-mfe-spa\src\declarations.d.ts
   create first-react-mfe-spa\.prettierignore
   create first-react-mfe-spa\webpack.config.js
   create first-react-mfe-spa\src\root.component.tsx
   create first-react-mfe-spa\src\root.component.test.tsx
   create first-react-mfe-spa\src\epamMfeReactPractice-first-react-mfe-spa.tsx     
   create first-react-mfe-spa\tsconfig.json

What are other commands to setup without create-single-spa?
# Different ways of doing the same thing
create-single-spa --framework react
//npm init "second-react-mfe-spa" : tried works same as create-single-spa
npm init single-spa --framework react  
npx create-single-spa --framework react
yarn create single-spa --framework react


CONTD from here : https://github.com/react-microfrontends












