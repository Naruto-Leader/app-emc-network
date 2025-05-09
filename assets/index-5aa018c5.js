import {
  ag as O,
  am as _,
  a5 as xe,
  ap as j,
  aI as _e,
  b9 as qe,
  bO as Ke,
  af as le,
  ab as Qe,
  fi as Ge,
  bf as G,
  cf as ae,
  cn as pe,
  aK as x,
  fj as Ze,
  c1 as ke,
  b2 as Je,
  aS as Ce,
  fk as ce,
  cB as et,
  c4 as tt,
  c0 as st,
  c3 as nt,
  a$ as b,
  fl as se,
  aZ as D,
  a_ as H,
  bj as V,
  fm as ot,
  cA as rt,
  aJ as Se,
  bg as me,
  fn as at,
  b0 as it,
  fo as lt,
  fp as ct,
  fq as dt,
  fr as ut,
  bi as W,
  a6 as ft,
  cw as ht,
  aC as m,
  ay as N,
  aM as l,
  aF as B,
  aA as u,
  az as v,
  aU as o,
  ai as Z,
  fs as ie,
  ft as pt,
  al as ne,
  ak as $e,
  an as oe,
  aj as ze,
  aG as J,
  c8 as de,
  aD as L,
  aE as M,
  fu as mt,
  ar as Ae,
  aV as ue,
  fv as gt,
  ah as vt,
  ax as fe,
  cm as ge,
  aH as ee,
  aX as Be,
  aY as Ee,
  au as bt,
} from "./index-45cc9017.js";
import { N as Re, q as wt, g as yt, u as xt } from "./index-034b9e72.js";
import { a as te, N as q } from "./text-d64a6c33.js";
import { N as _t } from "./Dropdown-d2794922.js";
import { t as X, h as kt } from "./format-number-243ea052.js";
import { N as T } from "./Space-9186740e.js";
import { e as Ct } from "./ethers-a5384a4b.js";
import { u as ve, f as be } from "./use-merged-state-864545a8.js";
const St = O({
    name: "NDrawerContent",
    inheritAttrs: !1,
    props: {
      blockScroll: Boolean,
      show: { type: Boolean, default: void 0 },
      displayDirective: { type: String, required: !0 },
      placement: { type: String, required: !0 },
      contentClass: String,
      contentStyle: [Object, String],
      nativeScrollbar: { type: Boolean, required: !0 },
      scrollbarProps: Object,
      trapFocus: { type: Boolean, default: !0 },
      autoFocus: { type: Boolean, default: !0 },
      showMask: { type: [Boolean, String], required: !0 },
      maxWidth: Number,
      maxHeight: Number,
      minWidth: Number,
      minHeight: Number,
      resizable: Boolean,
      onClickoutside: Function,
      onAfterLeave: Function,
      onAfterEnter: Function,
      onEsc: Function,
    },
    setup(e) {
      const t = _(!!e.show),
        s = _(null),
        d = xe(ce);
      let c = 0,
        f = "",
        i = null;
      const r = _(!1),
        n = _(!1),
        h = j(() => e.placement === "top" || e.placement === "bottom"),
        { mergedClsPrefixRef: a, mergedRtlRef: w } = _e(e),
        A = qe("Drawer", w, a),
        S = (g) => {
          (n.value = !0),
            (c = h.value ? g.clientY : g.clientX),
            (f = document.body.style.cursor),
            (document.body.style.cursor = h.value ? "ns-resize" : "ew-resize"),
            document.body.addEventListener("mousemove", Q),
            document.body.addEventListener("mouseleave", p),
            document.body.addEventListener("mouseup", U);
        },
        k = () => {
          i !== null && (window.clearTimeout(i), (i = null)),
            n.value
              ? (r.value = !0)
              : (i = window.setTimeout(() => {
                  r.value = !0;
                }, 300));
        },
        E = () => {
          i !== null && (window.clearTimeout(i), (i = null)), (r.value = !1);
        },
        { doUpdateHeight: y, doUpdateWidth: $ } = d,
        Y = (g) => {
          const { maxWidth: z } = e;
          if (z && g > z) return z;
          const { minWidth: I } = e;
          return I && g < I ? I : g;
        },
        K = (g) => {
          const { maxHeight: z } = e;
          if (z && g > z) return z;
          const { minHeight: I } = e;
          return I && g < I ? I : g;
        },
        Q = (g) => {
          var z, I;
          if (n.value)
            if (h.value) {
              let P =
                ((z = s.value) === null || z === void 0
                  ? void 0
                  : z.offsetHeight) || 0;
              const F = c - g.clientY;
              (P += e.placement === "bottom" ? F : -F),
                (P = K(P)),
                y(P),
                (c = g.clientY);
            } else {
              let P =
                ((I = s.value) === null || I === void 0
                  ? void 0
                  : I.offsetWidth) || 0;
              const F = c - g.clientX;
              (P += e.placement === "right" ? F : -F),
                (P = Y(P)),
                $(P),
                (c = g.clientX);
            }
        },
        U = () => {
          n.value &&
            ((c = 0),
            (n.value = !1),
            (document.body.style.cursor = f),
            document.body.removeEventListener("mousemove", Q),
            document.body.removeEventListener("mouseup", U),
            document.body.removeEventListener("mouseleave", p));
        },
        p = U;
      Ke(() => {
        e.show && (t.value = !0);
      }),
        le(
          () => e.show,
          (g) => {
            g || U();
          }
        ),
        Qe(() => {
          U();
        });
      const C = j(() => {
        const { show: g } = e,
          z = [[pe, g]];
        return (
          e.showMask || z.push([et, e.onClickoutside, void 0, { capture: !0 }]),
          z
        );
      });
      function R() {
        var g;
        (t.value = !1),
          (g = e.onAfterLeave) === null || g === void 0 || g.call(e);
      }
      return (
        Ge(j(() => e.blockScroll && t.value)),
        G(tt, s),
        G(st, null),
        G(nt, null),
        {
          bodyRef: s,
          rtlEnabled: A,
          mergedClsPrefix: d.mergedClsPrefixRef,
          isMounted: d.isMountedRef,
          mergedTheme: d.mergedThemeRef,
          displayed: t,
          transitionName: j(
            () =>
              ({
                right: "slide-in-from-right-transition",
                left: "slide-in-from-left-transition",
                top: "slide-in-from-top-transition",
                bottom: "slide-in-from-bottom-transition",
              }[e.placement])
          ),
          handleAfterLeave: R,
          bodyDirectives: C,
          handleMousedownResizeTrigger: S,
          handleMouseenterResizeTrigger: k,
          handleMouseleaveResizeTrigger: E,
          isDragging: n,
          isHoverOnResizeTrigger: r,
        }
      );
    },
    render() {
      const { $slots: e, mergedClsPrefix: t } = this;
      return this.displayDirective === "show" || this.displayed || this.show
        ? ae(
            x(
              "div",
              { role: "none" },
              x(
                Ze,
                {
                  disabled: !this.showMask || !this.trapFocus,
                  active: this.show,
                  autoFocus: this.autoFocus,
                  onEsc: this.onEsc,
                },
                {
                  default: () =>
                    x(
                      ke,
                      {
                        name: this.transitionName,
                        appear: this.isMounted,
                        onAfterEnter: this.onAfterEnter,
                        onAfterLeave: this.handleAfterLeave,
                      },
                      {
                        default: () =>
                          ae(
                            x(
                              "div",
                              Je(this.$attrs, {
                                role: "dialog",
                                ref: "bodyRef",
                                "aria-modal": "true",
                                class: [
                                  `${t}-drawer`,
                                  this.rtlEnabled && `${t}-drawer--rtl`,
                                  `${t}-drawer--${this.placement}-placement`,
                                  this.isDragging &&
                                    `${t}-drawer--unselectable`,
                                  this.nativeScrollbar &&
                                    `${t}-drawer--native-scrollbar`,
                                ],
                              }),
                              [
                                this.resizable
                                  ? x("div", {
                                      class: [
                                        `${t}-drawer__resize-trigger`,
                                        (this.isDragging ||
                                          this.isHoverOnResizeTrigger) &&
                                          `${t}-drawer__resize-trigger--hover`,
                                      ],
                                      onMouseenter:
                                        this.handleMouseenterResizeTrigger,
                                      onMouseleave:
                                        this.handleMouseleaveResizeTrigger,
                                      onMousedown:
                                        this.handleMousedownResizeTrigger,
                                    })
                                  : null,
                                this.nativeScrollbar
                                  ? x(
                                      "div",
                                      {
                                        class: [
                                          `${t}-drawer-content-wrapper`,
                                          this.contentClass,
                                        ],
                                        style: this.contentStyle,
                                        role: "none",
                                      },
                                      e
                                    )
                                  : x(
                                      Ce,
                                      Object.assign({}, this.scrollbarProps, {
                                        contentStyle: this.contentStyle,
                                        contentClass: [
                                          `${t}-drawer-content-wrapper`,
                                          this.contentClass,
                                        ],
                                        theme: this.mergedTheme.peers.Scrollbar,
                                        themeOverrides:
                                          this.mergedTheme.peerOverrides
                                            .Scrollbar,
                                      }),
                                      e
                                    ),
                              ]
                            ),
                            this.bodyDirectives
                          ),
                      }
                    ),
                }
              )
            ),
            [
              [
                pe,
                this.displayDirective === "if" || this.displayed || this.show,
              ],
            ]
          )
        : null;
    },
  }),
  { cubicBezierEaseIn: $t, cubicBezierEaseOut: zt } = se;
