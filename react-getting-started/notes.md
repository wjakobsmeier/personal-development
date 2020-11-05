tutorial name:
React: Getting Started

source:
https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents

notes/instructions:

## The Basics

# Why React?
React is a small JS library requires other libraries to form a complete solution.
React builds user interfaces. Anything that uses JS we can use react to describe a web user interface.
React is declarative, we tell React what we want and React will take care of it. It is declarative for dynamic data.
Frameworks design decisions have been made already but has disadvantages.:
they are not flexible, deviations will cause friction
they are large and full of features, which means they are hard to customize and require the entire frame work.
Some frameworks are going modular for that reason.

React declaratively describe their user interfaces and model the state of these interfaces.
React uses the virtual DOM and avoids using the DOM API.
React is just JS, very little react API to learn.
React is throughly tested/
React created new language that allowed developers to declarative stateful user interfaces. Instead of coming up with steps for the transactiosn on their interfaces, developers described interfaces in terms of a final state. When transactions happen to the state React takes care of updating the user interface.

# React's basic concepts
1. components:
they are just like functions.
they receive input objects and they output a description of a user interface
they are reusable and composable (can contain other components)
they don't need to be invoked you just use them just like an HTML element (<Component />)
they can have a private state to hold any data that may change over the life cycle of the component.
2. reactive updates:
when the state of a react component (the input) changes the user interface it represents (the output) changes. The how and when these changes in the browser will be taken care by React.
3. virtual views in memory:
use JS to generate html.
react compares versions of the UI in memory before it acts on them

React components are either function or class components:
both can be stateful and have sideeffects or can be purely presentational.
functional components are simpler while class components are more powerful.

```
const MyComponent = (props) => {
    return (
        <domElementOrComponent ... />
    )
}
```

```
class MyComponent extends React.Component {
    render () {
        return (
            <domElementOrComponent ... />
        )
    }
}
```

Both use props and states as inputs, output JSX.
Props input is explicit, it's a list of html attributes an element can have.
State input is internal,  autoinflect changes in the browser.
These two iput objects have a distinct difference:
within component, state object can be changed, while the props are fixed values, they are immutable.
Components can only change their state but not their props.

JSX is not HTML:

```
class Hello extends React.Component {
    render () {
        return (
            <div class="container">
                <h1>Greeting {name}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, mountNode)
```

# Your First React Component

Create a button with numeric label, initialize with 0. On click, increase count by 1.
jscomplete.com/playground
test with:
```
document.getElementById('mountNode').innerHTML = 'test'
```
command + enter to execute
Latest version of React and ReactDOM are preloaded on playground. JSX and ES2015+ enabled.

First example:
https://jscomplete.com/playground/rgs1.1

```
function Hello() {
	return <div>Hello React!</div>;
}
```

react functional component named Hello
no input
it's pure because it has no state

```
ReactDOM.render(
  <Hello />,
  document.getElementById('mountNode'),
);
```

to display instruct the ReactDOM library
takes 2 arguments to render
component to render
DOM element in browser where to want to show the react component

Interview question:
Explain what is going on in line 2. `return <div>Hello React!</div>;`
How are wrinting html in a js function?
Why is it not throwing an error?
The entire example code is not valid JS, why does it work?
My answer:
JSX syntax that will be compiled to JS to render a HTML element to be displayed on the website.
Answer:
Line 2 is not JS, it is JSX. It will not be executed by the browser, but by the JSX extension and compiled to something the browser understands. This is done by Babel.

```
// return <div>Hello React!</div>;
// Babel equivalent
return React.createElement(div, null, Hello React!!!!!)
```

```
// document.getElementById('mountNode')
// Babel equivalent
React.createElement(Hello, null)
```

Update to button with with counter example:

```
function Button() {
  return <button>test</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
```

Components start with capital letter, in this case `Button`, if you tried `button` then react would ignore the function and try and render a button.
The button should be visible in the view but clicking it does nothing.

# Your first React Hook
go to https://jscomplete.com/playground/rgs1.2

Right now, the component renders a stateless button. In order for the counter to increase every time the button is clicked we need a state object.
To use a state object react has a special function named `useState()`, which is globally available in the playground.
`useState()` returns an array of two elements:
state object (getter), can be of any type.
update function (setter)
For example call the state object counter and its update function setCounter. With JS destructuring this results in:

