1) Immediate Child Selector : #product > p{ color:orange }
2) Immediate Sibiling Selector: #product + p{ color:orange}
3) Sibiling Selector : #product ~ p{  color:orange  }
4) Psuedo-Class-Selector: applies on state of the element like on <a>
    article p:first-child{ color:orange} //Only first p  type element css be applied
    article:first-of-type { color:orange} //Only first different type element css be applied
    article p:last-child{ color:orange} //Only last p  type element css be applied
    article:last-of-type { color:orange} //Only last diif type element css be applied
    article p:nth-child(2){    color:orange} //Only 2nd child gets css applied 
    ul li:nth-child(odd) {color:orange} //Only odd  type element css be applied
    ul li:nth-child(even) {color:orange} //Only even  type element css be applied
    ul li:nth-child(3n/2n) {color:orange} // 3n every 3rd item gets colored 
    a:visited {color:orange} 
    a:link{color:green}
    a:hover, a:focus{color:red} //Focus because when you hover using keyboard
5) Psuedo-Element-Selector: Applies on part of the element <p>Lndndn</p>, Lndndn is part of the element.
    p::first-letter: {color:orange} //first letter of para is colored.
    p::first-line: {color:orange}
    p::selection:{background:blue} //css applied to background of selected test
    p::before{content:'...'} //O/P <p>...lorem ipsum</p>
    p::after{content:'...'}
6) Specificity-Order-Selectors: #IdSelectors > .ClassSelectors > ElementSelectors (more-weight to less-weight)
7) !important: to override the specificty of css selectors we can use !important, this is anti-pattern.
8) To override: we can also give combination of specificty to increase the value Eg: .class#id-->weight(1,1,0).
9) Inheritance : <p>lorem ipsum exg <strong>KKK</strong></p>, css of P will also be applied to strong.. this is inheritance.
10) To stop inheritance : strong {color:initial} "initial will stop the inheritance".
11) To Inheritance to specific element we can do strong {border:inherit}.
12) Generally Typographical elements like font, para, italics etc will get inherited.

Universal Selector:
==================
 --> *{background:green} //this selector will apply for all elements, except for psuedo elements
 --> *,*::before,*::after{background:green}//Will apply for psuedo as well.


COLORS
======
13) background-color:rgb(230,205,6) //red,blu,green you need to get these colors
14) background-color:rgba(230,205,6, 0.6) //red,blue,green,alpha. alpha(0.0-1.0) indicates 0(transparent)-1(opaque).
15) colors can also be in HexaDecimal background-color:{color:#e6cd12}, we cannot control opaque,transperency in this.
16) background:hsl(230,205,6, 0.6)  and background-color:hcv(230,205,6, 0.6), other ways of color hsl, hsla and hcv,hcva.a is alpha
    GRADIENT
    ========
17) background-color:linear-gradient(yellow,black)
    background-color:linear-gradient(toyello,black)
BORDERS
=======
18) border: 10px solid/dashed/dotted red
19) border-radius: 10px //we can make rounded/blunt corners 
20) Css for square is .square{ width:100px ; height:100px; border:10px solid}
21) for a square border-radius: 100% will make the square a circle .square{width:100px;height:100px;border:10px solid;border-radius:100%}
google--css-shapes

SHADOWS
=========
22) box-shadow: left-right top-down  soft/blunt color. eg: box-shadow: 10px 10px 10px brown, box-shadow: -10px -10px 10px brown,
23) if you want shadow on all 4 sides box-shadow: 0 0 30px brown, 30px will give more softer shadow , beneath the element.
    TEXT-SHADOW
    ===========
24) text-shadow : left-right top-down  soft/blunt color eg: text-shadow: 3px 3px 3px rgba(0,0,0,0).

BOX-MODEL
==========
25) When browser renders any element it puts that element inside a box .
26) The box will supply defined Margin >Border >Padding >Content. the defined values are specific to browser.
27) Google developer tools in styles tab --> shows the box model with margin,border,padding what ever are applicable.
For eg: for <p> inside box only margin is applicable.
28) ***Margin should be used to separate elements, Padding should be used to separate content from border.
29) The height and width of the element is applied to the content of the element, It doesn't effect the box model. 
Let say <div style="height: 100px; width: 100px; background: green"></div> the actual height and width inside the box model would be 160px, 20px,30px would be padding and borders applied by box ...
However margin value is not added to div that is used by box model only padding and borders.
30) To over-come this we use 
box-sizing: border-box // Using this we can avoid and get exact height/width without adding box borders and padding , but by adjusting padding,borders of box so that it shows exact height and width mentioned in css
100px =  40(content)+30(box-pad)+30(box-border)
box-sizing : content-box //This is default where borders and padding of box added
31) **Block level elements takeup entire horizontal space we need to limit it(div) , inline elements doesn't (span)
Block elements can have height and width , 
"display:inline-block", using this we can give height and width even for inline elements(span)

