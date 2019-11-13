# Part 0: Preface

Nearly all relevant JavaScript projects have been developed on Linux or macOS systems and for Linux or macOS systems, which regularly creates some kind of "impedance mismatch" in terms of availability and reliability of tools for Windows.

If you absolutely must use Windows for developing JavaScript applications, then don't worry, you will be just fine. Note, however, that this book will not provide the same level of hand-holding as it does for readers working on Linux or macOS. At some points, you will have to use alternatives to the tools recommended and explained here, and while the book will point you in the right direction, you will be quite a bit more on your own.


# Part 1: Introduction to JavaScript

## Values and Types

Starting to write JavaScript code is really simple. All we need is an environment which allows to interpret and run the JavaScript code that we write. There are several environments we can choose from, and we will learn about the different environments that are able to handle our code, but for now we will start with one that is readily available for us: the web browser.

All mainstream web browsers - Chrome, Firefox, Internet Explorer, Edge, Safari, Opera, to name the most famous ones - are able to run JavaScript code, and we can use them for our first experiments.

To follow along, please open your Chrome or Firefox browser. If you don't have at least one of these currently installed, then please visit https://www.google.com/chrome or https://www.firefox.com to download and install them.

After opening the browser, you don't need to surf to any specific webpage. Instead, we want to work with the browser's JavaScript console, where we can write code and execute it.

In Firefox, hit CTRL-SHIFT-K (or, on macOS, ALT-CMD-K) to open the console. In Chrome, use CTRL-SHIFT-I (or, on macOS, ALT-CMD-I) to open the Developer Tools, and then click on the "Console" tab within the newly opened pane to access the console.

When reaching the console, it's possible that it is already filled with some warning and error messages. That's not a problem - simply ignore these. Both browsers also provide a button which empties the console. It's a trashcan icon in Firefox, and a circle-with-a-diagonal-line icon in Chrome.

The console offers you a prompt which allows you to type in text, as can be seen in the following screenshot:

@TODO: Add screenshot

Everything we enter into this console will be evaluated by the JavaScript interpreter embedded into the browser, as soon as we end our input by hitting the ENTER key.

This enables us to run our very first JavaScript code.

To do so, type the following at the console input prompt: `"hello"`, and then hit the ENTER key. Note the quotation marks - these are important!

As a result, the console will print our text back to us - in this case, it's `<- "hello"`. The left arrow isn't actually part of the response - it simply denotes that this is a reply from the JavaScript interpreter.

Right now, the content of your console should look like this:

    >  "hello"
    <- "hello"

The `>` symbol (in some browsers it might look like `>>`) denotes the input line, and the `<-` symbol denotes the output line.

What we just entered, and what the JavaScript interpreter evaluated and executed, is a very simple JavaScript *expression*. Our expression consists of one single element: a *value* - the text *hello*.

Whenever JavaScript evaluates an expression, this evaluation creates a *result*. The result of evaluating a "value expression" like `"hello"` is the value itself - hence the console echoing the value back to us.

Every value in JavaScript has a certain *type*. The type of value `"hello"` is *string*, which is the type that JavaScript uses for all text values.

We can run other expressions that evaluate to values of other types:

    >  1
    <- 1

    >  0.5
    <- 0.5

    >  true
    <- true

This introduces two new types: *number* and *boolean*. For numbers, JavaScript doesn't differentiate between integer and floating point numbers - in other words, the values `1` and `1.0` are identical, and thus, `1` and `0.5` have the same type.

As expected, values of type *number* can be used for mathematical operations. Entering `1 + 1` at the console will return `2`, as does `1.0 + 1.0`. In order to get a floating point number back, we must run an operation where the result contains a fractional part, e.g. `1 + 1.5`, which of course returns `2.5`. Numbers with a fractional part of zerro, like `1.0`, are always simplified to the whole number, e.g. `1`.

Operations like `3 * 2.5` and `5 / 2` execute a multiplication and a division just like expected, and operator precedence is applied as usual, and can be enforced with parentheses, which is why `3 * 2 + 5` returns `11`, while `3 * (2 + 5)` returns `21`.

The plus sign `+` has an obvious meaning when dealing with values of type *number*, but it also works with *string* values, and allows to concatenate texts: `"foo" + "bar"` results in `"foobar"`.

The *boolean* type has only two possible values, `true` and `false`, and is used, as its name implies, for boolean operations. For example, boolean operations can result from comparing numbers: `1 == 1` will return `true`, as does `1 < 2`, while `1 == 2` and `1 > 2` will return `false`.

