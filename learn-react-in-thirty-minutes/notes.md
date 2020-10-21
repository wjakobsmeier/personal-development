tutorial name:
Learn react in 30 minutes

source:
https://www.youtube.com/watch?v=hQAHSlTtcmY

notes/instructions:

commands:

// starts dev server
npm start

// bundles app into static files for production
npm run build

// starts test runner
npm test

// removes tools and copies build dependencies, conf files, scripts into app directory.
// if you do this, you can't go back
npm run eject

app structure:

index.html contains a div into which our entire app will be loaded into. React will generate our HTML and put it in there.

```
<div id="root"></div>
```

src folder will contain our code.

index.js:
This is where our application starts.

ReactDOM.render(arg1, arg2):
Render the content we pass as arg1 at a certain element arg2.

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Render the app component into #root found in index.html

App.js:
The app component

Start app by running `npm start`

time stamp:
4:23

====================

Remove boilerplate code in App.js and `return null` instead. Remove css and logo import also.
Remove App.test.js, index.css, App.css, logo.svg, serviceWorker.js.
In index.js remove `serviceWorker.unregister()`, the import for serviceWorker and index.css.
(The tutorial doesn't have a `setupTests.js` so it's probably also safe to remove that from the app).
The only files left inside src should be index.js and App.js.
The app should not throw any errors and should load a blank page at this point of time.

time stamp:
5:22

====================

Goal is to write a To do app for this tutorial. Let's start with the HTML code first.
Start inside the App component to write the HTML for the application.
Use parenthesis in the return statement to return everything within them.

```
return (
    <TodoList />
)
```

We are embedding a component inside our App component.
Let's create a new file TodoList.js in the src folder.
(Assuming the ES7/React/ VSC plugin is installed).
type `rfc` then enter should generate a react function component with the name TodoList which is the name of the file.
Add Hello world inside the div for the view.
Go to App.js and import the TodoList component.
The app should not throw any errors and should show Hello World.

time stamp:
7:13

====================

Add input for new to do in App.js.
We can not just add `<input type="text" />` inside the return as two jsx elements can not be put inside a return.

```
Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
```

As a function can only return one thing, a fix for returning more than one jsx element is to wrap them with an empty element, the fragment:

```
return (
    <>
        <TodoList />
        <input type="text" />
    </>
);
```

Add a button to add to dos.
Add a button to clear to dos.
Add a container to show how many to dos are left to do.
This should render all necessary static elements for the app component, all the HTML for our to dos will go inside the TodoList component.

```
return (
    <>
        <TodoList />
        <input type="text" />
        <button>Add To do</button>
        <button>Clear To dos</button>
        <div>0 to dos left</div>
    </>
);
```

time stamp:
8:40

====================

State management:
When state changes react will rerenders things for us. Going to store all of the to dos inside of a state.
In order to use state, need to use the useState hook.
Import useState from react in App component.
Call useState function and pass in default state. For to dos the default is an emtpy array. So for the
first time the app loads, we will use an empty array of todos.
Set a veriable; useState returns an array, the first element is all of the to dos and the second is a function that allows to update to dos.

```
const [todos, setTodos] = useState([]);
```

As an example, add some to dos to the array.

```
const [todos, setTodos] = useState(['to do 1', 'to do 2', 'to do 3']);
```

Pass to dos by adding them to the TodoList component as a prop.

```
<TodoList todos={todos} />
```

We have a prop in TodoList and we are passing it the todos variable.
In TodoList.js add the prop and display the number of to dos in the view.

```
export default function TodoList({ todos }) {
    return (
        <div>
            { todos.length }
        </div>
    )
}
```

It should show the number 3 at the top now, which is the number of items in the todos list that was passed into the component via prop.

time stamp:
11:30

====================

To print out each to do, loop through to do array by creating a new to do component.
Create new file Todo.js and 'rfc' it and add the todo prop/element.
In the TodoList component import Todo.
Now the Todo element is available in the TodoList component. We can now loop through/map over the list of to dos and
return the ToDo element/component and pass it a todo via the prop.

```
export default function TodoList({ todos }) {
    return (
        todos.map(todo => {
            return <Todo todo={todo} />
        })
    )
}
```

Inside of Todo.js we can print out the todo.

```
export default function Todo({ todo }) {
    return (
        <div>
            { todo }
        </div>
    )
}
```

It should list all three to dos at the top.

time stamp:
12:43

====================

Notice how there is a console warning:

```
Warning: Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.
    in TodoList (at App.js:13)
    in App (at src/index.js:7)
    in StrictMode (at src/index.js:6)
```

React requires each item in a list to have a unique identifier to ensure that when an item changes, that only that one gets rerendered.
This is to avoid rerendering the entire list for efficiency puroses.
Add a key to the Todo element in the TodoList component.

```
return <Todo key={todo} todo={todo} />
```

