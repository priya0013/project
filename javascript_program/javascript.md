## JAVASCRIPT

# what is javascript?
 - javascript is the worlds most popular programming language 

 - javascript is easy to learn

 - JAVASCRIPT is used to create interactive and dynamic webpage . it is responsible for adding functionality to a website and allows for user interaction with the website's content
 
 # VARIABLE:
  - varible are containers for storing information or data

  eg-
  var s=10;
  console.log(s);

  - 3 ways
  var
  let
  const

# Keywords

-var
-let
-const
-if
-switch
-for
-function
-return 
-try

# datatype
- typeof(10)-number
- "10"-string

# primitive datatype
- number
- string
- boolean
- null
- undefined
# Non primitive datatype
- object
- array

## FUNCTION

- A javascript function is a block of code designed to perform a particular task
- A js function is executed when "something" invokes it(call it).

function <function_name>(){}

function hi(){
    console.log("hi");
}

### DOM MANUPULATION

what is event adn event handlers?

- An event in js is an action or occurence that happens within a web page, such as a user's interaction(click a button) or a page loader

- An event handler in js is a function that responds to am event when it occurs. it listen for specific events and executes code to perform actions based on those events ,creating interactive and dynamic web application

### DOM Manipulation
# different types of events:

# onchange()- 
An html element has been changed
# onclick()-
The user click an html element
# onmouseover()-
The user moves the mouse over an html element
# onmouseout()-
the user moves the mouse away from an html element
# onkeydown()-
the user pushes a keyboard key
# onload()-
the browser has finished loading the page
# Math.random()-
return a random number b/w also 0,1
run by run it will change
# Math.floor()-
return without after demial number (rounded value)
7//2=3 not 3.5


### event
- without or with using of id 
- using this we can handle many element at a time


### what is innerHTML?
- innerHTML is a property in js that allows you to access or modify the HTML content of the element in the document object model(DOM) . it is primarily used to retrieval or set the HTML content inside an HTML element

### Different ways of selecting an element:

- queryselector
- queryselectorAll
- getElementById----an id identifies a single, unique element
- getElementByClassName-------a class can be reused across multiple elements
- getElementByTagName
- createElement()

eg:
//creating tag

var ele=document.createElement("h1")
ele.innerHTML="byee"

//using append

 var ele=document.createElement("h1")
ele.innerHTML="byee"

//appending
var elee=document.getElementById("box")
elee.append(ele)

- insertAdjacentElement("begin","hello")