import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/form-steps/FormComplete.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--232e9926.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Button } from "/src/components/ui/button.tsx.js";
import { CheckCircle2 } from "/vendor/.vite-deps-lucide-react.js__v--232e9926.js";
const getProductivityLabel = (value) => {
  const mapping = {
    veryLow: "Very low",
    low: "Low",
    average: "Average",
    high: "High",
    veryHigh: "Very high"
  };
  return mapping[value] || value;
};
const FormComplete = ({ formData, onReset }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 py-4 animate-fade-in text-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-16 w-16 text-green-500" }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-medium mb-6", children: "Thank You!" }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 mb-8 text-left bg-gray-50 p-6 rounded-lg", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-500", children: "Name" }, void 0, false, {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "font-medium", children: formData.name }, void 0, false, {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-500", children: "Email" }, void 0, false, {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "font-medium", children: formData.email }, void 0, false, {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-500", children: "Productivity Level" }, void 0, false, {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "font-medium", children: getProductivityLabel(formData.productivity) }, void 0, false, {
          fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Button, { onClick: onReset, className: "w-full", children: "Start Over" }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};
_c = FormComplete;
export default FormComplete;
var _c;
$RefreshReg$(_c, "FormComplete");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/raushan/Documents/Anchor/client/src/content/form-steps/FormComplete.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