While this works, it's not ideal as the to do right now is just a string and they may not be unique.
Also, a to do requires a name, id, and a completed status. Update the array in App.js.

```
const [todos, setTodos] = useState([
    {
        id: 1,
        name: 'to do 1',
        isCompleted: false
    },
    {
        id: 2,
        name: 'to do 2',
        isCompleted: false
    },
    {
        id: 3,
        name: 'to do 3',
        isCompleted: false
    }
]);
```

Update the key in TodoList.js to be todo.id.
Update Todo component to show the todo.name.
It should list all three to dos.

time stamp:
14:26

====================

Build out the to do by adding a check box and a label.

```
return (
    <div>
        <label>
            <input type="checkbox" checked={ todo.isCompleted } />
            { todo.name }
            { todo.isCompleted }
        </label>
    </div>
)
```

Remove all the static to dos from the useState in the App component as we should start with a blank state when we first start the app.
Want to add to dos when we click on Add to do button. Add onClick listener to that button.

```
<button onClick={handleAddTodo}>Add To do</button>
```

Add the function to the component.

```
function handleAddTodo(event) {

}
```

This function should add the new to do to the list of existing to dos. In order to get access to the contents of the input use useRef hook. This allows us to reference elements inside of HTML.
Import useRef from react.

```
import React, { useState, useRef } from 'react';
```

create a variable for the reference of the HTML input to have access to it. To get the value of the input use:

```
const name = todoNameRef.current.value
```

log out name to see if the button is working.
Clicking on the add to do button should log out the Input text.

time stamp:
17:28

====================

Clear the text input by setting the current value to null.
Add a function to add the new to do to the existing list of to dos via the setTodos function.

```
setTodos(prevTodos => {
    return [...prevTodos, { id: 1, name: 'some thing', isCompleted: false }]
})
```

Using a static id will cause error:

```
Warning: Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
```

Download a randomizer library (note: could we not just use the length of the existing to dos array and increment its length by 1 for the id?). In terminal type:

```
npm i uuid
```

Import the uuid into our app and add it to the setTodos function (note had to reference from the npm docs: https://www.npmjs.com/package/uuid):

```
import { v4 as uuidv4 } from 'uuid';
...
setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), name: name, isCompleted: false }]
})
```

Page should show newly added to dos and not show unique key warning.

time stamp:
19:28

====================

Problem: page/to dos are not persistent, a page reload will reset the to dos. This can be fixed by storing data in local storage.
Every time we add a to do to the list, we can save this side effect, use useEffect react hook.
useEffect takes as its first parameter a function which dictates what we want to do.
Every time something changes we want to call the first function.
To determine when to call this first function pass in array of properties as a second paramenter of useEffect.
This array is a list of dependencies, any time anything in this array changes, the useEffect function is run.
Every time the list of todos changes, save todos to localstorage.
Add setItem requires a key, create a key.
Then pass it a string to store, stringify the todos.

```
import React, { useState, useRef, useEffect } from 'react';
...
const LOCAL_STORAGE_KEY = 'todoApp.todos'
...
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

```

Every time a to do is added, the list of to dos is added to the local storage.
When the page is reloaded the list needs to be restored. Use useEffect but pass in empty array of dependencies.
This will only load once when the component is loaded. Since the array is empty it will never call it again.
On load get the list of to dos and set them if they exist. Make sure to parse the string back to an array to avoid error:

```
TypeError: todos.map is not a function
```

```
// onload
useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
        setTodos(storedTodos);
    }
}, [])

// watcher - when todos is updated
useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])
```

Adding to dos and reloading the page should load the previously added to dos.

time stamp:
22:27

====================

Need to add toggle function for the to dos to check it off and store the change of that specific to do.
Create a function in App component that toggles a to do, which takes in the id of that to do.
In react always create a copy of a state variable.
Then modify it, then use that modified copy to set the new state.

```
function toggleTodo(id) {
    // copy
    const newTodos = [...todos];
    const updatedTodo = newTodos.find(todo => todo.id === id);
    // modify
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
    // set/overwrite to do list
    setTodos(newTodos);
}
```

But `toggleTodo()` can't be used as is as the to do is inside the ToDo component, which is referenced inside the TodoList component, which is referenced inside the App component.
Need to pass the function down to TodoList component:

```
<TodoList todos={todos} toggleTodo={toggleTodo} />
```

Inside TodoList component add/import the `toggleTodo` prop and pass it down to the individual to dos:

```
return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
```

Inside ToDo component import the `toggleTodo` prop.
In the input add an onChange which will handle passing an id to the toggleTodo function.

```
<input type="checkbox" checked={ todo.isCompleted }  onChange={handleTodoClick} />
```

Add the function handler that passed the to do's id to toggleTodo:

```
function handleTodoClick() {
    toggleTodo(todo.id)
}
```

The toggle state for the input should now change and should be be restored on page reload.

time stamp:
25:33

====================

