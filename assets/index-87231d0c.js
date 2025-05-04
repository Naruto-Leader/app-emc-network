import {
  ag as m,
  am as l,
  aC as s,
  ay as a,
  aM as e,
  aG as E,
  c8 as S,
  aX as v,
  aY as h,
  ax as u,
  az as n,
  aT as F,
  c9 as y,
  an as N,
  ca as K,
  aF as d,
  aA as g,
  aB as R,
  cb as G,
  cc as j,
  cd as Q,
  c1 as X,
  aU as Y,
  aj as k,
} from "./index-45cc9017.js";
import { _ as z, a as H } from "./home-right-5decabd8.js";
import { H as J } from "./index-5aa018c5.js";
import "./index-034b9e72.js";
import "./format-number-243ea052.js";
import "./text-d64a6c33.js";
import "./use-merged-state-864545a8.js";
import "./Dropdown-d2794922.js";
import "./Popover-b1cb2cfb.js";
import "./use-keyboard-d337ca82.js";
import "./create-957127bb.js";
import "./create-ref-setter-f485918b.js";
import "./Space-9186740e.js";
import "./ethers-a5384a4b.js";
const M =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG4SURBVHgB7ZVLK0VRFIDXQd6vvBIDSlGSxEAmMhFlYsTESBhiqgyYKaVEYuIHKAPyKFGMkCFlICSJkry5Idu3u6ucuG7ua3a/+rrds9deaz/O3kckSpQAcXw9NMZk+nj86TjOg/jB1c9DrEf+Cx278fSHB1jtp08znmhsuwQCHZJxzXjZwxl8wB3M8hFfq+2WUQkGOpbgJV5jEXbgJ45jgiuuUmdlmcY0CRY6N+jIN20RnNCiPdqej8dabB2TJFRI0qdFpjAdt/EF63UgRvc3WcIBiWJxDh91WcvxHF+12BmWSTixrzvu440WbNNZe7BOIgGJq/BO39RsnNWiXRIp7Muiy7iIGbiKz/ZYSLghaS5umW96sRgv8AjzJFyQLA6XtdCxLqtd3jpsxXtcsXESKiRxcFL3yy5fje7hrR6HHBzTwQxIqJCkX5PZC6DR9bwFP3ABU3Q/n7BJgoXOnVrszZ7BH20xOKjtw1hgvFfhFZZKoOgM3nUph/6IScUlHdA8HuoANkwgNw/BFbhrvJfyiJ2Nn9hCV6zbbl/xf32AE/lJ1L9PfEw/xP8A7WzifyV3nDuJEiVUvgCymnNNVTxPtQAAAABJRU5ErkJggg==",
  O =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgB7ZW9SwMxGIfTUj9BFKpC/cDBQQcXoYKi4FAQLbi4iJubk4KrkwgO/hUuzuIgDmLRRaFD6aAIDtbFKjgIWrUg2viEpvSIKb1+0OkeeLgjv7x5j1y4E8LDw6NRSClbcRq3MIaz2I5d2kJ+gds4iS2iFlhgCpP4K4vc4zU+6HuVPzvyH4yrhxHVQGGTXrRaEmoNUSkUrcvaWSu1vq9EUz+XFA6J2njEYZ/P920G/hIF0To0VQzggi0o1XjRMpbBOL5Ysixe6jkm88ItbHXaeFcZHNNZCJ8cmTrRIzobxXejNu22achySK6MOfuO7MDIYpb6oNnHttX9lrFuqT8KXANc+hxZ0NG02cgKDIpyUByxPLH6gOziOG5izpF94I7O9qSdiJvGUVl//p1s21ZnLWOfmBPlUXO+3KwZsExK4inOGWOHGMKwyJ8D9W7Vg7/hHSbwFZdxQtdJPMFb4QaZ/+Ns4I1ju85k8YB1YK+2E/3YhueO+SlcVWuJSpH5394KHmPYxfwZPMIl7BEeHh6N4A/TWKIdNNrLZQAAAABJRU5ErkJggg==",
  T =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgB7ZXNKwRhGMCfWcpXSm1c1teBtrQHJ8lJuYg/gLtyUaJcpOQmN0q5OLjioOTgKi5K4oDaEw5KSpGPA/bxm2bKNM2s2fViD/OrXzPz7vM+z77P++6sSExMTCmjqtXYgwt4jCn5TSjQhFO4jzn9oldMQ9IqOzGu4a0G0ygmIJGFGZzDK/zwFNnGDc/zjR0vP4EEdTiEO/jsW9U1juI4vnjGN6VYmNyJq5j17Z26z0vY7Hbg3ff5TKHFanAMD/BBg7HbOIgVuBzQBZv+qAWTuOJrl59Xd3WV6rR/PSTOXn1t1MKt6uxXGHvY5enKbp7YrBQCExLq7OssHuKTOqd3Ut0TyjWFJ5qfLSkWJpdhWj1vH+7b3S/yHRNiCpK14aVGIxOWJyGFk8aWCHGPeC4GC9d77u8wFxJ3YVlWzmThpHs9w26cxvuAuCMxCfs2757mBs9YB5769ndYTELCPkwGjNv/wYvqvDTe7F+C/CUUHMARLJeYmP/gE15Ru/wa4V3cAAAAAElFTkSuQmCC",
  V =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGNSURBVHgB7ZS/SgNBEMb3zhNRK7FIJ8qpICrWIqS3FwWxsfEdfAB7H8DOwkKxsvEJFAIhhShYCAkiROMfEgwnyTl+w+3h3mX3ctfvBz824Zu52b2bWSGsrKxSckwGEXlYNsAamARNcAeqjuP0DTkzWAL4r6KIkLgJKiCkpH7AFVhIxTvgCLyDZ7CjeD6Yzyq2D3qUrQ6YU3K2Uv53vCmsl+DUVGw5R7FYNTAGRsGtxj+Wz6yDBsfpCl5QfvHrPpCb7Gr8utxMH3yBaa7hKcVKWMoiv1ywLaJmGtf43EA+GAETcYyrBMyCKVFM/J1KGf6iXD1ZOFGQWz0UxeQO8SkroQE+RTHdg5bB+wWP8jcfppcoiGF9w1IRxXQOHkBb4/EBnkT01gLQHYhA46waOk6nKnceRUOvG4sT+cwX2bGedssUDX44pFiTN6fk7Kb8Fv0P/hmZBl95QJn0V1sAroGfiudTHoK2PM2e4i2Blfh/1uXNF/a6iFqbx+UD3OBb1zJy+LrrIMbUSFZWVoP6Azk9PHvJeM8qAAAAAElFTkSuQmCC",
  W =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgB7ZXhDYIwEIVfjAMwQkdgA3EDN9ANdAPcgBFwA0dgBNkANtANzmuoEYFCr8U/ype8kB70Xo+mV2DhpyGijHVn5SzVikd6rJ+d2JlVsQr4oCfSJzezABqIV+2ALed6wvPRGceW72zxHivIDF2pIcXsUQjpUN6xCo8II4HQ0HlfJPOn9jCECELDGmGUEBqW+IKhFdM5KvJHQQpPij1NU6lR+lohNecxdzDWLa9gbSCFJ+1MgqQTP1jMMoTCSU6mKtWKXW3lYQ7o/RsLam4ECjWcOvhb1gXNIdbybeZ+UP9+nL3C2XE25CJ0M1Yj7/dY+Auef1f5cGw/JgUAAAAASUVORK5CYII=",
  U = (A) => (v("data-v-1781625b"), (A = A()), h(), A),
  D = { class: "footer" },
  L = { class: "footer-content" },
  P = U(() =>
    e(
      "div",
      { class: "footer-cell" },
      [
        e("img", { class: "footer-logo" }),
        e(
          "div",
          { class: "footer-text" },
          " 2023-2024 EMC FOUNDATION. All Rights Reserved. "
        ),
      ],
      -1
    )
  ),
  Z = {
    class: "footer-cell",
    align: "center",
    size: [16, 0],
    "wrap-item": !1,
    wrap: !1,
  },
  q = { class: "footer-socials" },
  $ = U(() =>
    e(
      "div",
      {
        className:
          "w-full h-full rounded-3xl absolute top-0 left-0 z-10 bg-iconHoverBg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
      },
      null,
      -1
    )
  ),
  ee = ["href"],
  Ae = ["src"],
  oe = m({
    __name: "index",
    setup(A) {
      const t = l([
        { name: "twitter", url: "https://twitter.com/EMCprotocol", imgUrl: M },
        {
          name: "discord",
          url: "https://discord.com/invite/emcnetwork",
          imgUrl: O,
        },
        { name: "telegram", url: "https://t.me/emc_network", imgUrl: T },
        { name: "medium", url: "https://medium.com/@EMCProtocol", imgUrl: V },
        {
          name: "github",
          url: "https://github.com/EMCProtocol-dev",
          imgUrl: W,
        },
      ]);
      return (c, p) => (
        s(),
        a("div", D, [
          e("div", L, [
            P,
            e("div", Z, [
              e("div", q, [
                (s(!0),
                a(
                  E,
                  null,
                  S(
                    t.value,
                    (r, i) => (
                      s(),
                      a(
                        "div",
                        {
                          key: r.name,
                          class:
                            "size-[48px] xs:size-[40px] relative group flex items-center justify-center cursor-pointer border border-solid border-[#FFFFFF1A] rounded-3xl",
                        },
                        [
                          $,
                          e(
                            "a",
                            { href: r.url, target: "_blank" },
                            [
                              e(
                                "img",
                                {
                                  class:
                                    "size-[28px] xs:size-[20px] relative z-20",
                                  src: r.imgUrl,
                                },
                                null,
                                8,
                                Ae
                              ),
                            ],
                            8,
                            ee
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
          ]),
        ])
      );
    },
  });
const se = u(oe, [["__scopeId", "data-v-1781625b"]]);
const te = {},
  ae = (A) => (v("data-v-e7759b84"), (A = A()), h(), A),
  ce = { class: "bg-top" },
  ne = ae(() => e("div", { class: "bg-top-overlay" }, null, -1)),
  re = [ne];
function ie(A, t) {
  return s(), a("div", ce, re);
}
const de = u(te, [
    ["render", ie],
    ["__scopeId", "data-v-e7759b84"],
  ]),
  le = { class: "bg" },
  ue = m({
    __name: "index",
    setup(A) {
      return (t, c) => (
        s(), a("div", le, [n(de), F(t.$slots, "default", {}, void 0, !0)])
      );
    },
  });
const pe = u(ue, [["__scopeId", "data-v-12b1bd0e"]]),
  _e = (A) => (v("data-v-409a44d7"), (A = A()), h(), A),
  ge = { class: "layout" },
  me = _e(() =>
    e(
      "div",
      { class: "emc-top-bg fixed" },
      [
        e("img", { class: "w-[38%] h-auto emc-select-none", src: z, alt: "" }),
        e("img", { class: "w-[24%] h-auto emc-select-none", src: H, alt: "" }),
      ],
      -1
    )
  ),
  ve = { class: "n-body" },
  he = { key: 1, class: "loading" },
  Be = { class: "n-footer" },
  we = m({
    __name: "index",
    setup(A) {
      var w, f, x;
      const t = l(!1),
        c = l({ "background-color": "#10142200" }),
        p = l([]),
        i = (
          ((f = (w = y) == null ? void 0 : w.options) == null
            ? void 0
            : f.routes) || []
        ).find((o) => o.name === "layout");
      (x = i == null ? void 0 : i.children) == null ||
        x.forEach((o) => {
          var _;
          (_ = o == null ? void 0 : o.meta) != null &&
            _.keepAlive &&
            typeof (o == null ? void 0 : o.name) == "string" &&
            p.value.push(o.name);
        });
      function B() {
        window.scrollY > 80
          ? (c.value["background-color"] = "#030003")
          : (c.value["background-color"] = "#10142200");
      }
      return (
        N(async () => {
          (t.value = !0), window.addEventListener("scroll", B);
        }),
        K(() => {
          window.removeEventListener("scroll", B);
        }),
        (o, _) => {
          const C = R("router-view");
          return (
            s(),
            d(pe, null, {
              default: g(() => [
                e("div", ge, [
                  e(
                    "div",
                    {
                      class: "n-header",
                      style: G({ ...c.value, backgroundColor: "#030003" }),
                    },
                    [n(J)],
                    4
                  ),
                  me,
                  e("div", ve, [
                    t.value
                      ? (s(),
                        d(
                          C,
                          { key: 0 },
                          {
                            default: g(({ Component: b, route: I }) => [
                              n(
                                X,
                                { name: "slide-fade" },
                                {
                                  default: g(() => [
                                    (s(),
                                    d(
                                      j,
                                      { include: p.value },
                                      [(s(), d(Q(b), { key: I.fullPath }))],
                                      1032,
                                      ["include"]
                                    )),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                            ]),
                            _: 1,
                          }
                        ))
                      : (s(), a("div", he, [n(Y(k), { size: "large" })])),
                  ]),
                  e("div", Be, [n(se)]),
                ]),
              ]),
              _: 1,
            })
          );
        }
      );
    },
  });
const je = u(we, [["__scopeId", "data-v-409a44d7"]]);
export { je as default };