```
const [counter, setCounter] = useState();
```

`useState()` can take an argument, the initial state value of the counter in our case. Set it to 0 for our example.

```
const [counter, setCounter] = useState(0);
```

To display dynamic values wrap them with `{}`.

```
return <button>{counter}</button>;
```

It should show 0 in the view as the counter value is initialized with 0.
To handle the clicks, we need to add an event handler.
We use the `onClick` attribute on the button element.

```
return <button onClick={someFunction}>{counter}</button>
```

It receives a function reference inside curly brackets. It does not need the `()` at the end of the function, we do not need to invoke this function, just pass in the pointer to the function.
Inline arrow function is also valid to be used inside the `onClick` attribute.

```
return <button onClick={() => console.log(Math.random())}>{counter}</button>
```

To make the example work with the counter it can be rewritten as follows:

```
return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
```

(
    could the above been coded as:
    ```
    function onClickCounter() {
        setCounter(counter + 1)
    }
    return <button onClick={onClickCounter}>{counter}</button>
    ```

)

Example code:
```
function Button() {
  const [counter, setCounter] = useState(0);
	return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
```

My code:
```
function Button() {
  const [counter, setCounter] = useState(0);
	// return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
  function onClickCounter() {
      setCounter(counter + 1)
  }
  return <button onClick={onClickCounter}>{counter}</button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
```

Expect the button to behave as expected.

`useState` function is a hook in React, similar to a mixin or module, but a stateful one, hooks the simple component to a state.
React handled updating the view with its reactive nature. We implemented the transactions on a JS counter object, not the UI.
React did the DOM updates.

Challenge:
start button with value of 5.
double the buttons label with each click. 5, 10, 20, 40, 80, etc...
solution:

```
function Button() {
  const [counter, setCounter] = useState(5);
  function onClickCounter() {
      setCounter(counter * 2)
  }
  return <button onClick={onClickCounter}>{counter}</button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
```

# Your first one-way data flow
go to https://jscomplete.com/playground/rgs1.4

Improve readabilty by breaking up long lines by wrapping `()` around then:

```
return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
```

```
return (
    <button onClick={() => setCounter(counter+1)}>
        {counter}
    </button>;
)
```

change the inline function create click handler function. Convention is to call it `handleClick`.

```
function Button() {
	const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1)
  }

	return <button onClick={handleClick}>{counter}</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
```

Add presentational component that shows the value of the counter only. Start by adding a new function that returns an empty div.

```
function Display() {
    return (
        <div>...</div>
    )
}
```

But it will not be displayed as the component has not been included in the rendered element yet. To include the component add it:

```
ReactDOM.render(
    <Button /><Display />,
    document.getElementById('mountNode)
)
```

This will not work by adding it as an adjacent sybling. Why? Because each of these elements gets translated into a function call which returns something, so the second function call will be ignored.
Solutions:
You could render an array of elements instead if all elements are coming from the same component.

```
ReactDOM.render(
    [<Button />, <Display />],
    document.getElementById('mountNode)
)
```

Other solution is to make these two react elements the children of another react element. We can enclose them inside a div, then render both elements inside of it. React API supports this.

```
ReactDom.render(
    <div>
        <Button />
        <Display />
    </div>
)
```

If you need to inclose several react elements without introducing a new div parent, you can use React.fragment.

```
ReactDom.render(
    <React.Fragment>
        <Button />
        <Display />
    </React.Fragment>
)
```

This is so common you can shortcut `<React.Fragment></React.Fragment>` to `<></>`.

```
ReactDOM.render(
    <>
        <Button />
        <Display />
    </>
)
```

But this can be optimized. Extract fragment and both components into its own component.

```
function App () {
    return (
        <>
            <Button />
            <Display />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode)
)
```

So the complete working code for now is:

```
function Button() {
	const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1)
  }

	return <button onClick={handleClick}>{counter}</button>;
}

function Display() {
  return (
    <div>...</div>
  )
}

function App() {
  return (
    <>
      <Button />
      <Display />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
```

This renders and works as expected, the button clicks still increment.

Now to make the Display component use the counter from the Button component the useState needs to be passed from Button to App component.

```
function Display (props) {
    return (
        <div>{props.message}</div>
    )
}

function App () {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <Button />
            <Display message={counter} />
        </>
    )
}

```

