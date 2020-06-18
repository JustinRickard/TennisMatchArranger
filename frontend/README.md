# Tennis Arranger

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

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

## Docker containerization

### Building

Build dev: `docker build --build-arg configuration=dev -t tennis-arranger-dev:<tag> .`

E.g: `docker build --build-arg configuration=dev -t tennis-arranger-dev:latest .`

Build production: `docker build --build-arg configuration=production -t tennis-arranger-prod:<tag> .`

E.g: `docker build --build-arg configuration=production -t tennis-arranger-prod:0.0.1 .`

### Running

Run docker image: `docker run -p <port>:80 tennis-arranger-<env>:<tag>`

E.g: `docker run -p 8080:80 tennis-arranger-dev:latest`

### Publishing to GitHub

Create an Access Token in GitHub

Log in to GitHub (windows GitBash): `winpty docker login https://docker.pkg.github.com -u <username> -p <access token>`

Tag an image previously built: `docker tag <image ID> <image URL>`

E.g: `docker tag e67469bb74b8  docker.pkg.github.com/justinrickard/tennismatcharranger/tennis-arranger-frontend-dev:latest`

Push: `docker push <image URL>`
E.g:`docker push docker.pkg.github.com/justinrickard/tennismatcharranger/tennis-arranger-frontend-dev:latest`