Overflow:
==========
32) Consider: <div style="height: 100px; width: 100px;"></div> if the content is more than the div, there is an overflow, 
to control we have 
overflow: hidden //will hide the overflow content
overflow: scroll //will give horz. & ver scrolls
overflow:auto //browser will decide when to show scroll or not
overflow = overflow-x + overflow-y

Measurement Units:
==================
33) Absolute: px, will not resize if windo size changes.
34) Relative: Resize the window element will also resize.
    ============
    %: relative to size of the container/parent
    vw: relative to viewport(screen)
    vh: relative to viewport(screen)
    em: relative to fontsize //will inherit font-size of element,
    // if not given from parent...higher inherit heirarchy ripple effect
    rem: relative to fontsize //relative to root element. root could be html/body etc 

                           LAYOUTS
================================================================
    
Positioning
===========
35) position:static is default value, appear where they are.
35) postion:relative : relative to element normal position , other elements are not effected.
36) When "position:absolute" , it means that it is removed from normal flow of elements on the page and its on a separate layer .Other elements are effected. RELATIVE TO PARENT , HENCE PARENT POSITION:RELATIVE
37) To position an element absolute, the container of the element must be relative and then the element can be absolute , we can adjust using top,bottom,left,right,z-index properties, height,width
38) position:fixed , will stay static even when we scroll relative to viewport

Float
=====
39) Inside a container if an element is given a float:left/right, all the other elements will adhere to the float value inside that container.
40) To overcome that we can use clear:left/rigt/both which will remove the floating and make them independent of that float value .
41) Parent-Collapsing problem with float:
https://www.geeksforgeeks.org/how-to-prevent-parents-of-floated-elements-from-collapsing-in-css/
    Problem: //Background : green will not appear at all here float dominates
    <div style="background-color: green>
        <!-- Children div's begins, floated to left -->
        <div style="float: left;">HTML5</div> 
        <div style="float: left;">CSS3</div>
        <div style="float: left;">JavaScript</div>
    </div>
    Solution: 
     Way 1: use overflow:auto 
     <div style="background-color: green; overflow: auto">
     Way 2: Making the parent also floated to prevent collapsing
     <div style="background-color: green; float: left">

Flex-Box:
=========
42) Flex-box is used for laying out elements in one direction/dimension either in row or column. Its powerful than float.

43) Axes: Used to understand align 
    When Direction: ROW
        Main--> Horizontal--> justify-content
        Cross--> Vertical--> align-items
    When Direction: COLUMN
        Main--> Vertical--> justify-content
        Cross--> Horizontal--> align-items

44) Flex-sizing: applied on flex-items 
flex: flex-basis + flex-grow + flex shrink
flex-basis: 1 //initial size of flex-item
flex-grow: 1  //the growth factor of flex item
flex-shrink: 1 // the shrink-factor  of flex item 

//This is applied on each flex-item
    .flex-item-sizing{
        flex: 1
    }


45) 
 .container{
    display:flex;
    flex-direction: row;  //default value
    flex-direction: column/column-rverse/row-reverse; //others
    /*Along Main axes*/
    justify-content: centre/flex-start/flex-end/space-evenly...
    /*Along-Cross-Axes*/
    align-items: center/and others
    /when items in a row/column overflow to multiple lines align-content will align multiple lines, align all the content at once , after the wrap is removed*/
    flex-wrap: nowrap
    align-content: center

    height:600px;
    width:600px;
    border: 5px solid grey;
}

