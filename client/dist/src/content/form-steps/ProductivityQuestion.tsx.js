import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/form-steps/ProductivityQuestion.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--232e9926.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Button } from "/src/components/ui/button.tsx.js";
import { RadioGroup, RadioGroupItem } from "/src/components/ui/radio-group.tsx.js";
import { Label } from "/src/components/ui/label.tsx.js";
import { ChevronLeft, ChevronRight } from "/vendor/.vite-deps-lucide-react.js__v--232e9926.js";
import { toast } from "/vendor/.vite-deps-sonner.js__v--232e9926.js";
const ProductivityQuestion = ({
  value,
  onChange,
  onNext,
  onBack
}) => {
  const productivityLevels = [
    { value: "veryLow", label: "Very low" },
    { value: "low", label: "Low" },
    { value: "average", label: "Average" },
    { value: "high", label: "High" },
    { value: "veryHigh", label: "Very high" }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      toast.error("Please select your productivity level");
      return;
    }
    onNext();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 py-4 animate-fade-in", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-medium mb-6", children: "How productive do you think you are?" }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV(
        RadioGroup,
        {
          value,
          onValueChange: onChange,
          className: "space-y-3",
          children: productivityLevels.map(
            (level) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: `flex items-center border-2 rounded-md p-4 transition-all ${value === level.value ? "border-black bg-gray-50" : "border-gray-200"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(
                    RadioGroupItem,
                    {
                      value: level.value,
                      id: level.value,
                      className: "mr-3"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
                      lineNumber: 59,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    Label,
                    {
                      htmlFor: level.value,
                      className: "flex-grow cursor-pointer",
                      children: level.label
                    },
                    void 0,
                    false,
                    {
                      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
                      lineNumber: 64,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              level.value,
              true,
              {
                fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
                lineNumber: 51,
                columnNumber: 13
              },
              this
            )
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
          lineNumber: 45,
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
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
            lineNumber: 74,
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
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
            lineNumber: 83,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};
_c = ProductivityQuestion;
export default ProductivityQuestion;
var _c;
$RefreshReg$(_c, "ProductivityQuestion");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/raushan/Documents/Anchor/client/src/content/form-steps/ProductivityQuestion.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
