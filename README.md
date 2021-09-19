# Library - The Odin Project

This is the repo for the Library project from the JavaScript course of The Odin Project

## What I Learned

This project was an exercise working with objects in JavaScript.  My experience with objects has been mainly working with object literals or other objects that have their prototypes already defined.  This was my first time creating objects using a constructor function.  My previous learning was using classes, which I didn't find very intuitive and according to the articles provided throughout the course has been nothing more than syntactic sugar to appease the masses who come from different languages.  While objects seemed pretty common in JavaScript, I had no experience working beyond just assigning key-pair values and passing them around.

I feel a bit more comfortable now working with objects and creating them from scratch to suit my data needs.  The articles and videos provided great explanations on what the prototype is and how it affects the instances of those objects.  The visuals were key in describing how objects work and operate in JavaScript.

I didn't use `object.create()` in this project since I had started a constructor function from the last lesson.  It made more sense in the time being to continue creating `new` objects.

## Optional Local Storage

I had worked with `localStorage` before, and since things were moving along I figured I would implement it.  I was rudely reminded by the error messages in my console that `localStorage` uses DOMstrings as their format of choice.  There was some messing around, but I finally figured out how to utilize `JSON.stringify()` and `JSON.parse()` to move between `localStorage` and the browser window's working memory.

The instructions did hint that there would be an issue with object methods not being transferred to `localStorage` since it uses DOMstrings.  I felt it best to keep not only a copy of the data in `localStorage` but to continue maintaining a copy in working memory.  This meant I only had reinstate the object methods upon first load of the page for the data stored that doesn't have the object methods.  Anything else created from the page will automatically have an instance saved in working memory to operate on.

## Change To Using Classes

In a later lesson of the JavaScript course, we went over classes and the layer it adds to create objects.  In the lesson, the practice exercise was to convert our plain constructor to use classes.  Since classes still utilized the `new` operator, there was no need to have to refactor the entire code.  All that needed to be done was to refactor the plain constructor.  In our classes, variable initializations are placed in the constructor method, and custom methods use a variation of the function syntax.  The syntax is a little bit different, but otherwise a little bit easier to read.

Thanks to the additional resources, I also implemented a getter to the function that spits out the books information.  It's a different look from the plain constructor, but makes it so that in the code it can be written syntactically as a property instead of having to invoke the method.  Getters/setters present another way of doing things and probably useful in certain situations.

## Form Validation

This was my first time working with form validation through the constraint validation API in JavaScript.  Usually I would use the built in form validation on the client side (along with server side validation of course), but that was done through the HTML and not through JavaScript.  I learned how to read the `ValidityState` object along with the `validationMessage` which can also be customized.  The constraint validation API offers some more customization that just using the default built in validation from the browser.