# Testing

- [Testing](#testing)
  - [Filename Conventions](#filename-conventions)
  - [Running our tests](#running-our-tests)
  - [Testing Components](#testing-components)
  - [Special testing convention](#special-testing-convention)
    - [Benefits of this convention](#benefits-of-this-convention)
    - [How to test that the component is rendering?](#how-to-test-that-the-component-is-rendering)
    - [Disclaimer](#disclaimer)

We are using [jest][jest] to make our unit testing. This is already configured on our [package.json](../package.json) file on the key `jest`.

**Jest** is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While **Jest** provides browser globals such as window thanks to jsdom, they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

## Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in **tests** folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the **tests** folders) can be located at any depth under the src top level folder.

However, we should put the test files next to the code they are testing so that relative imports appear shorter. For instance, if `App.test.js` and `App.js` are in the same folder, the test only needs to `import App from './App'` instead of a long relative path. Collocation also helps find tests more quickly.

## Running our tests

To run all our tests run the command:

```bash
yarn test
```

We are striving to keep the following benchmarks:

- **Statements coverage** &mdash; 75%.
- **Branches coverage** &mdash; 75%.
- **Lines coverage** &mdash; 75%.
- **Functions coverage** &mdash; 75%.

To find out the current coverage of the whole project run the command:

```bash
yarn test:coverage
```

We recommend to develop with a [Test Driven Development][tdd] mindset, therefore, we recommend running the following command while developing:

```bash
yarn test:watch
```

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs.

If you want to debug your tests, you can do it by writing `debugger;` statements in any test and running the following command:

```bash
yarn test:debug
```

This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process.

## Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

We will be using [react-testing-library][react_testing_library_repo] as a library for testing React components in a way that resembles the way the components are used by end users. It is well suited for unit, integration, and end-to-end testing of React components and applications. It works more directly with DOM nodes, and therefore it's recommended to use with jest-dom for improved assertions.

Learn more about the utilities provided by react-testing-library to facilitate testing asynchronous interactions as well as selecting form elements from the [react-testing-library documentation][react_testing_library_intro] and examples.

## Special testing convention

There are certain components that it's only function is to compose other components. Imagine you have a component like this:

```js
import LoginSidebar from "./LoginSidebar";
import LoginMain from "./LoginMain";

const Login = () => (
  <>
    <LoginSidebar />
    <LoginMain />
  </>
);
```

What could you test on this component? There is no functionallity to test, but we still want to test if it is rendering. For that, we should follow the next convention:

> Every component should have a wrapper element, with a `className` set after the component name.

So our component now should look like this:

```js
import LoginSidebar from "./LoginSidebar";
import LoginMain from "./LoginMain";

const Login = () => (
  <div className="login">
    <LoginSidebar />
    <LoginMain />
  </div>
);
```

### Benefits of this convention

- This could help to set any styles that could affect other components only when it is on this particular component.
- We can always test all our components, at least if they render, regardless of it's child components.

### How to test that the component is rendering?

To test that any component is rendering just follow this example:

```js
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Login from "./Login";

afterEach(() => {
  cleanup();
});

test("Renders the Login layout", () => {
  const { container } = render(<Login />);
  const componentContainerElement = container.firstChild;
  expect(componentContainerElement.className).toMatch(/login/);
});
```

### Disclaimer

It's important to mention that the wrapper tag is not defined under this convention. If the component have a particular function, you should use a semantic wrapping tag. If you can't find that function, use a `div` or a `span`.

<!-- Links references -->

[jest]: https://facebook.github.io/react-native/docs/testing
[tdd]: https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2
[react_testing_library_repo]: https://github.com/testing-library/react-testing-library
[react_testing_library_intro]: https://testing-library.com/docs/react-testing-library/intro
