# Part 0: Preface


## What you will learn

The approach of this book is to teach its readers how to build a fully working software application **from zero to production**.

This means two things:

1. You are not required to have done any kind of software development before getting started with this book. It will introduce and explain everything that is needed to build applications in full detail, assuming no prior knowledge or experience. This is the "from zero" part.

2. Building on the foundational knowledge it teaches in the first half, the book will then, step by step, guide you through the process of building a real, full-fledged, and completely working software application, again explaining every detail along the way, and shows how to "deploy" that application - that is, how to make that application available on the Internet for anyone to use. This is the "to production" part.

This is what this book will teach you in order to get from zero to production:

First, it introduces **JavaScript**, one of the most widely used programming languages in the world. You will learn how to write and run JavaScript code right within your web browser, and you will learn about the most basic components of the JavaScript language, like types and variables.

Then, it will introduce **Node.js**, a tool which allows you to write and run JavaScript code outside of your web browser, and you will learn how to use JavaScript and Node.js to build your first, simple software applications, with more advanced JavaScript components like control structures, loops, and functions.

Next, it will introduce **TypeScript**, a software language that at its core is identical to JavaScript, but adds some very important goodies. This allows you to write more complex JavaScript applications with ease and confidence.

It then introduces **React and Redux**, two JavaScript & TypeScript libraries that will enable you to write elegant web applications with beautiful and fast user interfaces.

Finally, it will teach you how to put all of your newly gained JavaScript, TypeScript, Node.js, React, and Redux knowledge to practical use, in order to create a fully working application running on Amazon AWS.


## Who this book is for

tbd

## Recommended working environment

Nearly all relevant JavaScript projects have been developed *on* Linux or macOS systems and *for* Linux or macOS systems, which regularly creates some kind of "impedance mismatch" in terms of availability and reliability of tools for Windows.

If you absolutely must use Windows for developing JavaScript applications, then don't worry, you will be just fine. Note, however, that this book will not provide the same level of hand-holding as it does for readers working on Linux or macOS. At some points, you will have to use alternatives to the tools recommended and explained here, and while the book will point you in the right direction, you will be quite a bit more on your own.


# Part 1: Introduction to JavaScript

This book teaches its readers how to build software applications with the programming language TypeScript.

And yet, it begins by introducing the reader to a different programming language: JavaScript.

One builds on the other. Ultimately, the code that is executed when your applications run is JavaScript code. And there is nothing wrong with writing your applications with JavaScript code directly - and actually, this is what we will do in the first part of this book.

But there are very good reasons to then take the next step and write your applications with TypeScript code instead - and have your computer translate your TypeScript code into JavaScript code before it is executed.

Luckily, taking this step is very straightforward. Once you understand the basics of software development with JavaScript (which is what the first part of this book takes care of), you can switch to TypeScript very easily. This is because TypeScript is not a completely new and different language - instead, it is a so-called *superset* of JavaScript, extending JavaScript's syntax with some additional syntax that makes your software development experience even better.

It does so by extending JavaScript, a language which doesn't allow to explicitly type its values, with explicit type annotation syntax, giving you type-safety while building your applications.

If you are new to programming, the above sentence probably didn't make much sense. Fear not! We will take it step by step: we first learn how to build software with JavaScript, and then we will learn how to build software even better with TypeScript.

The most important information right now is this: Every valid JavaScript program is also a 100% valid TypeScript program. Everything you learn about JavaScript - expressions, values, types, control structures, functions, and so on - are written and used in exactly the same way in TypeScript. Thus, once you've finished the first part of this book, and learned JavaScript, you have already learned 90% of TypeScript.




## Values and Types

Starting to write and run JavaScript code is really simple. All we need is an environment which is able to interpret and run the JavaScript code that we write. There are several environments we can choose from, and we will learn about the different environments that are able to handle our code, but for now we will start with one that is readily available to us: the web browser.

All mainstream web browsers - Chrome, Firefox, Internet Explorer, Edge, Safari, Opera, to name the most famous ones - are able to run JavaScript code, and we can use them for our first experiments.

To follow along, please open your Chrome or Firefox browser. If you don't have at least one of these currently installed, then please visit https://www.google.com/chrome or https://www.firefox.com to download and install them.

After opening the browser, you don't need to surf to any specific webpage. Instead, we want to work with the browser's JavaScript console, where we can write code and execute it.

In Firefox, hit CTRL-SHIFT-K (or, on macOS, ALT-CMD-K) to open the console. In Chrome, use CTRL-SHIFT-I (or, on macOS, ALT-CMD-I) to open the Developer Tools, and then click on the "Console" tab within the newly opened pane to access the console.

When reaching the console, it's possible that it is already filled with some warning and error messages. That's not a problem - simply ignore these. Both browsers also provide a button which empties the console. It's a trashcan icon in Firefox, similar to 🗑, and a circle-with-a-diagonal-line icon in Chrome, similar to ⃠.

The console offers a prompt which allows you to type in text, as can be seen in the following screenshot:

@TODO: Add screenshot

Everything we enter into this console will be evaluated by the JavaScript interpreter embedded into the browser, as soon as we end our input by hitting the ENTER key.

This enables us to run our very first JavaScript code.

To do so, type the following at the console input prompt: `"hello"`, and then hit the ENTER key. Note the quotation marks - these are important!

As a result, the console will print our text back to us - in this case, it's `<- "hello"`. The left arrow, `<-`, isn't actually part of the response - it simply denotes that this is a response from the JavaScript interpreter.

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

As expected, values of type *number* can be used for mathematical operations. Entering `1 + 1` at the console will return `2`, as does `1.0 + 1.0`. In order to get a floating point number back, we must run an operation where the result contains a fractional part, e.g. `1 + 1.5`, which returns `2.5` as expected. Numbers with a fractional part of zero, like `1.0`, are always shown simplified to the whole number, e.g. `1`.

Operations like `3 * 2.5` and `5 / 2` execute a multiplication and a division. Operator precedence is applied as usual, and can be enforced with parentheses, which is why `3 * 2 + 5` returns `11`, while `3 * (2 + 5)` returns `21`.

The plus sign `+` has an obvious meaning when dealing with values of type *number*, but it also works with *string* values, and allows to concatenate texts: `"foo" + "bar"` results in `"foobar"`.

The *boolean* type has only two possible values, `true` and `false`, and is used, as its name implies, for boolean operations. For example, boolean operations can result from comparing numbers: `1 == 1` will return `true`, as does `1 < 2`, while `1 == 2` and `1 > 2` will return `false`.

We can combine multiple simple boolean expressions into larger and more complex boolean expressions by combining simple expressions with *boolean operators*. The boolean *and*, expressed with `&&`, results in `true` if both sides of the expression are themselves `true`:

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

And finally, there's `!`, which can be used to "invert" a boolean expression - `true` becomes `false` and vice versa. This applies to simple and complex boolean expressions alike, but we need to put every part of a boolean expression into parentheses if we want to invert a complex expression:

    >  !true
    <- false

    >  !(1 == 1)
    <- false

    >  !(1 == 2 || 2 == 3)
    <- true

    >  !(1 == 1) || 2 == 3
    <- false

That last one is a good litmus test to see if we understand how boolean expressions work. As this is an "or" expression using `||`, it's enough to make it `true` if one side of it is `true`. The expression on the left, `1 == 1`, is `true`, but because it is inverted with `!` before the `||` comparison is done, the left side of the "or" expression is `false`.

Note how we use `==` for value comparison, while we used `=` for assignment.

And there is a second comparison operator, which is useful when we compare values of different types: `0 == 0` is of course `true`, but `0 == ""` is... also `true`. This might not be what you want, because the number `0` and the empty string `""` are two different things - we probably agree that an empty string is something different than the number zero.

In order to make sure that the two things we compare have the same value *and* also have the same type, we can use the `===` operator, which checks for type *and* value. Because comparisons with `==` are less strict, they are a common source of confusing bugs. It's therefore recommended to always compare using `===`, unless you know for sure that you want a less strict comparison.

Mixing values of different types is possible not only for *comparison* - you can also *combine* values of different types to create new values. For example, adding the *number* value `1` to the *string* value `foo` creates a new string value: `1 + "foo"` results in value `"1foo"`, of type *string*.

It's important to understand that the same logic applies when comparing values of different types with `==` or combining values of different types with `+`: for the JavaScript interpreter, it's a two-step process called *type coercion*. First, one of the values is translated into another type, and only then the comparison or combination takes place.

There's a whole lot of rules behind type coercion in JavaScript. However, the basics are simple - whenever type coercion happens, a value is translated into one of only three types: into a string, into a boolean, or into a number.

When we run `1 + "foo"`, then the JavaScript interpreter assumes that we want a result of type *string*, and therefore translates the number `1` into the string `"1"`, and then concatenates both strings together into `"1foo"`. Because the string equivalent of the number `1.0` is `"1"`, too, the result of `1.0 + "foo"` is again `"1foo"`, while `1.5 + "foo"` results in `"1.5foo"`.

We could say that when working with `+`, the string value as part of the calculation "wins", and the non-string part of the calculation is translated into a string value. The opposite is true when working with `-`, `*`, or `/`. The result of `5 - "2"` is the number `3`, the result of `5 * "2"` is the number `10`, and `5 / "2"` results in `2.5`. Here, the number part of the calculation "wins", and the string is translated into a number before the calculation is done.

Note that parentheses play a role here, too: `1 + 2 + "foo"` results in `"3foo"`, while `1 + (2 + "foo")` results in `"12foo"`.

Equations are evaluated from left to right: `1 + 2 + "3"` is the string `"33"` - first, `1 + 2` are evaluated to the number `3`, which is then concatenated with string `"3"` into string `"33"`.

When comparing a value of a type other than *boolean* to a boolean value with `==`, the non-boolean value is first converted to a boolean value. For example, the number `0` becomes `false`, which is why `0 == false` evaluates to `true`, while `1 == false` evaluates to `false` - that's because `0` is translated into `false`, and `1` is translated into `true`.

You can do these translations explicitly, through *type casting*. To do so, use one of the following:

- `Boolean(expression)` transforms `expression` into a *boolean* value
- `Number(expression)` transforms `expression` into a *number* value
- `String(expression)` transforms `expression` into a *string* value

For example, `Boolean(0)` and `Boolean("")` translate into `false`, while `Boolean(1)`, `Boolean("1")` - **and** `Boolean("0")`! - all translate into `true`. You can type cast more complex expressions, of course - `Number("1" + 2)` will result in value `12` of type *number*.

Note that this introduces another important element of the JavaScript language - functions - which we are going to discuss in detail later in this book.

Because keeping all these type coercion rules in mind isn't easy, and because not all of them are straightforward, it really is recommended to always use the `===` comparison operator, which doesn't do any kind of type coercion and, as explained, compares value *and* type.

Let's now write a more complex JavaScript expression. Please enter and run `let a = "hello"` in the console.

What we just did was a so-called *variable declaration and assignment* - we *declared* the existence of a new variable named `a`, and *assigned* it the value `"hello"`. In JavaScript, as in all other programming languages, variables act as containers for values. It's like using an envelope that has "a" written on it and putting a letter with the text "hello" into this envelope.

It's important to understand that when the JavaScript interpreter evaluates this single expression, it actually performs **two** things: first, a variable is *declared*, that is, the variable name is from then on known to the JavaScript interpreter. Afterwards, an initial value is then *assigned* to the newly defined variable, making the value accessible under the name of the variable.

In other words, the expression

    let a = "hello"

is equivalent to these two expressions:

    let a
    a = "hello"

Whatever approach you choose, `a` is now identical to the string value `"hello"` by any practical measure. `a == "hello"` is true, as is `a === "hello"`, and because `"hello" + " world"` results in `"hello world"`, so does `a + " world"`.

Did you encounter an error while trying out the expressions starting with `let`? Something like `Uncaught SyntaxError: Identifier 'a' has already been declared"` or `SyntaxError: redeclaration of let a`? Don't worry, that's expected. Within any one JavaScript interpreter session, every variable can be declared only once. Once a variable name has been declared with `let`, it cannot be redeclared.

If you want a clean slate with no variables declared, you need to reload the browser tab to which the console is attached, or open a new tab or window with a new console - it's not enough to close and reopen only the console.

With this out of the way, let's further examine our first *let* expression, `let a = "hello"`.

When executing a `let` expression, the response of the interpreter isn't an echo of what we wrote, and we also didn't get back the string value `"hello"` - instead, we got back the value `undefined`:

    >  let a = "hello"
    <- undefined

This sounds like something didn't work as intended, but that's not the case. The JavaScript interpreter evaluated and executed our code successfully, but this time, while the value of `a` became `"hello"`, *evaluating the expression itself* did result in an entirely different value: `undefined`.

In a sense, an `undefined` response is the JavaScript interpreter's way of saying "nothing to see here, move along".

What type does the value `undefined` have? Its type is also named `undefined`, and the value `undefined` is the only value that type `undefined` offers - this clearly is a very special language construct.

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

Still, `x` and `y` are different, because only one of them is actually declared. We can make this difference visible when we try to access the value of `x` and `y` - which, by the way, shows that not only does `x` have a type, it also has a value (which isn't that surprising; as we've learned, variables of type *undefined* by definition must have one and only one value: `undefined`):

    >  x
    <- undefined

    > y
    ReferenceError: y is not defined

Letting the JavaScript interpreter evaluate the undeclared expression `y` correctly results in an error - as `y` is not yet declared, the interpreter doesn't know about it. Another catch, however, is that the error message states that "y is not *defined*" - which sounds very much like "y is undefined", but that's not the same thing. It would be a lot less confusing if the error message would read "y is not *declared*".

So, two catches here: If the JavaScript interpreter encounters a variable name that hasn't been declared yet, it bails out (which is correct), stating that the variable has not yet been *defined* (which is confusing). However, passing an undeclared variable name to `typeof` does *not* make the JavaScript interpreter bail out (which is confusing), and returns type *undefined* - which is even more confusing. But at least we know now how the game is played.

Ok, back to our new variable, `a`, which is neatly declared and neatly assigned to a value, and should therefore make for a non-confusing experience.

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

    >  let b = "foo"
    >  let c = b
    >  c
    <- "foo"

    >  b = "bar"
    >  c
    <- "foo"

Changing the value of `b` did **not** change the value of `c` - although `c` has been declared with `let c = b`, it is nevertheless completely independent from `b` from there on.

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
- Simple expressions can be combined into more complex expressions using *operators*, e.g. `+`, `-`, `*`, `/`, `==`, `===`, `<`, and `>`.
- How these operators work depends on the type of the values involved - for example, `1 + 1` results in `2`, while `1 + "1"` results in `"11"`.
- When combining or comparing values using these operators, *type coercion* rules are applied, which potentially translate a value with a given type into another value with another type. Because coercion rules are complex and can lead to subtle bugs when comparing only the values using the `==` operator, it's recommended to compare value and type using `===`.
- Instead of working with values directly, we can put values into *variables* or *constants*, which act as a container for a value.

