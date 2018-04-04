[![Node.js version][nodejs-badge]][nodejs]
[![NPM version][npm-badge]][npm]
[![semantic-release][semantic-release-badge]][semantic-release]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![build with travis-ci][travis-badge]][travis]
[![tested with jest][jest-badge]][jest]
[![Coverage Status](https://coveralls.io/repos/github/raynode/nx-logger-loggly/badge.svg?branch=master)](https://coveralls.io/github/raynode/nx-logger-loggly?branch=master)
[![npm version](https://badge.fury.io/js/%40raynode%2Fnx-logger-loggly.svg)](https://badge.fury.io/js/%40raynode%2Fnx-logger-loggly)

# nx-logger-loggly

nx-logger-loggly is a transport for [nx-logger](https://github.com/raynode/nx-logger)

+ [TypeScript][typescript] [2.5][typescript-25] to ES6 transpilation
+ [TSLint][tslint] 5.x
+ [Jest][jest] unit testing and code coverage
+ Type definitions for Node.js v6.x (LTS) and Jest
+ .editorconfig for consistent file format

## Getting Started

Install nx-logger-loggly using npm:

```
npm i @raynode/nx-logger-loggly
```

## Usage

```
import { transport } from 'nx-logger-loggly'
import { create, configure } from 'nx-logger'

configure({ transport })
const logger = create('my-logger')

```

The created logger will send the namespace as tags to loggly and the message will be the content of the log entry.
This might be updated in the future to contain timestamps and more information, but at the current point in time (version 1) it is as simple as it gets.

```
@TODO
logger('Test') // will be send to loggly with tag:my-logger and content 'Test'
```


## Contributing

If you want to help with this project, just leave a bugreport or pull request.
I'll try to come back to you as soon as possible

## License

MIT

[greenkeeper-badge]: https://badges.greenkeeper.io/raynode/nx-logger-loggly.svg
[greenkeeper]: https://greenkeeper.io/
[jest-badge]: https://img.shields.io/badge/tested_with-jest-99424f.svg
[jest]: https://facebook.github.io/jest/
[nodejs-badge]: https://img.shields.io/badge/node->=%208.2.1-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v8.x/docs/api/
[npm-badge]: https://img.shields.io/badge/npm->=%205.4.0-blue.svg
[npm]: https://docs.npmjs.com/
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]: https://github.com/semantic-release/semantic-release
[travis-badge]: https://travis-ci.org/raynode/nx-logger-loggly.svg?branch=master
[travis]: https://travis-ci.org/raynode/nx-logger-loggly
[tslint]: https://palantir.github.io/tslint/
[typescript-25]: https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#typescript-25
[typescript]: https://www.typescriptlang.org/
