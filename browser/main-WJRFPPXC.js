import { a as ss } from "./chunk-BAEIRRYO.js";
import { a as se, b as Ht, c as Zt, d as Jt } from "./chunk-GVGTCRAX.js";
import { c as is } from "./chunk-VDCYMWOT.js";
import { e as es, h as ts } from "./chunk-N4OE3BEA.js";
import {
  Aa as qt,
  B as Ft,
  Ba as Bt,
  C as Lt,
  Ca as Qt,
  D as It,
  Da as $t,
  Ea as we,
  G as xe,
  Ga as Vt,
  Ka as jt,
  N as be,
  O as Te,
  P as ae,
  a as ge,
  c as Dt,
  db as Ut,
  eb as xt,
  fb as Wt,
  g as kt,
  ga as We,
  gb as Gt,
  h as Ot,
  i as v,
  ib as S,
  j as te,
  jb as B,
  k as ye,
  kb as Yt,
  l as _e,
  lb as Ge,
  m as Se,
  mb as ie,
  n as Ee,
  nb as He,
  o as ve,
  oa as zt,
  ob as Ae,
  pa as Kt,
  qb as Xt,
  x as Rt,
  y as Ue,
} from "./chunk-SAXKXHZH.js";
var Pe = (() => {
  let e = class e {
    constructor() {
      this.isloading = new kt(!1);
    }
    show() {
      this.isloading.next(!0);
    }
    hide() {
      this.isloading.next(!1);
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)();
  }),
    (e.ɵprov = te({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let n = e;
  return n;
})();
var ns = (() => {
  let e = class e {};
  (e.ɵfac = function (i) {
    return new (i || e)();
  }),
    (e.ɵcmp = Ee({
      type: e,
      selectors: [["app-loader"]],
      decls: 12,
      vars: 0,
      consts: [
        [1, "page"],
        [1, "box", "page__box"],
        [1, "box__item", 2, "--box__item-nbr", "0"],
        [1, "box__item", 2, "--box__item-nbr", "1"],
        [1, "box__item", 2, "--box__item-nbr", "2"],
        [1, "box__item", 2, "--box__item-nbr", "3"],
        [1, "box__item", 2, "--box__item-nbr", "4"],
        [1, "box__item", 2, "--box__item-nbr", "5"],
        [1, "box__item", 2, "--box__item-nbr", "6"],
        [1, "box__item", 2, "--box__item-nbr", "7"],
        [1, "box__item", 2, "--box__item-nbr", "8"],
        [1, "box__item", 2, "--box__item-nbr", "9"],
      ],
      template: function (i, r) {
        i & 1 &&
          (be(0, "body", 0)(1, "div", 1),
          ae(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(
            7,
            "div",
            7
          )(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11),
          Te()());
      },
      styles: [
        "*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{margin:0;padding:0;box-sizing:border-box}.page[_ngcontent-%COMP%]{display:grid;min-height:100vh}.page__box[_ngcontent-%COMP%]{margin:auto}.box[_ngcontent-%COMP%]{position:relative;width:5em;aspect-ratio:1;overflow:hidden;border-radius:50%}.box__item[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_move,_ngcontent-%COMP%_color;animation-duration:1s,2s;animation-delay:calc(var(--box__item-nbr) * .1s);animation-timing-function:linear;animation-iteration-count:infinite;background:#00eafa;position:absolute;top:-100%;left:calc(var(--box__item-nbr) * .5em);height:100%;width:.5em}@keyframes _ngcontent-%COMP%_color{75%,to{background:#fa1000}}@keyframes _ngcontent-%COMP%_move{30%{top:0}40%{top:50%}to{top:100%}}",
      ],
    }));
  let n = e;
  return n;
})();
var rs = (n) => ({ "d-none": n }),
  os = (() => {
    let e = class e {
      constructor(s) {
        (this.LoaderSrev = s),
          (this.title = "LinkupAswan"),
          (this.isloading = !1),
          this.LoaderSrev.isloading.subscribe((i) => {
            this.isloading = i;
          });
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(Lt(Pe));
    }),
      (e.ɵcmp = Ee({
        type: e,
        selectors: [["app-root"]],
        decls: 3,
        vars: 6,
        consts: [[3, "ngClass"]],
        template: function (i, r) {
          i & 1 &&
            (be(0, "div", 0),
            ae(1, "router-outlet"),
            Te(),
            ae(2, "app-loader", 0)),
            i & 2 &&
              (xe("ngClass", We(2, rs, r.isloading == !0)),
              Ft(2),
              xe("ngClass", We(4, rs, r.isloading == !1)));
        },
        dependencies: [Kt, Vt, ns],
      }));
    let n = e;
    return n;
  })();
var as = [
  {
    path: "",
    component: se,
    loadChildren: () =>
      import("./chunk-K53X4ZJE.js").then((n) => n.SharedModule),
  },
  {
    path: "admin",
    component: ss,
    canActivate: [es],
    loadChildren: () =>
      import("./chunk-BXFSSWTY.js").then((n) => n.AdminModule),
  },
  {
    path: "driver",
    component: se,
    loadChildren: () =>
      import("./chunk-OFBXWTXD.js").then((n) => n.DriverModule),
  },
  {
    path: "tourist",
    component: se,
    loadChildren: () =>
      import("./chunk-Z3OV2KXD.js").then((n) => n.TouristModule),
  },
  {
    path: "hotel",
    component: se,
    loadChildren: () =>
      import("./chunk-XEC53YXH.js").then((n) => n.HotelModule),
  },
  {
    path: "tourguide",
    component: ts,
    loadChildren: () =>
      import("./chunk-ZR2F2VNQ.js").then((n) => n.TourguidModule),
  },
  {
    path: "apartment",
    component: se,
    loadChildren: () =>
      import("./chunk-JGBQZJIF.js").then((n) => n.ApartmentOwnerModule),
  },
  { path: "login/:url", component: Zt },
  { path: "register", component: Jt },
  { path: "**", component: Ht },
];
var ls = (n, e) => {
  let t = Se(Gt).getToken();
  if (t) {
    let s = n.headers.set("Authorization", `Bearer ${t}`),
      i = n.clone({ headers: s });
    return e(i);
  }
  return e(n);
};
var cs = (n, e) => {
  var t = Se(Pe);
  return (
    t.show(),
    e(n).pipe(
      Ot(() => {
        t.hide();
      })
    )
  );
};
function us(n) {
  return new v(3e3, !1);
}
function js() {
  return new v(3100, !1);
}
function Us() {
  return new v(3101, !1);
}
function xs(n) {
  return new v(3001, !1);
}
function Ws(n) {
  return new v(3003, !1);
}
function Gs(n) {
  return new v(3004, !1);
}
function Hs(n, e) {
  return new v(3005, !1);
}
function Ys() {
  return new v(3006, !1);
}
function Xs() {
  return new v(3007, !1);
}
function Zs(n, e) {
  return new v(3008, !1);
}
function Js(n) {
  return new v(3002, !1);
}
function ei(n, e, t, s, i) {
  return new v(3010, !1);
}
function ti() {
  return new v(3011, !1);
}
function si() {
  return new v(3012, !1);
}
function ii() {
  return new v(3200, !1);
}
function ni() {
  return new v(3202, !1);
}
function ri() {
  return new v(3013, !1);
}
function oi(n) {
  return new v(3014, !1);
}
function ai(n) {
  return new v(3015, !1);
}
function li(n) {
  return new v(3016, !1);
}
function ci(n, e) {
  return new v(3404, !1);
}
function ui(n) {
  return new v(3502, !1);
}
function hi(n) {
  return new v(3503, !1);
}
function di() {
  return new v(3300, !1);
}
function fi(n) {
  return new v(3504, !1);
}
function mi(n) {
  return new v(3301, !1);
}
function pi(n, e) {
  return new v(3302, !1);
}
function gi(n) {
  return new v(3303, !1);
}
function yi(n, e) {
  return new v(3400, !1);
}
function _i(n) {
  return new v(3401, !1);
}
function Si(n) {
  return new v(3402, !1);
}
function Ei(n, e) {
  return new v(3505, !1);
}
function j(n) {
  switch (n.length) {
    case 0:
      return new ie();
    case 1:
      return n[0];
    default:
      return new He(n);
  }
}
function ws(n, e, t = new Map(), s = new Map()) {
  let i = [],
    r = [],
    o = -1,
    a = null;
  if (
    (e.forEach((l) => {
      let c = l.get("offset"),
        h = c == o,
        u = (h && a) || new Map();
      l.forEach((_, y) => {
        let f = y,
          g = _;
        if (y !== "offset")
          switch (((f = n.normalizePropertyName(f, i)), g)) {
            case Ae:
              g = t.get(y);
              break;
            case B:
              g = s.get(y);
              break;
            default:
              g = n.normalizeStyleValue(y, f, g, i);
              break;
          }
        u.set(f, g);
      }),
        h || r.push(u),
        (a = u),
        (o = c);
    }),
    i.length)
  )
    throw ui(i);
  return r;
}
function _t(n, e, t, s) {
  switch (e) {
    case "start":
      n.onStart(() => s(t && Ye(t, "start", n)));
      break;
    case "done":
      n.onDone(() => s(t && Ye(t, "done", n)));
      break;
    case "destroy":
      n.onDestroy(() => s(t && Ye(t, "destroy", n)));
      break;
  }
}
function Ye(n, e, t) {
  let s = t.totalTime,
    i = !!t.disabled,
    r = St(
      n.element,
      n.triggerName,
      n.fromState,
      n.toState,
      e || n.phaseName,
      s ?? n.totalTime,
      i
    ),
    o = n._data;
  return o != null && (r._data = o), r;
}
function St(n, e, t, s, i = "", r = 0, o) {
  return {
    element: n,
    triggerName: e,
    fromState: t,
    toState: s,
    phaseName: i,
    totalTime: r,
    disabled: !!o,
  };
}
function F(n, e, t) {
  let s = n.get(e);
  return s || n.set(e, (s = t)), s;
}
function hs(n) {
  let e = n.indexOf(":"),
    t = n.substring(1, e),
    s = n.slice(e + 1);
  return [t, s];
}
var vi = typeof document > "u" ? null : document.documentElement;
function Et(n) {
  let e = n.parentNode || n.host || null;
  return e === vi ? null : e;
}
function bi(n) {
  return n.substring(1, 6) == "ebkit";
}
var G = null,
  ds = !1;
function Ti(n) {
  G || ((G = wi() || {}), (ds = G.style ? "WebkitAppearance" in G.style : !1));
  let e = !0;
  return (
    G.style &&
      !bi(n) &&
      ((e = n in G.style),
      !e &&
        ds &&
        (e = "Webkit" + n.charAt(0).toUpperCase() + n.slice(1) in G.style)),
    e
  );
}
function wi() {
  return typeof document < "u" ? document.body : null;
}
function As(n, e) {
  for (; e; ) {
    if (e === n) return !0;
    e = Et(e);
  }
  return !1;
}
function Ps(n, e, t) {
  if (t) return Array.from(n.querySelectorAll(e));
  let s = n.querySelector(e);
  return s ? [s] : [];
}
var vt = (() => {
    let e = class e {
      validateStyleProperty(s) {
        return Ti(s);
      }
      containsElement(s, i) {
        return As(s, i);
      }
      getParentElement(s) {
        return Et(s);
      }
      query(s, i, r) {
        return Ps(s, i, r);
      }
      computeStyle(s, i, r) {
        return r || "";
      }
      animate(s, i, r, o, a, l = [], c) {
        return new ie(r, o);
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)();
    }),
      (e.ɵprov = te({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  At = class At {};
At.NOOP = new vt();
var X = At,
  Z = class {};
var Ai = 1e3,
  Ms = "{{",
  Pi = "}}",
  Ns = "ng-enter",
  st = "ng-leave",
  Me = "ng-trigger",
  Oe = ".ng-trigger",
  fs = "ng-animating",
  it = ".ng-animating";
function $(n) {
  if (typeof n == "number") return n;
  let e = n.match(/^(-?[\.\d]+)(m?s)/);
  return !e || e.length < 2 ? 0 : nt(parseFloat(e[1]), e[2]);
}
function nt(n, e) {
  switch (e) {
    case "s":
      return n * Ai;
    default:
      return n;
  }
}
function Re(n, e, t) {
  return n.hasOwnProperty("duration") ? n : Mi(n, e, t);
}
function Mi(n, e, t) {
  let s =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    i,
    r = 0,
    o = "";
  if (typeof n == "string") {
    let a = n.match(s);
    if (a === null) return e.push(us(n)), { duration: 0, delay: 0, easing: "" };
    i = nt(parseFloat(a[1]), a[2]);
    let l = a[3];
    l != null && (r = nt(parseFloat(l), a[4]));
    let c = a[5];
    c && (o = c);
  } else i = n;
  if (!t) {
    let a = !1,
      l = e.length;
    i < 0 && (e.push(js()), (a = !0)),
      r < 0 && (e.push(Us()), (a = !0)),
      a && e.splice(l, 0, us(n));
  }
  return { duration: i, delay: r, easing: o };
}
function Ni(n) {
  return n.length
    ? n[0] instanceof Map
      ? n
      : n.map((e) => new Map(Object.entries(e)))
    : [];
}
function Q(n, e, t) {
  e.forEach((s, i) => {
    let r = bt(i);
    t && !t.has(i) && t.set(i, n.style[r]), (n.style[r] = s);
  });
}
function Y(n, e) {
  e.forEach((t, s) => {
    let i = bt(s);
    n.style[i] = "";
  });
}
function ce(n) {
  return Array.isArray(n) ? (n.length == 1 ? n[0] : Yt(n)) : n;
}
function Ci(n, e, t) {
  let s = e.params || {},
    i = Cs(n);
  i.length &&
    i.forEach((r) => {
      s.hasOwnProperty(r) || t.push(xs(r));
    });
}
var rt = new RegExp(`${Ms}\\s*(.+?)\\s*${Pi}`, "g");
function Cs(n) {
  let e = [];
  if (typeof n == "string") {
    let t;
    for (; (t = rt.exec(n)); ) e.push(t[1]);
    rt.lastIndex = 0;
  }
  return e;
}
function he(n, e, t) {
  let s = `${n}`,
    i = s.replace(rt, (r, o) => {
      let a = e[o];
      return a == null && (t.push(Ws(o)), (a = "")), a.toString();
    });
  return i == s ? n : i;
}
var Di = /-+([a-z0-9])/g;
function bt(n) {
  return n.replace(Di, (...e) => e[1].toUpperCase());
}
function ki(n, e) {
  return n === 0 || e === 0;
}
function Oi(n, e, t) {
  if (t.size && e.length) {
    let s = e[0],
      i = [];
    if (
      (t.forEach((r, o) => {
        s.has(o) || i.push(o), s.set(o, r);
      }),
      i.length)
    )
      for (let r = 1; r < e.length; r++) {
        let o = e[r];
        i.forEach((a) => o.set(a, Tt(n, a)));
      }
  }
  return e;
}
function R(n, e, t) {
  switch (e.type) {
    case S.Trigger:
      return n.visitTrigger(e, t);
    case S.State:
      return n.visitState(e, t);
    case S.Transition:
      return n.visitTransition(e, t);
    case S.Sequence:
      return n.visitSequence(e, t);
    case S.Group:
      return n.visitGroup(e, t);
    case S.Animate:
      return n.visitAnimate(e, t);
    case S.Keyframes:
      return n.visitKeyframes(e, t);
    case S.Style:
      return n.visitStyle(e, t);
    case S.Reference:
      return n.visitReference(e, t);
    case S.AnimateChild:
      return n.visitAnimateChild(e, t);
    case S.AnimateRef:
      return n.visitAnimateRef(e, t);
    case S.Query:
      return n.visitQuery(e, t);
    case S.Stagger:
      return n.visitStagger(e, t);
    default:
      throw Gs(e.type);
  }
}
function Tt(n, e) {
  return window.getComputedStyle(n)[e];
}
var Ri = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  Fe = class extends Z {
    normalizePropertyName(e, t) {
      return bt(e);
    }
    normalizeStyleValue(e, t, s, i) {
      let r = "",
        o = s.toString().trim();
      if (Ri.has(t) && s !== 0 && s !== "0")
        if (typeof s == "number") r = "px";
        else {
          let a = s.match(/^[+-]?[\d\.]+([a-z]*)$/);
          a && a[1].length == 0 && i.push(Hs(e, s));
        }
      return o + r;
    }
  };
var Le = "*";
function Fi(n, e) {
  let t = [];
  return (
    typeof n == "string"
      ? n.split(/\s*,\s*/).forEach((s) => Li(s, t, e))
      : t.push(n),
    t
  );
}
function Li(n, e, t) {
  if (n[0] == ":") {
    let l = Ii(n, t);
    if (typeof l == "function") {
      e.push(l);
      return;
    }
    n = l;
  }
  let s = n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (s == null || s.length < 4) return t.push(ai(n)), e;
  let i = s[1],
    r = s[2],
    o = s[3];
  e.push(ms(i, o));
  let a = i == Le && o == Le;
  r[0] == "<" && !a && e.push(ms(o, i));
}
function Ii(n, e) {
  switch (n) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (t, s) => parseFloat(s) > parseFloat(t);
    case ":decrement":
      return (t, s) => parseFloat(s) < parseFloat(t);
    default:
      return e.push(li(n)), "* => *";
  }
}
var Ne = new Set(["true", "1"]),
  Ce = new Set(["false", "0"]);
function ms(n, e) {
  let t = Ne.has(n) || Ce.has(n),
    s = Ne.has(e) || Ce.has(e);
  return (i, r) => {
    let o = n == Le || n == i,
      a = e == Le || e == r;
    return (
      !o && t && typeof i == "boolean" && (o = i ? Ne.has(n) : Ce.has(n)),
      !a && s && typeof r == "boolean" && (a = r ? Ne.has(e) : Ce.has(e)),
      o && a
    );
  };
}
var Ds = ":self",
  zi = new RegExp(`s*${Ds}s*,?`, "g");
function ks(n, e, t, s) {
  return new ot(n).build(e, t, s);
}
var ps = "",
  ot = class {
    constructor(e) {
      this._driver = e;
    }
    build(e, t, s) {
      let i = new at(t);
      return this._resetContextStyleTimingState(i), R(this, ce(e), i);
    }
    _resetContextStyleTimingState(e) {
      (e.currentQuerySelector = ps),
        (e.collectedStyles = new Map()),
        e.collectedStyles.set(ps, new Map()),
        (e.currentTime = 0);
    }
    visitTrigger(e, t) {
      let s = (t.queryCount = 0),
        i = (t.depCount = 0),
        r = [],
        o = [];
      return (
        e.name.charAt(0) == "@" && t.errors.push(Ys()),
        e.definitions.forEach((a) => {
          if ((this._resetContextStyleTimingState(t), a.type == S.State)) {
            let l = a,
              c = l.name;
            c
              .toString()
              .split(/\s*,\s*/)
              .forEach((h) => {
                (l.name = h), r.push(this.visitState(l, t));
              }),
              (l.name = c);
          } else if (a.type == S.Transition) {
            let l = this.visitTransition(a, t);
            (s += l.queryCount), (i += l.depCount), o.push(l);
          } else t.errors.push(Xs());
        }),
        {
          type: S.Trigger,
          name: e.name,
          states: r,
          transitions: o,
          queryCount: s,
          depCount: i,
          options: null,
        }
      );
    }
    visitState(e, t) {
      let s = this.visitStyle(e.styles, t),
        i = (e.options && e.options.params) || null;
      if (s.containsDynamicStyles) {
        let r = new Set(),
          o = i || {};
        s.styles.forEach((a) => {
          a instanceof Map &&
            a.forEach((l) => {
              Cs(l).forEach((c) => {
                o.hasOwnProperty(c) || r.add(c);
              });
            });
        }),
          r.size && t.errors.push(Zs(e.name, [...r.values()]));
      }
      return {
        type: S.State,
        name: e.name,
        style: s,
        options: i ? { params: i } : null,
      };
    }
    visitTransition(e, t) {
      (t.queryCount = 0), (t.depCount = 0);
      let s = R(this, ce(e.animation), t),
        i = Fi(e.expr, t.errors);
      return {
        type: S.Transition,
        matchers: i,
        animation: s,
        queryCount: t.queryCount,
        depCount: t.depCount,
        options: H(e.options),
      };
    }
    visitSequence(e, t) {
      return {
        type: S.Sequence,
        steps: e.steps.map((s) => R(this, s, t)),
        options: H(e.options),
      };
    }
    visitGroup(e, t) {
      let s = t.currentTime,
        i = 0,
        r = e.steps.map((o) => {
          t.currentTime = s;
          let a = R(this, o, t);
          return (i = Math.max(i, t.currentTime)), a;
        });
      return (
        (t.currentTime = i), { type: S.Group, steps: r, options: H(e.options) }
      );
    }
    visitAnimate(e, t) {
      let s = Qi(e.timings, t.errors);
      t.currentAnimateTimings = s;
      let i,
        r = e.styles ? e.styles : Ge({});
      if (r.type == S.Keyframes) i = this.visitKeyframes(r, t);
      else {
        let o = e.styles,
          a = !1;
        if (!o) {
          a = !0;
          let c = {};
          s.easing && (c.easing = s.easing), (o = Ge(c));
        }
        t.currentTime += s.duration + s.delay;
        let l = this.visitStyle(o, t);
        (l.isEmptyStep = a), (i = l);
      }
      return (
        (t.currentAnimateTimings = null),
        { type: S.Animate, timings: s, style: i, options: null }
      );
    }
    visitStyle(e, t) {
      let s = this._makeStyleAst(e, t);
      return this._validateStyleAst(s, t), s;
    }
    _makeStyleAst(e, t) {
      let s = [],
        i = Array.isArray(e.styles) ? e.styles : [e.styles];
      for (let a of i)
        typeof a == "string"
          ? a === B
            ? s.push(a)
            : t.errors.push(Js(a))
          : s.push(new Map(Object.entries(a)));
      let r = !1,
        o = null;
      return (
        s.forEach((a) => {
          if (
            a instanceof Map &&
            (a.has("easing") && ((o = a.get("easing")), a.delete("easing")), !r)
          ) {
            for (let l of a.values())
              if (l.toString().indexOf(Ms) >= 0) {
                r = !0;
                break;
              }
          }
        }),
        {
          type: S.Style,
          styles: s,
          easing: o,
          offset: e.offset,
          containsDynamicStyles: r,
          options: null,
        }
      );
    }
    _validateStyleAst(e, t) {
      let s = t.currentAnimateTimings,
        i = t.currentTime,
        r = t.currentTime;
      s && r > 0 && (r -= s.duration + s.delay),
        e.styles.forEach((o) => {
          typeof o != "string" &&
            o.forEach((a, l) => {
              let c = t.collectedStyles.get(t.currentQuerySelector),
                h = c.get(l),
                u = !0;
              h &&
                (r != i &&
                  r >= h.startTime &&
                  i <= h.endTime &&
                  (t.errors.push(ei(l, h.startTime, h.endTime, r, i)),
                  (u = !1)),
                (r = h.startTime)),
                u && c.set(l, { startTime: r, endTime: i }),
                t.options && Ci(a, t.options, t.errors);
            });
        });
    }
    visitKeyframes(e, t) {
      let s = { type: S.Keyframes, styles: [], options: null };
      if (!t.currentAnimateTimings) return t.errors.push(ti()), s;
      let i = 1,
        r = 0,
        o = [],
        a = !1,
        l = !1,
        c = 0,
        h = e.steps.map((w) => {
          let A = this._makeStyleAst(w, t),
            C = A.offset != null ? A.offset : Bi(A.styles),
            M = 0;
          return (
            C != null && (r++, (M = A.offset = C)),
            (l = l || M < 0 || M > 1),
            (a = a || M < c),
            (c = M),
            o.push(M),
            A
          );
        });
      l && t.errors.push(si()), a && t.errors.push(ii());
      let u = e.steps.length,
        _ = 0;
      r > 0 && r < u ? t.errors.push(ni()) : r == 0 && (_ = i / (u - 1));
      let y = u - 1,
        f = t.currentTime,
        g = t.currentAnimateTimings,
        b = g.duration;
      return (
        h.forEach((w, A) => {
          let C = _ > 0 ? (A == y ? 1 : _ * A) : o[A],
            M = C * b;
          (t.currentTime = f + g.delay + M),
            (g.duration = M),
            this._validateStyleAst(w, t),
            (w.offset = C),
            s.styles.push(w);
        }),
        s
      );
    }
    visitReference(e, t) {
      return {
        type: S.Reference,
        animation: R(this, ce(e.animation), t),
        options: H(e.options),
      };
    }
    visitAnimateChild(e, t) {
      return t.depCount++, { type: S.AnimateChild, options: H(e.options) };
    }
    visitAnimateRef(e, t) {
      return {
        type: S.AnimateRef,
        animation: this.visitReference(e.animation, t),
        options: H(e.options),
      };
    }
    visitQuery(e, t) {
      let s = t.currentQuerySelector,
        i = e.options || {};
      t.queryCount++, (t.currentQuery = e);
      let [r, o] = Ki(e.selector);
      (t.currentQuerySelector = s.length ? s + " " + r : r),
        F(t.collectedStyles, t.currentQuerySelector, new Map());
      let a = R(this, ce(e.animation), t);
      return (
        (t.currentQuery = null),
        (t.currentQuerySelector = s),
        {
          type: S.Query,
          selector: r,
          limit: i.limit || 0,
          optional: !!i.optional,
          includeSelf: o,
          animation: a,
          originalSelector: e.selector,
          options: H(e.options),
        }
      );
    }
    visitStagger(e, t) {
      t.currentQuery || t.errors.push(ri());
      let s =
        e.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : Re(e.timings, t.errors, !0);
      return {
        type: S.Stagger,
        animation: R(this, ce(e.animation), t),
        timings: s,
        options: null,
      };
    }
  };
function Ki(n) {
  let e = !!n.split(/\s*,\s*/).find((t) => t == Ds);
  return (
    e && (n = n.replace(zi, "")),
    (n = n
      .replace(/@\*/g, Oe)
      .replace(/@\w+/g, (t) => Oe + "-" + t.slice(1))
      .replace(/:animating/g, it)),
    [n, e]
  );
}
function qi(n) {
  return n ? ge({}, n) : null;
}
var at = class {
  constructor(e) {
    (this.errors = e),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function Bi(n) {
  if (typeof n == "string") return null;
  let e = null;
  if (Array.isArray(n))
    n.forEach((t) => {
      if (t instanceof Map && t.has("offset")) {
        let s = t;
        (e = parseFloat(s.get("offset"))), s.delete("offset");
      }
    });
  else if (n instanceof Map && n.has("offset")) {
    let t = n;
    (e = parseFloat(t.get("offset"))), t.delete("offset");
  }
  return e;
}
function Qi(n, e) {
  if (n.hasOwnProperty("duration")) return n;
  if (typeof n == "number") {
    let r = Re(n, e).duration;
    return Xe(r, 0, "");
  }
  let t = n;
  if (t.split(/\s+/).some((r) => r.charAt(0) == "{" && r.charAt(1) == "{")) {
    let r = Xe(0, 0, "");
    return (r.dynamic = !0), (r.strValue = t), r;
  }
  let i = Re(t, e);
  return Xe(i.duration, i.delay, i.easing);
}
function H(n) {
  return (
    n ? ((n = ge({}, n)), n.params && (n.params = qi(n.params))) : (n = {}), n
  );
}
function Xe(n, e, t) {
  return { duration: n, delay: e, easing: t };
}
function wt(n, e, t, s, i, r, o = null, a = !1) {
  return {
    type: 1,
    element: n,
    keyframes: e,
    preStyleProps: t,
    postStyleProps: s,
    duration: i,
    delay: r,
    totalTime: i + r,
    easing: o,
    subTimeline: a,
  };
}
var de = class {
    constructor() {
      this._map = new Map();
    }
    get(e) {
      return this._map.get(e) || [];
    }
    append(e, t) {
      let s = this._map.get(e);
      s || this._map.set(e, (s = [])), s.push(...t);
    }
    has(e) {
      return this._map.has(e);
    }
    clear() {
      this._map.clear();
    }
  },
  $i = 1,
  Vi = ":enter",
  ji = new RegExp(Vi, "g"),
  Ui = ":leave",
  xi = new RegExp(Ui, "g");
function Os(n, e, t, s, i, r = new Map(), o = new Map(), a, l, c = []) {
  return new lt().buildKeyframes(n, e, t, s, i, r, o, a, l, c);
}
var lt = class {
    buildKeyframes(e, t, s, i, r, o, a, l, c, h = []) {
      c = c || new de();
      let u = new ct(e, t, c, i, r, h, []);
      u.options = l;
      let _ = l.delay ? $(l.delay) : 0;
      u.currentTimeline.delayNextStep(_),
        u.currentTimeline.setStyles([o], null, u.errors, l),
        R(this, s, u);
      let y = u.timelines.filter((f) => f.containsAnimation());
      if (y.length && a.size) {
        let f;
        for (let g = y.length - 1; g >= 0; g--) {
          let b = y[g];
          if (b.element === t) {
            f = b;
            break;
          }
        }
        f &&
          !f.allowOnlyTimelineStyles() &&
          f.setStyles([a], null, u.errors, l);
      }
      return y.length
        ? y.map((f) => f.buildKeyframes())
        : [wt(t, [], [], [], 0, _, "", !1)];
    }
    visitTrigger(e, t) {}
    visitState(e, t) {}
    visitTransition(e, t) {}
    visitAnimateChild(e, t) {
      let s = t.subInstructions.get(t.element);
      if (s) {
        let i = t.createSubContext(e.options),
          r = t.currentTimeline.currentTime,
          o = this._visitSubInstructions(s, i, i.options);
        r != o && t.transformIntoNewTimeline(o);
      }
      t.previousNode = e;
    }
    visitAnimateRef(e, t) {
      let s = t.createSubContext(e.options);
      s.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([e.options, e.animation.options], t, s),
        this.visitReference(e.animation, s),
        t.transformIntoNewTimeline(s.currentTimeline.currentTime),
        (t.previousNode = e);
    }
    _applyAnimationRefDelays(e, t, s) {
      for (let i of e) {
        let r = i?.delay;
        if (r) {
          let o =
            typeof r == "number" ? r : $(he(r, i?.params ?? {}, t.errors));
          s.delayNextStep(o);
        }
      }
    }
    _visitSubInstructions(e, t, s) {
      let r = t.currentTimeline.currentTime,
        o = s.duration != null ? $(s.duration) : null,
        a = s.delay != null ? $(s.delay) : null;
      return (
        o !== 0 &&
          e.forEach((l) => {
            let c = t.appendInstructionToTimeline(l, o, a);
            r = Math.max(r, c.duration + c.delay);
          }),
        r
      );
    }
    visitReference(e, t) {
      t.updateOptions(e.options, !0),
        R(this, e.animation, t),
        (t.previousNode = e);
    }
    visitSequence(e, t) {
      let s = t.subContextCount,
        i = t,
        r = e.options;
      if (
        r &&
        (r.params || r.delay) &&
        ((i = t.createSubContext(r)),
        i.transformIntoNewTimeline(),
        r.delay != null)
      ) {
        i.previousNode.type == S.Style &&
          (i.currentTimeline.snapshotCurrentStyles(), (i.previousNode = Ie));
        let o = $(r.delay);
        i.delayNextStep(o);
      }
      e.steps.length &&
        (e.steps.forEach((o) => R(this, o, i)),
        i.currentTimeline.applyStylesToKeyframe(),
        i.subContextCount > s && i.transformIntoNewTimeline()),
        (t.previousNode = e);
    }
    visitGroup(e, t) {
      let s = [],
        i = t.currentTimeline.currentTime,
        r = e.options && e.options.delay ? $(e.options.delay) : 0;
      e.steps.forEach((o) => {
        let a = t.createSubContext(e.options);
        r && a.delayNextStep(r),
          R(this, o, a),
          (i = Math.max(i, a.currentTimeline.currentTime)),
          s.push(a.currentTimeline);
      }),
        s.forEach((o) => t.currentTimeline.mergeTimelineCollectedStyles(o)),
        t.transformIntoNewTimeline(i),
        (t.previousNode = e);
    }
    _visitTiming(e, t) {
      if (e.dynamic) {
        let s = e.strValue,
          i = t.params ? he(s, t.params, t.errors) : s;
        return Re(i, t.errors);
      } else return { duration: e.duration, delay: e.delay, easing: e.easing };
    }
    visitAnimate(e, t) {
      let s = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
        i = t.currentTimeline;
      s.delay && (t.incrementTime(s.delay), i.snapshotCurrentStyles());
      let r = e.style;
      r.type == S.Keyframes
        ? this.visitKeyframes(r, t)
        : (t.incrementTime(s.duration),
          this.visitStyle(r, t),
          i.applyStylesToKeyframe()),
        (t.currentAnimateTimings = null),
        (t.previousNode = e);
    }
    visitStyle(e, t) {
      let s = t.currentTimeline,
        i = t.currentAnimateTimings;
      !i && s.hasCurrentStyleProperties() && s.forwardFrame();
      let r = (i && i.easing) || e.easing;
      e.isEmptyStep
        ? s.applyEmptyStep(r)
        : s.setStyles(e.styles, r, t.errors, t.options),
        (t.previousNode = e);
    }
    visitKeyframes(e, t) {
      let s = t.currentAnimateTimings,
        i = t.currentTimeline.duration,
        r = s.duration,
        a = t.createSubContext().currentTimeline;
      (a.easing = s.easing),
        e.styles.forEach((l) => {
          let c = l.offset || 0;
          a.forwardTime(c * r),
            a.setStyles(l.styles, l.easing, t.errors, t.options),
            a.applyStylesToKeyframe();
        }),
        t.currentTimeline.mergeTimelineCollectedStyles(a),
        t.transformIntoNewTimeline(i + r),
        (t.previousNode = e);
    }
    visitQuery(e, t) {
      let s = t.currentTimeline.currentTime,
        i = e.options || {},
        r = i.delay ? $(i.delay) : 0;
      r &&
        (t.previousNode.type === S.Style ||
          (s == 0 && t.currentTimeline.hasCurrentStyleProperties())) &&
        (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = Ie));
      let o = s,
        a = t.invokeQuery(
          e.selector,
          e.originalSelector,
          e.limit,
          e.includeSelf,
          !!i.optional,
          t.errors
        );
      t.currentQueryTotal = a.length;
      let l = null;
      a.forEach((c, h) => {
        t.currentQueryIndex = h;
        let u = t.createSubContext(e.options, c);
        r && u.delayNextStep(r),
          c === t.element && (l = u.currentTimeline),
          R(this, e.animation, u),
          u.currentTimeline.applyStylesToKeyframe();
        let _ = u.currentTimeline.currentTime;
        o = Math.max(o, _);
      }),
        (t.currentQueryIndex = 0),
        (t.currentQueryTotal = 0),
        t.transformIntoNewTimeline(o),
        l &&
          (t.currentTimeline.mergeTimelineCollectedStyles(l),
          t.currentTimeline.snapshotCurrentStyles()),
        (t.previousNode = e);
    }
    visitStagger(e, t) {
      let s = t.parentContext,
        i = t.currentTimeline,
        r = e.timings,
        o = Math.abs(r.duration),
        a = o * (t.currentQueryTotal - 1),
        l = o * t.currentQueryIndex;
      switch (r.duration < 0 ? "reverse" : r.easing) {
        case "reverse":
          l = a - l;
          break;
        case "full":
          l = s.currentStaggerTime;
          break;
      }
      let h = t.currentTimeline;
      l && h.delayNextStep(l);
      let u = h.currentTime;
      R(this, e.animation, t),
        (t.previousNode = e),
        (s.currentStaggerTime =
          i.currentTime - u + (i.startTime - s.currentTimeline.startTime));
    }
  },
  Ie = {},
  ct = class n {
    constructor(e, t, s, i, r, o, a, l) {
      (this._driver = e),
        (this.element = t),
        (this.subInstructions = s),
        (this._enterClassName = i),
        (this._leaveClassName = r),
        (this.errors = o),
        (this.timelines = a),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = Ie),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = l || new ze(this._driver, t, 0)),
        a.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(e, t) {
      if (!e) return;
      let s = e,
        i = this.options;
      s.duration != null && (i.duration = $(s.duration)),
        s.delay != null && (i.delay = $(s.delay));
      let r = s.params;
      if (r) {
        let o = i.params;
        o || (o = this.options.params = {}),
          Object.keys(r).forEach((a) => {
            (!t || !o.hasOwnProperty(a)) && (o[a] = he(r[a], o, this.errors));
          });
      }
    }
    _copyOptions() {
      let e = {};
      if (this.options) {
        let t = this.options.params;
        if (t) {
          let s = (e.params = {});
          Object.keys(t).forEach((i) => {
            s[i] = t[i];
          });
        }
      }
      return e;
    }
    createSubContext(e = null, t, s) {
      let i = t || this.element,
        r = new n(
          this._driver,
          i,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(i, s || 0)
        );
      return (
        (r.previousNode = this.previousNode),
        (r.currentAnimateTimings = this.currentAnimateTimings),
        (r.options = this._copyOptions()),
        r.updateOptions(e),
        (r.currentQueryIndex = this.currentQueryIndex),
        (r.currentQueryTotal = this.currentQueryTotal),
        (r.parentContext = this),
        this.subContextCount++,
        r
      );
    }
    transformIntoNewTimeline(e) {
      return (
        (this.previousNode = Ie),
        (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(e, t, s) {
      let i = {
          duration: t ?? e.duration,
          delay: this.currentTimeline.currentTime + (s ?? 0) + e.delay,
          easing: "",
        },
        r = new ut(
          this._driver,
          e.element,
          e.keyframes,
          e.preStyleProps,
          e.postStyleProps,
          i,
          e.stretchStartingKeyframe
        );
      return this.timelines.push(r), i;
    }
    incrementTime(e) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
    }
    delayNextStep(e) {
      e > 0 && this.currentTimeline.delayNextStep(e);
    }
    invokeQuery(e, t, s, i, r, o) {
      let a = [];
      if ((i && a.push(this.element), e.length > 0)) {
        (e = e.replace(ji, "." + this._enterClassName)),
          (e = e.replace(xi, "." + this._leaveClassName));
        let l = s != 1,
          c = this._driver.query(this.element, e, l);
        s !== 0 &&
          (c = s < 0 ? c.slice(c.length + s, c.length) : c.slice(0, s)),
          a.push(...c);
      }
      return !r && a.length == 0 && o.push(oi(t)), a;
    }
  },
  ze = class n {
    constructor(e, t, s, i) {
      (this._driver = e),
        (this.element = t),
        (this.startTime = s),
        (this._elementTimelineStylesLookup = i),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(t)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(t, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(e) {
      let t = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || t
        ? (this.forwardTime(this.currentTime + e),
          t && this.snapshotCurrentStyles())
        : (this.startTime += e);
    }
    fork(e, t) {
      return (
        this.applyStylesToKeyframe(),
        new n(
          this._driver,
          e,
          t || this.currentTime,
          this._elementTimelineStylesLookup
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += $i), this._loadKeyframe();
    }
    forwardTime(e) {
      this.applyStylesToKeyframe(), (this.duration = e), this._loadKeyframe();
    }
    _updateStyle(e, t) {
      this._localTimelineStyles.set(e, t),
        this._globalTimelineStyles.set(e, t),
        this._styleSummary.set(e, { time: this.currentTime, value: t });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(e) {
      e && this._previousKeyframe.set("easing", e);
      for (let [t, s] of this._globalTimelineStyles)
        this._backFill.set(t, s || B), this._currentKeyframe.set(t, B);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(e, t, s, i) {
      t && this._previousKeyframe.set("easing", t);
      let r = (i && i.params) || {},
        o = Wi(e, this._globalTimelineStyles);
      for (let [a, l] of o) {
        let c = he(l, r, s);
        this._pendingStyles.set(a, c),
          this._localTimelineStyles.has(a) ||
            this._backFill.set(a, this._globalTimelineStyles.get(a) ?? B),
          this._updateStyle(a, c);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((e, t) => {
          this._currentKeyframe.set(t, e);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((e, t) => {
          this._currentKeyframe.has(t) || this._currentKeyframe.set(t, e);
        }));
    }
    snapshotCurrentStyles() {
      for (let [e, t] of this._localTimelineStyles)
        this._pendingStyles.set(e, t), this._updateStyle(e, t);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let e = [];
      for (let t in this._currentKeyframe) e.push(t);
      return e;
    }
    mergeTimelineCollectedStyles(e) {
      e._styleSummary.forEach((t, s) => {
        let i = this._styleSummary.get(s);
        (!i || t.time > i.time) && this._updateStyle(s, t.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let e = new Set(),
        t = new Set(),
        s = this._keyframes.size === 1 && this.duration === 0,
        i = [];
      this._keyframes.forEach((a, l) => {
        let c = new Map([...this._backFill, ...a]);
        c.forEach((h, u) => {
          h === Ae ? e.add(u) : h === B && t.add(u);
        }),
          s || c.set("offset", l / this.duration),
          i.push(c);
      });
      let r = [...e.values()],
        o = [...t.values()];
      if (s) {
        let a = i[0],
          l = new Map(a);
        a.set("offset", 0), l.set("offset", 1), (i = [a, l]);
      }
      return wt(
        this.element,
        i,
        r,
        o,
        this.duration,
        this.startTime,
        this.easing,
        !1
      );
    }
  },
  ut = class extends ze {
    constructor(e, t, s, i, r, o, a = !1) {
      super(e, t, o.delay),
        (this.keyframes = s),
        (this.preStyleProps = i),
        (this.postStyleProps = r),
        (this._stretchStartingKeyframe = a),
        (this.timings = {
          duration: o.duration,
          delay: o.delay,
          easing: o.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let e = this.keyframes,
        { delay: t, duration: s, easing: i } = this.timings;
      if (this._stretchStartingKeyframe && t) {
        let r = [],
          o = s + t,
          a = t / o,
          l = new Map(e[0]);
        l.set("offset", 0), r.push(l);
        let c = new Map(e[0]);
        c.set("offset", gs(a)), r.push(c);
        let h = e.length - 1;
        for (let u = 1; u <= h; u++) {
          let _ = new Map(e[u]),
            y = _.get("offset"),
            f = t + y * s;
          _.set("offset", gs(f / o)), r.push(_);
        }
        (s = o), (t = 0), (i = ""), (e = r);
      }
      return wt(
        this.element,
        e,
        this.preStyleProps,
        this.postStyleProps,
        s,
        t,
        i,
        !0
      );
    }
  };
function gs(n, e = 3) {
  let t = Math.pow(10, e - 1);
  return Math.round(n * t) / t;
}
function Wi(n, e) {
  let t = new Map(),
    s;
  return (
    n.forEach((i) => {
      if (i === "*") {
        s ??= e.keys();
        for (let r of s) t.set(r, B);
      } else for (let [r, o] of i) t.set(r, o);
    }),
    t
  );
}
function ys(n, e, t, s, i, r, o, a, l, c, h, u, _) {
  return {
    type: 0,
    element: n,
    triggerName: e,
    isRemovalTransition: i,
    fromState: t,
    fromStyles: r,
    toState: s,
    toStyles: o,
    timelines: a,
    queriedElements: l,
    preStyleProps: c,
    postStyleProps: h,
    totalTime: u,
    errors: _,
  };
}
var Ze = {},
  Ke = class {
    constructor(e, t, s) {
      (this._triggerName = e), (this.ast = t), (this._stateStyles = s);
    }
    match(e, t, s, i) {
      return Gi(this.ast.matchers, e, t, s, i);
    }
    buildStyles(e, t, s) {
      let i = this._stateStyles.get("*");
      return (
        e !== void 0 && (i = this._stateStyles.get(e?.toString()) || i),
        i ? i.buildStyles(t, s) : new Map()
      );
    }
    build(e, t, s, i, r, o, a, l, c, h) {
      let u = [],
        _ = (this.ast.options && this.ast.options.params) || Ze,
        y = (a && a.params) || Ze,
        f = this.buildStyles(s, y, u),
        g = (l && l.params) || Ze,
        b = this.buildStyles(i, g, u),
        w = new Set(),
        A = new Map(),
        C = new Map(),
        M = i === "void",
        J = { params: Rs(g, _), delay: this.ast.options?.delay },
        K = h ? [] : Os(e, t, this.ast.animation, r, o, f, b, J, c, u),
        D = 0;
      return (
        K.forEach((k) => {
          D = Math.max(k.duration + k.delay, D);
        }),
        u.length
          ? ys(t, this._triggerName, s, i, M, f, b, [], [], A, C, D, u)
          : (K.forEach((k) => {
              let U = k.element,
                ee = F(A, U, new Set());
              k.preStyleProps.forEach((x) => ee.add(x));
              let Pt = F(C, U, new Set());
              k.postStyleProps.forEach((x) => Pt.add(x)), U !== t && w.add(U);
            }),
            ys(
              t,
              this._triggerName,
              s,
              i,
              M,
              f,
              b,
              K,
              [...w.values()],
              A,
              C,
              D
            ))
      );
    }
  };
function Gi(n, e, t, s, i) {
  return n.some((r) => r(e, t, s, i));
}
function Rs(n, e) {
  let t = ge({}, e);
  return (
    Object.entries(n).forEach(([s, i]) => {
      i != null && (t[s] = i);
    }),
    t
  );
}
var ht = class {
  constructor(e, t, s) {
    (this.styles = e), (this.defaultParams = t), (this.normalizer = s);
  }
  buildStyles(e, t) {
    let s = new Map(),
      i = Rs(e, this.defaultParams);
    return (
      this.styles.styles.forEach((r) => {
        typeof r != "string" &&
          r.forEach((o, a) => {
            o && (o = he(o, i, t));
            let l = this.normalizer.normalizePropertyName(a, t);
            (o = this.normalizer.normalizeStyleValue(a, l, o, t)), s.set(a, o);
          });
      }),
      s
    );
  }
};
function Hi(n, e, t) {
  return new dt(n, e, t);
}
var dt = class {
  constructor(e, t, s) {
    (this.name = e),
      (this.ast = t),
      (this._normalizer = s),
      (this.transitionFactories = []),
      (this.states = new Map()),
      t.states.forEach((i) => {
        let r = (i.options && i.options.params) || {};
        this.states.set(i.name, new ht(i.style, r, s));
      }),
      _s(this.states, "true", "1"),
      _s(this.states, "false", "0"),
      t.transitions.forEach((i) => {
        this.transitionFactories.push(new Ke(e, i, this.states));
      }),
      (this.fallbackTransition = Yi(e, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(e, t, s, i) {
    return this.transitionFactories.find((o) => o.match(e, t, s, i)) || null;
  }
  matchStyles(e, t, s) {
    return this.fallbackTransition.buildStyles(e, t, s);
  }
};
function Yi(n, e, t) {
  let s = [(o, a) => !0],
    i = { type: S.Sequence, steps: [], options: null },
    r = {
      type: S.Transition,
      animation: i,
      matchers: s,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new Ke(n, r, e);
}
function _s(n, e, t) {
  n.has(e) ? n.has(t) || n.set(t, n.get(e)) : n.has(t) && n.set(e, n.get(t));
}
var Xi = new de(),
  ft = class {
    constructor(e, t, s) {
      (this.bodyNode = e),
        (this._driver = t),
        (this._normalizer = s),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(e, t) {
      let s = [],
        i = [],
        r = ks(this._driver, t, s, i);
      if (s.length) throw hi(s);
      i.length && void 0, this._animations.set(e, r);
    }
    _buildPlayer(e, t, s) {
      let i = e.element,
        r = ws(this._normalizer, e.keyframes, t, s);
      return this._driver.animate(i, r, e.duration, e.delay, e.easing, [], !0);
    }
    create(e, t, s = {}) {
      let i = [],
        r = this._animations.get(e),
        o,
        a = new Map();
      if (
        (r
          ? ((o = Os(
              this._driver,
              t,
              r,
              Ns,
              st,
              new Map(),
              new Map(),
              s,
              Xi,
              i
            )),
            o.forEach((h) => {
              let u = F(a, h.element, new Map());
              h.postStyleProps.forEach((_) => u.set(_, null));
            }))
          : (i.push(di()), (o = [])),
        i.length)
      )
        throw fi(i);
      a.forEach((h, u) => {
        h.forEach((_, y) => {
          h.set(y, this._driver.computeStyle(u, y, B));
        });
      });
      let l = o.map((h) => {
          let u = a.get(h.element);
          return this._buildPlayer(h, new Map(), u);
        }),
        c = j(l);
      return (
        this._playersById.set(e, c),
        c.onDestroy(() => this.destroy(e)),
        this.players.push(c),
        c
      );
    }
    destroy(e) {
      let t = this._getPlayer(e);
      t.destroy(), this._playersById.delete(e);
      let s = this.players.indexOf(t);
      s >= 0 && this.players.splice(s, 1);
    }
    _getPlayer(e) {
      let t = this._playersById.get(e);
      if (!t) throw mi(e);
      return t;
    }
    listen(e, t, s, i) {
      let r = St(t, "", "", "");
      return _t(this._getPlayer(e), s, r, i), () => {};
    }
    command(e, t, s, i) {
      if (s == "register") {
        this.register(e, i[0]);
        return;
      }
      if (s == "create") {
        let o = i[0] || {};
        this.create(e, t, o);
        return;
      }
      let r = this._getPlayer(e);
      switch (s) {
        case "play":
          r.play();
          break;
        case "pause":
          r.pause();
          break;
        case "reset":
          r.reset();
          break;
        case "restart":
          r.restart();
          break;
        case "finish":
          r.finish();
          break;
        case "init":
          r.init();
          break;
        case "setPosition":
          r.setPosition(parseFloat(i[0]));
          break;
        case "destroy":
          this.destroy(e);
          break;
      }
    }
  },
  Ss = "ng-animate-queued",
  Zi = ".ng-animate-queued",
  Je = "ng-animate-disabled",
  Ji = ".ng-animate-disabled",
  en = "ng-star-inserted",
  tn = ".ng-star-inserted",
  sn = [],
  Fs = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  nn = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  z = "__ng_removed",
  fe = class {
    get params() {
      return this.options.params;
    }
    constructor(e, t = "") {
      this.namespaceId = t;
      let s = e && e.hasOwnProperty("value"),
        i = s ? e.value : e;
      if (((this.value = on(i)), s)) {
        let r = e,
          { value: o } = r,
          a = Dt(r, ["value"]);
        this.options = a;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(e) {
      let t = e.params;
      if (t) {
        let s = this.options.params;
        Object.keys(t).forEach((i) => {
          s[i] == null && (s[i] = t[i]);
        });
      }
    }
  },
  ue = "void",
  et = new fe(ue),
  mt = class {
    constructor(e, t, s) {
      (this.id = e),
        (this.hostElement = t),
        (this._engine = s),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + e),
        I(t, this._hostClassName);
    }
    listen(e, t, s, i) {
      if (!this._triggers.has(t)) throw pi(s, t);
      if (s == null || s.length == 0) throw gi(t);
      if (!an(s)) throw yi(s, t);
      let r = F(this._elementListeners, e, []),
        o = { name: t, phase: s, callback: i };
      r.push(o);
      let a = F(this._engine.statesByElement, e, new Map());
      return (
        a.has(t) || (I(e, Me), I(e, Me + "-" + t), a.set(t, et)),
        () => {
          this._engine.afterFlush(() => {
            let l = r.indexOf(o);
            l >= 0 && r.splice(l, 1), this._triggers.has(t) || a.delete(t);
          });
        }
      );
    }
    register(e, t) {
      return this._triggers.has(e) ? !1 : (this._triggers.set(e, t), !0);
    }
    _getTrigger(e) {
      let t = this._triggers.get(e);
      if (!t) throw _i(e);
      return t;
    }
    trigger(e, t, s, i = !0) {
      let r = this._getTrigger(t),
        o = new me(this.id, t, e),
        a = this._engine.statesByElement.get(e);
      a ||
        (I(e, Me),
        I(e, Me + "-" + t),
        this._engine.statesByElement.set(e, (a = new Map())));
      let l = a.get(t),
        c = new fe(s, this.id);
      if (
        (!(s && s.hasOwnProperty("value")) && l && c.absorbOptions(l.options),
        a.set(t, c),
        l || (l = et),
        !(c.value === ue) && l.value === c.value)
      ) {
        if (!un(l.params, c.params)) {
          let g = [],
            b = r.matchStyles(l.value, l.params, g),
            w = r.matchStyles(c.value, c.params, g);
          g.length
            ? this._engine.reportError(g)
            : this._engine.afterFlush(() => {
                Y(e, b), Q(e, w);
              });
        }
        return;
      }
      let _ = F(this._engine.playersByElement, e, []);
      _.forEach((g) => {
        g.namespaceId == this.id &&
          g.triggerName == t &&
          g.queued &&
          g.destroy();
      });
      let y = r.matchTransition(l.value, c.value, e, c.params),
        f = !1;
      if (!y) {
        if (!i) return;
        (y = r.fallbackTransition), (f = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: e,
          triggerName: t,
          transition: y,
          fromState: l,
          toState: c,
          player: o,
          isFallbackTransition: f,
        }),
        f ||
          (I(e, Ss),
          o.onStart(() => {
            ne(e, Ss);
          })),
        o.onDone(() => {
          let g = this.players.indexOf(o);
          g >= 0 && this.players.splice(g, 1);
          let b = this._engine.playersByElement.get(e);
          if (b) {
            let w = b.indexOf(o);
            w >= 0 && b.splice(w, 1);
          }
        }),
        this.players.push(o),
        _.push(o),
        o
      );
    }
    deregister(e) {
      this._triggers.delete(e),
        this._engine.statesByElement.forEach((t) => t.delete(e)),
        this._elementListeners.forEach((t, s) => {
          this._elementListeners.set(
            s,
            t.filter((i) => i.name != e)
          );
        });
    }
    clearElementCache(e) {
      this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
      let t = this._engine.playersByElement.get(e);
      t &&
        (t.forEach((s) => s.destroy()),
        this._engine.playersByElement.delete(e));
    }
    _signalRemovalForInnerTriggers(e, t) {
      let s = this._engine.driver.query(e, Oe, !0);
      s.forEach((i) => {
        if (i[z]) return;
        let r = this._engine.fetchNamespacesByElement(i);
        r.size
          ? r.forEach((o) => o.triggerLeaveAnimation(i, t, !1, !0))
          : this.clearElementCache(i);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          s.forEach((i) => this.clearElementCache(i))
        );
    }
    triggerLeaveAnimation(e, t, s, i) {
      let r = this._engine.statesByElement.get(e),
        o = new Map();
      if (r) {
        let a = [];
        if (
          (r.forEach((l, c) => {
            if ((o.set(c, l.value), this._triggers.has(c))) {
              let h = this.trigger(e, c, ue, i);
              h && a.push(h);
            }
          }),
          a.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, e, !0, t, o),
            s && j(a).onDone(() => this._engine.processLeaveNode(e)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(e) {
      let t = this._elementListeners.get(e),
        s = this._engine.statesByElement.get(e);
      if (t && s) {
        let i = new Set();
        t.forEach((r) => {
          let o = r.name;
          if (i.has(o)) return;
          i.add(o);
          let l = this._triggers.get(o).fallbackTransition,
            c = s.get(o) || et,
            h = new fe(ue),
            u = new me(this.id, o, e);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: o,
              transition: l,
              fromState: c,
              toState: h,
              player: u,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(e, t) {
      let s = this._engine;
      if (
        (e.childElementCount && this._signalRemovalForInnerTriggers(e, t),
        this.triggerLeaveAnimation(e, t, !0))
      )
        return;
      let i = !1;
      if (s.totalAnimations) {
        let r = s.players.length ? s.playersByQueriedElement.get(e) : [];
        if (r && r.length) i = !0;
        else {
          let o = e;
          for (; (o = o.parentNode); )
            if (s.statesByElement.get(o)) {
              i = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(e), i))
        s.markElementAsRemoved(this.id, e, !1, t);
      else {
        let r = e[z];
        (!r || r === Fs) &&
          (s.afterFlush(() => this.clearElementCache(e)),
          s.destroyInnerAnimations(e),
          s._onRemovalComplete(e, t));
      }
    }
    insertNode(e, t) {
      I(e, this._hostClassName);
    }
    drainQueuedTransitions(e) {
      let t = [];
      return (
        this._queue.forEach((s) => {
          let i = s.player;
          if (i.destroyed) return;
          let r = s.element,
            o = this._elementListeners.get(r);
          o &&
            o.forEach((a) => {
              if (a.name == s.triggerName) {
                let l = St(
                  r,
                  s.triggerName,
                  s.fromState.value,
                  s.toState.value
                );
                (l._data = e), _t(s.player, a.phase, l, a.callback);
              }
            }),
            i.markedForDestroy
              ? this._engine.afterFlush(() => {
                  i.destroy();
                })
              : t.push(s);
        }),
        (this._queue = []),
        t.sort((s, i) => {
          let r = s.transition.ast.depCount,
            o = i.transition.ast.depCount;
          return r == 0 || o == 0
            ? r - o
            : this._engine.driver.containsElement(s.element, i.element)
            ? 1
            : -1;
        })
      );
    }
    destroy(e) {
      this.players.forEach((t) => t.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, e);
    }
  },
  pt = class {
    _onRemovalComplete(e, t) {
      this.onRemovalComplete(e, t);
    }
    constructor(e, t, s) {
      (this.bodyNode = e),
        (this.driver = t),
        (this._normalizer = s),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (i, r) => {});
    }
    get queuedPlayers() {
      let e = [];
      return (
        this._namespaceList.forEach((t) => {
          t.players.forEach((s) => {
            s.queued && e.push(s);
          });
        }),
        e
      );
    }
    createNamespace(e, t) {
      let s = new mt(e, t, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, t)
          ? this._balanceNamespaceList(s, t)
          : (this.newHostElements.set(t, s), this.collectEnterElement(t)),
        (this._namespaceLookup[e] = s)
      );
    }
    _balanceNamespaceList(e, t) {
      let s = this._namespaceList,
        i = this.namespacesByHostElement;
      if (s.length - 1 >= 0) {
        let o = !1,
          a = this.driver.getParentElement(t);
        for (; a; ) {
          let l = i.get(a);
          if (l) {
            let c = s.indexOf(l);
            s.splice(c + 1, 0, e), (o = !0);
            break;
          }
          a = this.driver.getParentElement(a);
        }
        o || s.unshift(e);
      } else s.push(e);
      return i.set(t, e), e;
    }
    register(e, t) {
      let s = this._namespaceLookup[e];
      return s || (s = this.createNamespace(e, t)), s;
    }
    registerTrigger(e, t, s) {
      let i = this._namespaceLookup[e];
      i && i.register(t, s) && this.totalAnimations++;
    }
    destroy(e, t) {
      e &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let s = this._fetchNamespace(e);
          this.namespacesByHostElement.delete(s.hostElement);
          let i = this._namespaceList.indexOf(s);
          i >= 0 && this._namespaceList.splice(i, 1),
            s.destroy(t),
            delete this._namespaceLookup[e];
        }));
    }
    _fetchNamespace(e) {
      return this._namespaceLookup[e];
    }
    fetchNamespacesByElement(e) {
      let t = new Set(),
        s = this.statesByElement.get(e);
      if (s) {
        for (let i of s.values())
          if (i.namespaceId) {
            let r = this._fetchNamespace(i.namespaceId);
            r && t.add(r);
          }
      }
      return t;
    }
    trigger(e, t, s, i) {
      if (De(t)) {
        let r = this._fetchNamespace(e);
        if (r) return r.trigger(t, s, i), !0;
      }
      return !1;
    }
    insertNode(e, t, s, i) {
      if (!De(t)) return;
      let r = t[z];
      if (r && r.setForRemoval) {
        (r.setForRemoval = !1), (r.setForMove = !0);
        let o = this.collectedLeaveElements.indexOf(t);
        o >= 0 && this.collectedLeaveElements.splice(o, 1);
      }
      if (e) {
        let o = this._fetchNamespace(e);
        o && o.insertNode(t, s);
      }
      i && this.collectEnterElement(t);
    }
    collectEnterElement(e) {
      this.collectedEnterElements.push(e);
    }
    markElementAsDisabled(e, t) {
      t
        ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), I(e, Je))
        : this.disabledNodes.has(e) &&
          (this.disabledNodes.delete(e), ne(e, Je));
    }
    removeNode(e, t, s) {
      if (De(t)) {
        let i = e ? this._fetchNamespace(e) : null;
        i ? i.removeNode(t, s) : this.markElementAsRemoved(e, t, !1, s);
        let r = this.namespacesByHostElement.get(t);
        r && r.id !== e && r.removeNode(t, s);
      } else this._onRemovalComplete(t, s);
    }
    markElementAsRemoved(e, t, s, i, r) {
      this.collectedLeaveElements.push(t),
        (t[z] = {
          namespaceId: e,
          setForRemoval: i,
          hasAnimation: s,
          removedBeforeQueried: !1,
          previousTriggersValues: r,
        });
    }
    listen(e, t, s, i, r) {
      return De(t) ? this._fetchNamespace(e).listen(t, s, i, r) : () => {};
    }
    _buildInstruction(e, t, s, i, r) {
      return e.transition.build(
        this.driver,
        e.element,
        e.fromState.value,
        e.toState.value,
        s,
        i,
        e.fromState.options,
        e.toState.options,
        t,
        r
      );
    }
    destroyInnerAnimations(e) {
      let t = this.driver.query(e, Oe, !0);
      t.forEach((s) => this.destroyActiveAnimationsForElement(s)),
        this.playersByQueriedElement.size != 0 &&
          ((t = this.driver.query(e, it, !0)),
          t.forEach((s) => this.finishActiveQueriedAnimationOnElement(s)));
    }
    destroyActiveAnimationsForElement(e) {
      let t = this.playersByElement.get(e);
      t &&
        t.forEach((s) => {
          s.queued ? (s.markedForDestroy = !0) : s.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(e) {
      let t = this.playersByQueriedElement.get(e);
      t && t.forEach((s) => s.finish());
    }
    whenRenderingDone() {
      return new Promise((e) => {
        if (this.players.length) return j(this.players).onDone(() => e());
        e();
      });
    }
    processLeaveNode(e) {
      let t = e[z];
      if (t && t.setForRemoval) {
        if (((e[z] = Fs), t.namespaceId)) {
          this.destroyInnerAnimations(e);
          let s = this._fetchNamespace(t.namespaceId);
          s && s.clearElementCache(e);
        }
        this._onRemovalComplete(e, t.setForRemoval);
      }
      e.classList?.contains(Je) && this.markElementAsDisabled(e, !1),
        this.driver.query(e, Ji, !0).forEach((s) => {
          this.markElementAsDisabled(s, !1);
        });
    }
    flush(e = -1) {
      let t = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((s, i) =>
            this._balanceNamespaceList(s, i)
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let s = 0; s < this.collectedEnterElements.length; s++) {
          let i = this.collectedEnterElements[s];
          I(i, en);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let s = [];
        try {
          t = this._flushAnimations(s, e);
        } finally {
          for (let i = 0; i < s.length; i++) s[i]();
        }
      } else
        for (let s = 0; s < this.collectedLeaveElements.length; s++) {
          let i = this.collectedLeaveElements[s];
          this.processLeaveNode(i);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((s) => s()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let s = this._whenQuietFns;
        (this._whenQuietFns = []),
          t.length
            ? j(t).onDone(() => {
                s.forEach((i) => i());
              })
            : s.forEach((i) => i());
      }
    }
    reportError(e) {
      throw Si(e);
    }
    _flushAnimations(e, t) {
      let s = new de(),
        i = [],
        r = new Map(),
        o = [],
        a = new Map(),
        l = new Map(),
        c = new Map(),
        h = new Set();
      this.disabledNodes.forEach((d) => {
        h.add(d);
        let m = this.driver.query(d, Zi, !0);
        for (let p = 0; p < m.length; p++) h.add(m[p]);
      });
      let u = this.bodyNode,
        _ = Array.from(this.statesByElement.keys()),
        y = bs(_, this.collectedEnterElements),
        f = new Map(),
        g = 0;
      y.forEach((d, m) => {
        let p = Ns + g++;
        f.set(m, p), d.forEach((E) => I(E, p));
      });
      let b = [],
        w = new Set(),
        A = new Set();
      for (let d = 0; d < this.collectedLeaveElements.length; d++) {
        let m = this.collectedLeaveElements[d],
          p = m[z];
        p &&
          p.setForRemoval &&
          (b.push(m),
          w.add(m),
          p.hasAnimation
            ? this.driver.query(m, tn, !0).forEach((E) => w.add(E))
            : A.add(m));
      }
      let C = new Map(),
        M = bs(_, Array.from(w));
      M.forEach((d, m) => {
        let p = st + g++;
        C.set(m, p), d.forEach((E) => I(E, p));
      }),
        e.push(() => {
          y.forEach((d, m) => {
            let p = f.get(m);
            d.forEach((E) => ne(E, p));
          }),
            M.forEach((d, m) => {
              let p = C.get(m);
              d.forEach((E) => ne(E, p));
            }),
            b.forEach((d) => {
              this.processLeaveNode(d);
            });
        });
      let J = [],
        K = [];
      for (let d = this._namespaceList.length - 1; d >= 0; d--)
        this._namespaceList[d].drainQueuedTransitions(t).forEach((p) => {
          let E = p.player,
            P = p.element;
          if ((J.push(E), this.collectedEnterElements.length)) {
            let N = P[z];
            if (N && N.setForMove) {
              if (
                N.previousTriggersValues &&
                N.previousTriggersValues.has(p.triggerName)
              ) {
                let W = N.previousTriggersValues.get(p.triggerName),
                  L = this.statesByElement.get(p.element);
                if (L && L.has(p.triggerName)) {
                  let pe = L.get(p.triggerName);
                  (pe.value = W), L.set(p.triggerName, pe);
                }
              }
              E.destroy();
              return;
            }
          }
          let q = !u || !this.driver.containsElement(u, P),
            O = C.get(P),
            V = f.get(P),
            T = this._buildInstruction(p, s, V, O, q);
          if (T.errors && T.errors.length) {
            K.push(T);
            return;
          }
          if (q) {
            E.onStart(() => Y(P, T.fromStyles)),
              E.onDestroy(() => Q(P, T.toStyles)),
              i.push(E);
            return;
          }
          if (p.isFallbackTransition) {
            E.onStart(() => Y(P, T.fromStyles)),
              E.onDestroy(() => Q(P, T.toStyles)),
              i.push(E);
            return;
          }
          let Ct = [];
          T.timelines.forEach((N) => {
            (N.stretchStartingKeyframe = !0),
              this.disabledNodes.has(N.element) || Ct.push(N);
          }),
            (T.timelines = Ct),
            s.append(P, T.timelines);
          let Qs = { instruction: T, player: E, element: P };
          o.push(Qs),
            T.queriedElements.forEach((N) => F(a, N, []).push(E)),
            T.preStyleProps.forEach((N, W) => {
              if (N.size) {
                let L = l.get(W);
                L || l.set(W, (L = new Set())),
                  N.forEach((pe, je) => L.add(je));
              }
            }),
            T.postStyleProps.forEach((N, W) => {
              let L = c.get(W);
              L || c.set(W, (L = new Set())), N.forEach((pe, je) => L.add(je));
            });
        });
      if (K.length) {
        let d = [];
        K.forEach((m) => {
          d.push(Ei(m.triggerName, m.errors));
        }),
          J.forEach((m) => m.destroy()),
          this.reportError(d);
      }
      let D = new Map(),
        k = new Map();
      o.forEach((d) => {
        let m = d.element;
        s.has(m) &&
          (k.set(m, m),
          this._beforeAnimationBuild(d.player.namespaceId, d.instruction, D));
      }),
        i.forEach((d) => {
          let m = d.element;
          this._getPreviousPlayers(
            m,
            !1,
            d.namespaceId,
            d.triggerName,
            null
          ).forEach((E) => {
            F(D, m, []).push(E), E.destroy();
          });
        });
      let U = b.filter((d) => Ts(d, l, c)),
        ee = new Map();
      vs(ee, this.driver, A, c, B).forEach((d) => {
        Ts(d, l, c) && U.push(d);
      });
      let x = new Map();
      y.forEach((d, m) => {
        vs(x, this.driver, new Set(d), l, Ae);
      }),
        U.forEach((d) => {
          let m = ee.get(d),
            p = x.get(d);
          ee.set(
            d,
            new Map([...(m?.entries() ?? []), ...(p?.entries() ?? [])])
          );
        });
      let Ve = [],
        Mt = [],
        Nt = {};
      o.forEach((d) => {
        let { element: m, player: p, instruction: E } = d;
        if (s.has(m)) {
          if (h.has(m)) {
            p.onDestroy(() => Q(m, E.toStyles)),
              (p.disabled = !0),
              p.overrideTotalTime(E.totalTime),
              i.push(p);
            return;
          }
          let P = Nt;
          if (k.size > 1) {
            let O = m,
              V = [];
            for (; (O = O.parentNode); ) {
              let T = k.get(O);
              if (T) {
                P = T;
                break;
              }
              V.push(O);
            }
            V.forEach((T) => k.set(T, P));
          }
          let q = this._buildAnimation(p.namespaceId, E, D, r, x, ee);
          if ((p.setRealPlayer(q), P === Nt)) Ve.push(p);
          else {
            let O = this.playersByElement.get(P);
            O && O.length && (p.parentPlayer = j(O)), i.push(p);
          }
        } else
          Y(m, E.fromStyles),
            p.onDestroy(() => Q(m, E.toStyles)),
            Mt.push(p),
            h.has(m) && i.push(p);
      }),
        Mt.forEach((d) => {
          let m = r.get(d.element);
          if (m && m.length) {
            let p = j(m);
            d.setRealPlayer(p);
          }
        }),
        i.forEach((d) => {
          d.parentPlayer ? d.syncPlayerEvents(d.parentPlayer) : d.destroy();
        });
      for (let d = 0; d < b.length; d++) {
        let m = b[d],
          p = m[z];
        if ((ne(m, st), p && p.hasAnimation)) continue;
        let E = [];
        if (a.size) {
          let q = a.get(m);
          q && q.length && E.push(...q);
          let O = this.driver.query(m, it, !0);
          for (let V = 0; V < O.length; V++) {
            let T = a.get(O[V]);
            T && T.length && E.push(...T);
          }
        }
        let P = E.filter((q) => !q.destroyed);
        P.length ? ln(this, m, P) : this.processLeaveNode(m);
      }
      return (
        (b.length = 0),
        Ve.forEach((d) => {
          this.players.push(d),
            d.onDone(() => {
              d.destroy();
              let m = this.players.indexOf(d);
              this.players.splice(m, 1);
            }),
            d.play();
        }),
        Ve
      );
    }
    afterFlush(e) {
      this._flushFns.push(e);
    }
    afterFlushAnimationsDone(e) {
      this._whenQuietFns.push(e);
    }
    _getPreviousPlayers(e, t, s, i, r) {
      let o = [];
      if (t) {
        let a = this.playersByQueriedElement.get(e);
        a && (o = a);
      } else {
        let a = this.playersByElement.get(e);
        if (a) {
          let l = !r || r == ue;
          a.forEach((c) => {
            c.queued || (!l && c.triggerName != i) || o.push(c);
          });
        }
      }
      return (
        (s || i) &&
          (o = o.filter(
            (a) => !((s && s != a.namespaceId) || (i && i != a.triggerName))
          )),
        o
      );
    }
    _beforeAnimationBuild(e, t, s) {
      let i = t.triggerName,
        r = t.element,
        o = t.isRemovalTransition ? void 0 : e,
        a = t.isRemovalTransition ? void 0 : i;
      for (let l of t.timelines) {
        let c = l.element,
          h = c !== r,
          u = F(s, c, []);
        this._getPreviousPlayers(c, h, o, a, t.toState).forEach((y) => {
          let f = y.getRealPlayer();
          f.beforeDestroy && f.beforeDestroy(), y.destroy(), u.push(y);
        });
      }
      Y(r, t.fromStyles);
    }
    _buildAnimation(e, t, s, i, r, o) {
      let a = t.triggerName,
        l = t.element,
        c = [],
        h = new Set(),
        u = new Set(),
        _ = t.timelines.map((f) => {
          let g = f.element;
          h.add(g);
          let b = g[z];
          if (b && b.removedBeforeQueried) return new ie(f.duration, f.delay);
          let w = g !== l,
            A = cn((s.get(g) || sn).map((D) => D.getRealPlayer())).filter(
              (D) => {
                let k = D;
                return k.element ? k.element === g : !1;
              }
            ),
            C = r.get(g),
            M = o.get(g),
            J = ws(this._normalizer, f.keyframes, C, M),
            K = this._buildPlayer(f, J, A);
          if ((f.subTimeline && i && u.add(g), w)) {
            let D = new me(e, a, g);
            D.setRealPlayer(K), c.push(D);
          }
          return K;
        });
      c.forEach((f) => {
        F(this.playersByQueriedElement, f.element, []).push(f),
          f.onDone(() => rn(this.playersByQueriedElement, f.element, f));
      }),
        h.forEach((f) => I(f, fs));
      let y = j(_);
      return (
        y.onDestroy(() => {
          h.forEach((f) => ne(f, fs)), Q(l, t.toStyles);
        }),
        u.forEach((f) => {
          F(i, f, []).push(y);
        }),
        y
      );
    }
    _buildPlayer(e, t, s) {
      return t.length > 0
        ? this.driver.animate(e.element, t, e.duration, e.delay, e.easing, s)
        : new ie(e.duration, e.delay);
    }
  },
  me = class {
    constructor(e, t, s) {
      (this.namespaceId = e),
        (this.triggerName = t),
        (this.element = s),
        (this._player = new ie()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(e) {
      this._containsRealPlayer ||
        ((this._player = e),
        this._queuedCallbacks.forEach((t, s) => {
          t.forEach((i) => _t(e, s, void 0, i));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(e.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(e) {
      this.totalTime = e;
    }
    syncPlayerEvents(e) {
      let t = this._player;
      t.triggerCallback && e.onStart(() => t.triggerCallback("start")),
        e.onDone(() => this.finish()),
        e.onDestroy(() => this.destroy());
    }
    _queueEvent(e, t) {
      F(this._queuedCallbacks, e, []).push(t);
    }
    onDone(e) {
      this.queued && this._queueEvent("done", e), this._player.onDone(e);
    }
    onStart(e) {
      this.queued && this._queueEvent("start", e), this._player.onStart(e);
    }
    onDestroy(e) {
      this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(e) {
      this.queued || this._player.setPosition(e);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(e) {
      let t = this._player;
      t.triggerCallback && t.triggerCallback(e);
    }
  };
function rn(n, e, t) {
  let s = n.get(e);
  if (s) {
    if (s.length) {
      let i = s.indexOf(t);
      s.splice(i, 1);
    }
    s.length == 0 && n.delete(e);
  }
  return s;
}
function on(n) {
  return n ?? null;
}
function De(n) {
  return n && n.nodeType === 1;
}
function an(n) {
  return n == "start" || n == "done";
}
function Es(n, e) {
  let t = n.style.display;
  return (n.style.display = e ?? "none"), t;
}
function vs(n, e, t, s, i) {
  let r = [];
  t.forEach((l) => r.push(Es(l)));
  let o = [];
  s.forEach((l, c) => {
    let h = new Map();
    l.forEach((u) => {
      let _ = e.computeStyle(c, u, i);
      h.set(u, _), (!_ || _.length == 0) && ((c[z] = nn), o.push(c));
    }),
      n.set(c, h);
  });
  let a = 0;
  return t.forEach((l) => Es(l, r[a++])), o;
}
function bs(n, e) {
  let t = new Map();
  if ((n.forEach((a) => t.set(a, [])), e.length == 0)) return t;
  let s = 1,
    i = new Set(e),
    r = new Map();
  function o(a) {
    if (!a) return s;
    let l = r.get(a);
    if (l) return l;
    let c = a.parentNode;
    return t.has(c) ? (l = c) : i.has(c) ? (l = s) : (l = o(c)), r.set(a, l), l;
  }
  return (
    e.forEach((a) => {
      let l = o(a);
      l !== s && t.get(l).push(a);
    }),
    t
  );
}
function I(n, e) {
  n.classList?.add(e);
}
function ne(n, e) {
  n.classList?.remove(e);
}
function ln(n, e, t) {
  j(t).onDone(() => n.processLeaveNode(e));
}
function cn(n) {
  let e = [];
  return Ls(n, e), e;
}
function Ls(n, e) {
  for (let t = 0; t < n.length; t++) {
    let s = n[t];
    s instanceof He ? Ls(s.players, e) : e.push(s);
  }
}
function un(n, e) {
  let t = Object.keys(n),
    s = Object.keys(e);
  if (t.length != s.length) return !1;
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    if (!e.hasOwnProperty(r) || n[r] !== e[r]) return !1;
  }
  return !0;
}
function Ts(n, e, t) {
  let s = t.get(n);
  if (!s) return !1;
  let i = e.get(n);
  return i ? s.forEach((r) => i.add(r)) : e.set(n, s), t.delete(n), !0;
}
var oe = class {
  constructor(e, t, s) {
    (this._driver = t),
      (this._normalizer = s),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (i, r) => {}),
      (this._transitionEngine = new pt(e.body, t, s)),
      (this._timelineEngine = new ft(e.body, t, s)),
      (this._transitionEngine.onRemovalComplete = (i, r) =>
        this.onRemovalComplete(i, r));
  }
  registerTrigger(e, t, s, i, r) {
    let o = e + "-" + i,
      a = this._triggerCache[o];
    if (!a) {
      let l = [],
        c = [],
        h = ks(this._driver, r, l, c);
      if (l.length) throw ci(i, l);
      c.length && void 0,
        (a = Hi(i, h, this._normalizer)),
        (this._triggerCache[o] = a);
    }
    this._transitionEngine.registerTrigger(t, i, a);
  }
  register(e, t) {
    this._transitionEngine.register(e, t);
  }
  destroy(e, t) {
    this._transitionEngine.destroy(e, t);
  }
  onInsert(e, t, s, i) {
    this._transitionEngine.insertNode(e, t, s, i);
  }
  onRemove(e, t, s) {
    this._transitionEngine.removeNode(e, t, s);
  }
  disableAnimations(e, t) {
    this._transitionEngine.markElementAsDisabled(e, t);
  }
  process(e, t, s, i) {
    if (s.charAt(0) == "@") {
      let [r, o] = hs(s),
        a = i;
      this._timelineEngine.command(r, t, o, a);
    } else this._transitionEngine.trigger(e, t, s, i);
  }
  listen(e, t, s, i, r) {
    if (s.charAt(0) == "@") {
      let [o, a] = hs(s);
      return this._timelineEngine.listen(o, t, a, r);
    }
    return this._transitionEngine.listen(e, t, s, i, r);
  }
  flush(e = -1) {
    this._transitionEngine.flush(e);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(e) {
    this._transitionEngine.afterFlushAnimationsDone(e);
  }
};
function hn(n, e) {
  let t = null,
    s = null;
  return (
    Array.isArray(e) && e.length
      ? ((t = tt(e[0])), e.length > 1 && (s = tt(e[e.length - 1])))
      : e instanceof Map && (t = tt(e)),
    t || s ? new gt(n, t, s) : null
  );
}
var re = class re {
  constructor(e, t, s) {
    (this._element = e),
      (this._startStyles = t),
      (this._endStyles = s),
      (this._state = 0);
    let i = re.initialStylesByElement.get(e);
    i || re.initialStylesByElement.set(e, (i = new Map())),
      (this._initialStyles = i);
  }
  start() {
    this._state < 1 &&
      (this._startStyles &&
        Q(this._element, this._startStyles, this._initialStyles),
      (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (Q(this._element, this._initialStyles),
        this._endStyles &&
          (Q(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (re.initialStylesByElement.delete(this._element),
        this._startStyles &&
          (Y(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles &&
          (Y(this._element, this._endStyles), (this._endStyles = null)),
        Q(this._element, this._initialStyles),
        (this._state = 3));
  }
};
re.initialStylesByElement = new WeakMap();
var gt = re;
function tt(n) {
  let e = null;
  return (
    n.forEach((t, s) => {
      dn(s) && ((e = e || new Map()), e.set(s, t));
    }),
    e
  );
}
function dn(n) {
  return n === "display" || n === "position";
}
var qe = class {
    constructor(e, t, s, i) {
      (this.element = e),
        (this.keyframes = t),
        (this.options = s),
        (this._specialStyles = i),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = s.duration),
        (this._delay = s.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((e) => e()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let e = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        e,
        this.options
      )),
        (this._finalKeyframe = e.length ? e[e.length - 1] : new Map());
      let t = () => this._onFinish();
      this.domPlayer.addEventListener("finish", t),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", t);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(e) {
      let t = [];
      return (
        e.forEach((s) => {
          t.push(Object.fromEntries(s));
        }),
        t
      );
    }
    _triggerWebAnimation(e, t, s) {
      return e.animate(this._convertKeyframesToObject(t), s);
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((e) => e()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((e) => e()),
        (this._onDestroyFns = []));
    }
    setPosition(e) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = e * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let e = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((s, i) => {
          i !== "offset" && e.set(i, this._finished ? s : Tt(this.element, i));
        }),
        (this.currentSnapshot = e);
    }
    triggerCallback(e) {
      let t = e === "start" ? this._onStartFns : this._onDoneFns;
      t.forEach((s) => s()), (t.length = 0);
    }
  },
  Be = class {
    validateStyleProperty(e) {
      return !0;
    }
    validateAnimatableStyleProperty(e) {
      return !0;
    }
    containsElement(e, t) {
      return As(e, t);
    }
    getParentElement(e) {
      return Et(e);
    }
    query(e, t, s) {
      return Ps(e, t, s);
    }
    computeStyle(e, t, s) {
      return Tt(e, t);
    }
    animate(e, t, s, i, r, o = []) {
      let a = i == 0 ? "both" : "forwards",
        l = { duration: s, delay: i, fill: a };
      r && (l.easing = r);
      let c = new Map(),
        h = o.filter((y) => y instanceof qe);
      ki(s, i) &&
        h.forEach((y) => {
          y.currentSnapshot.forEach((f, g) => c.set(g, f));
        });
      let u = Ni(t).map((y) => new Map(y));
      u = Oi(e, u, c);
      let _ = hn(e, u);
      return new qe(e, u, l, _);
    }
  };
var ke = "@",
  Is = "@.disabled",
  Qe = class {
    constructor(e, t, s, i) {
      (this.namespaceId = e),
        (this.delegate = t),
        (this.engine = s),
        (this._onDestroy = i),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(e) {
      this.delegate.destroyNode?.(e);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(e, t) {
      return this.delegate.createElement(e, t);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    appendChild(e, t) {
      this.delegate.appendChild(e, t),
        this.engine.onInsert(this.namespaceId, t, e, !1);
    }
    insertBefore(e, t, s, i = !0) {
      this.delegate.insertBefore(e, t, s),
        this.engine.onInsert(this.namespaceId, t, e, i);
    }
    removeChild(e, t, s) {
      this.parentNode(t) &&
        this.engine.onRemove(this.namespaceId, t, this.delegate);
    }
    selectRootElement(e, t) {
      return this.delegate.selectRootElement(e, t);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, t, s, i) {
      this.delegate.setAttribute(e, t, s, i);
    }
    removeAttribute(e, t, s) {
      this.delegate.removeAttribute(e, t, s);
    }
    addClass(e, t) {
      this.delegate.addClass(e, t);
    }
    removeClass(e, t) {
      this.delegate.removeClass(e, t);
    }
    setStyle(e, t, s, i) {
      this.delegate.setStyle(e, t, s, i);
    }
    removeStyle(e, t, s) {
      this.delegate.removeStyle(e, t, s);
    }
    setProperty(e, t, s) {
      t.charAt(0) == ke && t == Is
        ? this.disableAnimations(e, !!s)
        : this.delegate.setProperty(e, t, s);
    }
    setValue(e, t) {
      this.delegate.setValue(e, t);
    }
    listen(e, t, s) {
      return this.delegate.listen(e, t, s);
    }
    disableAnimations(e, t) {
      this.engine.disableAnimations(e, t);
    }
  },
  yt = class extends Qe {
    constructor(e, t, s, i, r) {
      super(t, s, i, r), (this.factory = e), (this.namespaceId = t);
    }
    setProperty(e, t, s) {
      t.charAt(0) == ke
        ? t.charAt(1) == "." && t == Is
          ? ((s = s === void 0 ? !0 : !!s), this.disableAnimations(e, s))
          : this.engine.process(this.namespaceId, e, t.slice(1), s)
        : this.delegate.setProperty(e, t, s);
    }
    listen(e, t, s) {
      if (t.charAt(0) == ke) {
        let i = fn(e),
          r = t.slice(1),
          o = "";
        return (
          r.charAt(0) != ke && ([r, o] = mn(r)),
          this.engine.listen(this.namespaceId, i, r, o, (a) => {
            let l = a._data || -1;
            this.factory.scheduleListenerCallback(l, s, a);
          })
        );
      }
      return this.delegate.listen(e, t, s);
    }
  };
function fn(n) {
  switch (n) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return n;
  }
}
function mn(n) {
  let e = n.indexOf("."),
    t = n.substring(0, e),
    s = n.slice(e + 1);
  return [t, s];
}
var $e = class {
  constructor(e, t, s) {
    (this.delegate = e),
      (this.engine = t),
      (this._zone = s),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (t.onRemovalComplete = (i, r) => {
        r?.removeChild(null, i);
      });
  }
  createRenderer(e, t) {
    let s = "",
      i = this.delegate.createRenderer(e, t);
    if (!e || !t?.data?.animation) {
      let c = this._rendererCache,
        h = c.get(i);
      if (!h) {
        let u = () => c.delete(i);
        (h = new Qe(s, i, this.engine, u)), c.set(i, h);
      }
      return h;
    }
    let r = t.id,
      o = t.id + "-" + this._currentId;
    this._currentId++, this.engine.register(o, e);
    let a = (c) => {
      Array.isArray(c)
        ? c.forEach(a)
        : this.engine.registerTrigger(r, o, e, c.name, c);
    };
    return t.data.animation.forEach(a), new yt(this, o, i, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(e, t, s) {
    if (e >= 0 && e < this._microtaskId) {
      this._zone.run(() => t(s));
      return;
    }
    let i = this._animationCallbacksBuffer;
    i.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          i.forEach((r) => {
            let [o, a] = r;
            o(a);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      i.push([t, s]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var gn = (() => {
  let e = class e extends oe {
    constructor(s, i, r) {
      super(s, i, r);
    }
    ngOnDestroy() {
      this.flush();
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)(_e(zt), _e(X), _e(Z));
  }),
    (e.ɵprov = te({ token: e, factory: e.ɵfac }));
  let n = e;
  return n;
})();
function yn() {
  return new Fe();
}
function _n(n, e, t) {
  return new $e(n, e, t);
}
var Ks = [
    { provide: Z, useFactory: yn },
    { provide: oe, useClass: gn },
    { provide: It, useFactory: _n, deps: [Qt, oe, Rt] },
  ],
  zs = [
    { provide: X, useFactory: () => new Be() },
    { provide: Ue, useValue: "BrowserAnimations" },
    ...Ks,
  ],
  Sn = [
    { provide: X, useClass: vt },
    { provide: Ue, useValue: "NoopAnimations" },
    ...Ks,
  ],
  qs = (() => {
    let e = class e {
      static withConfig(s) {
        return { ngModule: e, providers: s.disableAnimations ? Sn : zs };
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)();
    }),
      (e.ɵmod = ve({ type: e })),
      (e.ɵinj = ye({ providers: zs, imports: [we] }));
    let n = e;
    return n;
  })();
var Bs = (() => {
  let e = class e {};
  (e.ɵfac = function (i) {
    return new (i || e)();
  }),
    (e.ɵmod = ve({ type: e, bootstrap: [os] })),
    (e.ɵinj = ye({
      providers: [Wt, qt(Bt([ls, cs]))],
      imports: [we, is, jt.forRoot(as), Ut, xt, qs, Xt.forRoot()],
    }));
  let n = e;
  return n;
})();
$t()
  .bootstrapModule(Bs)
  .catch((n) => console.error(n));
