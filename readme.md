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

  handleClick = () => {};

  handleChange = () => {};
}
```

# Usage

"class-methods-binder" is an easy and standart way to bind the method.

```js
import binder from "class-methods-binder";

class Example {
  constructor() {
    binder(this);
  }

  handleClick() {}

  handleChange() {}
}
```

## Advanced Usage

Only bind internal methods.

```js
import binder from "class-methods-binder";

class Example {
  constructor() {
    binder(this, { internal: ["handleClick"] });
  }

  handleClick() {}

  handleChange() {}
}
```

Bind only those that are not external methods.

```js
import binder from "class-methods-binder";

class Example {
  constructor() {
    binder(this, { external: ["handleClick"] });
  }

  handleClick() {}

  handleChange() {}
}
```
