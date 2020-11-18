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