function At({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: s = "slide-in-from-right",
} = {}) {
  return [
    b(`&.${s}-transition-leave-active`, { transition: `transform ${t} ${$t}` }),
    b(`&.${s}-transition-enter-active`, { transition: `transform ${e} ${zt}` }),
    b(`&.${s}-transition-enter-to`, { transform: "translateX(0)" }),
    b(`&.${s}-transition-enter-from`, { transform: "translateX(100%)" }),
    b(`&.${s}-transition-leave-from`, { transform: "translateX(0)" }),
    b(`&.${s}-transition-leave-to`, { transform: "translateX(100%)" }),
  ];
}
const { cubicBezierEaseIn: Bt, cubicBezierEaseOut: Et } = se;
function Rt({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: s = "slide-in-from-left",
} = {}) {
  return [
    b(`&.${s}-transition-leave-active`, { transition: `transform ${t} ${Bt}` }),
    b(`&.${s}-transition-enter-active`, { transition: `transform ${e} ${Et}` }),
    b(`&.${s}-transition-enter-to`, { transform: "translateX(0)" }),
    b(`&.${s}-transition-enter-from`, { transform: "translateX(-100%)" }),
    b(`&.${s}-transition-leave-from`, { transform: "translateX(0)" }),
    b(`&.${s}-transition-leave-to`, { transform: "translateX(-100%)" }),
  ];
}
const { cubicBezierEaseIn: Nt, cubicBezierEaseOut: It } = se;
function Tt({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: s = "slide-in-from-top",
} = {}) {
  return [
    b(`&.${s}-transition-leave-active`, { transition: `transform ${t} ${Nt}` }),
    b(`&.${s}-transition-enter-active`, { transition: `transform ${e} ${It}` }),
    b(`&.${s}-transition-enter-to`, { transform: "translateY(0)" }),
    b(`&.${s}-transition-enter-from`, { transform: "translateY(-100%)" }),
    b(`&.${s}-transition-leave-from`, { transform: "translateY(0)" }),
    b(`&.${s}-transition-leave-to`, { transform: "translateY(-100%)" }),
  ];
}
const { cubicBezierEaseIn: Ut, cubicBezierEaseOut: Dt } = se;
function Mt({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: s = "slide-in-from-bottom",
} = {}) {
  return [
    b(`&.${s}-transition-leave-active`, { transition: `transform ${t} ${Ut}` }),
    b(`&.${s}-transition-enter-active`, { transition: `transform ${e} ${Dt}` }),
    b(`&.${s}-transition-enter-to`, { transform: "translateY(0)" }),
    b(`&.${s}-transition-enter-from`, { transform: "translateY(100%)" }),
    b(`&.${s}-transition-leave-from`, { transform: "translateY(0)" }),
    b(`&.${s}-transition-leave-to`, { transform: "translateY(100%)" }),
  ];
}
const Pt = b([
    D(
      "drawer",
      `
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,
      [
        At(),
        Rt(),
        Tt(),
        Mt(),
        H(
          "unselectable",
          `
 user-select: none; 
 -webkit-user-select: none;
 `
        ),
        H("native-scrollbar", [
          D(
            "drawer-content-wrapper",
            `
 overflow: auto;
 height: 100%;
 `
          ),
        ]),
        V(
          "resize-trigger",
          `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,
          [
            H(
              "hover",
              `
 background-color: var(--n-resize-trigger-color-hover);
 `
            ),
          ]
        ),
        D(
          "drawer-content-wrapper",
          `
 box-sizing: border-box;
 `
        ),
        D(
          "drawer-content",
          `
 height: 100%;
 display: flex;
 flex-direction: column;
 `,
          [
            H("native-scrollbar", [
              D(
                "drawer-body-content-wrapper",
                `
 height: 100%;
 overflow: auto;
 `
              ),
            ]),
            D(
              "drawer-body",
              `
 flex: 1 0 0;
 overflow: hidden;
 `
            ),
            D(
              "drawer-body-content-wrapper",
              `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `
            ),
            D(
              "drawer-header",
              `
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,
              [
                V(
                  "close",
                  `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `
                ),
              ]
            ),
            D(
              "drawer-footer",
              `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `
            ),
          ]
        ),
        H(
          "right-placement",
          `
 top: 0;
 bottom: 0;
 right: 0;
 `,
          [
            V(
              "resize-trigger",
              `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `
            ),
          ]
        ),
        H(
          "left-placement",
          `
 top: 0;
 bottom: 0;
 left: 0;
 `,
          [
            V(
              "resize-trigger",
              `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `
            ),
          ]
        ),
        H(
          "top-placement",
          `
 top: 0;
 left: 0;
 right: 0;
 `,
          [
            V(
              "resize-trigger",
              `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `
            ),
          ]
        ),
        H(
          "bottom-placement",
          `
 left: 0;
 bottom: 0;
 right: 0;
 `,
          [
            V(
              "resize-trigger",
              `
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `
            ),
          ]
        ),
      ]
    ),
    b("body", [b(">", [D("drawer-container", { position: "fixed" })])]),
    D(
      "drawer-container",
      `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,
      [b("> *", { pointerEvents: "all" })]
    ),
    D(
      "drawer-mask",
      `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,
      [
        H(
          "invisible",
          `
 background-color: rgba(0, 0, 0, 0)
 `
        ),
        ot({
          enterDuration: "0.2s",
          leaveDuration: "0.2s",
          enterCubicBezier: "var(--n-bezier-in)",
          leaveCubicBezier: "var(--n-bezier-out)",
        }),
      ]
    ),
  ]),
  Ot = Object.assign(Object.assign({}, Se.props), {
    show: Boolean,
    width: [Number, String],
    height: [Number, String],
    placement: { type: String, default: "right" },
    maskClosable: { type: Boolean, default: !0 },
    showMask: { type: [Boolean, String], default: !0 },
    to: [String, Object],
    displayDirective: { type: String, default: "if" },
    nativeScrollbar: { type: Boolean, default: !0 },
    zIndex: Number,
    onMaskClick: Function,
    scrollbarProps: Object,
    contentClass: String,
    contentStyle: [Object, String],
    trapFocus: { type: Boolean, default: !0 },
    onEsc: Function,
    autoFocus: { type: Boolean, default: !0 },
    closeOnEsc: { type: Boolean, default: !0 },
    blockScroll: { type: Boolean, default: !0 },
    maxWidth: Number,
    maxHeight: Number,
    minWidth: Number,
    minHeight: Number,
    resizable: Boolean,
    defaultWidth: { type: [Number, String], default: 251 },
    defaultHeight: { type: [Number, String], default: 251 },
    onUpdateWidth: [Function, Array],
    onUpdateHeight: [Function, Array],
    "onUpdate:width": [Function, Array],
    "onUpdate:height": [Function, Array],
    "onUpdate:show": [Function, Array],
    onUpdateShow: [Function, Array],
    onAfterEnter: Function,
    onAfterLeave: Function,
    drawerStyle: [String, Object],
    drawerClass: String,
    target: null,
    onShow: Function,
    onHide: Function,
  }),
  Ht = O({
    name: "Drawer",
    inheritAttrs: !1,
    props: Ot,
    setup(e) {
      const {
          mergedClsPrefixRef: t,
          namespaceRef: s,
          inlineThemeDisabled: d,
        } = _e(e),
        c = rt(),
        f = Se("Drawer", "-drawer", Pt, dt, e, t),
        i = _(e.defaultWidth),
        r = _(e.defaultHeight),
        n = ve(me(e, "width"), i),
        h = ve(me(e, "height"), r),
        a = j(() => {
          const { placement: p } = e;
          return p === "top" || p === "bottom" ? "" : be(n.value);
        }),
        w = j(() => {
          const { placement: p } = e;
          return p === "left" || p === "right" ? "" : be(h.value);
        }),
        A = (p) => {
          const { onUpdateWidth: C, "onUpdate:width": R } = e;
          C && W(C, p), R && W(R, p), (i.value = p);
        },
        S = (p) => {
          const { onUpdateHeight: C, "onUpdate:width": R } = e;
          C && W(C, p), R && W(R, p), (r.value = p);
        },
        k = j(() => [{ width: a.value, height: w.value }, e.drawerStyle || ""]);
      function E(p) {
        const { onMaskClick: C, maskClosable: R } = e;
        R && K(!1), C && C(p);
      }
      function y(p) {
        E(p);
      }
      const $ = at();
      function Y(p) {
        var C;
        (C = e.onEsc) === null || C === void 0 || C.call(e),
          e.show && e.closeOnEsc && ut(p) && !$.value && K(!1);
      }
      function K(p) {
        const { onHide: C, onUpdateShow: R, "onUpdate:show": g } = e;
        R && W(R, p), g && W(g, p), C && !p && W(C, p);
      }
      G(ce, {
        isMountedRef: c,
        mergedThemeRef: f,
        mergedClsPrefixRef: t,
        doUpdateShow: K,
        doUpdateHeight: S,
        doUpdateWidth: A,
      });
      const Q = j(() => {
          const {
            common: {
              cubicBezierEaseInOut: p,
              cubicBezierEaseIn: C,
              cubicBezierEaseOut: R,
            },
            self: {
              color: g,
              textColor: z,
              boxShadow: I,
              lineHeight: P,
              headerPadding: F,
              footerPadding: Ne,
              bodyPadding: Ie,
              titleFontSize: Te,
              titleTextColor: Ue,
              titleFontWeight: De,
              headerBorderBottom: Me,
              footerBorderTop: Pe,
              closeIconColor: Oe,
              closeIconColorHover: He,
              closeIconColorPressed: je,
              closeColorHover: Fe,
              closeColorPressed: We,
              closeIconSize: Le,
              closeSize: Ye,
              closeBorderRadius: Ve,
              resizableTriggerColorHover: Xe,
            },
          } = f.value;
          return {
            "--n-line-height": P,
            "--n-color": g,
            "--n-text-color": z,
            "--n-box-shadow": I,
            "--n-bezier": p,
            "--n-bezier-out": R,
            "--n-bezier-in": C,
            "--n-header-padding": F,
            "--n-body-padding": Ie,
            "--n-footer-padding": Ne,
            "--n-title-text-color": Ue,
            "--n-title-font-size": Te,
            "--n-title-font-weight": De,
            "--n-header-border-bottom": Me,
            "--n-footer-border-top": Pe,
            "--n-close-icon-color": Oe,
            "--n-close-icon-color-hover": He,
            "--n-close-icon-color-pressed": je,
            "--n-close-size": Ye,
            "--n-close-color-hover": Fe,
            "--n-close-color-pressed": We,
            "--n-close-icon-size": Le,
            "--n-close-border-radius": Ve,
            "--n-resize-trigger-color-hover": Xe,
          };
        }),
        U = d ? it("drawer", void 0, Q, e) : void 0;
      return {
        mergedClsPrefix: t,
        namespace: s,
        mergedBodyStyle: k,
        handleOutsideClick: y,
        handleMaskClick: E,
        handleEsc: Y,
        mergedTheme: f,
        cssVars: d ? void 0 : Q,
        themeClass: U == null ? void 0 : U.themeClass,
        onRender: U == null ? void 0 : U.onRender,
        isMounted: c,
      };
    },
    render() {
      const { mergedClsPrefix: e } = this;
      return x(
        ct,
        { to: this.to, show: this.show },
        {
          default: () => {
            var t;
            return (
              (t = this.onRender) === null || t === void 0 || t.call(this),
              ae(
                x(
                  "div",
                  {
                    class: [
                      `${e}-drawer-container`,
                      this.namespace,
                      this.themeClass,
                    ],
                    style: this.cssVars,
                    role: "none",
                  },
                  this.showMask
                    ? x(
                        ke,
                        { name: "fade-in-transition", appear: this.isMounted },
                        {
                          default: () =>
                            this.show
                              ? x("div", {
                                  "aria-hidden": !0,
                                  class: [
                                    `${e}-drawer-mask`,
                                    this.showMask === "transparent" &&
                                      `${e}-drawer-mask--invisible`,
                                  ],
                                  onClick: this.handleMaskClick,
                                })
                              : null,
                        }
                      )
                    : null,
                  x(
                    St,
                    Object.assign({}, this.$attrs, {
                      class: [this.drawerClass, this.$attrs.class],
                      style: [this.mergedBodyStyle, this.$attrs.style],
                      blockScroll: this.blockScroll,
                      contentStyle: this.contentStyle,
                      contentClass: this.contentClass,
                      placement: this.placement,
                      scrollbarProps: this.scrollbarProps,
                      show: this.show,
                      displayDirective: this.displayDirective,
                      nativeScrollbar: this.nativeScrollbar,
                      onAfterEnter: this.onAfterEnter,
                      onAfterLeave: this.onAfterLeave,
                      trapFocus: this.trapFocus,
                      autoFocus: this.autoFocus,
                      resizable: this.resizable,
                      maxHeight: this.maxHeight,
                      minHeight: this.minHeight,
                      maxWidth: this.maxWidth,
                      minWidth: this.minWidth,
                      showMask: this.showMask,
                      onEsc: this.handleEsc,
                      onClickoutside: this.handleOutsideClick,
                    }),
                    this.$slots
                  )
                ),
                [[lt, { zIndex: this.zIndex, enabled: this.show }]]
              )
            );
          },
        }
      );
    },
  }),
  jt = {
    title: String,
    headerClass: String,
    headerStyle: [Object, String],
    footerClass: String,
    footerStyle: [Object, String],
    bodyClass: String,
    bodyStyle: [Object, String],
    bodyContentClass: String,
    bodyContentStyle: [Object, String],
    nativeScrollbar: { type: Boolean, default: !0 },
    scrollbarProps: Object,
    closable: Boolean,
  },
  Ft = O({
    name: "DrawerContent",
    props: jt,
    setup() {
      const e = xe(ce, null);
      e ||
        ft(
          "drawer-content",
          "`n-drawer-content` must be placed inside `n-drawer`."
        );
      const { doUpdateShow: t } = e;
      function s() {
        t(!1);
      }
      return {
        handleCloseClick: s,
        mergedTheme: e.mergedThemeRef,
        mergedClsPrefix: e.mergedClsPrefixRef,
      };
    },
    render() {
      const {
        title: e,
        mergedClsPrefix: t,
        nativeScrollbar: s,
        mergedTheme: d,
        bodyClass: c,
        bodyStyle: f,
        bodyContentClass: i,
        bodyContentStyle: r,
        headerClass: n,
        headerStyle: h,
        footerClass: a,
        footerStyle: w,
        scrollbarProps: A,
        closable: S,
        $slots: k,
      } = this;
      return x(
        "div",
        {
          role: "none",
          class: [
            `${t}-drawer-content`,
            s && `${t}-drawer-content--native-scrollbar`,
          ],
        },
        k.header || e || S
          ? x(
              "div",
              { class: [`${t}-drawer-header`, n], style: h, role: "none" },
              x(
                "div",
                {
                  class: `${t}-drawer-header__main`,
                  role: "heading",
                  "aria-level": "1",
                },
                k.header !== void 0 ? k.header() : e
              ),
              S &&
                x(ht, {
                  onClick: this.handleCloseClick,
                  clsPrefix: t,
                  class: `${t}-drawer-header__close`,
                  absolute: !0,
                })
            )
          : null,
        s
          ? x(
              "div",
              { class: [`${t}-drawer-body`, c], style: f, role: "none" },
              x(
                "div",
                {
                  class: [`${t}-drawer-body-content-wrapper`, i],
                  style: r,
                  role: "none",
                },
                k
              )
            )
          : x(
              Ce,
              Object.assign(
                {
                  themeOverrides: d.peerOverrides.Scrollbar,
                  theme: d.peers.Scrollbar,
                },
                A,
                {
                  class: `${t}-drawer-body`,
                  contentClass: [`${t}-drawer-body-content-wrapper`, i],
                  contentStyle: r,
                }
              ),
              k
            ),
        k.footer
          ? x(
              "div",
              { class: [`${t}-drawer-footer`, a], style: w, role: "none" },
              k.footer()
            )
          : null
      );
    },
  }),
  Wt = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 512 512",
  },
  Lt = l(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "square",
      "stroke-miterlimit": "10",
      "stroke-width": "48",
      d: "M184 112l144 144l-144 144",
    },
    null,
    -1
  ),
  Yt = [Lt],
  Vt = O({
    name: "ChevronForwardSharp",
    render: function (t, s) {
      return m(), N("svg", Wt, Yt);
    },
  }),
  Xt = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 512 512",
  },
  qt = l(
    "path",
    {
      d: "M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Kt = [qt],
  Qt = O({
    name: "MenuSharp",
    render: function (t, s) {
      return m(), N("svg", Xt, Kt);
    },
  }),
  Gt = O({
    __name: "popup-menu",
    props: { configs: { type: Array, default: () => [] } },
    setup(e) {
      const t = e,
        s = _([]),
        d = _(!1),
        c = (n) =>
          x(
            ie,
            { to: { path: n.key } },
            {
              default: () =>
                x(
                  "div",
                  {
                    class:
                      "w-[240px] p-[16px] cursor-pointer select-none hover:bg-[#212121]",
                    onClick: () => r(),
                  },
                  x(q, {}, { default: () => n.label })
                ),
            }
          );
      le(
        () => t.configs,
        (n) => {
          s.value = n.map((h) => ({
            key: h.key,
            type: "render",
            render: () => c(h),
          }));
        },
        { immediate: !0 }
      );
      function f() {
        d.value = !d.value;
      }
      function i() {
        d.value = !1;
      }
      function r(n) {
        d.value = !1;
      }
      return (n, h) => (
        m(),
        B(
          o(_t),
          {
            show: d.value,
            options: s.value,
            size: "large",
            trigger: "click",
            onClickoutside: i,
          },
          {
            default: u(() => [
              v(
                o(Z),
                {
                  type: "default",
                  circle: "",
                  strong: "",
                  quaternary: "",
                  size: "large",
                  onClick: f,
                },
                {
                  icon: u(() => [
                    v(
                      o(te),
                      { size: "28" },
                      { default: u(() => [v(o(Qt))]), _: 1 }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          },
          8,
          ["show", "options"]
        )
      );
    },
  }),
  Zt = "/assets/icon_copy-bd2c9881.svg",
  Jt = "/assets/icon_disconnect-c87e4870.svg",
  es = "/assets/icon_link-c20dd6e8.svg";
var ts = function () {
    var e = document.getSelection();
    if (!e.rangeCount) return function () {};
    for (var t = document.activeElement, s = [], d = 0; d < e.rangeCount; d++)
      s.push(e.getRangeAt(d));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return (
      e.removeAllRanges(),
      function () {
        e.type === "Caret" && e.removeAllRanges(),
          e.rangeCount ||
            s.forEach(function (c) {
              e.addRange(c);
            }),
          t && t.focus();
      }
    );
  },
  ss = ts,
  we = { "text/plain": "Text", "text/html": "Url", default: "Text" },
  ns = "Copy to clipboard: #{key}, Enter";
function os(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function rs(e, t) {
  var s,
    d,
    c,
    f,
    i,
    r,
    n = !1;
  t || (t = {}), (s = t.debug || !1);
  try {
    (c = ss()),
      (f = document.createRange()),
      (i = document.getSelection()),
      (r = document.createElement("span")),
      (r.textContent = e),
      (r.ariaHidden = "true"),
      (r.style.all = "unset"),
      (r.style.position = "fixed"),
      (r.style.top = 0),
      (r.style.clip = "rect(0, 0, 0, 0)"),
      (r.style.whiteSpace = "pre"),
      (r.style.webkitUserSelect = "text"),
      (r.style.MozUserSelect = "text"),
      (r.style.msUserSelect = "text"),
      (r.style.userSelect = "text"),
      r.addEventListener("copy", function (a) {
        if ((a.stopPropagation(), t.format))
          if ((a.preventDefault(), typeof a.clipboardData > "u")) {
            s && console.warn("unable to use e.clipboardData"),
              s && console.warn("trying IE specific stuff"),
              window.clipboardData.clearData();
            var w = we[t.format] || we.default;
            window.clipboardData.setData(w, e);
          } else
            a.clipboardData.clearData(), a.clipboardData.setData(t.format, e);
        t.onCopy && (a.preventDefault(), t.onCopy(a.clipboardData));
      }),
      document.body.appendChild(r),
      f.selectNodeContents(r),
      i.addRange(f);
    var h = document.execCommand("copy");
    if (!h) throw new Error("copy command was unsuccessful");
    n = !0;
  } catch (a) {
    s && console.error("unable to copy using execCommand: ", a),
      s && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e),
        t.onCopy && t.onCopy(window.clipboardData),
        (n = !0);
    } catch (w) {
      s && console.error("unable to copy using clipboardData: ", w),
        s && console.error("falling back to prompt"),
        (d = os("message" in t ? t.message : ns)),
        window.prompt(d, e);
    }
  } finally {
    i &&
      (typeof i.removeRange == "function"
        ? i.removeRange(f)
        : i.removeAllRanges()),
      r && document.body.removeChild(r),
      c();
  }
  return n;
}
var as = rs;
const is = pt(as),
  ls =
    "/assets/ethereum.png",
  cs = { class: "mt-[16px]" },
  ds = { class: "relative" },
  us = ["src"],
  fs = l(
    "div",
    {
      class:
        "w-[20px] absolute right-[-4px] bottom-[-8px] flex p-[2px] items-center justify-center rounded-[4px] bg-[#191919]",
    },
    [
      l(
        "div",
        {
          class:
            "p-[2px] items-center justify-center rounded-[4px] bg-[#163749]",
        },
        [l("img", { class: "size-full", src: ls })]
      ),
    ],
    -1
  ),
  hs = { class: "flex-1 w-[0px]" },
  ps = { class: "whitespace-nowrap text-ellipsis overflow-hidden w-full" },
  ms = {
    class:
      "whitespace-nowrap text-ellipsis overflow-hidden w-[80px] text-right",
  },
  gs = O({
    __name: "tokens",
    props: { priceUsd: { type: String, default: "0.0" } },
    setup(e) {
      const t = e,
        s = ne();
      $e();
      const d = {
          emc: {
            init: async (n) => {
              const h = n.account,
                a = n.token;
              if (!h) return ["0.0", "0.0"];
              const w = a.formatted,
                A = Number(w) * Number(t.priceUsd);
              return [X(w, 4), X(A, 4)];
            },
          },
          usdt: {
            init: async (n) => {
              const h = n.account,
                a = n.token;
              if (!h) return ["0.0", "0.0"];
              const w = a.formatted,
                A = Number(w) * 1;
              return [X(w, 4), X(A, 4)];
            },
          },
        },
        c = _([]),
        f = _(!1);
      async function i() {
        f.value = !0;
        const n = s.account0,
          a = { ...(await s.updateBalance(n)) },
          w = Object.entries(a).map(async ([S, k]) => {
            const E = d[S],
              y = a[S],
              $ = await E.init({ account: n, token: y });
            return { key: S, data: $ };
          }),
          A = await Promise.all(w);
        (c.value = A.map(({ key: S, data: k }) => {
          const E = a[S],
            [y, $] = k;
          return { ...E, formatted: y, amount: $ };
        })),
          console.info(c.value),
          (f.value = !1);
      }
      oe(() => {
        i();
      });
      function r(n) {
        console.info(n),
          mt.addToken({
            type: "ERC20",
            address: n.address,
            symbol: n.symbolName,
            decimals: n.decimal,
            image: n.icon,
          });
      }
      return (n, h) => (
        m(),
        N("div", cs, [
          f.value
            ? (m(),
              B(
                o(T),
                {
                  key: 0,
                  align: "center",
                  justify: "center",
                  vertical: "",
                  size: [0, 16],
                  "wrap-item": !1,
                  wrap: !1,
                  style: { height: "80px" },
                },
                { default: u(() => [v(o(ze))]), _: 1 }
              ))
            : (m(),
              B(
                o(T),
                {
                  key: 1,
                  vertical: "",
                  size: [0, 28],
                  "wrap-item": !1,
                  wrap: !1,
                },
                {
                  default: u(() => [
                    (m(!0),
                    N(
                      J,
                      null,
                      de(
                        c.value,
                        (a) => (
                          m(),
                          B(
                            o(T),
                            {
                              class: "cursor-pointer",
                              align: "center",
                              "wrap-item": !1,
                              wrap: !1,
                              size: [12, 0],
                              onClick: (w) => r(a),
                            },
                            {
                              default: u(() => [
                                l("div", ds, [
                                  l(
                                    "img",
                                    {
                                      class: "w-[40px] h-[40px] rounded-[40px]",
                                      src: a.icon,
                                    },
                                    null,
                                    8,
                                    us
                                  ),
                                  fs,
                                ]),
                                l("div", hs, [
                                  l("div", ps, [
                                    v(
                                      o(q),
                                      { class: "text-[16px] font-semibold" },
                                      {
                                        default: u(() => [
                                          L(
                                            M(a.formatted) + M(a.symbolName),
                                            1
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    ),
                                  ]),
                                  v(
                                    o(q),
                                    {
                                      class: "text-[12px] text-[#8A8A8A]",
                                      depth: "3",
                                    },
                                    {
                                      default: u(() => [L(M(a.name), 1)]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                ]),
                                l("div", ms, [
                                  v(
                                    o(q),
                                    {
                                      class:
                                        "text-[16px] font-semibold whitespace-nowrap",
                                    },
                                    {
                                      default: u(() => [
                                        L("$" + M(a.amount), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                ]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["onClick"]
                          )
                        )
                      ),
                      256
                    )),
                  ]),
                  _: 1,
                }
              )),
        ])
      );
    },
  }),
  vs = { class: "whitespace-nowrap text-ellipsis overflow-hidden" },
  bs = ["src"],
  ws = O({
    __name: "item",
    props: { nodeId: { type: String, default: "" } },
    emits: ["press"],
    setup(e, { emit: t }) {
      const s = e,
        d = t,
        c = Ae(),
        f = _(0n),
        i = _(!1);
      async function r() {
        i.value = !0;
        const { currentReward: h } = await wt(s.nodeId);
        (i.value = !1), (f.value = h);
      }
      function n() {
        c.push({ name: "node-detail", params: { id: s.nodeId } }), d("press");
      }
      return (
        oe(() => {
          r();
        }),
        (h, a) => (
          m(),
          B(
            o(vt),
            {
              class: "cursor-pointer",
              size: "small",
              "header-style": "padding:0;",
            },
            {
              default: u(() => [
                v(
                  o(T),
                  { align: "center", "wrap-item": !1, onClick: n },
                  {
                    default: u(() => [
                      v(
                        o(T),
                        { vertical: "", class: "flex-1", size: [0, 4] },
                        {
                          default: u(() => [
                            v(
                              o(T),
                              {
                                align: "center",
                                justify: "space-between",
                                "wrap-item": !1,
                                wrap: !1,
                                size: [8, 0],
                              },
                              {
                                default: u(() => [
                                  l("div", vs, [
                                    v(
                                      o(q),
                                      { class: "text-[14px]" },
                                      {
                                        default: u(() => [
                                          L(
                                            M(o(ue).formatAddress(e.nodeId, 6)),
                                            1
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                            i.value
                              ? (m(),
                                B(o(Re), { key: 0, width: 40, height: 12 }))
                              : (m(),
                                B(
                                  o(T),
                                  {
                                    key: 1,
                                    align: "center",
                                    "wrap-item": !1,
                                    wrap: !1,
                                    size: [4, 0],
                                  },
                                  {
                                    default: u(() => [
                                      l(
                                        "img",
                                        {
                                          class:
                                            "w-[16px] h-[16px] rounded-[16px]",
                                          src: o(gt),
                                        },
                                        null,
                                        8,
                                        bs
                                      ),
                                      v(
                                        o(q),
                                        { class: "text-[14px]" },
                                        {
                                          default: u(() => [
                                            L(
                                              M(
                                                o(X)(
                                                  o(Ct).formatUnits(f.value, 18)
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                )),
                          ]),
                          _: 1,
                        }
                      ),
                      v(
                        o(te),
                        { size: "16" },
                        { default: u(() => [v(o(Vt))]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  });
const ys = fe(ws, [["__scopeId", "data-v-0fc15309"]]),
  xs = O({
    __name: "index",
    emits: ["press-item"],
    setup(e, { emit: t }) {
      const s = t,
        d = ne(),
        c = _([]),
        f = _(!1);
      async function i() {
        const n = d.account0;
        f.value = !0;
        const h = await kt.get({
          url: "/nodesign/list",
          data: { owner: n, size: 50, page: 1 },
        });
        f.value = !1;
        const a = h.data || [];
        c.value = a.map((w) => w.nodeId);
      }
      oe(() => {
        i();
      });
      function r(n) {
        s("press-item", n);
      }
      return (n, h) => (
        m(),
        N("div", null, [
          f.value
            ? (m(),
              B(
                o(T),
                {
                  key: 0,
                  align: "center",
                  justify: "center",
                  vertical: "",
                  size: [0, 16],
                  "wrap-item": !1,
                  wrap: !1,
                  style: { height: "80px" },
                },
                { default: u(() => [v(o(ze))]), _: 1 }
              ))
            : (m(),
              B(
                o(T),
                {
                  key: 1,
                  vertical: "",
                  size: [0, 16],
                  "wrap-item": !1,
                  wrap: !1,
                },
                {
                  default: u(() => [
                    (m(!0),
                    N(
                      J,
                      null,
                      de(
                        c.value,
                        (a) => (
                          m(),
                          B(
                            ys,
                            { "node-id": a, onPress: () => r(a) },
                            null,
                            8,
                            ["node-id", "onPress"]
                          )
                        )
                      ),
                      256
                    )),
                  ]),
                  _: 1,
                }
              )),
        ])
      );
    },
  }),
  re = (e) => (Be("data-v-5aec6cf0"), (e = e()), Ee(), e),
  _s = { class: "wallet" },
  ks = { class: "text-[16px]" },
  Cs = re(() => l("img", { src: Zt, width: "12", height: "12" }, null, -1)),
  Ss = re(() => l("img", { src: Jt }, null, -1)),
  $s = { class: "wallet-dex px-[16px]" },
  zs = re(() =>
    l(
      "span",
      { class: "text-[16px] font-[400] text-[rgba(255,255,255,0.82)]" },
      "EMC/USDT",
      -1
    )
  ),
  As = { key: 1, class: "text-[36px] font-[600]" },
  Bs = re(() => l("img", { src: es }, null, -1)),
  Es = { class: "wallet-body px-[16px] mt-[40px] text-[16px]" },
  Rs = { class: "tab-title flex items-center gap-x-[20px]" },
  Ns = O({
    __name: "index",
    emits: ["close", "disconnect"],
    setup(e, { emit: t }) {
      const s = t,
        d = Ae(),
        c = ne(),
        f = $e(),
        i = _("0.0"),
        r = _({ priceUsd: !1 }),
        n = _("nodes"),
        h = (y) => {
          n.value = y;
        },
        a = (y) => {
          is(y), f.success("Copied");
        };
      function w() {
        window.open(
          "https://dexscreener.com/arbitrum/0x47b6de853d181626918eecb1e0ed946a5cf96449"
        );
      }
      function A() {
        d.push({ name: "cliffs-view" }), s("close");
      }
      async function S() {
        s("disconnect");
      }
      function k(y) {
        s("close");
      }
      async function E() {
        r.value.priceUsd = !0;
        const { priceUsd: y } = await yt();
        (r.value.priceUsd = !1), (i.value = X(y, 4));
      }
      return (
        oe(async () => {
          E();
        }),
        (y, $) => (
          m(),
          N("div", _s, [
            v(
              o(T),
              {
                class: "px-[16px] py-[12px]",
                align: "center",
                justify: "space-between",
                size: [0, 0],
                "wrap-item": !1,
                wrap: !1,
              },
              {
                default: u(() => [
                  v(
                    o(T),
                    {
                      class: "cursor-pointer",
                      align: "center",
                      justify: "space-between",
                      size: [4, 0],
                      "wrap-item": !1,
                      wrap: !1,
                      onClick: $[0] || ($[0] = (Y) => a(o(c).account0)),
                    },
                    {
                      default: u(() => [
                        l(
                          "span",
                          ks,
                          M(o(ue).formatAddress(o(c).account0, 5)),
                          1
                        ),
                        Cs,
                      ]),
                      _: 1,
                    }
                  ),
                  v(
                    o(Z),
                    { quaternary: "", circle: "", onClick: S },
                    {
                      icon: u(() => [
                        v(o(te), null, { default: u(() => [Ss]), _: 1 }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
            l("div", $s, [
              v(
                o(T),
                {
                  class: "mb-[8px]",
                  vertical: "",
                  align: "center",
                  justify: "center",
                  size: [0, 0],
                  "wrap-item": !1,
                  wrap: !1,
                },
                {
                  default: u(() => [
                    zs,
                    v(
                      o(T),
                      {
                        class: "h-[56px]",
                        vertical: "",
                        align: "center",
                        justify: "center",
                        size: [0, 0],
                        "wrap-item": !1,
                        wrap: !1,
                      },
                      {
                        default: u(() => [
                          r.value.priceUsd
                            ? (m(), B(o(Re), { key: 0, width: 40, height: 12 }))
                            : (m(), N("span", As, "$" + M(i.value), 1)),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              v(
                o(Z),
                {
                  type: "primary",
                  strong: "",
                  class: "w-full text-[16px] font-GeneralSans-Semibold",
                  "icon-placement": "right",
                  onClick: w,
                },
                {
                  icon: u(() => [
                    v(o(te), null, { default: u(() => [Bs]), _: 1 }),
                  ]),
                  default: u(() => [L("EMC DEX ")]),
                  _: 1,
                }
              ),
              v(
                o(Z),
                {
                  strong: "",
                  class: "w-full text-[16px]",
                  "icon-placement": "right",
                  onClick: A,
                },
                { default: u(() => [L("Staking Status")]), _: 1 }
              ),
            ]),
            l("div", Es, [
              l("div", Rs, [
                l(
                  "div",
                  {
                    class: ge([
                      "text-[#898B95] text-[16px] font-semibold cursor-pointer",
                      { "!text-[#fff]": n.value === "nodes" },
                    ]),
                    onClick: $[1] || ($[1] = (Y) => h("nodes")),
                  },
                  "Nodes",
                  2
                ),
                l(
                  "div",
                  {
                    class: ge([
                      "text-[#898B95] text-[16px] font-semibold cursor-pointer",
                      { "!text-[#fff]": n.value === "tokens" },
                    ]),
                    onClick: $[2] || ($[2] = (Y) => h("tokens")),
                  },
                  "Tokens",
                  2
                ),
              ]),
              !r.value.priceUsd && n.value === "nodes"
                ? (m(), B(xs, { key: 0, class: "pt-[20px]", onPressItem: k }))
                : ee("", !0),
              !r.value.priceUsd && n.value === "tokens"
                ? (m(),
                  B(
                    gs,
                    { key: 1, class: "pt-[20px]", "price-usd": i.value },
                    null,
                    8,
                    ["price-usd"]
                  ))
                : ee("", !0),
            ]),
          ])
        )
      );
    },
  });
const Is = fe(Ns, [["__scopeId", "data-v-5aec6cf0"]]),
  he = (e) => (Be("data-v-f1ad3182"), (e = e()), Ee(), e),
  Ts = { class: "header" },
  Us = { class: "header-content" },
  Ds = { class: "header-cell w-[232px]" },
  Ms = he(() => l("img", { class: "header-icon" }, null, -1)),
  Ps = { key: 0, class: "header-tabs flex-1 items-center justify-center" },
  Os = { class: "header-tabs-item" },
  Hs = {
    class:
      "header-tabs-item-text whitespace-nowrap px-[22.5px] rounded-lg font-GeneralSans-Semibold font-semibold hover:bg-[#1C1B21]",
  },
  js = { class: "header-cell sm:w-[232px] justify-end" },
  Fs = he(() =>
    l(
      "span",
      { class: "header-user-text xs:!text-[13px]" },
      "Connect Wallet",
      -1
    )
  ),
  Ws = [Fs],
  Ls = he(() =>
    l(
      "span",
      { class: "header-user-text xs:!text-[13px]" },
      "Network Error",
      -1
    )
  ),
  Ys = [Ls],
  Vs = { class: "header-user-text xs:!text-[13px]" },
  Xs = { class: "header-user-balance opacity-80" },
  qs = { class: "header-user-balance-text", style: { "margin-right": "4px" } },
  Ks = { class: "header-user-balance-unit" },
  ye = -1,
  Qs = O({
    __name: "index",
    setup(e) {
      const t = [
          { id: 1, label: "Home", key: "/home" },
          { id: 2, label: "Node", key: "/nodes" },
          { id: 3, label: "Staking", key: "/staking" },
        ],
        s = ne(),
        d = bt(),
        c = xt(),
        f = _(t),
        i = _(ye),
        r = j(() => (c.value ? "bottom" : "right")),
        n = _(!1);
      le(
        () => d.path,
        (k, E) => {
          const y = f.value.find(($) => $.key === k);
          i.value = (y == null ? void 0 : y.id) || ye;
        },
        { immediate: !0 }
      );
      async function h() {
        console.log(">>>>>>>>>>>1111"), s.signIn();
      }
      function a() {
        s.switchNetwork();
      }
      function w() {
        n.value = !0;
      }
      function A() {
        (n.value = !1), s.signOut();
      }
      function S() {
        n.value = !1;
      }
      return (k, E) => (
        m(),
        N("div", Ts, [
          l("div", Us, [
            l("div", Ds, [
              v(
                o(ie),
                { class: "p-[16px]", to: { path: "/" } },
                { default: u(() => [Ms]), _: 1 }
              ),
              o(c) ? (m(), B(Gt, { key: 0, configs: t })) : ee("", !0),
            ]),
            o(c)
              ? ee("", !0)
              : (m(),
                N("div", Ps, [
                  (m(!0),
                  N(
                    J,
                    null,
                    de(
                      f.value,
                      (y) => (
                        m(),
                        B(
                          o(ie),
                          {
                            to: { path: y.key },
                            style: {
                              "text-decoration": "none",
                              color: "inherit",
                            },
                          },
                          {
                            default: u(() => [
                              l("div", Os, [l("span", Hs, M(y.label), 1)]),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        )
                      )
                    ),
                    256
                  )),
                ])),
            l("div", js, [
              o(s).isConnected
                ? o(s).isInvalidNetwork
                  ? (m(),
                    N("div", { key: 1, class: "header-user", onClick: a }, Ys))
                  : (m(),
                    N(
                      J,
                      { key: 2 },
                      [
                        l("div", { class: "header-user", onClick: w }, [
                          l(
                            "span",
                            Vs,
                            M(o(ue).formatAddress(o(s).account0, 5)),
                            1
                          ),
                          l("div", Xs, [
                            l(
                              "span",
                              qs,
                              "(" + M(o(s).tokens.emc.short || 0) + ")",
                              1
                            ),
                            l("span", Ks, M(o(s).tokens.emc.symbolName), 1),
                          ]),
                        ]),
                        v(
                          o(Ht),
                          {
                            show: n.value,
                            "onUpdate:show":
                              E[0] || (E[0] = (y) => (n.value = y)),
                            "auto-focus": !1,
                            width: 400,
                            height: "88%",
                            placement: r.value,
                            style: { "background-color": "transparent" },
                          },
                          {
                            default: u(() => [
                              v(
                                o(Ft),
                                { "body-content-style": "padding:8px;" },
                                {
                                  default: u(() => [
                                    v(Is, { onClose: S, onDisconnect: A }),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["show", "placement"]
                        ),
                      ],
                      64
                    ))
                : (m(),
                  N(
                    "div",
                    { key: 0, class: "header-user xs:!h-[40px]", onClick: h },
                    Ws
                  )),
            ]),
          ]),
        ])
      );
    },
  });
const rn = fe(Qs, [["__scopeId", "data-v-f1ad3182"]]);
export { rn as H };