This is the one way flow of data. Parent components can flow their data to their children.
Code so far:

```
function Button() {
  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }

	return <button onClick={}>+1</button>;
}

function Display(props) {
  return (
    <div>{props.message}</div>
  )
}

function App() {
  const [counter, setCounter] = useState(44);
  return (
    <>
      <Button />
      <Display message={counter} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
```

Parent components can also flow down behaviour to their children.
When the button is clicked the Display component value should increment by one.
Handle updating the state in the App component.

```
function App() {
    const [counter, setCounter] = useState(44);
    const incrementCounter() {
        setCounter(counter + 1)
    }

    return (
        <>
            <Button onClickFunction={incrementCounter} />
            <Display message={counter} />

    )
}
```

In order for the Button component able to invoke the incrementCounter function in the App component we can pass a reference to incrementCounter function as a prop.

```
function Button (props) {
    return (
        <button onClick={props.onClickFunction}>+1</button>
    )
}
```

Full working example code:

```
function Button(props) {
	return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(44);

  // const incrementCounter = () => setCounter(counter + 1);  // this works also
  function incrementCounter() {
    return setCounter(counter + 1);
  }

  return (
    <>
      <Button onClickFunction={incrementCounter} />
      <Display message={counter} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
```

The state and behaviour is handled by the parent component and is only passed down to its children.
This is in part of separation of responsibility.
Where to define the state?
As close as possible to the children who need access to the value of the state.

# Component reusability

Make a component generic enough so that it can be reused.
The Button component should be updated so that we can pass in an increment value instead of the hard coded +1 for now.
The amount to increment will be a property of the component will be dynamic passed down by the parent.
Add 4 buttons with increments of: 1, 5, 20, 100.

```
function Button(props) {
    return (
        <button onClick{props.onClickFunction}>
            +{props.increment}
        </button>
    )
}

function Display(props) {
	return (
        <div>{props.message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);

    return (
        <>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={20} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
```

But the buttons do not increment the label as per their incremented values yet.

Exercise:
Try and update the code for the handlers to update based on their increments.

```
function Button(props) {
  function handleClick () {
    return props.onClickFunction(props.increment);
  }
  return (
  	<button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
  	<div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
	return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
```

The incrementCounter function needs to receive a value, use its argument to do that.
The Button onClick function needs a reference to a function, can not just pass and argument and invoke the function.
Create and use a local handle function.
Solution accessible at https://jscomplete.com/playground/rgs1.5

# Tree reconciliation in action

What is the value of creating HTML in JS?
See https://jscomplete.com/playground/rgs1.7

JS version uses innerHTML which uses a string to represent the content.
In the React version we used pure JS calls and represented the content with an object.
Every HTML element will be represented with a JS object using a React.createElement call.
Add input and pre to show a time stamp and nest both render approaches into a render function which runs an interval of 1000 ms.
This should update the time stamp.

See https://jscomplete.com/playground/rgs1.8

But if you were to type in the first box it would reset. The react approach will not reset as the only thing that will update is the time stamp container itself.
That is React's smart diffing algorithm at work (https://reactjs.org/docs/reconciliation.html).
It only regenerates in its DOM node what actually needs to be regenerated, everything remains the same.
This is because React uses a virtual DOM and we have a representation of user interface in memory because it was written in JS.
For every tick/update, React keeps the last UI version in memory, and a new version will also be in memory.
React will compute the difference between new and old versions and then instruct the browser to update only the computed diff and not the whole DOM node.

# Wrap up

A react application is a set of reusable components.
Components are just like functions, they take an input and output a description of a user interface in the form of a React element.
The React DOM library enables us to render those react elements in the browser and will rerender them automatically when their in memory state changes.
We accomplish this by writing the components markup using the React JS API.
React has a way to write the virtual DOM close to the HTML syntax we are used to, known as JSX.
The input for a component is a set of properties accessible inside the component named props.

```
(props) => {}
```

Can also use set of state elements a component can access with the special useState function.

```
[value, setVal] = useState(initialVal)
```

A component state can be changed inside that component.
The props are immutable, but the state is mutable.
Every time a component changes its state, react rerenders it.
The props of a component can not be changed by the whole component can be rerendered with different props by the component's parent.
Syntax to mount a React component in the browser is `ReactDOM.create`, which takes two arguments; the component to render (`<Component />`) and the HTML element to hold the React rendered markup.
React has normalized events, like `onClick`, `onSubmit`, etc., that work accross all browsers.
React has two types of components: function and class components.

