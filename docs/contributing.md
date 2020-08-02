# Contributing

Looking to contribute something? **Here's how you can help.**

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Git and Gitflow

Gitflow Workflow is a Git workflow design that was first published and made popular by [Vincent Driessen at nvie][gitflow_description]. The Gitflow Workflow defines a strict branching model designed around the project release. This provides a robust framework for managing larger projects. It assigns very specific roles to different branches and defines how and when they should interact.

We get to leverage the following benefits:

- Pull requests.
- Isolated experiments.
- More efficient collaboration.

Gitflow is really just an abstract idea of a Git workflow. This means it dictates what kind of branches to set up and how to merge them together. For further information read the [Atlassian tutorial on Git Flow](gitflow_tutorial).

We are using [semantic versioning][semver] (SemVer). SemVer is a 3 component system in the format of `x.y.z` where:

- `x` stands for a major version.
- `y` stands for a minor version.
- `z` stands for a patch.

So you have: `Major.Minor.Patch`.

### Downloading the repo and initializing git-flow

1. Clone the repo with `git clone https://github.com/metal-gogo/habits.git`.
2. Initialize **git flow** by running in the root directory: `git flow init -d`. Now you will be on the `develop` branch.
3. Setup the remote reference in the develop branch by running `git branch --set-upstream-to=origin/develop develop`.
4. Pull the latest changes in this branch by running `git pull`.
5. Follow the [instructions to setup][development_tools_setup] our development tools.

### How to create a feature

1. Pull the latest changes from the `develop` branch.
2. Run `git flow feature start <feature_branch>` to start developing your feature.
3. Commit the changes required for your feature. Take into account that we are following this [git commit naming conventions][naming_conventions]. You can make as many commits are you need to finish your feature.
4. When you're done with the development work push your changes to Github and open a [pull request](#pull-requests) to the `develop` branch.
5. Fix pull request comments (when necessary).
6. Now you are ready to merge your changes into our codebase. Merge your changes by running `git flow feature finish <feature_branch>`. This will merge your branch into `develop`.
7. Push your changes into the remote `develop` branch.

### How to make a release

1. Pull the latest changes from the `develop` branch.
2. Run `git flow release start <release_version>` to start your release process. Remember that we are using SemVer. Be careful with the version tag you chose.
3. Push the changes to a staging enviornment and test that everything is behaving as expected. At this point, no new feature will be added to this release. Only bug fixes, documentation generation, and other release-oriented task should go into this branch.
4. Bump the version of the app on the [package.json](/package.json) file to the `<release_version>`.
5. When you're done with the development work push your changes to Github and open a [pull request](#pull-requests) to the `develop` branch.
6. Fix pull request comments (when necessary).
7. Once it's ready to ship, the `release` branch gets merged into `master`, and `develop` by running `git flow release finish <release_version>`. This creates a tag with the `<release_version>`.
8. Push your changes into the remote `master`, and `develop` branch.

### How to create a hotfix

1. Pull the latest changes from the `master` branch. As this is the only branches that should fork from `master`, instead of `develop`.
2. Run `git flow hotfix start <hotfix_tag>` to start developing your hotfix. Remember that we are using SemVer. Be careful with the version tag you chose.
3. Commit the changes required to fix the issues. Take into account that we are following this [git commit naming conventions][naming_conventions]. You can make as many commits are you need to finish your feature.
4. Bump the version of the app on the [package.json][package_json] file to the `<release_version>`.
5. When you're done with the development work push your changes to Github and open a [pull request](#pull-requests) to the `master` branch.
6. Fix pull request comments (when necessary).
7. Once it's ready to ship, the `hotfix` branch gets merged into `master`, and `develop` by running `git flow release finish <hotfix_tag>`
8. Push your changes into the remote `master`, and `develop` branch.

## Using the issue tracker

The [issue tracker][issue_tracker] is the preferred channel for [bug reports](#bug-reports), and [submitting pull requests](#pull-requests).

### Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

1. **Validate and lint your code** &mdash; [lint your app][linting] to ensure your problem isn't caused by a simple error in your own code.
2. **Use the GitHub issue search** &mdash; check if the issue has already been reported.
3. **Check if the issue has been fixed** &mdash; try to reproduce it using the latest `master` or `develop` branch in the repository.
4. **File the bug report** &mdash; Write your bug report in an issue in Github.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. Next are a list of questions that are helpful to responde:

- What is your environment?
- What steps will reproduce the issue?
- What OS and device experience the problem?
- Do other devices show the bug differently?
- What would you expect to be the outcome?

All these details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the OS/device environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

### Pull requests

Code review is a very important part of the software development cycle. Code review is also one of the most difficult and time-consuming part of the software development process, requiring team members to spend time reading, thinking, evaluating, and responding to implementations of new features.

Having a culture of writing good pull requests within a team can make a big difference in productivity. If pull requests are small, frequent, and easy to review and test, they will result in pull requests being opened and merged quickly.

Make it easy for reviewers to understand your changes. Give context to the reviewers by adding a descriptive title, and a complete description of your changes.

## Code guidelines

For the most parts, our linters, and formatters will help you keep our codebase consistent. However, if we develop some specific rules we would like to adhere to, here will be the place to find it.

Run `yarn lint` before committing to ensure your changes follow our coding standards.

<!-- Links references -->

[gitflow_tutorial]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[gitflow_description]: https://nvie.com/posts/a-successful-git-branching-model/
[semver]: https://www.sitepoint.com/semantic-versioning-why-you-should-using/
[development_tools_setup]: https://github.com/metal-gogo/habits#development-tools-setup
[naming_conventions]: https://github.com/metal-gogo/habits/docs/COMMIT_NAMING_CONVENTIONS.md
[package_json]: https://github.com/metal-gogo/habits/package.json
[issue_tracker]: https://github.com/metal-gogo/habits/issues
[linting]: https://github.com/metal-gogo/habits#linting