//When you work with individual flex items
`.flexItem1: {
    //Will align only one flex-item 
    align-self: flex-start/flex-end/others 
    flex: 1 1 15rem //grow,shrink,basis
}

Grid
=====
46) Grid is used to layout elements in both row and columns , common usecases are photo-gallery
47) We can check grid/flex layout in chrome tools 
48) .gridContainer{
    display:grid;
    border: 5px solid grey;
    /*Three rows with each 100px*/
    grid-template-rows: 100px 100px 100px;
    /* repeat(times,value) is a utility method 
      grid-template-rows: repeat(3,100px);
    */
    /*two columns with each 100px*/
    grid-template-columns: 200px 200px;
    /* grid-template = grid-template-rows + grid-template-columns*/
    /*grid-template: repeat(3,100px)/repeat(2,200px)*/ //rows/columns

    justify-items: center; /* HORIZONTAL_AXIS start, end, default is stretch*/
    align-items: center; /* VERTICAL_AXIS start, end, default is stretch*/
    justify-content: center; /*HORIZONTAL Entire Grid can be centered*/
    align-content: center; /*VERTICAL Entire Grid can be centered*/

    /*gap between rows and columns */
    row-gap:10px
    column-gap:10px
    gap:10px 10px //shorthand for both row and col

    grid-template-areas: "header header" "sidebar main" "footer footer" ". footer" //. means empty space

}

//control grid items using grid-area names 
.gridItem{
    grid-area: header // will be placed in header 
}

Hiding elements:
================
49) display: none //will not render the html node
50) visibility : visible/hidden will render html node and hide

Media Queries
=============
51) Desktop first approach
Mobile first approach //most often used
To keep the UI responsive i.e on mobile and desktop look similar we use media queries 

break-point: point at which your css/ui starts breaking is break point, at that point we need to write media query

@media screen/print

@media screen and (min-width:600px){
    // define styles if minimum width reaches 600px
    .container {
        flex-direction:row;
    }
}

//Complex examples 
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}

//Any one query matches 
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}


SASS/SCSS Basics:
=================

SASS Vs SCSS

SASS (Syntactically Awesome Style Sheets) and SCSS (Sassy CSS) are both preprocessor languages that are interpreted or compiled into CSS. They essentially serve the same purpose, which is to extend the functionality of CSS, making it easier and more efficient to work with.

Sass extends css ,doesnot run in browser, extends css during development, to be compiled to normal css when rendered in browser 

What TS is for JS, SCSS or SASS is for css

Here are some of the differences:

1. **Syntax**: SASS uses a syntax that is similar to Haml. It doesn’t use braces and semicolons, which makes it quite different from traditional CSS. On the other hand, SCSS syntax is similar to CSS where you have to use semicolons and braces.

2. **File Extension**: SASS files use the .sass file extension whereas SCSS files use the .scss file extension.

Example SCSS
============
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

Example SASS
=============
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color

4. **Readability**: Because SCSS syntax is similar to CSS, it is arguably easier to read for someone who is already comfortable with CSS. SASS syntax is cleaner and more concise, but it may take some getting used to for developers who are used to CSS.

5. **Advanced Features**: Both SASS and SCSS can use advanced features such as variables, nested rules, imports, mixins, inheritance, and color operations.

Features of Sass/Scss
======================
--> Nested Rules
--> Helper functions
--> Mixins
--> Inheritance
--> Partials 
--> Conditions and loops 
--> Variables 

Nested Rules: SCSS allows you to create nested rules that greatly increases the speed at which you can style elements:
Example : 
In css this is nav>ul>li>a
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

Helper Functions: SCSS has a number of built-in helper functions. one of the function is darken that darken a color by a percentage:
div {
  background-color: darken(#3cb371, 10%);
}
Example : https://sass-lang.com/documentation/modules/map/
color functions like darken, lighten,saturate 
Math functions :
Map functions :map.get($fonts, "Helvetica", "weights", "regular"); , map.has-key() etc 
selector functions: replace, append , nest, etc

Mixins: Mixins allow you to create reusable chunks of SCSS: similar to function in javascript
scss
@mixin reset-list($params) {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul {
  @include reset-list;
}

@mixin mediaQuery($width){
    @media and (min-width: $width){
         @content;
    }
}

//usage of mixin
.xxx{
    @include mediaQuery(100px){
        background:blue //@content 
    }
    padding:10px  //other css 
}

Inheritance: In SCSS you can inherit styles from another selector using @extend:
scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}
Partials: Partials in SCSS allow you to create small pieces of code that you can incorporate into other files. Partials start with an underscore:
scss
// _reset.scss
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

// style.scss
@import 'reset';
Conditions and loops: SCSS supports control structures like conditionals and loops:
scss
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 100% / $i;
  }
}

Variables: Variables in SCSS make it easy to reuse common values:
scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

How to configure SASS/SCSS using WebPack?
https://dev.to/deepanjangh/setting-up-css-and-sass-with-webpack-3cg
Step 1: npm i --save-dev css-loader style-loader //dev deps

NOTE:  The order in which webpack apply loaders is from last to first, so as said earlier the css-loader will generate the output string which will be used by the style-loader.

Step 2: // DEV environment Inside webpack.dev.config.js
module.exports = {
mode: "development", entry: path.resolve(__dirname, './src/index.js'),
    devtool: "eval-source-map",
module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
}

css-loader: resolves url(), @import() , will take all css and generate to string and pass to style-loader.
style-loader: will take the string and embed it into style tag in index.html.

//PRODUCTION ENVRIRONMENT webpack.prod.config.js
For production: 
npm i --save-dev mini-css-extract-plugin
***extract the miniCssExtractPlugin and replace the style-loader with MiniCssExtractPlugin.loader
MiniCssExtractPlugin extracts CSS and create a CSS file per JS file,
This will create source-maps for css.

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports ={
	module: {
	rule:[
	{
             test: /\.(css)$/,
             use: [MiniCssExtractPlugin.loader,'css-loader']
    }
	]
	}
	plugins: [new MiniCssExtractPlugin()],
}








//This will apply for printers only
@media print and (min-width:900px){

}











