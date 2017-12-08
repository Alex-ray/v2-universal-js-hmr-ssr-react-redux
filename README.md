# ⚡ (V2) Universal JS - Server Side Rendering, Code Splitting and Hot Module Reloading ⚡

## 💭 What is it?
*Universal JS: -*
JavaScript that can run on both the server and client (or any other JS platform for that matter) !

*Hot Module Reloading: -*
Replaces modules that have been changed in real time while preserving the state.

*Server Side Rendering: -*
Renders Pages on the initial for fast page loads and search engine optimization

*Code Splitting: -*
Split code into bundles so that code is asynchronously loaded by the client.

## ⚙ How?

The Basic setup goes like this...

An express server handles a request, renders the page on the server, then sends
it back to the client. The code is bundled into chunks on build time which are requested
by the client when needed for that route.

When in development mode, the express server handles a request and uses the `webpack.config.development.js`
configuration as middleware to listen for file changes, build, then and push them to the client.

---

This project is an updated version of [this project](https://github.com/Alex-ray/universal-hmr-ssr-react-redux). With the biggest updates being migrations to **React Router 4** and **Hot Module Reloading 3**

The main goal of this project remains the same; A simple and no BS approach to a
Universal JS, Server Side Rendering, Code Splitting and Hot Module Reloading using
the following technologies:

- React
- Redux
- React Router 4
- Webpack 2
- Hot Module Reloader 3
- Babel
- Express
- webpack-dev-middleware
- webpack-hot-middleware
- immutablejs

## 🛠 Setup
First install the dependencies in the root directory of this project run.
`npm install`

## 🤖 Running
For **Development** run `npm run development`

This will start a development server on `localhost:8080` that utilizes hot module
reloading for both React components and Redux reducers.

For **Production** run `npm run build && npm run production`.

This will build all your assets and write them to a `/build` folder in the root directory of this project. The script will then start an express server on `localhost:8080` that will utilize server side rendering and route based code splitting.

![hmr-ssr](https://cloud.githubusercontent.com/assets/2454928/18360529/39573fe2-75b3-11e6-8a06-75bc2664e98d.gif)

## 🗒 Notes

Hot Module Reloading does not work with `System.import`, as such there are two route sources.
- The first one `src/universal/routes/static.js` is for static routes (no code splitting) that is for the development environment to work nicely with [React Hot Loader 3](https://github.com/gaearon/react-hot-loader)
- The second route source `src/universal/routes/async.js` is for asynchronous routes (Code splitting using System.import).
