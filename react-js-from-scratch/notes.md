tutorial name:
react js from scratch (playlist)

source:
https://www.youtube.com/playlist?list=PL7pEw9n3GkoVAqCMVTz2mKthyWr-svpQJ

video 1:
https://www.youtube.com/watch?v=bUTsVY6VUQA&list=PL7pEw9n3GkoVAqCMVTz2mKthyWr-svpQJ&index=1

# React JS Introduction and Setup for Absolute Beginners

run:
npm install -g create-react-app

This globally installs the create react app command on your computer.

run:
create-react-app my-app

This creates a new React app in the my-app folder.
cd into the folder and run it via `npm start`.

Take a look at the `package.json`, that's how the app is being constructed.
dependencies are the packages or modules that installed via npm.
scripts are short cuts to executable scripts/functions, like an alias.

Go to the public index.html, it contains:

```
<div id="root"></div>
```

Go to the src index.js file.
It's a small file that imports from our dependencies.
Also imports the main App component.
Will render App component at the root element via `ReactDOM.render()`.

Go to App.js file.
This is what is rendered on the website with the spinning logo.
Any changes should auto reload the page (reload manually once).

Class App component gets exported.
Inside the class we render JSX inside the render method.
className in JSX will be compiles to class in html.

For every component there should be a test.
App.js has a App.test.js test file.
Run `npm test` to run the tests which should pass.

video 2:
https://www.youtube.com/watch?v=yc8fg7gWbBA&list=PL7pEw9n3GkoVAqCMVTz2mKthyWr-svpQJ&index=2

# JSX intro | React tutorial series

Playground tool for html to react conversion:
https://babeljs.io/repl

class and for are reserved words in XML so use className and htmlFor in JSX instead.

```
render() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}
```

This can be refactored to:

```
function SayHello() {
  return (
    <h1>hello</h1>
  )
}

render() {
  return (
    <div>
      <SayHello></SayHello>
    </div>
  )
}
```

video 3:
https://www.youtube.com/watch?v=uGgPINlKqBs&list=PL7pEw9n3GkoVAqCMVTz2mKthyWr-svpQJ&index=3

# React Class vs Functional Component | ReactJS tutorial Series Part 3

Class components are written by extending the React component object.
Functional ES6 components, easier to write than class components.

Create new react project and start it up:

```
create-react-app react-class-vs-function-component
cd react-class-vs-function-component
npm start
```

Remove boilerplate from App.js.
Create two components: one is a class component the other is an ES6 functional component.
In src folder create new folder called users, and create a new file called Users.js inside of it.
Users.js will be the class based component.
Import React and Component, create the class which extends Component, and export it.

```
import React, { Component } from 'react';

class Users extends Component {

}

export default Users;
```

Inside the class add the render method.

```
render() {
  return <div>Users</div>
}
```

To include the Users component in App component, import it.

```
import { Users } from "./users/Users";
```

To use it just embed it in the JSX as `<Users/>`.
Components always start with a capital letter to differentiate them from HTML.
Create a User functional subcomponent inside the Users folder called User.js.
Not going to extend as it is pure function but still need to import React.
Name of the function will be User but first define it as a const so it is mutatable (but not replaceable), as an arrow function.
Unlike class component, functional components do not need to have a render function, but rather can simply return the JSX element.
Export User so it is importable.

```
import React from "react";

const User = () => {
  return (
    <div>
      user
    </div>
  )
}

export default User;
```

The User component can now be reused. Use it inside Users.
First import the User component then add it to the render method a few times.
The result is a static output of the User component.

To add more functionality, add the name to each User component.
A function component has access to props.

Add a header passed from the Apps component to the Users component.
Add an age for each user.
What if the age was optional, remove the age for a user.
Add an invalid user, which means they have no name.

video 4:
https://www.youtube.com/watch?v=DJtI3Pogd88&list=PL7pEw9n3GkoVAqCMVTz2mKthyWr-svpQJ&index=4

# React JS State and Props | setState with Virtual DOM | React.JS tutorial Series Part 4