We can combine multiple simple boolean expressions into a large boolean expression, by combining the simple expressions with *boolean operators*. The boolean *and*, expressed with `&&`, results in `true` if both sides of the expression are themselves `true`:

    1 == 1 && 2 == 2

results in `true`, while

    1 == 1 && 2 == 3

results in `false`.

The other operator is `||`, which expresses the boolean *or*. It resolves to `true` if at least one side of the expression is `true`, and to `false` only if both sides resolve to `false`:

    >  1 == 1 || 2 == 2
    <- true

    >  1 == 2 || 2 == 2
    <- true

    >  1 == 1 || 2 == 3
    <- true

    >  1 == 2 || 2 == 3
    <- false

Note how we use `==` for comparison, while we used `=` for assignment.

But there is another comparison operator, which is useful when we compare values of different types: `0 == 0` is of course `true`, but `0 == ""` is also true. This might not be what you want, because the number `0` and the empty string `""` are two different things - we probably agree that an empty string is something different than the number zero.

In order to make sure that the two things we compare have the same value *and* also have the same type, we can use the `===` operator, which checks for type *and* value. Because comparisons with `==` are less strict, they are a common source of confusing bugs. It's therefore recommended to always compare using `===`, unless you know precisely that you want a less strict comparison.

Mixing values of different types is possible not only for *comparison* - you can also *combine* values of different types to create new values. For example, adding the *number* value `1` to the *string* value `foo` creates a new string value: `1 + "foo"` results in value `"1foo"`, of type *string*.

It's important to understand that the same logic applies when comparing values of different types with `==` or combining values of different types with `+`: for the JavaScript interpreter, it's a two-step process called *type coercion*. First, one of the values is translated into another type, and only then the comparison or combination takes place.

There's a whole lot of rules behind type coercion in JavaScript. However, the basics are simple - whenever type coercion happens, a values is translated into one of only three types: into a string, into a boolean, or into a number.

When we run `1 + "foo"`, then the JavaScript interpreter assumes that we want a result of type *string*, and therefore translates the number `1` into the string `"1"`, and then concatenates both strings together into `"1foo"`. Because the string equivalent of the number `1.0` is `"1"`, too, the result of `1.0 + "foo"` is again `"1foo"`, while `1.5 + "foo"` results in `"1.5foo"`.

We could say that when working with `+`, the string value as part of the calculation "wins", and the non-string part of the calculation is translated into a string value. The opposite is true when working with `-`, `*`, or `/`. The result of `5 - "2"` is the number `3`, the result of `5 * "2"` is the number `10`, and `5 / "2"` results in `2.5`. Here, the number part of the calculation "wins", and the string is translated into a number before the calculation is done.

Note that parentheses play a role here, too: `1 + 2 + "foo"` results in `"3foo"`, while `1 + (2 + "foo")` results in `"12foo"`.

Equations are evaluated from left to right: `1 + 2 + "3"` is the string `"33"` - first, `1 + 2` are evaluated to the number `3`, which is then concatenated with string `"3"` into string `"33"`.

When comparing a value of a type other than *boolean* to a boolean value with `==`, the non-boolean value is first converted to a boolean value. For example, the number `0` becomes `false`, which is why `0 == false` evaluates to `true`, while `1 == false` evaluates to `false` - that's because `0` is translated into `false`, and `1` is translated into `true`.

You can do these translations explicitly, through *type casting*. To do so, use one of the following:

- `Boolean(expression)` transforms `expression` into a *boolean* value
- `Number(expression)` transforms `expression` into a *number* value
- `String(expression)` transforms `expression` into a *string* value

For example, `Boolean(0)` and `Boolean("")` translate into `false`, while `Boolean(1)`, `Boolean("1")` - **and** `Boolean("0")`! - all translate into `true`. You can type cast more complex expressions, of course - `Number("1" + 2)` will result in a value `12` of type *number*.

Note that this introduces another important element of the JavaScript language - functions - which we are going to discuss in detail later in this book.

Because keeping all these type coercion rules in mind isn't easy, and because not all of them are straightforward, it really is recommended to always use the `===` comparison operator, which doesn't do any kind of type coercion and, as explained, compares value *and* type.

Let's now write a more complex JavaScript expression. Please enter and run `let a = "hello"` in the console.

