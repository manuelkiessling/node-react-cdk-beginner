# Introduction to JavaScript

## Values and Types

Starting to write JavaScript code is really simple. All we need is an environment which allows to interpret and run the JavaScript code that we write. There are several environments we can choose from, and we will learn about the different environments that are able to handle our code, but for now we will start with one that is readily available for us: the web browser.

All mainstream web browsers - Chrome, Firefox, Internet Explorer, Edge, Safari, Opera, to name the most famous ones - are able to run JavaScript code, and we can use them for our first experiments.

To follow along, please open your Chrome or Firefox browser. If you don't have at least one of these currently installed, then please visit https://www.google.com/chrome or https://www.firefox.com to download and install them.

After opening the browser, you don't need to surf to any specific webpage. Instead, we want to work with the browser's JavaScript console, where we can write code and execute it.

In Firefox, hit CTRL-SHIFT-K (or, on macOS, ALT-CMD-K) to open the console. In Chrome, use CTRL-SHIFT-I (or, on macOS, ALT-CMD-I) to open the Developer Tools, and then click on the "Console" tab within the newly opened pane to access the console.

When reaching the console, it's possible that it is already filled with some warning and error messages. That's not a problem - simply ignore these. Both browsers also provide a button which empties the console. It's a trashcan icon in Firefox, and a circle-with-a-diagonal-line icon in Chrome.

The console offers you a prompt which allows you to type in text, as can be seen in the following screenshot:

@TODO: Add screenshot

We can now use this console to write and run our very first JavaScript code.

To do so, type the following at the console input prompt: `"hello"`, and then hit the ENTER key. Note the quotation marks - these are important!

As a result, the console will print our text back to us - in this case, it's `<- "hello"`. The left arrow isn't actually part of the response - it simply denotes that this is a reply from the console.

What just happened is this: The JavaScript interpreter, which is embedded into the web browser, took our code, interpreted and executed it, and informed us about the result of the code execution. The result of feeding `"hello"` into the interpreter is a return value of `"hello"`.

Not exactly spectacular, to be honest, so let's up the ante a bit.

Please type `let str = "hello"`, and hit ENTER.

This time, the response of the interpreter isn't an echo of what we wrote - instead, we get back `undefined`. This sounds like something didn't work as intended, but that's not the case. The JavaScript interpreter again evaluated and executed our code successfully, but this time, the result of the execution isn't any specific value, or, in JavaScript lingo, it's *undefined*.

Even though we don't get a result, something happened behind the scenes.

What we just did was a so-called *variable assignment* - we defined a variable named `str`, and assigned it the value `"hello"`. In JavaScript, as in all other programming languages, variables act as containers for values. It's like using an envelope that has "str" written on it and putting a letter with the text "hello" into this envelope.

We can now use the variable *str* to refer to our text. Which is why now, typing `str` into the console and hitting ENTER will return `"hello"`. Feeding `str` into the JavaScript interpreter made the interpreter evaluate its value, and feeding it back to us.

By assigning our variable *str* a certain value, we implicitly gave it a certain *type*. In this case, the type of value `"hello"`, and therefore, the type of variable *str*, is *string*, which is the type that JavaScript uses for text values.

We can define additional variables, and assign values of other types to them, like this:

    > let numberOne = 1
    > let numberTwo = 0.5
    > let bool = true

This introduces two new types: *number* and *boolean*. For numbers, JavaScript doesn't differentiate between integer and floating point numbers - in other words, the values `1` and `1.0` are identical.

As expected, values of type *number* can be used for mathematical operations. Entering `1 + 1` at the console will return `2`, as does `1.0 + 1.0`. In order to get a floating point number back, we must run an operation where the result contains a fractional part, e.g. `1 + 1.5`, which of course returns `2.5`.
Operations like `3 * 2.5` and `5 / 2` execute a multiplication and a division just like expected, and operator precedence is applied as usual, and can be enforced with parentheses, which is why `3 * 2 + 5` returns `11`, while `3 * (2 + 5)` returns `21`.

The plus sign `+` has an obvious meaning when dealing with values of type *number*, but it also works with *string* values, and allows to concatenate texts: `"foo" + "bar"` results in `"foobar"`.

The *boolean* type has only two possible values, `true` and `false`, and is used, as its name implies, for boolean operations. For example, boolean operations can result from comparing numbers: `1 == 1` will return `true`, as does `1 < 2`, while `1 == 2` and `1 > 2` will return `false`.

Note how we use `==` for comparison, while we used `=` for assignment.

