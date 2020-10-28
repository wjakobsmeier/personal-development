tutorial name:
React: Getting Started

source:
https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents

notes/instructions:

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




=========
images:
![component]: images/function and class component.png

