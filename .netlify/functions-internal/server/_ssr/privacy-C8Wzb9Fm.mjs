import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-C8Wzb9Fm.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-slate-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 sm:px-6 h-16 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-lg bg-primary grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "h-4 w-4 text-white",
							strokeWidth: 2.75
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-slate-900",
						children: "Joblens"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm text-slate-600 hover:text-slate-900",
					children: "← Home"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 py-16 prose prose-slate",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-bold text-slate-900 tracking-tight",
					children: "Privacy Policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500 mt-2",
					children: "Last updated: January 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-slate-700 leading-relaxed",
					children: "This page is maintained by the Joblens team to answer common privacy questions about the Joblens Chrome extension. It describes the data we collect, why we collect it, and how we handle it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 text-xl font-semibold text-slate-900",
					children: "What we collect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-slate-700",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The text of job postings you actively choose to scan by clicking \"Scan Job\"." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The resume content you upload to personalize your results." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Basic usage events (e.g. scans completed) so we can improve the product." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 text-xl font-semibold text-slate-900",
					children: "How we use it"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-slate-700 leading-relaxed",
					children: "Job text and resume content are sent to our secure backend for AI analysis. Third-party AI provider API keys never leave our servers. We do not sell your data or share it with advertisers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 text-xl font-semibold text-slate-900",
					children: "Retention"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-slate-700 leading-relaxed",
					children: "You can delete your uploaded resume from the extension at any time. Job scan history is retained only to support your own scan history view."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 text-xl font-semibold text-slate-900",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-slate-700 leading-relaxed",
					children: [
						"Questions? Email",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@joblens.app",
							className: "text-primary underline",
							children: "hello@joblens.app"
						}),
						"."
					]
				})
			]
		})]
	});
}
//#endregion
export { PrivacyPage as component };
