# Habits

**Habits** is an application created to track activities in order to form real-life habits.

## Table of contents

- [Habits](#habits)
  - [Table of contents](#table-of-contents)
  - [Tech stack](#tech-stack)
  - [Development Tools Setup](#development-tools-setup)
    - [Download and install dependencies](#download-and-install-dependencies)
      - [OSX](#osx)
      - [Ubuntu](#ubuntu)
    - [Enable EditorConfig](#enable-editorconfig)
    - [Enable Prettier](#enable-prettier)
    - [Debugging](#debugging)
  - [Linting](#linting)
  - [Testing](#testing)
    - [Filename Conventions](#filename-conventions)
    - [Running our tests](#running-our-tests)

## Tech stack

- **Version Control**: We use [git][git] as our version control system, and we use [git-flow][git_flow].
- **Package Manager**: We use several javascript packages and we prefer using [Yarn][yarn] over npm to manage our dependencies. Therefore in this project there should only be a `yarn.lock` file, and not a `package-lock.json` file.
- **Development**: We are using [React][react]. This project was bootstrapped with [Create React App][create_react_app]. You can learn more about **Create React App** on [this copy of the project README.md](/docs/create_react_app.md).
- **Linting**: We are using [eslint][eslint] to lint our code. Eslint is a pluggable linting utility for JavaScript to keep our codebase written consistently. We are extending from [Airbnb configuration][airbnb_eslint]. We are also using [stylelint][stylelint], which is a mighty, modern linter that helps us avoid errors and enforce conventions in our styles.
- **Code formatter**: In order to keep our codebase written consistently, and reducing the feedback loop for linting errors we are using [Prettier][prettier] as our code formatter. Prettier is an opinionated code formatter with support for JavaScript, CSS and JSON. With Prettier you can format the code you write automatically to ensure a code style within your project.
- **Testing**: We require to have great code coverage with meaningful tests. As we are using Create React App, and most of our code will be written with JavasSript, we are usign [Jest][jest] as our testing framework. We are also using [React Testing Library][react-testing-library] to help us test the UI components.

## Development Tools Setup

### Download and install dependencies

For a breif explanation of what is being install, please read our [setup documentation](/docs/setup.md).

#### OSX

To install all our dependencies on a OSX, run `scripts/setup.osx.sh`.

#### Ubuntu

To install all our dependencies on Ubuntu, run `scripts/setup.ubuntu.sh`.

It is recommended to run the setup script everytime you pull from the `develop` branch. This way you can always be sure to have all the project dependencies up to date.

### Enable EditorConfig

EditorConfig helps to maintain consistent coding styles for all developers working on the project across various editors and IDEs. We have this configured in our [.editorconfig](/.editorconfig) file. Make sure to [configure your editor or IDE][editorconfig_instructions].

### Enable Prettier

One of our dependencies is [Prettier][prettier]. Prettier is an opinionated code formatter for our codebase. Prettier works best by enabling its format on document save. In order to do this in vscode you need to install this [eslint extension][eslint_vscode_extension], and configure the IDE. We already have this configured in the [.vscode/settings.json](/.vscode/settings.json) file.

### Debugging

We have configured to debugg our app on Chrome. In order to do this you need to install this [Debugger for Chrome][debbuger_for_chrome] extension on your vscode, and configure the IDE. We already have this configured in the [/.vscode/launch.json](/.vscode/launch.json) file. With this you could use some breakpoints and debug the app on the IDE, and Chrome.

## Linting

We are using `eslint`, and `stylelint` to make static analysis to find problematic patterns and make sure all the team adhere to certain style guidelines. We like a lot the [Airbnb guidelines][airbnb_eslint] for Javascript and React.

This is already configured in the [eslintrc.js](/.eslintrc.js) and [stylelintrc.js](/.stylelintrc.js) files.

We have configured `eslint`, and `stylelint` with webpack to make sure that we get all the linting information during the development. However, if you want to lint the project you could use the following commands.

To lint all the `.js` files run the command:

```bash
yarn lint:js
```

This will prompt all the errors and warnings of the code that is not following our coding conventions. Most of the linting problems can be fixed by eslint. To fix those kind of issues run:

```bash
yarn lint:js-fix
```

To lint all the `.scss` files run the command:

```bash
yarn lint:scss
```

This will prompt all the errors and warnings of the code that is not following our coding conventions. Most of the linting problems can be fixed by eslint. To fix those kind of issues run:

```bash
yarn lint:scss-fix
```

To lint with both `eslint`, and `stylelint` run the command:

```bash
yarn lint
```

To lint and fix with both `eslint`, and `stylelint` run the command:

```bash
yarn lint-fix
```

Additionally, there is a script configured to prevent us from commiting files with linting issues. Whenever you try to make a commit, the linting will run and prevent the commit if there is an issue with the code.

## Testing

We are using [jest][jest] to make our unit testing. This is already configured on our [package.json](./package.json) file on the key `jest`.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as window thanks to jsdom, they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in **tests** folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the **tests** folders) can be located at any depth under the `src` top level folder.

However, we should put the test files next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test only needs to `import App from './App'` instead of a long relative path. Collocation also helps find tests more quickly.

### Running our tests

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

For a more detailed explanation of our testing conventions, please read our [testing guidelines](/docs/testing.md).

<!-- Links references -->

[git]: https://git-scm.com/
[git_flow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[yarn]: https://yarnpkg.com/
[react]: https://reactjs.org/
[create_react_app]: https://create-react-app.dev/
[eslint]: https://eslint.org/
[airbnb_eslint]: https://github.com/airbnb/javascript/tree/master/react
[stylelint]: https://stylelint.io/
[prettier]: https://prettier.io/
[jest]: https://jestjs.io/
[react-testing-library]: https://testing-library.com/
[editorconfig_instructions]: https://editorconfig.org/#download
[eslint_vscode_extension]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[debbuger_for_chrome]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
[tdd]: https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2