## Modern JS crash course

# ECMAScript and TC39

Yearly JS updates by the workgroup.

# Variables and block scopes

Block scope is created with a pair of curly brackets.

```
{
    // block scope
    {
        // nested block scope
    }
}

if (true) {
    // block scope
}

for(var i = 0, i <= 10, i++) {
    // block scope
}

function sum(a, b) {
    // function scope
    return a + b;
}
```

Block scopes are different form function scopes.
Function scopes are created for each function.
Variables created inside a function can not be accessed outside of it.
But the variable i created in the for loop is accessible outside the for loop, it would return 11 in the above example.
To fix this, use `let` instead of `var`, to avoid out of scope access.
To protect nested scope, use `let` or `const`.
References defined with `const` can not be changed.
String and interger scalar values are immutable and using const their references can not be changed either.
Using `const` ensures that the variables is pointing to the same array or object, but the but their contents can still be mutated.
Use `const` for scalar values that do not change.

# Arrow Functions

A way to create a function without typing the word function

```
const X = function() {
    // 'this' here is the caller of X
}

const Y = () => {
    // 'this' here is not the called of Y
    // It's the same 'this' found in Y's scope
}
```

WOrks more predictably with closures.
An arrow function does not care who calls it, while a regular function does.
Regular functions give access to their 'calling'  environment  while arrow functions gives access to their 'defining' environment.
The value of the 'this' keyword inside a regular function depends on how the function was called (the object that made the call).
The value of the 'this' keyword inside an arrow function depends on where the function was defined (the scope that defined the function).

# Object literals

```
const mystery = 'answer';
const inverseOfPi = 1/Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() {}, // property that defines a function
    f2: () => {}, // property arrow function
    [mystery]: 42, // dynamic properties
    inverseOfPi // short for of inverseOfPi: inverseOfPi
}

console.log(obj.mystery) // undefined - mystery property was defined with a dymanic property syntax. JS will evaluate the myster experssion first.
console.log(obj.answer) // 42

```

# Destructuring and Rest/Spread

```
// const PI = Math.PI
// const E = Math.E
// const SQRT2 = Math.SQRT2

// these 3 lines can be destructured into a single line.
const { PI, E, SQRT2 } = Math;
```

Destructured three properties out of its right hand object into the current scope.

```
// in react app - destructuring used to add functionality from the react API.
// const { Component, Fragment, useState } = rquire('react');
// useState()
```

Destructuring also works in function arguments.
If the argument passed to the function is an object, instead of using the name of the object to access its properties, use the destructuring syntax within the function parenthesis to destructure the properties interested in to make them local to the function.

```
const circle = {
    label: 'some label',
    radius: 2
}

const circleArea = ({radius}) => {
    (PI * radius * radius).toFixed(2)
}

// adding default value to destructured argument:
const circleAreaWithDefault = ({radius}, {precision = 1}) => {
    (PI * radius * radius).toFixed(precision)
}

// to make the precision/second argument optional:
const circleAreaWithOptionalDefault = ({radius}, {precision = 1} = {}) => {
    (PI * radius * radius).toFixed(precision)
}

console.log(circleArea(circle)) // 12.57
console.log(circleAreaWithOptionalDefault(circle)) // 12.6
console.log(circleAreaWithDefault(circle, {precision: 5})) // 12.56637
```

You can also destructor arrays into local variables. Use item's position.

```
const [first, second,, fourth] = [1, 20, 30, 40];
// first 1
// second 20
// fourth 40
```

To split an array:

```
const [first, ...rest] = [1, 2, 3, 4];
// first = 1
// rest = [2, 3, 4]
```

To filter out properties from an object:

```
const data = {
  temp1: 1,
  temp2: 2,
  fName: 'first'
  lName: 'last'
}

const {temp1, temp2, ...person} = data;
// temp1 = 1
// temp2 = 2
// person = {fName: 'first', lName: 'last'}
```

To copy arrays and objects can use spread operator:

```
new arr = [...someArray]
new obj = {...someObj}
```

Note, these are shallow copies and nested objects or arrays will be shared between these copies.

# Template strings







=========
images:
![component]: images/function and class component.png

