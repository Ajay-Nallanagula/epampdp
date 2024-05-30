https://www.linkedin.com/learning/sass-essential-training/welcome?u=2113185

SASS Notes : syntactically awesome style sheets
## Css Pre-Processors
What Is A CSS Preprocessor?
CSS in itself is devoid of complex logic and functionality which is required to write reusable and organized code. As a result, a developer is bound by limitations and would face extreme difficulty in code maintenance and scalability, especially when working on large projects involving extensive code and multiple CSS stylesheets. This is where CSS Preprocessors come to the rescue.
       A CSS Preprocessor is a tool used to extend the basic functionality of default vanilla CSS through its own scripting language. It helps us to use complex logical syntax like – variables, functions, mixins, code nesting, and inheritance to name a few, supercharging your vanilla CSS. By using CSS Preprocessors, you can seamlessly automate menial tasks, build reusable code snippets, avoid code repetition and bloating and write nested code blocks that are well organized and easy to read.
However, browsers can only understand native vanilla CSS code and will be unable to interpret the CSS Preprocessor syntax. Therefore, the complex and advanced Preprocessor syntax needs to be first compiled into native CSS syntax which can then be interpreted by the browsers to avoid cross browser compatibility issues. While different Preprocessors have their own unique syntaxes, eventually all of them are compiled to the same native CSS code.
     Moving forward in the article, we will take a look at the 3 most popular CSS Preprocessors currently being used by developers around the world i.e Sass, LESS, and Stylus.
Before you decide the winner between Sass vs LESS vs Stylus, let us get to know them in detail first.

## Advantages
Variables: reusable variables
Mixins: macros
Operators: if/else, <,>,= aritmetic etc
Partials: @import different css into one and have a network call only for one css
Extend: @extend  will apply any css

## Disadvantages
Transpiled to css only , slight delay in build, can overcome with good bundlers like webpack 
Debugging could be challenging , can overcome with source maps




