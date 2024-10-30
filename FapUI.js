var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// react:react
var require_react = __commonJS({
  "react:react"(exports, module) {
    module.exports = React;
  }
});

// src/lib/FapUI/index.ts
var import_react = __toESM(require_react());
function useFap(state) {
  const fap = {
    state: new Proxy(state, {
      set(target, p, newValue) {
        if (fap.render && p != "render") fap.render();
        return Reflect.set(target, p, newValue);
      }
    }),
    bind: /* @__PURE__ */ __name(() => (fap.render = (0, import_react.useReducer)((_) => ({}), {})[1], fap.state), "bind")
  };
  return fap;
}
__name(useFap, "useFap");
function isEventHandler(p) {
  return /^on[A-Z]/.test(p);
}
__name(isEventHandler, "isEventHandler");
function isModifierProp(p) {
  return p == "Content" || p == "Style";
}
__name(isModifierProp, "isModifierProp");
var recursivePrepareContent = /* @__PURE__ */ __name((content) => {
  if (typeof content == "function") {
    return import_react.default.createElement(content);
  }
  if (typeof content == "object" && content instanceof Array) {
    return content.map(recursivePrepareContent);
  }
  return content;
}, "recursivePrepareContent");
var FapComponents = new Proxy({}, {
  get(_, p) {
    if (typeof p == "symbol") return void 0;
    if (!/^[A-Z]/.test(p)) return void 0;
    if (p == "Fragment")
      return (content) => import_react.default.createElement(
        import_react.default.Fragment,
        {},
        recursivePrepareContent(content)
      );
    if (p == "RawElement") return (child) => import_react.default.createElement(
      "span",
      { ref: /* @__PURE__ */ __name((el) => el?.parentElement?.replaceChild(child, el), "ref") }
    );
    return (content) => {
      const { state, ...fap } = useFap({
        events: {},
        attributes: {},
        content,
        style: {}
      });
      const Component = /* @__PURE__ */ __name(({ _ref }) => {
        const {
          events,
          attributes,
          content: content2,
          style
        } = fap.bind();
        return import_react.default.createElement(
          p.toLocaleLowerCase(),
          { ...events, ...attributes, style, ref: _ref },
          recursivePrepareContent(content2)
        );
      }, "Component");
      return new Proxy(
        import_react.default.createElement(Component),
        {
          get(target, p2, receiver) {
            if (typeof p2 == "symbol") {
              return Reflect.get(target, p2);
            }
            if (isEventHandler(p2)) {
              return (cb) => (state["events"][p2] = cb.bind(void 0, receiver), receiver);
            }
            if (isModifierProp(p2)) {
              const modifier = p2.toLocaleLowerCase();
              return (value) => (state[modifier] = value, receiver);
            }
            if (p2.startsWith("Data") || p2.startsWith("Aria")) {
              const attr = p2.replace(/(?<=.)[A-Z]/g, (s) => `-${s.toLocaleLowerCase()}`).toLocaleLowerCase();
              return (value) => (state["attributes"][attr] = value, receiver);
            }
            if (/^[A-Z]/.test(p2)) {
              const attribute = p2.toLocaleLowerCase();
              return (value) => (state["attributes"][attribute] = value, receiver);
            }
            return Reflect.get(target, p2);
          }
        }
      );
    };
  }
});
function createBinding(component, ...args) {
  const { state, bind } = useFap(args);
  const Wrapper = /* @__PURE__ */ __name(() => component(...bind()), "Wrapper");
  const binding = args.map((_, i) => [
    () => {
      return state[i];
    },
    (val) => {
      state[i] = val;
    }
  ]);
  return [import_react.default.createElement(Wrapper), ...binding];
}
__name(createBinding, "createBinding");
export {
  FapComponents,
  createBinding
};