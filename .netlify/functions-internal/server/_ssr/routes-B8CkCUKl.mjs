import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, S as ChevronDown, T as ArrowRight, _ as CircleX, a as Sparkles, b as Chromium, c as Rocket, d as MessageSquareQuote, f as Menu, g as Copy, h as FilePen, i as Target, l as Plus, m as FileText, n as X, o as Share2, p as Mail, r as User, s as Search, t as Zap, u as MousePointerClick, v as CircleQuestionMark, w as Bookmark, x as ChevronUp, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as useMotionValue, i as useTransform, n as useReducedMotion, r as useSpring, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8CkCUKl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#how",
		label: "How it works"
	},
	{
		href: "#sites",
		label: "Supported sites"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-lg bg-white/75 border-b border-slate-200/60" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-lg bg-primary grid place-items-center shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "h-4 w-4 text-white",
							strokeWidth: 2.75
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-bold tracking-tight text-slate-900",
						children: "Joblens"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-medium px-4 py-2 transition-all shadow-lift hover:scale-[1.02]",
						children: "Add to Chrome"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						className: "md:hidden p-2 text-slate-700",
						"aria-label": "Menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-slate-200 bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-4 flex flex-col gap-3",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "text-sm font-medium text-slate-700 py-1",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "sm:hidden mt-2 rounded-lg bg-primary text-white text-sm font-medium px-4 py-2.5 text-center",
					children: "Add to Chrome"
				})]
			})
		})]
	});
}
function ExtensionPanel({ score = 75 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-[400px] rounded-2xl bg-white shadow-panel ring-1 ring-slate-200 overflow-hidden flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-3 border-b border-slate-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-6 w-6 rounded-md bg-primary/10 grid place-items-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "h-3.5 w-3.5 text-primary",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-slate-900 truncate",
						children: "Joblens"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-[11px] font-medium text-slate-600 border border-slate-200 rounded-md px-2.5 py-1 hover:bg-slate-50",
						children: "Rescan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-slate-400 hover:text-slate-600",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs font-semibold text-primary bg-blue-50 rounded-md py-2",
					children: "Scan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs font-medium text-slate-500 rounded-md py-2 hover:text-slate-700",
					children: "Profile"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-emerald-50/70 ring-1 ring-emerald-100 p-3 flex gap-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: { duration: .4 },
						className: "text-3xl font-bold text-emerald-700 tabular-nums leading-none pt-0.5",
						children: score
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-slate-900",
							children: "Resume fit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-600 leading-relaxed mt-0.5",
							children: "The candidate has a solid skill set and relevant experience but falls short in years of experience and specific health product exposure."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 pt-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl ring-1 ring-slate-200 p-3 flex gap-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-lg bg-primary/10 grid place-items-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "h-4 w-4 text-primary",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold text-slate-900 leading-tight",
								children: "Full Stack Software Engineer, Health AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-slate-500 mt-0.5",
								children: "OpenAI · San Francisco, California, United States"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-medium text-primary mt-1 hover:underline cursor-pointer",
								children: "Personalized to your profile"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 pt-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl ring-1 ring-slate-200 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-slate-900",
							children: "Role Requirements"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3.5 w-3.5 text-slate-400" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "px-4 pb-3 pt-0 space-y-1",
						children: [
							"5+ years experience",
							"Full stack system design",
							"End-to-end feature development",
							"Data pipelines for HIPAA compliance",
							"Debugging and optimization",
							"Collaboration with cross-functional teams",
							"Ownership of ambiguous problems"
						].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
							initial: {
								opacity: 0,
								x: -6
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: .15 + i * .05,
								duration: .25
							},
							className: "text-[11px] text-slate-700 list-disc list-outside ml-3 leading-relaxed",
							children: r
						}, r))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 pt-2 pb-3 space-y-2",
				children: [
					{ label: "Technical Skills" },
					{ label: "Why This Role" },
					{ label: "Why This Company" }
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl ring-1 ring-slate-200 flex items-center justify-between px-3 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-slate-900",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 text-slate-400" })]
				}, s.label))
			})
		]
	});
}
var roles = [
	"Software Engineer at Stripe",
	"Product Manager at Figma",
	"Designer at Linear",
	"Data Scientist at Airbnb"
];
function Hero() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-200/20 blur-3xl" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), "Free Chrome extension · v1.0"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .55,
						delay: .05
					},
					className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]",
					children: [
						"Interview prep,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent",
							children: "built into every job posting"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .55,
						delay: .15
					},
					className: "mt-5 text-lg text-slate-600 max-w-xl leading-relaxed",
					children: "Scan any role on LinkedIn, Greenhouse, and more. Get fit scores, talking points, and outreach drafts — personalized to your resume."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .55,
						delay: .25
					},
					className: "mt-8 flex flex-col sm:flex-row flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium px-5 py-3 shadow-lift transition-all hover:scale-[1.02] animate-soft-pulse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chromium, { className: "h-5 w-5" }), "Add to Chrome — It's Free"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#demo",
						className: "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 text-slate-900 font-medium px-5 py-3 transition-colors",
						children: ["See how it works", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .5 },
					className: "mt-6 text-sm text-slate-500 flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Free · No account required · Works instantly" })
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 24
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .7,
					delay: .2
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-white shadow-panel ring-1 ring-slate-200 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1.5 shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-3 flex-1 min-w-0 h-6 rounded-md bg-white border border-slate-200 text-[11px] text-slate-500 px-2 flex items-center gap-1.5 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-slate-400 hidden xs:inline",
								children: "linkedin.com/jobs/"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-slate-700 truncate",
								children: "senior-engineer-acme"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 sm:pr-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center font-bold text-sm shrink-0",
								children: "A"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-base font-semibold text-slate-900 truncate",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											initial: {
												opacity: 0,
												y: 6
											},
											animate: {
												opacity: 1,
												y: 0
											},
											transition: { duration: .35 },
											className: "inline-block",
											children: roles[idx]
										}, idx)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-slate-500 mt-0.5",
										children: "Remote · Full-time · Posted 2 days ago"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium bg-blue-50 text-primary rounded-md px-2 py-0.5",
												children: "Easy Apply"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] text-slate-500 inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3 w-3" }), " Save"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] text-slate-500 inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3 w-3" }), " Share"]
											})
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-slate-100 w-11/12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-slate-100 w-10/12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-slate-100 w-8/12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-slate-100 w-9/12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-slate-100 w-7/12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-slate-100 w-11/12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-slate-100 w-9/12" })
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .55,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-6 mx-auto max-w-[320px] sm:max-w-[340px] md:mt-0 md:mx-0 md:max-w-none md:absolute md:-right-2 md:top-2 md:w-[260px] lg:-right-6 xl:-right-10 lg:top-4 lg:w-[300px] md:animate-float-panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtensionPanel, {})
				})]
			})]
		})]
	});
}
var sites = [
	"LinkedIn",
	"Greenhouse",
	"Lever",
	"Workday",
	"Ashby",
	"Indeed",
	"Notion"
];
function Marquee() {
	const items = [...sites, ...sites];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sites",
		className: "py-16 border-y border-slate-200/70 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm font-medium text-slate-500 mb-8",
				children: "Works on the sites you already use"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-16 animate-marquee w-max",
					children: items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-semibold text-slate-400 hover:text-primary transition-colors whitespace-nowrap tracking-tight",
						children: s
					}, i))
				})
			})]
		})
	});
}
function Reveal({ children, delay = 0, y = 20, className }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: reduce ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-10% 0px"
		},
		transition: {
			duration: .5,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
var steps = [
	{
		icon: MousePointerClick,
		title: "Browse a job posting",
		desc: "Open any role on LinkedIn, Greenhouse, Lever, and more."
	},
	{
		icon: Sparkles,
		title: "Click Scan Job",
		desc: "Joblens reads the posting and analyzes it with AI."
	},
	{
		icon: Rocket,
		title: "Get interview-ready",
		desc: "Fit score, talking points, resume tips, and outreach drafts — in seconds."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "How it works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900",
					children: "Three clicks from job posting to interview-ready"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid md:grid-cols-3 gap-6",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-2xl bg-white border border-slate-200 p-6 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 -left-3 h-8 w-8 rounded-lg bg-primary text-white text-sm font-bold grid place-items-center shadow-lift",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-xl bg-blue-50 text-primary grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold text-slate-900",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-600 leading-relaxed",
								children: s.desc
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
var features = [
	{
		icon: Zap,
		title: "Instant job analysis",
		desc: "Role requirements and technical skills extracted automatically."
	},
	{
		icon: Target,
		title: "Resume fit score",
		desc: "See how well you match (0–100) with matched and missing skills."
	},
	{
		icon: MessageSquareQuote,
		title: "Personalized talking points",
		desc: "\"Why this role\" and \"Why this company\" tailored to your background."
	},
	{
		icon: Mail,
		title: "Cold email & cover letter drafts",
		desc: "One-click outreach copy based on the role and your profile."
	},
	{
		icon: FilePen,
		title: "Resume bullet improvements",
		desc: "AI suggests rewrites to better match the job."
	},
	{
		icon: CircleQuestionMark,
		title: "Questions to ask",
		desc: "Smart interview questions based on the actual posting."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "py-24 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Features"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900",
						children: "Everything you need before you hit apply"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-slate-600",
						children: "Six focused tools that replace the tab-switching between job boards, ChatGPT, and Google Docs."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-2xl bg-white border border-slate-200 p-6 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 hover:border-blue-200 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-xl bg-blue-50 text-primary grid place-items-center group-hover:bg-primary group-hover:text-white transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-semibold text-slate-900",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-600 leading-relaxed",
								children: f.desc
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
function FitRing({ target = 78, size = 140, stroke = 10, triggerOnView = true }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-20% 0px"
	});
	const [start, setStart] = (0, import_react.useState)(!triggerOnView);
	(0, import_react.useEffect)(() => {
		if (inView) setStart(true);
	}, [inView]);
	const mv = useMotionValue(0);
	const spring = useSpring(mv, {
		stiffness: 60,
		damping: 18
	});
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (start) mv.set(target);
	}, [
		start,
		target,
		mv
	]);
	(0, import_react.useEffect)(() => {
		return spring.on("change", (v) => setDisplay(Math.round(v)));
	}, [spring]);
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const progress = useTransform(spring, (v) => c - c * v / 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			className: "-rotate-90",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: size / 2,
					cy: size / 2,
					r,
					fill: "none",
					stroke: "rgb(226 232 240)",
					strokeWidth: stroke
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: size / 2,
					cy: size / 2,
					r,
					fill: "none",
					stroke: "url(#fitGradient)",
					strokeWidth: stroke,
					strokeLinecap: "round",
					strokeDasharray: c,
					style: { strokeDashoffset: progress }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "fitGradient",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#2563eb"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#60a5fa"
					})]
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center leading-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-slate-900 tabular-nums",
					style: { fontSize: size * .28 },
					children: display
				}), size > 90 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-widest text-slate-400 mt-1",
					children: "Fit"
				})]
			})
		})]
	});
}
var tabs = [
	{
		id: "analysis",
		label: "Analysis",
		icon: Sparkles
	},
	{
		id: "fit",
		label: "Fit Score",
		icon: Target
	},
	{
		id: "outreach",
		label: "Outreach",
		icon: Mail
	},
	{
		id: "resume",
		label: "Resume tips",
		icon: FilePen
	}
];
function Demo() {
	const [active, setActive] = (0, import_react.useState)("analysis");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copy = (text) => {
		navigator.clipboard?.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "demo",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Live preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900",
						children: "See what Joblens generates"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-slate-600",
						children: "A real sample for a Senior Software Engineer role at Acme Inc."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-2xl bg-white border border-slate-200 shadow-lift overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex overflow-x-auto border-b border-slate-100 bg-slate-50/50 px-2",
						children: tabs.map((t) => {
							const isActive = active === t.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActive(t.id),
								className: `relative flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${isActive ? "text-primary" : "text-slate-500 hover:text-slate-800"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" }),
									t.label,
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										layoutId: "tab-underline",
										className: "absolute left-2 right-2 bottom-0 h-0.5 bg-primary rounded-full"
									})
								]
							}, t.id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 sm:p-8 min-h-[420px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -8
								},
								transition: { duration: .25 },
								children: [
									active === "analysis" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisTab, {}),
									active === "fit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitTab, {}),
									active === "outreach" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutreachTab, {
										copy,
										copied
									}),
									active === "resume" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeTab, {})
								]
							}, active)
						})
					})]
				})
			})]
		})
	});
}
function AnalysisTab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid md:grid-cols-2 gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "text-sm font-semibold text-slate-900",
			children: "Role requirements"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-3",
			children: [
				"5+ years building production web applications",
				"Deep expertise in TypeScript and modern React",
				"Experience designing and shipping REST/GraphQL APIs",
				"Comfort operating services on AWS or GCP",
				"Track record leading cross-functional projects"
			].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
				initial: {
					opacity: 0,
					x: -6
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: i * .06 },
				className: "flex gap-3 text-sm text-slate-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }), r]
			}, r))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-sm font-semibold text-slate-900",
				children: "Technical skills to highlight"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					"TypeScript",
					"React",
					"Node.js",
					"AWS",
					"PostgreSQL",
					"System design",
					"GraphQL",
					"Kubernetes"
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 0,
						scale: .85
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { delay: .15 + i * .05 },
					className: "rounded-lg bg-blue-50 text-primary text-xs font-medium px-2.5 py-1 ring-1 ring-blue-100",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-xl bg-slate-50 border border-slate-100 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
					children: "Why this role"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-slate-700 leading-relaxed",
					children: "The scope maps directly to what you led at your last two roles — greenfield React/TS work with real ownership over infrastructure decisions."
				})]
			})
		] })]
	});
}
function FitTab() {
	const [target, setTarget] = (0, import_react.useState)(78);
	const matched = [
		"TypeScript",
		"React",
		"Node.js",
		"AWS",
		"PostgreSQL",
		"System design",
		"REST APIs"
	];
	const missing = ["GraphQL", "Kubernetes"];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid md:grid-cols-[auto_1fr] gap-8 items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setTarget(target === 78 ? 82 : 78),
				title: "Click to recalculate",
				className: "focus:outline-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitRing, {
					target,
					size: 180,
					triggerOnView: false
				}, target)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold text-slate-900",
					children: "Strong match"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-slate-500",
					children: "Click to recalculate"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm font-semibold text-slate-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-500" }),
					"Matched skills (",
					matched.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: matched.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 ring-1 ring-emerald-100",
					children: s
				}, s))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-semibold text-slate-900",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 text-amber-500" }),
						"Missing skills (",
						missing.length,
						")"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: missing.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 ring-1 ring-amber-100",
						children: s
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-slate-500",
					children: "Consider mentioning transferable experience or a related side project."
				})
			] })]
		})]
	});
}
function OutreachTab({ copy, copied }) {
	const email = `Hi Priya,

I came across the Senior Software Engineer role at Acme and it looks like an unusually strong fit for what I've been building over the last few years.

At Northwind I led the migration of our billing service to TypeScript on AWS, shaving 40% off p95 latency — the exact tradeoffs your posting hints at. I'd love 15 minutes to hear how the platform team is thinking about the next phase.

Would next Tuesday or Wednesday work?

Best,
Alex`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid md:grid-cols-[1fr_1.4fr] gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-slate-50 border border-slate-100 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
				children: "Talking points"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 space-y-2.5 text-sm text-slate-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "•"
						}), " Migration led at Northwind mirrors Acme's current infra push"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "•"
						}), " p95 latency wins prove the exact tradeoffs the JD hints at"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "•"
						}), " Cross-functional leadership experience matches team scope"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-slate-200 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold text-slate-600",
					children: "Cold email · draft"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => copy(email),
					className: "inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), copied ? "Copied!" : "Copy"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "p-4 text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed",
				children: email
			})]
		})]
	});
}
function ResumeTab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid md:grid-cols-2 gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-slate-200 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
					children: "Before"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-slate-700 leading-relaxed",
					children: "Worked on the frontend team to build new features and fix bugs across the product."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border-2 border-primary/30 bg-blue-50/40 p-5 relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-2.5 left-4 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded",
						children: "Suggested"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "After"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-slate-800 leading-relaxed",
						children: "Led the redesign of 4 core React/TypeScript surfaces used by 120K+ weekly users, shipping a componentized system that cut time-to-ship for new features by 35%."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2 rounded-xl bg-slate-50 border border-slate-100 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
					children: "Why the rewrite works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-slate-700 leading-relaxed",
					children: "Anchored in quantifiable outcomes, name-drops the exact stack in the JD, and signals ownership — three patterns Acme's engineering hiring bar looks for."
				})]
			})
		]
	});
}
function Personalization() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Personalization"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900",
					children: "Upload your resume once. Every scan gets smarter."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-slate-600 leading-relaxed",
					children: "Joblens keeps your background handy so every fit score, talking point, and draft is grounded in your actual experience — not a generic template."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-2 text-sm text-slate-700",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✓"
							}), " One-time setup, persistent across every scan"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✓"
							}), " Update anytime as your resume evolves"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "✓"
							}), " Stored securely, never shared"]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-2xl bg-white border border-slate-200 shadow-lift p-6 min-h-[340px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-xl bg-blue-50 text-primary grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-slate-900",
								children: "Alex Morgan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-slate-500",
								children: "Senior Software Engineer · 7 yrs"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-2",
							children: [
								"TypeScript · React · Node.js",
								"AWS · PostgreSQL · Redis",
								"Team lead · Systems design"
							].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: -10,
									width: "0%"
								},
								whileInView: {
									opacity: 1,
									x: 0,
									width: "100%"
								},
								viewport: { once: true },
								transition: {
									delay: .2 + i * .15,
									duration: .5
								},
								className: "flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-700",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 text-slate-400" }), row]
							}, row))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute right-6 top-24 hidden sm:block",
							width: "80",
							height: "60",
							viewBox: "0 0 80 60",
							fill: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								d: "M 0 30 Q 40 30 70 30",
								stroke: "#2563eb",
								strokeWidth: "2",
								strokeDasharray: "4 4",
								initial: { pathLength: 0 },
								whileInView: { pathLength: 1 },
								viewport: { once: true },
								transition: {
									duration: 1,
									delay: .7
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 right-6 sm:right-10 rounded-2xl bg-white border border-slate-200 shadow-lift p-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitRing, {
								target: 78,
								size: 72
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-slate-400 font-medium",
									children: "From 52 → 78"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold text-slate-900",
									children: "Fit improved"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-slate-500",
									children: "with your resume"
								})
							] })]
						})
					]
				})
			})]
		})
	});
}
var rows = [
	{
		without: "Copy-paste into ChatGPT",
		with: "One-click scan on the job page"
	},
	{
		without: "Generic advice",
		with: "Personalized to your resume"
	},
	{
		without: "20+ minutes per role",
		with: "Under 30 seconds"
	},
	{
		without: "Switch between 5 tabs",
		with: "Stay in your flow"
	}
];
function Compare() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Why Joblens"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900",
					children: "The old way vs. the Joblens way"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid md:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-slate-200 bg-slate-50/60 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",
						children: "Without Joblens"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -8
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { delay: i * .08 },
							className: "flex items-start gap-3 text-slate-600",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-5 w-5 rounded-full bg-slate-200 grid place-items-center shrink-0 mt-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "h-3 w-3 text-slate-500",
									strokeWidth: 3
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: r.without
							})]
						}, r.without))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border-2 border-primary/25 bg-gradient-to-br from-blue-50/70 to-white p-6 shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-primary uppercase tracking-wider mb-4",
						children: "With Joblens"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: 8
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { delay: i * .08 },
							className: "flex items-start gap-3 text-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-5 w-5 rounded-full bg-primary grid place-items-center shrink-0 mt-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-3 w-3 text-white",
									strokeWidth: 3
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: r.with
							})]
						}, r.with))
					})]
				})]
			})]
		})
	});
}
var faqs = [
	{
		q: "Is Joblens free?",
		a: "Yes. Joblens is free to install and use. We may add optional pro features down the line."
	},
	{
		q: "Which job sites are supported?",
		a: "LinkedIn, Greenhouse, Lever, Workday, Ashby, Indeed, and Notion career pages. More coming soon."
	},
	{
		q: "Do I need to upload my resume?",
		a: "No — but you'll get much better results with it. Add your resume once and every scan is personalized."
	},
	{
		q: "Is my data safe?",
		a: "Job text is sent to our secure backend for AI analysis. API keys never leave our servers, and we don't sell or share your data."
	},
	{
		q: "Does it work on LinkedIn?",
		a: "Yes. Joblens works on any LinkedIn job posting the moment the panel opens."
	},
	{
		q: "How is this different from ChatGPT?",
		a: "Joblens runs where you're already applying, reads the posting automatically, and outputs role-specific fit scores, outreach drafts, and resume tips — no prompting required."
	}
];
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-24 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900",
					children: "Frequently asked"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm sm:text-base font-medium text-slate-900",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: `h-4 w-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-primary" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .25,
								ease: "easeOut"
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-5 pb-5 text-sm text-slate-600 leading-relaxed",
								children: f.a
							})
						})
					})] }, f.q);
				})
			})]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-600 p-10 sm:p-14 text-center shadow-panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "relative text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight",
						children: "Your next interview starts here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mt-4 text-blue-100 max-w-lg mx-auto",
						children: "Install Joblens and get interview-ready on the next job posting you open."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-8 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-xl bg-white text-primary font-semibold px-6 py-3.5 shadow-lift hover:scale-[1.03] transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chromium, { className: "h-5 w-5" }), "Add to Chrome"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mt-4 text-sm text-blue-100",
						children: "Free · No account required · Works instantly"
					})
				]
			}) })
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-slate-200 bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-7 w-7 rounded-lg bg-primary grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "h-3.5 w-3.5 text-white",
							strokeWidth: 2.75
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-slate-900",
						children: "Joblens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-slate-400 ml-2",
						children: "© 2026"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6 text-sm text-slate-500",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-slate-900 transition-colors",
						children: "Privacy Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@joblens.app",
						className: "hover:text-slate-900 transition-colors",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com",
						className: "hover:text-slate-900 transition-colors",
						children: "GitHub"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-6 text-center text-xs text-slate-400 px-4",
			children: "Not affiliated with Google, LinkedIn, Greenhouse, Lever, Workday, Ashby, Indeed, or Notion."
		})]
	});
}
function MobileCta() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > window.innerHeight * .8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			y: 100,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: 100,
			opacity: 0
		},
		transition: { duration: .3 },
		className: "md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/90 backdrop-blur border-t border-slate-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "https://chromewebstore.google.com/detail/joblens/pjloihfekgljkeebmkkkefieadecpagm",
			target: "_blank",
			rel: "noopener noreferrer",
			className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium py-3 shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chromium, { className: "h-5 w-5" }), "Add to Chrome"]
		})
	}) });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Personalization, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compare, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
//#endregion
export { Index as component };
