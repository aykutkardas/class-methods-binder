type BinderFunction = (self: Object) => void;

const classMethodBinder: BinderFunction = self => {
  if (!self) {
    return;
  }

  const proto = Object.getPrototypeOf(self);
  const methods = Object.getOwnPropertyNames(proto);
  methods.shift();

  methods.forEach(method => {
    if (self[method] && typeof self[method] === "function") {
      self[method] = self[method].bind(self);
    }
  });
};

export default classMethodBinder;
