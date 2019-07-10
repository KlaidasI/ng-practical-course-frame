# Nortal Todo - practical course for beginners in Angular, TypeScript and rxjs

**e2e tests are not within the scope of this course** and failing 'is created' unit tests are expected at the beginning.

## Git workflow

* (after initial clone) `git remote set-url origin {your-own-repo-address}` to link to your own repository
* run `npm install` to install dependencies after cloning/forking
* `git checkout -b {branch-name}` to create a new branch
* `git add -A` will help you to add files to staging (to be attached to the next commit you make). Instead of -A you can add files individually by using `git status` to see the list of files that have changed and getting name from there
* `git commit -m "{message}"` to create a new commit
* `git push` to get your stuff to the cloud

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
