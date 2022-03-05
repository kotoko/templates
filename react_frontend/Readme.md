# react_frontend

This is skeleton/example for creating new frontend using [react.js](https://reactjs.org/). It contains:

* [create-react-app](https://create-react-app.dev/) as base
* [react-router](https://reactrouterdotcom.fly.dev/) for navigating between pages
* [redux](https://redux.js.org/) for global state
* example of how to implement JSON+HTTP request to backend
* functions `string2hex` and `hex2string` for escaping problematic characters
* [@react-css/flex](https://github.com/bikk-uk/react-css-flex) for convenient CSS Flexbox usage
* font [Public Sans](https://github.com/uswds/public-sans)

It is also my cheatsheet for react.js.

## Basic usage

### 1. Prepare

Download dependencies:

```
cd react_frontend/
yarn
```

### 2. Develop

Run website in development mode:

```
yarn dev
```

Run website in development mode and treat every warning as error:

```
yarn devStrict
```

### 3. Deploy

Build optimized version for production:

```
yarn build
```