What we just did was a so-called *variable declaration and assignment* - we *declared* the existance of a new variable named `a`, and *assigned* it the value `"hello"`. In JavaScript, as in all other programming languages, variables act as containers for values. It's like using an envelope that has "a" written on it and putting a letter with the text "hello" into this envelope.

It's important to understand that when the JavaScript interpreter evaluates this single expression, it actually performs **two** things: first, a variable is *declared*, that is, the variable name is from then on known to the JavaScript interpreter. Afterwards, an initial value is then *assigned* to the newly defined variable, making the value accessible under the name of the variable.

In other words, the expression

    let a = "hello"

is equivalent to these two expressions:

    let a
    a = "hello"

Whatever approach you choose, `a` is now identical to the string value `"hello"` by any practical measure. `a == "hello"` is true, as is `a === "hello"`, and because `"hello" + " world"` results in `"hello world"`, so does `a + " world"`.

Did you encounter an error while trying out the expressions starting with `let`? Something like `Uncaught SyntaxError: Identifier 'a' has already been declared"` or `SyntaxError: redeclaration of let a`? Don't worry, that's expected. Within any one JavaScript interpreter session, every variable can be declared only once. Once a variable name has been declared with `let`, it cannot be redeclared.

If you want a clean slate with no variables declared, you need reload the browser tab to which the console is attached, or open a new tab or window with a new console - it's not enough to close and reopen only the console.

With this out of the way, let's further examine our first *let* expression, `let a = "hello"`.

When executing a `let` expression, the response of the interpreter isn't an echo of what we wrote, and we also didn't get back the string value `"hello"` - instead, we got back the value `undefined`:

    >  let a = "hello"
    <- undefined

This sounds like something didn't work as intended, but that's not the case. The JavaScript interpreter evaluated and executed our code successfully, but this time, while the value of `a` became `"hello"`, *evaluating the expression itself* did result in an entirely different value: `undefined`.

In a sense, `undefined` is JavaScript's way of saying "nothing to see here, move along".

What type does the value `undefined` have? It's type is also named `undefined`, and the value `undefined` is the only value that type `undefined` offers - this clearly is a very special language construct.

Let's play around a bit with with this. JavaScript ships with a function called `typeof`, and we can use it to investigate the type of a value or an expression. Using it, we can verify that the name of the type of value `undefined` is indeed "undefined":

    >  typeof(undefined)
    <- "undefined"

Of course, we can also check the type of other values:

    >  typeof("hello")
    <- "string"

    >  typeof(1)
    <- "number"

    >  typeof(true)
    <- "boolean"

Passing more complex expressions is fine, too:

    >  typeof(1 + 1)
    <- "number"

    >  typeof(1 == 1)
    <- "boolean"

    >  typeof(1 + "foo")
    <- "string"

And we can check for the type of variable `a`:

    >  typeof(a)
    <- "string"

Here's a catch. You can check the type of a variable that is merely *declared*, but hasn't been *assigned a value* yet:

    >  let x
    >  typeof(x)
    <- "undefined"

This shows that even a variable to which we did not yet assign any value, still has a type: *undefined*.

Irritatingly, the same is true for completely undeclared variables:

    >  typeof(y)
    <- "undefined"

Still, `x` and `y` are different, because only one of them is actually declared. We can make this difference visible when we try to access the value of `x` and `y` - which, by the way shows that not only does `x` have a type, it also has a value (which isn't that surprising; as we've learned, variables of type *undefined* by definition must have one and only one value: `undefined`):

    >  x
    <- undefined

    > y
    ReferenceError: y is not defined

Letting the JavaScript interpreter evaluate the undeclared expression `y` correctly results in an error - as `y` is not yet declared, the interpreter doesn't know about it. Another catch, however, is that the error message states that "y is not *defined*" - which sounds very much like "y is undefined", but that's not the same thing. It would be a lot less confusing if the error message would read "y is not *declared*".

So, two catches here: If the JavaScript interpreter encounters a variable name that hasn't been declared yet, it bails out (which is correct), stating that the variable has not yet been *defined* (which is confusing). However, passing an undeclared variable name to `typeof` does *not* make the JavaScript interpreter bail out (which is confusing), and returns type *undefined* - which is even more confusing.

Ok, back to our new variable, `a`, which is neatly declared and neatly assigned to a value, and should therefore make for an unconfusing experience.

While we cannot re-declare an already declared variable, we can re-assign new values to variables declared with `let` - even values of a different type. `"hello"` is always `"hello"` and is always a *string*, but we can assign `a` another value, for example `a = "goodbye"` and `a = 1` - this changes its value, and potentially, its type:

    >  a
    <- "hello"

    >  a = "goodbye"
    <- "goodbye"
    >  typeof(a)
    <- "string"

    >  a = 1
    <- 1
    >  typeof(a)
    <- "number"

