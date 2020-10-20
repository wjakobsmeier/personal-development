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