With this, we've reached the very first milestone of our journey, and learned about the most basic elements of the JavaScript language. There is, of course, a lot more that we need to tackle.

To do so effectively, however, we need to switch into another JavaScript context first. Experimenting with one-liners is all nice and dandy for our first baby steps, but of course it's a very limited approach. Actual JavaScript applications aren't limited to single-line expressions, and while it's possible to enter multiple lines of code into the console (hold SHIFT while hitting ENTER), it's not that comfortable.

Thus, we will now use JavaScript in an environment that allows us to write some first full-fledged applications: *Node.js*. This allows us to write and run code for the command line, and enables us to tackle more language constructs like *if statements*, *loops*, *functions*, and many more. We will employ these to write code that is actually useful.

We will return to JavaScript in the browser, though, when we start working with React afterwards. But now, on to the command line!


# Part 2: Node.js - JavaScript on the command line

## A new context

As stated before, running JavaScript code, and therefore, building JavaScript applications, is possible in several different contexts. So far, we've worked with the browser console, which is a very dynamic context where every line of code we write is directly fed into a JavaScript interpreter - but it's also a very limited context.

The Node.js project takes a JavaScript interpreter (the one that ships with the Chrome browser, called *V8*), and makes it available as a stand-alone program on the command line. This allows us to not only feed single lines of code into the interpreter interactively, but whole files of JavaScript code, non-interactively.

This enables application building: using the simple expressions we already know, and some more complex ones we are going to learn about next, we can create complex programs that reliably and continuously serve a useful purpose - from simple command line tools to full-fledged server applications.

Being able to build useful server applications is an important building block of knowledge on our journey, because it allows us to provide an HTTP-based REST API for the React-based Single-Page Application we are going to build in the third part of this book.


## Setting things up

In order to be able to create Node.js applications, we need to set up some applications on our development system. Right now, the single best way to do this is to use a project called *NVM*, the Node Version Manager. It's a very useful utility from the Node.js ecosystem which allows to install and manage Node.js installations on your local system through a single command line tool. Among other things, it allows to easily switch between different versions of Node.js as needed - for example, you might want to generally use the latest version of Node.js on your system, but you may also need to use an older version only for a certain project in a certain folder. NVM makes this straightforward.

There really is only one single downside regarding NVM: it is not available for the Windows platform. However, an alternative implementation exists at https://github.com/coreybutler/nvm-windows, which provides a similar experience.

To install NVM on your Linux or macOS system, you need to first head over to https://github.com/nvm-sh/nvm. The README of this project features an *Installation and Update* section, which refers to an install script.

This script is meant to be downloaded and executed on the command line. Thus, you need to launch the terminal emulator of your choice, e.g. *Terminal.app* on macOS. Then, go to https://github.com/nvm-sh/nvm/blob/master/README.md and paste the *curl* or *wget* line from the *Installation and Update* section - it looks similar to this one:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/vX.Y.Z/install.sh | bash

with `X.Y.Z` denoting the version number of the most recent release.

Please take the time to also read the additional notes further down in the README. For example, on macOS, it might be necessary to first install the *Xcode command line tools*, or else installation of NVM might fail.

You've reached your goal as soon as running `nvm --version` on the terminal command line works without an error, and prints the version number. When talking about working on the command line, I'm going to use the following notation:

     > something-to-be-entered-on-the-command-line

     One or multiple lines of
     output that results from runnning
     the entered command line

Running the `nvm --version` command line and its output therefore looks like this:

    > nvm --version

    0.35.0

Installing NVM itself doesn't give you a Node.js setup right away. But we can now use NVM to install Node.js. There are several ways to do so, and for our first project, we are going to work with the `.nvmrc` approach.

To do so, we need to create a project folder first. Find a place that suits you well - this can be your home folder, or maybe you already have a projects folder. The only thing that matters is that you should be able to create new folders and files at this location. From now on, I will assume that you are going to use your home folder (which can be reached on the command line from anywhere by simply running `cd`) as the parent folder of all Node.js project folders.

Once you are there, create the project folder, and change into the new folder:

    > mkdir nodejs-hello-world
    > cd nodejs-hello-world

We are going to tell NVM which version of Node.js we want to use for this project. To do so, we create a file named `.nvmrc` right in our project folder. The sole content of this file is one line that contains the Node.js version number we wish to use. This can be achieved like this:

    > echo "14" > .nvmrc

When running NVM while we are within the project folder, it will detect this file, read its contents, and will use the contained version number. The first thing we are going to use NVM for is to install Node.js:

    > nvm install

    Found '/home/manuelkiessling/nodejs-hello-world/.nvmrc' with version <14>
    Downloading and installing node v14.6.0...
    Downloading https://nodejs.org/dist/v14.6.0/node-v14.6.0-darwin-x64.tar.xz...
    ######################################################################## 100.0%
    Computing checksum with shasum -a 256
    Checksums matched!
    Now using node v14.6.0 (npm v6.14.6)

As you can see, using `14` as the Node.js version number works as a kind of wildcard - because we only provided the first part of the three part version number, NVM automatically assumes we want the most recent version of Node.js 14.x.y, which as of this writing is 14.6.0.

Version 14 of Node.js is the current Long Term Support (LTS) version of Node.js, and is an optimal starting point for new projects. You can find the most recent "LTS" and "Current" versions of Node.js at https://nodejs.org.

With this, Node.js is now available on your system! You can verify this by running `node --version`:

    > node --version

    v14.6.0

If this doesn't work as expected, or a version number other than the one you expected is shown, then run `nvm use` to ensure that for the current project, NVM has definitely switched to the intended version. However, note that for all practical purposes, it doesn't make any difference if your system uses another minor version, like *14.8.3* instead of *14.6.0*. And even if you have a higher major version, like *15.2.0*, you will probably still be good to follow along.

Let's see what we can do with this.

As said, Node.js basically is a JavaScript interpreter[^note1], wrapped into a command line application instead of a web browser. As such, it provides an interactive console, very much like the one we already worked with. Simply start the `node` application, and you are thrown into this interactive console:

    > node

    Welcome to Node.js v14.6.0.
    Type ".help" for more information.
    > let a = "hello"
    undefined

Type `.exit` or hit CTRL-D if you want to leave this console.

While this is certainly nice to have whenever we feel like playing around with JavaScript interactively, we wanted to get away from the console and start writing "real" JavaScript applications.

To do so, we need to create our very first JavaScript *code file*. And this means we need to talk about code editors, because we need a tool to create and edit our code files. JavaScript code files are simple text files, and even a very rudimentary plain text editor is perfectly capable to create and edit these files. Nevertheless, using specialized code editors or IDEs (Integrated Development Environments) makes sense, because they make working on a large code base a lot more comfortable.

There's a large choice available, and if you are already using a code editor or an IDE you feel comfortable with, just stick with it. As long as there is at least basic support for JavaScript, you're fine.

In case you haven't made a decision yet, then Atom (https://atom.io/), Visual Studio Code (https://code.visualstudio.com/), or IntelliJ IDEA (https://www.jetbrains.com/idea/) are all worth a look.

Whatever tool you choose, please use it to create your first file, named `index.js`, and store it within the `nodejs-hello-world` folder, with the following content:

    "hello"

Yeah, I know. That old `"hello"` line again. But bear with me, it's useful to demonstrate something important. Our JavaScript expression is now stored in the file, and where the embedded interpreter of the console executed any expression immediately for us, we now need to trigger this explicitly ourselves by running our file through the `node` program, like this:

    > node index.js

The result is... literally nothing. A JavaScript console would have printed the result of evaluating the expression. But when feeding the file containing the expression into Node.js, we see nothing. Is the expression really evaluated? We can test this by intentionally creating an invalid expression - simply remove the second quotation mark:

    "hello

and run the file again:

    > node index.js

    /home/manuelkiessling/nodejs-hello-world/index.js:1
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

Fine, this proves that our code reaches a JavaScript interpreter. But why don't we see any output for the non-broken code?

The reason is that an interactive JavaScript console does the additional work of printing any expression's result back to us - but now we don't have an interactive console, only a "pure" JavaScript interpreter, and we need to trigger the outputting ourselves. To do so, we can use method `log` of object `console`. Even though neither *objects* nor *methods* have yet been introduced properly, please change your file's content to this:

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

Nice. You may have noticed that I suddenly started to put a semicolon `;` at the end of each line. This isn't strictly necessary, because most of the time JavaScript knows how to automatically detect that an expression has ended, even if it goes over multiple lines. But ending every expression with a semicolon explicitly removes any ambiguity, and is the dominant code style. We will stick to it in this book from now on.

Let's use our new multi-line freedom to write a very first *control structure*:

    let n = 10;

    if (n > 0) {
        console.log("n is a positive number.");
    }

The output, of course, is `n is a positive number.`.

Let's dissect this code. So far, every JavaScript expression we've fed into a console or into Node.js has been executed - a control structure like the `if` statement potentially results in some part of code not being executed. If we set `n` to `-5`, then the line `console.log("a is a positive number.");` will not be executed.

This is because `if` statements introduce a so-called *block* (the part between parentheses `{` and `}`), and define a *condition* that must evaluate to `true` for the code in the block to be evaluated. The condition is the part in parentheses `(` and `)` that follows the `if` keyword. The condition may contain any valid JavaScript expression - the only thing that's relevant is that the interpreter must be able to decide if the condition results in a boolean `true` or `false`.

These conditions all resolve to `true`, and therefore, the block following the `if` statement will be executed:

    if (1 === 1)
    if ("a" === "a")
    if (true)
    if (1 + 2 === 3)
    if (1 + 2 === 3 && 4 + 5 === 9)

And these conditions all resolve to `false`, and therefore, the block following the `if` statement will not be executed:

    if (1 === 2)
    if (1 === "1")
    if (false)
    if (1 + 2 === 4 || 4 + 5 ==== 8)

Only identifying positive numbers is a bit boring, so let's extend our application to identify all possible cases:

    let n = 10;

    if (n > 0) {
        console.log("n is a positive number.");
    }

    if (n < 0) {
        console.log("n is a negative number.");
    }

    if (n === 0) {
        console.log("n is neither positive nor negative.");
    }

Obviously, by modifying the value of `n` (and re-running the application after each change), we can make our application write different outputs.

Our code can be improved by rewriting it from using three distinct `if` control structures to only one multi-part control structure:

    let n = 10;

    if (n > 0) {
        console.log("n is a positive number.");
    } else if (n < 0) {
        console.log("n is a negative number.");
    } else {
        console.log("n is neither positive nor negative.");
    }

This way, the code can branch out into one of several blocks; if the expression of the first `if` condition doesn't evaluate to `true`, then the next expression in the condition of the following `else if` statement is evaluated, and if even that one doesn't evaluate to `true`, then the block of the final `else` statement is executed.


Let's make our application a bit more complex. Say we want to check not only one value, but two. This could be achieved with a naive implementation where we simply duplicate our comparison logic after changing the value of `n`:

    let n = 10;

    if (n > 0) {
        console.log("n is a positive number.");
    } else if (n < 0) {
        console.log("n is a negative number.");
    } else {
        console.log("n is neither positive nor negative.");
    }

    n = -7;

    if (n > 0) {
        console.log("n is a positive number.");
    } else if (n < 0) {
        console.log("n is a negative number.");
    } else {
        console.log("n is neither positive nor negative.");
    }

This is a correctly working application that does exactly what we want, but clearly this isn't an efficient implementation. What if we want to check a thousand values? Copy-and-paste isn't going to cut it in an efficient manner.

Instead, we can turn our comparison logic into a code construct that can be re-used again and again without the need to spell the logic out repeatedly. The construct we need to create is a *function*.

Like an *if* control structure, a function consists of two parts: a block of code that is preceded by some kind of declaration. Before we apply this approach to our comparison logic above, let's start with a very basic example:

    const greet = (name) => {
        console.log("Hello " + name);
    };

Again, we dissect this in detail. Declaring a function creates a value, and this value can be assigned to a name like *greet* with `let` or `const`. We choose `const` because although that's possible, there isn't much sense to assign another value to *greet* afterwards.

The declaration itself follows after the equals sign, and has the base syntax `() => {}` - that is, a list of zero or more parameter names enclosed in parentheses, followed by the "arrow" `=>`, followed by the function body enclosed in curly braces. As always, we end this value assignment with a semicolon.

Let's look at some general rules and special cases for declaring functions.

Functions don't need to have parameters, in which case the parentheses are empty:

    const greetWithoutName = () => {
        console.log("Hello whoever you are.");
    };

And if the body of the function contains only a single line, then the curly braces that denote the beginning and the end of a block can be omitted:

    const greetWithoutName = () => console.log("Hello whoever you are");

But as soon as the function's body consists of multiple lines, the braces are required:

    const greetWithoutName = () => {
        console.log("Hello whoever you are.");
        console.log("Nice to meet you.");
    };

Multiple function parameter names must be separated with comma, like this:

    const greet = (firstname, lastname) => {
        console.log("Hello " + firstname + " " + lastname);
    };

You may wonder what the type of const `greet` is after assigning it a function. Unsurprisingly, it's `function`, which we can show by saving the following code and running it:

    const greet = (firstname, lastname) => {
        console.log("Hello " + firstname + " " + lastname);
    };

    console.log(typeof(greet));

The output will be "function".

When running this code you will realize how only the `console.log(typeof(greet));` line is actually executed. The function itself is *declared* and *assigned* (to variable `greet`), but its code, the part in the curly braces, isn't *run*.

This is because functions are only executed when they are *called* by another piece of code, like so:

    const greet = (firstname, lastname) => {
        console.log("Hello " + firstname + " " + lastname);
    };

    greet("John", "Doe");
    greet("Jane", "Doe");

The output of this will be:

    Hello John Doe
    Hello Jane Doe

Besides the `=>` arrow operator, which is simply a syntactic element needed to declare a function, and the ability to be executed by other pieces of code, functions introduce another new concept: parameters.

