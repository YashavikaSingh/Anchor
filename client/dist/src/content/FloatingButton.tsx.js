import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/FloatingButton.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--232e9926.js"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { X } from "/vendor/.vite-deps-lucide-react.js__v--232e9926.js";
import __vite__cjsImport4_react from "/vendor/.vite-deps-react.js__v--232e9926.js"; const useState = __vite__cjsImport4_react["useState"];
import { Button } from "/src/components/ui/button.tsx.js";
import EmailQuestion from "/src/content/form-steps/EmailQuestion.tsx.js";
import NameQuestion from "/src/content/form-steps/NameQuestion.tsx.js";
import ProductivityQuestion from "/src/content/form-steps/ProductivityQuestion.tsx.js";
import FormComplete from "/src/content/form-steps/FormComplete.tsx.js";
const FloatingButton = () => {
  _s();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [productivity, setProductivity] = useState("");
  const resetForm = () => {
    setName("");
    setEmail("");
    setProductivity("");
    setStep(0);
    setOpenDrawer(false);
  };
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed z-[9999] bottom-4 right-0", children: /* @__PURE__ */ jsxDEV(Button, { onClick: () => setOpenDrawer(true), children: "Anchor" }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    openDrawer && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "fixed z-[9999] \n         bg-background\n         w-full sm:w-[480px] h-full right-0 top-0 shadow-lg border-l rounded-l-lg flex flex-col px-6 pt-12 pb-6 animate-slide-in",
        children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl font-bold pb-2", children: "Anchor AI" }, void 0, false, {
            fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("hr", { className: "mb-6" }, void 0, false, {
            fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "absolute  top-4 right-4",
              onClick: () => setOpenDrawer(false),
              children: /* @__PURE__ */ jsxDEV(X, { className: "h-5 w-5" }, void 0, false, {
                fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
              lineNumber: 46,
              columnNumber: 11
            },
            this
          ),
          step === 0 && /* @__PURE__ */ jsxDEV(NameQuestion, { value: name, onChange: setName, onNext: nextStep }, void 0, false, {
            fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          step === 1 && /* @__PURE__ */ jsxDEV(
            EmailQuestion,
            {
              value: email,
              onChange: setEmail,
              onNext: nextStep,
              onBack: prevStep
            },
            void 0,
            false,
            {
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
              lineNumber: 61,
              columnNumber: 9
            },
            this
          ),
          step === 2 && /* @__PURE__ */ jsxDEV(
            ProductivityQuestion,
            {
              value: productivity,
              onChange: setProductivity,
              onNext: nextStep,
              onBack: prevStep
            },
            void 0,
            false,
            {
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
              lineNumber: 69,
              columnNumber: 9
            },
            this
          ),
          step === 3 && /* @__PURE__ */ jsxDEV(
            FormComplete,
            {
              formData: { name, email, productivity },
              onReset: resetForm
            },
            void 0,
            false,
            {
              fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
              lineNumber: 77,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
        lineNumber: 35,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
};
_s(FloatingButton, "UujxFwfhtCNVS3BPUQrCFLcpAgQ=");
_c = FloatingButton;
export default FloatingButton;
var _c;
$RefreshReg$(_c, "FloatingButton");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/raushan/Documents/Anchor/client/src/content/FloatingButton.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
