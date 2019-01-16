type BinderFunction = (self: Object, methods: string[]) => void;

const classMethodBinder: BinderFunction = (self, methods) => {
  if (!self || !methods || !Array.isArray(methods) || !methods.length) {
    return;
  }

  methods.forEach(method => {
    if (self[method]) {
      self[method] = self[method].bind(self);
    } else {
      const { name = 'anonymous' } = self.constructor;
      console.error(`[Class-Method-Binder]: ${method}(){} method not found in '${name}'.`);
    }
  });
};

export default classMethodBinder;