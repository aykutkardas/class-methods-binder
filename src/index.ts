interface OptionsInterface {
  internal: string[];
  external: string[];
}

type BinderFunction = (self: Object, options?: OptionsInterface) => void;

const classMethodBinder: BinderFunction = (self, options) => {
  if (!self) {
    return;
  }

  const proto = Object.getPrototypeOf(self);
  const methods = Object.getOwnPropertyNames(proto);
  methods.shift();

  let internal: string[] = [];
  let external: string[] = [];

  if (
    options &&
    toString.call(options) === "[object Object]" &&
    (options.internal || options.external)
  ) {
    if (Array.isArray(options.internal)) {
      ({ internal } = options);
    }
    if (Array.isArray(options.external)) {
      ({ external } = options);
    }
  }

  if (internal.length) {
    internal.forEach(method => {
      const checkMethod = self[method] && typeof self[method] === "function";
      if (checkMethod) {
        self[method] = self[method].bind(self);
      }
    });

    return;
  }

  if (external.length) {
    methods
      .filter(method => !external.includes(method))
      .forEach(method => {
        const checkMethod = self[method] && typeof self[method] === "function";
        if (checkMethod) {
          self[method] = self[method].bind(self);
        }
      });

    return;
  }

  methods.forEach(method => {
    const checkMethod = self[method] && typeof self[method] === "function";
    if (checkMethod) {
      self[method] = self[method].bind(self);
    }
  });
};

export default classMethodBinder;
