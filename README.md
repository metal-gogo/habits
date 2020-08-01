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

## Tech stack

- **Version Control**: We use [git][git] as our version control system, and we use [git-flow][git_flow].
- **Package Manager**: We use several javascript packages and we prefer using [Yarn][yarn] over npm to manage our dependencies. Therefore in this project there should only be a `yarn.lock` file, and not a `package-lock.json` file.
- **Development**: We are using [React][react]. This project was bootstrapped with [Create React App][create_react_app]. You can learn more about **Create React App** on [this copy of the project README.md](/docs/create_react_app.md).


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

<!-- Links references -->

[git]: https://git-scm.com/
[git_flow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[yarn]: https://yarnpkg.com/
[react]: https://reactjs.org/
[create_react_app]: https://create-react-app.dev/
[editorconfig_instructions]: https://editorconfig.org/#download