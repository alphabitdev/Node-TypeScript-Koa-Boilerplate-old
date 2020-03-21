<div align="center">
<h1>Node.js TypeScript Koa Boilerplate</h1>
</div>

Boilerplate for Node.js development with VSCode, TypeScript, Koa, Router, Helmet, Cors, Bodyparser, RequestId, ESLint, Prettier, Airbnb styleguide, Jest, CodeCov, and Circle CI

[<img alt="CircleCI" src="https://circleci.com/gh/alphabitdev/Node-TypeScript-Koa-Boilerplate.svg?style=shield">](https://circleci.com/gh/alphabitdev/Node-TypeScript-Koa-Boilerplate)

[<img alt="Coverage Status" src="https://codecov.io/gh/alphabitdev/Node-TypeScript-Koa-Boilerplate/branch/master/graph/badge.svg">](https://codecov.io/gh/alphabitdev/Node-TypeScript-Koa-Boilerplate)

[<img alt="npm" src="https://img.shields.io/david/alphabitdev/Node-TypeScript-Koa-Boilerplate.svg?style=flat-square">](https://david-dm.org/alphabitdev/Node-TypeScript-Koa-Boilerplate)

[<img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103">](https://opensource.org/licenses/mit-license.php)

[<img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103">](https://github.com/ellerbrock/open-source-badge/)



This boilerplate include the following features:

- Linting with [ESLint](https://eslint.org/).
- Formatting with [Prettier](https://prettier.io/) and [Airbnb styleguide](https://github.com/airbnb/javascript).
- Easy development with [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme), [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and [nodemon](https://nodemon.io/).
- Continuous integration with [CircleCi](https://circleci.com/)
- Code coverage with [CodeCov](https://codecov.io/)
- Unit Test and Integration Test along with Test Coverage using [Jest](https://facebook.github.io/jest/) testing framework with [ts-jes](https://github.com/kulshekhar/ts-jest).



# Getting Started
## install
```zsh
git clone https://github.com/alphabitdev/Node-TypeScript-Koa-Boilerplate <project-name>
cd <project-name>
rm -rf .git && git init     # remove git and initialize new git
npm i                       # install dependencies
code -n .                   # open in VS Code
```
## Commands
> Run

```zsh
npm run build       # build dist
npm run serve       # serve dist
npm run watch       # watch tsc and nodemon
```
### VS Code

Tip: to use the 'code' command in cli install it from VSCode:

`Open Command Palette (F1 or ⇧+⌘+P on Mac) `

`Shell Command: Install 'code' command in PATH`
## Test

```zsh
# Test
npm run test                           # Run all test
npm run test:unit                      # Run only unit test
npm run test:integration               # Run only integration test
# Test (Watch Mode for development)
npm run test:watch                     # Run all test with watch mode
npm run test:watch:unit                # Run only unit test with watch mode
npm run test:watch:integration         # Run only integration test with watch mode
# Test Coverage
npm run test:coverage                  # Calculate the coverage of all test
npm run test:coverage:unit             # Calculate the coverage of unit test
npm run test:coverage:integration      # Calculate the coverage of integration test
# Test consistent coding style (Lint)
npm run lint                           # Lint all sourcecode
npm run lint:app                       # Lint app sourcecode
npm run lint:test                      # Lint test sourcecode
```


## Links, credits & inspiration

- [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript that scales.
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Airbnb](https://github.com/airbnb/javascript) - style guide
- [eslint-config-airbnb-typescript-prettier](https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier#readme) - Airbnb's ESLint config with TypeScript and Prettier support
- [nodemon](https://nodemon.io/) - reload, automatically.
- [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme) - Run multiple commands concurrently
- [Jest](https://facebook.github.io/jest/) - Unit & Integration Test + Test Coverage
- [ts-jest](https://github.com/kulshekhar/ts-jest) - TypeScript preprocessor with sourcemap support for Jest
- [rimraf](https://github.com/isaacs/rimraf#readme) - The UNIX command rm -rf for node.
- [TypeScript-Node-Starter]( https://github.com/Microsoft/TypeScript-Node-Starter) - A starter template for TypeScript and Node with a detailed README describing how to use the two together.
- [Koa REST API Boilerplate](https://github.com/posquit0/koa-rest-api-boilerplate) - Boilerplate for Node.js Koa RESTful API application with Docker, Swagger, Jest, CodeCov, and Circle CI
- [node-typescript-koa-rest](https://github.com/javieraviles/node-typescript-koa-rest) - REST API boilerplate using NodeJS and Koa2, typescript. Logging and JWT as middlewares. TypeORM with class-validator, SQL CRUD. Docker included. Swagger docs, actions CI and valuable README

- [CodeCov](https://codecov.io/)

- [CircleCi](https://circleci.com/)

