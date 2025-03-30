import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/form-steps/EmailQuestion.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--232e9926.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/vendor/react-refresh.js";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--232e9926.js"; const useState = __vite__cjsImport3_react["useState"];
import { Button } from "/src/components/ui/button.tsx.js";
import { Input } from "/src/components/ui/input.tsx.js";
import { ChevronLeft, ChevronRight } from "/vendor/.vite-deps-lucide-react.js__v--232e9926.js";
import { toast } from "/vendor/.vite-deps-sonner.js__v--232e9926.js";
const EmailQuestion = ({
  value,
  onChange,
  onNext,
  onBack
}) => {
  _s();
  const [focused, setFocused] = useState(false);
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!validateEmail(value)) {
      toast.error("Please enter a valid email");
      return;
    }
    onNext();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 animate-fade-in", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-medium ", children: "Your Email" }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV(
        Input,
        {
          type: "email",
          value,
          onChange: (e) => onChange(e.target.value),
          placeholder: "Enter your email",
          className: `text-lg py-6 px-4 border-2 transition-all ${focused ? "border-black" : "border-gray-200"}`,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          autoFocus: true
        },
        void 0,
        false,
        {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "lg",
            className: "rounded-full w-12 h-12 p-0",
            onClick: onBack,
            children: /* @__PURE__ */ jsxDEV(ChevronLeft, { className: "h-6 w-6" }, void 0, false, {
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
            lineNumber: 57,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            type: "submit",
            size: "lg",
            className: "rounded-full w-12 h-12 p-0",
            children: /* @__PURE__ */ jsxDEV(ChevronRight, { className: "h-6 w-6" }, void 0, false, {
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
            lineNumber: 66,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
};
_s(EmailQuestion, "rwqZf9cBjrH2zIMw/NeLpi+hjZQ=");
_c = EmailQuestion;
export default EmailQuestion;
var _c;
$RefreshReg$(_c, "EmailQuestion");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/raushan/Documents/Anchor/client/src/content/form-steps/EmailQuestion.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
