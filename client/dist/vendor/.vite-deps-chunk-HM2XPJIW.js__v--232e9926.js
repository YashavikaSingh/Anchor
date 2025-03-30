import {
  require_react_dom
} from "/vendor/.vite-deps-chunk-HE4GKDYE.js__v--232e9926.js";
import {
  Slot
} from "/vendor/.vite-deps-chunk-WT4M42MF.js__v--232e9926.js";
import {
  require_jsx_runtime
} from "/vendor/.vite-deps-chunk-MJNCUEZK.js__v--232e9926.js";
import {
  require_react
} from "/vendor/.vite-deps-chunk-UGC3UZ7L.js__v--232e9926.js";
import {
  __toESM
} from "/vendor/.vite-deps-chunk-G3PMV62Z.js__v--232e9926.js";

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = React.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

export {
  Primitive
};
//# sourceMappingURL=chunk-HM2XPJIW.js.map