And there is another comparison operator, which is useful when we compare values of different types: `0 == 0` is of course `true`, but `0 == ""` is also true. This might not be what you want, because the number `0` and the empty string `""` are two different things - we probably agree that an empty string is something different than the number zero. In order to make sure that the two things we compare have the same value *and* also have the same type, we can use the `===` operator, which checks for type *and* value. Because comparisons with `==` are less strict, they are a common source of confusing bugs. It's therefore recommended to always compare using `===`, unless you know precisely that you want a less strict comparison.

Mixing values of different types is possible not only for *comparison* - you can also *combine* values of different types to create new values. For example, adding the *number* value `1` to the *string* value `foo` creates a new string value: `1 + "foo"` results in `"1foo"`.

It's important to understand that the same logic applies when comparing values of different types with `==` or combining values of different types with `+`: for the JavaScript interpreter, it's a two-step process called *type coercion*. First, one of the values is translated into another type, and only then the comparison or combination takes place.

There's a whole lot of rules behind type coercion in JavaScript. However, the basics are simple - whenever type coercion happens, a values is translated into one of only three types: into a string, into a boolean, or into a number.

When we run `1 + "foo"`, then the JavaScript interpreter assumes that we want a result of type *string*, and therefore translates the number `1` into the string `"1"`, and then concatenates both string together into `"1foo"`. Because the string equivalent of the number `1.0` is `"1"`, too, the results of `1.0 + "foo"` is again `"1foo"`.

We could say that when working with `+`, a string value as part of the calculation "wins", and a non-string part of the calculation is translated into a string value. The opposite is true when working with `-`, `*`, or `/`. The result of `5 - "2"` is the number `3`, the result of `5 * "2"` is the number `10`, and `5 / "2"` results in `2.5`. Here, the number part of the calculation "wins", and the string is translated into a number before the calculation is done.

Note that parentheses play a role here, too: `1 + 2 + "foo"` results in `"3foo"`, while `1 + (2 + "foo")` results in `"12foo"`.

Equations are evaluated from left to right: `1 + 2 + "3"` is the string `"33"` - first, `1 + 2` are evaluated to the number `3`, which is then concatenated with string `"3"` into string `"33"`.

When comparing a value of a type other than *boolean* to a boolean value with `==`, the non-boolean value is first converted to a boolean value. For example, the number `0` becomes `false`, which is why `0 == false` evaluates to `true`, while `1 == false` evaluates to `false` - `0` is translated into `false`, and `1` is translated into `true`.

You can do these translations explicitly, through *type casting*. To do so, use one of the following functions:

- `Boolean(val)` transforms `val` into a *boolean* value
- `Number(val)` transforms `val` into a *number* value
- `String(val)` transforms `val` into a *string* value

For example, `Boolean(0)` and `Boolean("")` translate into `false`, while `Boolean(1)`, `Boolean("1")` - **and** `Boolean("0")`! - all translate into `true`.

Because keeping all these coercion rules in mind isn't easy, and because not all of them are straight-forward, it really is recommended to always use the `===` comparison operator, which doesn't do any kind of type coercion and, as explained, compares value *and* type.

Let's now get back to our most complex JavaScript expressions so far: `let str = "hello"`, `let numberOne = 1`, etc.

As explained, these are variable assignments, with the variables "containing" or "holding" the assigned values. We need to be more precise, though - these single lines actually perform two things at once: first, a variable is *defined*, that is, the variable name is from then on known to the JavaScript interpreter. Afterwards, an initial value is then assigned to the  newly defined variable, making the value accessible using the variable name.

In other words, the result of expression

    let str = "hello"

is identical to the result of these two expressions:

    let str
    str = "hello"

Whatever approach you choose, `str` is from then on identical to the string `"hello"` by any practical measure. `str == "hello"` is true, as is `str === "hello"`, and because `"hello" + " world"` results in `"hello world"`, so does `str + " world"`.

However, as the name *variable* implies, the value, and even the type, of `str` can change. `"hello"` is always `"hello"` and is always a *string*, but we can assign `str` another value, for example `str = "goodbye"` and `str = 1`.

Not that while you can re-assign `str` (give it another value and/or type), you cannot re-*define* it once it has been defined. Running

    let str = "hello"
    let str = "goodbye"

will not work: trying to evaluate the second line will result in an error message. Its content varies between different browsers - in Chrome, it's "Uncaught SyntaxError: Identifier 'str' has already been declared".



So far for some of the most basic types of JavaScript, and how they interact. We will discover further types soon, and we will see how they play together with the types we just learned about.

To do so, however, we need to switch into another JavaScript context first. Experimenting with one-liners is all nice and dandy for our first baby steps, but of course it's very limited. While it's possible to enter multiple lines of code into the console (hold SHIFT while hitting ENTER), it's not that comfortable.

Thus, we will now use JavaScript in another environment: Node.js.

