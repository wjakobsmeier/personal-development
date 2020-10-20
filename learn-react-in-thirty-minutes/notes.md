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

time stamp:
5:22

====================



