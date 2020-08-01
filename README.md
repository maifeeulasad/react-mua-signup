# react-mua-signup

> Just another Signup template for React.js

[![NPM](https://img.shields.io/npm/v/react-mua-signup.svg)](https://www.npmjs.com/package/react-mua-signup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mua-signup
```

## Usage

```jsx
import React, { Component } from 'react'


import Signup from 'react-mua-signup'
import 'react-mua-signup/dist/index.css'

ReactDOM.render(<Signup onSignup={(email, p) => {
  console.debug(email)
  console.debug(p)
}}/>, document.getElementById('root'))

```
## Sample :
 - https://maifeeulasad.github.io/react-mua-signup/
 - https://codesandbox.io/s/react-mua-signup-sample-3vlqs?file=/src/index.js
 
![react-mua-signup](https://github.com/maifeeulasad/react-mua-signup/blob/gh-pages/Screenshot.png)

## License

MIT © [maifeeulasad](https://github.com/maifeeulasad)