As we can see above, when calling a function with parameters, we need to write out the name of the variable we assigned this function to (here, it's `greet`), followed by values for its parameters, enclosed in parentheses (e.g. `"John"` and `"Doe"`). In case a function does not have parameters, we still need the parentheses to make it a function *call*, like so: `greet()`.[^note2]

A parameter behaves a bit like a variable declared with `let`, but it is a variable that has meaning only within the function's body block, which can easily be shown by running the following code:

    const greet = (name) => {
        console.log("Hello " + name);
    };

    console.log(name);

This will result in a `ReferenceError: name is not defined` error, because `name` doesn't have a meaning outside the curly braces that denote the body of function *greet*.

As a result, it is not problematic to declare two distinct `name` variables, one outside the function's body block and one inside:

    let name = "Outsider";

    const greet = (name) => {
        console.log("Hello " + name);
    };

    console.log(name);

    greet("Insider");

This will output "Outsider", followed by "Hello Insider", which demonstrates that variable declarations have a *scope*, that is, they have a meaning, and are accessible and visible, only within a certain context.

A code file always has at least one scope, the outermost scope where in the example above the first "name" variable is created. This outermost scope doesn't have to be created explicitly, while additional scopes are created, for example, by defining a function, in which case the function body has its own scope.

While this is straightforward, the details are a bit more complicated. While scopes are mostly independent from each other, they can still interact, at least in some directions. That's because scopes are *nested*, that is, one scope can live within another scope, forming a kind of parent-child relationship.

In the example above, we have two scopes, the implicit outer scope, and the function scope that we created by defining function *greet*.

This results in the function scope being the "child" of the outermost "parent" scope. And this, in turn, means that the function scope can "see" and access variables from the outer scope - in other words: child scopes have access to their parent scope.

We can demonstrate this with the following code:

    const greet = (name) => {
        console.log("Hello " + name + ". " + greeting);
    };

    let greeting = "Nice to meet you!";

    greet("Insider");

This will print "Hello The Insider. Nice to meet you!" to the console. And this is possible because although "greeting" is declared outside of the "greet" function, the inner scope of the function body, as a child of the scope where greeting was declared, can access it.

Note how the important aspect here is the *scope* in which "greeting" was defined, while it doesn't matter on which *line* it was defined. We first declared our "greet" function, already accessing "greeting", and declare that only a couple of lines later. This doesn't create any problems.

The inner scope has access to a variable of the outer scope, and to be even more precise, it has access to the *value* of a variable of the outer scope that the variable has at that moment in time when the inner scope is executed.

The following code shows what that means:

    const greet = (name) => {
        console.log("Hello " + name + ". " + greeting);
    };

    let greeting = "Nice to meet you!";

    greet("Insider");


    greeting = "How's it going?";

    greet("Insider");


This shows that the inner scope not only sees the initially assigned value of "greeting"; when the value of "greeting" is changed, then a subsequent execution of the inner scope code will see this change.

What we see in action here is a *closure*. The [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) define these as follows:

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

And this is exactly what we saw: at the time that our *greet* function is created, the scope it is created in contains a variable *greeting*, and thus, our function is *bundled together* with this surrounding state.



This, however, is neither the most crazy nor the most useful thing we can do with functions. What's really useful is the fact that functions are variables, too, and can be treated like other variables in many interesting contexts.

For example, we can *pass* a function to another function:

    const greetFriendly = (name) => {
        console.log("Hello " + name);
    };

    const greetTwoPeople = (greetFunc, nameOne, nameTwo) => {
        greetFunc(nameOne);
        greetFunc(nameTwo);
    };

    greetTwoPeople(greetFriendly, "Jane", "John");


This example contains two functions, *greetFriendly* and *greetTwoPeople*. The interesting thing is how *greetTwoPeople* uses *greetFriendly*, but in a special way. Instead of calling *greetFriendly* directly, the *greetTwoPeople* function expects that we pass a function via its first parameter - and then calls this passed function.

Super-important detail: note how on the last line, *greetFriendly* is *passed*, not called! Contrast this with the following:

    greetTwoPeople(greetFriendly(), "Jane", "John");

This would be wrong, because by adding the parentheses to *greetFriendly*, we call and therefore execute it, instead of passing it to *greetTwoPeople* as a value, for later use.

By passing *greetFriendly* into *greetTwoPeople* under the parameter name *greetFunc*, we make *greetFriendly* available to *greetTwoPeople*, just like we make the value *"Jane"* available to *greetTwoPeople* under the parameter name *nameOne*.

The function calls to *greetFriendly* are then triggered within *greetTwoPeople*, via the name of the parameter, *greetFunc*, followed by parentheses (which contain the parameters that need to be passed to *greetFriendly*).

This shows how functions are just another type of value in JavaScript that can be passed around as needed.

If functions are just another kind of value - do we need to declare them with a name? After all, we can simply pass the string value "Jane" where required, without the need to declare a variable with that value first.

And indeed, we can create function values on-the-go, like this:

    greetTwoPeople((name) => console.log("Hi " + name), "Jane", "John");

If you are not used to this kind of code, it's a bit hard to read, admittedly. That's because we do an inline declaration of the function we pass as *greetFunc*, and it's easy to get lost as to what is part of the function declaration and the rest of the function call to *greetTwoPeople*. It helps to spread the parameters of the function call over several lines, with each parameter on a line of its own:

    greetTwoPeople(
        (name) => console.log("Hi " + name),
        "Jane",
        "John"
    );

Because they are not assigned to a named variable, these inline-declared functions are also called *anonymous* functions.

Anonymous functions can be just as complex as named functions, with multiple parameters and a multi-line body block:

    (firstNumber, secondNumber) => {
        console.log("The sum of firstNumber and secondNumber is " + (firstNumber + secondNumber));
        console.log("The product of firstNumber and secondNumber is " + (firstNumber * secondNumber));
    }

Or, they can be very simplistic and succinct:

    () => 5 * 3

The latter example happens to also introduce another concept: functions - anonymous functions as well as named functions - can, and very often do, *return* a value when being called. The example above returns the integer value *15*. It does return a value because it does not have a single-line body that is not enclosed in parentheses - the result of its body therefore is returned implicitly.

If we want to return a result from a function with a multi-line body, we need to do so explicitly, using the *return* keyword:

    () => {
        console.log("Going to return the product of 5 and 3...");
        return 5 * 3;
    }

It is important to differentiate between assigning a named variable to a function declaration versus assigning a named variable to a function return value:

    const calculateProduct = () => 5 * 3;

    const product = calculateProduct();

Here, the value of *calculateProduct* is a function, while the value of *product* is the result of calling (or running, or executing) the function.

In order to allow for better readable code snippets, let's introduce another concept. JavaScript code files can contain *comments*, that is, text that is ignored by the JavaScript interpreter but can be used by code authors to add helpful annotations, like this:

    # This line assigns a function to variable calculateProduct...
    const calculateProduct = () => 5 * 3;

    # ...while this line assigns the result of calling calculateProduct to a variable named "product"
    const product = calculateProduct();

Note how JavaScript won't stop you from getting fancy, especially with anonymous function declarations. This is perfectly valid code:

    console.log( ( (x) => x * 2 )( ( (x) => x * x )(8) ) );

But... yeah. Let's just remember that most of the times, software source code is written exactly once, but read often. Thus, my advice is to optimize your code for reading:

    const duplicateNumber = (x) => x * 2;

    const squareNumber = (x) => x * x;

    console.log(
        duplicateNumber(
            squareNumber(8)
        )
    );


We are now going to put our new Node.js and function chops to use, by writing our first web server application.


With this, we leave our "Hello, world" terrain for good, and we therefore create a new folder on the same level as "nodejs-hello-world", called `nodejs-webserver`, like this:

    > mkdir nodejs-webserver
    > cd nodejs-webserver

Again, we are going to define which version of Node.js we want to use for this project via NVM:

    > echo "14" > .nvmrc
    > nvm use


We start writing our server code in file `index.js`. Start with the following line:

    const http = require("http");

We already now all the elements of this line:

- `const` is the JavaScript keyword used to introduce the declaration of a variable that will not change its value after its declaration
- `http` is the name of the variable that is about to be declared
- `require` is the name of a function - in this case, a function that we did not declare ourselves; it is instead provided by Node.js, and explained shortly
- `require` takes a parameter of type string, which we provide here with value `"http"`

We can already deduct that at this point, the variable named `http` contains whatever value the function call `require("http")` returns - we only need to solve one mystery: what is `require` and what does it do?

A correct answer that doesn't actually explain anything is: `require` loads and returns the (built-in) Node.js module provided under the name that is passed to the `require()` function call as a parameter.

Next question: What is a Node.js module?

A module is a piece of JavaScript code that is stored somewhere on our hard disk, and which therefore isn't immediately available for us, but can be made available by "requiring" it within our own code.

Quick exercise to illustration this: let's create and then require our own module!

To do so, first create another file within `nodejs-webserver`, called `greeter.js`, with the following content:

    const welcome = (name, formally) => {
        if (formally) {
            return "Good day to you, " + name;
        } else {
            return "Hello " + name;
        }
    };
    
    const seeOff = (name) => "Goodbye " + name;
    
    module.exports = {
        welcome,
        seeOff
    };

We declare two functions, `welcome` and `seeOff`, but we do not use them within this file - instead, we *export* them, which is kind of the counterpart of `require` - it makes elements declared within one file available for use in other files.

This setup implicitly turns `greeter.js` into a Node.js module - every JavaScript file which exports something can be used as a module within a Node.js codebase.

To do so, switch back to file `index.js` and replace its content as follows:

    const calculator = require("./greeter");

    console.log(greeter.welcome("John", false));
    console.log(greeter.welcome("John", true));
    console.log(greeter.seeOff("John"));

You will notice a subtle difference - while "http" is an internal module that ships with Node.js, "greeter" is a module written by us, and we need to tell *require* exactly where to find the module file; therefore, the leading `./` path is necessary. *Not* necessary, on the other hand, is the file extension. While we could write `const greeter = require("./greeter.js");`, we don't have to - the `.js` extension can be left out.

The "thing" we get from calling `require("./greeter")`, and which we assign to constant `greeter`, is of type *object*. An object is, at its core, a very simple key-value store, with the keys being of type *string* - or at least values that can be converted to strings.

For example, this is a simple object:

    const obj = {
        "firstname": "John",
        "lastname": "Doe",
        "age": 35
    };

The values of an object are accessed through their respective key, like this:

    obj.firstname

or like this:

    obj["firstname"]

Don't get too fancy with key types, though - it's best to stick to simple strings; the results might be unexpected if you don't:

    const obj = {
        1: "John",
        "1": "Doe"
    };

As the integer value `1` is converted to the string value `"1"` in order to be usable as an object key, we have an object where the key `"1"` is defined twice; as this is not possible, the second declaration overrides the first one - the result is an object with only one key, `"1"`, and the value under this key is `"Doe"`.

It's much more common to access object keys using the dot notation, as in `obj.firstname` or `console.log` (another mystery solved: `console` is an object, and on its key `log` a function is defined).

You must, however, use the bracket notation if e.g. the key is a string with a space: `obj.first name` or `obj."first name"` won't work - in such a case, you need to write `obj["first name"]`.[^note3]

However, when we assigned an object to `module.exports` in module `greeter`, we did *not* specify any keys, only values. This worked because the values where already available under a name - const *welcome* and const *seeOff* - and thus, by providing these values via their named variables, JavaScript can infer the object keys by simply using the variable names as key names.

This works with any type of value, not only function values:

    const name = "John Doe";

    const person = { name };

    console.log(person.name);

Ok, back to our web server. Scrap the current content of `index.js` and re-start with the following initial content:

    const http = require("http");

It's now clear what that does: it gives us a variable named `http` with an object that is exported by internal Node.js module "http". There's no black magic involved, actually - see https://github.com/nodejs/node/blob/v14.15.4/lib/http.js#L59-L74 for the code that exports this object.

As you can see, this module exports more than a dozen values - for now, we are especially interested in function value `createServer` which, believe it or not, can be used to create an HTTP server. It is used like this:

    const http = require("http");

    http.createServer();

This in itself doesn't do anything useful, though. We need to provide code that describes what a created server should do with incoming HTTP requests.

We do this by providing an anonymous function as the first and only parameter to `createServer()`, like this:

    const http = require("http");

    http.createServer((req, res) => {
        res.end("I have received a request, and this is my response.");
    });

The HTTP server code will call this function whenever the HTTP server receives an incoming request. A construct like this is a typical pattern found in many JavaScript code files: it's the *callback* pattern.

The pattern works like this: A certain piece of code - in our case, it's the `createServer` function - takes care of something happening "behind the scenes". In our cases, it's accepting new incoming HTTP requests - something that our own code doesn't need to take care of.

However, the exact way how a new incoming HTTP should be *handled*, after it has been *accepted*, is something we want to define with our own code.

It's a bit like asking for a callback in real life. Imagine you plan to buy something from your local dealer on the other side of the town, but you know that the item you are looking for is out of stock on most days.

In this case, you would call the dealer and ask if that item is currently in stock. "No", the dealer says, "but tell me your number and I will call you back once it's available". This way, you only need to make the trip across town once the item is in stock.

Your dealer makes a note to call you back later, and he will regularly check the item's stock. Once it becomes available, he will call you.

Lines 3 to 5 in the above code do exactly the same thing. The `http` module is your dealer, and calling `http.createServer` from your own code is calling your dealer to set up a callback. By doing so, you tell him "Hey, whenever you receive a new item, I mean, a new HTTP request, would you be so kind to call me back? Here is my number, I mean, the function from my code which I would like you to call when it happens."

In this sense, the `(req, res) => { ... }` inline function is like the telephone number under which your dealer can reach you.

This way, you and your dealer, or your own code and the *http* module code, are becoming integrated while also being decoupled. They are now integrated because the HTTP server code from module *http* will call your own code whenever an HTTP request comes in - but they are also decoupled: your own code doesn't care what the *http* module does under the hood or what it does while no HTTP requests are coming in, in the same way you don't need to care about the things your dealer does all day and how exactly he will check for new inventory items, as long as he calls you back once your item becomes available. And the *http* module code doesn't care what you do with the HTTP requests it passes into your callback function - all it cares about is that the callback function exists and can be called.

Let's stress another point to make sure it is completely clear: This inline callback function of yours is NOT called immediately when running `node index.js`. It is called IF and WHEN an HTTP request comes in. This also means it is potentially called again and again - if you send 100 HTTP requests to your server, your own code, the inline callback function, will run 100 times, and if you start the server application, but never send any HTTP request to this server, it will never run.

Let's now look at this anonymous (or "inline") callback function in detail: It expects to be called with two parameters: we call the first one `req`, because it is an object containing information about the incoming *request*, and the second one `res`, because this is an object containing functions which allow us to *respond* to the incoming request - like the function `end` that is used to send an HTTP response and immediately finish response handling.

Still, running `node index.js` simply throws us back to the command line, with nothing happening.

While we already ordered our application to *create* an HTTP server and defined some request handling behaviour, we still need to make the created server *listen* on a local IP address and TCP port, and we need to make it keep running and waiting for incoming requests. This is achieved by using the return value of `http.createServer`, which is an object that provides a `listen` function:

    const http = require("http");

    const server = http.createServer((req, res) => {
        res.end("I have received a request, and this is my response.");
    });

    server.listen(
        8000,
        "localhost",
        () => console.log("HTTP server started and available at http://localhost:8000.")
    );

The three parameters that we pass to `listen` are the TCP port number, the IP address or DNS name (we use the special *localhost* name), and a function which is called by `listen` as soon as the HTTP server is bound to the given IP address and TCP port and is ready to receive incoming HTTP requests.

This time, when running `node index.js` on the command line, you'll notice how you are *not* thrown back to the command line - instead, the Node.js application keeps running, after outputting the "HTTP server started and available at http://localhost:8000." line.

You can now open URL *http://localhost:8000/* in a browser of your choice, and you will see the response: "I have received a request, and this is my response.".

When a request is handled, you won't see any further output on the command line though, because we didn't add any `console.log` calls within the `http.createServer` anonymous function parameter.

At this point, depending on your previous knowledge, you may wonder what we are talking about here: What exactly is HTTP, what is a request and a response, a TCP port and an IP address? In other words: How does the World Wide Web work under the hood?

If you feel like you lack a solid understanding of these basics, simply continue reading - what follows is a breakout session describing some fundamentals of the Web that are not specific to JavaScript or Node.js.

And in case you already have a solid understanding of these basics, then simply skip the following chapter, and we will immediately continue with our Node.js webserver implementation. In any case: see you one the other side!


## A close look at the World Wide Web

What happens when you open a web page in your browser? On the surface, your browser (the client) loads a page from a remote system (the server) and displays its content. What exactly is displayed, and how it is presented to us, is defined by the HTML, CSS and JavaScript content which the server sends back to our client.

    Web browser                     Web server
    ┌─────────┐                     ┌─────────┐
    │         │   requests content  │         │
    │ shows   │-------------------->│ provides│
    │ page    │                     │ page    │
    │ content │                     │ content │
    │         │<--------------------│         │
    └─────────┘    responds with    └─────────┘
                      content

This is the content of the web page, and this is what the end user is interested in in the first place. But I would like to zoom in and not talk about the content of a web page yet. Instead, I would like to focus on the processes which take place "under the hood" when a browser opens a web page - the stuff that happens before we even see the first content appear on the screen.

How does the browser *actually* ask the server for its content? How does the server *actually* respond with the content?

How do browser and server find each other, and how do they exchange information and data?

This is what this chapter is about.


### The building blocks of the World Wide Web

The bad news is that even for a seemingly simple and innocent operation - like a browser requesting a single web page from a server - there are so many moving parts involved that you could fill multiple books explaining them all. The good news, however, is that in order to become a productive web developer, we do not need to know all the atomic details.

We do not need to know how a CPU works on the transistor level and we do not need to chase every zero and every one that travels through a network cable in order to build a fast, reliable and useful web application.

It is useful to know and understand - at least conceptually - the most important parts and the mechanisms which make them work together.

To achieve this, we will build a mental model of how the world wide web works over the course of this chapter. As we will see, there is no magic involved, and while it's a complex ecosystem which is put into motion each time you click on a link in a web browser, it's not complicated to grasp what happens conceptually.

Let's start by clarifying the scope we are talking about. When you use your browser, you are surfing "the web". More precisely, you are interacting with a system of different technical and conceptual components which together form the *World Wide Web*.

A> This name is the reason why the domain names of most websites begin with the prefix (or rather *subdomain*, which is
A> the correct technical term) `www`, like `www.google.com`. It's just a matter of habit to use this prefix - technically,
A> it doesn't matter at all, so feel free to set up a web site at `qqq.yournamehere.com`.

The World Wide Web is not one single piece of technology. Instead, it's a collection of open standards which define how
certain pieces of technology can work together; plus, it builds on top of other standards and technologies which are
much older and allow the World Wide Web to work without reinventing *all* the wheels.

Thus, from a bird's eye view, the World Wide Web landscape looks a bit like this:

```
The World Wide Web building set...
┌───────────────────────────────────────┐
│                                       │
│    HTML, CSS, JavaScript              │
│                                       │
│    HTTP                               │
│                                       │
│    Browser                            │
│                                       │
│    Web server                         │
│                                       │
└───────────────────────────────────────┘
...builds on the Internet building set...
┌───────────────────────────────────────┐
│                                       │
│  BGP, DNS, TCP, IP, MIME, URI...      │
│                                       │
└───────────────────────────────────────┘
...which builds on different network building sets.
┌───────────────────────────────────────┐
│                                       │
│ Ethernet, ATM, IEEE 802.11 (Wi-Fi)... │
│                                       │
└───────────────────────────────────────┘
```

Which is another way to say that your browser uses Internet technology like IP and TCP, which allows it to send and receive data over network technology like Ethernet or ATM, to talk to a web server using the HTTP protocol, enabling the browser to request and download the collection of HTML, CSS and JavaScript (and other assets like images, audio files, or video files) that make up the web page which appears in your browser window.

Ok, but how does that look in practice?

The first thing to understand is that the web browser and the web server are two computer programs, running on different computer systems, which need to find each other, establish a network connection, and exchange data over this connection in a meaningful way.

Let's tackle this process step by step.

Web browsers and web servers talk to each other over the Internet. It is the client - the browser - which initiates the exchange. What triggers a browser to do so is the user who enters a URL into the address bar, for example: `http://www.example.com`.

The Internet is a network of millions of servers distributed all over the world. One of this million of servers serves the *www.example.com* website. How does your browser connect to exactly this one server?

The first thing the browser needs to do to in its quest to find the right server is to translate the domain name you gave it - *www.example.com* - into an actual Internet address, which is a number, not a name.

To do so, the browser utilizes an Internet component which is not a part of the World Wide Web itself, but plays a crucial role in making it more comfortable to use: the Domain Name System, or DNS.

You can think of the DNS as a huge telephone book. You know the name of a person, and you use it to look up their telephone number. The DNS offers the same service for browsers - the browser queries the DNS with a domain name like *www.example.com*, and the DNS tells the browser the Internet address.

You can also query the Domain Name System yourself, from your command line, where we can use either `dig` or `nslookup` to ask the Domain Name System for the Internet address of *www.example.com* like so:

    > dig www.example.com

    > nslookup www.example.com

The output of both commands is formatted quite differently, but in any case, you should see a line like this:

    www.example.com.	2639	IN	A	93.184.216.34

or this:

    Address: 93.184.216.34

Both lines tell you the same: that the Internet address of domain name *www.example.com* is *93.184.216.34*.

The output of *dig* is a bit more precise - it tell's us that what we receive is the so-called *A* record for the domain, which stands for *Internet Protocol address version 4*, or *IPv4 address*, or, as version 4 is still the predominant Internet Protocol version, simply *IP address*.

A> The Internet infrastructure also supports the newer IP version 6, which is deployed and used by more and more Internet participants like service providers and server hosters, but to this day, plays only a secondary role.

Thus, *dig* and *nslookup* are user tools that can be used to translate a domain name into an IP address.

When you ask your browser to open *www.example.com*, it does the same - it tries to retrieve this numeric address via the DNS.

To do so, it doesn't start the *dig* or *nslookup* command in the background - that command is for human users. Instead, it issues the query directly, using its own application code. The details of this do not matter to us.

You can sometimes even see the browser doing this step - especially if your internet connection is not the fastest, you can see for a brief moment a status message, often in the lower left corner of the browser window, stating something like "Looking up www.example.com...".

So, you have entered the address *www.example.com* into the address bar of your browser, you hit enter, and your browser
uses the Domain Name System to look up the IP address of the server system which serves the *www.example.com* website.

What happens next?

### How computers on the Internet establish a network connection

Using the IP address it looked up, the browser can now attempt to establish a network connection to the target server.

To do so, the browser uses the mechanisms of the Internet Protocol, whose job is to make network connections between computer systems possible.

The most important mechanism for this is called *routing*. Routing is the process of creating a path between a source node on the Internet (your computer) and a target node on the Internet (the computer system with IP address *93.184.216.34*, in our example).

The beauty of this routing mechanism is that while your computer needs to know the exact target address it wants to talk to, it doesn't need to bother how to get its data to this target address.

A metaphor from real life comes to mind.

Let's assume you want to write a letter to, say, the *European Organization for Nuclear Research* in Switzerland, also known as *CERN* (where the World Wide Web was invented by Sir Timothy John Berners-Lee in 1989).

In order to do so, you need a target postal address, and you need to know the next post station where you can post the letter - and nothing more. The postal system takes care of the rest, and the exact route of your letter and the intermediary post stations involved is neither known to you nor important to you. You can rest assured that the system will route your letter correctly to its destination.

With Internet Protocol routing, it's the same: Your computer knows the target address, plus it knows the address of its own "next" Internet "station" - this is called the *default gateway*. When you connect your computer to the Wifi box in your home, the IP address of the Wifi box becomes the default gateway of your computer, and a server system from your Internet provider is in turn the default gateway of your Wifi box.

By delivering data to this default gateway, the data packet starts to travel through the Internet towards its destination through many different systems - or "nodes" - on the Internet, bringing it closer to its target with each step.

Each node simply handing over the data packet to its one "next" node of course isn't enough, because that would only work if all nodes, including your source and target node, were connected serially on the Internet. But the Internet is a network of many nodes interconnected with each other.

Thus, for routing to be useful, several nodes on the Internet have *multiple* "next nodes" configured, and depending
on the IP address of the target system, will decide to route the data packet in one direction or the other:

                                                                       NodeJ
                                                                        ^
                                                                       /
                                                                      /
                                 NodeC  -->  NodeG  -->  NodeI  -->  NodeK
                                  ^            \
                                 /              \
                                /                \
                               /                  v
    Source  -->  NodeA  -->  NodeB              NodeH
                              /\
                             /  \
                            /    \
                           v      \
                         NodeD     v
                                 NodeE  -->  Target
                                             (93.184.216.34)

The above diagram is meant to be a very simplified illustration of the logical structure of a very tiny part of the Internet.

The *Source* node could be your computer, which has *NodeA* (probably your DSL router) as its default gateway. When your computer tries to reach the node with IP 93.184.216.34, it has no choice but to hand over data to the only node it knows, *NodeA*. NodeA also has only one default gateway (probably a system operated by your Internet provider), *NodeB*.

*NodeB*, however, has routes to multiple other nodes, *NodeC*, *NodeD* and *NodeE*, and it also knows which of these nodes is the best next hop for a data packet addressed to *93.184.216.34*.

*NodeE*, then, has a direct route to the target node, and can deliver the data packet.

Thus, *Source -> A -> B -> E -> Target* is the route over which your computer and the target system can establish a connection, and through which data packages can travel.

This routing capability is the foundation of the Internet - it allows two computer systems to exchange data with each other without being connected directly to each other.


### How computer programs talk to each other over the Internet

By now, we have established a general understanding of how computers find other computers on the Internet, and how they can establish a network connection via IP addresses and data packet routing using these addresses.

We now need to zoom in even closer, and have a look at how exactly data is exchanged between a client and a server.

First of all, it's important to note that it is not *computers* which exchange data through the Internet, it is *applications* which do.

Our computers are just the physical shell in which our applications live, providing the physical means like network cards and network cables (or radio signals) which enable remote applications to talk to each other.

In our case, the two applications talking to each other are the web browser application and the web server application.

Let's update a diagram we have used before with more details:

    Your computer system                      Web server system
    ┌───────────────────┐                     ┌───────────────────┐
    │                   │                     │                   │
    │  Web browser      │                     │  Web server       │
    │  application      │                     │  application      │
    │  ┌────────────┐   │ requests content    │  ┌────────────┐   │
    │  │          --│---│---------------------│--│-->         │   │
    │  │            │   │                     │  │            │   │
    │  │            │   │                     │  │            │   │
    │  │            │   │                     │  │            │   │
    │  │            │   │                     │  │            │   │
    │  │         <--│---│---------------------│--│--          │   │
    │  └────────────┘   │       responds with │  └────────────┘   │
    │                   │             content │                   │
    │                   │                     │                   │
    └───────────────────┘                     └───────────────────┘

As you can see, the word *server* is used ambigously: it can mean the physical machine - the *hardware* - which is connected to a network like the Internet in order to *serve* data (e.g. a web server for web pages, a file server for files, a mail server for mails), but it can also mean the application - the *software* - which does the serving of web pages, files, or mails.

To distinguish between these two, I'm more precise in this text: I will talk about the server *application* when talking about the piece of software which serves web pages, and about the server *system* when talking about the computer which runs the server application.

The Internet mechanisms we have seen so far - DNS, IP addressing, and routing - are sufficient to establish a general network connection between two computer systems, but not for making their applications talk to each other.

We need another building block, another protocol which allows to link two applications together over an IP-based Internet connection, making reliable data exchange between two applications possible: TCP, the *Transmission Control Protocol*.

Again: the IP protocol allows two *computers* to establish a connection, and TCP allows two *applications*, one on each computer, to then exchange data. The metaphor here would be that a computer is a street, and an application on a computer is one house on the street. Both protocols together form the TCP/IP standard, the fundamental standard that makes the Internet work.

Using this metaphor, we could say that IP addresses are street names. Just like houses on a street have house numbers, TCP uses a so-called *port number* to identify a single TCP endpoint on a given server system. These run from 0 to 65535.

Technically, any server application on a given computer system can use (or "bind to", or "listen on") any TCP port number, as long as it is ensured that no two server applications use the same port number.

In practice, there are a couple of well-known TCP port numbers that are always used for certain types of servers, even it's not a technical limitation; for example, DNS server applications typically run on TCP port 53, while HTTP server applications typically run on TCP port 80 for unencrypted traffic and on TCP port 443 for encrypted HTTPS traffic (yes, a single server application can bind to more than one TCP port).

Why, then, did we configure our Node.js HTTP server application, using the `server.listen` function, to bind to port 8000, instead of the well-known HTTP port 80?

It's because TCP ports 0-1024 are a bit special - if a server application wants to bind itself to a port in this range, it needs superuser privileges to do so; by choosing port 8000 instead, we can avoid a fair share of additional complexity. Even if the user account on your computer is not an administrator account with special privileges, everything works just fine. And by explicitly mentioning the TCP port when pointing our browser at http://localhost:8000/ (instead of just http://localhost/), we make sure that we connect to our port 8000 server.

A> If we'd point our browser at http://localhost, a URL which lacks an explicit TCP port number, the browser assumes that it must use TCP port 80 - which is exactly the idea of well-known ports.


Something else is a bit special in our case: While we do have a server application (our Node.js program) and a client application (our browser), both live on the same computer system. That's not a problem, though - from a TCP/IP point of view, it's nothing special; all the rules for getting data from A to B still apply, even if A and B are the same system.

One advantage of this most minimalist setup is that we don't need to register an official domain name - if an application on a computer system wants to talk to another application on the same system, it can simply use a well-known, predefined special address, *localhost*. As said, all the rules still apply, and thus, this name must be translated into an IP address. Your computer doesn't need to get in touch with the "official" DNS system to do so - all operating systems have this translation hardcoded into their configuration, and can therefore translate this special DNS name into the special IP address *127.0.0.1*, which in the networking system of a computer always means "the local computer system itself".

And thus, when you enter *http://localhost:8000/* into the browser, then the browser asks the operating system for the IP address of DNS name *localhost*, receives *127.0.0.1* as the answer, creates a TCP/IP connection to port *8000* of address *127.0.0.1* - that is, a connection is established to our running Node.js HTTP application - and can then start to send (and subsequently receive) data over this connection.

What data? We can make this visible with a command-line based browser tool named *curl*.

*curl* is a full-fledged HTTP web browser just like Firefox or Chrome, but it lacks an interactive graphical user interface. This makes it rather unsuitable to comfortably browse the web, but makes it perfectly suitable whenever we want to have a close look at the details of a single HTTP request and its response.

We can make the same request to our web server that we made with our "real" web browser with *curl*, too: while the Node.js HTTP server application is still running in one of your terminal windows, open another terminal window, and run the following command:

    > curl http://localhost:8000/

Not surprisingly, the answer looks familiar:

    I have received a request, and this is my response.

But this is only a small part of the data that is actually exchanged between *curl* and our Node.js application. We can make all of it visible by adding the `--verbose` switch to the *curl* command:

    > curl --verbose http://localhost:8000/

The output now looks like this:

    * Connected to localhost (127.0.0.1) port 8000 (#0)
    > GET / HTTP/1.1
    > Host: localhost:8000
    > User-Agent: curl/7.64.1
    > Accept: */*
    >
    < HTTP/1.1 200 OK
    < Date: Sun, 21 Feb 2021 10:33:37 GMT
    < Connection: keep-alive
    < Content-Length: 51
    <
    * Connection #0 to host localhost left intact
    I have received a request, and this is my response.

The lines starting with the `*` symbol are related to the connection on the TCP/IP level. The lines starting with symbols `>` and `<` are related to the HTTP data exchange, with lines starting with `>` showing so-called HTTP *header* data sent from the client to the server, and lines starting with `<` showing HTTP header data sent from the server to the client.

The one line starting without any special symbol, `I have received a request, and this is my response.`, is the so-called HTTP *body* data sent from the server and received by the client.

HTTP *header* data is something that we don't normally see when we browse the web in a conventional web browser. This data is nevertheless essential to make web browsing work.

In any given HTTP session, it's always the client who, once the TCP/IP connection is established, start the dialogue with the server, by sending a first HTTP header line, starting with the name of one of the nine HTTP *request methods*, which are also called *verbs*.[^note4]

In our case, the *curl* client uses the request method *GET*, which tells the server that it would like to receive a specific *resource* from the server. It's certainly the most often used method, but there are others which we will encounter later.

The method is followed by the URL that we passed to *curl*, but minus the protocol, host, and port parts - that is, minus the `http://localhost:8000` portion, leaving only the `/` part. That is the *resource* which is requested via "GET". Our current server implementation can only return one single resource no matter what it is asked - if you asked it to "GET" resource "/foo/bar", the response is still "I have received a request, and this is my response.". However, in real world applications, web server implementations need to respond differently to different requests, and therefore need to know what has been requested - that's what the resource is for.

The final part of the first HTTP header line is `HTTP/1.1` - there are different versions of the HTTP protocol used in the wild, and client and server must ensure that both sides are "talking the same language"; that is, both must use the same protocol version, which is why the client announces the version it wants to use right from the start. It's nothing we need to take care of in practice - for the remainder of this book, we can safely assume that all servers we write and all clients we use both use HTTP/1.1.

This Method-Resource-Version line is the most essential part of any HTTP request. Clients always add additional header lines, though, which can be essential or completely irrelevant, depending on the server implementation; in our current case, the following three header lines - `Host`, `User-Agent`, and `Accept` - are not relevant because we don't handle them within our current server implementation, but depending on what needs to be build in a full-fledged server application, they could be very important.

The HTTP protocol supports an extensive list of HTTP request and response headers[^note5], but their role is always specific to the server and client implementation at hand. We will always discuss those headers that are relevant to our case - for now, we just need to understand that headers are used to fine-tune the integration between an HTTP server and an HTTP client by providing a place for structured data outside of the user-facing content. For example, the *User-Agent* request header tells our server which client software (and which version of this client software) is making the request, and our server could (but doesn't have to) act on this additional information, e.g. by providing different content to a *curl* client than to a *Firefox* client.

The response part of the exchange, denoted by the `<` symbol, mirrors the request part. The first line is *HTTP/1.1 200 OK*, which tells the client that the server understands the HTTP/1.1 protocol, and that the response has a status of "200 OK", which is the most common response status; it is used to tell the client that the request was understood and handled without problems, signalling the client that it can expect a valid and complete response, or in other words that it can expect to receive the resource it asked for. There are several other response status codes[^note6], like "404 Not Found" which is used if the server isn't able to find the resource that the client asked for.

This most essential response header line is followed by other, optional response headers, and the headers block is then followed by the body of the response, that is, the content that is to be displayed to the end user. In our case, it's just a simple string, but of course, more often than not, it's an HTML document that the browser then translates, or "renders", into a graphical representation - the "webpage". At least that's true for graphical browser like Firefox and Chrome - *curl* will always output any content, HTML or not, as-is.


## Extending our web server

With a better understanding of the Internet and HTTP under our belts, we can now return to our Node.js HTTP webserver implementation, and extend it.

As said, we always return the same resource when responding to a request, no matter what the request looks like and what resource is actually requested. We can change this by echoing back information from the request within our response, by rewriting our server code like this:

    const http = require("http");

    const server = http.createServer((req, res) => {
        res.write("I have received a request, and this is my response.\n");
        res.end("The request method was " + req.method + ", and the requested resource was " + req.url);
    });

    server.listen(
        8000,
        "localhost",
        () => console.log("HTTP server started and available at http://localhost:8000.")
    );

As always, don't forget to "stop" the currently running server application with CTRL-c, and re-start it using the changed code base with `node index.js`.

Interacting with the server through curl is now a tad more interesting:

    > curl http://localhost:8000/foo/bar

    I have received a request, and this is my response.
    The request method was GET, and the requested resource was /foo/bar

If we send a request to another resource, using another HTTP verb, the response changes accordingly:

    > curl -X POST http://localhost:8000/baz

    I have received a request, and this is my response.
    The request method was POST, and the requested resource was /baz

This shows how `req` is also an object, and it provides some useful *attributes* - attributes are values on an object that are not functions (while functions on an object are typically called *methods*).

We can use the request-handling code to take a look at all the attributes and methods the *req* object provides, like this:

    const http = require("http");

    const server = http.createServer((req, res) => {
        res.write("I have received a request, and this is my response.\n");
        res.end("The request method was " + req.method + ", and the requested resource was " + req.url);

        console.log(req);
    });

    server.listen(
        8000,
        "localhost",
        () => console.log("HTTP server started and available at http://localhost:8000.")
    );

After restarting the server application, another *curl* request makes the server application output (in its console window, not in its HTTP response!) a large list of the *req* object keys and values. It's quite a long and daunting list, to be honest, but you may be able to find the *method* and *url* attributes if you look closely.

Most of these attributes don't look too useful, though. But there are some that might come handy for implementing a more complex server application. For example, there is one called *headers*. Let's output only that one:

    const http = require("http");

    const server = http.createServer((req, res) => {
        res.write("I have received a request, and this is my response.\n");
        res.end("The request method was " + req.method + ", and the requested resource was " + req.url);

        console.log(req.headers);
    });

    server.listen(
        8000,
        "localhost",
        () => console.log("HTTP server started and available at http://localhost:8000.")
    );

When once again restarting the server and running a curl request, we see another line of output, like this:

     { host: 'localhost:8000', 'user-agent': 'curl/7.75.0', accept: '*/*' }

These, of course, are the names of the HTTP headers we've already encountered in the output of `curl --verbose`, although here the Node.js *http* module obviously rewrote them into lowercase.

As denoted by the leading `{` and the trailing `}`, `req.headers` is itself another object. This shows how objects can contain objects, and accessing values of objects within objects is achieved by repeatedly using the dot syntax:

    console.log(req.headers.host);

will print *localhost:8000* to the screen, because we access the value that is available under key *host* of object *header*, which in turn is available under key *headers* of object *req*. [^note7]

Note how the following line won't work:

    console.log(req.headers.user-agent);

As mentioned earlier, not all key names can be accessed through the dot notation - in this case, the hyphen in `user-agent` causes the problem, which forces us to use the alternative square bracket notation:

    console.log(req.headers["user-agent"]);

Okay, we now have a basic web server application, and we have a basic idea of what the *req* object looks like. How can we use this to create a server that does something useful?

We previously wrote module *greeter* by creating file *greeter.js*. Let's use this to write a web server application that can do greetings based on an incoming request. For example, if we request the server with *curl* like this:

    > curl "http://localhost:8000/welcome?name=John"

then we want the server to respond like this:

    Hello John

And if we request it like this:

    > curl "http://localhost:8000/seeOff?name=John"

then we want the server to respond like this:

    Goodbye John

(We now started to put the URL in double quotes "" because `?` and `=` have a special meaning on the command line).

To achieve this, we need to solve several problems. First, we need to teach our server to distinguish between *welcome* and *seeOff* requests, and handle them accordingly.

Then, we need to extract the name provided with the request - `John` in the above example - from the request object.

Lastly, we need to use the functions provided by the *greeter* module to do the greeting that has been requested, and with the result, we need to formulate an HTTP response.

As always, we tackle this step by step.

First, an observation: in its current implementation, the server responds to `curl "http://localhost:8000/welcome?name=John"` like this:

    The request method was GET, and the requested resource was /welcome?name=John

This shows that `req.url` contains all the information we are interested in - but we need to break it into useful pieces.

Parsing a URL to split it into its different parts isn't exactly trivial. But fortunately, Node.js ships with a module that does the heavy lifting. It is called *url*, and is based on the [WHATWG URL API](https://nodejs.org/api/url.html#url_the_whatwg_url_api). This is a standard that describes the different parts a URL can possibly have. Here is a visualization of the different parts of example URL `https://user:pass@sub.host.com:80/p/a/t/h?query=string#hash`:

    "  https:   //  user : pass @ sub.host.com : 80   /p/a/t/h  ?  query=string   #hash "
    │          │  │      │      │   hostname   │port│          │                │       │
    │          │  │ user-│ pass-├──────────────┴────┤          │                │       │
    │ protocol │  │ name │ word │        host       │          │                │       │
    ├──────────┴──┼──────┴──────┼───────────────────┤          │                │       │
    │   origin    │             │       origin      │ pathname │     search     │ hash  │
    ├─────────────┴─────────────┴───────────────────┴──────────┴────────────────┴───────┤
    │                                    href                                           │
    └───────────────────────────────────────────────────────────────────────────────────┘

Using the *url* module works like this:

First, we need to require it:

    const url = require("url");

This gives us an object named `url` (lowercase), and this object provides an attribute `URL` (uppercase). The uppercase `URL` is a *class*. We did not yet introduce classes in JavaScript and we won't do this properly now, so for the moment, just follow along. Here is how this class can be used to create a new url object based on a given string:

    const myUrl = new url.URL("https://user:pass@sub.host.com:80/p/a/t/h?query=string#hash");

Note the `new` keyword, which is, well, new. While JavaScript always allows us to create objects "on the fly", by simply defining them with code like `const myObject = { "foo": "bar" }`, the `new` keyword can be used to create an object whose structure follows a certain "blueprint" - and these blueprints are called *classes* in JavaScript. The blueprint or class `URL` is hidden inside module *url*, but we don't need to know what it looks like - all we need to know is that we can use it to create *URL* objects by using the `new` keyword and passing a string containing a URL. If we do this, what we get back is an object. And if we want to see how such an object looks like, we can quickly demo this on the Node.js CLI (remember: you just need to run application `node` without any further parameters on your command line to get into the interactive Node.js CLI):

    % node
    Welcome to Node.js v14.16.1.
    Type ".help" for more information.

    > const url = require("url");

    > const myUrl = new url.URL("https://user:pass@sub.host.com:80/p/a/t/h?query=string#hash");

    > console.log(myUrl)

    URL {
      href: 'https://user:pass@sub.host.com:80/p/a/t/h?query=string#hash',
      origin: 'https://sub.host.com:80',
      protocol: 'https:',
      username: 'user',
      password: 'pass',
      host: 'sub.host.com:80',
      hostname: 'sub.host.com',
      port: '80',
      pathname: '/p/a/t/h',
      search: '?query=string',
      searchParams: URLSearchParams { 'query' => 'string' },
      hash: '#hash'
    }

As you can see, the resulting URL object provides several attributes, and they are named exactly like the URL parts that WHATWG specifies.

Ok, looks like we can use this module to get our hands on the different parts of the request URL.

There is one catch, though - creating a URL object only works by providing a "full" URL string. This means we cannot simply pass `req.url` into `new URL()`, because in our example, `req.url` is only the string `"/welcome?name=John"`, without the `http://` and `localhost:8000` parts.

If we try to do this on the Node.js CLI, we get an error:

    % node
    Welcome to Node.js v14.16.1.
    Type ".help" for more information.

    > const url = require("url");

    > const myUrl = new url.URL("/welcome?name=John");
    Uncaught TypeError [ERR_INVALID_URL]: Invalid URL: /welcome?name=John
        at onParseError (internal/url.js:259:9)
        at new URL (internal/url.js:335:5)
        at REPL2:1:15
        at Script.runInThisContext (vm.js:133:18)
        at REPLServer.defaultEval (repl.js:484:29)
        at bound (domain.js:413:15)
        at REPLServer.runBound [as eval] (domain.js:424:12)
        at REPLServer.onLine (repl.js:817:10)
        at REPLServer.emit (events.js:327:22)
        at REPLServer.EventEmitter.emit (domain.js:467:12) {
      input: '/welcome?name=John',
      code: 'ERR_INVALID_URL'
    }

This can be easily fixed, though - we just need to prefix our `req.url` string with the missing information. While these need to have the correct *syntax*, the actual *values* are not relevant, because it's only the `pathname` and `search` parts that are important for us. Such a solution would look like this:

    const myUrl = new url.URL("http://localhost:8000" + req.url);

And thus, an updated webserver implementation that shows the contents of the URL object on the command line upon each received request looks like this:

    const http = require("http");
    const url = require("url");

    const server = http.createServer((req, res) => {
        res.write("I have received a request, and this is my response.\n");
        res.end("The request method was " + req.method + ", and the requested resource was " + req.url);

        const myUrl = new url.URL("http://localhost:8000" + req.url);
        console.log(myUrl);
    });

    server.listen(
        8000,
        "localhost",
        () => console.log("HTTP server started and available at http://localhost:8000.")
    );

When we start this server code and run `curl "http://localhost:8000/welcome?name=John"`, then thanks to the `console.log` on line 9, the server application will show the following output on the command line:

    URL {
      href: 'http://localhost:8000/welcome?name=John',
      origin: 'http://localhost:8000',
      protocol: 'http:',
      username: '',
      password: '',
      host: 'localhost:8000',
      hostname: 'localhost',
      port: '8000',
      pathname: '/welcome',
      search: '?name=John',
      searchParams: URLSearchParams { 'name' => 'John' },
      hash: ''
    }

We are definitely getting closer. Attribute `pathname` carries value `"/welcome"`, and will carry value `"/seeOff"` if we run `curl "http://localhost:8000/seeOff?name=John"`. We can thus use this attribute to differentiate between both request types, like this:

    if (myUrl.pathname === "/welcome") {
        // handle the "welcome" request
    }

    if (myUrl.pathname === "/seeOff") {
        // handle the "seeOff" request
    }

The url module also conveniently splits up the so-called *search* parameters for us, by providing another object on attribute `searchParams`. This object is based on a class called *URLSearchParams*, and it allows us to retrieve the `name` value through the `get` function provided on the object, like this:

    URL.searchParams.get("name")

This allows us to write the code handling a "welcome" request, like this:

    const name = myUrl.searchParams.get("name");

    if (myUrl.pathname === "/welcome") {
        res.end(greeter.welcome(name));
    }

The *welcome* allows us to also greet someone more formally, by passing a boolean `true` value on its second parameter. Let's give our web server application the ability to make use of this if a second *search parameter* is provided on a request, like this: `curl "http://localhost:8000/welcome?name=John&formally=true"`. As you can see, additional search parameters are added on the URL with the ampersand sign `&`. The code to recognize and use this additional parameter would look like this:

        const name = myUrl.searchParams.get("name");
        const formally = myUrl.searchParams.get("formally");

        if (myUrl.pathname === "/welcome") {
            res.end(greeter.welcome(name, formally));
        }

To make this request handler work (and also the one handling "seeOff" requests), we need to rework our `index.js` webserver code quite a bit. We need to `require` our *greeter* module, remove the existing `res.write` and `res.end` lines, and add the code for handling both request types. The result looks like this:

    const http = require("http");
    const url = require("url");
    const greeter = require("./greeter");
    
    const server = http.createServer((req, res) => {
        const myUrl = new url.URL("http://localhost:8000" + req.url);

        const name = myUrl.searchParams.get("name");
        const formally = myUrl.searchParams.get("formally");
    
        if (myUrl.pathname === "/welcome") {
            res.end(greeter.welcome(name, formally));
        }

        if (myUrl.pathname === "/seeOff") {
            res.end(greeter.seeOff(name));
        }
    });
    
    server.listen(
        8000,
        "localhost",
        () => console.log("HTTP server started and available at http://localhost:8000.")
    );


Things are now getting more complex, so let's recapitulate what each part of this code does.

The first three lines declare consts `http`, `url`, and `greeter`, by "requiring" internal Node.js modules *http* and *url*, as well as our own local module *greeter* (note once again how the latter is referenced as a local file path beginning with `./`, while the internal modules are referenced by their name only).

We then declare const `server`, by calling function `createServer` of object `http` on line 5. The one and only parameter we pass into this function is an anonymous or inline callback function of form `(req, res) => { ... }`. The running HTTP server will trigger this function whenever it receives a new incoming HTTP request.

The body of this inline function does the heavy lifting required to handle a request. First, on line 6, we create an object called `myUrl`, by passing the `req.url` string attribute to class `url.URL`. Because `url.URL` is a class, and not a function, we need to call it using the `new` operator. This results in an object of type `URL` being created and assigned to const `myUrl`.

On lines 8 and 9, we extract the `name` and `formally` parameters from the request, and make them available in our code as const `name` and `formally` respectively.

This is followed by two `if` statements. If statements execute the code in their curly-braces-enclosed body block if the expression in the parentheses following the `if` keyword resolves to the boolean value `true`. On line 11, this is the case if the string contained in attribute `myUrl.pathname` is equal to the string value `"/welcome"`, and it's the case on line 15 if `myUrl.pathname` is `"/seeOff"`.

Depending on which of the two if statements is true, our code responds to the request (by executing `res.end()`) by either running `greeter.welcome` or `greeter.seeOff`. We pass the `name` and `formally` values to function `welcome` - because `seeOff` only cares about the `name` parameter, we don't pass `formally` there.

Last but not least, as it's not enough to set up HTTP request handling, we also set up the server to listen on port *8000* of address *localhost*, on the final five lines 20 to 24 of our code file.

Let's also reiterate what happens when we start this server application by running `node index.js`.

As always, Node.js will parse our code file from top to bottom. It loads the code in modules *http*, *url*, and *./greeter*. It then executes the `http.createServer` function, followed by function `server.listen` on line 20. At this point, that's all that is being executed. The code between lines 6 and 17 is, at this point, NOT yet being executed! Instead, the code in module *http* waits for an HTTP request to come in, and whenever this happens - and *only* whenever that happens - our code between lines 6 and 14 (that is, the body of the inline callback function), will be called (and will be called again and again for each incoming HTTP request).

At this point, with the server application running, executing `curl "http://127.0.0.1:8000/welcome?name=John"` on the command line should return `Hello John`, while `curl "http://127.0.0.1:8000/welcome?name=John&formally=true"` will return `Good day to you, John`, and `curl "http://127.0.0.1:8000/seeOff?name=John"` will return `Goodbye John`.


### The bug

It seems like everything works as expected. And yet, our implementation has a fatal flaw. And this problem - this fundamental bug, really - has to do with *value types*, as so many JavaScript code bugs do.

Let's first analyze and understand the problem, and then solve it. Spoiler alert: the solution is to not write our webserver with JavaScript, but with another programming language. This might sound very radical, but as we will see, it's a very elegant and natural solution. But let's take it step by step.


We start by demonstrating the bug. To do so, start another `curl` request, like this:

    curl "http://127.0.0.1:8000/welcome?name=John&formally=false"

While this works, it doesn't work as expected. This is the response:

    Good day to you, John

When looking at the code in file *greeter.js*, one would expect the response to be `Hello John`, because we passed `false` as the value of search parameter `formally`, which should result in the `else` branch of the `if` statement being executed, as `if (formally)` should resolve to `false`:

    const welcome = (name, formally) => {
        if (formally) {
            return "Good day to you, " + name;
        } else {
            return "Hello " + name;
        }
    };


But here the catch: if we send the request `http://127.0.0.1:8000/welcome?name=John&formally=false` to the server, then *false* isn't a boolean value! It too, like `name`, is a value of type `string`: `"false"`.

The reason our code does work at all, even in this case, has to do with JavaScript's type system, its lack of strict type checking, and its ability to implicitly and silently transform values from one type into another - at least in some cases.

We can easily demonstrate this on the Node.js CLI (reminder: just run `node` on the Terminal command line to get into the Node.js CLI).

Start by running a simple `if` statement with an if clause that actually resolves to `false` in the boolean sense:

    % node
    Welcome to Node.js v14.16.1.
    Type ".help" for more information.

    > if (false) { console.log("This is not logged to the console"); }
    
    undefined

The `console.log` statement is *not* executed, as expected.

Now, run the `if` statement again, but with a subtle change: use the string value `"false"` instead of the boolean value `false`:

    % node
    Welcome to Node.js v14.16.1.
    Type ".help" for more information.

    > if ("false") { console.log("This is not logged to the console"); }
    
    This is not logged to the console
    undefined

This time, the `console.log` statement is executed. Why is that?

To answer this question, we need to have a closer look at the *condition* part of an `if` statement. The condition is the part of the `if` statement which is enclosed in braces: `if (condition) { ... }`.

The condition is the part that decides whether the code in the body of the `if` statement will be executed or not. There are only two possible conditions: the condition is either `true` or `false`. These two values are *boolean values*. You can use these values directly, as in `if (true) { ... }` or `if (false) { ... }`.

But you can also write a condition which isn't one of the two boolean values itself, but which resolves to a boolean *result*!

A simple example would be `if (1 < 2) { ... }`. Neither `1` nor `<` nor `2` is a boolean value, but the combination of the three, `1 < 2`, creates an expression which has a boolean result and can thus be used as a condition in an `if` statement. Because `1` is indeed less than `2`, the expression resolves to boolean value `true`, and the body of the `if` statement is executed. 

This shows how JavaScript knows how to resolve an expression in the condition part of an `if` statement to a boolean result, and *JavaScript tries really hard to do this in as many cases a possible*!

Even when we do not provide a mathematical comparison between two numbers, but instead only provide a string value, JavaScript still wants to do its job and tries to resolve that into a boolean value.

We already talked about how JavaScript is able to translate a value of one type into the matching value of another type - remember how `2 * "3"` results in number value `6` because JavaScript knows how to convert string value `"3"` into number value `3` before the addition with `2` happens.

In the same vein, JavaScript knows that because the `if` condition `"false"` is not a boolean value, but a string value, it must first be translated, or *cast*, into a boolean value. For a statement like `if ("false") { ... }`, JavaScript does this automatically.

We are now getting closer to the core of our bug.

In JavaScript, some "translate a non-boolean value into a boolean value in an `if` statement" operations work as expected.

For example, the number value `0` is translated into boolean value `false`, and `1` is translated into `true`.

For strings, it works like this: The empty string `""` translates to `false`, while *any other* string value translates to `true`.

And this is what causes the bug!

In **all* of these examples, the `if` body is executed:

    if ("hello") { ... }
    
    if ("true") { ... }
    
    if ("false") { ... }

That's because string value `"false"` is not empty, and is therefore converted to boolean `true`.

We can now follow the bug step by step.

In file *index.js*, line 9 looks like this:

    const formally = myUrl.searchParams.get("formally");

The `get` method on object `myUrl.searchParams` always returns a string value, so for curl request `http://127.0.0.1:8000/welcome?name=John&formally=false`, this creates a variable `formally` with the string value `"false"`.

On line 12, we call the greeter function and pass this variable as the second parameter:

    greeter.welcome(name, formally)

We thus actually call `greeter.welcome("John", "false")`.

In file *greeter.js* on line 2, this becomes relevant:

    if (formally) {

is executed as

    if ("false") {

and because `"false"` is a non-empty string, it is translated to boolean value `true` - the `if` body is thus executed, and the user is greeted formally.


Working around this bug is not terribly complicated. Remember how we talked about *boolean operators* in the first part of the book. Within the condition statement of an `if` statement, multiple boolean conditions can be combined. For example, the "or" operator `||` combines two boolean conditions, and if one of these two is true, the whole condition becomes true.

We can make use of this to rewrite line 2 of file *greeter.js* as follows:

    if (formally === true || formally === "true") {

After (re-)starting the webserver application, things now work as expected:

    % curl "http://127.0.0.1:8000/welcome?name=John&formally=false"
    Hello John%

    % curl "http://127.0.0.1:8000/welcome?name=John&formally=true"
    Good day to you, John%

That's because now, we check the `formally` parameter more precisely: its value must either be boolean value `true` OR string value `"true"` to make the whole `if` condition become `true`.

With this, we avoid running into the bug, and all is fine, right? No it's not. Because the *actual* problem here lies much deeper.

The problem, or rather its root cause, is not that our code cannot *handle* string values in `if` statements. The problem is that JavaScript didn't *tell us*, as early as possible, that we are working with a string value where we expected a boolean value, and we could only find out by running and testing the server application.

While a programming language cannot prevent each and every possible bug, it should support us in writing bug-free code as much as possible. Let's say we would mistype the first line of code in file index.js, and write `connst` instead of `const`. If we'd try to run this code, Node.js would bail out with a `SyntaxError: Unexpected identifier` message and refuse to run our code. So JavaScript clearly cares about correctly written identifiers.

However, it doesn't care about types in the same way. And this does not only apply to boolean values. We can easily write an application like this:

    const duplicateNumber = (x) => x * 2;

    console.log(duplicateNumber("So what?"));

    console.log(duplicateNumber(true));

and JavaScript won't bat an eye. To add insult to injury, the second function call, `duplicateNumber(true)`, will even return a numeric result - multiplying the boolean value `true` with the number value `2` results in the number value `2`, because why not?

Running into the kind of bugs resulting from this kind of negligence in a production application with thousands of users isn't exactly fun.

While JavaScript has a notion of types, as we've learned, it doesn't have any language constructs to define and limit which types are expected or allowed in a given situation. Let's look at our first `welcome` function again:

    const welcome = (name, formally) => {
        if (formally) {
            return "Good day to you, " + name;
        } else {
            return "Hello " + name;
        }
    };

We, the developers, know and understand that passing anything but a value of type *boolean* for parameter `formally` doesn't make sense. But we have no way to tell JavaScript about this limitation.

What we *can* do, of course, is check the type of a passed value within the function, using `typeof`, like this:

    const welcome = (name, formally) => {
        if (typeof(formally) !== "boolean") {
            // report an error or something
        } else {
            // run the actual "welcome" logic
        }
    }

But once again, this doesn't really *prevent* us from running an application where we pass a string for `formally` although that doesn't make any sense. It this is a problem that is only handled when the application is already running.

What we really want - but in JavaScript, cannot do - is something like this:

    // this is not actually possible in JavaScript...

    const welcome = (name: string, formally: boolean) => { ... }

This way, we would define the function parameters more precisely: we give them a name, but we *also* declare that for these parameters, only values of a certain *type* are accepted when calling the function.

With this, JavaScript would have the knowledge it needs to deny running a code file like this:

        // this is not actually possible in JavaScript...

        const welcome = (name: string, formally: boolean) => { ... }

        welcome("John", "false");

Before even running this code, the interpreter would be able to identify the mismatch: that the `formally` parameter must be of type `boolean`, and that the type of the the value it is called with on the second line is `string`, and it could deny running this code, preventing a runtime bug before we even started running the application.

Here's the thing: if value types obviously play an important role to avoid bugs in our applications, but at the same time, the language we use doesn't really care about them when it is time to decide if an application should be allowed to run or not, then something is off.

Of course, we could accept the situation as it is and trust our knowledge and keen eye to spot and avoid these kinds of bugs ourselves.

But in terms of software quality, merely *knowing* about a bug and *being able* to fix it, while certainly an important capability, is not the same as *being explicitly told* about a bug and being *forced* to fix it by the programming language itself!

Turns out a lot of people think the same way, and saw the shortcomings of JavaScript in this area as serious enough that they decided to do something about it. These people wanted to put complex JavaScript applications into production with confidence, and saw the lack of type-safety as such a crucial show-stopper that they created a new programming language - a beautiful and elegant language that can be summarized as "JavaScript, but with type-safety": **TypeScript**.

Now, let me get the most pressing issue out of the way right away: No, everything you've learned so far was NOT learned in vain. Quite the opposite! That's because TypeScript has a very clever approach: It isn't a completely new language. Instead, it is 100% based on JavaScript, and simply *extends* it with the type-safety language constructs asked for above.

This means that every valid JavaScript code is also valid TypeScript code.

Let's assume we have the following JavaScript code:

    const greet = (name) => {
        console.log("Hello " + name);
    };

    greet("Jane");

If we wanted to create a TypeScript file that is functionally equivalent to the JavaScript code above, this would be the result:

    const greet = (name) => {
        console.log("Hello " + name);
    };

    greet("Jane");

It's the exact same code! Writing TypeScript means writing JavaScript code exactly like we did before, but also being able to *optionally* add type-safety if and only if we want to.

This means that while we could simply keep the TypeScript code above as it is, we now *can* improve it in terms of type-safety, like this:

    const greet = (name: string) => {
        console.log("Hello " + name);
    };

    greet("Jane");

All we did was add the `: string` type declaration to the `greet` function definition. While JavaScript cannot understand and use this additional information, TypeScript can, making our code type-safe.

We are facing one challenge though: Node.js only runs JavaScript code, and doesn't understand TypeScript code. So how can we create a Node.js application using TypeScript?

The TypeScript project has a simple solution for this: It ships with `tsc`, the TypeScript Compiler. This compiler takes TypeScript code and translates it into valid JavaScript code. This process is called *transpiling*.

Let's see how this works. First, create a new project folder, called `typescript-hello-world`.

Within this folder, create file `index.ts` (note the `.ts` file suffix instead of `.js`), and fill it with our type-safe greet code:

    const greet = (name: string) => {
        console.log("Hello " + name);
    };

    greet("Jane");

Sure enough, Node.js won't be able to run this code:

    % node index.ts
    index.ts:1
    const greet = (name: string) => {
                       ^
    
    SyntaxError: Unexpected token ':'
    
In order to transpile this code into code that Node.js *can* understand, we need to install the TypeScript Compiler. It is part of a software package called `typescript`, which is made available through the NPM package distribution ecosystem.

When we installed Node.js through NVM before, we also installed the `npm` tool, and we can therefore use this to pull the `typescript` package code onto our local system, like this:

    % npm install -g typescript

Thanks to the `-g` switch, the package is installed *globally* - that is, it is available from any location, not just the current project folder.

Once NPM has finished installing the package, the application `tsc` that is part of this package can be started:

    % tsc --version
    
    Version 4.5.4

Using `tsc` is very simple - you just feed it a TypeScript input file, and it will create a valid JavaScript output file under the same filename, ending with `.js` instead of `.ts`. So all we need to run while in folder `typescript-hello-world` is this:

    % tsc index.ts

This creates file `index.js`, which we can run using Node.js:

    % node index.js

    Hello Jane

Note: If you want to play around with the transpiling process interactively, simply visit the TypeScript Playground[^note9] - it's an online tool where you can write TypeScript code into an editor on the left side, and it immediately shows you the resulting JavaScript code on the right side of the page.

Let's see what the JavaScript code looks like that is generated by `tsc`, by either opening file `index.js` in our code editor or by printing it on the command line:

    % cat index.js

    var greet = function (name) {
        console.log("Hello " + name);
    };
    greet("Jane");

We haven't met the `var` keyword before, and instead of `greet = (name) => {` the function is declared with `greet = function (name) {` - that's because by default, `tsc` generates the most compatible JavaScript code possible, using JavaScript language version *ES3*, which dates from December 1999. This version uses language constructs that are out of fashion by now, but not invalid - Node.js will happily digest and run this kind of code.

Another observation: While our TypeScript code enforced type-safety for the parameter of the greet function, there is no type-checking logic in the resulting JavaScript code (using `typeof` or similar mechanisms). That's the point of TypeScript - it allows you to *write* type-safe code, but doesn't make the *running* code type-safe.

In this sense, TypeScript's goal is to support type-safety when *authoring* code - it is a tool for the humans that *create* applications, not a tool for the machines *running* it.

While this sounds like only a very minor value proposition, it is in fact very powerful. The earlier potential bugs are identified in the software development lifecycle, the smaller their impact. And authoring code is obviously one of the earliest steps in this lifecycle (preceded only by requirements analysis and software design).

Thus, while the TypeScript Compiler *does* create code that isn't type-safe, it *cannot* create such code from TypeScript code that violates its encoded type hints, which can be proved by trying to transpile the following code (again, in file `index.ts`):

    const greet = (name: string) => {
        console.log("Hello " + name);
    };
    
    greet(42);

Try to run `tsc` with this input code, and you will see the following:

    % tsc index.ts
    index.ts:5:15 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
    
    5 greet(42);
    ~~

    Found 1 error.

As expected, the TypeScript Compiler bails out with an error and won't create any JavaScript code. Our TypeScript code defined parameter `name` to be of type `string`, and the compiler therefore won't allow to create JavaScript code that calls function `greet` with a parameter of type `number`, although such a function call would be perfectly possible in JavaScript.

Depending on the code editor you use, you don't need to wait for a `tsc` run to identify type-safety issues. For example, IntelliJ IDE ships with a TypeScript plugin which marks invalid function calls and other problems right in the code editor.

It was stated earlier that "in terms of software quality, only *knowing* about a bug and *being able* to fix it, while certainly an important capability, is not the same as *being explicitly told* about a bug and being *forced* to fix it by the programming language itself".

The above example shows this principle in action. While as an author, you *might* be able to spot and avoid a misguided and potentially problematic function call, using TypeScript and its type-safety annotations *enforces* correct function calls. One can easily imagine how this becomes a huge safety factor when working on codebases with thousand of lines of code and hundreds of functions.

Let's now see how TypeScript can help us to improve our Node.js webserver code. We need to reorganize and change the project files a bit, but as promised, we will stay really close to the original JavaScript code.


We begin by turning the existing `nodejs-webserver` codebase into a proper NPM-based project structure. This allows us to manage installation of additional external Node.js packages. We will need those to improve our TypeScript development experience.

Doing so is very simple. Make sure you are within folder `nodejs-webserver` in your terminal session, and then run the following command:

    % npm init

    This will put you into a text dialogue with nine questions. Answer them as follows:

    package name: (nodejs-webserver)
    version: (1.0.0)
    description:
    entry point: (src/index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC)

If there is no text after the colon, this means you should simply hit enter and don't provide any answer.

Once you have answered all questions, you are presented with a summary:

    About to write to nodejs-webserver/package.json:

    {
        "name": "nodejs-webserver",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    }

    Is this OK? (yes)

Hit enter to signal that yes, this is ok. After doing to, NPM will create file `package.json` within our project folder.

This file turns our project folder into an NPM package. NPM packages are Node.js applications or libraries that can be shared with other developers through the NPM ecosystem. We have already seen this in action: someone created an NPM package named "typescript" and released it into the NPM ecosystem. This allowed us to download and install that package onto our computer by running `npm install -g typescript`.

Our goal here is not to release our webserver application into the world - still, it's useful to have it set up as an NPM package. Releasing software is just one functionality provided by NPM. We are interested in one of the other many goodies that NPM provides - namely, *dependency management*. When extending our webserver application, we want to make use of other NPM packages, and file `package.json` allows us to define the names and versions of these packages. This is called "dependency management" because this way, we can *manage*, in a structured way, what the software packages are that our own software package *depends on* to work correctly.

Let's see this in action right away. As we are going to transform our JavaScript application into a TypeScript application, it would be nice if we were able to not only define the types of the parameters of our own functions, but to also see what the types are of parameters of the internal Node.js functions that we are calling from our own code.

For example, here is a line of our own code, where we call a function from the built-in Node.js "url" module:

    const name = myUrl.searchParams.get("name");

It would be nice if we knew, during development, what type of parameter is allowed to be passed to the `get()` function.

To make this information available within our project, we need an NPM package that contains these type information for all the functions provided by Node.js and its internal modules. This package is called "@types/node".

Using NPM, we can install this package as a module available within our project, and we can also store the fact that our project depends on this package in our `package.json` file.

To do so, run the following command:

    % npm install "@types/node" --save-dev

This will download the package and put its contents into a subfolder called `node_modules`: there, a subfolder called `@types` will be created, and within that, another subfolder called `node`. This contains the contents of the package.

Additionally, our `package.json` file has been extended and now looks like this:

    {
      "name": "nodejs-webserver",
      "version": "1.0.0",
      "description": "",
      "main": "build/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/node": "^17.0.7"
      }
    }

A new section has been added, called `devDependencies`. This section contains a list of all NPM packages that are defined as "needed during development of this project". As type information is only needed during software development, and is irrelevant when the application is running, it's a perfect fit for a devDependency. Dependencies that are needed while an application is executed go into a section called `dependencies` - we will encounter those later.

As you can see, a version definition - `^17.0.7` - has been added after the package name, even though we didn't define that while running `npm install`. The version shown just happens to be the most recent version of the package at the time of installation, and NPM uses this version for the version definition. A version definition can simply be a version number, but it may also include special characters which tell NPM how to handle updates. The leading `^` sign, for example, means "include any version that does not increment the leading 15 of the version definition".

The NPM project provides an interactive "semver calculator" at https://semver.npmjs.com which explains all the possible definitions and their meaning in detail. Also, make sure to read up on https://semver.org to understand how software in the NPM ecosystem (and elsewhere) is versioned.

Let's continue to build out the new project structure. First, we need to turn our JavaScript files into TypeScript files. That's easy, we just need to rename them, like this:

    % mv src/greeter.js src/greeter.ts ; mv src/index.js src/index.ts

Remember how we learned earlier that every valid JavaScript file is also a valid TypeScript file. The renamed files thus contain perfectly valid TypeScript code, although we only changed their names and not a single letter of their content.

Of course, switching to TypeScript code without adding any type definitions to the codebase is pointless, so let's do just that now. We start with file `src/greeter.ts`, and rewrite it like this:

    const welcome = (name: string, formally: boolean) => {
        if (formally) {
            return "Good day to you, " + name;
        } else {
            return "Hello " + name;
        }
    };
    
    const seeOff = (name: string) => "Goodbye " + name;
    
    module.exports = {
        welcome,
        seeOff
    };

With this, we do not change the code logic itself. We merely add type definitions where it makes sense: to the parameters of functions `welcome` and `seeOff`.

File `greeter.ts` holds a part of the codebase that is used by another part in the codebase, file `index.ts`. Switching from JavaScript to TypeScript doesn't change this. What does change, though, is the mechanism used to *import* elements from another code file where these elements have been *exported*.

For Node.js applications written in JavaScript, the mechanism is called the *CommonJS module system*, which offers `module.exports` and `require` as the tools to use on both ends of an export-import construct.

TypeScript supports a newer mechanism from the JavaScript ecosystem called *ES Modules*. It offers the `export` keyword, to be used in files that want to make code available, and the `import` keyword, to be used in files that want to use the exported code.

The big advantage is that by using the *ES Modules* mechanisms, type definitions from the exporting side become known on the importing side, which allows the TypeScript compiler to ensure that correct types are used even if code is used across files.

In order switch from a CommonJS setup to an ES Modules setup, we simply need to rewrite those parts of our code files where code is exported and required. For file `greeter.ts`, this means changing this:

    module.exports = {
        welcome,
        seeOff
    };

to this:

    export default {
        welcome,
        seeOff
    };

We can now continue with file `src/index.ts`, and we start by rewriting it from the `require`-based CommonJS approach to the `import`-based ES Modules approach, too. Thus, this:

    const http = require("http");
    const url = require("url");
    const greeter = require("./greeter");

becomes this:

    import http from "http";
    import url from "url";
    import greeter from "./greeter";

The syntax is quite different in some areas, and some aspects remain similar.

While `require` is provided as a function that needs to be called with a module name or filename as its parameter, `import` is a dedicated keyword, not a function. Instead of explicitly declaring a `const` with the return value of the `require` function call, with `import` a named variable is created implicitly. 

As before, modules are simply identified by their name, while references to a file, like `greeter.ts`, need a file path component like `./`, and the file extension can be left out. Thus, importing `greeter` from `./greeter` makes the exported object from file `greeter.ts` available under name `greeter` in file `index.ts`, very much like with the `require` approach before.

The remaining code in file `index.ts` doesn't need to change for now.

Let's run the TypeScript compiler in folder `src` and see what it thinks of our new code:

    % tsc
    src/index.ts:1:8 - error TS1192: Module '"http"' has no default export.
    
    1 import http from "http";
    ~~~~
    
    src/index.ts:2:8 - error TS1192: Module '"url"' has no default export.
    
    2 import url from "url";
    ~~~
    
    Found 2 errors.

Well, that's a bit disenchanting. Looks like the `import` statement isn't working as expected, at least when importing from the internal `http` and `url` modules.

The reason is that while both modules do in fact export code, they do not provide a *default export*. Remember our own `export` statement in file `greeter.ts`:

    export default {
        welcome,
        seeOff
    };

The ES Modules system knows two kinds of exports, normal exports and default exports. We will encounter normal exports later and will introduce them properly when we first use them. Here, we defined a default export - this means that while file `greeter.ts` could potentially export several different elements which could then be imported specifically as needed, the object holding the `welcome` and `seeOff` function is the element you get when importing nothing specifically from file `greeter.ts`, but simply the file itself.

The internal Node.js modules `http` and `url` do not provide such a default export. They only provide specific single elements, like the `createServer` function. This is not a problem, though - for code modules that don't provide a default export, TypeScript can simulate that they do.  

To achieve this, we simply need to add a TypeScript configuration, by creating file `tsconfig.json` in folder `nodejs-webserver`, with the following content:

    {
        "compilerOptions": {
            "allowSyntheticDefaultImports": true,
            "esModuleInterop": true
        }
    }

This compiler option `allowSyntheticDefaultImports` basically means that even for modules that do not provide a default export, TypeScript takes all "normal" exports from the module and makes them available as elements on a synthetically created object which it creates on-the-fly. Because some incompatibility problems that can occur when working with CommonJS-based modules in an ES Modules codebase, we also add the `esModuleInterop`, which avoids these problems[^note10].

Once again, we run `tsc` in folder `src`:

    % tsc
    index.ts:12:39 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'boolean'.
    
    12         res.end(greeter.welcome(name, formally));
    ~~~~~~~~
    
    Found 1 error.

And that is exactly what we want to see, an error message that cuts right to the chase of the matter: We are calling function `welcome` with a string parameter value where only a boolean value makes sense!

Let's see how TypeScript can further help us to understand and solve this problem.

If you are using a full-fledged IDE instead of a simple text editor, like Atom, Visual Studio Code, or IntelliJ IDEA, then you have probably seen that you don't need to run `tsc` to be informed about the problem. These IDEs use the rules that define what's possible in TypeScript and what's not under the hood to immediately inform you about problems in your code while writing it.

These IDEs can do even more to support us. When hovering the mouse pointer over the `welcome` method name on line 12 of file `index.ts`, they show several useful information about this method, including the type hints. For example, in Visual Studio Code, the information looks like this:

    (property) welcome: (name: string, formally: boolean) => string

Thus, without visiting the method definition in file `greeter.ts`, we learn the following:

- `welcome` is a property of an object (in this case, the object `greeter` which has been created through the `import` statement)
- it is a function with two parameters and a return value of type string
- its parameters are named `name` and `formally`, of type `string` and `boolean` respectively

We can use the same tooling to investigate the "shape" of other code elements, even from codebases that we don't control ourselves. This can help us understand the root cause of our bug.

The problem arises when passing a string value as the second parameter of method `welcome`, where a boolean value is expected. Where does the string value come from? It is stored in const `formally`, which is created on line 9:

    const formally = myUrl.searchParams.get("formally");

Here, `formally` is created with the value that is returned by calling the `get` method of object `myUrl.searchParams`. The string value has to come from there.

And sure enough, hovering over the `get` method name in Visual Studio Code shows the following:

    (method) URLSearchParams.get(name: string): string

This tells us:

- `get` is a method; in other words, is a function that is assigned to the attribute of an object
- it expects a parameter `name` of type `string`
- it returns a value of type `string`

Quick aside: the details are a bit more complicated. The *actual* shape of function `get` looks like this: `get(name: string): string | null`. - that is, it returns either a value of type `string` or, if no URL parameter with the requested name exists, `null`. In TypeScript, a "pipe" symbol `|` in a type definition can be read as "or", as in `string or null`. In Visual Studio Code on macOS, you can see this additional information when pressing the "command" key while hovering over the `get` method with your mouse. I'm not entirely sure where the incomplete description comes from.

We now have identified, by following the relevant TypeScript type definitions, where the problem that leads to the bug arises.

Because we are allowed to only pass a boolean value to the `welcome` method, while what we get from the `myUrl.searchParams.get` method is a string, we need an additional step where we get from the string value that we have to the boolean value that we need - and this time.

One way to achieve this is to change line 12 of file `index.ts` to the following:

    res.end(greeter.welcome(name, formally === "true"));

This way, we do not pass the value of variable `formally` to the *welcome* method - instead, we pass the boolean result of a comparison expression; if the value of `formally` equals the string value `"true"`, then the boolean value `true` is passed to our method.

That's it - we have successfully transformed our JavaScript codebase into a TypeScript codebase, fixed the bug for good, and are good to go. Simply `cd` to folder `src`, run `tsc`, and then `node index.js` to start the server again.

This time, everything works as expected:

    % curl "http://127.0.0.1:8000/welcome?name=John&formally=true"
    Good day to you, John
    
    % curl "http://127.0.0.1:8000/welcome?name=John&formally=false"
    Hello John


Because we write TypeScript code but run JavaScript code, we now have a two-step build-and-run process: every time we want to start the most recent implementation of our webserver, we need to first run `tsc` in order to transpile the TypeScript code into JavaScript code, and then `node src/index.js` in order to start the server application.

That's a bit involved for something we do so often, and it's also error-prone because it's easy to forget the `tsc` step and then wonder why an expected change does not show up when testing the application.

This can be easily solved: NPM offers a functionality that is called "run scripts" - in the `scripts` section of file `package.json`, we can define a keyword-command pair, and running `npm run <keyword>` then executes the command mapped to `<keyword>`.

By rewriting this section as follows, we can define keyword `start` as follows:

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "tsc && node src/index.js"
    },

Give it a try - stop the currently running server application process by hitting CTRL-c, and then simply execute `npm run start` on the command line. The result should look like this:

    % npm run start
    
    > nodejs-webserver@1.0.0 start
    > tsc && node src/index.js
    
    HTTP server started and available at http://localhost:8000.

This shortcut first runs `tsc`, and if (and only if) this is successful, it runs `node src/index.js`. The `&&` looks similar to the boolean *and* used in JavaScript and TypeScript. On the command line, it's used to logically connect two commands: `first-command && second-command` means "run `first-command`, and if this works without resulting in an error, also run `second-command`". 

With this, we can conclude an enormously important chapter of our journey. Here is what we learned:

- Using NVM, it is possible to install Node.js onto our computer system, and manage the parallel installation of multiple different Node.js versions.
- Using an installation of Node.js, it is possible to run JavaScript code on the command line of our computer.
- This allows us to write network applications, like an HTTP server.
- The command line tool `curl` is a text-base HTTP client which allows us to request contents from our own Node.js-based HTTP server application.
- This so-called client/server architecture is at the heart of the global World Wide Web architecture, which in turn is based on several Internet technologies like DNS, TCP/IP, and others; these Internet technologies operate on low-level networking technologies like Ethernet, ATM, Wi-Fi etc.
- Using Node.js, we are thus able to create and run Internet applications using JavaScript.
- While JavaScript provides everything we need to build those applications, the weak type-safety of this language can quickly result in subtle bugs - this becomes a serious concern for writing even moderately complex applications.
- The programming language TypeScript is a superset of JavaScript - it uses the same syntax, keywords, and functionality as JavaScript, but it also allows us to optionally define type definitions on function parameters and in other places, enabling us to write code with strong type-safety; this avoids a whole family of bugs from the get-go, and offers many additional advantages as we will see.
- Using NPM, we can declare, install, and manage external community-provided Node.js software packages that help us to achieve the goals of our own codebase; additionally, it allows us to define "run scripts" to create shortcuts for our daily work.


## Exploring the possibilities of TypeScript

When we want to learn TypeScript, we obviously don't need to start from scratch. Because it is a superset of JavaScript, we can simply carry over our existing JavaScript knowledge, and we already know 90% of TypeScript. An `if` statement is an `if` statement, a `const` is a `const`, a function is a function - TypeScript changes none of that.

What we do need to learn, though, are the type definition capabilities and the type-safety measures that TypeScript brings to the table.

We have already seen some of the more basic measurements at our disposal, namely adding type hints to function parameters. Writing `const greet = (name: string)` instead of only `const greet = (name)` ensures that no other part of our code can call function `greet` with a value that is not a string.

We will now learn where else types can be used, and how we can even create and use our own types.

Let's begin with an overview of the types that TypeScript supports. We start with the so-called *primitives*: `string`, `number`, `boolean`.

Nothing surprising here - we already know these from chapter one, where we introduced the basic JavaScript value types. These TypeScript types map exactly to their JavaScript counterparts, and behave identical.

Another type, which we already encountered in our JavaScript code, is `object`.

Now, there is also a *type* named `object` in TypeScript, but there isn't a type *definition* called `object` in TypeScript. Instead, TypeScript provides the syntax to define the exact *shape* of an object.

Thus, instead of defining something like `const greet = (person: object)` (which wouldn't really tell as anything about how a `person` object looks like), we can define which attributes we expect the "person" object parameter to have, like this: `const greet = (person: { name: string, age: number })`.

In other words, we define an object's shape as the list of attribute names with a type definition for each attribute. The example above would allow to call `greet` like this:

    greet({ name: "John", age: 34 })

But any of the following would fail the TypeScript Compiler checks:

    greet({ name: "John", age: "34" })
    # Error: age is a string, not a number
    
    greet({ name: "John" })
    # Error: required field age is missing

    greet({ name: "John", age: 34, city: "New York" })
    # Error: additional undefined field city

Note that the order of object attributes is irrelevant - this would work just fine:

    greet({ age: 34, name: "John" })

Another type that can be expressed with TypeScript's additional syntax is `function`. Let's assume we again have a `greet` function, but this time, the parameter it expects is not a `string` or an `object`, but another function which it then calls, like this:

    const greet = (fn) => {
        fn("Hello");
    }

We could call the greet function like this:

    greet( (s) => console.log(s) )    

This means that parameter `fn`, when calling `greet`, becomes the inline or anonymous function `(s) => console.log(s)`.

With TypeScript, we can define the type of parameter `fn` as well. To do so, we need a so-called *function type expression*. For our example, where we expect a function with one parameter of type `string` and no return value, it looks like this:

    const greet = (fn: (s: string) => void) => {
        fn("Hello");
    }

A function type expression looks a lot like an inline function definition: a list of parameters, which too are typed, in parentheses, followed by an arrow, which is followed by the type of the return value of the function.

This introduces a new keyword, `void`; it is used to define the return value type of functions that do not return any value (not even `null`).

If we wanted to define the type of a function that takes one `string` parameter and returns a `string` value, the type expression would look like this:

    `(s: string) => string`

The type of a function that takes two `number` parameters and returns a `boolean` value would look like this:

    `(a: number, b: number) => boolean`

And a function which takes one boolean parameter and returns an object with string attribute `name` and number attribute `age` would be described with the following type expression:

    `(v: boolean) => { name: string, age: number }`

We now have an overview of *what* kinds of type definitions we can use - let's now see *where* we can use them.

Probably the most basic place for a type definition is with a variable declaration:

    const name: string = "J. Doe";
    const age: number = 42;
    const isValid: boolean = true;
    const person: { name: string, age: number } = { name: "J. Doe", age: 42 };

This kind of type definition, however, isn't actually necessary. It's because by immediately assigning a value to a variable, its type becomes obvious - a variable `name` with string value `"J. Doe"` is without ambiguity a string. In situations like this, TypeScript can *infer* the type automatically, and an explicit type definition isn't needed to get type safety through the compiler.

Another place for type definitions is already well known to us - we have by now seen multiple examples of typed function parameters.

But you can (and should!) also type the *return value* of a function, like this:

    const greet = (): string => {
        return "Hello";
    };

This offers one of the most immediately useful benefits of using TypeScript instead of JavaScript. This way, the TypeScript compiler ensures two things at once: it warns us if we do not return a value of the type we declared we would return, and in the places of our codebase where the function is called, it knows what type to expect:

    const greet = (): string => {
        return "Hello"; // Returning something other than a string value
                        // would immediately show a warning in our IDE.
    }; 

    const greeting = greet(); // TypeScript and our IDE know that
                              // greeting is a string value.

    let age = 42;
    age = greet(); // TypeScript and our IDE will warn us that
                   // we try to assign a string value to a variable
                   // of type number.

As with variable declarations, TypeScript can often infer the return value type of a function. Nevertheless, explicitly stating the desired return value type with a type definition is highly recommended. This makes it a lot easier to always see at a glance which type a function returns (without it, we would be forced to always read and comprehend the complete function body - and not all functions are three-liners), and it prevents a whole category of programming errors, because once we declare the expected return type, we cannot mistakenly change the return value of a function to the wrong type without TypeScript preventing us from doing so. 

Of course, functions can also return values of type `object`, and you can define the desired shape of that object as the return type of a function in the same way you do with primitive types:

    const getProduct = (): { name: string, weight: number, amount: number } => {
        return { name: "Banana", weight: 0.23, amount: 42 };
    };

Writing object type definitions is always a bit unwieldy compared to writing just primitive type names, and it often doesn't make for very readably code files. This is especially true if an object's shape is used repeatedly, like this:

    const getProduct = (): { name: string, weight: number, amount: number } => {
        return { name: "Banana", weight: 0.2, amount: 10 };
    };

    const getTotalWeight(product: { name: string, weight: number, amount: number }): number => {
        return product.weight * product.amount;
    };

    const decreaseAmount(product: { name: string, weight: number, amount: number }): void => {
        if (product.amount > 0) {
            product.amount = product.amount - 1;
        }
    };

We need to deal with the same object shape in multiple places, simply because we are handling the same kind of thing again and again. Repeatedly writing out the shape of the thing we are expecting or returning is cumbersome at best, and error-prone at worst.

Luckily, TypeScript offers a useful tool for this: the `interface` keyword. It allows us to define and name our own object type once, and re-use this definition in other places of our code, like this:

    interface IProduct {
        name: string;
        weight: number;
        amount: number;
    };
    
    const getProduct = (): IProduct => {
        return { name: "Banana", weight: 0.2, amount: 10 };
    };

    const getTotalWeight(product: IProduct): number => {
        return product.weight * product.amount;
    };

    const decreaseAmount(product: IProduct): void => {
        if (product.amount > 0) {
            product.amount = product.amount - 1;
        }
    };

This makes for a much leaner and more expressive code file. In a sense, it is also a lot less ambiguous - by giving the references shape a name, we really mean the same "thing" in all three places, and not three different things that just happen to have the same shape.

Note how TypeScript doesn't enforce any kind of syntax for the name of an interface - starting with an uppercase `I` is just my personal preference.


- einführen, wo überall Typdefinitionen vorkommen dürfen 
- https://github.com/TypeStrong/ts-node#installation
- any einführen und sogleich auf noImplicitAny hinweisen, und damit im rest des buches arbeiten
- arrays


# Part 3: React - Rich and interactive user interfaces with JavaScript


At its core, Redux is a function that takes an existing state and an action, and returns an updated state as a result of applying the action on the existing state.

At its core, React is a function that takes a certain state and returns the matching DOM representation of that state.

At its core, a browser is a function that takes a certain DOM and returns a graphical representation.

In addition, interaction of the user with the graphical representation of the DOM in the browser ("the website") makes the DOM elements dispatch actions to Redux, which makes this machine go.


# Part 4: CDK - Deploy and run your applications on AWS, the serverless way


[^note1]: To be precise, Node.js wraps V8, an open-source JavaScript engine developed by The Chromium Project for Google Chrome and Chromium web browsers. See https://en.wikipedia.org/wiki/V8_(JavaScript_engine) for more details.

[^note2]: In other words, there is an important difference between running `greet;` and `greet();` - the latter calls, and therefore executes, the function value that is assigned to `greet`, while the former only returns the assigned function value, but doesn't execute it. This is why `console.log(typeof(greet));` will print `function`, which is the type of the value that has been assigned to const `greet`. On the other hand, running `console.log(typeof(greet("John", "Doe")));`. will return `undefined`, because that is the resulting value when running the function. We will later encounter functions that return values other than `undefined`.

[^note3]: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties for more details.

[^note4]: See https://developer.mozilla.org/de/docs/Web/HTTP/Methods for a list of all request methods.

[^note5]: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields

[^note6]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

[^note7]: There is no theoretical limit to how deep objects can be nested, but there usually is a practical limit, because nesting objects within objects means storing data after all, and our computers do not have unlimited storage space.

[^note8]: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN for more details.

[^note9]: See https://www.typescriptlang.org/play?alwaysStrict=false&target=0#code/MYewdgzgLgBA5gJwKZKgMQQSyWAJgGwE8YBeGACjAEMBbJALhmizDgEpSA+GAbwFgAUDGExQkEPiQA6fCDjkARAAkk+WTAUwA1DGp02AbkEBfIwMGIU6LDgKFFAKSpgkCw4KA.

[^note10]: See https://www.typescriptlang.org/tsconfig for the documentation of all available TypeScript compiler options.
