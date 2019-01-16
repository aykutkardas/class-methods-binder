# Class-Methods-Binder
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

### Install

```
npm install class-methods-binder
```

The standard way to bind the method.

```js
class Example {
  consturctor() {
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {}

  handleChange() {}
}
```

Non-standard way to bind the method.
```js
class Example {
  consturctor() {}

  handleClick = () => {}

  handleChange = () => {}
}
```


# Usage
"class-methods-binder" is an easy and standart way to bind the method.
```js
import binder from 'class-methods-binder';

class Example {
  constructor() {
    binder(this, ["handleClick", "handleChange"]);
  }

  handleClick() {}

  handleChange() {}
}
```

If you remove a method after bind, it gives an error.
```js
import binder from 'class-methods-binder';

class Example {
  constructor() {
    binder(this, ["handleClick", "handleChange", "handleKeyDown"]);
  }

  handleClick() {}

  handleChange() {}

  // handleKeyDown() {}
}

// ↓ Console ↓
// [Class-Method-Binder]: handleKeyDown(){} method not found in 'Example'.
```