This shows one of the core properties of the JavaScript language: it is a so-called *loosely typed* or *dynamic* language - that is, the type of a variable isn't fixed, and can dynamically change during the run of an application.

When we declare a variable, we can also assign it the value of an existing variable:

    >  let b = "foo"
    >  let c = b
    >  c
    <- "foo"

Important detail: `b` and `c` now have the same value, `"foo"`, but they do not "share" this value, because ´c´ got an independent copy of `b`'s value, which can be demonstrated like this:

    >  b = "bar"
    >  c
    <- "foo"

Changing the value of `b` did **not** change the value of `c` - although `c` has been declared with `let c = b`, it is nevertheless completely independent from `b`.

In addition to variables, JavaScript supports *constants*. Like variables, they act as a container for a value, making the value available under the name of the constant - however, we are forced to assign a value upon declaration, and cannot re-assign another value once the const has been declared:

    >  const d = "foo"
    >  d
    <- "foo"

    > d = "bar"
    TypeError: invalid assignment to const `d'

    > const e
    SyntaxError: missing = in const declaration

Just like variables, constants can be used in expressions just like the values they contain would be used:

    >  1 + d
    <- "1foo"

Fine, let's recap what we've learned so far:

- Every major browsers ships with a JavaScript interpreter, and using a browser's *console* tool, we can work with this interpreter interactively.
- JavaScript code consists of *expressions*, which are pieces of code that the JavaScript interpreter can evaluate and execute. The console tool allows us to send expressions to the JavaScript interpreter, which then prints the result of evaluating that expression back to the console.
- Simple expressions like `"hello"` can be combined into more complex expressions like `1 + "hello"`, which can be combined into ever more complex expressions like `let d = (1 + "hello") + (Number("5") / 8) + "hey"`.
- One of the most simple JavaScript expressions is a *value*, e.g. `"hello"`. Every value in JavaScript has a *type*, and so far, we've encountered the types *string*, *number*, *boolean*, and *undefined*.
- Simple expressions can be combined into more complex impressions using *operators*, e.g. `+`, `-`, `*`, `/`, `==`, `===`, `<`, and `>`.
- How these operators work depends on the type of the values involved - for example, `1 + 1` results in `2`, while `1 + "1"` results in `"11"`.
- When combining or comparing values using these operators, *type coercion* rules are applied, which potentially translates a value with a given type into another value with another type. Because coercion rules are complex and can lead to subtle bugs when comparing only the values using the `==` operator, it's recommended to compare value and type using `===`.
- Instead of working with values directly, we can put values into *variables* or *constants*, which act as a container for a value.

With this, we've reached the very first milestone of our journey, and learned about the most basic elements of the JavaScript language. There is, of course, a lot more that we need to tackle.

To do so effectively, however, we need to switch into another JavaScript context first. Experimenting with one-liners is all nice and dandy for our first baby steps, but of course it's a very limited approach. Actual JavaScript applications aren't limited to single-line expressions, and while it's possible to enter multiple lines of code into the console (hold SHIFT while hitting ENTER), it's not that comfortable.

Thus, we will now use JavaScript in an environment that allows us to write some first full-fledged applications: *Node.js*. This allows us to write and run code for the command line, and enables us to tackle more language constructs like *if statements*, *loops*, *functions*, and many more. We will employ these to write code that is actually useful.

We will return to JavaScript in the browser, though, when we start working with React afterwards. But now, on to the command line!


# Part 2: Node.js - JavaScript on the command line

## A new context

As stated before, running JavaScript code, and therefore, building JavaScript applications, is possible in several different contexts. So far, we've worked with the browser console, which is a very dynamic context where every line of code we write is directly fed into a JavaScript interpreter - but it's also a very limited context.

The Node.js project takes a JavaScript interpreter (the one that ships with the Chrome browser, called *V8*), and makes it available as a stand-alone program on the command line. This allows us to not only feed single lines of code into the interpreter interactively, but whole files of JavaScript code, non-interactively.

This enables application building: using the simple expressions we already know, and some more complex ones we are going to learn about now, we can create complex programs that reliably and continuously serve a useful purpose - from simple command line tools to full-fledged server applications.

Being able to build useful server applications is an important building block of knowledge on our journey, because it allows us to provide an HTTP-based REST API for the React-based Single-Page Application we are going to build in the third part of this book.


## Setting things up

In order to be able to create Node.js applications, we need to set up some applications on our development system. Right now, the single best way to do this is to use a project called *NVM*, the Node Version Manager. It's a very useful utility from the Node.js ecosystem which allows to install and manage Node.js installations on your local system through a single command line tool. Among other things, it allows to easily switch between different versions of Node.js as needed - for example, you might want to generally use the latest version of Node.js on your system, but need to use an older version only for a certain project in a certain folder. NVM makes this straightforward.

There really is only one single downside regarding NVM: it is not available for the Windows platform. However, an alternative implementation exists at https://github.com/coreybutler/nvm-windows, which provides a similar experience.

To install NVM on your Linux or macOS system, you need to first head over to https://github.com/nvm-sh/nvm. The README of this project features an *Installation and Update* section, which refers to an install script.

This script is meant to be downloaded and executed on the command line. Thus, you need to launch the terminal emulator of your choice, e.g. *Terminal.app* on macOS. Then, go to https://github.com/nvm-sh/nvm/blob/master/README.md and paste the *curl* or *wget* line from the *Installation and Update* section - it looks similar to this one:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/vX.Y.Z/install.sh | bash

with `X.Y.Z` denoting the version number of the most recent release.

Please take the time to also read the additional notes further down in the README. For example, on macOS, it might be neccessary to first install the *Xcode command line tools*, or else installation of NVM might fail.

You've reached your goal as soon as running `nvm --version` on the command line works without an error, and prints the version number. When talking about working on the command line, I'm going to use the following notation:

     > something-to-be-entered-on-the-command-line

     One or multiple lines of
     output that results from runnning
     the entered command line

Running the `nvm --version` command line and its output therefore looks like this:

    > nvm --version

    0.35.0

Installing NVM itself doesn't give you a Node.js setup right away. But we can now use NVM to install Node.js. There are several ways to do so, and for our first project, we are going to work with the `.nvmrc` approach.

To do so, we need to create a project folder first. Find a place that suits you well - this can be your home folder, or maybe you already have a projects folder. The only thing that matters is that you should be able to create new folders and files at this location. From now on, I will assume that you are going to use your home folder, which can be reached on the command line from anywhere by simply running `cd`, as the parent folder of all project folders.

Once you are there, create the project folder, and change into the new folder:

    > mkdir nodejs-hello-world
    > cd nodejs-hello-world

We are going to tell NVM which version of Node.js we want to use for this project. To do so, we create a file named `.nvmrc` right in our project folder. The sole content of this file is one line that contains the Node.js version number we wish to use. This can be achieved like this:

    > echo "12" > .nvmrc

When running NVM while we are within the project folder, it will detect this file, read its contents, and will use the contained version number. The first thing we are going to use NVM for is to install Node.js:

    > nvm install

    Found '/home/manuelkiessling/nodejs-hello-world/.nvmrc' with version <12>
    Downloading and installing node v12.13.0...
    Downloading https://nodejs.org/dist/v12.13.0/node-v12.13.0-darwin-x64.tar.xz...
    ######################################################################## 100.0%
    Computing checksum with shasum -a 256
    Checksums matched!
    Now using node v12.13.0 (npm v6.12.0)

As you can see, using `12` as the Node.js version number works as a kind of wildcard - because we only provided the first part of the three part version number, NVM automatically assumes we want the most recent version of Node.js 12.x.y, which as of this writing is 12.13.0.

Version 12 of Node.js is the current Long Term Support version of Node.js, and is a very good starting point for new projects.

With this, Node.js is now available on your system! You can verify this by running `node --version`:

    > node --version

    v12.13.0

If this doesn't work as expected, or a version number other than the one you expected is shown, then run `nvm use` to ensure that for the current project, NVM has definitely switched to the intended version.

Let's see what we can do with this.

As said, Node.js is basically a JavaScript interpreter, wrapped into a command line application instead of a web browser. As such, it provides an interactive console, very much like the one we already worked with. Simply start the `node` application, and you are on a console:

    > node

    Welcome to Node.js v12.13.0.
    Type ".help" for more information.
    > let a = "hello"
    undefined

Type `.exit` if you want to leave this console.

While this is certainly nice to have whenever we feel like playing around with JavaScript interactively, we wanted to get away from the console and start writing "real" JavaScript applications.

To do so, we need to create our very first JavaScript code file. And this means we need to talk about code editors, because we need a tool to create our code files. JavaScript code files are simple text files, and even a very rudimentary plain text editor is perfectly capable to create these files. Nevertheless, more specialized code editors or and IDEs (Integrated Development Environments) make sense, because they make working on a large code base a lot more comfortable.

There's a large choice available, and if you are already using a code editor or an IDE you feel comfortable with, just stick with it. As long as there is at least basic support for JavaScript, you're fine.

In case you haven't made a decision yet, then Atom (https://atom.io/), Visual Studio Code (https://code.visualstudio.com/), or IntelliJ IDEA (https://www.jetbrains.com/idea/) are all worth a look.

Whatever tool you choose, please use it to create your first file, named `index.js`, and store it within the `nodejs-hello-world` folder, with the following content:

    "hello"

Yeah, I know. That old `"hello"` line again. But bear with me, it's useful to demonstrate something important. Our JavaScript expression is now stored in the file, and where the embedded interpreter of the console executed any expression immediately for us, we now need to do this explicitly ourselves by running our file through the `node` program, like this:

    > node index.js

The result is... literally nothing. A JavaScript console would have printed the result of evaluating the expression. But when feeding the file containing the expression into Node.js, we see nothing. Is the expression really evaluated? We can test this by intentionally creating an invalid expression - simply remove the second quotation marks:

    "hello

and run the file again:

    > node index.js

    /home/manuelkiessling/nodejs-hello-world/nodejs-hello-world/index.js:1
    "hello
    ^^^^^^

    SyntaxError: Invalid or unexpected token
        at wrapSafe (internal/modules/cjs/loader.js:891:16)
        at Module._compile (internal/modules/cjs/loader.js:941:27)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1011:10)
        at Module.load (internal/modules/cjs/loader.js:822:32)
        at Function.Module._load (internal/modules/cjs/loader.js:730:14)
        at Function.Module.runMain (internal/modules/cjs/loader.js:1051:12)
        at internal/main/run_main_module.js:16:11

Fine, this proves that our code reaches a JavaScript interpreter. But why don't we see any output?

The reason is that an interactive JavaScript console does the additional work of printing any expression's result back to us - but now we don't have a console, only a "pure" JavaScript interpreter, and we need to do the outputting ourselves. To do so, we can use method `log` of object `console`. Neither *objects* nor *methods* have not yet been introduced properly, but we need to change our file's content like this:

    console.log("hello")

Now the result of the expression is printed on the command line:

    > node index.js

    hello

Great, this mystery is solved.

Enough with the one-liners, though - let's write a more complex program with the elements we already know:

    let a = "hello";
    console.log(a);

    let b = 1;
    console.log(a + b);

and run it:

    > node index.js

    hello
    hello1

Nice. You may have noticed that I suddenly started to put a semicolon `;` at the end of each line. This isn't strictly neccessary, because most of the time JavaScript knows how to detect automatically that an expression has ended, even if it goes over multiple lines. But ending every expression with a semicolon explicitly removes any ambiguity, and is the dominant code style. We will stick to it in this book.

Let's use our new multi-line freedom to write a very first *control structure*:

    let n = 10;

    if (n > 0) {
        console.log("n is a positive number.");
    }

The output, of course, is `n is a positive number.`.

Let's dissect this code. So far, every JavaScript expression we've fed into a console or into Node.js has been executed - a control structure like this `if` statement potentially results in some part of code not being executed. If we set `n` to `-5`, then the line `console.log("a is a positive number.");` will not be executed.

This is because if statements introduce a so-called *block* (the part in parentheses `{` and `}`), and define a *condition* that must evaluate to `true` for the code in the block to be evaluated. The condition is the part in parentheses `(` and `)` that follows the `if` keyword. The condition may contain any valid JavaScript boolean expression - the only thing that's relevant is that the interpreter must be able to decide if the condition is `true` or `false` - in the latter case, the code in the block is simply skipped:

    if (1 === 1)      -> true  -> code in block is executed
    if ("a" === "a")  -> true  -> code in block is executed
    if (true)         -> true  -> code in block is executed
    if (1 + 2 === 3)  -> true  -> code in block is executed

    if (1 === 2)      -> false -> code in block is skipped
    if (1 === "1")    -> false -> code in block is skipped
    if (false)        -> false -> code in block is skipped
    if (1 + 2 === 4)  -> false -> code in block is skipped



# Part 3: React - Rich web applications with JavaScript


# Part 4: CDK - Deploy and run your applications on AWS, the serverless way
