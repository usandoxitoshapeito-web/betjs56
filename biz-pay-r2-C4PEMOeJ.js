import {
    eo as Xt,
    bU as Sa,
    eM as Xo,
    p as Kt,
    eN as ua,
    aO as be,
    eO as Zo,
    h as In,
    J as ws,
    d7 as Nt,
    eP as pt,
    dc as Ot,
    eQ as el,
    eR as Cs,
    eS as tl,
    bz as La,
    aJ as al,
    e as qe,
    eT as $s,
    eU as nl,
    D as xe,
    Y as xt,
    eV as sl,
    eW as ol,
    eX as Is,
    $ as Ae,
    aM as Ts,
    c as At,
    bf as Tn,
    Q as it,
    g as We,
    M as ue,
    eY as As,
    eZ as ks,
    e_ as ls,
    aG as ll,
    e$ as il,
    bA as fn,
    dY as Ss,
    m as Qe,
    f0 as _n,
    t as An,
    f1 as Zt,
    P as kn,
    aV as qt,
    bn as rl,
    O as Y,
    aL as ot,
    f2 as Sn,
    e6 as ul,
    dd as Ln,
    bh as He,
    f3 as Ls,
    bI as ze,
    f4 as xs,
    f5 as Ns,
    _ as oa,
    a$ as Ps,
    S as Je,
    f6 as Rs,
    f7 as Pa,
    f8 as xn,
    f9 as Ua,
    fa as Es,
    fb as Ht,
    d3 as xa,
    fc as is,
    y as Na,
    fd as wn,
    s as ha,
    fe as cl,
    ff as at,
    fg as Os,
    fh as dl,
    fi as ml,
    fj as pl,
    fk as fl,
    fl as hl,
    fm as rs,
    bq as Ya,
    fn as vl,
    fo as bl,
    fp as gl,
    fq as yl,
    fr as _l,
    fs as Vt,
    T as Mt,
    ft as wl,
    fu as Qa,
    az as Vs,
    fv as Cl,
    fw as Ms,
    fx as $l,
    bQ as va,
    fy as Bs,
    fz as hn,
    fA as Il,
    ad as Ds,
    ar as Fa,
    bD as Ja,
    bE as Qt,
    dx as Nn,
    fB as Xa,
    fC as Pn,
    fD as Za,
    fE as ma,
    b$ as Wt,
    fF as us,
    fG as Hs,
    bS as Rn,
    fH as Tl,
    aS as Al,
    aT as kl,
    b as En,
    aU as Sl,
    fI as Ll,
    fJ as xl,
    fK as Nl,
    bm as Pl,
    fL as Rl,
    fM as On,
    aP as Vn,
    fN as Mn,
    fO as El,
    fP as Ol,
    i as Vl,
    fQ as Ml,
    fR as Bn,
    fS as Bl,
    fT as Ws,
    fU as Dl,
    e0 as Hl,
    fV as Us,
    fW as Wl,
    fX as cs,
    bB as Fs,
    fY as js,
    fZ as Ul
} from "./index-r2-Dc74m1c2.js";
import {
    f as I,
    ai as Ve,
    Z as Aa,
    g as F,
    i as nt,
    k as Fl,
    l as zt,
    d as q,
    a$ as Ne,
    b0 as rt,
    s as _,
    o as c,
    a as i,
    w as b,
    F as ae,
    G as fe,
    c as S,
    u as e,
    a5 as It,
    L as U,
    E as k,
    v as r,
    a3 as Tt,
    x as X,
    t,
    z as yt,
    a4 as te,
    a7 as jl,
    O as Ut,
    Y as ba,
    K as ne,
    aj as pa,
    aT as Gl,
    b1 as zl,
    H as Ra,
    ag as st,
    ac as Ft,
    b2 as Gs,
    m as la,
    e as ia,
    n as zs,
    p as ds,
    aH as ga,
    b3 as ql,
    U as Dn,
    C as ja,
    b4 as Hn,
    al as Jt,
    I as ce,
    a6 as en,
    aJ as tn,
    y as Bt,
    r as Ea,
    A as Dt,
    b as Pe,
    b5 as Kl,
    V as Yl,
    h as lt,
    B as jt,
    W as Ql,
    X as an,
    b6 as qs,
    M as Ks,
    b7 as vn,
    J as Jl,
    P as Cn,
    b8 as Xl,
    j as Wn,
    ae as Zl,
    ao as nn,
    ap as sn,
    aq as ei,
    aQ as ti,
    aw as ea,
    av as ta,
    az as Pt,
    aA as ft,
    aB as Gt,
    aO as Un,
    ar as Fn,
    b9 as jn,
    as as Oa,
    at as Va,
    ba as Ys,
    bb as Qs,
    bc as ms,
    aR as ai,
    ab as ni,
    a8 as si,
    q as Js,
    aC as Xs,
    ay as da,
    bd as oi,
    be as li,
    bf as ii,
    bg as ri
} from "./vendor_modules-r2-CF0trur5.js";
const ps = {
        needPhone: {
            name: "phone",
            label: "walletNumber",
            placeholder: "enterWalletNumber",
            errorText: "invalidWalletNumber",
            type: "phone",
            rule: {}
        },
        needEmail: {
            name: "email",
            label: "email",
            placeholder: "tipEmail",
            errorText: "invalidEmail",
            type: "email",
            rule: {
                maxlength: 64
            }
        },
        needRealName: {
            name: "realName",
            label: "name",
            placeholder: "tipName",
            errorText: "invalidName",
            type: "text",
            rule: {
                maxlength: Xt
            }
        }
    },
    ui = (a = {}) => Object.keys(ps).flatMap(l => a[l] ? [{ ...ps[l]
    }] : []),
    fs = I("0.00"),
    Zs = I(""),
    ci = I(!1),
    hs = I(!1),
    Ga = I(!1),
    eo = (a, l) => {
        const s = {
            CPF: "cpf",
            REALNAME: "realName"
        };
        ua.value = a.map(o => s[o]), be.push("/bindCPF/".concat(l))
    },
    di = Sa(async (a = Zs.value, l = !0) => {
        if (a) {
            hs.value = !0;
            try {
                const s = await Xo(a);
                fs.value = Kt(s.balance || 0);
                const o = {
                    FAIL: () => {
                        Ga.value = !1, l && eo(s.msg, "THREE_PARTY_WALLET")
                    },
                    SUCCESS: () => {
                        Ga.value = !0
                    }
                };
                s.code && s.code in o && o[s.code]()
            } catch (s) {
                fs.value = "0.00"
            } finally {
                hs.value = !1
            }
        }
    }, 300),
    mi = a => {
        In().isIOS ? location.href = a : ws(a, "OPEN_URL")
    },
    pi = Sa(async (a = Zs.value) => {
        if (!a) return;
        const l = await Zo(a),
            s = {
                FAIL: () => eo(l.msg, "enterWallet"),
                SUCCESS: () => {
                    mi(l.hallUrl)
                }
            };
        l.code && l.code in s && s[l.code]()
    }, 300),
    to = async (a, l) => {
        var p, v, h;
        const s = Nt();
        s.channelId = a;
        const {
            channelMap: o,
            bankMap: u,
            bankCode: n
        } = Ve(s);
        if (pt.emit("recharge/channel-changed", {
                currentChannel: o.value.get(a)
            }), Ot.processMode === "THREE_PARTY_WALLET") return;
        s.bankCode = "";
        let d = "",
            m = u.value.get(a) || [];
        if (m.length && (d = ((p = m.find(y => y.code === n.value)) == null ? void 0 : p.code) || m[0].code), s.bankList = m, s.bankCode = d, u.value.has(a)) return;
        let f = l;
        if (!f && o.value.has(a)) {
            const y = o.value.get(a);
            f = y == null ? void 0 : y.allowBankCode
        }
        if (f) {
            const y = await el({
                    bankCodes: f.split(",")
                }),
                g = (v = y == null ? void 0 : y.bankList) == null ? void 0 : v.map(w => Cs(w, ["name", "id", "logo", "code"]));
            s.bankList = g, s.bankCode = ((h = g.find(w => w.code === n.value)) == null ? void 0 : h.code) || g[0].code, u.value.set(a, g)
        }
    },
    fi = (a, l) => {
        var m;
        const s = Nt(),
            {
                isNoCycle: o
            } = Ve(s);
        s.bankList = [], s.bankCode = "";
        const u = () => {
                s.channelId = 0, s.channelList = []
            },
            n = async f => {
                s.channelLoading = !0;
                try {
                    const p = await tl({
                        payTypeSubId: f
                    });
                    if (!p.length) return u();
                    const {
                        channelId: v,
                        allowBankCode: h
                    } = p[0];
                    s.channelId = v;
                    const y = [];
                    p.forEach(g => {
                        const {
                            tagValue: w,
                            tags: C,
                            channelId: L,
                            channelName: $
                        } = g, T = C !== "NOTHING" ? C == "GIVE_AWAY" ? "+".concat(La(Number(w), 2), "%") : al("tags.".concat(C)) : "";
                        y.push({
                            id: L,
                            name: $,
                            tagValue: T
                        }), s.channelMap.set(g.channelId, { ...g
                        })
                    }), s.channelList = y, to(v, h)
                } finally {
                    s.channelLoading = !1
                }
            },
            d = {
                TRANSFER: () => {
                    n(a)
                },
                THREE_PARTY_PAYMENT: () => {
                    if (o.value) {
                        n(a);
                        return
                    }
                    u()
                }
            };
        (m = d[l]) == null || m.call(d)
    },
    hi = (a, l) => {
        if (!(l != null && l.byDevice)) return a;
        const s = In();
        return s.isIOS || s.os === "Mac OS" || s.isIOSApp ? /Chrome/i.test(s.browser) && !/WebView/i.test(s.browser) ? l.iosChrome : l.iosSafari : l.android
    },
    Gn = (a, l, s) => {
        const o = In(),
            u = a.startsWith("{"),
            n = hi(l, s),
            d = p => (o.isIOS ? location.href = p : ws(p, "OPEN_URL"), {
                url: "",
                isQRCode: !1,
                isRedirect: !0
            }),
            m = p => {
                const v = p.startsWith("http");
                return {
                    isQRCode: !v,
                    url: v ? p : "",
                    isRedirect: !1
                }
            };
        return {
            json: () => {
                const p = JSON.parse(a);
                return (n || p.redirectType) === "REDIRECT" ? d(p.payUrl) : m(p.payUrl)
            },
            plain: () => n === "REDIRECT" ? d(a) : m(a)
        }[u ? "json" : "plain"]()
    },
    vi = (a, l) => {
        const s = Nt(),
            o = qe(),
            {
                channelId: u,
                channelMap: n
            } = Ve(s),
            d = p => {
                var g, w;
                const v = xt(p.createTime, "YYYY-MM-DD HH:mm:ss"),
                    h = xt(p.expireTime).unix() - Aa().unix();
                s.orderNo = p.orderNo, s.orderInfo = { ...s.orderInfo,
                    orderNo: p.orderNo,
                    status: "BE_PAID",
                    createTime: v,
                    expireTime: h,
                    isTransfer: !1
                };
                const y = Gn(p.payUrl, p.redirectType, p.deviceRedirectConfig);
                s.thirdUrl = y == null ? void 0 : y.url, s.isQRCode = y.isQRCode, y.isRedirect && ((g = o.tenantInfo) == null ? void 0 : g.code) === "BD" && (s.isOpenOrderInfoModal = !0), (w = l == null ? void 0 : l.THREE_PARTY_PAYMENT) == null || w.call(l, p)
            },
            f = {
                THREE_PARTY_PAYMENT: d,
                TRANSFER: p => {
                    var w;
                    const {
                        transferRealName: v,
                        transferCompany: h,
                        transferAccount: y,
                        qrCodeUrl: g
                    } = n.value.get(u.value);
                    s.orderInfo = { ...s.orderInfo,
                        transferRealName: v,
                        transferCompany: h,
                        transferAccount: y,
                        qrCodeUrl: g,
                        voucher: "",
                        isTransfer: !0,
                        payerRealName: "",
                        transferVoucher: "",
                        payerName: "",
                        status: "BE_PAID"
                    }, (w = l == null ? void 0 : l.TRANSFER) == null || w.call(l, p), s.isOpenOrderModal = !0
                },
                THREE_PARTY_WALLET: d
            };
        s.QRCodeInfo.amount = a, s.orderInfo.amount = "".concat(Number(a) * 100), $s(f[Ot.processMode])
    },
    bi = async () => {
        const a = Nt(),
            l = qe(),
            {
                transferConfig: s,
                orderInfo: o
            } = Ve(a);
        if (o.value.isTransfer) {
            if (s.value.transferNameRequired === "ON" && !o.value.payerName) return xe("depositWithdrawal.000032"), !1;
            if (!o.value.voucher) return xe("depositWithdrawal.000028"), !1;
            await sl({
                tenantId: Number(l.tenantId),
                orderNo: a.orderInfo.orderNo,
                transferVoucher: a.orderInfo.voucher,
                payerRealName: a.orderInfo.payerName
            })
        }
        const u = await ol({
            orderNo: a.orderInfo.orderNo
        });
        return u && "status" in u ? (xe("status.SUCCESS"), !0) : !1
    },
    ao = async () => {
        var o, u;
        const a = Nt(),
            l = qe(),
            s = await nl({
                orderNo: a.orderNo
            });
        if (s && "message" in s) return xe((o = s.message) != null ? o : ""), !1;
        if (s && "payUrl" in s) {
            a.orderInfo = { ...a.orderInfo,
                createTime: xt(s.createTime, "YYYY-MM-DD HH:mm:ss"),
                expireTime: xt(s.expireTime).unix() - Aa().unix()
            };
            const n = await Gn(s.payUrl, s.redirectType, s.deviceRedirectConfig);
            return a.isQRCode = n.isQRCode, a.thirdUrl = n.url, n.isRedirect && ((u = l.tenantInfo) == null ? void 0 : u.code) === "BD" && (a.isOpenOrderInfoModal = !0), n.isQRCode && (console.log(xt(s.expireTime).unix() - xt(s.createTime).unix(), "result"), a.QRCodeInfo = {
                QRCode: s.payUrl,
                orderNo: s.orderNo,
                expireTime: Aa(s.expireTime).diff(Aa(s.createTime), "s"),
                createTime: xt(s.createTime, "YYYY-MM-DD HH:mm:ss"),
                amount: "".concat(Number(a.orderInfo.amount) / 100)
            }), !0
        }
        return !1
    },
    gi = (a, l, s) => a >= l && a <= s,
    yi = a => Number.isInteger(a),
    _i = (a, l, s) => {
        const o = Number(a);
        return !a || Number.isNaN(o) ? {
            isValid: !1,
            message: "toast.invalidInputAmount"
        } : gi(o, l, s) ? yi(o) ? {
            isValid: !0,
            amount: o
        } : {
            isValid: !1,
            message: "toast.0001"
        } : {
            isValid: !1,
            message: "toast.invalidInputAmount"
        }
    },
    wi = a => ({
        amount: a.amount * 100,
        participateReward: a.isParticipate,
        payTypeSubId: a.subTabId,
        processMode: a.processMode
    }),
    Ci = a => a.isParticipate && a.rechargeRewardInfo ? {
        extend: {
            activityId: a.rechargeRewardInfo.id,
            activityType: a.rechargeRewardInfo.type,
            type: "activity"
        }
    } : null,
    $i = a => {
        const l = {};
        return a.channelId && (l.payChannelId = a.channelId), a.isSelectedChannel && a.hasBankList && a.bankCode && (l.bankCode = a.bankCode), l
    },
    Ii = (a, l = ["bankCode"]) => {
        const s = { ...a
        };
        return l.forEach(o => {
            s[o] || delete s[o]
        }), s
    },
    Ti = a => {
        const l = wi({
                amount: a.amount,
                isParticipate: a.isParticipate,
                subTabId: a.subTabId,
                processMode: a.processMode
            }),
            s = Ci({
                isParticipate: a.isParticipate,
                rechargeRewardInfo: a.rechargeRewardInfo
            }),
            o = $i({
                channelId: a.channelId,
                bankCode: a.bankCode,
                isSelectedChannel: a.isSelectedChannel,
                hasBankList: a.hasBankList
            });
        let u = { ...l,
            ...o
        };
        return s ? u = { ...u,
            ...s
        } : delete u.extend, Ii(u)
    };
let Ma = null;
const Ai = 60 * 1e3,
    no = async () => {
        const a = Date.now();
        if (Ma && a - Ma.timestamp < Ai) return Ma.data;
        const l = await Is();
        return Ma = {
            data: l,
            timestamp: a
        }, l
    },
    ki = (a, l) => {
        var w, C;
        const {
            limitType: s,
            timesType: o,
            times: u,
            payAmountLimit: n,
            minAmount: d,
            maxAmount: m
        } = l, {
            rechargeCount: f,
            historicalPay: p,
            amount: v
        } = a;
        if (s === "NO_LIMIT") return !0;
        const h = () => (o === ">" ? f > u : f < u) && p >= n,
            y = () => v >= d / 100 && v <= m / 100,
            g = {
                ANY_ONE: () => h() || y(),
                ALL_MATCH: () => h() && y()
            };
        return (C = (w = g[s]) == null ? void 0 : w.call(g)) != null ? C : !1
    },
    Si = async (a, l, s) => {
        try {
            const o = JSON.parse(s),
                {
                    historicalPay: u,
                    rechargeCount: n
                } = await no(),
                d = ki({
                    rechargeCount: n,
                    historicalPay: u,
                    amount: l
                }, o);
            return a.filter(m => m.isNative ? d : !0)
        } catch (o) {
            return console.error("Failed to check native pay:", o), a
        }
    },
    Li = async a => {
        const {
            subTabList: l,
            amount: s,
            nativePayConfig: o,
            onSuccess: u
        } = a, n = await Si(l, s, o);
        n.length ? u(n) : xe("depositWithdrawal.000037")
    },
    xi = (a, l) => !a && l,
    Ni = {
        NOTHING: () => "",
        GIVE_AWAY: a => "+".concat(La(Number(a), 2), "%"),
        RECOMMEND: (a, l) => l ? "" : "recommend"
    },
    so = (a, l, s, o = !1) => {
        const u = Ni[a];
        if (u) {
            const n = u(l, o, s);
            return n === "recommend" ? s("tags.".concat(a)) : n
        }
        return s("tags.".concat(a))
    },
    Pi = (a, l) => {
        const s = [],
            o = {
                RECOMMEND: "img/recharge/best.svg"
            };
        return o[a] && s.push(Ae(o[a])), l && s.push(Ae("img/recharge/hot.svg")), s
    },
    Ri = a => {
        const {
            payTypeSubList: l,
            isWeightCycle: s,
            t: o,
            parentId: u
        } = a;
        l.sort((d, m) => m.sort - d.sort);
        const n = [];
        return l.forEach(d => {
            const {
                showName: m,
                id: f,
                tags: p,
                tagValue: v,
                icon: h,
                isHot: y,
                isNative: g
            } = d, w = so(p, v, o, s);
            n.push({
                id: f,
                name: m,
                tagValue: w,
                icon: h,
                isNative: !!g,
                tags: Pi(p, !!y),
                ...u != null && {
                    parentId: u
                }
            })
        }), n
    },
    oo = (a, l, s, o) => Ri({
        payTypeSubList: a,
        isWeightCycle: l,
        t: s,
        parentId: o
    }),
    Ei = (a, l, s) => {
        a.sort((u, n) => n.sort - u.sort);
        const o = a.reduce((u, n) => (u.push(...oo(n.payTypeSubList, l, s, n.id)), u), []);
        return console.log(o, "list"), o
    },
    lo = () => {
        const a = be.currentRoute,
            l = Ts(),
            s = At(),
            o = qe(),
            u = Tn(),
            n = Nt(),
            d = I(-1),
            m = I([]),
            f = I(-1),
            p = I([]),
            v = I([]);
        let h = [];
        const y = I([]),
            g = I(0),
            w = I(0),
            C = I(!1),
            L = I(!1),
            $ = I(!1),
            T = I(""),
            B = I(""),
            N = I(0),
            A = I(0),
            R = I(""),
            j = I(""),
            V = I(!1),
            O = I(!1),
            x = I([]),
            D = I(!1),
            Z = I(!1);
        let Q = "",
            P = [],
            M = {};
        const W = new Map,
            ie = new Map;
        let se = !1;
        const {
            t: ke
        } = it();
        let Re = 0;
        const Ke = I(!1),
            {
                theme: Ue
            } = We();
        let _e = {};
        const ge = I([]),
            {
                QRCodeInfo: we,
                isNoCycle: Ie,
                channelId: Me,
                channelList: Xe,
                channelLoading: H,
                bankList: J,
                bankCode: Ce,
                thirdUrl: re,
                isQRCode: le,
                orderNo: Ee,
                isOpenOrderModal: ve,
                isOpenOrderInfoModal: Se,
                isFromActivity: me
            } = Ve(n),
            Fe = F(() => {
                var K;
                return ((K = o.tenantInfo) == null ? void 0 : K.code) === "BD"
            }),
            $e = F(() => !!re.value && !Fe.value || le.value),
            _t = F(() => a.value.meta.hasBottomTab),
            ut = F(() => a.value.meta.hasBottomTab === void 0 ? !1 : !a.value.meta.hasBottomTab),
            ct = F(() => "".concat(ue(w.value, {
                fixed: 0
            }), " - ").concat(ue(g.value, {
                fixed: 0
            }))),
            ht = F(() => {
                var K;
                return (K = o.tenantInfo) == null ? void 0 : K.merchantCy
            }),
            Rt = F(() => l.homeGames),
            {
                rechargeRatio: kt,
                isVirtualCurrency: vt,
                isOnlyPayTypeSub: wt
            } = Ve(o),
            dt = I([]),
            Et = I(!1),
            {
                rewardType: G,
                rewardPayParams: ee,
                isShowDoubleReward: E
            } = As(),
            {
                afterRechargeRewardPayParams: z,
                isRechargeClaim: pe
            } = ks(),
            Be = F(() => {
                var K;
                return !!G.value || !!((K = z == null ? void 0 : z.value) != null && K.rewardType)
            }),
            Te = F(() => {
                var Le;
                const K = {
                        wallet: Ga.value ? ke("label.depositNow") : ke("viewsAssets.000004"),
                        default: ke("label.depositNow")
                    },
                    de = Number(B.value) < Number(w.value),
                    oe = {
                        wallet: Ga.value ? de : !1,
                        default: de
                    },
                    ye = (Le = W.get(d.value)) == null ? void 0 : Le.name,
                    he = !D.value && !ie.has(f.value);
                return {
                    btnText: K[ye] || K.default,
                    disabled: he || (ye in oe ? oe[ye] : de)
                }
            }),
            tt = F(() => Ot.processMode === "TRANSFER" ? !0 : Ie.value),
            Ze = (K, de) => fn(K) / 100 * _n(de),
            et = (K = Number(B.value), de = C.value) => {
                var ye;
                let oe = 0;
                if (!K) {
                    j.value = "", N.value = 0, A.value = Qe(oe);
                    return
                }
                if (de) {
                    const he = P.findLast(Ye => K >= Ye.amount);
                    if (!he) {
                        N.value = 0, j.value = "", A.value = Qe(oe);
                        return
                    }
                    const {
                        rate: Le,
                        amount: Oe,
                        betMultiple: je
                    } = he;
                    oe = Le / 100 * _n(Oe), N.value = Le, j.value = ke("viewsTabbar.rechargeCenter1", {
                        multiple: je
                    }), A.value = Qe(oe);
                    return
                }
                if (dt.value.length) {
                    const he = dt.value.findLast(Le => K >= Qe(Le.conditionAmount));
                    A.value = he ? Qe(he.rewardAmount) : 0, V.value = !!he;
                    return
                }
                if (j.value = "", N.value = 0, K >= w.value && f.value !== -1) {
                    const {
                        discountRatio: he
                    } = ie.get(f.value);
                    if (oe = Ze(he, K), Et.value && Ie.value) {
                        const Le = (ye = _e == null ? void 0 : _e.discountRatio) != null ? ye : 0;
                        oe += Ze(Le, K)
                    }
                }
                A.value = Qe(oe)
            };
        nt(() => B.value, K => {
            const de = Number(K);
            et(de)
        });
        const De = K => {
                if (!$.value || !B.value) return;
                K.find(oe => Number(oe.amount) === Number(B.value)) || (B.value = "")
            },
            bt = async (K = Number(B.value), de = C.value) => {
                var Oe, je;
                if (de) {
                    x.value = P, V.value = !0, et(K, de);
                    return
                }
                const oe = {
                        weightCycle: (Oe = W.get(d.value)) == null ? void 0 : Oe.fixedAmount,
                        channel: _e == null ? void 0 : _e.fixedAmount,
                        default: (je = ie.get(f.value)) == null ? void 0 : je.fixedAmount
                    },
                    ye = Ie.value ? "channel" : D.value ? "weightCycle" : "default",
                    he = oe[ye],
                    Le = () => {
                        var Ye;
                        return Et.value && Ie.value && (Ye = _e == null ? void 0 : _e.discountRatio) != null ? Ye : 0
                    };
                if (f.value !== -1 && !dt.value.length) {
                    const Ye = ie.get(f.value).discountRatio || Le();
                    V.value = Ye > 0
                }
                x.value = ((he == null ? void 0 : he.split(",").map(Ye => ({
                    amount: ye === "channel" ? Number(Ye) / 100 : Number(Ye)
                }))) || []).map(Ye => {
                    const Lt = dt.value.findLast(gt => Ye.amount >= gt.conditionAmount / 100);
                    return Lt ? { ...Ye,
                        bonus: fn(Lt.rewardAmount)
                    } : Ye
                }), De(x.value), et(K, de)
            },
            St = ({
                maxAmount: K,
                minAmount: de,
                isInputAmount: oe
            }) => {
                g.value = K / 100, w.value = de / 100, $.value = !oe
            },
            mt = K => {
                const {
                    moneyType: de,
                    maxAmount: oe,
                    minAmount: ye,
                    payMethodConfig: he
                } = K.currentChannel;
                _e = K.currentChannel;
                const Le = de !== "FIXED";
                let Oe = {};
                try {
                    he && (Oe = JSON.parse(he))
                } catch (je) {
                    console.warn("[recharge] payMethodConfig parse failed", je)
                }
                ge.value = ui(Oe), St({
                    maxAmount: oe,
                    minAmount: ye,
                    isInputAmount: Le
                }), bt()
            };
        pt.on("recharge/channel-changed", mt), Fl(() => pt.off("recharge/channel-changed", mt));
        const Ct = K => {
                if (tt.value && H.value) return;
                const {
                    id: de,
                    isInputAmount: oe,
                    processMode: ye,
                    description: he,
                    maxAmount: Le,
                    minAmount: Oe
                } = ie.get(K);
                f.value = de, n.subTypeId = de, D.value || St({
                    maxAmount: Le,
                    minAmount: Oe,
                    isInputAmount: oe
                }), T.value = he, ci.value = ye === "THREE_PARTY_WALLET", Ot.processMode = ye, fi(de, ye), !Ie.value && bt()
            },
            na = K => {
                const de = {
                    single: () => K[0].id,
                    found: ye => ye.id,
                    default: () => K[0].id
                };
                if (K.length === 1) return de.single();
                const oe = K.find(ye => ye.id === n.subTypeId);
                return oe ? de.found(oe) : de.default()
            },
            ss = K => {
                d.value = K, n.typeId = K;
                const {
                    payTypeSubList: de,
                    isInputAmount: oe,
                    maxAmount: ye,
                    minAmount: he
                } = W.get(K);
                p.value = oo(de, D.value, ke), h = ll(p.value), D.value ? (St({
                    maxAmount: ye,
                    minAmount: he,
                    isInputAmount: oe
                }), bt()) : Ct(na(p.value))
            },
            Wo = (K, de) => {
                const oe = [],
                    ye = new Map(K.map(he => [he.gameType, he]));
                return de.forEach(he => {
                    var Oe;
                    const Le = ye.get(he.gameType);
                    if (Le) {
                        const je = Le == null ? void 0 : Le.gameType;
                        let Ye = new Map((Oe = Le.platformList) == null ? void 0 : Oe.map(Lt => [Lt.id, Lt.name]));
                        he.platformData.forEach(Lt => {
                            const gt = Ye.get(Lt.platformId);
                            gt && oe.push("".concat(gt).concat(rl(je)))
                        })
                    }
                }), oe
            };
        nt(() => a.value.path, async K => {
            var de;
            if (K == "/main/entrar" || K === "/recharge/apply") {
                B.value = "", n.bankMap.clear(), await o.getTenantInfo(), l.getHomeGames(), s.getUser();
                const oe = await o.getPayList();
                M = oe == null ? void 0 : oe.rechargeRewardInfo, dt.value = (de = oe == null ? void 0 : oe.firstRechargeRewardLevels) != null ? de : [];
                const ye = oe == null ? void 0 : oe.tenantPayTypeList;
                Q = oe == null ? void 0 : oe.nativePayConfig, D.value = (oe == null ? void 0 : oe.rechargeMode) === "WeightCycle", Et.value = (oe == null ? void 0 : oe.channelDiscountSwitch) === "ON";
                const he = [];
                if (qt(M)) L.value = !1;
                else {
                    const {
                        rewardRate: Oe,
                        id: je,
                        isJumpDetail: Ye,
                        bannerUrl: Lt,
                        auditLimitGame: gt,
                        imageType: pn
                    } = M;
                    P = Oe.map(sa => ({
                        amount: Qe(sa.amount),
                        rate: fn(sa.rate),
                        betMultiple: sa.betMultiple
                    })), R.value = Lt, L.value = !0, se = Ye, Re = je, Ke.value = pn === "DEFAULT", qt(gt) || "status" in gt && "limitData" in gt && (gt.status === "OFF" || qt(gt.limitData) ? y.value = [] : y.value = Wo(Rt.value, gt.limitData))
                }
                qt(ye) || (W.clear(), ie.clear(), ye.forEach(Oe => {
                    const {
                        id: je,
                        name: Ye,
                        tags: Lt,
                        tagValue: gt
                    } = Oe;
                    W.set(je, Oe);
                    const pn = so(Lt, gt, ke);
                    he.push({
                        id: je,
                        name: Ye,
                        tagValue: pn
                    }), Oe.payTypeSubList.forEach(sa => {
                        ie.set(sa.id, sa)
                    })
                })), m.value = he;
                const Le = W.has(n.typeId) ? n.typeId : he[0].id;
                ss(Le), wt.value && (v.value = Ei(ye, D.value, ke))
            }
        }, {
            immediate: !0
        });

        function Uo() {
            be.push("/rechargeRecord")
        }
        const Fo = K => {
                if (K.detail.value > g.value) {
                    setTimeout(() => {
                        B.value = g.value.toString()
                    }, 0);
                    return
                }
                if (K.detail.value <= 0) {
                    setTimeout(() => {
                        B.value = ""
                    }, 0);
                    return
                }
                B.value = K.detail.value
            },
            jo = K => {
                var de;
                B.value = K.amount.toString(), dt.value.length && (A.value = (de = K.bonus) != null ? de : 0, V.value = !!K.bonus)
            },
            Go = K => {
                const de = K.detail.checked;
                bt(Number(B.value), de), De(x.value)
            },
            zo = () => {
                se && be.push({
                    path: "/activity/RechargeReward/".concat(Re)
                })
            },
            qo = K => {
                Ee.value === K.orderNo && An({
                    type: kn.TIPS,
                    msg: ke("popup.tips15"),
                    leftBtnText: ke("main.confirm"),
                    leftBtnCallback: Zt
                })
            },
            os = K => {
                qo(K), u.APKTaskPopupTime = "Recharge"
            },
            Ko = () => {
                O.value = !0, ls.value = !1, s.isRechargeing = !0, pt.on("user/pay-success", os)
            },
            mn = () => {
                O.value = !1, n.thirdUrl = "", n.isQRCode = !1, s.isRechargeing = !1, pt.off("user/pay-success", os)
            },
            Yo = () => {
                if (console.error("customBack", E.value, pe.value), E.value || pe.value) {
                    be.push("/main/inicio");
                    return
                }
                if (O.value) {
                    mn();
                    return
                }
                il()
            },
            Qo = () => {
                var oe, ye, he, Le;
                if (!ge.value.some(Oe => Oe.name === "phone")) return !0;
                const K = (he = (ye = (oe = Ot.userPayInfoList) == null ? void 0 : oe.find(Oe => Oe.code === "PHONE")) == null ? void 0 : ye.value) != null ? he : "",
                    de = K.startsWith("0") ? K.slice(1) : K;
                return Ss(de, (Le = o.tenantInfo) == null ? void 0 : Le.code, !0) ? !0 : (xe(ke("hint.invalidWalletNumber")), !1)
            },
            Jo = async (K, de = !1) => {
                var Oe;
                K == null || K.preventDefault();
                const oe = _i(B.value, w.value, g.value);
                if (!oe.isValid) return xe(oe.message);
                if (!Qo()) return;
                const ye = oe.amount;
                if (xi(de, D.value)) return Li({
                    subTabList: h,
                    amount: ye,
                    nativePayConfig: Q,
                    onSuccess: je => {
                        Z.value = !0, p.value = je, Ct(na(je))
                    }
                });
                const he = Ti({
                    amount: ye,
                    isParticipate: C.value,
                    subTabId: f.value,
                    processMode: ie.get(f.value).processMode,
                    rechargeRewardInfo: C.value ? M : null,
                    channelId: Me.value,
                    bankCode: Ce.value,
                    isSelectedChannel: tt.value,
                    hasBankList: J.value.length > 0
                });
                if (Be.value) {
                    const je = G.value ? ee.value : z.value;
                    he.rewardType = je.rewardType, he.rewardId = je.rewardId
                } else delete he.rewardType, delete he.rewardId;
                Object.assign(Ot, he), !C.value && "extend" in Ot && delete Ot.extend;
                const Le = p.value.find(je => je.id === f.value);
                n.orderInfo = { ...n.orderInfo,
                    payTypeName: (Oe = Le == null ? void 0 : Le.name) != null ? Oe : ""
                }, vi(B.value, {
                    THREE_PARTY_PAYMENT: () => {
                        Z.value = !1
                    }
                })
            };
        return nt(re, async K => {
            if (!K || !Fe.value) return;
            const de = a.value.path;
            de !== "/main/entrar" && de !== "/recharge/apply" || (sessionStorage.setItem("bdPayUrl", K), await be.push("/recharge/pay"))
        }), zt(K => {
            K.path !== "/recharge/pay" && n.isOpenOrderInfoModal && !n.orderInfoNavigating && (n.orderInfoNavigating = !0, setTimeout(() => {
                n.isOpenOrderInfoModal = !1, n.orderInfoNavigating = !1
            }, 360)), mn(), Z.value = !1
        }), {
            isShowThirdParty: $e,
            isBDRegion: Fe,
            isHasBottomTab: _t,
            showCloseBtn: ut,
            channelLoading: H,
            isParticipate: C,
            thirdUrl: re,
            tabId: d,
            tabList: m,
            description: T,
            readOnly: $,
            amountInput: B,
            placeholder: ct,
            maxAmount: g,
            minAmount: w,
            subTabList: p,
            subTabId: f,
            channelList: Xe,
            channelId: Me,
            amountList: x,
            isHasBonus: V,
            activityIsOpen: L,
            amountOfGift: A,
            rateOfGift: N,
            bannerUrl: R,
            merchantCy: ht,
            withdrawFlowStr: j,
            limitPlatformList: y,
            btnLoading: ls,
            iframeLoaded: O,
            isOpenOrderModal: ve,
            isOpenOrderInfoModal: Se,
            theme: Ue,
            isQRCode: le,
            isSelectedChannel: tt,
            bankCode: Ce,
            isFromActivity: me,
            bankList: J,
            rechargeRatio: kt,
            isVirtualCurrency: vt,
            QRCodeInfo: we,
            payChannelChange: to,
            amountHandle: jo,
            iframeCloseHandle: mn,
            recordHandle: Uo,
            mainTabChange: ss,
            amountInputChange: Fo,
            subTabChange: Ct,
            handleRechargeActivity: Go,
            bannerHandle: zo,
            iframeLoadHandle: Ko,
            submitForm: Jo,
            transferSuccessCb: () => {
                be.push("/rechargeRecord")
            },
            bankChange: K => {
                n.bankCode = K
            },
            dismissWeight: K => {
                Z.value = K
            },
            isWeightCycle: D,
            isShowWeight: Z,
            btnInfo: Te,
            t: ke,
            isDefaultBanner: Ke,
            hiddenActivitySwitch: Be,
            customBack: Yo,
            isOnlyPayTypeSub: wt,
            subTabListAll: v,
            firstRechargeRewardLevelsList: dt,
            payConfigData: ge
        }
    },
    Oi = {
        key: 0,
        class: "tag"
    },
    Vi = q({
        __name: "Tab",
        props: Ne({
            tabList: {},
            loading: {
                type: Boolean
            },
            activeBgColor: {}
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            const {
                theme: s
            } = We(), o = l, u = rt(a, "tabId"), n = d => {
                const m = d.detail.value;
                m !== u.value && (o("tabChange", m), o("update:tabId", m))
            };
            return (d, m) => (c(), _("div", {
                class: X(["pay-list", e(s)])
            }, [i(e(Tt), {
                value: u.value,
                scrollable: !0,
                mode: "ios",
                onIonChange: n,
                disabled: a.loading
            }, {
                default: b(() => [(c(!0), _(ae, null, fe(a.tabList, f => (c(), S(e(It), {
                    value: f.id
                }, {
                    default: b(() => [U(r(f.name) + " ", 1), f.tagValue ? (c(), _("div", Oi, r(f.tagValue), 1)) : k("", !0)]),
                    _: 2
                }, 1032, ["value"]))), 256))]),
                _: 1
            }, 8, ["value", "disabled"])], 2))
        }
    }),
    io = Y(Vi, [
        ["__scopeId", "data-v-0d7aa69e"]
    ]),
    o1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: io
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Mi = {
        class: "text"
    },
    Bi = {
        class: "rate"
    },
    Di = {
        class: "bottom flex-between"
    },
    Hi = {
        class: "rate"
    },
    Wi = {
        class: "amount"
    },
    Ui = q({
        __name: "BannerArea",
        props: {
            bannerUrl: {},
            rateOfGift: {},
            amountOfGift: {},
            merchantCy: {},
            isDefaultBanner: {
                type: Boolean
            }
        },
        emits: ["clickHandle"],
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = () => {
                    s("clickHandle")
                };
            return (u, n) => (c(), _("div", {
                class: "banner",
                style: yt({
                    backgroundImage: 'url("'.concat(a.bannerUrl, '")')
                }),
                onClick: o
            }, [t("p", Mi, [t("span", null, r(u.$t("viewsTabbar.depositLeft")), 1), t("span", Bi, r(" ".concat(e(La)(a.rateOfGift), "% ")), 1), t("span", null, r(u.$t("viewsTabbar.depositRight")), 1)]), t("p", Di, [t("span", null, r(u.$t("viewsTabbar.discountReward")), 1), t("span", null, [t("span", Hi, r(e(La)(a.rateOfGift)) + "%", 1), t("span", Wi, r("".concat(a.merchantCy, " +").concat(e(ue)(a.amountOfGift, {
                showSuffix: !0
            }))), 1)])])], 4))
        }
    }),
    ro = Y(Ui, [
        ["__scopeId", "data-v-eec8738b"]
    ]),
    Fi = {
        class: X(["checkbox-area"])
    },
    ji = q({
        __name: "ActivitySwitch",
        props: {
            isParticipate: {
                type: Boolean,
                required: !0
            },
            isParticipateModifiers: {}
        },
        emits: Ne(["handleSwitch", "update:isParticipate"], ["update:isParticipate"]),
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = rt(a, "isParticipate"),
                u = I(o.value),
                n = d => {
                    let m = d.detail.checked;
                    s("handleSwitch", d), s("update:isParticipate", m)
                };
            return (d, m) => (c(), _("div", Fi, [i(e(jl), {
                class: "",
                justify: "start",
                "label-placement": "end",
                modelValue: e(u),
                "onUpdate:modelValue": m[0] || (m[0] = f => te(u) ? u.value = f : null),
                onIonChange: n,
                mode: "md"
            }, {
                default: b(() => [U(r(d.$t("viewsTabbar.rechargeBonus")), 1)]),
                _: 1
            }, 8, ["modelValue"])]))
        }
    }),
    uo = Y(ji, [
        ["__scopeId", "data-v-5e6fd62f"]
    ]),
    Gi = {
        class: "recharge-qr-code-content"
    },
    zi = {
        class: "recharge-qr-code-detail"
    },
    qi = {
        class: "qr-area"
    },
    Ki = {
        class: "amount"
    },
    Yi = {
        class: "symbol"
    },
    Qi = {
        class: "amount-num"
    },
    Ji = {
        class: "qr-code"
    },
    Xi = {
        key: 0,
        class: "qr-code-info"
    },
    Zi = {
        class: "code"
    },
    er = {
        key: 1,
        class: "count-down"
    },
    tr = {
        class: "count-down-text"
    },
    ar = {
        class: "count-down-time"
    },
    nr = {
        class: "hour"
    },
    sr = {
        class: "minute"
    },
    or = {
        class: "second"
    },
    lr = {
        class: "recharge-order-detail"
    },
    ir = {
        class: "left"
    },
    rr = q({
        __name: "index",
        props: {
            orderNo: {},
            QRCode: {},
            expireTime: {},
            createTime: {},
            amount: {},
            merchantCy: {}
        },
        setup(a) {
            const {
                t: l
            } = it(), s = a, o = F(() => "QR".concat(s.QRCode.slice(-11))), u = C => typeof C == "string" && /^data:image\/[a-z+]+;base64,/i.test(C.trim()), n = F(() => u(s.QRCode)), d = () => {
                const C = document.createElement("a");
                C.href = s.QRCode, C.download = "qrcode-".concat(s.orderNo || Date.now(), ".png"), document.body.appendChild(C), C.click(), document.body.removeChild(C)
            }, m = F(() => n.value ? {
                label: "toggle.saveqrcode",
                onClick: d
            } : {
                label: "rechargeQR.000009",
                onClick: () => ot(s.QRCode)
            }), f = I("BE_PAID"), p = I([]), v = Sn([], ["MANUALLY-END", "TIMEOUT", "CANCEL", "LIMIT_EXCEEED"]), h = F(() => [{
                name: "".concat(l("rechargeQR.000006")),
                value: l("status.".concat(f.value)),
                statusColor: v(f.value)
            }, {
                name: "".concat(l("rechargeQR.000007")),
                value: s.createTime
            }, {
                name: "".concat(l("rechargeQR.000008")),
                value: s.orderNo,
                isCopy: !0
            }]);
            let y = null,
                g = !1;
            const w = C => {
                if (console.log(C, "expireTime"), !g)
                    if (g = !0, C > 0) {
                        f.value = "BE_PAID";
                        const L = Math.floor(C / 3600),
                            $ = Math.floor(C % 3600 / 60),
                            T = C % 60;
                        p.value = [...[L, $, T].map(B => B.toString().padStart(2, "0"))], y = setTimeout(() => {
                            g = !1, w(C - 1)
                        }, 1e3)
                    } else p.value = [], f.value = "TIMEOUT", clearTimeout(y), g = !0
            };
            return Ut(() => {
                w(s.expireTime)
            }), ba(() => {
                console.log(y, "expireTime"), g = !0, y && (clearTimeout(y), y = null)
            }), (C, L) => (c(), _("div", Gi, [t("ul", zi, [(c(), _(ae, null, fe(3, $ => t("li", null, [L[3] || (L[3] = t("span", {
                class: "dotted"
            }, null, -1)), U(" " + r(C.$t("rechargeQR.00000".concat($))), 1)])), 64))]), t("div", qi, [t("div", Ki, [t("span", Yi, r(a.merchantCy), 1), t("span", Qi, r(e(ue)(Number(a.amount), 2)), 1), i(e(ne), {
                class: "copy-icon",
                src: "/first/svg/assets/copy.svg",
                onClick: L[0] || (L[0] = $ => e(ot)(a.amount))
            })]), t("div", Ji, [e(n) ? (c(), S(e(pa), {
                key: 0,
                src: a.QRCode
            }, null, 8, ["src"])) : (c(), S(Gl, {
                key: 1,
                value: a.QRCode,
                size: e(ul)(9.375),
                margin: 2,
                color: "#000000",
                bgColor: "#FFFFFF"
            }, null, 8, ["value", "size"]))]), t("div", {
                class: "qr-btn",
                onClick: L[1] || (L[1] = (...$) => e(m).onClick && e(m).onClick(...$))
            }, r(C.$t(e(m).label)), 1), e(n) ? k("", !0) : (c(), _("div", Xi, [t("span", null, r(C.$t("rechargeQR.000005")), 1), t("span", Zi, r(e(o)), 1), i(e(ne), {
                class: "copy-icon",
                src: "/first/svg/assets/copy.svg",
                onClick: L[2] || (L[2] = $ => e(ot)(a.QRCode))
            })])), e(p).length > 0 ? (c(), _("div", er, [i(e(ne), {
                class: "time-icon",
                icon: e(zl)
            }, null, 8, ["icon"]), t("span", tr, r(C.$t("rechargeQR.000004")) + ":", 1), t("div", ar, [t("span", nr, r(e(p)[0]) + "h", 1), t("span", sr, r(e(p)[1]) + "m", 1), t("span", or, r(e(p)[2]) + "s", 1)])])) : k("", !0)]), t("ul", lr, [(c(!0), _(ae, null, fe(e(h), $ => (c(), _("li", null, [t("span", ir, r($.name), 1), t("span", {
                class: "right",
                style: yt({
                    color: $.statusColor
                })
            }, [U(r($.value) + " ", 1), $.isCopy ? (c(), S(e(ne), {
                key: 0,
                class: "copy-icon ml-1",
                src: "/first/svg/assets/copy.svg",
                onClick: T => e(ot)($.value)
            }, null, 8, ["onClick"])) : k("", !0)], 4)]))), 256))])]))
        }
    }),
    on = Y(rr, [
        ["__scopeId", "data-v-02bdc264"]
    ]),
    ur = {
        class: "transfer-wrap"
    },
    cr = {
        class: "title-wrap"
    },
    dr = {
        class: "stats-text-area"
    },
    mr = {
        key: 0,
        class: "waiting-text-desc"
    },
    pr = {
        class: "count-down-text"
    },
    fr = {
        class: "count-down-time"
    },
    hr = {
        class: "hour"
    },
    vr = {
        class: "minute"
    },
    br = {
        class: "second"
    },
    gr = {
        class: "amount-area"
    },
    yr = {
        key: 0,
        class: "amount-desc"
    },
    _r = {
        class: "order-info"
    },
    wr = {
        key: 0
    },
    Cr = {
        class: "sub-text"
    },
    $r = {
        class: "right-area"
    },
    Ir = {
        class: "text"
    },
    Tr = {
        key: 1
    },
    Ar = {
        class: "sub-text"
    },
    kr = {
        class: "right-area"
    },
    Sr = {
        class: "text"
    },
    Lr = {
        key: 2
    },
    xr = {
        class: "sub-text"
    },
    Nr = {
        class: "right-area"
    },
    Pr = {
        class: "text"
    },
    Rr = {
        key: 3
    },
    Er = {
        class: "sub-text"
    },
    Or = {
        class: "text"
    },
    Vr = {
        key: 4
    },
    Mr = {
        class: "sub-text"
    },
    Br = {
        class: "right-area qr-code-area"
    },
    Dr = ["src"],
    Hr = {
        class: "sub-text"
    },
    Wr = {
        class: "text"
    },
    Ur = {
        key: 5
    },
    Fr = {
        class: "sub-text"
    },
    jr = {
        class: "text"
    },
    Gr = {
        key: 6
    },
    zr = ["src"],
    qr = {
        class: "sub-text"
    },
    Kr = {
        class: "right-area"
    },
    Yr = {
        class: "text"
    },
    Qr = {
        key: 1,
        class: "real-name-area"
    },
    Jr = {
        class: "desc-text"
    },
    Xr = {
        class: "input-area"
    },
    Zr = {
        key: 2,
        class: "upload-wrap"
    },
    eu = {
        class: "title"
    },
    tu = {
        class: "upload-area"
    },
    au = {
        class: "rules"
    },
    nu = {
        key: 3,
        class: "btn-warp"
    },
    su = {
        key: 1
    },
    ou = q({
        __name: "orderModal",
        props: {
            isOpen: {
                type: Boolean
            },
            merchantCy: {},
            isVirtualCurrency: {
                type: Boolean
            }
        },
        emits: ["paySuccessCb"],
        setup(a, {
            emit: l
        }) {
            const {
                t: s
            } = it(), o = Nt(), u = qe(), {
                orderInfo: n,
                transferConfig: d
            } = Ve(o), m = I(0), f = I(""), p = I(null), v = I([]), h = ["NOT_ARRIVED", "BE_PAID"], y = ["SUCCESS", "PAID", "HAVE_ARRIVED"], g = ["MANUALLY-END", "TIMEOUT", "CANCEL", "LIMIT_EXCEEED"];
            F(() => {
                var P;
                return (P = u.tenantInfo) == null ? void 0 : P.legalTender
            }), F(() => {
                var P;
                return (P = u.tenantInfo) == null ? void 0 : P.currencyConfig
            });
            const w = l,
                C = F(() => h.includes(n.value.status)),
                L = F(() => n.value.isTransfer && C.value),
                $ = F(() => n.value.isTransfer && C.value && (d.value.transferNameRequired === "ON" || d.value.showTransferName === "ON")),
                T = F(() => {
                    const P = {
                        success: {
                            status: "success",
                            text: s("depositWithdrawal.000020"),
                            iconPath: "/first/svg/assets/success.svg"
                        },
                        fail: {
                            status: "fail",
                            text: s("status.".concat(n.value.status)),
                            iconPath: "/first/svg/assets/fail.svg"
                        },
                        waiting: {
                            status: "waiting",
                            text: s("depositWithdrawal.000002"),
                            iconPath: "".concat(Ae("svg/waiting.svg"))
                        },
                        pending: {
                            status: "waiting",
                            text: s("status.".concat(n.value.status)),
                            iconPath: "".concat(Ae("svg/waiting.svg"))
                        }
                    };
                    return y.includes(n.value.status) ? P.success : g.includes(n.value.status) ? P.fail : C.value ? P.waiting : P.pending
                }),
                B = F(() => n.value.isTransfer ? s("status.CONFIRM-TRANSFER") : s("label.continuePay")),
                N = () => {
                    o.isOpenOrderModal = !1
                },
                A = async () => {
                    n.value.qrCodeUrl && (f.value = await Gs.toDataURL(n.value.qrCodeUrl, {
                        width: 100,
                        margin: 2,
                        color: {
                            dark: "#000",
                            light: "#fff"
                        }
                    }))
                };
            let R = null,
                j = !1;
            const V = P => {
                    if (!j)
                        if (j = !0, P > 0) {
                            const M = Math.floor(P / 3600),
                                W = Math.floor(P % 3600 / 60),
                                ie = P % 60;
                            v.value = [...[M, W, ie].map(se => se.toString().padStart(2, "0"))], R = setTimeout(() => {
                                j = !1, V(P - 1)
                            }, 1e3)
                        } else v.value = [], C.value && (o.orderInfo.status = "TIMEOUT"), clearTimeout(R), j = !0
                },
                O = () => {
                    const P = "".concat(n.value.transferCompany, "-qrcode.png"),
                        M = document.createElement("a");
                    M.href = f, M.download = P, document.body.appendChild(M), M.click(), document.body.removeChild(M)
                },
                x = P => {
                    var M, W, ie, se;
                    console.log("上传成功:", (W = (M = P[0]) == null ? void 0 : M.response) == null ? void 0 : W.urls[0]), o.orderInfo.voucher = (se = (ie = P[0]) == null ? void 0 : ie.response) == null ? void 0 : se.urls[0]
                },
                D = P => {
                    console.error("上传失败:", P)
                },
                Z = I(!1),
                Q = async () => {
                    if (!Z.value) {
                        Z.value = !0;
                        try {
                            const P = {
                                    TRANSFER: bi,
                                    continuePay: ao
                                },
                                M = n.value.isTransfer ? "TRANSFER" : "continuePay";
                            await P[M]() && (o.isOpenOrderModal = !1, w("paySuccessCb", n.value))
                        } finally {
                            Z.value = !1
                        }
                    }
                };
            return Ut(async () => {
                V(n.value.expireTime), m.value = await Ln(), A()
            }), ba(() => {
                j = !0, R && (clearTimeout(R), R = null)
            }), (P, M) => (c(), S(e(Ra), {
                id: "modal-assets-order",
                "is-open": a.isOpen,
                onDidDismiss: N
            }, {
                default: b(() => [t("div", ur, [t("div", cr, [i(e(st), {
                    class: "title"
                }, {
                    default: b(() => [U(r(P.$t("depositWithdrawal.000001")), 1)]),
                    _: 1
                }), i(e(ne), {
                    slot: "icon-only",
                    class: "close",
                    src: "/first/svg/login/close.svg",
                    onClick: N
                })]), t("div", {
                    class: X(["status", e(T).status])
                }, [i(e(ne), {
                    class: X(["applying", "".concat(e(T).status, "-icon")]),
                    src: e(T).iconPath
                }, null, 8, ["class", "src"])], 2), t("div", dr, [t("div", {
                    class: X(["".concat(e(T).status, "-text")])
                }, r(e(T).text), 3), e(C) ? (c(), _("div", mr, [t("span", pr, r(P.$t("rechargeQR.000004")) + ":", 1), t("div", fr, [t("span", hr, r(e(v)[0]) + "h", 1), t("span", vr, r(e(v)[1]) + "m", 1), t("span", br, r(e(v)[2]) + "s", 1)])])) : k("", !0)]), t("div", gr, [i(He, {
                    amount: e(n).amount,
                    "icon-size": "1.25rem",
                    "show-legal-tender": !0,
                    class: "amount"
                }, {
                    default: b(() => [t("span", null, r(e(Kt)(e(n).amount)), 1)]),
                    _: 1
                }, 8, ["amount"])]), a.isVirtualCurrency ? (c(), _("div", yr, [i(Ls, {
                    ratio: e(m),
                    variant: "large"
                }, null, 8, ["ratio"])])) : k("", !0), M[9] || (M[9] = t("div", {
                    class: "line"
                }, null, -1)), t("ul", _r, [e(n).transferRealName ? (c(), _("li", wr, [t("span", Cr, r(P.$t("depositWithdrawal.000005")), 1), t("div", $r, [t("span", Ir, r(e(n).transferRealName), 1), i(e(ne), {
                    class: "copy-icon",
                    src: e(Ae)("img/common/copy.svg"),
                    onClick: M[0] || (M[0] = W => e(ot)(e(n).transferRealName))
                }, null, 8, ["src"])])])) : k("", !0), e(n).transferAccount ? (c(), _("li", Tr, [t("span", Ar, r(P.$t("depositWithdrawal.000006")), 1), t("div", kr, [t("span", Sr, r(e(n).transferAccount), 1), i(e(ne), {
                    class: "copy-icon",
                    src: e(Ae)("img/common/copy.svg"),
                    onClick: M[1] || (M[1] = W => e(ot)(e(n).transferAccount))
                }, null, 8, ["src"])])])) : k("", !0), e(n).transferCompany ? (c(), _("li", Lr, [t("span", xr, r(P.$t("depositWithdrawal.000007")), 1), t("div", Nr, [i(e(ne), {
                    class: "bank-icon",
                    src: e(Ae)("svg/bankCard.svg")
                }, null, 8, ["src"]), t("span", Pr, r(e(n).transferCompany), 1), i(e(ne), {
                    class: "copy-icon",
                    src: e(Ae)("img/common/copy.svg"),
                    onClick: M[2] || (M[2] = W => e(ot)(e(n).transferCompany))
                }, null, 8, ["src"])])])) : k("", !0), e(n).payTypeName ? (c(), _("li", Rr, [t("span", Er, r(P.$t("viewsAssets.transactionType")), 1), t("span", Or, r(e(n).payTypeName), 1)])) : k("", !0), e(n).qrCodeUrl ? (c(), _("li", Vr, [t("span", Mr, r(P.$t("depositWithdrawal.000009")), 1), t("div", Br, [t("div", {
                    onClick: O,
                    class: "download-qrcode"
                }, r(P.$t("viewsSystem.downloads")), 1), t("img", {
                    src: e(f),
                    class: "qr-code-img"
                }, null, 8, Dr)])])) : k("", !0), t("li", null, [t("span", Hr, r(P.$t("depositWithdrawal.000010")), 1), t("span", Wr, r(e(n).createTime), 1)]), e(n).payerRealName ? (c(), _("li", Ur, [t("span", Fr, r(P.$t("depositWithdrawal.000033")), 1), t("span", jr, r(e(n).payerRealName), 1)])) : k("", !0), e(n).transferVoucher ? (c(), _("li", Gr, [M[7] || (M[7] = t("span", {
                    class: "sub-text"
                }, null, -1)), t("div", {
                    class: "voucher-img-wrap",
                    onClick: M[3] || (M[3] = W => p.value = e(n).transferVoucher)
                }, [t("img", {
                    src: e(n).transferVoucher,
                    class: "voucher-img"
                }, null, 8, zr)])])) : k("", !0), t("li", null, [t("span", qr, r(P.$t("depositWithdrawal.000011")), 1), t("div", Kr, [t("span", Yr, r(e(n).orderNo), 1), i(e(ne), {
                    class: "copy-icon",
                    src: e(Ae)("img/common/copy.svg"),
                    onClick: M[4] || (M[4] = W => e(ot)(e(n).orderNo))
                }, null, 8, ["src"])])])]), M[10] || (M[10] = t("div", {
                    class: "line"
                }, null, -1)), e($) ? (c(), _("div", Qr, [t("div", Jr, r(P.$t("depositWithdrawal.000031")), 1), t("div", Xr, [i(ze, {
                    modelValue: e(n).payerName,
                    "onUpdate:modelValue": M[5] || (M[5] = W => e(n).payerName = W),
                    modelModifiers: {
                        trim: !0
                    },
                    type: "realName",
                    noTrim: !0,
                    bgColor: "--color-bg-400",
                    placeholder: P.$t("hint.realName"),
                    "error-text": P.$t("hint.correctInformation"),
                    maxlength: e(Xt),
                    clear: !0,
                    required: ""
                }, null, 8, ["modelValue", "placeholder", "error-text", "maxlength"])])])) : k("", !0), e(L) ? (c(), _("div", Zr, [t("div", eu, [U(r(P.$t("depositWithdrawal.000021")), 1), M[8] || (M[8] = t("span", {
                    class: "asterisk"
                }, "*", -1))]), t("div", tu, [i(xs, {
                    onSuccess: x,
                    onError: D,
                    maxCount: 1,
                    transferOrderNo: e(n).orderNo
                }, null, 8, ["transferOrderNo"]), t("div", au, [t("p", null, r(P.$t("depositWithdrawal.000022")), 1), t("p", null, r(P.$t("depositWithdrawal.000023")), 1), t("p", null, r(P.$t("depositWithdrawal.000024")), 1)])])])) : k("", !0), e(C) ? (c(), _("div", nu, [t("div", {
                    class: "cancel-btn btn",
                    onClick: N
                }, r(P.$t("label.cancelOrder")), 1), t("div", {
                    class: X(["confirm-btn btn", {
                        "btn-loading": e(Z)
                    }]),
                    onClick: Q
                }, [e(Z) ? (c(), S(e(Ft), {
                    key: 0,
                    name: "crescent",
                    class: "btn-spinner"
                })) : (c(), _("span", su, r(e(B)), 1))], 2)])) : k("", !0)]), i(Ns, {
                    previewImage: e(p),
                    onClosePreviewModal: M[6] || (M[6] = W => p.value = null)
                }, null, 8, ["previewImage"])]),
                _: 1
            }, 8, ["is-open"]))
        }
    }),
    ln = Y(ou, [
        ["__scopeId", "data-v-e89f3095"]
    ]),
    ra = {
        first: {
            channel: () => oa(() => Promise.resolve().then(() => ey), void 0),
            weight: () => oa(() => Promise.resolve().then(() => uy), void 0),
            standard: () => oa(() => Promise.resolve().then(() => Ay), void 0)
        },
        default: {
            channel: () => oa(() => Promise.resolve().then(() => My), void 0),
            weight: () => oa(() => Promise.resolve().then(() => zy), void 0),
            standard: () => oa(() => Promise.resolve().then(() => Zy), void 0)
        }
    },
    lu = {
        first: {
            channel: la(ia(ra.first.channel)),
            weight: la(ia(ra.first.weight)),
            standard: la(ia(ra.first.standard))
        },
        default: {
            channel: la(ia(ra.default.channel)),
            weight: la(ia(ra.default.weight)),
            standard: la(ia(ra.default.standard))
        }
    },
    co = (a, l) => {
        const s = F(() => {
                const {
                    skin: u
                } = We();
                return u === "default" ? "default" : "first"
            }),
            o = F(() => a.value ? "weight" : l.value ? "channel" : "standard");
        return F(() => {
            const u = s.value,
                n = o.value;
            return lu[u][n]
        })
    },
    mo = Symbol("rechargeState"),
    po = Symbol("rechargeEvents"),
    fo = (a, l) => {
        ds(mo, a), ds(po, l)
    },
    iu = () => {
        const a = zs(mo);
        if (!a) throw new Error("useRechargeState must be used within a component that provides recharge state");
        return a
    },
    ru = () => {
        const a = zs(po);
        if (!a) throw new Error("useRechargeEvents must be used within a component that provides recharge events");
        return a
    },
    ya = () => ({ ...iu(),
        ...ru()
    }),
    uu = ["onClick"],
    cu = {
        class: "tag-icon-wrap"
    },
    du = ["src"],
    mu = {
        class: "name"
    },
    pu = {
        key: 0,
        class: "bonus-area"
    },
    fu = q({
        __name: "WeightPayMethods",
        props: Ne({
            tabList: {},
            isPopup: {
                type: Boolean
            }
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            const s = rt(a, "tabId"),
                o = l,
                u = n => {
                    n !== s.value && (o("tabChange", n), o("update:tabId", n))
                };
            return (n, d) => (c(), _("ul", {
                class: X(["pay-method-wrap", {
                    "pay-method-popup": a.isPopup
                }])
            }, [(c(!0), _(ae, null, fe(a.tabList, m => (c(), _("li", {
                class: X(["pay-method-item", {
                    active: s.value === m.id
                }]),
                key: m.id,
                onClick: () => u(m.id)
            }, [t("div", cu, [(c(!0), _(ae, null, fe(m.tags, f => (c(), S(e(ne), {
                slot: "icon-only",
                src: f,
                class: "tag-icon"
            }, null, 8, ["src"]))), 256))]), t("img", {
                src: m.icon,
                alt: "logo",
                class: "logo"
            }, null, 8, du), t("div", mu, r(m.name), 1), m.tagValue ? (c(), _("div", pu, r(n.$t("task.000011")) + " " + r(m.tagValue), 1)) : k("", !0), s.value === m.id ? (c(), S(e(ne), {
                key: 1,
                slot: "icon-only",
                src: e(Ae)("svg/ok.svg"),
                class: "ok-icon"
            }, null, 8, ["src"])) : k("", !0)], 10, uu))), 128))], 2))
        }
    }),
    hu = Y(fu, [
        ["__scopeId", "data-v-bf70ff99"]
    ]),
    vu = {
        class: "weight-container-mask"
    },
    bu = {
        class: "category-separation-container"
    },
    gu = {
        class: "title"
    },
    yu = {
        class: "amount"
    },
    _u = {
        class: "merchantCy"
    },
    wu = {
        key: 0,
        class: "extra"
    },
    Cu = {
        class: "bonus-text"
    },
    $u = {
        class: "bonus-amount"
    },
    Iu = {
        class: "merchantCy"
    },
    Tu = {
        class: "pay-method-container"
    },
    Au = q({
        __name: "Weight",
        props: Ne({
            merchantCy: {},
            distance: {},
            amountInput: {},
            amountOfGift: {},
            isHasBonus: {
                type: Boolean
            },
            tabList: {}
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["dismissWeight", "tabChange", "update:tabId", "submitForm"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            ga(m => ({
                v7f28e6ef: m.distance
            }));
            const s = rt(a, "tabId"),
                o = l,
                u = () => {
                    o("dismissWeight", !1)
                },
                n = m => {
                    m !== s.value && (o("tabChange", m), o("update:tabId", m))
                },
                d = m => {
                    o("submitForm", m, !0)
                };
            return (m, f) => (c(), _("div", vu, [t("div", bu, [i(e(ne), {
                slot: "icon-only",
                class: "close-icon",
                src: "/first/svg/login/close.svg",
                onClick: u
            }), t("div", gu, r(m.$t("depositWithdrawal.000036")), 1), t("div", yu, [t("span", _u, r(a.merchantCy), 1), U(r(e(ue)(Number(a.amountInput))), 1)]), a.isHasBonus ? (c(), _("div", wu, [t("span", Cu, [U(r(m.$t("viewsAssets.Extra")) + " ", 1), i(e(ne), {
                icon: e(ql)
            }, null, 8, ["icon"])]), t("div", $u, [t("span", Iu, r(a.merchantCy), 1), U(r(e(ue)(a.amountOfGift)), 1)])])) : k("", !0), t("div", Tu, [i(hu, {
                tabId: s.value,
                "onUpdate:tabId": f[0] || (f[0] = p => s.value = p),
                tabList: a.tabList,
                onTabChange: n
            }, null, 8, ["tabId", "tabList"])]), t("div", {
                class: "pay-btn",
                onClick: d
            }, r(m.$t("label.depositNow")), 1)])]))
        }
    }),
    zn = Y(Au, [
        ["__scopeId", "data-v-87f1ec95"]
    ]),
    ho = a => {
        const l = Ps(),
            s = 80,
            o = F(() => l.tabBarHeight || s);
        return {
            contentPaddingBottom: F(() => "calc(".concat(a.value ? o.value : 0, "px + 1rem + env(safe-area-inset-bottom))"))
        }
    },
    ku = {
        class: "recharge-notice-wrap"
    },
    Su = {
        class: "title"
    },
    Lu = {
        class: "desc-text"
    },
    xu = {
        class: "desc-text-wrap"
    },
    Nu = {
        class: "desc-text-item"
    },
    Pu = {
        class: "right-area"
    },
    Ru = {
        class: "item-text-1"
    },
    Eu = {
        class: "item-text-2"
    },
    Ou = {
        class: "desc-text-item mt-3"
    },
    Vu = {
        class: "right-area"
    },
    Mu = {
        class: "item-text-1"
    },
    Bu = {
        class: "item-text-2"
    },
    Du = {
        class: "rate-text"
    },
    Hu = {
        class: "desc-text-bottom"
    },
    Wu = {
        class: "desc-text-bottom"
    },
    Uu = q({
        __name: "RechargeNotice",
        props: {
            isOpen: {
                type: Boolean
            }
        },
        emits: ["didDismiss"],
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = () => {
                    s("didDismiss")
                },
                u = () => {
                    s("didDismiss")
                };
            return (n, d) => (c(), S(e(Ra), {
                id: "modal-recharge-notice",
                "is-open": a.isOpen,
                onDidDismiss: u
            }, {
                default: b(() => [t("div", ku, [i(e(ne), {
                    class: "close-icon",
                    src: "/svg/close_button.svg",
                    onClick: o
                }), t("div", Su, r(n.$t("rechargeNotice.000001")), 1), t("div", Lu, r(n.$t("rechargeNotice.000002")), 1), t("div", xu, [t("div", Nu, [d[0] || (d[0] = t("div", {
                    class: "desc-text-item-index"
                }, "1", -1)), t("div", Pu, [t("div", Ru, r(n.$t("rechargeNotice.000003")), 1), t("div", Eu, r(n.$t("rechargeNotice.000004")), 1)])]), t("div", Ou, [d[1] || (d[1] = t("div", {
                    class: "desc-text-item-index"
                }, "2", -1)), t("div", Vu, [t("div", Mu, r(n.$t("rechargeNotice.000005")), 1), t("div", Bu, r(n.$t("rechargeNotice.000006")), 1)])])]), t("div", Du, r(n.$t("rechargeNotice.000007")), 1), t("div", Hu, r(n.$t("rechargeNotice.000008")), 1), t("div", Wu, r(n.$t("rechargeNotice.000009")), 1), t("div", {
                    class: "btn-wrap",
                    onClick: u
                }, r(n.$t("rechargeNotice.0000010")), 1)])]),
                _: 1
            }, 8, ["is-open"]))
        }
    }),
    vo = Y(Uu, [
        ["__scopeId", "data-v-657333f7"]
    ]),
    vs = a => "recharge_notice_date_".concat(a),
    bs = a => "recharge_notice_session_".concat(a),
    bo = a => {
        const l = I(!1),
            s = At(),
            o = qe(),
            u = m => {
                sessionStorage.setItem(bs(m), "1"), localStorage.setItem(vs(m), new Date().toDateString())
            },
            n = () => {
                l.value = !1
            },
            d = async () => {
                const m = o.tenantInfo || await o.getTenantInfo();
                if ((m == null ? void 0 : m.code) !== "ID" || a.value) return;
                const f = await s.user || await s.getUser();
                if (!(f != null && f.userId)) return;
                const p = f == null ? void 0 : f.userId,
                    {
                        rechargeCount: v
                    } = await no();
                if ((v != null ? v : 0) >= 1) return;
                (!sessionStorage.getItem(bs(p)) || localStorage.getItem(vs(p)) !== new Date().toDateString()) && (l.value = !0, u(p))
            };
        return Dn(() => {
            ja(() => {
                d()
            })
        }), {
            noticeIsOpen: l,
            noticeDidDismiss: n
        }
    },
    Fu = ["src"],
    ju = {
        key: 1,
        class: "flex items-center justify-center h-full"
    },
    Gu = 24,
    zu = q({
        __name: "index",
        setup(a) {
            ga(Ze => ({
                a327ab24: e(G),
                v234c2a9c: e(ee),
                v1f192384: Ze.distance2
            }));
            const l = I(null),
                {
                    isShowThirdParty: s,
                    isBDRegion: o,
                    isHasBottomTab: u,
                    showCloseBtn: n,
                    channelLoading: d,
                    isParticipate: m,
                    thirdUrl: f,
                    tabId: p,
                    tabList: v,
                    description: h,
                    subTabList: y,
                    subTabId: g,
                    amountInput: w,
                    placeholder: C,
                    maxAmount: L,
                    minAmount: $,
                    readOnly: T,
                    channelList: B,
                    channelId: N,
                    amountList: A,
                    isHasBonus: R,
                    activityIsOpen: j,
                    amountOfGift: V,
                    rateOfGift: O,
                    bannerUrl: x,
                    merchantCy: D,
                    withdrawFlowStr: Z,
                    limitPlatformList: Q,
                    btnLoading: P,
                    iframeLoaded: M,
                    isOpenOrderModal: W,
                    theme: ie,
                    isQRCode: se,
                    isSelectedChannel: ke,
                    bankCode: Re,
                    bankList: Ke,
                    isWeightCycle: Ue,
                    isVirtualCurrency: _e,
                    QRCodeInfo: ge,
                    bankChange: we,
                    payChannelChange: Ie,
                    subTabChange: Me,
                    iframeCloseHandle: Xe,
                    recordHandle: H,
                    mainTabChange: J,
                    amountInputChange: Ce,
                    amountHandle: re,
                    handleRechargeActivity: le,
                    bannerHandle: Ee,
                    iframeLoadHandle: ve,
                    submitForm: Se,
                    transferSuccessCb: me,
                    dismissWeight: Fe,
                    btnInfo: $e,
                    isFromActivity: _t,
                    isShowWeight: ut,
                    t: ct,
                    isDefaultBanner: ht,
                    hiddenActivitySwitch: Rt,
                    isOnlyPayTypeSub: kt,
                    subTabListAll: vt,
                    firstRechargeRewardLevelsList: wt,
                    payConfigData: dt
                } = lo(),
                {
                    height: Et
                } = Hn(l),
                G = F(() => "calc(".concat(Et.value + Gu, "px)")),
                {
                    contentPaddingBottom: ee
                } = ho(u),
                E = () => {
                    _t.value ? be.back() : Xe()
                },
                z = co(Ue, ke),
                {
                    noticeIsOpen: pe,
                    noticeDidDismiss: Be
                } = bo(s);
            return fo({
                channelLoading: d,
                isParticipate: m,
                isVirtualCurrency: _e,
                isHasBonus: R,
                readOnly: T,
                subTabList: y,
                subTabId: g,
                channelList: B,
                channelId: N,
                bankList: Ke,
                bankCode: Re,
                amountInput: w,
                amountList: A,
                placeholder: C,
                maxAmount: L,
                minAmount: $,
                amountOfGift: V,
                limitPlatformList: Q,
                withdrawFlowStr: Z,
                description: h,
                merchantCy: D,
                distance: ee,
                isShowWeight: ut,
                subTabListAll: vt,
                isOnlyPayTypeSub: kt,
                payConfigData: dt
            }, {
                subTabChange: Me,
                payChannelChange: Ie,
                bankChange: we,
                amountHandle: re,
                amountInputChange: Ce
            }), (Ze, et) => (c(), S(e(Pe), null, {
                default: b(() => [e(s) ? (c(), S(Je, {
                    key: 0,
                    shadow: "",
                    title: "".concat(e(ct)("main.entrar"))
                }, {
                    start: b(() => [i(e(Jt), {
                        class: "finish",
                        onClick: E,
                        fill: "clear"
                    }, {
                        default: b(() => [U(r(Ze.$t("main.finish")), 1)]),
                        _: 1
                    })]),
                    end: b(() => [t("div", {
                        class: X(["icon-area flex-center", [e(ie)]])
                    }, [i(e(ne), {
                        slot: "icon-only",
                        class: "record",
                        onClick: e(H),
                        src: "/first/svg/assets/record.svg"
                    }, null, 8, ["onClick"])], 2)]),
                    _: 1
                }, 8, ["title"])) : (c(), S(Rs, {
                    key: 1,
                    contentText: "".concat(e(ct)("main.entrar")),
                    isShowCloseicon: e(n),
                    onRecordHandle: e(H),
                    isOnlyPayTypeSub: e(kt),
                    isShowCustomer: !1
                }, null, 8, ["contentText", "isShowCloseicon", "onRecordHandle", "isOnlyPayTypeSub"])), e(se) ? (c(), S(e(ce), {
                    key: 2,
                    class: "recharge-qr-code"
                }, {
                    default: b(() => [i(on, en(tn({ ...e(ge),
                        merchantCy: e(D) || ""
                    })), null, 16)]),
                    _: 1
                })) : k("", !0), e(s) ? k("", !0) : (c(), S(e(ce), {
                    key: 3,
                    class: "first-content",
                    id: "recharge-content"
                }, {
                    default: b(() => [e(kt) ? k("", !0) : (c(), S(io, {
                        key: 0,
                        "tab-id": e(p),
                        loading: e(d),
                        tabList: e(v),
                        onTabChange: e(J)
                    }, null, 8, ["tab-id", "loading", "tabList", "onTabChange"])), (c(), S(Ea(e(z)))), Bt(i(ro, {
                        merchantCy: e(D),
                        bannerUrl: e(x),
                        amountOfGift: e(V),
                        rateOfGift: e(O),
                        onClickHandle: e(Ee),
                        isDefaultBanner: e(ht)
                    }, null, 8, ["merchantCy", "bannerUrl", "amountOfGift", "rateOfGift", "onClickHandle", "isDefaultBanner"]), [
                        [Dt, e(m)]
                    ]), e(j) && !e(Rt) && !e(wt).length ? (c(), S(uo, {
                        key: 1,
                        isParticipate: e(m),
                        "onUpdate:isParticipate": et[0] || (et[0] = De => te(m) ? m.value = De : null),
                        onHandleSwitch: e(le)
                    }, null, 8, ["isParticipate", "onHandleSwitch"])) : k("", !0)]),
                    _: 1
                })), !e(s) && !e(ut) ? (c(), S(Pa, {
                    key: 4,
                    merchantCy: e(D),
                    amount: e(w),
                    disabled: e($e).disabled,
                    ref_key: "footEl",
                    ref: l,
                    textContent: Ze.$t("viewsAssets.TDR"),
                    isHasBottomTab: e(u),
                    btnText: e($e).btnText,
                    suffixLoading: e(P),
                    onSubmitForm: e(Se)
                }, null, 8, ["merchantCy", "amount", "disabled", "textContent", "isHasBottomTab", "btnText", "suffixLoading", "onSubmitForm"])) : k("", !0), i(vo, {
                    isOpen: e(pe),
                    onDidDismiss: e(Be),
                    isShowThirdParty: e(s)
                }, null, 8, ["isOpen", "onDidDismiss", "isShowThirdParty"]), e(o) ? k("", !0) : (c(), S(e(ce), {
                    key: 5,
                    id: "iframe",
                    class: X(["third-content", {
                        hidden: !e(f)
                    }])
                }, {
                    default: b(() => [e(f) ? Bt((c(), _("iframe", {
                        key: 0,
                        class: "w-full h-full",
                        id: "iframe-content",
                        src: e(f),
                        onLoad: et[1] || (et[1] = (...De) => e(ve) && e(ve)(...De)),
                        onError: et[2] || (et[2] = De => P.value = !1),
                        frameborder: "0"
                    }, null, 40, Fu)), [
                        [Dt, e(M)]
                    ]) : k("", !0), e(M) ? k("", !0) : (c(), _("div", ju, [i(e(Ft), {
                        class: "w-20 h-20",
                        name: "dots",
                        color: "light"
                    })]))]),
                    _: 1
                }, 8, ["class"])), e(W) && (Ze.$route.path === "/main/entrar" || Ze.$route.path === "/recharge/apply") ? (c(), S(ln, {
                    key: 6,
                    isOpen: e(W),
                    merchantCy: e(D),
                    isVirtualCurrency: e(_e),
                    onPaySuccessCb: e(me)
                }, null, 8, ["isOpen", "merchantCy", "isVirtualCurrency", "onPaySuccessCb"])) : k("", !0), e(ut) ? (c(), S(zn, {
                    key: 7,
                    merchantCy: e(D),
                    distance: e(ee),
                    amountInput: e(w),
                    isHasBonus: e(R),
                    amountOfGift: e(V),
                    onDismissWeight: e(Fe),
                    tabList: e(y),
                    onTabChange: e(Me),
                    "tab-id": e(g),
                    "onUpdate:tabId": et[3] || (et[3] = De => te(g) ? g.value = De : null),
                    onSubmitForm: e(Se)
                }, null, 8, ["merchantCy", "distance", "amountInput", "isHasBonus", "amountOfGift", "onDismissWeight", "tabList", "onTabChange", "tab-id", "onSubmitForm"])) : k("", !0)]),
                _: 1
            }))
        }
    }),
    qu = Y(zu, [
        ["__scopeId", "data-v-fa4d69d9"]
    ]),
    l1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: qu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aa = () => {
        const {
            theme: a
        } = We();
        switch (a) {
            case "green-dark":
            case "yellow-dark":
                return "";
            case "blue-default":
                return "--color-bg-200";
            case "amber-purple":
                return "--color-bg-200";
            default:
                return ""
        }
    },
    Ku = ["src"],
    Yu = {
        key: 1,
        class: "flex justify-center items-center h-full"
    },
    Qu = q({
        __name: "index",
        setup(a) {
            const {
                t: l
            } = it(), s = Nt(), o = At(), u = Tn(), n = I(""), d = I(!1);
            let m = "",
                f = !1,
                p = !1,
                v = !1,
                h = 0,
                y = 0;
            const g = () => {
                    var N, A, R, j;
                    const B = history.state || {};
                    history.pushState({
                        back: (A = (N = B.current) != null ? N : B.back) != null ? A : null,
                        current: (R = B.current) != null ? R : null,
                        forward: null,
                        replaced: !1,
                        position: ((j = B.position) != null ? j : history.length - 1) + 1,
                        scroll: null
                    }, "", location.href)
                },
                w = () => {
                    if (f) return;
                    f = !0, window.removeEventListener("popstate", w);
                    const B = history.length - h;
                    console.log(B, "---stepsToExit"), history.go(-B)
                },
                C = () => {
                    window.removeEventListener("popstate", w), s.isOpenOrderInfoModal = !1, Zt()
                },
                L = B => {
                    m === B.orderNo && (p = !0, sessionStorage.removeItem("bdPayUrl"), sessionStorage.removeItem("bdOrderInfo"), sessionStorage.removeItem("bdTransferConfig"), s.thirdUrl = "", s.orderNo = "", u.APKTaskPopupTime = "Recharge", An({
                        type: kn.TIPS,
                        msg: l("popup.tips15"),
                        leftBtnText: l("main.confirm"),
                        leftBtnCallback: C
                    }))
                };
            Dn(() => {
                if (h = history.length, console.log(h, "---preHistoryLength enter"), o.isRechargeing = !0, n.value = sessionStorage.getItem("bdPayUrl") || s.thirdUrl, d.value = !1, s.orderInfo.orderNo) sessionStorage.setItem("bdOrderInfo", JSON.stringify(s.orderInfo)), sessionStorage.setItem("bdTransferConfig", JSON.stringify(s.transferConfig));
                else {
                    const B = sessionStorage.getItem("bdOrderInfo");
                    B && (s.orderInfo = JSON.parse(B));
                    const N = sessionStorage.getItem("bdTransferConfig");
                    N && (s.transferConfig = JSON.parse(N))
                }
                m = s.orderNo || s.orderInfo.orderNo, p = !1, f = !1, v = !1, pt.on("user/pay-success", L)
            }), Kl(() => {
                s.isOpenOrderInfoModal = !0
            }), Yl(() => {
                o.isRechargeing = !1, pt.off("user/pay-success", L), p && (s.isOpenOrderInfoModal = !1), window.removeEventListener("popstate", w), p = !1, n.value = ""
            });
            const $ = () => (history.back(), !0),
                T = () => {
                    be.currentRoute.value.path === "/recharge/pay" && (y = history.length, d.value = !0, console.log(y - h, "---distance Len"), y - h >= 1 && !v && (v = !0, g(), window.addEventListener("popstate", w)))
                };
            return (B, N) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    title: e(l)("main.entrar"),
                    bgColor: e(aa)(),
                    customBack: $
                }, null, 8, ["title", "bgColor"]), i(e(ce), {
                    id: "bd-pay-iframe"
                }, {
                    default: b(() => [e(n) ? Bt((c(), _("iframe", {
                        class: "w-full h-full",
                        key: e(n),
                        src: e(n),
                        onLoad: T,
                        frameborder: "0"
                    }, null, 40, Ku)), [
                        [Dt, e(d)]
                    ]) : k("", !0), e(d) ? k("", !0) : (c(), _("div", Yu, [i(e(Ft), {
                        class: "w-20 h-20",
                        name: "dots",
                        color: "light"
                    })]))]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Ju = Y(Qu, [
        ["__scopeId", "data-v-f76fe6bd"]
    ]),
    i1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ju
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    rn = a => a.detail.value.replace(/[^a-zA-Z0-9\s^]+/g, "");
I("");
I("");
I(!1);
const Xu = () => {
        const {
            t: a
        } = it(), l = I(null), s = lt({}), o = I({}), u = be.currentRoute, n = F(() => Object.values(s).every(A => A)), d = (A, R) => {
            A && (o.value[R] = A)
        };
        let m = !1;
        const f = {
                phone: {
                    name: "phone",
                    label: "phone",
                    placeholder: "tipPhone",
                    errorText: "invalidPhone",
                    type: "phone",
                    rule: {}
                },
                email: {
                    name: "email",
                    label: "email",
                    placeholder: "tipEmail",
                    errorText: "invalidEmail",
                    type: "email",
                    rule: {
                        maxlength: 64
                    }
                },
                realName: {
                    name: "realName",
                    label: "name",
                    placeholder: "tipName",
                    errorText: "invalidName",
                    type: "text",
                    rule: {
                        maxlength: Xt
                    }
                },
                cpf: {
                    name: "cpf",
                    label: "cpf",
                    placeholder: "tipPayCPF",
                    errorText: "invalidCPF",
                    type: "cpf",
                    rule: {
                        minlength: 11,
                        maxlength: 11
                    }
                }
            },
            p = A => {
                const R = Gn(A.payUrl),
                    j = Nt();
                j.thirdUrl = R.url, j.isQRCode = R.isQRCode, j.orderNo = A.orderNo, be.replace("/recharge/apply")
            },
            v = (A = !0) => {
                ua.value.forEach(R => {
                    var j;
                    Reflect.deleteProperty(s, R), A && ((j = o.value[R]) == null || j.removeStatus())
                })
            },
            h = async A => {
                try {
                    s.realName && (s.realName = Ua(s.realName)), await Es(s), A == null || A(), v(!1)
                } catch (R) {
                    m = !1
                }
            },
            y = () => {
                h(() => $s(p).then(() => {
                    m = !1
                }))
            },
            g = () => {
                h(() => {
                    m = !1, setTimeout(() => {
                        be.back()
                    }, 500)
                })
            },
            w = () => {
                h(async () => {
                    m = !1, await pi("PAYBETWALLET"), be.back()
                })
            },
            C = A => ({
                THREE_PARTY_PAYMENT: y,
                TRANSFER: () => {
                    console.log("transfer")
                },
                THREE_PARTY_WALLET: g,
                enterWallet: w
            })[A],
            L = async () => {
                var O;
                if (m) return;
                m = !0;
                let A = (O = l.value) == null ? void 0 : O.querySelectorAll(".ion-invalid");
                if (A && A.length) return m = !1, !1;
                const R = u.value.params.processMode,
                    j = C(R),
                    V = {
                        cb: j,
                        cpf: s.cpf,
                        name: s.realName
                    };
                if (s.cpf || s.realName) {
                    xn(V, "recharge"), m = !1;
                    return
                }
                j()
            },
            $ = (A, R) => {
                R === "realName" && setTimeout(() => {
                    s.realName = rn(A)
                })
            },
            T = A => {
                A.forEach(R => {
                    s[R] = ""
                })
            },
            B = A => {
                const R = (j, V = "hint") => "".concat(a("".concat(V, ".").concat(j)));
                return A.map(j => {
                    let V = f[j];
                    const O = R(V.placeholder),
                        x = R(V.errorText),
                        D = R(V.label, "label");
                    return { ...V,
                        label: D,
                        errorText: x,
                        placeholder: O
                    }
                })
            },
            N = F(() => ua.value.length ? (T(ua.value), B(ua.value)) : (be.back(), []));
        return zt(() => {
            ua.value.length && v()
        }), {
            inputInfoList: N,
            CPFInfo: s,
            btnDisabled: n,
            formEl: l,
            setItemRef: d,
            t: a,
            bindCPF: L,
            handleInput: $
        }
    },
    Zu = {
        class: "tip-text"
    },
    ec = {
        class: "label"
    },
    tc = {
        class: "input-area"
    },
    ac = q({
        __name: "index",
        setup(a) {
            const {
                inputInfoList: l,
                CPFInfo: s,
                btnDisabled: o,
                formEl: u,
                setItemRef: n,
                t: d,
                bindCPF: m,
                handleInput: f
            } = Xu();
            return (p, v) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    title: p.$t("viewsAssets.bindCPF"),
                    bgColor: e(aa)()
                }, null, 8, ["title", "bgColor"]), i(e(ce), {
                    class: "bind-CPF-content"
                }, {
                    default: b(() => [t("div", Zu, r(p.$t("viewsAssets.bindCPFTip")), 1), t("div", {
                        ref_key: "formEl",
                        ref: u,
                        class: "form-wrap"
                    }, [(c(!0), _(ae, null, fe(e(l), (h, y) => (c(), _("div", {
                        class: X({
                            item: y !== 0
                        })
                    }, [t("p", ec, r(h.label), 1), t("div", tc, [i(ze, jt({
                        type: h.type,
                        placeholder: h.placeholder,
                        "error-text": h.errorText,
                        modelValue: e(s)[h.name],
                        "onUpdate:modelValue": g => e(s)[h.name] = g
                    }, {
                        ref_for: !0
                    }, h.rule, {
                        ref_for: !0,
                        ref: g => e(n)(g, h.name),
                        onInput: g => e(f)(g, h.name)
                    }), null, 16, ["type", "placeholder", "error-text", "modelValue", "onUpdate:modelValue", "onInput"])])], 2))), 256))], 512), i(Pa, {
                        disabled: !e(o),
                        ref: "footEl",
                        isHasBottomTab: !1,
                        btnText: e(d)("main.submit"),
                        onSubmitForm: e(m),
                        isFixedBottom: !1
                    }, null, 8, ["disabled", "btnText", "onSubmitForm"])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    nc = Y(ac, [
        ["__scopeId", "data-v-2abd055f"]
    ]),
    r1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sc = () => {
        const {
            t: a
        } = Ql(), l = an(), s = {
            cpf: "",
            realName: ""
        }, o = lt(JSON.parse(JSON.stringify(s))), u = I(null), n = I(!1), d = h => {
            const y = Object.values(o).every(g => g);
            ja(() => {
                var C;
                const g = (C = u.value) == null ? void 0 : C.querySelectorAll(".ion-invalid");
                let w = !0;
                g && g.length && (w = !1), n.value = y && w
            })
        }, m = F(() => [{
            name: "realName",
            type: "text",
            label: a("label.name"),
            errorText: a("hint.invalidName"),
            placeholder: a("hint.tipName"),
            rule: {
                maxlength: Xt
            }
        }, {
            name: "cpf",
            type: "cpf",
            label: a("label.cpf"),
            placeholder: a("hint.tipPayCPF"),
            errorText: a("hint.invalidCPF"),
            rule: {
                minlength: 11,
                maxlength: 11
            }
        }]), f = () => {
            Object.assign(o, JSON.parse(JSON.stringify(s)))
        }, p = async () => {
            try {
                o.realName = Ua(o.realName), await Es(o), f(), l.back()
            } catch (h) {
                console.error("submitHandle error: ", h)
            }
        };
        return {
            params: o,
            formEl: u,
            bindCPF: async () => {
                var g;
                const h = (g = u.value) == null ? void 0 : g.querySelectorAll(".ion-invalid");
                if (h && h.length) return;
                const y = {
                    cb: p,
                    cpf: o.cpf,
                    name: o.realName
                };
                xn(y, "recharge")
            },
            inputChange: d,
            btnDisabled: n,
            inputInfoList: m
        }
    },
    oc = {
        class: "label"
    },
    lc = {
        class: "input-area"
    },
    ic = q({
        __name: "index",
        setup(a) {
            const {
                params: l,
                formEl: s,
                bindCPF: o,
                btnDisabled: u,
                inputChange: n,
                inputInfoList: d
            } = sc();
            return (m, f) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    shadow: "",
                    title: m.$t("viewsAssets.bindCPF"),
                    "bg-color": e(aa)()
                }, null, 8, ["title", "bg-color"]), i(e(ce), {
                    class: "bind-CPF-content"
                }, {
                    default: b(() => [t("div", {
                        ref_key: "formEl",
                        ref: s,
                        class: "form-wrap"
                    }, [(c(!0), _(ae, null, fe(e(d), (p, v) => (c(), _("div", {
                        key: p.name,
                        class: X({
                            item: v !== 0
                        })
                    }, [t("p", oc, r(p.label), 1), t("div", lc, [i(ze, jt({
                        modelValue: e(l)[p.name],
                        "onUpdate:modelValue": h => e(l)[p.name] = h,
                        type: p.type,
                        placeholder: p.placeholder,
                        "error-text": p.errorText
                    }, {
                        ref_for: !0
                    }, p.rule, {
                        clear: !0,
                        "onUpdate:modelValue": e(n)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "type", "placeholder", "error-text"])])], 2))), 128))], 512), i(Pa, {
                        disabled: !e(u),
                        "is-has-bottom-tab": !1,
                        "btn-text": m.$t("main.submit"),
                        "is-fixed-bottom": !1,
                        onSubmitForm: e(o)
                    }, null, 8, ["disabled", "btn-text", "onSubmitForm"])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    rc = Y(ic, [
        ["__scopeId", "data-v-496587b0"]
    ]),
    u1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: rc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ka = I(!1),
    za = I({
        address: "",
        walletUserId: "",
        accountInfo: ""
    }),
    gs = I(!1),
    uc = (a, l) => {
        if (a !== "PAYBETWALLET") {
            gs.value = !1, ka.value = !1, za.value = {
                address: "",
                walletUserId: "",
                accountInfo: ""
            };
            return
        }
        const s = Ht(),
            {
                accountItems: o
            } = Ve(s);
        gs.value = !0;
        const u = new Map(o.value.filter(d => d.code === a).map(d => ["".concat(d.tenantWithdrawTypeId, "-").concat(d.code), {
                accountInfo: d.value,
                ...JSON.parse(d.value)
            }])),
            n = "".concat(l, "-").concat(a);
        ka.value = !o.value.length || !u.has(n), !ka.value && (za.value = u.get(n))
    },
    Ge = lt({
        amount: 0,
        withdrawalType: "withdrawal",
        tenantWithdrawTypeId: 0,
        bankAccount: void 0,
        tenantWithdrawTypeSubId: 0,
        withdrawalAccount: "",
        realName: "",
        cpf: "",
        password: ""
    }),
    Wa = I([]),
    $t = I(""),
    qa = I(null),
    qn = I(null),
    ca = I(!1),
    cc = () => {
        const a = Ht(),
            l = qe(),
            s = F(() => l.withdrawalConfig),
            {
                accountItems: o
            } = Ve(a);
        F(() => !o.value.some(y => y.code === "CPF")), F(() => !o.value.some(y => y.code === "CNPJ"));
        const u = F(() => {
                var y;
                return (y = l.tenantInfo) == null ? void 0 : y.code
            }),
            n = () => {
                var g, w;
                if (!Wa.value.length) return xe("".concat(xa("viewsAssets.appendTip"))), !0;
                let y = (g = qn.value) == null ? void 0 : g.getAccountValue();
                return Ge.withdrawalAccount = y.account, Ge.realName = Ua((w = y.realName) == null ? void 0 : w.trim()), Ge.bankAccount = y.bankAccount, Ge.tenantWithdrawTypeSubId = y.tenantWithdrawTypeSubId, Ge.cpf = void 0, !1
            },
            d = () => {
                var w, C;
                if (!((w = qa.value) == null ? void 0 : w.validate())) return !0;
                let g = (C = qa.value) == null ? void 0 : C.getFormValue();
                return Ge.withdrawalAccount = $t.value === "CPF" ? g.cpf : g.withdrawalAccount, Ge.realName = Ua(g.realName), Ge.cpf = g.cpf, !1
            },
            m = () => {
                if (!za.value.walletUserId) return !0;
                const y = o.value.reduce((g, w) => (["REALNAME", "CPF"].includes(w.code) && g.set(w.code, w.value), g), new Map);
                return console.log(y, "cpfInfoMap"), Ge.withdrawalAccount = za.value.accountInfo, Ge.realName = y.get("REALNAME"), Ge.cpf = y.get("CPF"), !1
            },
            p = {
                BindFirst: n,
                WithdrawFirst: y => {
                    const g = {
                        PAYBETWALLET: m,
                        PIX: d
                    };
                    return Ge.tenantWithdrawTypeSubId = y, (g[$t.value] || g.PIX)()
                }
            },
            v = () => {
                if (!u.value !== "PH") return [new Map, !1];
                const y = new Map([
                    ["cpf", ""],
                    ["name", ""]
                ]);
                $t.value === "CNPJ" && y.set("cnpj", "");
                let g = !0;
                if (!o.value.length) return [y, g];
                const w = new Map([
                    ["CPF", "cpf"],
                    ["CNPJ", "cnpj"],
                    ["REALNAME", "name"]
                ]);
                return o.value.forEach(C => {
                    w.has(C.code) && y.delete(w.get(C.code))
                }), g = y.size > 0, [y, g]
            };
        return {
            getUserInputData: (y, g, w) => {
                if (p[s.value](g)) return !0;
                Ge.amount = w, Ge.tenantWithdrawTypeId = y;
                const [L, $] = v();
                if ($) {
                    const T = new Map([
                        ["cpf", Ge.cpf],
                        ["cnpj", $t.value === "CPF" ? "" : Ge.withdrawalAccount],
                        ["name", Ge.realName]
                    ]);
                    T.forEach((N, A) => {
                        N && L.has(A) && L.set(A, N)
                    }), $t.value === "CNPJ" && L.set("name", T.get("name"));
                    const B = {
                        cb: () => ca.value = !0,
                        ...Object.fromEntries(L)
                    };
                    return xn(B), !0
                }
                return !1
            }
        }
    },
    go = a => {
        const l = a.reduce((o, u) => o + u.needFlow, 0),
            s = a.reduce((o, u) => o + u.currentFlow, 0);
        return l - s
    },
    yo = () => {
        const {
            getUserInputData: a
        } = cc(), l = be.currentRoute, s = At(), o = qe(), u = Ht(), n = Tn(), {
            t: d
        } = it(), m = I([]), f = F(() => {
            var E;
            return (E = o.tenantInfo) == null ? void 0 : E.merchantCy
        }), p = I(0), v = I(0), h = I(0), y = I(0), g = I(""), w = I("fixed"), C = I(!1), L = I(""), $ = I(), T = I(1);
        let B = !0;
        const N = I(),
            A = I([]),
            R = I(0),
            j = I(""),
            V = I([]),
            O = I(0),
            x = new Map,
            D = I(!1),
            Z = I(""),
            Q = F(() => l.value.meta.hasBottomTab),
            {
                accountItems: P,
                tabId: M,
                isHideAuditRecords: W
            } = Ve(u),
            {
                rechargeRatio: ie,
                isVirtualCurrency: se,
                withdrawalConfig: ke
            } = Ve(o),
            Re = F(() => l.value.meta.hasBottomTab === void 0 ? !1 : !l.value.meta.hasBottomTab),
            Ke = F(() => Number(g.value) - Number(p.value) > 0 ? Number(g.value) - Number(p.value) : 0);
        let Ue = "",
            _e = !1,
            ge = [];
        const {
            user: we,
            assets: Ie
        } = Ve(s), Me = F(() => {
            var E;
            return ((E = we.value) == null ? void 0 : E.type) === is.enum.demo
        }), Xe = F(() => "".concat(ue(h.value), " - ").concat(ue(v.value))), H = F(() => {
            var z, pe;
            let E = 0;
            return E = (pe = (z = Ie.value) == null ? void 0 : z.balance) != null ? pe : 0, E ? E / 100 : 0
        }), J = F(() => {
            let E = "";
            const z = we.value;
            return Me.value && ((z == null ? void 0 : z.trialPlayWithdrawHint) === "1" ? E = d("viewsAssets.demoUnWithdraw") : (z == null ? void 0 : z.trialPlayWithdrawHint) === "2" && (E = d("viewsAssets.singleDepositWithdrawal"))), E
        }), Ce = F(() => ka.value ? d("viewsAssets.000004") : d("label.withdrawNow")), re = F(() => ke.value === "BindFirst"), le = F(() => {
            var E;
            return ((E = o.tenantInfo) == null ? void 0 : E.withdrawDisplayMode) === "Tile"
        }), Ee = E => {
            let z = Number.parseInt(g.value);
            return !z || z <= 0 ? 0 : (z >= H.value && (z = Math.floor(H.value)), z * E / 1e4)
        }, ve = () => {
            if (_e || !ge.length) {
                w.value = "fixed", p.value = 0;
                return
            }
            const E = ge.filter(Be => Number(g.value) >= Be.min / 100 && Number(g.value) <= Be.max / 100);
            if (!E.length) {
                w.value = "fixed", p.value = 0;
                return
            }
            const z = E[0];
            w.value = z.type;
            const pe = {
                UP: {
                    fixed: () => Math.ceil(z.value / 100),
                    percentage: () => Math.ceil(Ee(z.value))
                },
                DOWN: {
                    fixed: () => Math.floor(z.value / 100),
                    percentage: () => Math.floor(Ee(z.value))
                }
            };
            p.value = pe[Ue][w.value === "fixed" ? "fixed" : "percentage"]()
        }, Se = E => {
            const z = E || V.value[0];
            O.value = z.id, $t.value = z.name, uc($t.value, R.value)
        }, me = (E, z = !0) => {
            var St, mt;
            const pe = x.get(E),
                {
                    isInputAmount: Be,
                    id: Te,
                    tenantPayWithdrawTypeSub: tt,
                    ratesJson: Ze,
                    withdrawalAccountMax: et,
                    amountButton: De,
                    code: bt
                } = pe;
            return R.value = Te, j.value = bt, u.tabId = Te, tt.length && tt.sort((Ct, na) => na.sort - Ct.sort), V.value = tt.map(Ct => ({
                name: Ct.code,
                id: Ct.id
            })), z && Se(), D.value = !Be, Ze ? ge = JSON.parse(Ze) : ge = [], De && (m.value = (St = De == null ? void 0 : De.split(",")) == null ? void 0 : St.map(Ct => Number(Ct))), v.value = pe.maxAmount / 100, h.value = pe.minAmount / 100, T.value = et, L.value = (mt = pe.remind) == null ? void 0 : mt.replace(/\n/g, "<br/>"), {
                tenantPayWithdrawTypeSub: tt
            }
        }, Fe = async E => {
            let {
                tenantPayWithdrawTypeSub: z
            } = me(E);
            ke.value === "BindFirst" && (Wa.value = wn(P.value, z)), Number(g.value) > 0 && ve()
        }, $e = E => {
            const z = go(E);
            y.value = z > 0 ? Qe(z) : 0
        }, _t = E => {
            _e = E.isFee, Ue = E.feeType
        }, ut = async () => {
            o.getTenantInfo(), s.getUser();
            const E = await Os(),
                {
                    userFlow: z,
                    shouldWaiveFee: pe,
                    withdrawalAccount: Be
                } = await u.setUserWithdrawInfo();
            _t(pe), E.sort((De, bt) => bt.sort - De.sort);
            const Te = [];
            x.clear(), E.forEach(De => {
                const {
                    name: bt,
                    id: St,
                    icon: mt
                } = De;
                x.set(De.id, De), Te.push({
                    id: St,
                    name: bt,
                    icon: mt
                })
            }), A.value = Te;
            const tt = M.value >= 0 && x.has(M.value) ? M.value : E[0].id,
                {
                    tenantPayWithdrawTypeSub: Ze
                } = me(tt, !1),
                et = await u.setAccount({
                    tenantWithdrawTypeId: void 0
                });
            if (ke.value === "BindFirst" && (Wa.value = wn(et, Ze)), $e(z), Be) {
                const De = {
                        findTarget: () => et.find(mt => mt.tenantWithdrawTypeId == tt && mt.value == Be),
                        setSubTab: mt => {
                            const Ct = V.value.find(na => na.name === mt);
                            Se(Ct)
                        },
                        setTagInfo: mt => {
                            N.value = {
                                name: mt,
                                value: "".concat(d("viewsAssets.last"))
                            }
                        }
                    },
                    bt = De.findTarget();
                if (!bt) {
                    Se();
                    return
                }
                const {
                    code: St
                } = bt;
                De.setSubTab(St), De.setTagInfo(St)
            } else Se()
        }, ct = () => {
            ut(), n.APKTaskPopupTime = "Withdrawal"
        };
        Ut(() => {
            pt.on("user/withdraw-success", ct)
        }), ba(() => {
            pt.off("user/withdraw-success", ct)
        }), zt(() => {
            O.value = 0, $t.value = ""
        }), nt(() => l.value.path, E => {
            (E == "/main/withdraw" || E === "/withdraw/apply") && (g.value = "", ut()), E === "/withdraw/apply" && s.getAssets()
        }, {
            immediate: !0
        });
        const ht = E => {
                u.setTabPageIndex(E), be.push("/withdrawSubView")
            },
            Rt = Sa(async E => {
                const z = E.detail.value;
                Number(z) >= H.value && (await Na(1), g.value = Math.floor(Number(H.value)).toString()), Number(z) <= 0 && (await Na(1), g.value = ""), ve()
            }, 300),
            kt = async E => {
                if (E > H.value) return xe("toast.insufficientAccountBalance");
                g.value = E.toString(), ve()
            },
            vt = () => {
                ca.value = !1
            },
            wt = async () => {
                if (B) {
                    B = !1;
                    try {
                        ha(), await cl(Ge), ca.value = !1, B = !0, xe("toast.withdrawalOrderSuccess"), g.value = "", ht(at.WITHDRAW_RECORD)
                    } finally {
                        ca.value = !1, B = !0
                    }
                }
            },
            dt = async E => {
                var z;
                Ge.password = E, Ge.password.length == 6 && ((z = $.value) == null || z.clear(), await wt())
            },
            Et = E => {
                O.value = E;
                let z = V.value.find(pe => pe.id === E);
                $t.value = z == null ? void 0 : z.name
            },
            G = async () => {
                const E = we.value;
                if (E && E.type === is.enum.demo) {
                    C.value = !0, Z.value = E.trialPlayWithdrawHint;
                    return
                }
                if (!g.value || Number(g.value) <= 0) return xe("toast.amountCannotBeEmpty");
                let z = Cs(x.get(R.value), ["maxAmount", "minAmount"]);
                if (!await dl(g.value, z)) return;
                if (y.value > 0) {
                    An({
                        type: kn.FLOW,
                        msg: d("popup.tips07", {
                            amount: f.value + ue(y.value)
                        }),
                        showRightBtn: !0,
                        showLeftBtn: !W.value,
                        leftBtnText: d("viewsAssets.viewDetail"),
                        rightBtnText: d("activity.redPacket10"),
                        leftBtnCallback: () => ht(at.WITHDRAW_AUDIT)
                    });
                    return
                }
                a(R.value, O.value, _n(g.value)) || (B = !0, ca.value = !0)
            };
        return {
            rateValue: p,
            amountInput: g,
            isHasBottomTab: Q,
            showCloseBtn: Re,
            tabList: A,
            tabId: R,
            merchantCy: f,
            balance: H,
            isDemo: Me,
            prompt: J,
            betAmount: y,
            readonly: D,
            placeholder: Xe,
            amountList: m,
            withdrawalConfig: ke,
            isBindFirst: re,
            remind: L,
            assets: Ie,
            confirmModalVisible: ca,
            demoWithdraw: C,
            rateType: w,
            passwordRef: $,
            hintIndex: Z,
            subTabList: V,
            subTabId: O,
            maxAmount: v,
            minAmount: h,
            tabTagInfo: N,
            isHideAuditRecords: W,
            accountList: Wa,
            withdrawCreateParams: Ge,
            receiveAmount: Ke,
            bindAccountMax: T,
            btnText: Ce,
            rechargeRatio: ie,
            isVirtualCurrency: se,
            recordHandle: ht,
            mainTabChange: Fe,
            amountInputChange: Rt,
            amountHandle: kt,
            modalDismiss: vt,
            passwordHandle: dt,
            tabCode: j,
            onWithdrawCreate: wt,
            subTabChange: Et,
            handleBtnClick: () => {
                const E = {
                        register: () => {
                            di($t.value)
                        },
                        withdrawNow: G
                    },
                    z = ka.value ? "register" : "withdrawNow";
                E[z]()
            },
            t: d,
            getWithdrawRate: ve,
            isTileDisplayMode: le
        }
    },
    dc = {
        key: 0,
        class: "title"
    },
    mc = ["onClick"],
    pc = {
        key: 0,
        class: "tag"
    },
    fc = q({
        __name: "AssetsTab",
        props: Ne({
            tabList: {},
            title: {},
            type: {},
            tagInfo: {},
            isNew: {
                type: Boolean
            }
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            const {
                skin: s
            } = We(), {
                handleMouseDown: o,
                handleMouseUp: u,
                handleMouseLeave: n,
                handleMouseMove: d
            } = ml(), m = qs(), f = l, p = a, v = I(null), h = rt(a, "tabId"), y = C => {
                C !== h.value && (f("tabChange", C), f("update:tabId", C))
            }, g = C => {
                C.preventDefault()
            };
            Ut(() => {
                var C;
                (C = v.value) == null || C.addEventListener("wheel", g, {
                    passive: !1
                })
            }), ba(() => {
                var C;
                (C = v.value) == null || C.removeEventListener("wheel", g)
            });
            const w = F(() => p.tabList.some(C => C.tagValue) || !qt(p.tagInfo));
            return (C, L) => (c(), _("div", jt({
                class: ["channel-wrap", a.type]
            }, e(m), {
                ref_key: "tabEl",
                ref: v
            }), [a.title ? (c(), _("p", dc, r(a.title), 1)) : k("", !0), t("ul", {
                class: X(["channel-list", "flex-start", {
                    "tag-list": e(w)
                }, {
                    "new-tab": a.isNew
                }]),
                onMousedown: L[0] || (L[0] = (...$) => e(o) && e(o)(...$)),
                onMouseup: L[1] || (L[1] = (...$) => e(u) && e(u)(...$)),
                onMouseleave: L[2] || (L[2] = (...$) => e(n) && e(n)(...$)),
                onMousemove: L[3] || (L[3] = (...$) => e(d) && e(d)(...$))
            }, [(c(!0), _(ae, null, fe(a.tabList, $ => {
                var T, B, N;
                return c(), _("li", {
                    key: $.id,
                    class: X({
                        active: h.value === $.id
                    }),
                    onClick: () => y($.id)
                }, [$.tagValue || ((T = a.tagInfo) == null ? void 0 : T.name) == $.name ? (c(), _("div", pc, [i(e(ne), {
                    slot: "icon-only",
                    class: "rectangle",
                    src: "/".concat(e(s), "/svg/rectangle1.svg")
                }, null, 8, ["src"]), t("i", null, r((N = $.tagValue) != null ? N : (B = a.tagInfo) == null ? void 0 : B.value), 1)])) : k("", !0), U(" " + r($.name), 1)], 10, mc)
            }), 128))], 34)], 16))
        }
    }),
    Yt = Y(fc, [
        ["__scopeId", "data-v-53ac9577"]
    ]),
    _o = a => {
        const l = qe(),
            {
                theme: s
            } = We(),
            o = I(null),
            u = I(""),
            n = I(null),
            d = I(void 0),
            m = I(null),
            f = I(null);
        F(() => {
            var x;
            return (x = l.tenantInfo) == null ? void 0 : x.language
        });
        const p = Ht(),
            v = lt({
                cpfReadonly: !1,
                nameReadonly: !1,
                accountReadonly: !1
            }),
            {
                accountItems: h
            } = Ve(p),
            y = {
                PHONE: {
                    label: "phone",
                    placeholder: "tipPhone",
                    errorText: "invalidPhone",
                    type: "phone",
                    typeDefault: "text",
                    rule: {
                        minlength: 11,
                        maxlength: 11
                    },
                    validate: Ss
                },
                EMAIL: {
                    label: "email",
                    placeholder: "tipEmail",
                    errorText: "invalidEmail",
                    type: "email",
                    typeDefault: "text",
                    rule: {
                        maxlength: 64
                    },
                    validate: hl
                },
                CNPJ: {
                    label: "cnpj",
                    placeholder: "tipCNPJ",
                    errorText: "invalidCNPJ",
                    type: "cnpj",
                    typeDefault: "tel",
                    rule: {
                        minlength: 14,
                        maxlength: 14,
                        hideCurrency: !0
                    },
                    validate: fl
                },
                EVP: {
                    label: "evp",
                    placeholder: "tipEVP",
                    errorText: "invalidEVP",
                    type: "evp",
                    typeDefault: "tel",
                    rule: {
                        minlength: 36,
                        maxlength: 36
                    },
                    validate: pl
                }
            },
            g = lt({
                PHONE: null,
                EMAIL: null,
                CNPJ: null,
                EVP: null
            }),
            w = F(() => a.dynamicType in y ? y[a.dynamicType] : null),
            C = F(() => w.value ? h.value.some(x => x.tenantWithdrawTypeId === a.typeId && x.code === a.dynamicType) : !1),
            L = x => {
                var D, Z;
                return (Z = (D = h.value.find(Q => Q.tenantWithdrawTypeId === a.typeId && Q.code === x)) == null ? void 0 : D.value) != null ? Z : ""
            },
            $ = () => {
                u.value = "", v.nameReadonly = !1
            },
            T = () => {
                v.cpfReadonly = !1, d.value = void 0
            },
            B = () => {
                for (let x in g) g[x] = null;
                v.accountReadonly = !1
            },
            N = () => {
                $(), B(), T()
            };
        zt(() => {
            p.accountItems = [], N()
        });
        const A = () => {
                ja(() => {
                    var x, D;
                    typeof((x = o.value) == null ? void 0 : x.addErrTip) == "function" ? (D = o.value) == null || D.addErrTip(): o.value.$el.classList.add("ion-invalid", "ion-touched")
                })
            },
            R = () => {
                ja(() => {
                    var x, D;
                    typeof((x = o.value) == null ? void 0 : x.removeStatus) == "function" ? (D = o.value) == null || D.removeStatus(): o.value.$el.classList.remove("ion-valid", "ion-invalid", "ion-touched")
                })
            },
            j = (x, D) => {
                x ? y[D].validate(x) ? R() : A() : R()
            };
        return nt([() => a.dynamicType, () => a.typeId, () => h.value], x => {
            let [D, Z, Q] = x;
            if (!D) return;
            if (D && D in y && !Q.length) {
                if (typeof D == "string" && D in g) {
                    let ie = g[D];
                    j(ie, D)
                }
                return
            }
            let P = L("REALNAME");
            P && (v.nameReadonly = !0, u.value !== P && (u.value = P));
            let M = L(D),
                W = null;
            if (D in y) {
                if (M) g[D] = M, v.accountReadonly = !0;
                else {
                    let ie = g[D];
                    j(ie, D), v.accountReadonly = !1
                }
                W = L("CPF")
            } else W = M;
            W && d.value !== W && (v.cpfReadonly = !0, d.value = W)
        }, {
            immediate: !0
        }), {
            formEl: f,
            cpfEl: m,
            realNameEl: n,
            withdrawalAccountEL: o,
            realName: u,
            current: w,
            cpf: d,
            statusInfo: v,
            accountInfo: g,
            inputInfo: y,
            theme: s,
            REAL_NAME_LEN: Xt,
            currentReadonly: C,
            getFormValue: () => ({
                withdrawalAccount: g[a.dynamicType],
                realName: u.value,
                cpf: d.value
            }),
            handleInput: x => {
                setTimeout(() => {
                    u.value = rn(x)
                }, 0)
            },
            valiDateAccount: j
        }
    },
    hc = {
        class: "flex-between"
    },
    vc = {
        class: "text-item"
    },
    bc = {
        class: "label"
    },
    gc = {
        class: "only-text real-name"
    },
    yc = {
        class: "text-item"
    },
    _c = {
        class: "label"
    },
    wc = {
        class: "only-text"
    },
    Cc = {
        key: 0,
        class: "item"
    },
    $c = {
        class: "label"
    },
    Ic = {
        class: "only-text"
    },
    Tc = {
        class: "tip-text flex-start"
    },
    Ac = {
        class: "label"
    },
    kc = {
        class: "input-area"
    },
    Sc = {
        key: 1,
        class: "real-name leading-[2.875rem] pl-[0.75rem]"
    },
    Lc = {
        key: 0,
        class: "item"
    },
    xc = {
        class: "label"
    },
    Nc = {
        class: "input-area"
    },
    Pc = {
        class: "item"
    },
    Rc = {
        class: "label"
    },
    Ec = {
        class: "input-area"
    },
    Oc = q({
        __name: "First",
        props: {
            dynamicType: {},
            typeId: {}
        },
        setup(a, {
            expose: l
        }) {
            const s = a,
                {
                    formEl: o,
                    cpfEl: u,
                    realNameEl: n,
                    withdrawalAccountEL: d,
                    realName: m,
                    current: f,
                    cpf: p,
                    inputInfo: v,
                    accountInfo: h,
                    statusInfo: y,
                    theme: g,
                    REAL_NAME_LEN: w,
                    getFormValue: C,
                    handleInput: L
                } = _o(s),
                $ = F(() => s.dynamicType in v ? Object.values(y).every(Boolean) : y.cpfReadonly && y.nameReadonly),
                T = () => {
                    var A, R, j, V;
                    if ($.value) return !0;
                    let N = (A = o.value) == null ? void 0 : A.querySelectorAll(".ion-invalid");
                    return N && N.length ? !1 : m.value ? f.value && !h[s.dynamicType] ? ((j = d.value) == null || j.addErrTip(), !1) : p.value ? !0 : ((V = u.value) == null || V.addErrTip(), !1) : ((R = n.value) == null || R.addErrTip(), !1)
                };
            zt(() => {
                var N, A;
                (N = u.value) == null || N.removeStatus(), f.value && ((A = d.value) == null || A.removeStatus())
            }), l({
                validate: T,
                getFormValue: C,
                statusInfo: y
            });
            const B = N => {
                N.preventDefault();
                const A = N.clipboardData,
                    R = A == null ? void 0 : A.getData("Text").trim();
                R && (m.value += R)
            };
            return (N, A) => (c(), _("div", {
                class: X(["form-wrap", e(g)]),
                ref_key: "formEl",
                ref: o
            }, [e($) ? (c(), _(ae, {
                key: 0
            }, [t("div", hc, [t("div", vc, [t("p", bc, r(N.$t("label.name")), 1), t("p", gc, r(e(m)), 1)]), t("div", yc, [t("p", _c, r(N.$t("label.cpf")), 1), t("p", wc, r(e(p)), 1)])]), e(f) ? (c(), _("div", Cc, [t("p", $c, r(N.$t("label.".concat(e(f).label))), 1), t("p", Ic, r(e(h)[a.dynamicType]), 1)])) : k("", !0), t("div", Tc, [i(e(ne), {
                class: "balance-fee",
                src: "/first/svg/assets/warning.svg"
            }), t("span", null, r(N.$t("viewsAssets.withdrawalInfo")), 1)])], 64)) : (c(), _(ae, {
                key: 1
            }, [t("div", null, [t("p", Ac, r(N.$t("label.name")), 1), t("div", kc, [e(y).nameReadonly ? (c(), _("div", Sc, r(e(m)), 1)) : (c(), S(ze, {
                key: 0,
                type: "text",
                placeholder: N.$t("hint.tipName"),
                ref_key: "realNameEl",
                ref: n,
                maxlength: e(w),
                "error-text": N.$t("hint.invalidName"),
                modelValue: e(m),
                "onUpdate:modelValue": A[0] || (A[0] = R => te(m) ? m.value = R : null),
                mode: "md",
                onInput: e(L),
                readonly: e(y).nameReadonly,
                onPaste: B
            }, null, 8, ["placeholder", "maxlength", "error-text", "modelValue", "onInput", "readonly"]))])]), e(f) ? (c(), _("div", Lc, [t("p", xc, r(N.$t("label.".concat(e(f).label))), 1), t("div", Nc, [i(ze, jt({
                type: e(f).type,
                placeholder: N.$t("hint.".concat(e(f).placeholder)),
                ref_key: "withdrawalAccountEL",
                ref: d,
                modelValue: e(h)[a.dynamicType],
                "onUpdate:modelValue": A[1] || (A[1] = R => e(h)[a.dynamicType] = R),
                "error-text": N.$t("hint.".concat(e(f).errorText))
            }, a.dynamicType !== "PHONE" ? e(f).rule : {}), null, 16, ["type", "placeholder", "modelValue", "error-text"])])])) : k("", !0), t("div", Pc, [t("p", Rc, r(N.$t("label.cpf")), 1), t("div", Ec, [i(ze, {
                type: "cpf",
                minlength: 11,
                maxlength: 11,
                ref_key: "cpfEl",
                ref: u,
                placeholder: N.$t("hint.tipCPF"),
                "error-text": N.$t("hint.invalidCPF"),
                modelValue: e(p),
                "onUpdate:modelValue": A[2] || (A[2] = R => te(p) ? p.value = R : null),
                readonly: e(y).cpfReadonly,
                hideCurrency: !0
            }, null, 8, ["placeholder", "error-text", "modelValue", "readonly"])])])], 64))], 2))
        }
    }),
    Vc = Y(Oc, [
        ["__scopeId", "data-v-f143f6d0"]
    ]),
    Mc = {
        class: "card-wrap"
    },
    Bc = {
        class: "append-area flex-between"
    },
    Dc = {
        class: "right-text"
    },
    Hc = {
        class: "text"
    },
    Wc = q({
        __name: "AddCard",
        setup(a) {
            const {
                theme: l
            } = We(), s = an(), o = () => {
                s.push("/withdrawalBindAccount")
            }, u = F(() => l === "amber-purple" ? Ae("svg/amberPurpleAppend.svg") : Ae("svg/append.svg"));
            return (n, d) => (c(), _("div", Mc, [t("div", Bc, [i(e(pa), {
                class: "empty",
                src: e(Ae)("img/empty-account.png")
            }, null, 8, ["src"]), t("div", Dc, [t("p", null, r(n.$t("viewsAssets.appendTip")), 1), t("div", {
                class: "append-text flex-center",
                onClick: o
            }, [i(e(ne), {
                slot: "icon-only",
                class: X(["append"]),
                src: e(u)
            }, null, 8, ["src"]), t("span", Hc, r(n.$t("viewsAssets.addAccount")), 1)])])])]))
        }
    }),
    Uc = Y(Wc, [
        ["__scopeId", "data-v-bc85c957"]
    ]),
    Fc = {
        class: "card-info"
    },
    jc = ["src"],
    Gc = {
        class: "bank-info"
    },
    zc = {
        class: "bank-name"
    },
    qc = {
        class: "bank-account"
    },
    Kc = {
        key: 0,
        class: "bank-account"
    },
    Yc = {
        key: 1,
        class: "bank-account"
    },
    Qc = q({
        __name: "BankCard",
        props: {
            cardInfo: {},
            type: {
                default: "info"
            },
            relatedCode: {}
        },
        setup(a) {
            const l = qe(),
                s = an(),
                {
                    tenantInfo: o
                } = Ve(l),
                u = () => {
                    s.push("/withdrawalBindAccount")
                },
                {
                    t: n
                } = it(),
                d = F(() => {
                    var p;
                    return (p = o.value) == null ? void 0 : p.code
                }),
                m = F(() => d.value === "MX"),
                f = p => n(p ? "label.CLABE" : "label.bankAccount");
            return (p, v) => {
                var h, y, g, w, C, L, $, T;
                return c(), _("div", {
                    class: X(["bank-card-wrap", {
                        active: ((h = a.cardInfo) == null ? void 0 : h.relatedCode) === a.relatedCode
                    }, {
                        action: a.type === "action"
                    }])
                }, [a.type === "info" ? (c(), _(ae, {
                    key: 0
                }, [t("div", Fc, [t("img", {
                    src: (y = a.cardInfo) == null ? void 0 : y.icon,
                    alt: "bank logo",
                    class: "bank-logo"
                }, null, 8, jc), t("div", Gc, [t("p", zc, r((g = a.cardInfo) == null ? void 0 : g.name), 1), t("p", qc, r(e(rs)(((w = a.cardInfo) == null ? void 0 : w.BANKACCOUNT) || ((C = a.cardInfo) == null ? void 0 : C.CLABE) || "")), 1), (L = a.cardInfo) != null && L.IFSC ? (c(), _("p", Kc, r(e(rs)(($ = a.cardInfo) == null ? void 0 : $.IFSC)), 1)) : k("", !0), e(m) ? (c(), _("p", Yc, r(f((T = a.cardInfo) == null ? void 0 : T.CLABE)), 1)) : k("", !0)])]), Ks(p.$slots, "action", {}, void 0, !0)], 64)) : (c(), _("div", {
                    key: 1,
                    class: "add",
                    onClick: u
                }, [i(e(ne), {
                    slot: "icon-only",
                    class: "append-icon",
                    src: e(Ae)("svg/append.svg")
                }, null, 8, ["src"]), U(" " + r(p.$t("viewsAssets.addAccount")), 1)]))], 2)
            }
        }
    }),
    $n = Y(Qc, [
        ["__scopeId", "data-v-abbf6163"]
    ]),
    Jc = {
        class: "bind-title flex-between"
    },
    Xc = q({
        __name: "BindAccount",
        props: {
            accountList: {
                default: () => []
            },
            bindAccountMax: {},
            tabCode: {}
        },
        emits: ["changeActiveAccount"],
        setup(a, {
            expose: l,
            emit: s
        }) {
            const o = qe(),
                u = an(),
                n = s;
            let d = a;
            const m = I(d.accountList[0]),
                {
                    tenantInfo: f
                } = Ve(o),
                p = () => {
                    u.push("/withdrawalAccount")
                },
                v = I(""),
                h = g => {
                    n("changeActiveAccount", g), v.value = g, m.value = d.accountList.find(w => w.relatedCode === g)
                };
            return nt(() => d.accountList, g => {
                g.length && g[0].relatedCode && (v.value = g[0].relatedCode, m.value = g[0])
            }, {
                immediate: !0
            }), l({
                getAccountValue: () => ({
                    account: m.value.IFSC || m.value.BANKACCOUNT || m.value.CLABE,
                    realName: m.value.REALNAME,
                    bankAccount: d.tabCode === "BANK" ? m.value.BANKACCOUNT : "",
                    tenantWithdrawTypeSubId: m.value.tenantWithdrawTypeSubId,
                    code: m.value.code
                })
            }), (g, w) => (c(), _(ae, null, [t("div", Jc, [t("span", null, r(g.$t("viewsAssets.withdrawalAccount")), 1), t("span", {
                class: "my-account",
                onClick: p
            }, r(g.$t("viewsAssets.myAccount")), 1)]), a.accountList.length ? (c(!0), _(ae, {
                key: 1
            }, fe(a.accountList, C => (c(), S($n, {
                cardInfo: C,
                type: "info",
                relatedCode: e(v),
                onClick: L => h(C.relatedCode)
            }, {
                action: b(() => [C.relatedCode === e(v) ? (c(), S(e(ne), {
                    key: 0,
                    slot: "icon-only",
                    src: e(Ae)("svg/ok.svg"),
                    class: "ok-icon"
                }, null, 8, ["src"])) : k("", !0)]),
                _: 2
            }, 1032, ["cardInfo", "relatedCode", "onClick"]))), 256)) : (c(), S(Uc, {
                key: 0
            }))], 64))
        }
    }),
    wo = Y(Xc, [
        ["__scopeId", "data-v-aa2c817d"]
    ]),
    Zc = {
        class: "balance-area"
    },
    ed = {
        class: "balance-wrap"
    },
    td = {
        class: "account"
    },
    ad = {
        class: "balance-w"
    },
    nd = {
        class: "amount"
    },
    sd = {
        key: 0,
        class: "withdraw-tip"
    },
    od = {
        key: 1,
        class: "withdraw-tip"
    },
    ld = {
        class: "balance-w"
    },
    id = q({
        __name: "BalanceArea",
        props: {
            merchantCy: {},
            isDemo: {
                type: Boolean
            },
            betAmount: {},
            prompt: {},
            balance: {},
            isHideAuditRecords: {
                type: Boolean
            }
        },
        emits: ["recordHandle"],
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = () => {
                    s("recordHandle")
                };
            return (u, n) => (c(), _("div", Zc, [t("p", ed, [t("span", td, r(u.$t("label.accountBalance")), 1), t("span", ad, [U(r(a.merchantCy), 1), t("span", nd, r(e(ue)(a.balance, {
                showSuffix: !0
            })), 1)])]), a.isDemo ? (c(), _("p", sd, r(a.prompt), 1)) : k("", !0), !a.isDemo && a.betAmount > 0 ? (c(), _("p", od, [U(r(u.$t("splice.withdrawCondition1")) + " ", 1), t("span", ld, r("".concat(a.merchantCy, " ") + e(ue)(a.betAmount, {
                showSuffix: !0
            })), 1), U(" " + r(u.$t("splice.withdrawCondition2")) + " ", 1), a.isHideAuditRecords ? k("", !0) : (c(), _("span", {
                key: 0,
                class: "link-text",
                onClick: o
            }, r(u.$t("viewsAssets.viewDetail")), 1))])) : k("", !0)]))
        }
    }),
    Co = Y(id, [
        ["__scopeId", "data-v-cbdb7f9a"]
    ]),
    rd = {
        class: "amount-list flex-between"
    },
    ud = ["onClick"],
    cd = {
        class: "amount"
    },
    dd = q({
        __name: "AmountBtnList",
        props: {
            amountList: {},
            amount: {},
            balance: {},
            isVirtualCurrency: {
                type: Boolean
            }
        },
        emits: ["amountHandle"],
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = u => {
                    s("amountHandle", u)
                };
            return (u, n) => (c(), _("ul", rd, [(c(!0), _(ae, null, fe(a.amountList, d => (c(), _("li", {
                key: d,
                class: X(["amount-item", {
                    active: Number(a.amount) === d,
                    disabled: a.balance < d
                }]),
                onClick: m => o(d)
            }, [i(Ya, null, {
                default: b(() => [t("span", cd, r(e(ue)(d, {
                    showSuffix: !0
                })), 1)]),
                _: 2
            }, 1024)], 10, ud))), 128)), n[0] || (n[0] = t("li", null, null, -1)), n[1] || (n[1] = t("li", null, null, -1))]))
        }
    }),
    Ka = Y(dd, [
        ["__scopeId", "data-v-a747fdc3"]
    ]),
    md = {
        class: "fee"
    },
    pd = {
        class: "handling-fee"
    },
    fd = ["innerHTML"],
    hd = q({
        __name: "FeeTip",
        props: {
            amountInput: {},
            merchantCy: {},
            rateValue: {},
            remind: {}
        },
        emits: [],
        setup(a, {
            emit: l
        }) {
            const {
                theme: s
            } = We();
            return (o, u) => (c(), _(ae, null, [a.amountInput ? (c(), _("p", {
                key: 0,
                class: X(["fee-wrap", e(s)])
            }, [i(e(ne), {
                class: "balance-fee",
                src: "/first/svg/assets/warning.svg"
            }), t("span", md, [U(r(o.$t("viewsAssets.handlingFee")) + ": ", 1), t("span", pd, r(a.merchantCy) + r(e(ue)(a.rateValue)), 1)])], 2)) : k("", !0), a.remind ? (c(), _("p", {
                key: 1,
                class: X(["remind", {
                    "null-amount": !a.amountInput
                }, e(s)]),
                innerHTML: a.remind
            }, null, 10, fd)) : k("", !0)], 64))
        }
    }),
    vd = Y(hd, [
        ["__scopeId", "data-v-fde022a4"]
    ]),
    bd = {
        class: "item item-1"
    },
    gd = {
        key: 0
    },
    yd = {
        class: "item item-2"
    },
    _d = {
        key: 0
    },
    wd = q({
        __name: "Step",
        props: {
            step: {}
        },
        setup(a) {
            return (l, s) => (c(), _("div", {
                class: X(["step-wrap", "step-".concat(a.step)])
            }, [t("div", bd, [a.step === 1 ? (c(), _("span", gd, "1")) : (c(), S(e(ne), {
                key: 1,
                slot: "icon-only",
                src: e(Ae)("svg/ok.svg"),
                class: "ok-icon"
            }, null, 8, ["src"]))]), s[0] || (s[0] = t("div", {
                class: "line line-1"
            }, null, -1)), t("div", yd, [a.step >= 1 && a.step < 3 ? (c(), _("span", _d, "2")) : (c(), S(e(ne), {
                key: 1,
                slot: "icon-only",
                src: e(Ae)("svg/ok.svg"),
                class: "ok-icon"
            }, null, 8, ["src"]))]), s[1] || (s[1] = t("div", {
                class: "line line-2"
            }, null, -1)), s[2] || (s[2] = t("div", {
                class: "item item-3"
            }, "3", -1))], 2))
        }
    }),
    Kn = Y(wd, [
        ["__scopeId", "data-v-d0250064"]
    ]),
    Cd = {},
    $d = {
        class: "forgot-password"
    },
    Id = {
        class: "tips"
    };

function Td(a, l) {
    return c(), _(ae, null, [t("div", $d, r(a.$t("label.forgotPassword")), 1), t("div", Id, r(a.$t("label.forgotPasswordTips")), 1)], 64)
}
const Yn = Y(Cd, [
        ["render", Td],
        ["__scopeId", "data-v-2fc56b65"]
    ]),
    wa = I(0),
    Ca = I(""),
    Ba = I(""),
    $a = I(""),
    bn = I(""),
    Da = I(""),
    ys = I(null),
    gn = I(null),
    _s = I(null),
    Ia = I(0),
    Ta = I(!1),
    Ha = I(!1),
    Ad = I(""),
    un = a => {
        const l = Ht(),
            s = () => {
                var f;
                wa.value = 0, Ca.value = "", Ba.value = "", $a.value = "", bn.value = "", Da.value = "", Ia.value = 0, Ta.value = !1, Ha.value = !1, (f = gn.value) == null || f.clearPassword()
            },
            o = async () => {
                const f = At(),
                    p = await f.user || await f.getUser();
                l.isAllowResetWithdrawPassword && l.isCanSms && (p != null && p.phoneNumber) ? wa.value = 1 : (be.push("/notification"), a == null || a())
            },
            u = vn(async () => {
                var f;
                if (!Ca.value) return xe("hint.tipPhone");
                (f = ys.value) != null && f.validatePhone() && (wa.value = 2)
            }, 800),
            n = vn(async () => {
                if ($a.value.length < 6) return xe("toast.invalidPassword");
                if ($a.value !== bn.value) return xe("toast.twoPsInconsistent");
                const f = {
                    operatingType: {
                        operatingType: "editByToken",
                        token: Da.value
                    },
                    password: $a.value
                };
                try {
                    const p = await vl(f);
                    xe("toast.modificationSuccessful"), queueMicrotask(() => {
                        var v;
                        (v = gn.value) == null || v.modalDismiss(), s()
                    })
                } finally {}
            }, 800),
            d = async () => {
                if (Ta.value) return;
                Ta.value = !0;
                const f = {
                    type: "change_asset_password",
                    identifier: Ca.value,
                    identifierMode: "specificMatch",
                    identifierType: "phone"
                };
                try {
                    await gl(f), xe("toast.sendSuccessfully"), Ia.value = 60, Ha.value = !0;
                    const p = setInterval(() => {
                        Ia.value--, Ia.value <= 0 && (clearInterval(p), Ha.value = !1)
                    }, 1e3)
                } finally {
                    Ta.value = !1
                }
            },
            m = vn(async () => {
                var p;
                if (!Ba.value) return xe("toast.enterVerifyCode");
                if (!((p = _s.value) != null && p.validateCode())) return;
                const f = {
                    type: "change_asset_password",
                    identifier: Ca.value,
                    identifierMode: "specificMatch",
                    identifierType: "phone",
                    otp: Ba.value
                };
                try {
                    const v = await bl(f);
                    Da.value = v.token, xe("toast.verificationSuccess"), wa.value = 3
                } finally {}
            }, 800);
        return {
            ressetPwStep: wa,
            phoneNumber: Ca,
            code: Ba,
            password: $a,
            confirmPassword: bn,
            step1Comp: ys,
            step3Comp: gn,
            codeToken: Da,
            countdown: Ia,
            prefixLoading: Ta,
            verifySended: Ha,
            phoneNumberMask: Ad,
            step2Comp: _s,
            sendCode: d,
            resetPwInfo: s,
            forgetHandle: o,
            validatePhoneNumber: u,
            handleEditAssetPassword: n,
            onOptVerify: m
        }
    },
    kd = {},
    Sd = {
        class: "submit-btn"
    };

function Ld(a, l) {
    return c(), _("div", Sd, r(a.$t("viewsAssets.rechargeTips03")), 1)
}
const Qn = Y(kd, [
        ["render", Ld],
        ["__scopeId", "data-v-f50b3800"]
    ]),
    xd = {
        class: "step-1-wrap"
    },
    Nd = {
        class: "text"
    },
    Pd = q({
        __name: "Step1",
        setup(a, {
            expose: l
        }) {
            const {
                ressetPwStep: s,
                validatePhoneNumber: o,
                phoneNumber: u,
                phoneNumberMask: n
            } = un(), d = F(() => yl.use("tenantInfo").get("registerBindGcashMaya") ? xa("hint.invalidGcashMaya") : xa("hint.invalidPhone")), m = I(null), f = I(!1);
            return l({
                validatePhone: () => {
                    var h;
                    const v = (h = m.value) == null ? void 0 : h.querySelectorAll(".ion-invalid");
                    return !(v && v.length)
                }
            }), Ut(async () => {
                const v = At(),
                    h = await v.user || await v.getUser();
                h != null && h.phoneNumber && (u.value = h.phoneNumber, n.value = _l(h.phoneNumber), f.value = !0)
            }), (v, h) => (c(), _("div", xd, [i(Yn), i(Kn, {
                step: e(s)
            }, null, 8, ["step"]), h[1] || (h[1] = t("div", {
                class: "line"
            }, null, -1)), t("div", Nd, r(v.$t("components.forget1")), 1), t("div", {
                class: "phone-input",
                ref_key: "phoneRef",
                ref: m
            }, [i(ze, {
                modelValue: e(u),
                "onUpdate:modelValue": h[0] || (h[0] = y => te(u) ? u.value = y : null),
                type: "phone",
                bgColor: "--color-bg-400",
                "error-text": e(d),
                placeholder: v.$t("label.phonePlaceholder"),
                clearInput: "",
                required: "",
                name: "username",
                autocomplete: "username",
                scene: "login",
                readonly: e(f)
            }, null, 8, ["modelValue", "error-text", "placeholder", "readonly"])], 512), i(Qn, {
                onClick: e(o)
            }, null, 8, ["onClick"])]))
        }
    }),
    Rd = Y(Pd, [
        ["__scopeId", "data-v-87284b6f"]
    ]),
    Ed = {
        class: "step-2-wrap"
    },
    Od = {
        class: "code-text"
    },
    Vd = q({
        __name: "Step2",
        setup(a, {
            expose: l
        }) {
            const {
                ressetPwStep: s,
                code: o,
                countdown: u,
                prefixLoading: n,
                verifySended: d,
                sendCode: m,
                onOptVerify: f,
                phoneNumberMask: p
            } = un(), v = I(null);
            return l({
                validateCode: () => {
                    var g;
                    const y = (g = v.value) == null ? void 0 : g.querySelectorAll(".ion-invalid");
                    return !(y && y.length)
                }
            }), (y, g) => (c(), _("div", Ed, [i(Yn), i(Kn, {
                step: e(s)
            }, null, 8, ["step"]), t("div", Od, r(y.$t("components.sendVerifyCode", {
                phone: e(p)
            })), 1), t("div", {
                class: "code-input",
                ref_key: "codeRef",
                ref: v
            }, [i(ze, {
                modelValue: e(o),
                "onUpdate:modelValue": g[0] || (g[0] = w => te(o) ? o.value = w : null),
                loading: e(n),
                type: "captcha",
                bgColor: "--color-bg-400",
                verifySended: e(d),
                countdown: e(u),
                verifyHandle: e(m),
                "error-text": y.$t("hint.invalidVerifyCode"),
                placeholder: y.$t("label.verifyCode"),
                required: ""
            }, null, 8, ["modelValue", "loading", "verifySended", "countdown", "verifyHandle", "error-text", "placeholder"])], 512), i(Qn, {
                onClick: e(f)
            }, null, 8, ["onClick"])]))
        }
    }),
    Md = Y(Vd, [
        ["__scopeId", "data-v-0f986043"]
    ]),
    Bd = {
        class: "step-3-wrap"
    },
    Dd = {
        class: "set-password pw-text"
    },
    Hd = {
        class: "confirm-password pw-text"
    },
    Wd = q({
        __name: "Step3",
        emits: ["modalDismiss"],
        setup(a, {
            expose: l,
            emit: s
        }) {
            const o = s,
                {
                    ressetPwStep: u,
                    handleEditAssetPassword: n,
                    password: d,
                    confirmPassword: m
                } = un(),
                f = w => {
                    d.value = w
                },
                p = w => {
                    m.value = w
                },
                v = I(null),
                h = I(null);
            return l({
                clearPassword: () => {
                    var w, C;
                    (w = v.value) == null || w.clear(), (C = h.value) == null || C.clear()
                },
                modalDismiss: () => {
                    console.log("modalDismiss"), o("modalDismiss")
                }
            }), (w, C) => (c(), _("div", Bd, [i(Yn), i(Kn, {
                step: e(u)
            }, null, 8, ["step"]), t("div", Dd, r(w.$t("components.forget3")), 1), i(Vt, {
                class: "password-input",
                focus: "",
                onInput: f,
                ref_key: "passwordRef",
                ref: v
            }, null, 512), t("div", Hd, r(w.$t("label.confirmPassword")), 1), i(Vt, {
                class: "password-input",
                onInput: p,
                ref_key: "confirmPasswordRef",
                ref: h
            }, null, 512), i(Qn, {
                onClick: e(n)
            }, null, 8, ["onClick"])]))
        }
    }),
    Ud = Y(Wd, [
        ["__scopeId", "data-v-3e832a73"]
    ]),
    Fd = {
        class: "title"
    },
    jd = {
        class: "withdraw"
    },
    Gd = {
        key: 0,
        class: "amuont"
    },
    zd = {
        class: "sum"
    },
    qd = {
        key: 1,
        class: "amuont"
    },
    Kd = {
        class: "sum"
    },
    Yd = {
        class: "rate-type-text"
    },
    Qd = {
        key: 3,
        class: "submit submit-btn"
    },
    Jd = q({
        __name: "ConfirmModal",
        props: Ne({
            amountInput: {},
            rateValue: {},
            merchantCy: {},
            rateType: {},
            receiveAmount: {},
            passwordSwitch: {}
        }, {
            visible: {
                type: Boolean,
                required: !0
            },
            visibleModifiers: {}
        }),
        emits: Ne(["passwordHandle", "onWithdrawCreate", "update:visible"], ["update:visible"]),
        setup(a, {
            emit: l
        }) {
            const {
                theme: s
            } = We(), o = I(), u = l, n = rt(a, "visible"), d = a, m = () => {
                var L;
                w.value !== 0 && v(), console.log("props?.passwordSwitch", d == null ? void 0 : d.passwordSwitch), (d == null ? void 0 : d.passwordSwitch) === "ON" && ((L = o.value) == null || L.clear()), u("update:visible", !1)
            }, f = () => {
                u("onWithdrawCreate")
            }, p = L => {
                u("passwordHandle", L)
            }, {
                resetPwInfo: v,
                step1Comp: h,
                step3Comp: y,
                step2Comp: g,
                ressetPwStep: w,
                forgetHandle: C
            } = un(m);
            return (L, $) => (c(), S(e(Ra), {
                id: "confirmModalWithdraw",
                "is-open": n.value,
                onDidDismiss: m
            }, {
                default: b(() => [t("div", {
                    class: X([e(s), "pop-wrap"])
                }, [i(e(ne), {
                    class: "absolute close",
                    icon: e(Jl),
                    onClick: m
                }, null, 8, ["icon"]), e(w) === 0 ? (c(), _(ae, {
                    key: 0
                }, [t("p", Fd, r(L.$t("viewsAssets.enterWithdrawalPassword")), 1), t("p", jd, r(L.$t("viewsAssets.withdraw")), 1), a.rateType == "fixed" ? (c(), _("p", Gd, [U(r(a.merchantCy) + " ", 1), t("span", zd, r(e(ue)(Number(a.amountInput) > 0 ? Math.max(Number(a.amountInput) - a.rateValue, 0) : 0)), 1)])) : (c(), _("p", qd, [U(r(a.merchantCy) + " ", 1), t("span", Kd, r(e(ue)(a.receiveAmount > 0 ? Math.max(Number(a.amountInput) - a.rateValue, 0) : 0)), 1)])), $[1] || ($[1] = t("p", {
                    class: "line h-[1px] w-full mb-4"
                }, null, -1)), t("div", Yd, [t("p", null, r(L.$t("viewsAssets.serviceFee")), 1), t("p", null, r(a.merchantCy) + r(e(ue)(a.rateValue)), 1)]), a.passwordSwitch === "ON" ? (c(), S(Vt, {
                    key: 2,
                    class: "password-input",
                    ref_key: "passwordRef",
                    ref: o,
                    onInput: p,
                    focus: ""
                }, null, 512)) : (c(), _("div", Qd, [i(Mt, {
                    onClick: f
                }, {
                    default: b(() => [U(r(L.$t("activity.redPacket10")), 1)]),
                    _: 1
                })])), a.passwordSwitch === "ON" ? (c(), _("div", {
                    key: 4,
                    class: "forgot-password",
                    onClick: $[0] || ($[0] = (...T) => e(C) && e(C)(...T))
                }, r(L.$t("label.forgotPassword")) + "? ", 1)) : k("", !0)], 64)) : e(w) === 1 ? (c(), S(Rd, {
                    key: 1,
                    ref_key: "step1Comp",
                    ref: h
                }, null, 512)) : e(w) === 2 ? (c(), S(Md, {
                    key: 2,
                    ref_key: "step2Comp",
                    ref: g
                }, null, 512)) : e(w) === 3 ? (c(), S(Ud, {
                    key: 3,
                    ref_key: "step3Comp",
                    ref: y,
                    onModalDismiss: m
                }, null, 512)) : k("", !0)], 2)]),
                _: 1
            }, 8, ["is-open"]))
        }
    }),
    $o = Y(Jd, [
        ["__scopeId", "data-v-95efb1ef"]
    ]),
    Xd = {
        class: "text-center mt-3"
    },
    Zd = {
        class: "text-base"
    },
    em = {
        class: "text-[0.8125rem] text-center"
    },
    tm = {
        key: 0,
        class: "text-center"
    },
    am = {
        key: 1,
        class: "text-center"
    },
    nm = {
        class: "btn-c"
    },
    sm = q({
        __name: "WithdrawHint",
        props: Ne({
            hintIndex: {}
        }, {
            visible: {
                type: Boolean,
                required: !0
            },
            visibleModifiers: {}
        }),
        emits: Ne(["update:visible"], ["update:visible"]),
        setup(a, {
            emit: l
        }) {
            const {
                theme: s
            } = We(), o = l, u = rt(a, "visible"), n = () => {
                o("update:visible", !1)
            };
            return (d, m) => (c(), S(e(Ra), {
                class: X([e(s), "withdrawHint"]),
                "is-open": u.value,
                onDidDismiss: n
            }, {
                default: b(() => [t("div", Xd, [t("p", Zd, r(d.$t("main.tips")), 1)]), t("div", em, [a.hintIndex === "1" ? (c(), _("p", tm, r(d.$t("viewsAssets.demoUnWithdraw")), 1)) : k("", !0), a.hintIndex === "2" ? (c(), _("p", am, r(d.$t("viewsAssets.singleDepositWithdrawal")), 1)) : k("", !0)]), t("div", nm, [i(Mt, {
                    onClick: n
                }, {
                    default: b(() => [U(r(d.$t("activity.redPacket10")), 1)]),
                    _: 1
                })])]),
                _: 1
            }, 8, ["class", "is-open"]))
        }
    }),
    Io = Y(sm, [
        ["__scopeId", "data-v-6be7af4a"]
    ]),
    om = {
        class: "balance-area"
    },
    lm = {
        class: "balance-wrap"
    },
    im = {
        class: "balance-content"
    },
    rm = {
        class: "balance-amount"
    },
    um = {
        class: "balance-wrap"
    },
    cm = {
        class: "balance-content"
    },
    dm = {
        class: "balance-amount"
    },
    mm = {
        class: "detail-icon"
    },
    pm = q({
        __name: "BindBalanceArea",
        props: {
            isHideAuditRecords: {
                type: Boolean
            },
            betAmount: {},
            balance: {}
        },
        emits: ["recordHandle"],
        setup(a, {
            emit: l
        }) {
            const s = lt({
                    balance: 0,
                    betAmount: 0
                }),
                o = lt({
                    balance: !1,
                    betAmount: !1
                }),
                u = async (w, C) => {
                    s[C] = 0;
                    const L = w / 2e4;
                    for (; s[C] < w / 100;) await Na(1), s[C] += L;
                    s[C] = w / 100, o[C] = !1
                },
                n = async () => {
                    let w = 0;
                    o.balance = !0;
                    const C = await At().setAssets();
                    if (w = (C == null ? void 0 : C.balance) || 0, !w) return o.balance = !1;
                    u(w, "balance")
                },
                d = async () => {
                    o.betAmount = !0;
                    const w = await wl(),
                        C = go(w);
                    if (!C) return o.betAmount = !1;
                    u(C, "betAmount")
                };
            o.balance = !0, o.betAmount = !0;
            const m = l,
                f = a,
                p = () => {
                    m("recordHandle")
                },
                v = async () => {
                    console.log(f.balance, "balance"), u(f.balance * 100, "balance")
                },
                h = async () => {
                    u(f.betAmount * 100, "betAmount")
                },
                y = Cn(() => {
                    if (!f.balance) {
                        setTimeout(() => {
                            o.balance = !1
                        }, 1e3);
                        return
                    }
                    v(), y()
                }, {
                    flush: "post"
                }),
                g = Cn(() => {
                    if (!f.betAmount) {
                        setTimeout(() => {
                            o.betAmount = !1
                        }, 1e3);
                        return
                    }
                    h(), g()
                }, {
                    flush: "post"
                });
            return (w, C) => {
                var L, $;
                return c(), _("div", om, [t("div", lm, [i(e(ne), {
                    class: X(["icon-color refresh-icon rotate-[30deg]", {
                        "animate-refresh": e(o).balance
                    }]),
                    onClick: n,
                    src: "/first/svg/perfil/refresh.svg"
                }, null, 8, ["class"]), t("p", im, r(w.$t("depositWithdrawal.000035")), 1), t("p", rm, r(e(ue)((L = e(s).balance) != null ? L : 0, {
                    showSuffix: !0
                })), 1)]), t("div", um, [i(e(ne), {
                    class: X(["icon-color refresh-icon rotate-[30deg]", {
                        "animate-refresh": e(o).betAmount
                    }]),
                    src: "/first/svg/perfil/refresh.svg",
                    onClick: d
                }, null, 8, ["class"]), t("div", null, [t("p", cm, r(w.$t("depositWithdrawal.000016")), 1), t("p", dm, r(e(ue)(($ = e(s).betAmount) != null ? $ : 0, {
                    showSuffix: !0
                })), 1), a.isHideAuditRecords ? k("", !0) : (c(), _("p", {
                    key: 0,
                    class: "detail",
                    onClick: C[0] || (C[0] = T => p())
                }, [t("span", null, r(w.$t("viewsAssets.viewDetail")), 1), t("span", mm, [i(e(ne), {
                    src: "/first/svg/agent/agent-detail-icon.svg"
                })])]))])])])
            }
        }
    }),
    To = Y(pm, [
        ["__scopeId", "data-v-538ad36f"]
    ]),
    fm = {
        class: "title"
    },
    hm = {
        class: "tile-tab-list-wrap"
    },
    vm = ["onClick"],
    bm = ["src"],
    gm = {
        class: "tab-name"
    },
    ym = {
        class: "tab-item"
    },
    _m = q({
        __name: "TileTab",
        props: Ne({
            tabList: {},
            title: {}
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            const s = qs(),
                o = l,
                u = I(null),
                n = rt(a, "tabId"),
                d = m => {
                    m !== n.value && (o("tabChange", m), o("update:tabId", m))
                };
            return (m, f) => (c(), _("div", jt({
                class: "tile-tab-area"
            }, e(s), {
                ref_key: "tabEl",
                ref: u
            }), [t("div", fm, r(a.title), 1), t("ul", hm, [(c(!0), _(ae, null, fe(a.tabList, p => (c(), _("li", {
                class: X(["tab-item", {
                    active: n.value === p.id
                }]),
                key: p.id,
                onClick: v => d(p.id)
            }, [t("img", {
                src: p.icon,
                alt: "icon",
                class: "tab-icon"
            }, null, 8, bm), t("div", gm, r(p.name), 1), n.value === p.id ? (c(), S(e(ne), {
                key: 0,
                slot: "icon-only",
                src: e(Ae)("svg/ok.svg"),
                class: "ok-icon"
            }, null, 8, ["src"])) : k("", !0)], 10, vm))), 128)), Bt(t("li", ym, null, 512), [
                [Dt, !1]
            ])])], 16))
        }
    }),
    Ao = Y(_m, [
        ["__scopeId", "data-v-b0c6500f"]
    ]),
    wm = {
        key: 0,
        class: "header-bottom-area"
    },
    Cm = {
        class: "input-wrap"
    },
    $m = {
        key: 1,
        class: "mt-[0.75rem]"
    },
    Im = {
        class: "mt-[0.75rem] mb-[1.5rem] wrapper-tab"
    },
    Tm = {
        class: "m-b"
    },
    Am = q({
        __name: "index",
        setup(a) {
            ga(Se => ({
                v363a6747: e(Ee)
            }));
            const {
                theme: l
            } = We(), {
                t: s
            } = it(), o = I(null), {
                amountInput: u,
                rateValue: n,
                isHasBottomTab: d,
                showCloseBtn: m,
                tabList: f,
                tabId: p,
                merchantCy: v,
                balance: h,
                isDemo: y,
                prompt: g,
                betAmount: w,
                readonly: C,
                placeholder: L,
                amountList: $,
                isBindFirst: T,
                remind: B,
                assets: N,
                rateType: A,
                hintIndex: R,
                demoWithdraw: j,
                confirmModalVisible: V,
                subTabList: O,
                subTabId: x,
                maxAmount: D,
                minAmount: Z,
                tabTagInfo: Q,
                accountList: P,
                receiveAmount: M,
                bindAccountMax: W,
                tabCode: ie,
                btnText: se,
                rechargeRatio: ke,
                isVirtualCurrency: Re,
                isHideAuditRecords: Ke,
                recordHandle: Ue,
                mainTabChange: _e,
                amountInputChange: ge,
                amountHandle: we,
                subTabChange: Ie,
                passwordHandle: Me,
                onWithdrawCreate: Xe,
                handleBtnClick: H,
                getWithdrawRate: J,
                isTileDisplayMode: Ce
            } = yo(), re = () => {
                const Se = me => Math.floor(Number(me)).toString();
                u.value = D.value > h.value ? "".concat(Se(h.value)) : "".concat(Se(D.value)), J()
            }, {
                height: le
            } = Hn(o), Ee = F(() => "".concat(le.value * (d.value ? 1.1 : 3) / 16, "rem")), ve = F(() => y.value || Number(u.value) <= 0 || Object.values({
                demo: () => y.value,
                amount: () => Number(u.value) <= 0
            }).some(Fe => Fe()) ? !1 : T.value && !P.value.length ? !0 : Number(u.value) < Number(Z.value));
            return (Se, me) => (c(), S(e(Pe), null, {
                default: b(() => {
                    var Fe;
                    return [i(Rs, {
                        contentText: "".concat(e(s)("main.withdraw")),
                        isShowCloseicon: e(m),
                        onRecordHandle: me[0] || (me[0] = () => e(Ue)(e(at).WITHDRAW_RECORD)),
                        isAlone: e(T)
                    }, null, 8, ["contentText", "isShowCloseicon", "isAlone"]), i(e(ce), {
                        class: X(["first-content", e(l)])
                    }, {
                        default: b(() => [e(T) ? k("", !0) : (c(), _("div", wm, [me[11] || (me[11] = t("div", {
                            class: "line"
                        }, null, -1)), i(Yt, {
                            tabList: e(f),
                            "tab-id": e(p),
                            "onUpdate:tabId": me[1] || (me[1] = $e => te(p) ? p.value = $e : null),
                            type: "main-tab",
                            title: Se.$t("viewsAssets.WithdrawalChannels"),
                            activeBgColor: "--color-bg-100",
                            onTabChange: e(_e)
                        }, null, 8, ["tabList", "tab-id", "title", "onTabChange"]), i(Co, {
                            merchantCy: e(v),
                            isHideAuditRecords: e(Ke),
                            betAmount: e(w),
                            balance: e(h),
                            isDemo: e(y),
                            prompt: e(g),
                            onRecordHandle: me[2] || (me[2] = $e => e(Ue)(e(at).WITHDRAW_AUDIT))
                        }, null, 8, ["merchantCy", "isHideAuditRecords", "betAmount", "balance", "isDemo", "prompt"]), t("div", Cm, [i(ze, {
                            type: "withdraw",
                            modelValue: e(u),
                            "onUpdate:modelValue": me[3] || (me[3] = $e => te(u) ? u.value = $e : null),
                            readonly: e(C),
                            placeholder: e(L),
                            onSetMaxValue: re,
                            onInput: e(ge),
                            "error-text": Se.$t("toast.0003")
                        }, null, 8, ["modelValue", "readonly", "placeholder", "onInput", "error-text"])]), i(Ka, {
                            amountList: e($),
                            isVirtualCurrency: e(Re),
                            amount: e(u),
                            onAmountHandle: e(we),
                            balance: e(h)
                        }, null, 8, ["amountList", "isVirtualCurrency", "amount", "onAmountHandle", "balance"]), i(vd, {
                            amountInput: e(u),
                            merchantCy: e(v),
                            rateValue: e(n),
                            remind: e(B)
                        }, null, 8, ["amountInput", "merchantCy", "rateValue", "remind"])])), e(T) ? (c(), _("div", $m, [i(To, {
                            betAmount: e(w),
                            balance: e(h),
                            isHideAuditRecords: e(Ke),
                            onRecordHandle: me[4] || (me[4] = $e => e(Ue)(e(at).WITHDRAW_AUDIT))
                        }, null, 8, ["betAmount", "balance", "isHideAuditRecords"]), t("div", Im, [e(Ce) ? (c(), S(Ao, {
                            key: 1,
                            title: Se.$t("viewsAssets.WithdrawalChannels"),
                            tabList: e(f),
                            "tab-id": e(p),
                            "onUpdate:tabId": me[6] || (me[6] = $e => te(p) ? p.value = $e : null),
                            onTabChange: e(_e),
                            isNew: !0
                        }, null, 8, ["title", "tabList", "tab-id", "onTabChange"])) : (c(), S(Yt, {
                            key: 0,
                            tabList: e(f),
                            "tab-id": e(p),
                            "onUpdate:tabId": me[5] || (me[5] = $e => te(p) ? p.value = $e : null),
                            onTabChange: e(_e),
                            type: "sub-tab",
                            isNew: !0
                        }, null, 8, ["tabList", "tab-id", "onTabChange"]))]), i(Qa, {
                            rechargeRatio: e(ke),
                            isVirtualCurrency: e(Re),
                            amountInput: e(u),
                            merchantCy: e(v),
                            rateValue: e(n),
                            type: "withdraw"
                        }, {
                            amountBtn: b(() => [i(Ka, {
                                amountList: e($),
                                isVirtualCurrency: e(Re),
                                amount: e(u),
                                onAmountHandle: e(we),
                                balance: e(h)
                            }, null, 8, ["amountList", "isVirtualCurrency", "amount", "onAmountHandle", "balance"])]),
                            amountInput: b(() => [i(ze, {
                                type: "withdraw",
                                modelValue: e(u),
                                "onUpdate:modelValue": me[7] || (me[7] = $e => te(u) ? u.value = $e : null),
                                readonly: e(C),
                                placeholder: e(L),
                                onSetMaxValue: re,
                                onInput: e(ge),
                                "error-text": Se.$t("toast.0003")
                            }, null, 8, ["modelValue", "readonly", "placeholder", "onInput", "error-text"])]),
                            _: 1
                        }, 8, ["rechargeRatio", "isVirtualCurrency", "amountInput", "merchantCy", "rateValue"]), i(wo, {
                            accountList: e(P),
                            bindAccountMax: e(W),
                            tabCode: e(ie),
                            ref_key: "accountEl",
                            ref: qn
                        }, null, 8, ["accountList", "bindAccountMax", "tabCode"])])) : (c(), _(ae, {
                            key: 2
                        }, [t("div", Tm, [i(Yt, {
                            title: Se.$t("label.withdrawSubType"),
                            tabList: e(O),
                            "tab-id": e(x),
                            "onUpdate:tabId": me[8] || (me[8] = $e => te(x) ? x.value = $e : null),
                            tagInfo: e(Q),
                            onTabChange: e(Ie),
                            type: "sub-tab"
                        }, null, 8, ["title", "tabList", "tab-id", "tagInfo", "onTabChange"])]), i(Vc, {
                            dynamicType: e($t),
                            ref_key: "formEl",
                            ref: qa,
                            typeId: e(p)
                        }, null, 8, ["dynamicType", "typeId"])], 64))]),
                        _: 1
                    }, 8, ["class"]), i(Pa, {
                        merchantCy: e(v),
                        disabled: e(ve),
                        ref_key: "footEl",
                        ref: o,
                        textContent: Se.$t("viewsAssets.receive"),
                        isHasBottomTab: e(d),
                        btnText: e(se),
                        onSubmitForm: e(H)
                    }, null, 8, ["merchantCy", "disabled", "textContent", "isHasBottomTab", "btnText", "onSubmitForm"]), i($o, {
                        visible: e(V),
                        "onUpdate:visible": me[9] || (me[9] = $e => te(V) ? V.value = $e : null),
                        merchantCy: e(v),
                        amountInput: e(u),
                        rateValue: e(n),
                        rateType: e(A),
                        receiveAmount: e(M),
                        passwordSwitch: (Fe = e(N)) == null ? void 0 : Fe.passwordSwitch,
                        onPasswordHandle: e(Me),
                        onOnWithdrawCreate: e(Xe)
                    }, null, 8, ["visible", "merchantCy", "amountInput", "rateValue", "rateType", "receiveAmount", "passwordSwitch", "onPasswordHandle", "onOnWithdrawCreate"]), i(Io, {
                        visible: e(j),
                        "onUpdate:visible": me[10] || (me[10] = $e => te(j) ? j.value = $e : null),
                        hintIndex: e(R)
                    }, null, 8, ["visible", "hintIndex"])]
                }),
                _: 1
            }))
        }
    }),
    km = Y(Am, [
        ["__scopeId", "data-v-5efc10a1"]
    ]),
    c1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: km
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Jn = () => {
        const a = Ht(),
            l = I(a.tabPageIndex || at.WITHDRAW_RECORD),
            {
                isHideAuditRecords: s,
                userWithdrawInfo: o
            } = Xl(a),
            u = [{
                value: at.WITHDRAW_RECORD,
                text: "viewsAssets.withdrawalRecord"
            }, {
                value: at.WITHDRAW_AUDIT,
                text: "viewsAssets.auditRecord"
            }];
        return Ut(() => {
            qt(o.value) && a.setUserWithdrawInfo()
        }), {
            tabValue: l,
            tabList: u,
            isHideAuditRecords: s
        }
    },
    ko = () => {
        const a = qe(),
            l = I([]);
        let s = [];
        const o = I(!1),
            u = ["success", "refunded"],
            n = ["refuse", "confiscate", "autoError", "pending_refund"],
            d = I(""),
            m = I(!1),
            f = I("today"),
            p = lt({
                page: 1,
                pageSize: 100,
                startTime: "",
                endTime: ""
            }),
            v = lt({
                orderNo: "",
                amount: 0,
                tax: 0,
                status: "success",
                withdrawalTime: new Date,
                withdrawalType: "commission",
                actualWithdrawals: 0,
                withdrawalAccount: "",
                tenantWithdrawTypeId: 0,
                payWithdrawTypeName: null,
                appRemark: ""
            }),
            {
                t: h
            } = it(),
            y = F(() => {
                var N;
                return [{
                    name: "".concat(h("viewsAssets.createTime")),
                    value: "".concat(xt(v.withdrawalTime, "YYYY-MM-DD HH:mm:ss"))
                }, {
                    name: "".concat(h("viewsAssets.transactionType")),
                    value: v.payWithdrawTypeName
                }, {
                    name: "".concat(h("viewsAssets.actualAmountReceived")),
                    amount: v.actualWithdrawals
                }, {
                    name: "".concat(h("viewsAssets.serviceFee")),
                    amount: v.tax
                }, {
                    name: "".concat(h("viewsAssets.transactionAccount")),
                    value: v.bankAccount
                }, {
                    name: "".concat(h("label.IFSC")),
                    value: v.withdrawalAccount,
                    isShow: v.payWithdrawTypeName === "BANK" && ((N = a.tenantInfo) == null ? void 0 : N.code) === "IN"
                }, {
                    name: "".concat(h("viewsAssets.orderNumber")),
                    value: v.orderNo,
                    copy: !0
                }, v.appRemark ? {
                    name: "".concat(h("viewsAssets.Remark")),
                    value: v.appRemark
                } : ""]
            }),
            g = N => {
                const A = Vs(N);
                p.startTime = A == null ? void 0 : A.startTime, p.endTime = A == null ? void 0 : A.endTime, p.page = 1, B()
            },
            w = N => {
                N.detail.complete(), B()
            },
            C = N => {
                const A = s.find(R => R.orderNo == N);
                Object.assign(v, A), o.value = !0
            };
        Wn(async () => {
            g(f.value), a.getTenantInfo()
        });
        const L = Sn(u, n),
            $ = N => u.includes(N) || n.includes(N) ? "".concat(h("status.".concat(N))) : "".concat(h("viewsAssets.inWithdrawal")),
            T = async N => {
                const A = [];
                for (const R of N) {
                    const {
                        withdrawalTime: j,
                        amount: V,
                        status: O,
                        orderNo: x
                    } = R, D = await Ms(V);
                    A.push({
                        name: "".concat(h("viewsAssets.withdraw")),
                        time: j,
                        amount: V,
                        orderNo: x,
                        statusColor: L(O),
                        status: $(O),
                        realCurrency: D
                    })
                }
                return A
            };
        async function B() {
            await ha(), m.value = !0;
            const N = await Cl(p);
            m.value = !1, N && "withdrawalOrderPage" in N && (d.value = "".concat(Qe(N.sumValues ? N.sumValues : 0)), l.value = await T(N.withdrawalOrderPage), s = N.withdrawalOrderPage)
        }
        return {
            sumValues: d,
            loading: m,
            recordList: l,
            modalVisible: o,
            withdrawDetail: v,
            changeTime: f,
            orderList: y,
            handleRefresh: w,
            detailHandle: C,
            timeChange: g,
            t: h
        }
    },
    Sm = {
        class: "time"
    },
    Lm = {
        class: "total-area"
    },
    xm = q({
        __name: "TopArea",
        props: Ne({
            totalAmount: {
                default: "0"
            },
            totalText: {},
            size: {
                default: "3"
            },
            iconPath: {}
        }, {
            changeTime: {
                required: !0
            },
            changeTimeModifiers: {}
        }),
        emits: Ne(["timeChange", "update:changeTime"], ["update:changeTime"]),
        setup(a, {
            emit: l
        }) {
            const {
                skin: s
            } = We(), o = {
                default: "flex-end"
            }, u = l, n = rt(a, "changeTime"), d = qe(), {
                t: m
            } = it(), f = F(() => {
                var g;
                return $l((g = d.tenantInfo) == null ? void 0 : g.reportTimeRange)
            }), p = F(() => f.value.length ? "flex-between" : s in o ? o[s] : "flex-start"), v = I(!1), h = () => {
                v.value = !1
            }, y = g => {
                v.value = !1, u("update:changeTime", g.name), u("timeChange", g.name)
            };
            return (g, w) => (c(), _("div", {
                class: X(["top-area", e(p)])
            }, [e(f).length ? (c(), _(ae, {
                key: 0
            }, [t("div", {
                class: X(["time-filter-wrap flex-between", {
                    active: e(v)
                }]),
                onClick: w[0] || (w[0] = C => v.value = !0),
                id: "time-popover-button"
            }, [t("div", Sm, r(g.$t("date.".concat(n.value))), 1), a.iconPath ? (c(), S(e(ne), {
                key: 0,
                src: a.iconPath,
                class: "report-select-icon"
            }, null, 8, ["src"])) : (c(), S(e(ne), {
                key: 1,
                icon: e(Zl),
                class: "report-select-icon"
            }, null, 8, ["icon"]))], 2), i(e(ei), {
                mode: "md",
                class: "time-popover",
                trigger: "time-popover-button",
                isOpen: e(v),
                onDidDismiss: h,
                showBackdrop: !1
            }, {
                default: b(() => [i(e(nn), {
                    class: "report-select-row"
                }, {
                    default: b(() => [(c(!0), _(ae, null, fe(e(f), C => (c(), S(e(sn), {
                        size: a.size,
                        class: "select-col",
                        key: C.value,
                        onClick: L => y(C)
                    }, {
                        default: b(() => [t("div", {
                            class: X(["item", {
                                active: n.value == C.name
                            }])
                        }, r(g.$t("date.".concat(C.name))), 3)]),
                        _: 2
                    }, 1032, ["size", "onClick"]))), 128))]),
                    _: 1
                })]),
                _: 1
            }, 8, ["isOpen"])], 64)) : k("", !0), t("div", Lm, [U(r(a.totalText) + ": ", 1), i(He, {
                class: "currency"
            }, {
                default: b(() => [U(r(e(ue)(a.totalAmount)), 1)]),
                _: 1
            })])], 2))
        }
    }),
    cn = Y(xm, [
        ["__scopeId", "data-v-90f59315"]
    ]),
    Nm = ["onClick"],
    Pm = {
        class: "flex-between top"
    },
    Rm = {
        class: "amount-wrap"
    },
    Em = {
        class: "flex-between middle"
    },
    Om = {
        key: 0,
        class: "virtual-currency-amount"
    },
    Vm = {
        class: "flex-between bottom"
    },
    Mm = {
        class: "flex-between"
    },
    Bm = q({
        __name: "RecordList",
        props: {
            recordList: {},
            copyIconPath: {
                default: "/svg/copy.svg"
            }
        },
        emits: ["detailHandle"],
        setup(a, {
            emit: l
        }) {
            const s = qe(),
                o = l,
                u = m => {
                    o("detailHandle", m)
                };
            F(() => {
                var m;
                return (m = s.tenantInfo) == null ? void 0 : m.currencyConfig
            }), F(() => {
                var m;
                return (m = s.tenantInfo) == null ? void 0 : m.merchantCy
            });
            const n = F(() => {
                    var m;
                    return (m = s.tenantInfo) == null ? void 0 : m.legalTender
                }),
                {
                    isVirtualCurrency: d
                } = Ve(s);
            return (m, f) => (c(!0), _(ae, null, fe(a.recordList, p => (c(), _("div", {
                class: "record-wrap",
                key: p.orderNo,
                onClick: v => u(p.orderNo)
            }, [t("div", Pm, [t("p", null, r(p.name), 1), t("div", Rm, [i(He, {
                amount: p.amount,
                "icon-size": "1.25rem",
                "icon-class": "virtual-currency-icon",
                "show-currency-symbol": !0
            }, {
                default: b(() => [t("p", null, r(e(Kt)(p.amount)), 1)]),
                _: 2
            }, 1032, ["amount"])])]), t("div", Em, [t("p", null, r(e(xt)(p.time, "YYYY-MM-DD HH:mm:ss")), 1), e(d) ? (c(), _("p", Om, [i(e(ne), {
                slot: "icon-only",
                src: e(Ae)("svg/approximatelyEqual.svg"),
                class: "amount-icon"
            }, null, 8, ["src"]), U(" " + r(e(Kt)(p.realCurrency)) + " " + r(e(n)), 1)])) : k("", !0)]), t("div", Vm, [t("p", Mm, [U(r(p.orderNo), 1), i(e(ne), {
                class: "copy",
                src: a.copyIconPath,
                onClick: ti(v => e(ot)(p.orderNo), ["stop"])
            }, null, 8, ["src", "onClick"])]), t("span", {
                style: yt({
                    color: p.statusColor
                })
            }, r(p.status), 5)])], 8, Nm))), 128))
        }
    }),
    dn = Y(Bm, [
        ["__scopeId", "data-v-c86bbc33"]
    ]),
    Dm = {
        key: 0,
        class: "flex flex-col items-center justify-center"
    },
    Hm = {
        class: "w-[7.5rem] h-[7.5rem] mt-36"
    },
    So = q({
        __name: "Record",
        setup(a) {
            const {
                sumValues: l,
                loading: s,
                recordList: o,
                modalVisible: u,
                withdrawDetail: n,
                changeTime: d,
                orderList: m,
                handleRefresh: f,
                detailHandle: p,
                timeChange: v,
                t: h
            } = ko();
            return (y, g) => (c(), _(ae, null, [i(cn, {
                totalAmount: e(l),
                changeTime: e(d),
                "onUpdate:changeTime": g[0] || (g[0] = w => te(d) ? d.value = w : null),
                onTimeChange: e(v),
                size: "4",
                iconPath: "/first/svg/select-icon.svg",
                totalText: "".concat(e(h)("label.accumulatedWithdraw"))
            }, null, 8, ["totalAmount", "changeTime", "onTimeChange", "totalText"]), i(e(ta), {
                slot: "fixed",
                "pull-factor": .5,
                "pull-min": 100,
                "pull-max": 200,
                onIonRefresh: g[1] || (g[1] = w => e(f)(w))
            }, {
                default: b(() => [i(e(ea))]),
                _: 1
            }), !e(s) && !e(o).length ? (c(), _("div", Dm, [t("div", Hm, [i(va)])])) : k("", !0), i(dn, {
                recordList: e(o),
                onDetailHandle: e(p),
                copyIconPath: "/first/svg/assets/copy.svg"
            }, null, 8, ["recordList", "onDetailHandle"]), i(Bs, {
                modelValue: e(u),
                "onUpdate:modelValue": g[2] || (g[2] = w => te(u) ? u.value = w : null),
                amount: e(n).amount,
                status: e(n).status,
                data: e(m)
            }, null, 8, ["modelValue", "amount", "status", "data"])], 64))
        }
    }),
    Xn = () => {
        const a = be.currentRoute,
            l = qe(),
            s = I(0),
            o = I([]),
            u = I(0),
            n = I(!1),
            d = lt({
                page: 1,
                pageSize: 100,
                flowType: void 0
            }),
            {
                t: m
            } = it(),
            f = async () => {
                await ha(), n.value = !0;
                const w = await Il(d);
                await Ds(), n.value = !1, w && "queryWhiteList" in w && (u.value = Qe(w.sumFlow.sumNeedFlow - w.sumFlow.sumCurrentFlow), o.value = w.queryWhiteList.map(C => (C.unfinished = Qe(C.needFlow - C.currentFlow), C.amount = Qe(C.amount), C.needFlow = Qe(C.needFlow), C.currentFlow = Qe(C.currentFlow), C.createTime = Fa(C.createTime), C.updateTime = Fa(C.updateTime), C)))
            },
            p = {
                0: void 0,
                1: hn.enum.RECHARGE,
                2: hn.enum.ACTIVITY,
                3: hn.enum.SYSTEM
            },
            v = w => {
                w ? d.flowType = p[w] : d.flowType = void 0, f()
            },
            h = w => {
                w.detail.complete(), f()
            },
            y = w => {
                Ja(Qt.AUDIT_DETAIL, w.flowListId), be.push({
                    path: "/withdrawAuditDetails"
                })
            };
        nt(() => a.value.path, async w => {
            w == "/withdrawSubView" && (f(), await l.getTenantInfo())
        }, {
            immediate: !0
        });
        const g = ["".concat(m("main.all")), "".concat(m("option.recharge")), "".concat(m("option.activity")), "".concat(m("viewsAssets.systemAudit"))].map((w, C) => ({
            id: C,
            name: w
        }));
        return {
            sumValues: u,
            flowTypeIndex: s,
            loading: n,
            recordList: o,
            selectList: g,
            handleChange: v,
            getWithdrawRecord: f,
            handleRefresh: h,
            detailHandle: y
        }
    },
    Wm = {
        class: "audit-header"
    },
    Um = {
        class: "text"
    },
    Fm = {
        key: 0,
        class: "flex flex-col items-center justify-center"
    },
    jm = {
        class: "w-[7.5rem] h-[7.5rem] mt-[8.5rem]"
    },
    Gm = ["onClick"],
    zm = {
        class: "flex-between top"
    },
    qm = {
        class: "flex-between bottom"
    },
    Km = {
        class: "flex-1"
    },
    Ym = q({
        __name: "Audit",
        setup(a) {
            const {
                flowTypeIndex: l,
                sumValues: s,
                loading: o,
                recordList: u,
                selectList: n,
                detailHandle: d,
                handleRefresh: m,
                handleChange: f
            } = Xn();
            return (p, v) => (c(), _(ae, null, [t("div", Wm, [i(Nn, {
                selectList: e(n),
                modelValue: e(l),
                "onUpdate:modelValue": v[0] || (v[0] = h => te(l) ? l.value = h : null),
                onHandleChange: e(f)
            }, null, 8, ["selectList", "modelValue", "onHandleChange"]), t("p", Um, [U(r(p.$t("viewsAssets.pendingAuditAmount")) + ": ", 1), i(He, {
                class: "currency"
            }, {
                default: b(() => [U(r(e(ue)(e(s))), 1)]),
                _: 1
            })])]), i(e(ta), {
                slot: "fixed",
                "pull-factor": .5,
                "pull-min": 100,
                "pull-max": 200,
                onIonRefresh: v[1] || (v[1] = h => e(m)(h))
            }, {
                default: b(() => [i(e(ea))]),
                _: 1
            }), !e(o) && !e(u).length ? (c(), _("div", Fm, [t("div", jm, [i(va)])])) : k("", !0), (c(!0), _(ae, null, fe(e(u), h => (c(), _("div", {
                class: "record-wrap",
                onClick: y => e(d)(h),
                key: h.orderNo
            }, [t("div", zm, [t("p", null, r(e(Xa)(h.flowType)), 1), i(He, null, {
                default: b(() => [U(r(e(ue)(h.unfinished)), 1)]),
                _: 2
            }, 1024)]), t("div", qm, [t("p", Km, r(h.createTime), 1), t("span", {
                style: yt({
                    color: "var(".concat(e(Pn)(h.status), ")")
                }),
                class: X(h.status)
            }, r(e(Za)(h.status)), 7)])], 8, Gm))), 128))], 64))
        }
    }),
    Qm = Y(Ym, [
        ["__scopeId", "data-v-10037177"]
    ]),
    Jm = q({
        __name: "index",
        setup(a) {
            const {
                tabValue: l,
                tabList: s,
                isHideAuditRecords: o
            } = Jn();
            return (u, n) => (c(), S(e(Pe), null, {
                default: b(() => [e(o) ? (c(), S(Je, {
                    key: 0,
                    title: u.$t("viewsAssets.withdrawalRecord")
                }, null, 8, ["title"])) : (c(), S(e(Pt), {
                    key: 1,
                    class: X(["ion-no-border", e(ma)()])
                }, {
                    default: b(() => [i(e(ft), {
                        mode: "ios"
                    }, {
                        default: b(() => [i(Wt), i(e(Gt), null, {
                            default: b(() => [U(r(u.$t("viewsAssets.withdrawalRecord")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["class"])), i(e(Tt), {
                    mode: "md",
                    modelValue: e(l),
                    "onUpdate:modelValue": n[0] || (n[0] = d => te(l) ? l.value = d : null)
                }, {
                    default: b(() => [(c(!0), _(ae, null, fe(e(s), d => (c(), S(e(It), {
                        class: "btn-center",
                        value: d.value
                    }, {
                        default: b(() => [i(e(st), {
                            class: X(e(l) == d.value ? "active" : "inactive")
                        }, {
                            default: b(() => [U(r(u.$t(d.text)), 1)]),
                            _: 2
                        }, 1032, ["class"])]),
                        _: 2
                    }, 1032, ["value"]))), 256))]),
                    _: 1
                }, 8, ["modelValue"]), i(e(ce), {
                    class: "first-content"
                }, {
                    default: b(() => [(c(), S(Ea(e(l) == e(at).WITHDRAW_AUDIT ? Qm : So)))]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Xm = Y(Jm, [
        ["__scopeId", "data-v-ca44e56f"]
    ]),
    d1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Zn = () => {
        const a = I(us.COMPLETED),
            l = F(() => Hs(a.value)),
            s = F(() => Pn(a.value)),
            o = I(!1);
        let u = null;
        const n = be.currentRoute,
            d = lt({
                tradeType: "",
                activityName: "",
                auditStatus: "",
                tradeAmount: 0,
                auditMultiple: 0,
                auditAmount: 0,
                unAuditAmount: 0,
                auditedAmount: 0,
                gameRestriction: "",
                createTime: "",
                finishTime: ""
            });
        nt(() => n.value.path, async p => {
            p == "/withdrawAuditDetails" && m()
        }, {
            immediate: !0
        });
        async function m() {
            var h;
            await ha();
            const p = await Rn(Qt.AUDIT_DETAIL),
                v = await Tl({
                    id: p
                });
            if (await Ds(), d.tradeType = Xa(v.flowType), d.activityName = v.activityName === "" ? "-" : v.activityName, v.activityNameType === Al.enum.DEFAULT && kl(v.activityNameParams)) {
                const y = await En().getLocale(),
                    g = JSON.parse(v.activityNameParams);
                d.activityName = Sl(y, v.activityType, g.variablesValue)
            }
            d.auditStatus = Za(v.status), d.tradeAmount = Qe(v.amount), d.auditMultiple = v.flowMultiple, d.auditAmount = Qe(v.needFlow), d.unAuditAmount = Qe(v.needFlow - v.currentFlow), d.auditedAmount = Qe(v.currentFlow), d.createTime = Fa(v.createTime), d.finishTime = v.status !== us.COMPLETED ? "-" : Fa(v.updateTime), a.value = v.status, Ll(v.gameLimit) && (u = JSON.parse(v.gameLimit), o.value = !!((h = u.limitData) != null && h.length))
        }

        function f() {
            Ja(Qt.LIMIT_GAME, u), be.push({
                path: "withdrawLimitGame"
            })
        }
        return {
            auditState: a,
            auditStateColor: l,
            showLimitGame: o,
            limitGameInfo: u,
            auditDetails: d,
            auditStateColorFirst: s,
            goGame: f
        }
    },
    Zm = {
        class: "record-wrap"
    },
    ep = {
        class: "record-item flex-between"
    },
    tp = {
        class: "record-item flex-between"
    },
    ap = {
        class: "record-item flex-between"
    },
    np = {
        class: "record-item flex-between"
    },
    sp = {
        class: "record-item flex-between"
    },
    op = {
        class: "record-item flex-between"
    },
    lp = {
        class: "record-item flex-between"
    },
    ip = {
        class: "record-item flex-between"
    },
    rp = {
        key: 0,
        class: "record-item flex-between"
    },
    up = {
        class: "record-item flex-between"
    },
    cp = {
        class: "record-item flex-between"
    },
    dp = q({
        __name: "index",
        setup(a) {
            const {
                auditStateColorFirst: l,
                showLimitGame: s,
                auditDetails: o,
                goGame: u,
                auditState: n
            } = Zn();
            return (d, m) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    shadow: "",
                    title: d.$t("viewsAssets.auditDetails")
                }, null, 8, ["title"]), i(e(ce), {
                    class: "first-content",
                    scrollY: !0
                }, {
                    default: b(() => [t("div", Zm, [t("div", ep, [t("span", null, r(d.$t("viewsAssets.transactionType")), 1), t("span", null, r(e(o).tradeType), 1)]), t("div", tp, [t("span", null, r(d.$t("activity.activityName")), 1), t("span", null, r(e(o).activityName), 1)]), t("div", ap, [t("span", null, r(d.$t("viewsAssets.auditStatus")), 1), t("span", {
                        style: yt({
                            color: "var(".concat(e(l), ")")
                        }),
                        class: X(e(n))
                    }, r(e(o).auditStatus), 7)]), t("div", np, [t("span", null, r(d.$t("viewsAssets.transactionAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).tradeAmount)), 1)]),
                        _: 1
                    })]), t("div", sp, [t("span", null, r(d.$t("viewsAssets.auditMultiplier")), 1), t("span", null, r(e(o).auditMultiple), 1)]), t("div", op, [t("span", null, r(d.$t("viewsAssets.auditAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).auditAmount)), 1)]),
                        _: 1
                    })]), t("div", lp, [t("span", null, r(d.$t("viewsAssets.unauditedAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).unAuditAmount)), 1)]),
                        _: 1
                    })]), t("div", ip, [t("span", null, r(d.$t("viewsAssets.auditedAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).auditedAmount)), 1)]),
                        _: 1
                    })]), e(s) ? (c(), _("div", rp, [t("span", null, r(d.$t("viewsAssets.gameRestrictions")), 1), t("button", {
                        class: "link",
                        onClick: m[0] || (m[0] = (...f) => e(u) && e(u)(...f))
                    }, r(d.$t("viewsAssets.goNow")), 1)])) : k("", !0), t("div", up, [t("span", null, r(d.$t("viewsAssets.createTime")), 1), t("span", null, r(e(o).createTime), 1)]), t("div", cp, [t("span", null, r(d.$t("viewsAssets.completionTime")), 1), t("span", null, r(e(o).finishTime), 1)])])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    mp = Y(dp, [
        ["__scopeId", "data-v-b56e27a5"]
    ]),
    m1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    es = () => {
        const a = Ts(),
            l = At(),
            s = I(0),
            o = I(!1),
            u = I(),
            n = I(""),
            d = I("more"),
            m = I([]),
            f = I([]),
            p = I(!1),
            v = lt({
                page: 1,
                pageSize: xl.PAGE_SIZE,
                gameIdList: []
            });
        let h = 1,
            y = [];
        const g = F(() => a.homeGames),
            w = F(() => f.value.map(V => V.gameType)),
            C = F(() => {
                var D, Z;
                const V = (D = f.value.find(Q => Q.gameType == n.value)) == null ? void 0 : D.platformData,
                    O = (Z = g.value.find(Q => Q.gameType == n.value)) == null ? void 0 : Z.platformList,
                    x = [];
                if (V != null && V.length && (O != null && O.length)) {
                    let Q = new Map;
                    O.forEach(P => Q.set(P.id, P)), V.forEach(P => {
                        Q.has(P.platformId) && x.push(Q.get(P.platformId))
                    })
                }
                return x
            });
        nt(w, V => {
            V.length && (n.value = V[0])
        }), nt(C, V => {
            V.length && (s.value = V[0].id, p.value = !1, L())
        });

        function L() {
            var x, D;
            if (h = 0, m.value = [], v.gameIdList = [], y = ((D = ((x = f.value.find(Z => Z.gameType === n.value)) == null ? void 0 : x.platformData).find(Z => Z.platformId === s.value)) == null ? void 0 : D.gameData).map(Z => Z.gameId), y.length <= (v == null ? void 0 : v.pageSize)) v.gameIdList = y;
            else {
                let Z = v.pageSize;
                v.gameIdList = y.slice(h * Z, (h + 1) * Z)
            }
            p.value = !1, j()
        }

        function $(V) {
            s.value = C.value[0].id, p.value = !1, L()
        }

        function T(V) {
            s.value = V.detail.value, L()
        }

        function B(V) {
            if (V.gameName || V.name) {
                const O = V.logo || V.gameLogo;
                return "background:linear-gradient(".concat("360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 16.23%, rgba(0, 0, 0, 0) 29.9%, rgba(0, 0, 0, 0) 100%", '),url("').concat(O, '"); background-size: cover; background-position: center')
            }
            return "background: url(".concat(V.background || V.plateformBackground, "); background-size: cover; background-position: center")
        }
        async function N(V) {
            if (d.value == "noMore" || m.value.length == 0) return;
            const O = v.pageSize,
                x = Math.ceil(y.length / O);
            if (h >= x) {
                d.value = "noMore";
                return
            }
            j()
        }

        function A(V) {
            a.enterGame(V)
        }
        Wn(async () => {
            var O;
            await a.getHomeGames();
            const V = await Rn(Qt.LIMIT_GAME);
            f.value = (O = V == null ? void 0 : V.limitData) != null ? O : []
        });
        async function R(V, O, x) {
            x ? V.isFavorite = !1 : V.isFavorite = !V.isFavorite, V.isFavorite ? await l.addFavorite(V, O) : await l.cancelFavorite(V, O)
        }
        async function j() {
            var x, D, Z;
            if (o.value) return;
            o.value = !0;
            const V = (x = g.value.find(Q => Q.gameType == n.value)) == null ? void 0 : x.platformList;
            if (qt(V)) {
                d.value = "noMore", o.value = !1;
                return
            }
            if (((D = V.find(Q => Q.id == s.value)) == null ? void 0 : D.target) === "hall") {
                const Q = new Map;
                if (V.filter(P => P.target === "hall").forEach(P => Q.set(P.id, P)), Q.has(s.value)) {
                    m.value.push({ ...Q.get(s.value)
                    }), m.value = Nl(m.value), p.value = !0, d.value = "noMore", o.value = !1;
                    return
                }
            }
            if (!((Z = v == null ? void 0 : v.gameIdList) != null && Z.length)) {
                d.value = "noMore", o.value = !1;
                return
            }
            await ha();
            try {
                const Q = await Pl(v);
                if (Q && "gameList" in Q) {
                    let P = v.pageSize;
                    const M = Math.ceil(y.length / P);
                    h >= M ? d.value = "noMore" : (d.value = "more", h += 1, v.gameIdList = y.slice(h * P, (h + 1) * P)), m.value.push(...Q.gameList), Rl(m.value)
                }
            } catch (Q) {
                console.error(Q)
            } finally {
                o.value = !1, u.value.$el.complete()
            }
        }
        return {
            tabValue: n,
            tabs: w,
            sideValue: s,
            segmentList: C,
            loadMore: d,
            gameList: m,
            loading: o,
            infiniteRef: u,
            isHall: p,
            gameHandle: A,
            gameCardStyle: B,
            favoriteHandle: R,
            ionInfinite: N,
            tabChange: $,
            sideChange: T
        }
    },
    pp = {
        class: "flex h-full"
    },
    fp = {
        class: "w-full px-1"
    },
    hp = {
        key: 0,
        class: "flex flex-col items-center justify-center"
    },
    vp = q({
        __name: "index",
        setup(a) {
            const {
                tabValue: l,
                tabs: s,
                sideValue: o,
                segmentList: u,
                loadMore: n,
                gameList: d,
                loading: m,
                infiniteRef: f,
                isHall: p,
                gameHandle: v,
                favoriteHandle: h,
                ionInfinite: y,
                tabChange: g,
                sideChange: w
            } = es();
            return (C, L) => (c(), S(e(Pe), null, {
                default: b(() => [i(e(Pt), {
                    class: X(["ion-no-border", e(ma)()])
                }, {
                    default: b(() => [i(e(ft), {
                        mode: "ios",
                        class: "top-header"
                    }, {
                        default: b(() => [i(Wt), i(e(Gt), null, {
                            default: b(() => [U(r(C.$t("viewsAssets.designatedGame")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }), i(e(ft), {
                        class: "toolbar-search"
                    }, {
                        default: b(() => [i(e(Tt), {
                            mode: "ios",
                            scrollable: "",
                            modelValue: e(l),
                            "onUpdate:modelValue": L[0] || (L[0] = $ => te(l) ? l.value = $ : null),
                            onIonChange: e(g)
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(s), $ => (c(), S(e(It), {
                                value: $,
                                key: $
                            }, {
                                default: b(() => [i(e(pa), {
                                    class: "w-9",
                                    src: "/icons/sort/".concat($, "_on.png")
                                }, null, 8, ["src"]), i(e(st), {
                                    class: X(["text-xs"])
                                }, {
                                    default: b(() => [U(r(C.$t("sort.".concat($))), 1)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1032, ["value"]))), 128))]),
                            _: 1
                        }, 8, ["modelValue", "onIonChange"])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["class"]), i(e(ce), {
                    id: "content",
                    class: X(e(ma)())
                }, {
                    default: b(() => [L[2] || (L[2] = t("div", {
                        class: "mx-[.625rem] my-4 line"
                    }, null, -1)), t("div", pp, [e(u).length ? (c(), S(e(ce), {
                        key: 0,
                        class: "side"
                    }, {
                        default: b(() => [i(e(Tt), {
                            class: "flex flex-col",
                            ref: "segment",
                            mode: "ios",
                            modelValue: e(o),
                            "onUpdate:modelValue": L[1] || (L[1] = $ => te(o) ? o.value = $ : null),
                            disabled: e(m),
                            onIonChange: e(w)
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(u), $ => (c(), S(e(It), {
                                value: $.id
                            }, {
                                default: b(() => [i(e(ne), {
                                    class: X(["text-[2.375rem]", [e(o) == $.id ? "active" : ""]]),
                                    src: $.logo
                                }, null, 8, ["class", "src"]), t("div", fp, [i(e(st), {
                                    class: "text-sm text-wrap"
                                }, {
                                    default: b(() => [U(r($.name), 1)]),
                                    _: 2
                                }, 1024)])]),
                                _: 2
                            }, 1032, ["value"]))), 256))]),
                            _: 1
                        }, 8, ["modelValue", "disabled", "onIonChange"])]),
                        _: 1
                    })) : k("", !0), i(e(ce), {
                        id: "main",
                        scrollY: !1
                    }, {
                        default: b(() => [i(e(ce), null, {
                            default: b(() => [i(e(Un), null, {
                                default: b(() => [i(e(Fn), null, {
                                    default: b(() => [!e(m) && !e(d).length ? (c(), _("div", hp, [i(va)])) : k("", !0), i(e(nn), null, {
                                        default: b(() => [e(p) ? (c(!0), _(ae, {
                                            key: 0
                                        }, fe(e(d), $ => (c(), S(On, {
                                            class: "aspect-ratio-card",
                                            key: $.id,
                                            game: $,
                                            platform: {
                                                gameType: $.gameType
                                            },
                                            onClick: () => e(Vn)({ ...$,
                                                gameType: $.gameType,
                                                platformId: $.id
                                            }, !0)
                                        }, null, 8, ["game", "platform", "onClick"]))), 128)) : (c(!0), _(ae, {
                                            key: 1
                                        }, fe(e(d), $ => (c(), S(e(sn), {
                                            size: "4"
                                        }, {
                                            default: b(() => [(c(), S(Mn, {
                                                key: $.id,
                                                class: "game-item",
                                                "is-own-game": !!$.externalGameId,
                                                test: $ == null ? void 0 : $.test,
                                                status: $.status,
                                                "is-logo": !1,
                                                gameInfo: {
                                                    logoFlag: $.logoFlag
                                                },
                                                "is-favorite": ($ == null ? void 0 : $.isFavorite) || !1,
                                                onClick: T => e(v)($),
                                                onFavoriteHandle: () => e(h)($)
                                            }, jn({
                                                _: 2
                                            }, [!$.logo && $.externalGameId ? {
                                                name: "gameName",
                                                fn: b(() => [t("span", null, r($.name), 1)]),
                                                key: "0"
                                            } : void 0]), 1032, ["is-own-game", "test", "status", "gameInfo", "is-favorite", "onClick", "onFavoriteHandle"]))]),
                                            _: 2
                                        }, 1024))), 256))]),
                                        _: 1
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            }), i(e(Oa), {
                                ref_key: "infiniteRef",
                                ref: f,
                                onIonInfinite: e(y),
                                threshold: "5px"
                            }, {
                                default: b(() => [i(e(Va), {
                                    "loading-text": e(n) == "noMore" ? C.$t("label.noMore") : "",
                                    "loading-spinner": e(n) == "more" ? "bubbles" : null
                                }, null, 8, ["loading-text", "loading-spinner"])]),
                                _: 1
                            }, 8, ["onIonInfinite"])]),
                            _: 1
                        })]),
                        _: 1
                    })])]),
                    _: 1
                }, 8, ["class"])]),
                _: 1
            }))
        }
    }),
    bp = Y(vp, [
        ["__scopeId", "data-v-0a2a82de"]
    ]),
    p1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: bp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Lo = () => {
        const a = qe(),
            l = Nt(),
            {
                waitPayOrderNo: s,
                clearWaitPayOrderNo: o,
                isShowDoubleReward: u
            } = As(),
            {
                isRechargeClaim: n,
                clearWaitPayOrderNoAfterRecharge: d,
                waitPayOrderNoAfterRecharge: m
            } = ks(),
            f = I(),
            p = I(!1),
            v = I("0"),
            h = I("more"),
            y = I(!1),
            g = I(!1),
            w = I([]);
        let C = [];
        const L = I("today"),
            $ = ["SUCCESS", "PAID", "HAVE_ARRIVED"],
            T = ["MANUALLY-END", "TIMEOUT", "CANCEL", "LIMIT_EXCEEED"],
            {
                isVirtualCurrency: B
            } = Ve(a),
            N = F(() => {
                var H;
                return (H = a.tenantInfo) == null ? void 0 : H.merchantCy
            }),
            {
                t: A
            } = it(),
            R = {
                page: 1,
                pageSize: 10
            },
            j = () => {
                s.value && ge(s.value)
            },
            V = () => {
                m.value && ge(m.value)
            },
            {
                QRCodeInfo: O,
                isQRCode: x,
                thirdUrl: D,
                isOpenOrderModal: Z,
                isOpenOrderInfoModal: Q
            } = Ve(l),
            P = F(() => {
                var H;
                return ((H = a.tenantInfo) == null ? void 0 : H.code) === "BD"
            }),
            M = H => {
                const J = Vs(H);
                R.startTime = J == null ? void 0 : J.startTime, R.endTime = J == null ? void 0 : J.endTime, R.page = 1, h.value = "more", w.value = [], C = [], ha(), Me()
            },
            W = () => {
                R.page = 1, h.value = "more", Me()
            },
            ie = () => W();
        pt.on("record/refresh", ie), ba(() => pt.off("record/refresh", ie));
        const se = () => {
                const H = sessionStorage.getItem("transferConfig");
                H && (l.transferConfig = { ...l.transferConfig,
                    ...JSON.parse(H)
                })
            },
            ke = F(() => Z.value && !x.value && !D.value),
            Re = El();
        Dn(() => {
            Re.previousRoute !== "/recharge/pay" && M(L.value), a.getTenantInfo(), se()
        }), nt(D, async H => {
            var J;
            !H || !P.value || be.currentRoute.value.path === "/rechargeRecord" && (sessionStorage.setItem("bdPayUrl", H), (J = history.state) != null && J.current || await new Promise(Ce => {
                const re = () => {
                    window.removeEventListener("popstate", re), Ce()
                };
                window.addEventListener("popstate", re), history.back()
            }), await be.push("/recharge/pay"))
        }), zt(() => {
            if (l.isOpenOrderInfoModal && !l.orderInfoNavigating) {
                l.orderInfoNavigating = !0, setTimeout(() => {
                    l.isOpenOrderInfoModal = !1, l.orderInfoNavigating = !1
                }, 300);
                return
            }
            y.value = !1, l.thirdUrl = "", l.isQRCode = !1, l.isOpenOrderModal = !1, o(), d()
        });

        function Ke() {
            y.value = !0
        }
        async function Ue(H) {
            R.page = 1, await Me(), H.detail.complete()
        }
        async function _e() {
            h.value != "noMore" && (await Na(1e3), R.page++, Me())
        }

        function ge(H) {
            const J = C.find(Rt => Rt.orderNo === H),
                {
                    transferRealName: Ce,
                    transferCompany: re,
                    transferAccount: le,
                    qrCodeUrl: Ee,
                    type: ve,
                    status: Se,
                    transferVoucher: me,
                    payerRealName: Fe,
                    payTypeName: $e,
                    amount: _t,
                    payAmount: ut
                } = J;
            l.orderNo = H;
            const ct = xt(J.createTime, "YYYY-MM-DD HH:mm:ss"),
                ht = xt(J.expireTime).unix() - Aa().unix();
            l.orderInfo = { ...l.orderInfo,
                transferRealName: Ce,
                transferCompany: re,
                transferAccount: le,
                qrCodeUrl: Ee,
                amount: $.includes(Se) ? "".concat(ut) : "".concat(_t),
                createTime: ct,
                payTypeName: $e,
                orderNo: H,
                expireTime: ht,
                transferVoucher: me,
                voucher: "",
                payerRealName: Fe,
                payerName: "",
                isTransfer: ve == "TRANSFER",
                status: Se
            }, l.isOpenOrderModal = !0
        }
        const we = Sn($, T),
            Ie = async H => {
                const J = [];
                for (const Ce of H) {
                    const {
                        createTime: re,
                        payTypeName: le,
                        status: Ee,
                        amount: ve,
                        payAmount: Se,
                        orderNo: me
                    } = Ce, Fe = $.includes(Ee) ? Se : ve, $e = await Ms(Fe);
                    J.push({
                        time: re,
                        name: le,
                        orderNo: me,
                        amount: Fe,
                        statusColor: we(Ee),
                        status: A("status.".concat(Ee)),
                        realCurrency: $e
                    })
                }
                return J
            };
        async function Me() {
            p.value = !0;
            const H = await Ol(R);
            if (p.value = !1, !H || !("recordList" in H)) return;
            H != null && H.totalAmount && (v.value = "".concat(Qe(Number(H == null ? void 0 : H.totalAmount)))), H.recordList.length < R.pageSize ? h.value = "noMore" : h.value = "more";
            const J = await Ie(H.recordList);
            R.page == 1 ? (w.value = J, C = H.recordList, j(), V()) : (w.value.push(...J), C.push(...H.recordList)), f.value.$el.complete()
        }
        const Xe = () => u.value || n.value ? (be.push("/recharge/apply"), !0) : !1;
        return zt(() => {
            l.thirdUrl = "", l.isQRCode = !1
        }), {
            totalAmount: v,
            loading: p,
            recordList: w,
            loadMore: h,
            iframeLoaded: y,
            modalVisible: g,
            isVirtualCurrency: B,
            infiniteRef: f,
            changeTime: L,
            thirdUrl: D,
            isOpenOrderModal: Z,
            isOpenOrderInfoModal: Q,
            isQRCode: x,
            merchantCy: N,
            QRCodeInfo: O,
            timeChange: M,
            handleRefresh: Ue,
            detailHandle: ge,
            ionInfinite: _e,
            iframeLoadHandle: Ke,
            getPayRecordList: Me,
            t: A,
            customBack: Xe,
            showOrderModal: ke,
            isBDRegion: P
        }
    },
    gp = {
        key: 0,
        class: "flex flex-col items-center justify-center"
    },
    yp = {
        class: "w-[7.5rem] h-[7.5rem] mt-36"
    },
    _p = ["src"],
    wp = {
        key: 1,
        class: "flex h-full items-center justify-center"
    },
    Cp = q({
        __name: "index",
        setup(a) {
            const {
                thirdUrl: l,
                isBDRegion: s,
                totalAmount: o,
                loading: u,
                recordList: n,
                loadMore: d,
                iframeLoaded: m,
                infiniteRef: f,
                isVirtualCurrency: p,
                changeTime: v,
                isOpenOrderModal: h,
                isQRCode: y,
                merchantCy: g,
                QRCodeInfo: w,
                timeChange: C,
                handleRefresh: L,
                detailHandle: $,
                ionInfinite: T,
                iframeLoadHandle: B,
                getPayRecordList: N,
                t: A,
                customBack: R,
                showOrderModal: j
            } = Lo();
            return (V, O) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    shadow: "",
                    title: V.$t("label.rechargeRecord"),
                    bgColor: e(aa)(),
                    customBack: e(R)
                }, null, 8, ["title", "bgColor", "customBack"]), !e(y) && (e(s) || !e(l)) ? (c(), S(e(ce), {
                    key: 0,
                    class: "ion-padding"
                }, {
                    default: b(() => [i(e(ta), {
                        slot: "fixed",
                        "pull-factor": .5,
                        "pull-min": 100,
                        "pull-max": 200,
                        onIonRefresh: O[0] || (O[0] = x => e(L)(x))
                    }, {
                        default: b(() => [i(e(ea))]),
                        _: 1
                    }), i(cn, {
                        totalAmount: e(o),
                        changeTime: e(v),
                        "onUpdate:changeTime": O[1] || (O[1] = x => te(v) ? v.value = x : null),
                        onTimeChange: e(C),
                        size: "4",
                        iconPath: "/first/svg/select-icon.svg",
                        totalText: "".concat(e(A)("label.accumulatedRecharge"))
                    }, null, 8, ["totalAmount", "changeTime", "onTimeChange", "totalText"]), !e(u) && !e(n).length ? (c(), _("div", gp, [t("div", yp, [i(va)])])) : k("", !0), i(dn, {
                        recordList: e(n),
                        onDetailHandle: e($),
                        copyIconPath: "/first/svg/assets/copy.svg"
                    }, null, 8, ["recordList", "onDetailHandle"]), i(e(Oa), {
                        ref_key: "infiniteRef",
                        ref: f,
                        threshold: "5px",
                        onIonInfinite: e(T)
                    }, {
                        default: b(() => [i(e(Va), {
                            "loading-text": (e(d) == "noMore", ""),
                            "loading-spinner": e(d) == "more" ? "bubbles" : null
                        }, null, 8, ["loading-text", "loading-spinner"])]),
                        _: 1
                    }, 8, ["onIonInfinite"])]),
                    _: 1
                })) : k("", !0), e(y) ? (c(), S(e(ce), {
                    key: 1
                }, {
                    default: b(() => [i(on, en(tn({ ...e(w),
                        merchantCy: e(g) || ""
                    })), null, 16)]),
                    _: 1
                })) : k("", !0), e(s) ? k("", !0) : (c(), S(e(ce), {
                    key: 2,
                    id: "iframe",
                    class: X(e(l) && !e(y) ? "" : "hidden")
                }, {
                    default: b(() => [e(l) ? Bt((c(), _("iframe", {
                        key: 0,
                        class: "w-full h-full",
                        src: e(l),
                        onLoad: O[2] || (O[2] = (...x) => e(B) && e(B)(...x)),
                        frameborder: "0"
                    }, null, 40, _p)), [
                        [Dt, e(m)]
                    ]) : k("", !0), e(m) ? k("", !0) : (c(), _("div", wp, [i(e(Ft), {
                        class: "w-20 h-20",
                        name: "dots",
                        color: "light"
                    })]))]),
                    _: 1
                }, 8, ["class"])), e(j) && V.$route.path === "/rechargeRecord" ? (c(), S(ln, {
                    key: 3,
                    isOpen: e(h),
                    merchantCy: e(g),
                    isVirtualCurrency: e(p),
                    onPaySuccessCb: e(N)
                }, null, 8, ["isOpen", "merchantCy", "isVirtualCurrency", "onPaySuccessCb"])) : k("", !0)]),
                _: 1
            }))
        }
    }),
    $p = Y(Cp, [
        ["__scopeId", "data-v-e7d9ed33"]
    ]),
    f1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $p
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ts = () => {
        const {
            t: a
        } = Vl.global;
        En();
        const l = At(),
            s = I(""),
            o = I(""),
            u = I(!1),
            n = I(!1),
            d = lt({
                password: "",
                operatingType: {
                    operatingType: "add"
                }
            }),
            m = y => {
                s.value = y
            },
            f = y => {
                o.value = y
            },
            p = () => {
                if (s.value.length < 6) return xe("toast.invalidPassword");
                if (s.value !== o.value) return xe("toast.twoPsInconsistent");
                d.password = s.value, h()
            };
        Wn(() => {
            v()
        });
        const v = async () => {
                const y = await l.setAssets();
                y ? (u.value = !0, y.isAssetPassword && (Ja(Qt.WITHDRAW_MAIN, at.WITHDRAW), be.replace({
                    path: "/main/withdraw"
                }))) : setTimeout(() => {
                    v()
                }, 3e3)
            },
            h = async () => {
                if (!n.value) {
                    n.value = !0;
                    try {
                        await Ml(d), xe(a("main.set") + " " + a("main.success")), be.replace({
                            path: "/withdrawPWCompletion"
                        })
                    } catch (y) {
                        xe("toast.settingFailed")
                    } finally {
                        setTimeout(() => {
                            n.value = !1
                        }, 1e3)
                    }
                }
            };
        return {
            password: s,
            confirmPassword: o,
            loaded: u,
            btnLoading: n,
            confirmHandle: p,
            passwordHandle: m,
            confirmPasswordHandle: f,
            onGetUserAssets: v
        }
    },
    Ip = {
        class: "text-[.875rem] title"
    },
    Tp = {
        class: "text-xs label"
    },
    Ap = {
        class: "text-xs label"
    },
    kp = {
        class: "text-[.625rem] mb-7 label label-tip"
    },
    Sp = q({
        __name: "index",
        setup(a) {
            const {
                btnLoading: l,
                passwordHandle: s,
                confirmPasswordHandle: o,
                confirmHandle: u
            } = ts();
            return (n, d) => (c(), S(e(Pe), {
                class: "ion-no-border"
            }, {
                default: b(() => [i(Je, {
                    shadow: "",
                    title: n.$t("main.withdraw") + " " + n.$t("label.password")
                }, null, 8, ["title"]), i(e(ce), {
                    class: X(["ion-padding", "w-password-wrap"])
                }, {
                    default: b(() => [t("p", Ip, r(n.$t("main.set") + " " + n.$t("main.withdraw") + " " + n.$t("label.password")), 1), t("h6", Tp, r(n.$t("main.new") + " " + n.$t("main.withdraw") + " " + n.$t("label.password")), 1), i(Vt, {
                        onInput: e(s),
                        focus: ""
                    }, null, 8, ["onInput"]), t("h6", Ap, r(n.$t("main.confirm") + " " + n.$t("main.new") + " " + n.$t("label.password")), 1), i(Vt, {
                        onInput: e(o)
                    }, null, 8, ["onInput"]), t("h6", kp, r(n.$t("tip.firstWithdrawal")), 1), i(Mt, {
                        onClick: e(u),
                        suffixLoading: e(l)
                    }, {
                        default: b(() => [U(r(n.$t("label.withdrawNow")), 1)]),
                        _: 1
                    }, 8, ["onClick", "suffixLoading"])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Lp = Y(Sp, [
        ["__scopeId", "data-v-e5291370"]
    ]),
    h1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Lp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    as = () => ({
        goToWithdrawPage: () => {
            const l = Rn(Qt.IS_TAB_WITHDRAW);
            if (Ja(Qt.WITHDRAW_MAIN, at.WITHDRAW), l) return Zt("/main/withdraw");
            be.replace("/withdraw/apply")
        }
    }),
    xp = {
        class: "mt-[3.9375rem] flex items-center flex-col"
    },
    Np = {
        class: "success-wrap"
    },
    Pp = {
        class: "text-[1rem] leading-[1.375rem] py-[0.9375rem] title"
    },
    Rp = {
        class: "text-[0.875rem] leading-[1.375rem] label"
    },
    Ep = {
        class: "flex items-center justify-center space-x-[1.125rem] mt-10"
    },
    Op = q({
        __name: "index",
        setup(a) {
            const l = Bn(),
                {
                    newSkin: s
                } = We(),
                o = F(() => s ? "raised" : "style-2"),
                {
                    goToWithdrawPage: u
                } = as();
            return (n, d) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    title: n.$t("viewsAssets.setPasswordDone1")
                }, null, 8, ["title"]), i(e(ce), {
                    class: X(["ion-padding", "password-c"])
                }, {
                    default: b(() => [t("div", xp, [t("div", Np, [i(e(ne), {
                        class: "text-[2rem] mt-3",
                        src: "/first/svg/assets/success.svg"
                    })]), t("p", Pp, r(n.$t("viewsAssets.setPasswordDone2")), 1), t("p", Rp, r(n.$t("viewsAssets.setPasswordDone3")), 1)]), t("div", Ep, [i(Mt, {
                        onClick: d[0] || (d[0] = m => e(Zt)()),
                        class: "btnBase go-home",
                        background: "var(--color-button-bg-gray)",
                        style: yt(e(l)),
                        classType: e(o)
                    }, {
                        default: b(() => [U(r(n.$t("viewsAssets.setPasswordDone4")), 1)]),
                        _: 1
                    }, 8, ["style", "classType"]), i(Mt, {
                        onClick: e(u),
                        class: "btnBase"
                    }, {
                        default: b(() => [U(r(n.$t("viewsAssets.setPasswordDone5")), 1)]),
                        _: 1
                    }, 8, ["onClick"])])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Vp = Y(Op, [
        ["__scopeId", "data-v-f18ced38"]
    ]),
    v1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xo = async a => {
        const l = Ht(),
            {
                tabId: s
            } = Ve(l);
        let o = s.value,
            u = [];
        const n = [];
        let d = await Os();
        return d.sort((m, f) => f.sort - m.sort), s.value >= 0 ? o = s.value : o = d[0].id, d.forEach(m => {
            m.tenantPayWithdrawTypeSub.sort((f, p) => p.sort - f.sort), m.id === o && n.push(...m.tenantPayWithdrawTypeSub), u.push({
                id: m.id,
                name: m.name
            }), a && a(m)
        }), {
            activeTabId: o,
            subTabList: n,
            mainTabList: u
        }
    },
    Mp = () => {
        const a = be.currentRoute,
            l = Ht(),
            {
                tabId: s
            } = Ve(l),
            o = I(!1),
            u = I(!1),
            n = I([]),
            d = I(""),
            m = I([]),
            f = I(s.value),
            p = new Map,
            v = new Map,
            h = I(1);
        let y = "",
            g = I(""),
            w = [],
            C = [];
        const L = I(!1),
            $ = () => {
                L.value = !1
            },
            T = I(!1),
            B = async (O, x = [], D = "update") => {
                let Z = C.filter(P => P.relatedCode === O).map(P => {
                    let {
                        valueType: M,
                        code: W,
                        id: ie,
                        value: se
                    } = P;
                    return {
                        isDefault: !0,
                        valueType: M,
                        code: W,
                        id: ie,
                        value: se,
                        relatedCode: O
                    }
                });
                x.length && Z.push(...x);
                let Q = [{
                    tenantWithdrawTypeId: f.value,
                    withdrawInfo: Z
                }];
                try {
                    await Ws({
                        accounts: Q,
                        operationType: D
                    })
                } catch (P) {}
            },
            N = async () => {
                let O = n.value.findIndex(D => D.relatedCode === y);
                if (O === -1) return;
                let x = n.value[O];
                try {
                    if (await Bl(x.ids), n.value.splice(O, 1), L.value = !1, x.isDefault && n.value.length >= 1) {
                        let D = n.value[0].relatedCode;
                        B(D), n.value[0].isDefault = !0, d.value = D
                    }
                    xe("".concat(xa("toast.deleteSuccess")))
                } catch (D) {
                    xe("".concat(xa("toast.deleteFail")))
                }
            },
            A = async O => {
                var x;
                y = O, g.value = (x = n.value.find(D => D.relatedCode === y)) == null ? void 0 : x.IFSC, L.value = !0
            },
            R = async O => {
                if (u.value) return;
                u.value = !0;
                let x = O.detail.value,
                    D = "",
                    Z = C.filter(Q => Q.isDefault).map(Q => {
                        let {
                            valueType: P,
                            code: M,
                            id: W,
                            value: ie,
                            relatedCode: se
                        } = Q;
                        return D = se, {
                            isDefault: !1,
                            valueType: P,
                            code: M,
                            id: W,
                            value: ie,
                            relatedCode: se
                        }
                    });
                try {
                    await B(x, Z, "editDefault");
                    const Q = P => {
                        P.relatedCode === x ? P.isDefault = !0 : P.relatedCode === D && (P.isDefault = !1)
                    };
                    n.value.forEach(Q), C.forEach(Q), u.value = !1
                } catch (Q) {
                    u.value = !1
                }
            },
            j = async O => {
                var D;
                if (o.value) return;
                o.value = !0, C = [...(await Dl({
                    tenantWithdrawTypeId: O
                })).queryData], n.value = wn(C, w), n.value.length && (d.value = (D = n.value[0]) == null ? void 0 : D.relatedCode), o.value = !1
            },
            V = async O => {
                l.tabId = O, w = p.get(O), await j(O), h.value = v.get(O), T.value = h.value > n.value.length
            };
        return nt(() => a.value.path, async O => {
            if (O == "/withdrawalAccount") {
                let {
                    activeTabId: x,
                    subTabList: D,
                    mainTabList: Z
                } = await xo(Q => {
                    v.set(Q.id, Q.withdrawalAccountMax), p.set(Q.id, Q.tenantPayWithdrawTypeSub)
                });
                m.value = Z, f.value = x, w = D, await j(f.value), h.value = v.get(x), T.value = h.value > n.value.length
            }
        }, {
            immediate: !0
        }), {
            relatedCode: d,
            loading: o,
            modelValue: L,
            accountList: n,
            deleteIFSC: g,
            tabList: m,
            tabId: f,
            isDisabled: u,
            isShowAddCard: T,
            closeHandle: $,
            modifyDefault: R,
            handleDelete: A,
            deleteAccount: N,
            tabChange: V
        }
    },
    Bp = {
        class: X(["tab-list"])
    },
    Dp = {
        class: "textColorBg"
    },
    Hp = q({
        __name: "Tab",
        props: Ne({
            tabList: {},
            disabled: {
                type: Boolean,
                default: !1
            },
            activeBg: {}
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            const {
                skin: s
            } = We(), o = l, u = rt(a, "tabId"), n = d => {
                const m = d.detail.value;
                o("tabChange", m), o("update:tabId", m)
            };
            return F(() => s === "first"), F(() => s === "default"), (d, m) => (c(), _("div", Bp, [i(e(Tt), {
                value: u.value,
                scrollable: "",
                swipeGesture: "",
                mode: "ios",
                onIonChange: n,
                disabled: a.disabled
            }, {
                default: b(() => [(c(!0), _(ae, null, fe(a.tabList, f => (c(), S(e(It), {
                    value: f.id
                }, {
                    default: b(() => [t("div", Dp, r(f.name), 1)]),
                    _: 2
                }, 1032, ["value"]))), 256))]),
                _: 1
            }, 8, ["value", "disabled"])]))
        }
    }),
    No = Y(Hp, [
        ["__scopeId", "data-v-607c6dae"]
    ]),
    Po = (a, l) => {
        const s = I(!1),
            o = Cn(() => {
                a.value && l.value.length > 0 && (s.value = !0, o())
            });
        return {
            showTab: s
        }
    },
    Wp = {
        class: "flex-between radio-wrap"
    },
    Up = {
        class: "ml-0.5"
    },
    Fp = q({
        __name: "index",
        setup(a) {
            Bn();
            const {
                theme: l
            } = We(), {
                relatedCode: s,
                accountList: o,
                tabList: u,
                tabId: n,
                loading: d,
                isDisabled: m,
                modifyDefault: f,
                tabChange: p
            } = Mp(), {
                showTab: v
            } = Po(n, u);
            return (h, y) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    shadow: "",
                    title: h.$t("viewsAssets.myAccount"),
                    bgColor: e(aa)()
                }, null, 8, ["title", "bgColor"]), i(e(ce), {
                    class: X(["w-account", e(l)])
                }, {
                    default: b(() => [e(v) ? (c(), S(No, {
                        key: 0,
                        tabList: e(u),
                        "tab-id": e(n),
                        "onUpdate:tabId": y[0] || (y[0] = g => te(n) ? n.value = g : null),
                        disabled: e(d),
                        onTabChange: e(p)
                    }, null, 8, ["tabList", "tab-id", "disabled", "onTabChange"])) : k("", !0), i(e(Ys), {
                        value: e(s),
                        onIonChange: e(f)
                    }, {
                        default: b(() => [(c(!0), _(ae, null, fe(e(o), g => (c(), S($n, {
                            cardInfo: g,
                            type: "info"
                        }, {
                            action: b(() => [t("div", Wp, [i(e(Qs), {
                                class: "",
                                disabled: e(m),
                                value: g.relatedCode,
                                mode: "ios"
                            }, null, 8, ["disabled", "value"]), y[1] || (y[1] = U()), t("span", Up, r(h.$t("viewsAssets.default")), 1)])]),
                            _: 2
                        }, 1032, ["cardInfo"]))), 256))]),
                        _: 1
                    }, 8, ["value", "onIonChange"]), i($n, {
                        type: "action"
                    })]),
                    _: 1
                }, 8, ["class"])]),
                _: 1
            }))
        }
    }),
    jp = Y(Fp, [
        ["__scopeId", "data-v-f77d2d43"]
    ]),
    b1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Gp = () => {
        const a = Ht(),
            l = At(),
            s = En(),
            o = qe(),
            {
                t: u
            } = it(),
            n = I(null),
            {
                height: d
            } = Hn(n),
            m = F(() => "".concat(d.value * 3 / 16, "rem")),
            {
                phoneCode: f,
                tenantInfo: p
            } = Ve(o),
            {
                tabId: v,
                accountItems: h
            } = Ve(a),
            {
                withdrawType: y
            } = Ve(l),
            g = I(!1),
            w = I(v.value),
            C = I([]),
            L = I([]),
            $ = ["realName", "BANKACCOUNT", "code"],
            T = lt({}),
            B = I(null),
            N = I(""),
            A = I(""),
            R = new Map,
            j = new Map,
            V = new Map,
            O = new Map;
        let x = new Map;
        const D = new Map,
            Z = I(!1),
            Q = I(!1),
            P = I(!1),
            M = ["BANK", "UPI"],
            W = G => G.startsWith("0") && G.length > 1 ? G.substring(1) : G,
            ie = {};
        $.forEach(G => {
            T[G] = "", ie["".concat(G, "El")] = I(null)
        });
        const se = G => {
                if (!G.length) return;
                const E = new Map(G.map(z => [z.valueType, z])).get("REALNAME");
                E && (T.realName = E.value, Z.value = !0)
            },
            ke = async () => {
                var G;
                if (((G = p.value) == null ? void 0 : G.code) === "PK") try {
                    const ee = await Is(),
                        E = ee == null ? void 0 : ee.idCard;
                    E && (T.idCard = E, P.value = !0)
                } catch (ee) {
                    console.warn("[bindAccount] 拉取 user.idCard 失败:", ee)
                }
            };
        a.setAccount().then(G => {
            se(G), ke(), x = new Map(G.map(ee => ["".concat(ee.code, "-").concat(ee.valueType), ee]))
        });
        const Re = (G, ee) => ({
                BANKACCOUNT: G,
                isReadonly: ee
            }),
            Ke = async (G, ee) => {
                if (!G.length || M.includes(ee)) return;
                const E = "".concat(T.code, "-BANKACCOUNT"),
                    z = "".concat(T.code, "-REALNAME"),
                    pe = x.get(E);
                if (await Ue(E, z) && pe) {
                    const Te = W(pe.value),
                        tt = _e(),
                        Ze = Re(Te, tt);
                    T.BANKACCOUNT = Ze.BANKACCOUNT, Q.value = Ze.isReadonly
                } else T.BANKACCOUNT = "", Q.value = !1
            },
            Ue = async (G, ee) => {
                var Te;
                const E = await s.getLoginType() || "",
                    z = ((Te = p.value) == null ? void 0 : Te.registerBindGcashMaya) && E === Hl.Phone,
                    pe = x.has(G) && !x.has(ee),
                    Be = D.get(w.value) === 1;
                return z || pe || Be
            },
            _e = () => {
                var G;
                return !!((G = p.value) != null && G.registerBindGcashMaya) || D.get(w.value) === 1 || x.has("".concat(T.code, "-BANKACCOUNT")) && !x.has("".concat(T.code, "-REALNAME"))
            },
            ge = F(() => {
                var G;
                return (G = p.value) == null ? void 0 : G.code
            }),
            we = I("CLABE"),
            Ie = F(() => ge.value === "MX" && (A.value === "SPEI" || A.value === "BANK")),
            Me = F(() => [{
                label: u("label.CLABE"),
                value: "CLABE"
            }, {
                label: u("label.bankAccount"),
                value: "BANKACCOUNT"
            }]),
            Xe = F(() => we.value === "CLABE" ? {
                inputType: "clabe",
                minLen: 18,
                maxLen: 18,
                label: u("label.CLABE"),
                placeholder: u("hint.tipCLABE"),
                errorText: u("hint.invalidCLABE")
            } : {
                inputType: "bankCard",
                minLen: 1,
                maxLen: 20,
                label: u("label.bankAccount"),
                placeholder: u("hint.placeholderBank"),
                errorText: u("hint.invalidBank")
            }),
            H = G => {
                we.value = G;
                const ee = G === "CLABE" ? "BANKACCOUNT" : "CLABE";
                T[ee] = ""
            },
            J = F(() => {
                var ee, E, z, pe;
                if (Ie.value) {
                    const Be = ((ee = T[we.value]) != null ? ee : "").trim();
                    return !!((E = T.realName) != null && E.trim()) && !!((z = T.code) != null && z.trim()) && Be.length > 0
                }
                const G = $.every(Be => {
                    var Te;
                    return ((Te = T[Be]) == null ? void 0 : Te.trim().length) > 0
                });
                return ge.value === "PK" ? G && !!((pe = T.idCard) != null && pe.trim()) : G
            }),
            Ce = G => {
                if (L.value = R.get(G), N.value = j.get(G), A.value = V.get(G), T.code = L.value.length === 1 ? L.value[0].code : "", A.value === "BANK" && ge.value === "IN" ? (T.IFSC = "", ie.IFSCEl = I(null)) : (delete T.IFSC, delete ie.IFSCEl), ge.value === "PK" ? (T.idCard == null && (T.idCard = ""), ie.idCardEl = ie.idCardEl || I(null)) : (delete T.idCard, delete ie.idCardEl), Ie.value) {
                    T.CLABE = "", T.BANKACCOUNT = "", ie.CLABEEl = ie.CLABEEl || I(null);
                    const ee = x.get("".concat(T.code, "-CLABE")),
                        E = x.get("".concat(T.code, "-BANKACCOUNT"));
                    ee ? (we.value = "CLABE", T.CLABE = ee.value) : E ? (we.value = "BANKACCOUNT", T.BANKACCOUNT = W(E.value)) : we.value = "CLABE";
                    return
                }
                M.includes(A.value) ? T.BANKACCOUNT = "" : Ke(h.value, A.value)
            };
        Ut(async () => {
            R.clear(), j.clear(), V.clear(), O.clear();
            let {
                activeTabId: G,
                mainTabList: ee
            } = await xo(E => {
                R.set(E.id, E.tenantPayWithdrawTypeSub), j.set(E.id, E.name), V.set(E.id, E.code), O.set(E.code, E.id), D.set(E.id, E.withdrawalAccountMax)
            });
            w.value = G, C.value = ee, console.log(ee, " mainTabList"), await Na(300), Ce(w.value)
        });
        const re = G => {
                a.tabId = G, Ce(G)
            },
            le = (G, ee, E, z) => ({
                code: G,
                valueType: ee.toUpperCase(),
                value: E,
                isDefault: !0,
                relatedCode: z
            }),
            Ee = () => {
                const G = ms(),
                    ee = Object.entries(T).filter(([E, z]) => E !== "code" && E !== "idCard" && z).map(([E, z]) => le(T.code, E, z, G));
                return [{
                    tenantWithdrawTypeId: w.value,
                    withdrawInfo: ee
                }]
            },
            ve = G => x.has("".concat(G, "-BANKACCOUNT")) && !x.has("".concat(G, "-REALNAME")),
            Se = G => {
                const ee = R.get(G);
                return (ee == null ? void 0 : ee.length) === 1 ? ee[0].code : null
            },
            me = (G, ee) => {
                const E = x.get("".concat(ee, "-BANKACCOUNT")),
                    z = (E == null ? void 0 : E.relatedCode) || ms(),
                    pe = ee === T.code ? T.BANKACCOUNT : W(E.value),
                    Be = ["BANKACCOUNT", "realName"].map(Te => {
                        const tt = Te === "BANKACCOUNT" ? pe : T.realName;
                        return le(ee, Te, tt, z)
                    });
                return {
                    tenantWithdrawTypeId: G,
                    withdrawInfo: Be
                }
            },
            Fe = () => C.value.reduce((G, ee) => {
                if (M.includes(ee.name)) return G;
                const E = Se(ee.id);
                return !E || !ve(E) || G.push(me(ee.id, E)), G
            }, []),
            $e = () => {
                if (Ie.value) return !0;
                const G = M.includes(A.value),
                    ee = !h.value.length || !x.has("".concat(T.code, "-BANKACCOUNT")),
                    E = x.has("".concat(T.code, "-BANKACCOUNT")) && x.has("".concat(T.code, "-REALNAME"));
                return console.log("noNeedRelatedAccount===".concat(G), "isFirstBinding===".concat(ee), "hasCompleteAccount===".concat(E)), G || ee || E
            },
            _t = async () => {
                var pe, Be;
                const G = (pe = B.value) == null ? void 0 : pe.querySelectorAll(".ion-invalid");
                if (G != null && G.length) return;
                if (T.realName.length > 128 && (T.realName = T.realName.slice(0, 128)), Ie.value) {
                    const Te = ((Be = T[we.value]) != null ? Be : "").trim();
                    if (we.value === "CLABE" && !/^\d{18}$/.test(Te)) return xe(u("hint.invalidCLABE"));
                    if (we.value === "BANKACCOUNT" && (!/^\d{1,20}$/.test(Te) || Te.length === 18)) return xe(u("hint.invalidBank"))
                }
                let ee, E = "add";
                if ($e()) ee = Ee();
                else {
                    const Te = Fe();
                    Te.length ? (ee = Te, E = "update") : ee = Ee()
                }
                try {
                    const Te = {
                        accounts: ee,
                        operationType: E
                    };
                    ge.value === "PK" && T.idCard && (Te.idCard = T.idCard.trim()), await Ws(Te), xe(u("toast.bindSuccess")), be.back()
                } catch (Te) {
                    console.error("Failed to add account:", Te)
                }
            },
            ut = G => {
                T.code = G.detail.value
            },
            ct = G => {
                setTimeout(() => {
                    T.realName = rn(G)
                })
            },
            ht = G => {
                if (ge.value === "VN") {
                    T.BANKACCOUNT = G.detail.value;
                    return
                }
                setTimeout(() => {
                    T.BANKACCOUNT = G.detail.value.replace(/[^\d]/g, "")
                }, 0)
            },
            kt = (G => ee => "".concat(u("hint.".concat(ee).concat(G))))(f.value),
            vt = {
                GCASH: {
                    minLen: 10,
                    maxLen: 10
                },
                MAYA_WALLET: {
                    minLen: 10,
                    maxLen: 10
                },
                IFSC: {
                    type: "ifsc",
                    placeholder: u("hint.tipIFSC"),
                    errorText: u("hint.invalidIFSC"),
                    label: u("label.IFSC"),
                    minLen: 10,
                    maxLen: 18,
                    isShow: !0,
                    key: "IFSC",
                    readonly: !1
                },
                UPI: {
                    type: "upi",
                    placeholder: u("hint.tipUPI"),
                    errorText: u("hint.invalidUPI", {
                        symbol: "@"
                    }),
                    minLen: 3,
                    maxLen: 50
                }
            },
            wt = (G = {}) => ({
                type: "phone",
                placeholder: u("hint.placeholderWallet"),
                errorText: kt("invalidPhone"),
                readonly: Q.value,
                label: "".concat(N.value, " ").concat(u("label.account")),
                isShow: A.value !== "BANK",
                key: "BANKACCOUNT",
                ...G
            }),
            dt = F(() => !A.value || Ie.value ? null : A.value === "BANK" && ge.value === "IN" ? vt.IFSC : ["GCASH", "MAYA_WALLET"].includes(A.value) ? wt({
                placeholder: u("label.".concat(A.value)),
                ...vt[A.value]
            }) : A.value === "UPI" ? wt({
                label: N.value,
                readonly: !1,
                ...vt.UPI
            }) : wt());
        return {
            loading: g,
            tabId: w,
            typeList: L,
            withdrawType: y,
            accountInfo: T,
            btnDisabled: J,
            tabList: C,
            elObj: ie,
            formEl: B,
            tabName: N,
            distance: m,
            footEl: n,
            phoneCode: f,
            currentRegionCode: ge,
            tabCode: A,
            isReadonlyRealName: Z,
            isReadonlyBANKACCOUNT: Q,
            isReadonlyCNIC: P,
            t: u,
            addAccount: _t,
            selectChange: ut,
            tabChange: re,
            handleInput: ct,
            handleInputBankCard: ht,
            bindAccountInputInfo: dt,
            setElementRef: (G, ee) => {
                if (!ee) return;
                const E = "".concat(ee, "El");
                ie[E] || (ie[E] = I(null)), ie[E].value = G
            },
            isMxSpei: Ie,
            mxAccountType: we,
            mxTypeOptions: Me,
            mxInputInfo: Xe,
            onMxTypeChange: H
        }
    },
    zp = {
        key: 0,
        class: "placeholder"
    },
    qp = {
        key: 1,
        class: "flex-start"
    },
    Kp = {
        class: "img-wrap"
    },
    Yp = ["src"],
    Qp = {
        class: "name-wrap"
    },
    Jp = {
        class: "name-inner"
    },
    Xp = ["onClick"],
    Zp = {
        class: "select-item-inner"
    },
    ef = {
        class: "img-wrap"
    },
    tf = ["src"],
    af = {
        class: "name-wrap"
    },
    nf = {
        class: "name-inner"
    },
    sf = {
        class: "radio-wrap"
    },
    yn = .5,
    of = q({
        __name: "BankCardSelect",
        props: Ne({
            selectList: {},
            placeholder: {}
        }, {
            modelValue: {
                required: !0
            },
            modelModifiers: {}
        }),
        emits: Ne(["update:modelValue"], ["update:modelValue"]),
        setup(a, {
            emit: l
        }) {
            const {
                theme: s
            } = We(), o = I(), u = I(!1), n = l, d = rt(a, "modelValue"), m = a, f = I([...m.selectList]), p = B => {
                var N;
                (N = o.value) == null || N.$el.dismiss(), B.code !== d.value && n("update:modelValue", B.code)
            }, v = F(() => m.selectList.find(B => B.code === d.value)), h = () => {
                f.value = [...m.selectList]
            }, y = () => {
                u.value = !1
            }, g = () => {
                u.value = !0
            }, w = [0, .25, .5, .75], C = I(yn * 100 + (w.indexOf(yn) + 1)), L = B => {
                T(B.target.value)
            }, $ = B => {
                console.log(B.detail.breakpoint, "ev");
                const N = B.detail.breakpoint;
                C.value = N * 100 + w.indexOf(N) + 1
            }, T = B => {
                if (!B) {
                    f.value = [...m.selectList];
                    return
                }
                const N = B.toLowerCase();
                f.value = m.selectList.filter(A => A.name.toLowerCase().includes(N))
            };
            return (B, N) => {
                var A, R;
                return c(), _(ae, null, [t("div", {
                    class: "select-border",
                    id: "select-blank-card",
                    onClick: h
                }, [d.value ? (c(), _("div", qp, [t("div", Kp, [t("img", {
                    alt: "",
                    src: (A = e(v)) == null ? void 0 : A.icon
                }, null, 8, Yp)]), t("div", Qp, [t("div", Jp, r((R = e(v)) == null ? void 0 : R.name), 1)])])) : (c(), _("div", zp, r(a.placeholder), 1)), i(e(ne), {
                    class: X(["arrow", {
                        "rotate-90": !e(u)
                    }]),
                    src: "/first/svg/assets/arrow.svg"
                }, null, 8, ["class"])]), i(e(Ra), {
                    onDidDismiss: y,
                    onDidPresent: g,
                    onIonBreakpointDidChange: $,
                    trigger: "select-blank-card",
                    ref_key: "modal",
                    ref: o,
                    "initial-breakpoint": yn,
                    breakpoints: w,
                    "expand-to-scroll": !1
                }, {
                    default: b(() => [i(e(ce), {
                        class: "select-content"
                    }, {
                        default: b(() => [t("div", {
                            class: "select-list",
                            style: yt({
                                maxHeight: "".concat(e(C), "%")
                            })
                        }, [i(e(ai), {
                            placeholder: "Search",
                            debounce: 500,
                            onIonInput: N[0] || (N[0] = j => L(j))
                        }), i(e(Ys), {
                            value: d.value
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(f), j => (c(), _("div", {
                                class: X(["select-item", {
                                    active: j.code === d.value
                                }, e(s)]),
                                key: j.code,
                                onClick: V => p(j)
                            }, [t("div", Zp, [t("div", ef, [t("img", {
                                alt: "",
                                src: j.icon
                            }, null, 8, tf)]), t("div", af, [t("div", nf, r(j.name), 1)])]), t("div", sf, [i(e(Qs), {
                                value: j.code,
                                mode: "ios",
                                class: "select"
                            }, null, 8, ["value"])])], 10, Xp))), 128))]),
                            _: 1
                        }, 8, ["value"])], 4)]),
                        _: 1
                    })]),
                    _: 1
                }, 512)], 64)
            }
        }
    }),
    lf = Y( of , [
        ["__scopeId", "data-v-dd0d4487"]
    ]),
    rf = {
        class: "tip tip-1"
    },
    uf = {
        class: "tip tip-2"
    },
    cf = {
        class: "label"
    },
    df = {
        class: "input-area"
    },
    mf = {
        key: 0,
        class: "item"
    },
    pf = {
        class: "label"
    },
    ff = {
        class: "input-area"
    },
    hf = {
        key: 1,
        class: "item"
    },
    vf = {
        class: "label"
    },
    bf = {
        class: "input-area"
    },
    gf = {
        class: "item"
    },
    yf = {
        class: "label"
    },
    _f = {
        class: "input-area mx-type-select"
    },
    wf = {
        class: "item"
    },
    Cf = {
        class: "label"
    },
    $f = {
        class: "input-area"
    },
    If = {
        key: 3,
        class: "item"
    },
    Tf = {
        class: "label"
    },
    Af = {
        class: "input-area"
    },
    kf = {
        key: 4,
        class: "item"
    },
    Sf = {
        class: "label"
    },
    Lf = {
        class: "input-area"
    },
    xf = q({
        __name: "index",
        setup(a) {
            ga(M => ({
                d7a4fee8: e(h)
            }));
            const {
                theme: l
            } = We(), {
                tabList: s,
                typeList: o,
                accountInfo: u,
                btnDisabled: n,
                formEl: d,
                tabId: m,
                tabName: f,
                tabCode: p,
                footEl: v,
                distance: h,
                phoneCode: y,
                isReadonlyRealName: g,
                isReadonlyCNIC: w,
                currentRegionCode: C,
                t: L,
                addAccount: $,
                tabChange: T,
                handleInput: B,
                handleInputBankCard: N,
                bindAccountInputInfo: A,
                setElementRef: R,
                isMxSpei: j,
                mxAccountType: V,
                mxTypeOptions: O,
                mxInputInfo: x,
                onMxTypeChange: D
            } = Gp(), {
                showTab: Z
            } = Po(m, s), Q = F(() => {
                const M = {
                    type: "bankCard",
                    minLen: 1,
                    maxLen: 64
                };
                return C.value === "VN" && (M.type = "bankCardVN", M.minLen = 4, M.maxLen = 19), C.value === "PK" && (M.maxLen = 24), M
            });
            return (M => W => "".concat(L("hint.".concat(W).concat(M))))(y.value), (M, W) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    shadow: "",
                    title: M.$t("viewsAssets.addAccount")
                }, null, 8, ["title"]), i(e(ce), {
                    class: "b-account"
                }, {
                    default: b(() => {
                        var ie;
                        return [e(Z) ? (c(), S(No, {
                            key: 0,
                            "tab-id": e(m),
                            "onUpdate:tabId": W[0] || (W[0] = se => te(m) ? m.value = se : null),
                            tabList: e(s),
                            onTabChange: e(T)
                        }, null, 8, ["tab-id", "tabList", "onTabChange"])) : k("", !0), t("div", rf, [W[8] || (W[8] = t("p", null, "1.", -1)), U(" " + r(M.$t("depositWithdrawal.000017")), 1)]), t("div", uf, [W[9] || (W[9] = t("p", null, "2.", -1)), U(" " + r(M.$t("depositWithdrawal.000018")), 1)]), t("div", {
                            ref_key: "formEl",
                            ref: d,
                            class: X(e(l))
                        }, [t("div", null, [t("p", cf, [U(r(M.$t("label.name")), 1), W[10] || (W[10] = t("span", {
                            class: "sign"
                        }, "*", -1))]), t("div", df, [i(ze, {
                            type: "text",
                            placeholder: M.$t("hint.tipName"),
                            ref: "elObj.realNameEl",
                            maxlength: e(Xt),
                            modelValue: e(u).realName,
                            "onUpdate:modelValue": W[1] || (W[1] = se => e(u).realName = se),
                            "error-text": M.$t("hint.invalidName"),
                            class: "font-weight",
                            onInput: e(B),
                            readonly: e(g)
                        }, null, 8, ["placeholder", "maxlength", "modelValue", "error-text", "onInput", "readonly"])])]), e(o).length > 1 ? (c(), _("div", mf, [t("p", pf, [U(r(e(f)) + " ", 1), W[11] || (W[11] = t("span", {
                            class: "sign"
                        }, "*", -1))]), t("div", ff, [i(lf, {
                            "select-list": e(o),
                            placeholder: M.$t("hint.tipBank"),
                            modelValue: e(u).code,
                            "onUpdate:modelValue": W[2] || (W[2] = se => e(u).code = se)
                        }, null, 8, ["select-list", "placeholder", "modelValue"])])])) : k("", !0), e(p) === "BANK" && !e(j) ? (c(), _("div", hf, [t("p", vf, [U(r(e(f)) + " " + r(M.$t("label.account")), 1), W[12] || (W[12] = t("span", {
                            class: "sign"
                        }, "*", -1))]), t("div", bf, [i(ze, {
                            type: e(Q).type,
                            placeholder: M.$t("hint.placeholderBank"),
                            "error-text": M.$t("hint.invalidBank"),
                            modelValue: e(u).BANKACCOUNT,
                            "onUpdate:modelValue": W[3] || (W[3] = se => e(u).BANKACCOUNT = se),
                            ref: "elObj.BANKACCOUNTEl",
                            class: "font-weight",
                            minlength: e(Q).minLen,
                            maxlength: e(Q).maxLen,
                            hideCurrency: !0,
                            onInput: e(N)
                        }, null, 8, ["type", "placeholder", "error-text", "modelValue", "minlength", "maxlength", "onInput"])])])) : k("", !0), e(j) ? (c(), _(ae, {
                            key: 2
                        }, [t("div", gf, [t("p", yf, [U(r(M.$t("label.speiAccount")), 1), W[13] || (W[13] = t("span", {
                            class: "sign"
                        }, "*", -1))]), t("div", _f, [i(e(ni), {
                            value: e(V),
                            interface: "action-sheet",
                            "interface-options": {
                                cssClass: "mx-type-sheet"
                            },
                            placeholder: M.$t("label.speiAccount"),
                            onIonChange: W[4] || (W[4] = se => e(D)(se.detail.value))
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(O), se => (c(), S(e(si), {
                                key: se.value,
                                value: se.value
                            }, {
                                default: b(() => [U(r(se.label), 1)]),
                                _: 2
                            }, 1032, ["value"]))), 128))]),
                            _: 1
                        }, 8, ["value", "placeholder"]), i(e(ne), {
                            class: "mx-arrow",
                            src: "/first/svg/assets/arrow.svg"
                        })])]), t("div", wf, [t("p", Cf, [U(r(e(x).label), 1), W[14] || (W[14] = t("span", {
                            class: "sign"
                        }, "*", -1))]), t("div", $f, [(c(), S(ze, {
                            key: e(V),
                            type: e(x).inputType,
                            modelValue: e(u)[e(V)],
                            "onUpdate:modelValue": W[5] || (W[5] = se => e(u)[e(V)] = se),
                            placeholder: e(x).placeholder,
                            "error-text": e(x).errorText,
                            minlength: e(x).minLen,
                            maxlength: e(x).maxLen,
                            ref: se => e(R)(se, e(V)),
                            hideCurrency: !0,
                            class: "font-weight"
                        }, null, 8, ["type", "modelValue", "placeholder", "error-text", "minlength", "maxlength"]))])])], 64)) : k("", !0), (ie = e(A)) != null && ie.isShow ? (c(), _("div", If, [t("p", Tf, [U(r(e(A).label), 1), W[15] || (W[15] = t("span", {
                            class: "sign"
                        }, "*", -1))]), t("div", Af, [i(ze, jt({
                            modelValue: e(u)[e(A).key],
                            "onUpdate:modelValue": W[6] || (W[6] = se => e(u)[e(A).key] = se),
                            ref: se => e(R)(se, e(A).key),
                            class: "font-weight"
                        }, {
                            type: e(A).type,
                            placeholder: e(A).placeholder,
                            "error-text": e(A).errorText,
                            readonly: e(A).readonly,
                            ...e(A).maxLen != null ? {
                                maxlength: e(A).maxLen
                            } : {},
                            ...e(A).minLen != null ? {
                                minlength: e(A).minLen
                            } : {}
                        }), null, 16, ["modelValue"])])])) : k("", !0), e(C) === "PK" ? (c(), _("div", kf, [t("p", Sf, [U(r(M.$t("label.cnic")), 1), W[16] || (W[16] = t("span", {
                            class: "sign"
                        }, "*", -1))]), t("div", Lf, [i(ze, {
                            type: "cnic",
                            minlength: 13,
                            maxlength: 13,
                            placeholder: M.$t("hint.tipCNIC"),
                            "error-text": M.$t("hint.invalidCNIC"),
                            modelValue: e(u).idCard,
                            "onUpdate:modelValue": W[7] || (W[7] = se => e(u).idCard = se),
                            ref: se => e(R)(se, "idCard"),
                            readonly: e(w),
                            hideIcon: !0,
                            hideCurrency: !0,
                            class: "font-weight"
                        }, null, 8, ["placeholder", "error-text", "modelValue", "readonly"])])])) : k("", !0)], 2)]
                    }),
                    _: 1
                }), i(Pa, {
                    disabled: !e(n),
                    ref_key: "footEl",
                    ref: v,
                    isHasBottomTab: !1,
                    btnText: e(L)("viewsAssets.addAccount"),
                    onSubmitForm: e($)
                }, null, 8, ["disabled", "btnText", "onSubmitForm"])]),
                _: 1
            }))
        }
    }),
    Nf = Y(xf, [
        ["__scopeId", "data-v-313e278d"]
    ]),
    g1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Nf
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Pf = {
        class: "flex-between audit-header"
    },
    Rf = {
        class: "border-[0.0625rem] border-[--report-select-item-border-color] rounded-[0.375rem] overflow-hidden flex items-center h-[2rem]"
    },
    Ef = {
        class: "text"
    },
    Of = {
        key: 0,
        class: "flex flex-col items-center justify-center"
    },
    Vf = {
        class: "w-[7.5rem] h-[7.5rem] mt-[8.5rem]"
    },
    Mf = ["onClick"],
    Bf = {
        class: "flex-between top"
    },
    Df = {
        class: "flex-between bottom"
    },
    Hf = {
        class: "flex-1"
    },
    Wf = q({
        __name: "Audit",
        setup(a) {
            const {
                flowTypeIndex: l,
                sumValues: s,
                loading: o,
                recordList: u,
                detailHandle: n,
                handleRefresh: d
            } = Xn(), {
                t: m
            } = it(), f = ["".concat(m("main.all")), "".concat(m("option.recharge")), "".concat(m("option.activity")), "".concat(m("viewsAssets.systemAudit"))].map((p, v) => ({
                id: v,
                name: p
            }));
            return (p, v) => (c(), _(ae, null, [t("div", Pf, [t("div", Rf, [i(Nn, {
                selectList: e(f),
                modelValue: e(l),
                "onUpdate:modelValue": v[0] || (v[0] = h => te(l) ? l.value = h : null)
            }, null, 8, ["selectList", "modelValue"])]), t("p", Ef, [U(r(p.$t("viewsAssets.pendingAuditAmount")) + ": ", 1), i(He, {
                class: "currency"
            }, {
                default: b(() => [U(r(e(ue)(e(s))), 1)]),
                _: 1
            })])]), i(e(ta), {
                slot: "fixed",
                "pull-factor": .5,
                "pull-min": 100,
                "pull-max": 200,
                onIonRefresh: v[1] || (v[1] = h => e(d)(h))
            }, {
                default: b(() => [i(e(ea))]),
                _: 1
            }), !e(o) && !e(u).length ? (c(), _("div", Of, [t("div", Vf, [i(va)])])) : k("", !0), (c(!0), _(ae, null, fe(e(u), h => (c(), _("div", {
                class: "record-wrap",
                onClick: y => e(n)(h),
                key: h.orderNo
            }, [t("div", Bf, [t("p", null, r(e(Xa)(h.flowType)), 1), i(He, null, {
                default: b(() => [U(r(e(ue)(h.unfinished)), 1)]),
                _: 2
            }, 1024)]), t("div", Df, [t("p", Hf, r(h.createTime), 1), t("span", {
                style: yt({
                    color: "var(".concat(e(Pn)(h.status), ")")
                })
            }, r(e(Za)(h.status)), 5)])], 8, Mf))), 128))], 64))
        }
    }),
    Uf = Y(Wf, [
        ["__scopeId", "data-v-6b98a2ef"]
    ]),
    Ff = q({
        __name: "index",
        setup(a) {
            const {
                tabValue: l,
                tabList: s,
                isHideAuditRecords: o
            } = Jn();
            return (u, n) => (c(), S(e(Pe), null, {
                default: b(() => [e(o) ? (c(), S(Je, {
                    key: 0,
                    title: u.$t("viewsAssets.withdrawalRecord")
                }, null, 8, ["title"])) : (c(), S(e(Pt), {
                    key: 1,
                    class: X(["ion-no-border", e(ma)()])
                }, {
                    default: b(() => [i(e(ft), {
                        mode: "ios"
                    }, {
                        default: b(() => [i(Wt), i(e(Tt), {
                            mode: "md",
                            modelValue: e(l),
                            "onUpdate:modelValue": n[0] || (n[0] = d => te(l) ? l.value = d : null)
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(s), d => (c(), S(e(It), {
                                class: "btn-center",
                                value: d.value
                            }, {
                                default: b(() => [i(e(st), {
                                    class: X(e(l) == d.value ? "active" : "inactive")
                                }, {
                                    default: b(() => [U(r(u.$t(d.text)), 1)]),
                                    _: 2
                                }, 1032, ["class"])]),
                                _: 2
                            }, 1032, ["value"]))), 256))]),
                            _: 1
                        }, 8, ["modelValue"])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["class"])), i(e(ce), {
                    class: "first-content"
                }, {
                    default: b(() => [(c(), S(Ea(e(l) == e(at).WITHDRAW_AUDIT ? Uf : So)))]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    jf = Y(Ff, [
        ["__scopeId", "data-v-ffe23478"]
    ]),
    y1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jf
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Gf = {
        class: "record-wrap"
    },
    zf = {
        class: "record-item flex-between"
    },
    qf = {
        class: "record-item flex-between"
    },
    Kf = {
        class: "record-item flex-between"
    },
    Yf = {
        class: "record-item flex-between"
    },
    Qf = {
        class: "record-item flex-between"
    },
    Jf = {
        class: "record-item flex-between"
    },
    Xf = {
        class: "record-item flex-between"
    },
    Zf = {
        class: "record-item flex-between"
    },
    eh = {
        key: 0,
        class: "record-item flex-between"
    },
    th = {
        class: "record-item flex-between"
    },
    ah = {
        class: "record-item flex-between"
    },
    nh = q({
        __name: "index",
        setup(a) {
            const {
                auditStateColorFirst: l,
                showLimitGame: s,
                auditDetails: o,
                goGame: u
            } = Zn();
            return (n, d) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    title: n.$t("viewsAssets.auditDetails")
                }, null, 8, ["title"]), i(e(ce), {
                    class: "first-content",
                    scrollY: !0
                }, {
                    default: b(() => [t("div", Gf, [t("div", zf, [t("span", null, r(n.$t("viewsAssets.transactionType")), 1), t("span", null, r(e(o).tradeType), 1)]), t("div", qf, [t("span", null, r(n.$t("activity.activityName")), 1), t("span", null, r(e(o).activityName), 1)]), t("div", Kf, [t("span", null, r(n.$t("viewsAssets.auditStatus")), 1), t("span", {
                        style: yt({
                            color: "var(".concat(e(l), ")")
                        })
                    }, r(e(o).auditStatus), 5)]), t("div", Yf, [t("span", null, r(n.$t("viewsAssets.transactionAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).tradeAmount)), 1)]),
                        _: 1
                    })]), t("div", Qf, [t("span", null, r(n.$t("viewsAssets.auditMultiplier")), 1), t("span", null, r(e(o).auditMultiple), 1)]), t("div", Jf, [t("span", null, r(n.$t("viewsAssets.auditAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).auditAmount)), 1)]),
                        _: 1
                    })]), t("div", Xf, [t("span", null, r(n.$t("viewsAssets.unauditedAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).unAuditAmount)), 1)]),
                        _: 1
                    })]), t("div", Zf, [t("span", null, r(n.$t("viewsAssets.auditedAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).auditedAmount)), 1)]),
                        _: 1
                    })]), e(s) ? (c(), _("div", eh, [t("span", null, r(n.$t("viewsAssets.gameRestrictions")), 1), t("button", {
                        class: "link",
                        onClick: d[0] || (d[0] = (...m) => e(u) && e(u)(...m))
                    }, r(n.$t("viewsAssets.goNow")), 1)])) : k("", !0), t("div", th, [t("span", null, r(n.$t("viewsAssets.createTime")), 1), t("span", null, r(e(o).createTime), 1)]), t("div", ah, [t("span", null, r(n.$t("viewsAssets.completionTime")), 1), t("span", null, r(e(o).finishTime), 1)])])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    sh = Y(nh, [
        ["__scopeId", "data-v-3665b2f3"]
    ]),
    _1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: sh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    oh = {
        class: "flex h-full"
    },
    lh = {
        class: "w-full px-1"
    },
    ih = {
        key: 0,
        class: "flex flex-col items-center justify-center"
    },
    rh = q({
        __name: "index",
        setup(a) {
            const {
                tabValue: l,
                tabs: s,
                sideValue: o,
                segmentList: u,
                loadMore: n,
                gameList: d,
                loading: m,
                infiniteRef: f,
                isHall: p,
                gameHandle: v,
                favoriteHandle: h,
                ionInfinite: y,
                tabChange: g,
                sideChange: w
            } = es();
            return (C, L) => {
                const $ = Js("ion-icon");
                return c(), S(e(Pe), null, {
                    default: b(() => [i(e(Pt), {
                        class: X(["ion-no-border", e(ma)()])
                    }, {
                        default: b(() => [i(e(ft), {
                            mode: "ios",
                            class: "top-header"
                        }, {
                            default: b(() => [i(Wt), i(e(Gt), null, {
                                default: b(() => [U(r(C.$t("viewsAssets.designatedGame")), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }), i(e(ft), {
                            class: "toolbar-search"
                        }, {
                            default: b(() => [i(e(Tt), {
                                mode: "ios",
                                scrollable: "",
                                modelValue: e(l),
                                "onUpdate:modelValue": L[0] || (L[0] = T => te(l) ? l.value = T : null),
                                onIonChange: e(g)
                            }, {
                                default: b(() => [(c(!0), _(ae, null, fe(e(s), T => (c(), S(e(It), {
                                    value: T,
                                    key: T
                                }, {
                                    default: b(() => [i(e(pa), {
                                        class: "w-9",
                                        src: "/icons/sort/".concat(T, "_on.png")
                                    }, null, 8, ["src"]), i(e(st), {
                                        class: X(["text-xs"])
                                    }, {
                                        default: b(() => [U(r(C.$t("sort.".concat(T))), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1032, ["value"]))), 128))]),
                                _: 1
                            }, 8, ["modelValue", "onIonChange"])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["class"]), i(e(ce), {
                        id: "content",
                        class: X(e(ma)())
                    }, {
                        default: b(() => [L[2] || (L[2] = t("div", {
                            class: "mx-[.625rem] my-4 line"
                        }, null, -1)), t("div", oh, [e(u).length ? (c(), S(e(ce), {
                            key: 0,
                            class: "side"
                        }, {
                            default: b(() => [i(e(Tt), {
                                class: "flex flex-col",
                                ref: "segment",
                                mode: "ios",
                                modelValue: e(o),
                                "onUpdate:modelValue": L[1] || (L[1] = T => te(o) ? o.value = T : null),
                                disabled: e(m),
                                onIonChange: e(w)
                            }, {
                                default: b(() => [(c(!0), _(ae, null, fe(e(u), T => (c(), S(e(It), {
                                    value: T.id
                                }, {
                                    default: b(() => [i($, {
                                        style: {
                                            "font-size": "2.375rem"
                                        },
                                        src: T.logo
                                    }, null, 8, ["src"]), t("div", lh, [i(e(st), {
                                        class: "text-sm text-wrap",
                                        style: yt("color:".concat(e(o) == T.id ? "" : "#9BA7BE"))
                                    }, {
                                        default: b(() => [U(r(T.name), 1)]),
                                        _: 2
                                    }, 1032, ["style"])])]),
                                    _: 2
                                }, 1032, ["value"]))), 256))]),
                                _: 1
                            }, 8, ["modelValue", "disabled", "onIonChange"])]),
                            _: 1
                        })) : k("", !0), i(e(ce), {
                            id: "main",
                            scrollY: !1
                        }, {
                            default: b(() => [i(e(ce), null, {
                                default: b(() => [i(e(Un), null, {
                                    default: b(() => [i(e(Fn), null, {
                                        default: b(() => [!e(m) && !e(d).length ? (c(), _("div", ih, [i(va)])) : k("", !0), i(e(nn), null, {
                                            default: b(() => [e(p) ? (c(!0), _(ae, {
                                                key: 0
                                            }, fe(e(d), T => (c(), S(On, {
                                                class: "aspect-ratio-card",
                                                key: T.id,
                                                game: T,
                                                platform: {
                                                    gameType: T.gameType
                                                },
                                                onClick: () => e(Vn)({ ...T,
                                                    gameType: T.gameType,
                                                    platformId: T.id
                                                }, !0)
                                            }, null, 8, ["game", "platform", "onClick"]))), 128)) : (c(!0), _(ae, {
                                                key: 1
                                            }, fe(e(d), T => (c(), S(e(sn), {
                                                size: "4"
                                            }, {
                                                default: b(() => [(c(), S(Mn, {
                                                    key: T.id,
                                                    class: "game-item",
                                                    "is-own-game": !!T.externalGameId,
                                                    test: T == null ? void 0 : T.test,
                                                    status: T.status,
                                                    "is-logo": !1,
                                                    gameInfo: {
                                                        logoFlag: T.logoFlag
                                                    },
                                                    "is-favorite": (T == null ? void 0 : T.isFavorite) || !1,
                                                    onClick: B => e(v)(T),
                                                    onFavoriteHandle: () => e(h)(T)
                                                }, jn({
                                                    _: 2
                                                }, [!T.logo && T.externalGameId ? {
                                                    name: "gameName",
                                                    fn: b(() => [t("span", null, r(T.name), 1)]),
                                                    key: "0"
                                                } : void 0]), 1032, ["is-own-game", "test", "status", "gameInfo", "is-favorite", "onClick", "onFavoriteHandle"]))]),
                                                _: 2
                                            }, 1024))), 256))]),
                                            _: 1
                                        })]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), i(e(Oa), {
                                    ref_key: "infiniteRef",
                                    ref: f,
                                    onIonInfinite: e(y),
                                    threshold: "5px"
                                }, {
                                    default: b(() => [i(e(Va), {
                                        "loading-text": e(n) == "noMore" ? C.$t("label.noMore") : "",
                                        "loading-spinner": e(n) == "more" ? "bubbles" : null
                                    }, null, 8, ["loading-text", "loading-spinner"])]),
                                    _: 1
                                }, 8, ["onIonInfinite"])]),
                                _: 1
                            })]),
                            _: 1
                        })])]),
                        _: 1
                    }, 8, ["class"])]),
                    _: 1
                })
            }
        }
    }),
    uh = Y(rh, [
        ["__scopeId", "data-v-edcd5c66"]
    ]),
    w1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: uh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ch = {
        class: "text-[.875rem] title"
    },
    dh = {
        class: "text-xs label"
    },
    mh = {
        class: "text-xs label"
    },
    ph = {
        class: "text-[.625rem] mb-7 label"
    },
    fh = q({
        __name: "index",
        setup(a) {
            const {
                loaded: l,
                btnLoading: s,
                passwordHandle: o,
                confirmPasswordHandle: u,
                confirmHandle: n
            } = ts();
            return (d, m) => e(l) ? (c(), S(e(Pe), {
                key: 0,
                class: "ion-no-border"
            }, {
                default: b(() => [i(Je, {
                    title: d.$t("main.withdraw") + " " + d.$t("label.password")
                }, null, 8, ["title"]), i(e(ce), {
                    class: X(["ion-padding", "w-password-wrap"])
                }, {
                    default: b(() => [t("p", ch, r(d.$t("main.set") + " " + d.$t("main.withdraw") + " " + d.$t("label.password")), 1), t("h6", dh, r(d.$t("main.new") + " " + d.$t("main.withdraw") + " " + d.$t("label.password")), 1), i(Vt, {
                        onInput: e(o),
                        focus: ""
                    }, null, 8, ["onInput"]), t("h6", mh, r(d.$t("main.confirm") + " " + d.$t("main.new") + " " + d.$t("label.password")), 1), i(Vt, {
                        onInput: e(u)
                    }, null, 8, ["onInput"]), t("h6", ph, r(d.$t("tip.firstWithdrawal")), 1), i(Mt, {
                        onClick: e(n),
                        suffixLoading: e(s)
                    }, {
                        default: b(() => [U(r(d.$t("label.withdrawNow")), 1)]),
                        _: 1
                    }, 8, ["onClick", "suffixLoading"])]),
                    _: 1
                })]),
                _: 1
            })) : k("", !0)
        }
    }),
    hh = Y(fh, [
        ["__scopeId", "data-v-7c0c2f48"]
    ]),
    C1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vh = {
        class: "mt-[3.9375rem] flex items-center flex-col"
    },
    bh = {
        class: "success-wrap"
    },
    gh = {
        class: "text-[1rem] leading-[1.375rem] py-[0.9375rem] title"
    },
    yh = {
        class: "text-[0.875rem] leading-[1.375rem] label"
    },
    _h = {
        class: "flex items-center justify-center space-x-[1.125rem] mt-10"
    },
    wh = q({
        __name: "index",
        setup(a) {
            const l = Bn(),
                {
                    goToWithdrawPage: s
                } = as();
            return (o, u) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    title: o.$t("viewsAssets.setPasswordDone1")
                }, null, 8, ["title"]), i(e(ce), {
                    class: X(["ion-padding", "password-c"])
                }, {
                    default: b(() => [t("div", vh, [t("div", bh, [i(e(ne), {
                        class: "text-[2rem] mt-3",
                        src: "/first/svg/assets/success.svg"
                    })]), t("p", gh, r(o.$t("viewsAssets.setPasswordDone2")), 1), t("p", yh, r(o.$t("viewsAssets.setPasswordDone3")), 1)]), t("div", _h, [i(Mt, {
                        onClick: u[0] || (u[0] = n => e(Zt)()),
                        class: "btnBase go-home",
                        background: "var(--color-button-bg-gray)",
                        style: yt(e(l)),
                        classType: "style-2"
                    }, {
                        default: b(() => [U(r(o.$t("viewsAssets.setPasswordDone4")), 1)]),
                        _: 1
                    }, 8, ["style"]), i(Mt, {
                        onClick: e(s),
                        class: "btnBase"
                    }, {
                        default: b(() => [U(r(o.$t("viewsAssets.setPasswordDone5")), 1)]),
                        _: 1
                    }, 8, ["onClick"])])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Ch = Y(wh, [
        ["__scopeId", "data-v-80b60011"]
    ]),
    $1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ch
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $h = {
        key: 0,
        class: "tag"
    },
    Ih = q({
        __name: "TabDefault",
        props: Ne({
            tabList: {},
            loading: {
                type: Boolean
            },
            activeBgColor: {}
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            We();
            const s = l,
                o = rt(a, "tabId"),
                u = n => {
                    const d = n.detail.value;
                    d !== o.value && (s("tabChange", d), s("update:tabId", d))
                };
            return (n, d) => (c(), S(e(Tt), {
                ref: "segment",
                class: "tab-list",
                mode: "md",
                modelValue: o.value,
                "onUpdate:modelValue": d[0] || (d[0] = m => o.value = m),
                disabled: a.loading,
                onIonChange: u
            }, {
                default: b(() => [(c(!0), _(ae, null, fe(a.tabList, m => (c(), S(e(It), {
                    value: m.id,
                    key: m.id
                }, {
                    default: b(() => [U(r(m.name) + " ", 1), m.tagValue ? (c(), _("p", $h, r(m.tagValue), 1)) : k("", !0)]),
                    _: 2
                }, 1032, ["value"]))), 128))]),
                _: 1
            }, 8, ["modelValue", "disabled"]))
        }
    }),
    Ro = Y(Ih, [
        ["__scopeId", "data-v-66607be1"]
    ]),
    I1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ro
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Th = ["src"],
    Ah = {
        key: 1,
        class: "flex justify-center items-center h-full"
    },
    kh = q({
        __name: "index",
        setup(a) {
            ga(E => ({
                c26e6816: e(vt)
            }));
            const {
                isShowThirdParty: l,
                isBDRegion: s,
                isHasBottomTab: o,
                showCloseBtn: u,
                channelLoading: n,
                isParticipate: d,
                thirdUrl: m,
                tabId: f,
                tabList: p,
                description: v,
                subTabList: h,
                subTabId: y,
                amountInput: g,
                placeholder: w,
                maxAmount: C,
                minAmount: L,
                readOnly: $,
                channelList: T,
                channelId: B,
                amountList: N,
                isHasBonus: A,
                activityIsOpen: R,
                amountOfGift: j,
                rateOfGift: V,
                bannerUrl: O,
                merchantCy: x,
                withdrawFlowStr: D,
                limitPlatformList: Z,
                btnLoading: Q,
                iframeLoaded: P,
                isOpenOrderModal: M,
                isQRCode: W,
                QRCodeInfo: ie,
                isSelectedChannel: se,
                isWeightCycle: ke,
                isVirtualCurrency: Re,
                bankList: Ke,
                bankCode: Ue,
                subTabChange: _e,
                iframeCloseHandle: ge,
                recordHandle: we,
                mainTabChange: Ie,
                amountInputChange: Me,
                amountHandle: Xe,
                handleRechargeActivity: H,
                bannerHandle: J,
                iframeLoadHandle: Ce,
                submitForm: re,
                payChannelChange: le,
                bankChange: Ee,
                transferSuccessCb: ve,
                isDefaultBanner: Se,
                btnInfo: me,
                hiddenActivitySwitch: Fe,
                customBack: $e,
                isShowWeight: _t,
                dismissWeight: ut,
                isOnlyPayTypeSub: ct,
                subTabListAll: ht,
                firstRechargeRewardLevelsList: Rt,
                payConfigData: kt
            } = lo(), {
                contentPaddingBottom: vt
            } = ho(o);
            fo({
                channelLoading: n,
                isParticipate: d,
                isVirtualCurrency: Re,
                isHasBonus: A,
                readOnly: $,
                subTabList: h,
                subTabId: y,
                channelList: T,
                channelId: B,
                bankList: Ke,
                bankCode: Ue,
                amountInput: g,
                amountList: N,
                placeholder: w,
                maxAmount: C,
                minAmount: L,
                amountOfGift: j,
                limitPlatformList: Z,
                withdrawFlowStr: D,
                description: v,
                merchantCy: x,
                distance: vt,
                isShowWeight: _t,
                isOnlyPayTypeSub: ct,
                subTabListAll: ht,
                payConfigData: kt
            }, {
                subTabChange: _e,
                payChannelChange: le,
                bankChange: Ee,
                amountHandle: Xe,
                amountInputChange: Me
            });
            const Et = co(ke, se),
                {
                    noticeIsOpen: G,
                    noticeDidDismiss: ee
                } = bo(l);
            return (E, z) => (c(), S(e(Pe), null, {
                default: b(() => [i(e(Pt), {
                    class: "ion-no-border"
                }, {
                    default: b(() => [i(e(ft), {
                        mode: "ios"
                    }, {
                        default: b(() => [e(l) && e(o) ? (c(), S(e(Jt), {
                            key: 0,
                            class: "finish",
                            onClick: e(ge),
                            fill: "clear"
                        }, {
                            default: b(() => [U(r(E.$t("main.finish")), 1)]),
                            _: 1
                        }, 8, ["onClick"])) : k("", !0), e(u) ? (c(), S(e(ne), {
                            key: 1,
                            class: "recharge-back-icon",
                            slot: "start",
                            onClick: e($e),
                            src: "/svg/arrow_left.svg"
                        }, null, 8, ["onClick"])) : k("", !0), i(e(Gt), {
                            class: "text-lg"
                        }, {
                            default: b(() => [U(r(E.$t("main.entrar")), 1)]),
                            _: 1
                        }), i(e(Xs), {
                            slot: "primary"
                        }, {
                            default: b(() => [i(e(Jt), {
                                onClick: e(we)
                            }, {
                                default: b(() => [i(e(ne), {
                                    slot: "icon-only",
                                    class: "h-5 record",
                                    src: "/svg/record.svg"
                                })]),
                                _: 1
                            }, 8, ["onClick"])]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), e(l) ? k("", !0) : (c(), S(e(ce), {
                    key: 0,
                    class: "recharge-content",
                    id: "recharge-content"
                }, {
                    default: b(() => [e(ct) ? k("", !0) : (c(), S(Ro, {
                        key: 0,
                        "tab-id": e(f),
                        "onUpdate:tabId": z[0] || (z[0] = pe => te(f) ? f.value = pe : null),
                        loading: e(n),
                        tabList: e(p),
                        onTabChange: e(Ie)
                    }, null, 8, ["tab-id", "loading", "tabList", "onTabChange"])), (c(), S(Ea(e(Et)))), Bt(i(ro, {
                        merchantCy: e(x),
                        bannerUrl: e(O),
                        amountOfGift: e(j),
                        rateOfGift: e(V),
                        isDefaultBanner: e(Se),
                        onClickHandle: e(J)
                    }, null, 8, ["merchantCy", "bannerUrl", "amountOfGift", "rateOfGift", "isDefaultBanner", "onClickHandle"]), [
                        [Dt, e(d)]
                    ]), e(R) && !e(Fe) && !e(Rt).length ? (c(), S(uo, {
                        key: 1,
                        isParticipate: e(d),
                        "onUpdate:isParticipate": z[1] || (z[1] = pe => te(d) ? d.value = pe : null),
                        onHandleSwitch: e(H)
                    }, null, 8, ["isParticipate", "onHandleSwitch"])) : k("", !0), i(Us, {
                        btnText: e(me).btnText,
                        loading: e(Q),
                        disabled: e(me).disabled,
                        onSubmit: e(re)
                    }, null, 8, ["btnText", "loading", "disabled", "onSubmit"])]),
                    _: 1
                })), e(W) ? (c(), S(e(ce), {
                    key: 1,
                    class: "recharge-qr-code"
                }, {
                    default: b(() => [i(on, en(tn({ ...e(ie),
                        merchantCy: e(x) || ""
                    })), null, 16)]),
                    _: 1
                })) : k("", !0), e(s) ? k("", !0) : (c(), S(e(ce), {
                    key: 2,
                    id: "iframe",
                    class: X([{
                        hidden: !e(m) || e(W)
                    }])
                }, {
                    default: b(() => [e(m) ? Bt((c(), _("iframe", {
                        key: 0,
                        class: "w-full h-full",
                        src: e(m),
                        onLoad: z[2] || (z[2] = (...pe) => e(Ce) && e(Ce)(...pe)),
                        onError: z[3] || (z[3] = pe => Q.value = !1),
                        frameborder: "0"
                    }, null, 40, Th)), [
                        [Dt, e(P)]
                    ]) : k("", !0), e(P) ? k("", !0) : (c(), _("div", Ah, [i(e(Ft), {
                        class: "w-20 h-20",
                        name: "dots",
                        color: "light"
                    })]))]),
                    _: 1
                }, 8, ["class"])), e(M) && (E.$route.path === "/main/entrar" || E.$route.path === "/recharge/apply") ? (c(), S(ln, {
                    key: 3,
                    isOpen: e(M),
                    merchantCy: e(x),
                    isVirtualCurrency: e(Re),
                    onPaySuccessCb: e(ve)
                }, null, 8, ["isOpen", "merchantCy", "isVirtualCurrency", "onPaySuccessCb"])) : k("", !0), e(_t) ? (c(), S(zn, {
                    key: 4,
                    merchantCy: e(x),
                    distance: e(vt),
                    amountInput: e(g),
                    isHasBonus: e(A),
                    amountOfGift: e(j),
                    onDismissWeight: e(ut),
                    tabList: e(h),
                    onTabChange: e(_e),
                    "tab-id": e(y),
                    "onUpdate:tabId": z[4] || (z[4] = pe => te(y) ? y.value = pe : null),
                    onSubmitForm: e(re)
                }, null, 8, ["merchantCy", "distance", "amountInput", "isHasBonus", "amountOfGift", "onDismissWeight", "tabList", "onTabChange", "tab-id", "onSubmitForm"])) : k("", !0), i(vo, {
                    isOpen: e(G),
                    onDidDismiss: e(ee),
                    isShowThirdParty: e(l)
                }, null, 8, ["isOpen", "onDidDismiss", "isShowThirdParty"])]),
                _: 1
            }))
        }
    }),
    Sh = Y(kh, [
        ["__scopeId", "data-v-2dfa783a"]
    ]),
    T1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Sh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Lh = {
        class: "item"
    },
    xh = {
        class: "label"
    },
    Nh = {
        key: 1,
        class: "real-name leading-[2.875rem]"
    },
    Ph = {
        key: 0,
        class: "item"
    },
    Rh = {
        class: "label"
    },
    Eh = {
        class: "item"
    },
    Oh = {
        class: "label"
    },
    Vh = q({
        __name: "Default",
        props: {
            dynamicType: {},
            typeId: {}
        },
        setup(a, {
            expose: l
        }) {
            const s = a,
                {
                    formEl: o,
                    cpfEl: u,
                    realNameEl: n,
                    withdrawalAccountEL: d,
                    realName: m,
                    current: f,
                    cpf: p,
                    inputInfo: v,
                    accountInfo: h,
                    statusInfo: y,
                    theme: g,
                    REAL_NAME_LEN: w,
                    currentReadonly: C,
                    getFormValue: L,
                    handleInput: $,
                    valiDateAccount: T
                } = _o(s),
                B = F(() => s.dynamicType in v ? Object.values(y).every(Boolean) : y.cpfReadonly && y.nameReadonly),
                N = Sa(() => {
                    h[s.dynamicType] ? T(h[s.dynamicType], s.dynamicType) : A(d.value)
                }, 500),
                A = O => {
                    O && O.$el.classList.remove("ion-valid", "ion-invalid", "ion-touched")
                },
                R = O => {
                    O && O.$el.classList.add("ion-invalid", "ion-touched")
                },
                j = Sa(() => {
                    if (!p.value) {
                        A(u.value);
                        return
                    }
                    Wl("".concat(p.value)) ? A(u.value) : R(u.value)
                }, 500),
                V = () => {
                    var x;
                    if (B.value) return !0;
                    let O = (x = o.value) == null ? void 0 : x.querySelectorAll(".ion-invalid");
                    return O && O.length ? !1 : m.value ? f.value && !h[s.dynamicType] ? (xe("hint.".concat(f.value.errorText)), !1) : p.value ? !0 : (xe("hint.invalidCPF"), !1) : (xe("hint.invalidName"), !1)
                };
            return zt(() => {
                A(u.value), f.value && A(d.value)
            }), l({
                validate: V,
                getFormValue: L,
                statusInfo: y
            }), (O, x) => (c(), _("div", {
                class: X(["form-wrap", e(g)]),
                ref_key: "formEl",
                ref: o
            }, [t("div", Lh, [t("p", xh, r(O.$t("label.name")), 1), e(y).nameReadonly ? (c(), _("div", Nh, r(e(m)), 1)) : (c(), S(e(da), {
                key: 0,
                type: "text",
                placeholder: O.$t("hint.tipName"),
                ref_key: "realNameEl",
                ref: n,
                maxlength: e(w),
                "error-text": O.$t("hint.invalidName"),
                modelValue: e(m),
                "onUpdate:modelValue": x[0] || (x[0] = D => te(m) ? m.value = D : null),
                mode: "md",
                onIonInput: e($),
                readonly: e(y).nameReadonly,
                "clear-input": ""
            }, null, 8, ["placeholder", "maxlength", "error-text", "modelValue", "onIonInput", "readonly"]))]), e(f) ? (c(), _("div", Ph, [t("p", Rh, r(O.$t("label.".concat(e(f).label))), 1), i(e(da), jt({
                type: e(f).typeDefault,
                placeholder: O.$t("hint.".concat(e(f).placeholder)),
                ref_key: "withdrawalAccountEL",
                ref: d,
                modelValue: e(h)[a.dynamicType],
                "onUpdate:modelValue": x[1] || (x[1] = D => e(h)[a.dynamicType] = D),
                "error-text": O.$t("hint.".concat(e(f).errorText))
            }, e(f).rule, {
                onIonInput: e(N),
                "clear-input": "",
                readonly: e(C)
            }), null, 16, ["type", "placeholder", "modelValue", "error-text", "onIonInput", "readonly"])])) : k("", !0), t("div", Eh, [t("p", Oh, r(O.$t("label.cpf")), 1), i(e(da), {
                type: "tel",
                minlength: 11,
                maxlength: 11,
                ref_key: "cpfEl",
                ref: u,
                placeholder: O.$t("hint.tipCPF"),
                "error-text": O.$t("hint.invalidCPF"),
                modelValue: e(p),
                "onUpdate:modelValue": x[2] || (x[2] = D => te(p) ? p.value = D : null),
                readonly: e(y).cpfReadonly,
                hideCurrency: !0,
                onIonInput: e(j),
                "clear-input": ""
            }, null, 8, ["placeholder", "error-text", "modelValue", "readonly", "onIonInput"])])], 2))
        }
    }),
    Mh = Y(Vh, [
        ["__scopeId", "data-v-dd961242"]
    ]),
    Bh = {
        class: "mt-[0.75rem] mb-[1.5rem]"
    },
    Dh = {
        class: "label text-base mx-[10px] inline-flex items-center",
        slot: "label"
    },
    Hh = {
        key: 0,
        class: "flex items-center",
        slot: "end"
    },
    Wh = {
        class: "suffix"
    },
    Uh = {
        key: 0,
        class: "line h-[1px] mt-2.5"
    },
    Fh = {
        key: 1,
        class: "text-sm mt-1.5"
    },
    jh = {
        key: 2,
        class: "flex items-center mt-0 text-xs tips"
    },
    Gh = {
        class: "item-row"
    },
    zh = {
        key: 0,
        class: "flex items-center pr-[.625rem]",
        slot: "end"
    },
    qh = {
        class: "suffix"
    },
    Kh = ["innerHTML"],
    Yh = q({
        __name: "index",
        setup(a) {
            ga(re => ({
                v68e855a4: e(Ce)
            }));
            const {
                amountInput: l,
                rateValue: s,
                showCloseBtn: o,
                tabList: u,
                tabId: n,
                tabCode: d,
                merchantCy: m,
                balance: f,
                isDemo: p,
                prompt: v,
                betAmount: h,
                readonly: y,
                placeholder: g,
                amountList: w,
                isBindFirst: C,
                rechargeRatio: L,
                isVirtualCurrency: $,
                remind: T,
                assets: B,
                rateType: N,
                hintIndex: A,
                demoWithdraw: R,
                confirmModalVisible: j,
                subTabList: V,
                subTabId: O,
                receiveAmount: x,
                accountList: D,
                bindAccountMax: Z,
                btnText: Q,
                isHideAuditRecords: P,
                recordHandle: M,
                mainTabChange: W,
                amountInputChange: ie,
                amountHandle: se,
                subTabChange: ke,
                passwordHandle: Re,
                onWithdrawCreate: Ke,
                handleBtnClick: Ue,
                isTileDisplayMode: _e
            } = yo(), ge = qe(), we = F(() => {
                var re, le;
                return (le = (re = ge.tenantInfo) == null ? void 0 : re.currencyConfig) == null ? void 0 : le.suffixSymbol
            }), Ie = I(), Me = () => {
                Ie.value.$el.classList.add("ion-invalid", "ion-touched")
            }, Xe = () => {
                Ie.value.$el.classList.remove("ion-valid", "ion-invalid", "ion-touched")
            }, H = re => {
                const le = re.detail.value,
                    Ee = Number.isInteger(Number(le));
                if (console.log(Ee, "isInteger"), Ee) Xe();
                else {
                    Me();
                    return
                }
                ie(re)
            }, J = Ps(), Ce = F(() => "calc(".concat(J.tabBarHeight, "px + 1rem + env(safe-area-inset-bottom))"));
            return (re, le) => (c(), S(e(Pe), null, {
                default: b(() => {
                    var Ee;
                    return [i(e(Pt), {
                        class: "ion-no-border"
                    }, {
                        default: b(() => [i(e(ft), {
                            mode: "ios"
                        }, {
                            default: b(() => [e(o) ? (c(), S(Wt, {
                                key: 0
                            })) : k("", !0), i(e(Gt), {
                                class: "text-lg"
                            }, {
                                default: b(() => [U(r(re.$t("main.withdraw")), 1)]),
                                _: 1
                            }), i(e(Xs), {
                                slot: "primary"
                            }, {
                                default: b(() => [i(e(Jt), {
                                    onClick: le[0] || (le[0] = ve => e(M)(e(at).WITHDRAW_RECORD))
                                }, {
                                    default: b(() => [i(e(ne), {
                                        slot: "icon-only",
                                        class: "h-5",
                                        src: "/svg/record.svg"
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }), i(e(ce), {
                        class: "ion-padding"
                    }, {
                        default: b(() => [e(C) ? (c(), _(ae, {
                            key: 0
                        }, [i(To, {
                            betAmount: e(h),
                            balance: e(f),
                            isHideAuditRecords: e(P),
                            onRecordHandle: le[1] || (le[1] = ve => e(M)(e(at).WITHDRAW_AUDIT))
                        }, null, 8, ["betAmount", "balance", "isHideAuditRecords"]), t("div", Bh, [e(_e) ? (c(), S(Ao, {
                            key: 1,
                            title: re.$t("viewsAssets.WithdrawalChannels"),
                            tabList: e(u),
                            "tab-id": e(n),
                            "onUpdate:tabId": le[3] || (le[3] = ve => te(n) ? n.value = ve : null),
                            onTabChange: e(W)
                        }, null, 8, ["title", "tabList", "tab-id", "onTabChange"])) : (c(), S(Yt, {
                            key: 0,
                            tabList: e(u),
                            "tab-id": e(n),
                            "onUpdate:tabId": le[2] || (le[2] = ve => te(n) ? n.value = ve : null),
                            onTabChange: e(W),
                            type: "sub-tab",
                            isNew: !0
                        }, null, 8, ["tabList", "tab-id", "onTabChange"]))]), i(Qa, {
                            rechargeRatio: e(L),
                            isVirtualCurrency: e($),
                            amountInput: e(l),
                            merchantCy: e(m),
                            rateValue: e(s),
                            type: "withdraw"
                        }, {
                            amountBtn: b(() => [i(Ka, {
                                amountList: e(w),
                                isVirtualCurrency: e($),
                                amount: e(l),
                                onAmountHandle: e(se),
                                balance: e(f)
                            }, null, 8, ["amountList", "isVirtualCurrency", "amount", "onAmountHandle", "balance"])]),
                            amountInput: b(() => [i(e(da), {
                                modelValue: e(l),
                                "onUpdate:modelValue": le[4] || (le[4] = ve => te(l) ? l.value = ve : null),
                                readonly: e(y),
                                type: "number",
                                mode: "ios",
                                placeholder: e(g),
                                required: "",
                                clearInput: "",
                                onIonInput: H,
                                onKeydown: e(cs),
                                "error-text": re.$t("toast.0003"),
                                ref_key: "amountInputRef",
                                ref: Ie
                            }, {
                                default: b(() => [t("label", Dh, [i(Ya, null, {
                                    default: b(() => [U(r(e(m)), 1)]),
                                    _: 1
                                })]), e(we) ? (c(), _("div", Hh, [t("p", Wh, r(e(we)), 1)])) : k("", !0)]),
                                _: 1
                            }, 8, ["modelValue", "readonly", "placeholder", "onKeydown", "error-text"])]),
                            _: 1
                        }, 8, ["rechargeRatio", "isVirtualCurrency", "amountInput", "merchantCy", "rateValue"]), i(wo, {
                            accountList: e(D),
                            bindAccountMax: e(Z),
                            tabCode: e(d),
                            ref_key: "accountEl",
                            ref: qn
                        }, null, 8, ["accountList", "bindAccountMax", "tabCode"])], 64)) : (c(), _(ae, {
                            key: 1
                        }, [i(Co, {
                            merchantCy: e(m),
                            isHideAuditRecords: e(P),
                            betAmount: e(h),
                            balance: e(f),
                            isDemo: e(p),
                            prompt: e(v),
                            onRecordHandle: le[5] || (le[5] = ve => e(M)(e(at).WITHDRAW_AUDIT))
                        }, null, 8, ["merchantCy", "isHideAuditRecords", "betAmount", "balance", "isDemo", "prompt"]), i(Yt, {
                            tabList: e(u),
                            "tab-id": e(n),
                            "onUpdate:tabId": le[6] || (le[6] = ve => te(n) ? n.value = ve : null),
                            onTabChange: e(W),
                            type: "main-tab"
                        }, null, 8, ["tabList", "tab-id", "onTabChange"]), e(w).length > 0 ? (c(), _("div", Uh)) : k("", !0), e(w).length > 0 ? (c(), _("h6", Fh, r(re.$t("label.withdrawAmount")), 1)) : k("", !0), i(Ka, {
                            amountList: e(w),
                            isVirtualCurrency: e($),
                            amount: e(l),
                            onAmountHandle: e(se),
                            balance: e(f)
                        }, null, 8, ["amountList", "isVirtualCurrency", "amount", "onAmountHandle", "balance"]), e(l) ? (c(), _("h6", jh, [i(e(ne), {
                            class: "help text-base mr-0.5",
                            icon: e(oi)
                        }, null, 8, ["icon"]), t("span", null, r(re.$t("viewsAssets.withdrawalFee")) + " " + r(e(ue)(e(s), {
                            showSuffix: !0
                        })) + " " + r(re.$t("viewsAssets.handlingFee")), 1)])) : k("", !0), t("div", Gh, [i(e(da), {
                            modelValue: e(l),
                            "onUpdate:modelValue": le[7] || (le[7] = ve => te(l) ? l.value = ve : null),
                            readonly: e(y),
                            type: "number",
                            mode: "ios",
                            placeholder: e(g),
                            required: "",
                            clearInput: "",
                            onIonInput: H,
                            onKeydown: e(cs),
                            "error-text": re.$t("toast.0003"),
                            ref_key: "amountInputRef",
                            ref: Ie
                        }, {
                            default: b(() => [le[11] || (le[11] = t("label", {
                                class: "label text-base mx-[10px] inline-flex items-center",
                                slot: "label"
                            }, null, -1)), e(we) ? (c(), _("div", zh, [t("p", qh, r(e(we)), 1)])) : k("", !0)]),
                            _: 1
                        }, 8, ["modelValue", "readonly", "placeholder", "onKeydown", "error-text"])]), t("h6", {
                            class: "text-[.625rem]",
                            innerHTML: e(T)
                        }, null, 8, Kh), le[12] || (le[12] = t("div", {
                            class: "line h-[1px] mt-2.5"
                        }, null, -1)), i(Yt, {
                            title: re.$t("label.withdrawSubType"),
                            tabList: e(V),
                            "tab-id": e(O),
                            "onUpdate:tabId": le[8] || (le[8] = ve => te(O) ? O.value = ve : null),
                            onTabChange: e(ke),
                            type: "sub-tab"
                        }, null, 8, ["title", "tabList", "tab-id", "onTabChange"]), i(Mh, {
                            dynamicType: e($t),
                            ref_key: "formEl",
                            ref: qa,
                            typeId: e(n)
                        }, null, 8, ["dynamicType", "typeId"])], 64)), i(Us, {
                            btnText: e(Q),
                            onSubmit: e(Ue)
                        }, null, 8, ["btnText", "onSubmit"])]),
                        _: 1
                    }), i($o, {
                        visible: e(j),
                        "onUpdate:visible": le[9] || (le[9] = ve => te(j) ? j.value = ve : null),
                        merchantCy: e(m),
                        amountInput: e(l),
                        rateValue: e(s),
                        rateType: e(N),
                        receiveAmount: e(x),
                        passwordSwitch: (Ee = e(B)) == null ? void 0 : Ee.passwordSwitch,
                        onPasswordHandle: e(Re),
                        onOnWithdrawCreate: e(Ke)
                    }, null, 8, ["visible", "merchantCy", "amountInput", "rateValue", "rateType", "receiveAmount", "passwordSwitch", "onPasswordHandle", "onOnWithdrawCreate"]), i(Io, {
                        visible: e(R),
                        "onUpdate:visible": le[10] || (le[10] = ve => te(R) ? R.value = ve : null),
                        hintIndex: e(A)
                    }, null, 8, ["visible", "hintIndex"])]
                }),
                _: 1
            }))
        }
    }),
    Qh = Y(Yh, [
        ["__scopeId", "data-v-22eb4670"]
    ]),
    A1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Jh = {
        class: "bottom"
    },
    Xh = {
        class: "text"
    },
    Zh = {
        key: 0,
        class: "game"
    },
    ev = q({
        __name: "index",
        setup(a) {
            const {
                tabValue: l,
                tabs: s,
                sideValue: o,
                segmentList: u,
                loadMore: n,
                gameList: d,
                loading: m,
                infiniteRef: f,
                isHall: p,
                gameHandle: v,
                favoriteHandle: h,
                ionInfinite: y,
                tabChange: g,
                sideChange: w
            } = es();
            return (C, L) => (c(), S(e(Pe), null, {
                default: b(() => [i(e(Pt), null, {
                    default: b(() => [i(e(ft), {
                        mode: "ios"
                    }, {
                        default: b(() => [i(Wt), i(e(Gt), null, {
                            default: b(() => [U(r(C.$t("viewsAssets.designatedGame")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }), i(e(ft), {
                        class: "toolbar-search"
                    }, {
                        default: b(() => [i(e(Tt), {
                            mode: "ios",
                            scrollable: "",
                            modelValue: e(l),
                            "onUpdate:modelValue": L[0] || (L[0] = $ => te(l) ? l.value = $ : null),
                            onIonChange: e(g),
                            class: "w-full"
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(s), $ => (c(), S(e(It), {
                                value: $,
                                key: $
                            }, {
                                default: b(() => [i(e(pa), {
                                    src: "/icons/sort/".concat($, "_on.png")
                                }, null, 8, ["src"]), i(e(st), {
                                    class: X(e(l) == $ ? "selected" : "unselected")
                                }, {
                                    default: b(() => [U(r(C.$t("sort.".concat($))), 1)]),
                                    _: 2
                                }, 1032, ["class"])]),
                                _: 2
                            }, 1032, ["value"]))), 128))]),
                            _: 1
                        }, 8, ["modelValue", "onIonChange"])]),
                        _: 1
                    })]),
                    _: 1
                }), i(e(ce), {
                    id: "content"
                }, {
                    default: b(() => [L[2] || (L[2] = t("div", {
                        class: "line"
                    }, null, -1)), t("div", Jh, [e(u).length ? (c(), S(e(ce), {
                        key: 0,
                        class: "side"
                    }, {
                        default: b(() => [i(e(Tt), {
                            ref: "segment",
                            mode: "ios",
                            modelValue: e(o),
                            "onUpdate:modelValue": L[1] || (L[1] = $ => te(o) ? o.value = $ : null),
                            disabled: e(m),
                            onIonChange: e(w)
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(u), $ => (c(), S(e(It), {
                                value: $.id
                            }, {
                                default: b(() => [i(e(ne), {
                                    class: X([e(o) == $.id ? "active" : ""]),
                                    src: $.logo
                                }, null, 8, ["class", "src"]), t("div", Xh, [i(e(st), {
                                    class: X(e(o) == $.id ? "" : "unselected")
                                }, {
                                    default: b(() => [U(r($.name), 1)]),
                                    _: 2
                                }, 1032, ["class"])])]),
                                _: 2
                            }, 1032, ["value"]))), 256))]),
                            _: 1
                        }, 8, ["modelValue", "disabled", "onIonChange"])]),
                        _: 1
                    })) : k("", !0), i(e(ce), {
                        id: "main",
                        scrollY: !1
                    }, {
                        default: b(() => [i(e(ce), null, {
                            default: b(() => [i(e(Un), null, {
                                default: b(() => [i(e(Fn), null, {
                                    default: b(() => [!e(m) && !e(d).length ? (c(), _("div", Zh, [i(e(pa), {
                                        src: "/icons/No_record.png"
                                    }), i(e(st), {
                                        color: "medium"
                                    }, {
                                        default: b(() => [U(r(C.$t("label.noRecord")), 1)]),
                                        _: 1
                                    })])) : k("", !0), i(e(nn), null, {
                                        default: b(() => [e(p) ? (c(!0), _(ae, {
                                            key: 0
                                        }, fe(e(d), $ => (c(), S(On, {
                                            class: "aspect-ratio-card",
                                            key: $.id,
                                            game: $,
                                            platform: {
                                                gameType: $.gameType
                                            },
                                            onClick: () => e(Vn)({ ...$,
                                                gameType: $.gameType,
                                                platformId: $.id
                                            }, !0)
                                        }, null, 8, ["game", "platform", "onClick"]))), 128)) : (c(!0), _(ae, {
                                            key: 1
                                        }, fe(e(d), $ => (c(), S(e(sn), {
                                            class: "gameItem",
                                            size: "4"
                                        }, {
                                            default: b(() => [(c(), S(Mn, {
                                                key: $.id,
                                                class: "game-item",
                                                "is-own-game": !!$.externalGameId,
                                                test: $ == null ? void 0 : $.test,
                                                status: $.status,
                                                "is-logo": !1,
                                                gameInfo: {
                                                    logoFlag: $.logoFlag
                                                },
                                                "is-favorite": ($ == null ? void 0 : $.isFavorite) || !1,
                                                onClick: T => e(v)($),
                                                onFavoriteHandle: () => e(h)($)
                                            }, jn({
                                                _: 2
                                            }, [!$.logo && $.externalGameId ? {
                                                name: "gameName",
                                                fn: b(() => [t("span", null, r($.name), 1)]),
                                                key: "0"
                                            } : void 0]), 1032, ["is-own-game", "test", "status", "gameInfo", "is-favorite", "onClick", "onFavoriteHandle"]))]),
                                            _: 2
                                        }, 1024))), 256))]),
                                        _: 1
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            }), i(e(Oa), {
                                ref_key: "infiniteRef",
                                ref: f,
                                onIonInfinite: e(y),
                                threshold: "5px"
                            }, {
                                default: b(() => [i(e(Va), {
                                    "loading-text": e(n) == "noMore" ? C.$t("label.noMore") : "",
                                    "loading-spinner": e(n) == "more" ? "bubbles" : null
                                }, null, 8, ["loading-text", "loading-spinner"])]),
                                _: 1
                            }, 8, ["onIonInfinite"])]),
                            _: 1
                        })]),
                        _: 1
                    })])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    tv = Y(ev, [
        ["__scopeId", "data-v-a20f2ee4"]
    ]),
    k1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    av = {
        key: 0,
        class: "empty"
    },
    nv = q({
        __name: "Record",
        setup(a) {
            const {
                sumValues: l,
                loading: s,
                recordList: o,
                modalVisible: u,
                withdrawDetail: n,
                changeTime: d,
                orderList: m,
                handleRefresh: f,
                detailHandle: p,
                timeChange: v,
                t: h
            } = ko();
            return (y, g) => (c(), S(e(ce), {
                class: "ion-padding"
            }, {
                default: b(() => [i(cn, {
                    totalAmount: e(l),
                    changeTime: e(d),
                    "onUpdate:changeTime": g[0] || (g[0] = w => te(d) ? d.value = w : null),
                    onTimeChange: e(v),
                    totalText: "".concat(e(h)("label.accumulatedWithdraw"))
                }, null, 8, ["totalAmount", "changeTime", "onTimeChange", "totalText"]), i(e(ta), {
                    slot: "fixed",
                    "pull-factor": .5,
                    "pull-min": 100,
                    "pull-max": 200,
                    onIonRefresh: g[1] || (g[1] = w => e(f)(w))
                }, {
                    default: b(() => [i(e(ea))]),
                    _: 1
                }), !e(s) && !e(o).length ? (c(), _("div", av, [g[3] || (g[3] = t("div", {
                    class: "empty-bg-img"
                }, null, -1)), i(e(st), {
                    color: "medium"
                }, {
                    default: b(() => [U(r(y.$t("label.noRecord")), 1)]),
                    _: 1
                })])) : k("", !0), i(dn, {
                    recordList: e(o),
                    onDetailHandle: e(p)
                }, null, 8, ["recordList", "onDetailHandle"]), i(Bs, {
                    modelValue: e(u),
                    "onUpdate:modelValue": g[2] || (g[2] = w => te(u) ? u.value = w : null),
                    amount: e(n).amount,
                    status: e(n).status,
                    data: e(m)
                }, null, 8, ["modelValue", "amount", "status", "data"])]),
                _: 1
            }))
        }
    }),
    sv = Y(nv, [
        ["__scopeId", "data-v-d1bf1195"]
    ]),
    ov = {
        class: "header"
    },
    lv = {
        class: "detail-text"
    },
    iv = {
        key: 0,
        class: "empty"
    },
    rv = ["onClick"],
    uv = {
        class: "top"
    },
    cv = {
        class: "label"
    },
    dv = q({
        __name: "Audit",
        setup(a) {
            const {
                flowTypeIndex: l,
                sumValues: s,
                loading: o,
                recordList: u,
                selectList: n,
                detailHandle: d,
                handleRefresh: m,
                handleChange: f
            } = Xn();
            return (p, v) => (c(), S(e(ce), null, {
                default: b(() => [t("div", ov, [t("div", lv, [U(r(p.$t("viewsAssets.pendingAuditAmount")) + ": ", 1), i(He, {
                    class: "currency"
                }, {
                    default: b(() => [U(r(e(ue)(e(s))), 1)]),
                    _: 1
                })]), i(Nn, {
                    selectList: e(n),
                    modelValue: e(l),
                    "onUpdate:modelValue": v[0] || (v[0] = h => te(l) ? l.value = h : null),
                    onHandleChange: e(f)
                }, null, 8, ["selectList", "modelValue", "onHandleChange"])]), i(e(ta), {
                    slot: "fixed",
                    "pull-factor": .5,
                    "pull-min": 100,
                    "pull-max": 200,
                    onIonRefresh: v[1] || (v[1] = h => e(m)(h))
                }, {
                    default: b(() => [i(e(ea))]),
                    _: 1
                }), !e(o) && !e(u).length ? (c(), _("div", iv, [v[2] || (v[2] = t("div", {
                    class: "empty-bg-img"
                }, null, -1)), i(e(st), {
                    color: "medium"
                }, {
                    default: b(() => [U(r(p.$t("label.noRecord")), 1)]),
                    _: 1
                })])) : k("", !0), (c(!0), _(ae, null, fe(e(u), h => (c(), _("div", {
                    class: "item",
                    onClick: y => e(d)(h),
                    key: h.flowListId
                }, [t("div", uv, [i(e(st), null, {
                    default: b(() => [U(r(e(Xa)(h.flowType)), 1)]),
                    _: 2
                }, 1024), i(He, null, {
                    default: b(() => [U(r(e(ue)(h.unfinished)), 1)]),
                    _: 2
                }, 1024)]), t("div", cv, [i(e(st), null, {
                    default: b(() => [U(r(h.createTime), 1)]),
                    _: 2
                }, 1024), t("span", {
                    style: yt({
                        color: e(Hs)(h.status)
                    })
                }, r(e(Za)(h.status)), 5)])], 8, rv))), 128))]),
                _: 1
            }))
        }
    }),
    mv = Y(dv, [
        ["__scopeId", "data-v-814b9886"]
    ]),
    pv = {
        class: "bottom"
    },
    fv = q({
        __name: "index",
        setup(a) {
            const {
                tabValue: l,
                tabList: s,
                isHideAuditRecords: o
            } = Jn();
            return (u, n) => (c(), S(e(Pe), null, {
                default: b(() => [e(o) ? (c(), S(Je, {
                    key: 0,
                    title: u.$t("viewsAssets.withdrawalRecord")
                }, null, 8, ["title"])) : (c(), S(e(Pt), {
                    key: 1
                }, {
                    default: b(() => [i(e(ft), {
                        mode: "ios",
                        class: "top"
                    }, {
                        default: b(() => [i(Wt), i(e(Tt), {
                            mode: "md",
                            modelValue: e(l),
                            "onUpdate:modelValue": n[0] || (n[0] = d => te(l) ? l.value = d : null)
                        }, {
                            default: b(() => [(c(!0), _(ae, null, fe(e(s), d => (c(), S(e(It), {
                                class: "btn-center",
                                value: d.value
                            }, {
                                default: b(() => [i(e(st), {
                                    class: X(e(l) == d.value ? "selected" : "unselected")
                                }, {
                                    default: b(() => [U(r(u.$t(d.text)), 1)]),
                                    _: 2
                                }, 1032, ["class"])]),
                                _: 2
                            }, 1032, ["value"]))), 256))]),
                            _: 1
                        }, 8, ["modelValue"])]),
                        _: 1
                    })]),
                    _: 1
                })), t("div", pv, [(c(), S(Ea(e(l) == e(at).WITHDRAW_AUDIT ? mv : sv)))])]),
                _: 1
            }))
        }
    }),
    hv = Y(fv, [
        ["__scopeId", "data-v-b7d1d15e"]
    ]),
    S1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vv = {
        class: "panel text-[0.8125rem]"
    },
    bv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    gv = {
        class: "property"
    },
    yv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    _v = {
        class: "property"
    },
    wv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Cv = {
        class: "property"
    },
    $v = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Iv = {
        class: "property"
    },
    Tv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Av = {
        class: "property"
    },
    kv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Sv = {
        class: "property"
    },
    Lv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    xv = {
        class: "property"
    },
    Nv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Pv = {
        class: "property"
    },
    Rv = {
        key: 0,
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Ev = {
        class: "property"
    },
    Ov = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Vv = {
        class: "property"
    },
    Mv = {
        class: "h-[45px] flex justify-between items-center mx-4"
    },
    Bv = {
        class: "property"
    },
    Dv = q({
        __name: "index",
        setup(a) {
            const {
                auditStateColor: l,
                showLimitGame: s,
                auditDetails: o,
                goGame: u
            } = Zn();
            return (n, d) => (c(), S(e(Pe), null, {
                default: b(() => [i(e(Pt), {
                    class: "ion-no-border"
                }, {
                    default: b(() => [i(e(ft), {
                        mode: "ios"
                    }, {
                        default: b(() => [i(Wt), i(e(Gt), null, {
                            default: b(() => [U(r(n.$t("viewsAssets.auditDetails")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), i(e(ce), {
                    class: "ion-padding",
                    scrollY: !0
                }, {
                    default: b(() => [t("div", vv, [t("div", bv, [t("span", gv, r(n.$t("viewsAssets.transactionType")), 1), t("span", null, r(e(o).tradeType), 1)]), t("div", yv, [t("span", _v, r(n.$t("activity.activityName")), 1), t("span", null, r(e(o).activityName), 1)]), t("div", wv, [t("span", Cv, r(n.$t("viewsAssets.auditStatus")), 1), t("span", {
                        style: yt({
                            color: e(l)
                        })
                    }, r(e(o).auditStatus), 5)]), t("div", $v, [t("span", Iv, r(n.$t("viewsAssets.transactionAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).tradeAmount)), 1)]),
                        _: 1
                    })]), t("div", Tv, [t("span", Av, r(n.$t("viewsAssets.auditMultiplier")), 1), t("span", null, r(e(o).auditMultiple), 1)]), t("div", kv, [t("span", Sv, r(n.$t("viewsAssets.auditAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).auditAmount)), 1)]),
                        _: 1
                    })]), t("div", Lv, [t("span", xv, r(n.$t("viewsAssets.unauditedAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).unAuditAmount)), 1)]),
                        _: 1
                    })]), t("div", Nv, [t("span", Pv, r(n.$t("viewsAssets.auditedAmount")), 1), i(He, null, {
                        default: b(() => [U(r(e(ue)(e(o).auditedAmount)), 1)]),
                        _: 1
                    })]), e(s) ? (c(), _("div", Rv, [t("span", Ev, r(n.$t("viewsAssets.gameRestrictions")), 1), t("button", {
                        class: "text-blue-500",
                        onClick: d[0] || (d[0] = (...m) => e(u) && e(u)(...m))
                    }, r(n.$t("viewsAssets.goNow")), 1)])) : k("", !0), t("div", Ov, [t("span", Vv, r(n.$t("viewsAssets.createTime")), 1), t("span", null, r(e(o).createTime), 1)]), t("div", Mv, [t("span", Bv, r(n.$t("viewsAssets.completionTime")), 1), t("span", null, r(e(o).finishTime), 1)])])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Hv = Y(Dv, [
        ["__scopeId", "data-v-9d0cb582"]
    ]),
    L1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Hv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Wv = {
        key: 0,
        class: "flex flex-col justify-center items-center"
    },
    Uv = ["src"],
    Fv = {
        key: 1,
        class: "flex justify-center items-center h-full"
    },
    jv = q({
        __name: "index",
        setup(a) {
            const {
                thirdUrl: l,
                isBDRegion: s,
                totalAmount: o,
                loading: u,
                recordList: n,
                loadMore: d,
                iframeLoaded: m,
                infiniteRef: f,
                isVirtualCurrency: p,
                changeTime: v,
                isOpenOrderModal: h,
                isQRCode: y,
                merchantCy: g,
                QRCodeInfo: w,
                timeChange: C,
                handleRefresh: L,
                detailHandle: $,
                ionInfinite: T,
                iframeLoadHandle: B,
                getPayRecordList: N,
                t: A,
                customBack: R,
                showOrderModal: j
            } = Lo();
            return (V, O) => (c(), S(e(Pe), null, {
                default: b(() => [i(Je, {
                    title: V.$t("label.rechargeRecord"),
                    bgColor: e(aa)(),
                    customBack: e(R)
                }, null, 8, ["title", "bgColor", "customBack"]), !e(y) && (e(s) || !e(l)) ? (c(), S(e(ce), {
                    key: 0,
                    class: "ion-padding"
                }, {
                    default: b(() => [i(e(ta), {
                        slot: "fixed",
                        "pull-factor": .5,
                        "pull-min": 100,
                        "pull-max": 200,
                        onIonRefresh: O[0] || (O[0] = x => e(L)(x))
                    }, {
                        default: b(() => [i(e(ea))]),
                        _: 1
                    }), i(cn, {
                        totalAmount: e(o),
                        changeTime: e(v),
                        "onUpdate:changeTime": O[1] || (O[1] = x => te(v) ? v.value = x : null),
                        onTimeChange: e(C),
                        totalText: "".concat(e(A)("label.accumulatedRecharge"))
                    }, null, 8, ["totalAmount", "changeTime", "onTimeChange", "totalText"]), !e(u) && !e(n).length ? (c(), _("div", Wv, [O[3] || (O[3] = t("div", {
                        class: "w-[7.5rem] h-[7.5rem] mt-36 empty-bg-img"
                    }, null, -1)), i(e(st), {
                        color: "medium"
                    }, {
                        default: b(() => [U(r(V.$t("label.noRecord")), 1)]),
                        _: 1
                    })])) : k("", !0), i(dn, {
                        recordList: e(n),
                        onDetailHandle: e($)
                    }, null, 8, ["recordList", "onDetailHandle"]), i(e(Oa), {
                        ref_key: "infiniteRef",
                        ref: f,
                        threshold: "5px",
                        onIonInfinite: e(T)
                    }, {
                        default: b(() => [i(e(Va), {
                            "loading-text": (e(d) == "noMore", ""),
                            "loading-spinner": e(d) == "more" ? "bubbles" : null
                        }, null, 8, ["loading-text", "loading-spinner"])]),
                        _: 1
                    }, 8, ["onIonInfinite"])]),
                    _: 1
                })) : k("", !0), e(y) ? (c(), S(e(ce), {
                    key: 1
                }, {
                    default: b(() => [i(on, en(tn({ ...e(w),
                        merchantCy: e(g) || ""
                    })), null, 16)]),
                    _: 1
                })) : k("", !0), e(s) ? k("", !0) : (c(), S(e(ce), {
                    key: 2,
                    id: "iframe",
                    class: X(e(l) && !e(y) ? "" : "hidden")
                }, {
                    default: b(() => [e(l) ? Bt((c(), _("iframe", {
                        key: 0,
                        class: "w-full h-full",
                        src: e(l),
                        onLoad: O[2] || (O[2] = (...x) => e(B) && e(B)(...x)),
                        frameborder: "0"
                    }, null, 40, Uv)), [
                        [Dt, e(m)]
                    ]) : k("", !0), e(m) ? k("", !0) : (c(), _("div", Fv, [i(e(Ft), {
                        class: "w-20 h-20",
                        name: "dots",
                        color: "light"
                    })]))]),
                    _: 1
                }, 8, ["class"])), e(j) && V.$route.path === "/rechargeRecord" ? (c(), S(ln, {
                    key: 3,
                    isOpen: e(h),
                    merchantCy: e(g),
                    isVirtualCurrency: e(p),
                    onPaySuccessCb: e(N)
                }, null, 8, ["isOpen", "merchantCy", "isVirtualCurrency", "onPaySuccessCb"])) : k("", !0)]),
                _: 1
            }))
        }
    }),
    Gv = Y(jv, [
        ["__scopeId", "data-v-fc7acbd4"]
    ]),
    x1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Gv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zv = {
        class: "header"
    },
    qv = {
        class: "top label"
    },
    Kv = {
        class: "middle label"
    },
    Yv = {
        class: "bottom label"
    },
    Qv = q({
        __name: "index",
        setup(a) {
            const {
                btnLoading: l,
                passwordHandle: s,
                confirmPasswordHandle: o,
                confirmHandle: u
            } = ts();
            return (n, d) => (c(), S(e(Pe), null, {
                default: b(() => [i(e(Pt), null, {
                    default: b(() => [i(e(ft), {
                        mode: "ios"
                    }, {
                        default: b(() => [i(Wt), i(e(Gt), null, {
                            default: b(() => [U(r(n.$t("main.withdraw") + " " + n.$t("label.password")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), i(e(ce), null, {
                    default: b(() => [t("p", zv, r(n.$t("main.set") + " " + n.$t("main.withdraw") + " " + n.$t("label.password")), 1), t("h6", qv, r(n.$t("main.new") + " " + n.$t("main.withdraw") + " " + n.$t("label.password")), 1), i(Vt, {
                        onInput: e(s),
                        focus: ""
                    }, null, 8, ["onInput"]), t("h6", Kv, r(n.$t("main.confirm") + " " + n.$t("main.new") + " " + n.$t("label.password")), 1), i(Vt, {
                        onInput: e(o)
                    }, null, 8, ["onInput"]), t("h6", Yv, r(n.$t("tip.firstWithdrawal")), 1), i(e(Jt), {
                        class: "confirm",
                        expand: "block",
                        onClick: e(u)
                    }, {
                        default: b(() => [e(l) ? (c(), S(e(Ft), {
                            key: 0,
                            slot: "start",
                            name: "bubbles"
                        })) : k("", !0), U(" " + r(n.$t("label.withdrawNow")), 1)]),
                        _: 1
                    }, 8, ["onClick"])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Jv = Y(Qv, [
        ["__scopeId", "data-v-7052bf40"]
    ]),
    N1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Jv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xv = {
        class: "top"
    },
    Zv = {
        class: "status"
    },
    eb = {
        class: "tip"
    },
    tb = {
        class: "btn"
    },
    ab = q({
        __name: "index",
        setup(a) {
            const {
                goToWithdrawPage: l
            } = as();
            return (s, o) => (c(), S(e(Pe), null, {
                default: b(() => [i(e(Pt), null, {
                    default: b(() => [i(e(ft), {
                        mode: "ios"
                    }, {
                        default: b(() => [i(e(Gt), null, {
                            default: b(() => [U(r(s.$t("viewsAssets.setPasswordDone1")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), i(e(ce), null, {
                    default: b(() => [t("div", Xv, [i(e(ne), {
                        src: "/svg/recharge/recharge_succsess.svg"
                    }), t("p", Zv, r(s.$t("viewsAssets.setPasswordDone2")), 1), t("p", eb, r(s.$t("viewsAssets.setPasswordDone3")), 1)]), t("div", tb, [i(e(Jt), {
                        class: "btnBase btnGoHomePage",
                        onClick: o[0] || (o[0] = u => e(Zt)())
                    }, {
                        default: b(() => [U(r(s.$t("viewsAssets.setPasswordDone4")), 1)]),
                        _: 1
                    }), i(e(Jt), {
                        class: "btnBase btnContinueWithdraw",
                        onClick: e(l)
                    }, {
                        default: b(() => [U(r(s.$t("viewsAssets.setPasswordDone5")), 1)]),
                        _: 1
                    }, 8, ["onClick"])])]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    nb = Y(ab, [
        ["__scopeId", "data-v-3d18a877"]
    ]),
    P1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nb
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sb = {
        key: 0,
        id: "bd-order-info-modal",
        class: "bd-order-info-overlay"
    },
    ob = {
        class: "transfer-wrap"
    },
    lb = {
        class: "stats-text-area"
    },
    ib = {
        key: 0,
        class: "waiting-text-desc"
    },
    rb = {
        class: "count-down-text"
    },
    ub = {
        class: "count-down-time"
    },
    cb = {
        class: "hour"
    },
    db = {
        class: "minute"
    },
    mb = {
        class: "second"
    },
    pb = {
        class: "amount-area"
    },
    fb = {
        key: 0,
        class: "amount-desc"
    },
    hb = {
        class: "order-info"
    },
    vb = {
        key: 0
    },
    bb = {
        class: "sub-text"
    },
    gb = {
        class: "right-area"
    },
    yb = {
        class: "text"
    },
    _b = {
        key: 1
    },
    wb = {
        class: "sub-text"
    },
    Cb = {
        class: "right-area"
    },
    $b = {
        class: "text"
    },
    Ib = {
        key: 2
    },
    Tb = {
        class: "sub-text"
    },
    Ab = {
        class: "right-area"
    },
    kb = {
        class: "text"
    },
    Sb = {
        key: 3
    },
    Lb = {
        class: "sub-text"
    },
    xb = {
        class: "text"
    },
    Nb = {
        key: 4
    },
    Pb = {
        class: "sub-text"
    },
    Rb = {
        class: "right-area qr-code-area"
    },
    Eb = ["src"],
    Ob = {
        key: 5
    },
    Vb = {
        class: "sub-text"
    },
    Mb = {
        class: "text"
    },
    Bb = {
        key: 6
    },
    Db = ["src"],
    Hb = {
        class: "sub-text"
    },
    Wb = {
        class: "right-area"
    },
    Ub = {
        class: "text"
    },
    Fb = {
        class: "sub-text"
    },
    jb = {
        class: "right-area"
    },
    Gb = {
        class: "text"
    },
    zb = {
        class: "sub-text"
    },
    qb = {
        class: "right-area"
    },
    Kb = {
        class: "text"
    },
    Yb = {
        class: "sub-text"
    },
    Qb = {
        class: "text"
    },
    Jb = {
        key: 1,
        class: "real-name-area"
    },
    Xb = {
        class: "desc-text"
    },
    Zb = {
        class: "input-area"
    },
    eg = {
        key: 2,
        class: "upload-wrap"
    },
    tg = {
        class: "title"
    },
    ag = {
        class: "upload-area"
    },
    ng = {
        class: "rules"
    },
    sg = {
        class: "notice-title"
    },
    og = {
        class: "contact-text"
    },
    lg = {
        class: "bottom-area"
    },
    ig = {
        class: "btn-row"
    },
    rg = {
        key: 1
    },
    ug = {
        class: "complete-btn-wrap"
    },
    cg = 350,
    dg = q({
        __name: "orderInfoModal",
        setup(a) {
            const {
                t: l
            } = it(), s = At(), o = Nt(), u = qe(), {
                orderInfo: n,
                transferConfig: d,
                isOpenOrderInfoModal: m
            } = Ve(o), {
                isVirtualCurrency: f
            } = Ve(u), {
                skin: p
            } = We(), v = I(0), h = I(""), y = I(null), g = I([]), w = ["NOT_ARRIVED", "BE_PAID"], C = ["SUCCESS", "PAID", "HAVE_ARRIVED"], L = ["MANUALLY-END", "TIMEOUT", "CANCEL", "LIMIT_EXCEEED"], $ = F(() => w.includes(n.value.status)), T = F(() => n.value.isTransfer && $.value), B = F(() => n.value.isTransfer && $.value && (d.value.transferNameRequired === "ON" || d.value.showTransferName === "ON")), N = F(() => s.user), A = F(() => m.value && be.currentRoute.value.path !== "/recharge/pay"), R = F(() => {
                const H = {
                    success: {
                        status: "success",
                        text: l("depositWithdrawal.000020"),
                        iconPath: "/first/svg/assets/success.svg"
                    },
                    fail: {
                        status: "fail",
                        text: l("status.".concat(n.value.status)),
                        iconPath: "/first/svg/assets/fail.svg"
                    },
                    waiting: {
                        status: "waiting",
                        text: l("depositWithdrawal.000002"),
                        iconPath: "".concat(Ae("svg/waiting.svg"))
                    },
                    pending: {
                        status: "waiting",
                        text: l("status.".concat(n.value.status)),
                        iconPath: "".concat(Ae("svg/waiting.svg"))
                    }
                };
                return C.includes(n.value.status) ? H.success : L.includes(n.value.status) ? H.fail : $.value ? H.waiting : H.pending
            }), j = async () => {
                n.value.qrCodeUrl && (h.value = await Gs.toDataURL(n.value.qrCodeUrl, {
                    width: 100,
                    margin: 2,
                    color: {
                        dark: "#000",
                        light: "#fff"
                    }
                }))
            };
            let V = null,
                O = !1;
            const x = H => {
                    if (!O)
                        if (O = !0, H > 0) {
                            const J = Math.floor(H / 3600),
                                Ce = Math.floor(H % 3600 / 60),
                                re = H % 60;
                            g.value = [...[J, Ce, re].map(le => le.toString().padStart(2, "0"))], V = setTimeout(() => {
                                O = !1, x(H - 1)
                            }, 1e3)
                        } else g.value = [], $.value && (o.orderInfo.status = "TIMEOUT"), clearTimeout(V), O = !0
                },
                D = () => {
                    O = !0, V && (clearTimeout(V), V = null)
                },
                Z = () => {
                    const H = "".concat(n.value.transferCompany, "-qrcode.png"),
                        J = document.createElement("a");
                    J.href = h.value, J.download = H, document.body.appendChild(J), J.click(), document.body.removeChild(J)
                },
                Q = H => {
                    var J, Ce;
                    o.orderInfo.voucher = (Ce = (J = H[0]) == null ? void 0 : J.response) == null ? void 0 : Ce.urls[0]
                },
                P = H => {
                    console.error("上传失败:", H)
                },
                M = () => {
                    o.isOpenOrderInfoModal = !1
                },
                W = H => {
                    o.orderInfoNavigating = !0, H(), setTimeout(() => {
                        M(), o.orderInfoNavigating = !1
                    }, cg)
                },
                ie = () => {
                    const H = be.currentRoute.value.path;
                    return H === "/recharge/apply" || H === "/main/entrar"
                },
                se = () => {
                    ie() ? M() : history.back()
                },
                ke = () => (se(), !0),
                Re = I(!1),
                Ke = async () => {
                    if (C.includes(n.value.status)) {
                        ge();
                        return
                    }
                    if (!Re.value) {
                        Re.value = !0;
                        try {
                            await ao()
                        } finally {
                            Re.value = !1
                        }
                    }
                },
                Ue = () => {
                    be.currentRoute.value.path !== "/rechargeRecord" ? W(() => be.push("/rechargeRecord")) : (M(), pt.emit("record/refresh"))
                },
                _e = Ue,
                ge = () => {
                    W(Zt)
                },
                we = () => {
                    W(() => be.push("/notification"))
                },
                Ie = H => {
                    n.value.orderNo === H.orderNo && (o.orderInfo.status = "SUCCESS")
                },
                Me = async () => {
                    pt.on("user/pay-success", Ie), D(), O = !1, x(n.value.expireTime), v.value = await Ln(), j()
                },
                Xe = () => {
                    D(), pt.off("user/pay-success", Ie)
                };
            return nt(m, H => {
                H ? Me() : Xe()
            }), ba(() => {
                D()
            }), (H, J) => e(A) ? (c(), _("div", sb, [i(Je, {
                title: e(l)("main.entrar"),
                bgColor: e(aa)(),
                customBack: ke
            }, {
                end: b(() => [t("div", {
                    class: "record-icon-wrap",
                    onClick: Ue
                }, [i(e(ne), {
                    class: "record",
                    src: e(p) === "default" ? "/svg/record.svg" : "/first/svg/assets/record.svg"
                }, null, 8, ["src"])])]),
                _: 1
            }, 8, ["title", "bgColor"]), i(e(ce), null, {
                default: b(() => {
                    var Ce;
                    return [t("div", ob, [t("div", {
                        class: X(["status", e(R).status])
                    }, [i(e(ne), {
                        class: X(["applying", "".concat(e(R).status, "-icon")]),
                        src: e(R).iconPath
                    }, null, 8, ["class", "src"])], 2), t("div", lb, [t("div", {
                        class: X(["".concat(e(R).status, "-text")])
                    }, r(e(R).text), 3), e($) ? (c(), _("div", ib, [t("span", rb, r(H.$t("rechargeQR.000004")) + ":", 1), t("div", ub, [t("span", cb, r(e(g)[0]) + "h", 1), t("span", db, r(e(g)[1]) + "m", 1), t("span", mb, r(e(g)[2]) + "s", 1)])])) : k("", !0)]), t("div", pb, [i(He, {
                        amount: e(n).amount,
                        "icon-size": "1.25rem",
                        "show-legal-tender": !0,
                        class: "amount"
                    }, {
                        default: b(() => [t("span", null, r(e(Kt)(e(n).amount)), 1)]),
                        _: 1
                    }, 8, ["amount"])]), e(f) ? (c(), _("div", fb, [i(Ls, {
                        ratio: e(v),
                        variant: "large"
                    }, null, 8, ["ratio"])])) : k("", !0), J[12] || (J[12] = t("div", {
                        class: "line"
                    }, null, -1)), t("ul", hb, [e(n).transferRealName ? (c(), _("li", vb, [t("span", bb, r(H.$t("depositWithdrawal.000005")), 1), t("div", gb, [t("span", yb, r(e(n).transferRealName), 1), i(e(ne), {
                        class: "copy-icon",
                        src: e(Ae)("img/common/copy.svg"),
                        onClick: J[0] || (J[0] = re => e(ot)(e(n).transferRealName))
                    }, null, 8, ["src"])])])) : k("", !0), e(n).transferAccount ? (c(), _("li", _b, [t("span", wb, r(H.$t("depositWithdrawal.000006")), 1), t("div", Cb, [t("span", $b, r(e(n).transferAccount), 1), i(e(ne), {
                        class: "copy-icon",
                        src: e(Ae)("img/common/copy.svg"),
                        onClick: J[1] || (J[1] = re => e(ot)(e(n).transferAccount))
                    }, null, 8, ["src"])])])) : k("", !0), e(n).transferCompany ? (c(), _("li", Ib, [t("span", Tb, r(H.$t("depositWithdrawal.000007")), 1), t("div", Ab, [i(e(ne), {
                        class: "bank-icon",
                        src: e(Ae)("svg/bankCard.svg")
                    }, null, 8, ["src"]), t("span", kb, r(e(n).transferCompany), 1), i(e(ne), {
                        class: "copy-icon",
                        src: e(Ae)("img/common/copy.svg"),
                        onClick: J[2] || (J[2] = re => e(ot)(e(n).transferCompany))
                    }, null, 8, ["src"])])])) : k("", !0), e(n).payTypeName ? (c(), _("li", Sb, [t("span", Lb, r(H.$t("viewsAssets.transactionType")), 1), t("span", xb, r(e(n).payTypeName), 1)])) : k("", !0), e(n).qrCodeUrl ? (c(), _("li", Nb, [t("span", Pb, r(H.$t("depositWithdrawal.000009")), 1), t("div", Rb, [t("div", {
                        onClick: Z,
                        class: "download-qrcode"
                    }, r(H.$t("viewsSystem.downloads")), 1), t("img", {
                        src: e(h),
                        class: "qr-code-img"
                    }, null, 8, Eb)])])) : k("", !0), e(n).payerRealName ? (c(), _("li", Ob, [t("span", Vb, r(H.$t("depositWithdrawal.000033")), 1), t("span", Mb, r(e(n).payerRealName), 1)])) : k("", !0), e(n).transferVoucher ? (c(), _("li", Bb, [J[10] || (J[10] = t("span", {
                        class: "sub-text"
                    }, null, -1)), t("div", {
                        class: "voucher-img-wrap",
                        onClick: J[3] || (J[3] = re => y.value = e(n).transferVoucher)
                    }, [t("img", {
                        src: e(n).transferVoucher,
                        class: "voucher-img"
                    }, null, 8, Db)])])) : k("", !0), t("li", null, [t("span", Hb, r(H.$t("label.account")), 1), t("div", Wb, [t("span", Ub, r((Ce = e(N)) == null ? void 0 : Ce.userName), 1), i(e(ne), {
                        class: "copy-icon",
                        src: e(Ae)("img/common/copy.svg"),
                        onClick: J[4] || (J[4] = re => {
                            var le;
                            return e(ot)((le = e(N)) == null ? void 0 : le.userName)
                        })
                    }, null, 8, ["src"])])]), t("li", null, [t("span", Fb, r(H.$t("depositWithdrawal.000011")), 1), t("div", jb, [t("span", Gb, r(e(n).orderNo), 1), i(e(ne), {
                        class: "copy-icon",
                        src: e(Ae)("img/common/copy.svg"),
                        onClick: J[5] || (J[5] = re => e(ot)(e(n).orderNo))
                    }, null, 8, ["src"])])]), t("li", null, [t("span", zb, r(H.$t("activity.recharge8")), 1), t("div", qb, [t("span", Kb, r(e(Kt)(e(n).amount)), 1), i(e(ne), {
                        class: "copy-icon",
                        src: e(Ae)("img/common/copy.svg"),
                        onClick: J[6] || (J[6] = re => e(ot)(e(Kt)(e(n).amount)))
                    }, null, 8, ["src"])])]), t("li", null, [t("span", Yb, r(H.$t("depositWithdrawal.000010")), 1), t("span", Qb, r(e(n).createTime), 1)])]), J[13] || (J[13] = t("div", {
                        class: "line"
                    }, null, -1)), e(B) ? (c(), _("div", Jb, [t("div", Xb, r(H.$t("depositWithdrawal.000031")), 1), t("div", Zb, [i(ze, {
                        modelValue: e(n).payerName,
                        "onUpdate:modelValue": J[7] || (J[7] = re => e(n).payerName = re),
                        modelModifiers: {
                            trim: !0
                        },
                        type: "realName",
                        noTrim: !0,
                        bgColor: "--color-bg-400",
                        placeholder: H.$t("hint.realName"),
                        "error-text": H.$t("hint.correctInformation"),
                        maxlength: e(Xt),
                        clear: !0,
                        required: ""
                    }, null, 8, ["modelValue", "placeholder", "error-text", "maxlength"])])])) : k("", !0), e(T) ? (c(), _("div", eg, [t("div", tg, [U(r(H.$t("depositWithdrawal.000021")), 1), J[11] || (J[11] = t("span", {
                        class: "asterisk"
                    }, "*", -1))]), t("div", ag, [i(xs, {
                        onSuccess: Q,
                        onError: P,
                        maxCount: 1,
                        transferOrderNo: e(n).orderNo
                    }, null, 8, ["transferOrderNo"]), t("div", ng, [t("p", null, r(H.$t("depositWithdrawal.000022")), 1), t("p", null, r(H.$t("depositWithdrawal.000023")), 1), t("p", null, r(H.$t("depositWithdrawal.000024")), 1)])])])) : k("", !0), t("p", sg, [i(e(ne), {
                        class: "notice-icon",
                        src: "/first/svg/assets/warning.svg"
                    }), t("span", null, r(H.$t("recharge.NoticeMsg")), 1)]), t("p", og, [U(r(H.$t("viewsAssets.contactUs")) + " ", 1), t("span", {
                        class: "client",
                        onClick: we
                    }, [i(e(ne), {
                        src: "/first/svg/perfil/customer.svg"
                    }), U(" " + r(H.$t("viewsAssets.suporteOnline")), 1)])])]), i(Ns, {
                        previewImage: e(y),
                        onClosePreviewModal: J[8] || (J[8] = re => y.value = null)
                    }, null, 8, ["previewImage"])]
                }),
                _: 1
            }), t("div", lg, [t("div", ig, [t("div", {
                class: "cancel-btn btn",
                onClick: J[9] || (J[9] = (...Ce) => e(_e) && e(_e)(...Ce))
            }, r(H.$t("recharge.transactionRecord")), 1), t("div", {
                class: X(["cancel-btn btn", {
                    "btn-loading": e(Re)
                }]),
                onClick: Ke
            }, [e(Re) ? (c(), S(e(Ft), {
                key: 0,
                name: "crescent",
                class: "btn-spinner"
            })) : (c(), _("span", rg, r(H.$t("label.continuePay")), 1))], 2)]), t("div", ug, [i(Mt, {
                height: "2.875rem",
                onClick: ge
            }, {
                default: b(() => [U(r(H.$t("recharge.completeDeposit")), 1)]),
                _: 1
            })])])])) : k("", !0)
        }
    }),
    mg = Y(dg, [
        ["__scopeId", "data-v-60259ef7"]
    ]),
    R1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mg
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    pg = {
        class: "title"
    },
    fg = {
        class: "sub-tab-list"
    },
    hg = ["onClick"],
    vg = {
        key: 0,
        class: "tag"
    },
    bg = {
        key: 1,
        class: "icon"
    },
    gg = ["src"],
    yg = {
        class: "name"
    },
    _g = {
        class: "inner"
    },
    wg = q({
        __name: "NoCycleSubTab",
        props: Ne({
            tabList: {},
            title: {},
            type: {
                default: "sub-tab"
            }
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = I(null),
                u = rt(a, "tabId"),
                n = d => {
                    d !== u.value && (s("tabChange", d), s("update:tabId", d))
                };
            return (d, m) => (c(), _("div", {
                class: "sub-tab-wrap",
                ref_key: "tabEl",
                ref: o
            }, [t("p", pg, r(a.title), 1), t("ul", fg, [(c(!0), _(ae, null, fe(a.tabList, f => (c(), _("li", {
                key: f.id,
                class: X([{
                    active: u.value === f.id
                }, a.type]),
                onClick: () => n(f.id)
            }, [f.tagValue ? (c(), _("div", vg, r(f.tagValue), 1)) : k("", !0), a.type === "sub-tab" ? (c(), _("div", bg, [f.icon ? (c(), _("img", {
                key: 0,
                src: f.icon,
                alt: ""
            }, null, 8, gg)) : k("", !0)])) : k("", !0), t("div", yg, [t("div", _g, r(f.name), 1)])], 10, hg))), 128))])], 512))
        }
    }),
    fa = Y(wg, [
        ["__scopeId", "data-v-0f574d2a"]
    ]),
    Cg = {
        class: "bn-text"
    },
    $g = {
        class: "amount"
    },
    Ig = {
        class: "amount-text"
    },
    Tg = {
        key: 0,
        class: "rate"
    },
    Ag = {
        key: 1,
        class: "rate"
    },
    kg = q({
        __name: "AmountBtn",
        props: {
            amount: {},
            rate: {},
            isActive: {
                type: Boolean
            },
            isVirtualCurrency: {
                type: Boolean
            },
            bonus: {}
        },
        setup(a) {
            return (l, s) => (c(), _("div", {
                class: X(["btn-wrap", {
                    active: a.isActive
                }])
            }, [t("div", Cg, [t("div", $g, [i(Ya, null, {
                default: b(() => [t("div", Ig, r(e(ue)(a.amount, {
                    showSuffix: !0
                })), 1)]),
                _: 1
            })]), a.rate ? (c(), _("p", Tg, r("+".concat(e(La)(a.rate), "%")) + r(l.$t("viewsAssets.bonus")), 1)) : k("", !0), a.bonus ? (c(), _("p", Ag, r("+".concat(e(ue)(a.bonus))) + r(l.$t("viewsAssets.bonus")), 1)) : k("", !0)])], 2))
        }
    }),
    Sg = Y(kg, [
        ["__scopeId", "data-v-8dc94960"]
    ]),
    Lg = ["data-badge"],
    xg = {
        class: "bn-text"
    },
    Ng = {
        class: "amount"
    },
    Pg = q({
        __name: "AmountBtnDefault",
        props: {
            amount: {},
            rate: {},
            isActive: {
                type: Boolean
            },
            isVirtualCurrency: {
                type: Boolean
            },
            bonus: {}
        },
        setup(a) {
            return (l, s) => (c(), _("div", {
                class: X(["btn-wrap", {
                    active: a.isActive,
                    badge: !!a.rate || !!a.bonus
                }]),
                "data-badge": a.rate ? "".concat(a.rate, "%") : "+".concat(a.bonus)
            }, [t("div", xg, [i(Ya, null, {
                default: b(() => [t("p", Ng, r(e(ue)(a.amount, {
                    showSuffix: !0
                })), 1)]),
                _: 1
            })])], 10, Lg))
        }
    }),
    Rg = Y(Pg, [
        ["__scopeId", "data-v-5d0ac4ce"]
    ]),
    Eg = q({
        __name: "AmountBtnList",
        props: {
            amountBtnList: {},
            amountInput: {},
            isVirtualCurrency: {
                type: Boolean
            }
        },
        emits: ["amountHandle"],
        setup(a, {
            emit: l
        }) {
            const {
                theme: s,
                skin: o
            } = We(), u = l;
            let n = a;
            const d = F(() => o === "default" ? Rg : Sg),
                m = F(() => "".concat(o === "default" ? "default" : "first", "-btn-list-wrap")),
                f = p => {
                    p.amount !== n.amountInput && u("amountHandle", p)
                };
            return (p, v) => (c(), _("div", {
                class: X(["flex-between", [e(s), e(m)]])
            }, [(c(!0), _(ae, null, fe(a.amountBtnList, h => (c(), S(e(d), jt({
                ref_for: !0
            }, { ...h,
                isActive: h.amount == a.amountInput,
                isVirtualCurrency: a.isVirtualCurrency
            }, {
                onClick: () => f(h)
            }), null, 16, ["onClick"]))), 256)), v[0] || (v[0] = t("div", {
                class: "placeholder-btn"
            }, null, -1))], 2))
        }
    }),
    _a = Y(Eg, [
        ["__scopeId", "data-v-8b45558a"]
    ]),
    Og = {
        class: "flex-start tip-wrap"
    },
    Vg = {
        key: 0
    },
    Mg = {
        key: 2,
        class: "platform"
    },
    Bg = q({
        __name: "TextTip",
        props: {
            isParticipate: {
                type: Boolean
            },
            description: {},
            limitPlatformList: {},
            withdrawFlowStr: {}
        },
        setup(a) {
            return (l, s) => {
                var o, u, n;
                return c(), _("div", Og, [(a.isParticipate ? (o = a.limitPlatformList) != null && o.length : a.description || a.withdrawFlowStr) ? (c(), S(e(ne), {
                    key: 0,
                    class: "mr-0.5 mt-0.5",
                    src: "/first/svg/assets/warning.svg"
                })) : k("", !0), t("div", null, [a.withdrawFlowStr ? (c(), _("p", Vg, r(a.withdrawFlowStr), 1)) : k("", !0), a.isParticipate ? k("", !0) : (c(), S(Fs, {
                    key: 1,
                    content: a.description,
                    level: "moderate",
                    class: "desc-text"
                }, null, 8, ["content"])), a.isParticipate && ((u = a.limitPlatformList) != null && u.length) ? (c(), _("div", Mg, [i(js, {
                    textContent: "".concat(l.$t("viewsTabbar.restrictedPlatform"), ":  ").concat((n = a.limitPlatformList) == null ? void 0 : n.toString())
                }, null, 8, ["textContent"])])) : k("", !0)])])
            }
        }
    }),
    Eo = Y(Bg, [
        ["__scopeId", "data-v-16ea5000"]
    ]),
    Dg = {
        key: 0,
        class: "bank-area"
    },
    Hg = {
        class: "title"
    },
    Wg = {
        class: "bank-list-wrap"
    },
    Ug = ["onClick"],
    Fg = ["src"],
    jg = {
        class: "bank-name"
    },
    Gg = {
        class: "bank-item"
    },
    zg = q({
        __name: "BankList",
        props: Ne({
            bankList: {}
        }, {
            bankCode: {
                required: !0
            },
            bankCodeModifiers: {}
        }),
        emits: Ne(["bankChange"], ["update:bankCode"]),
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = rt(a, "bankCode"),
                u = n => {
                    s("bankChange", n)
                };
            return (n, d) => a.bankList.length ? (c(), _("div", Dg, [t("div", Hg, r(n.$t("depositWithdrawal.000029")), 1), t("ul", Wg, [(c(!0), _(ae, null, fe(a.bankList, m => (c(), _("li", {
                class: X(["bank-item", {
                    active: o.value === m.code
                }]),
                key: m.id,
                onClick: f => u(m.code)
            }, [t("img", {
                src: m.logo,
                alt: "bank logo",
                class: "bank-logo"
            }, null, 8, Fg), t("div", jg, r(m.name), 1), o.value === m.code ? (c(), S(e(ne), {
                key: 0,
                slot: "icon-only",
                src: e(Ae)("svg/ok.svg"),
                class: "ok-icon"
            }, null, 8, ["src"])) : k("", !0)], 10, Ug))), 128)), Bt(t("li", Gg, null, 512), [
                [Dt, !1]
            ])])])) : k("", !0)
        }
    }),
    Oo = Y(zg, [
        ["__scopeId", "data-v-dc68ab55"]
    ]),
    qg = {
        class: "label"
    },
    Kg = {
        class: "input-area"
    },
    Yg = q({
        __name: "PayInfoInputs",
        props: {
            payConfigData: {},
            modelValue: {}
        },
        emits: ["update:modelValue"],
        setup(a, {
            expose: l,
            emit: s
        }) {
            const o = a,
                u = s,
                n = lt({}),
                d = I(null);
            nt(n, () => u("update:modelValue", { ...n
            }), {
                deep: !0
            }), nt([() => o.payConfigData, () => o.modelValue], ([h, y]) => {
                h.forEach(({
                    name: g
                }) => {
                    const w = y == null ? void 0 : y[g];
                    n[g] == null ? n[g] = w != null ? w : "" : w != null && w !== n[g] && (n[g] = w)
                })
            }, {
                immediate: !0
            });
            const f = (h, y) => {
                    y === "realName" && setTimeout(() => {
                        n.realName = rn(h)
                    })
                },
                p = F(() => o.payConfigData.every(h => {
                    var y;
                    return (y = n[h.name]) == null ? void 0 : y.trim()
                }));
            return l({
                form: n,
                isComplete: p,
                validate: () => {
                    var h;
                    return !((h = d.value) != null && h.querySelectorAll(".ion-invalid").length)
                }
            }), (h, y) => (c(), _("div", {
                ref_key: "formEl",
                ref: d,
                class: "pay-info-inputs"
            }, [(c(!0), _(ae, null, fe(a.payConfigData, (g, w) => (c(), _("div", {
                key: g.name,
                class: X({
                    item: w !== 0
                })
            }, [t("p", qg, [U(r(h.$t("label.".concat(g.label))), 1), y[0] || (y[0] = t("span", {
                class: "sign"
            }, "*", -1))]), t("div", Kg, [i(ze, jt({
                type: g.type,
                placeholder: h.$t("hint.".concat(g.placeholder)),
                "error-text": h.$t("hint.".concat(g.errorText)),
                modelValue: e(n)[g.name],
                "onUpdate:modelValue": C => e(n)[g.name] = C
            }, {
                ref_for: !0
            }, g.rule, {
                onInput: C => f(C, g.name)
            }), null, 16, ["type", "placeholder", "error-text", "modelValue", "onUpdate:modelValue", "onInput"])])], 2))), 128))], 512))
        }
    }),
    Vo = Y(Yg, [
        ["__scopeId", "data-v-e15713bf"]
    ]);

function Mo(a) {
    const l = I({
        phone: "",
        email: "",
        realName: ""
    });
    nt([l, a], ([u, n]) => {
        if (n.length && u.phone) {
            const d = u.phone.startsWith("0") ? u.phone : "0".concat(u.phone);
            Ot.userPayInfoList = [{
                code: "PHONE",
                value: d
            }]
        } else delete Ot.userPayInfoList
    }, {
        immediate: !0,
        deep: !0
    });
    const s = async () => {
            var u, n, d;
            try {
                const m = await Ul({
                        codes: ["PHONE"]
                    }),
                    f = (n = (u = m == null ? void 0 : m.list) == null ? void 0 : u.find(p => p.code === "PHONE")) == null ? void 0 : n.value;
                if (f) return f.startsWith("0") ? f.slice(1) : f
            } catch (m) {
                console.warn("[recharge] getUserPayInfo prefill failed", m)
            }
            try {
                return ((d = await At().getUser()) == null ? void 0 : d.phoneNumber) || ""
            } catch (m) {
                return console.warn("[recharge] user phoneNumber prefill failed", m), ""
            }
        },
        o = () => a.value.some(u => u.name === "phone");
    return Ut(async () => {
        if (await li(o).toBe(!0, {
                timeout: 1e4
            }), !o() || l.value.phone) return;
        const u = await s();
        u && (l.value = { ...l.value,
            phone: u
        })
    }), {
        payInfo: l
    }
}
const Qg = {
        class: "sub-tab-wrap"
    },
    Jg = {
        class: "text-center"
    },
    Xg = q({
        __name: "Channel",
        setup(a) {
            const {
                channelLoading: l,
                isParticipate: s,
                subTabList: o,
                subTabId: u,
                channelList: n,
                channelId: d,
                bankList: m,
                bankCode: f,
                isVirtualCurrency: p,
                amountInput: v,
                merchantCy: h,
                limitPlatformList: y,
                withdrawFlowStr: g,
                description: w,
                amountList: C,
                isHasBonus: L,
                placeholder: $,
                readOnly: T,
                maxAmount: B,
                minAmount: N,
                amountOfGift: A,
                subTabChange: R,
                payChannelChange: j,
                bankChange: V,
                amountHandle: O,
                amountInputChange: x,
                payConfigData: D
            } = ya(), {
                payInfo: Z
            } = Mo(D);
            return (Q, P) => (c(), _(ae, null, [t("div", Qg, [i(fa, {
                title: Q.$t("viewsAssets.payment"),
                onTabChange: e(R),
                tabList: e(o),
                "tab-id": e(u),
                "onUpdate:tabId": P[0] || (P[0] = M => te(u) ? u.value = M : null)
            }, null, 8, ["title", "onTabChange", "tabList", "tab-id"]), t("div", Jg, [e(l) ? (c(), S(e(Ft), {
                key: 0,
                class: "ml-[14px] mt-[15px]",
                name: "bubbles"
            })) : k("", !0)]), e(n).length && !e(l) ? (c(), _(ae, {
                key: 0
            }, [i(fa, {
                title: Q.$t("viewsAssets.depositChannels"),
                type: "channel",
                tabList: e(n),
                "tab-id": e(d),
                "onUpdate:tabId": P[1] || (P[1] = M => te(d) ? d.value = M : null),
                onTabChange: e(j)
            }, null, 8, ["title", "tabList", "tab-id", "onTabChange"]), i(Oo, {
                bankList: e(m),
                onBankChange: e(V),
                bankCode: e(f),
                "onUpdate:bankCode": P[2] || (P[2] = M => te(f) ? f.value = M : null)
            }, null, 8, ["bankList", "onBankChange", "bankCode"])], 64)) : k("", !0)]), !e(l) && e(n).length ? (c(), S(Qa, {
                key: 0,
                isVirtualCurrency: e(p),
                amountInput: e(v),
                merchantCy: e(h)
            }, {
                textTip: b(() => [i(Eo, {
                    isParticipate: e(s),
                    limitPlatformList: e(y),
                    withdrawFlowStr: e(g),
                    description: e(w)
                }, null, 8, ["isParticipate", "limitPlatformList", "withdrawFlowStr", "description"])]),
                amountBtn: b(() => [i(_a, {
                    amountBtnList: e(C),
                    amountInput: e(v),
                    onAmountHandle: e(O),
                    isVirtualCurrency: e(p)
                }, null, 8, ["amountBtnList", "amountInput", "onAmountHandle", "isVirtualCurrency"])]),
                amountInput: b(() => [i(ze, {
                    modelValue: e(v),
                    "onUpdate:modelValue": P[3] || (P[3] = M => te(v) ? v.value = M : null),
                    type: "recharge",
                    placeholder: e($),
                    mode: "ios",
                    noBonus: !e(L),
                    isInteger: !0,
                    readOnly: e(T),
                    onInput: e(x),
                    maxAmount: e(B),
                    minAmount: e(N),
                    extra: "".concat(e(ue)(e(A)))
                }, null, 8, ["modelValue", "placeholder", "noBonus", "readOnly", "onInput", "maxAmount", "minAmount", "extra"])]),
                _: 1
            }, 8, ["isVirtualCurrency", "amountInput", "merchantCy"])) : k("", !0), i(Vo, {
                payConfigData: e(D),
                modelValue: e(Z),
                "onUpdate:modelValue": P[4] || (P[4] = M => te(Z) ? Z.value = M : null)
            }, null, 8, ["payConfigData", "modelValue"])], 64))
        }
    }),
    Zg = Y(Xg, [
        ["__scopeId", "data-v-1b626171"]
    ]),
    ey = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Zg
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ty = {
        class: "text-area input-area"
    },
    ay = {
        class: "flex-between label-area"
    },
    ny = {
        class: "title"
    },
    sy = {
        class: "input-comp"
    },
    oy = q({
        __name: "AmountInput",
        setup(a) {
            const {
                theme: l
            } = We();
            return (s, o) => (c(), _("div", {
                class: X(["amount-input-wrap flex-between", e(l)])
            }, [t("div", ty, [t("div", ay, [t("p", ny, r(s.$t("viewsAssets.amount")), 1)]), t("div", sy, [Ks(s.$slots, "amount", {}, void 0, !0)])])], 2))
        }
    }),
    Bo = Y(oy, [
        ["__scopeId", "data-v-2b36645b"]
    ]),
    ly = {
        class: "AmountBtnList-wrap"
    },
    iy = q({
        __name: "Weight",
        setup(a) {
            const {
                amountInput: l,
                amountList: s,
                isVirtualCurrency: o,
                isHasBonus: u,
                placeholder: n,
                readOnly: d,
                maxAmount: m,
                minAmount: f,
                amountOfGift: p,
                amountHandle: v,
                amountInputChange: h
            } = ya();
            return (y, g) => (c(), _(ae, null, [i(Bo, null, {
                amount: b(() => [i(ze, {
                    modelValue: e(l),
                    "onUpdate:modelValue": g[0] || (g[0] = w => te(l) ? l.value = w : null),
                    type: "recharge",
                    placeholder: e(n),
                    mode: "ios",
                    noBonus: !e(u),
                    isInteger: !0,
                    readOnly: e(d),
                    onInput: e(h),
                    maxAmount: e(m),
                    minAmount: e(f),
                    extra: "".concat(e(ue)(e(p)))
                }, null, 8, ["modelValue", "placeholder", "noBonus", "readOnly", "onInput", "maxAmount", "minAmount", "extra"])]),
                _: 1
            }), t("div", ly, [i(_a, {
                amountBtnList: e(s),
                amountInput: e(l),
                onAmountHandle: e(v),
                isVirtualCurrency: e(o)
            }, null, 8, ["amountBtnList", "amountInput", "onAmountHandle", "isVirtualCurrency"])])], 64))
        }
    }),
    ry = Y(iy, [
        ["__scopeId", "data-v-af7dcca7"]
    ]),
    uy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ry
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cy = {
        key: 0,
        class: "exchange-ratio"
    },
    dy = {
        class: "title"
    },
    my = {
        class: "virtual-currency"
    },
    py = ["src"],
    fy = {
        class: "ml-1"
    },
    hy = {
        key: 1,
        class: "exchange-convert"
    },
    vy = {
        class: "convert-title"
    },
    by = {
        class: "convert-value"
    },
    gy = {
        class: "amount"
    },
    yy = {
        class: "ml-1"
    },
    _y = q({
        __name: "CurrencyExchangeInfo",
        props: {
            isVirtualCurrency: {
                type: Boolean
            },
            amountInput: {},
            mode: {
                default: "both"
            }
        },
        setup(a) {
            const l = a,
                s = I(0),
                o = F(() => s.value * Number(l.amountInput)),
                u = F(() => {
                    var m;
                    return (m = qe().tenantInfo) == null ? void 0 : m.legalTender
                }),
                n = F(() => l.mode === "ratio" || l.mode === "both"),
                d = F(() => l.mode === "convert" || l.mode === "both");
            return Ut(async () => {
                l.isVirtualCurrency && (s.value = await Ln())
            }), (m, f) => (c(), _(ae, null, [a.isVirtualCurrency && e(n) ? (c(), _("div", cy, [t("div", dy, r(m.$t("depositWithdrawal.000015")), 1), t("div", my, [t("img", {
                src: e(Ae)("img/virtualCurrency.png")
            }, null, 8, py), f[0] || (f[0] = t("span", {
                class: "virtual-count"
            }, "1", -1)), t("div", null, [U("= " + r(e(ue)(e(s))), 1), t("span", fy, r(e(u)), 1)])])])) : k("", !0), Number(a.amountInput) && a.isVirtualCurrency && e(d) ? (c(), _("div", hy, [t("div", vy, r(m.$t("depositWithdrawal.000014")), 1), t("div", by, [i(e(ne), {
                src: e(Ae)("svg/approximatelyEqual.svg"),
                class: "amount-icon"
            }, null, 8, ["src"]), t("div", gy, [U(r(e(ue)(e(o))) + " ", 1), t("span", yy, r(e(u)), 1)])])])) : k("", !0)], 64))
        }
    }),
    wy = Y(_y, [
        ["__scopeId", "data-v-450fb3a1"]
    ]),
    Cy = {
        key: 1,
        class: "pay-sub-tab-wrap"
    },
    $y = {
        class: "AmountBtnList-wrap"
    },
    Iy = q({
        __name: "standard",
        setup(a) {
            const {
                subTabList: l,
                subTabId: s,
                subTabChange: o,
                subTabListAll: u,
                isOnlyPayTypeSub: n,
                amountInput: d,
                placeholder: m,
                isHasBonus: f,
                readOnly: p,
                maxAmount: v,
                minAmount: h,
                amountOfGift: y,
                amountInputChange: g,
                isParticipate: w,
                limitPlatformList: C,
                withdrawFlowStr: L,
                description: $,
                amountList: T,
                isVirtualCurrency: B,
                amountHandle: N
            } = ya();
            return (A, R) => (c(), _(ae, null, [e(n) ? (c(), _("div", Cy, [i(fa, {
                title: A.$t("viewsAssets.payment"),
                onTabChange: e(o),
                tabList: e(u),
                "tab-id": e(s),
                "onUpdate:tabId": R[1] || (R[1] = j => te(s) ? s.value = j : null)
            }, null, 8, ["title", "onTabChange", "tabList", "tab-id"])])) : (c(), S(Yt, {
                key: 0,
                title: A.$t("viewsAssets.payment"),
                tabList: e(l),
                "tab-id": e(s),
                "onUpdate:tabId": R[0] || (R[0] = j => te(s) ? s.value = j : null),
                onTabChange: e(o),
                class: "px-12 pay-channe",
                type: "sub-tab"
            }, null, 8, ["title", "tabList", "tab-id", "onTabChange"])), i(Bo, null, {
                amount: b(() => [i(ze, {
                    modelValue: e(d),
                    "onUpdate:modelValue": R[2] || (R[2] = j => te(d) ? d.value = j : null),
                    type: "recharge",
                    placeholder: e(m),
                    mode: "ios",
                    noBonus: !e(f),
                    isInteger: !0,
                    readOnly: e(p),
                    onInput: e(g),
                    maxAmount: e(v),
                    minAmount: e(h),
                    extra: "".concat(e(ue)(e(y)))
                }, null, 8, ["modelValue", "placeholder", "noBonus", "readOnly", "onInput", "maxAmount", "minAmount", "extra"])]),
                _: 1
            }), i(wy, {
                isVirtualCurrency: e(B),
                amountInput: e(d),
                mode: "convert",
                class: "exchange-convert-wrap"
            }, null, 8, ["isVirtualCurrency", "amountInput"]), i(Eo, {
                isParticipate: e(w),
                limitPlatformList: e(C),
                withdrawFlowStr: e(L),
                description: e($),
                style: {
                    padding: "0 0.75rem"
                }
            }, null, 8, ["isParticipate", "limitPlatformList", "withdrawFlowStr", "description"]), t("div", $y, [i(_a, {
                amountBtnList: e(T),
                amountInput: e(d),
                onAmountHandle: e(N),
                isVirtualCurrency: e(B)
            }, null, 8, ["amountBtnList", "amountInput", "onAmountHandle", "isVirtualCurrency"])])], 64))
        }
    }),
    Ty = Y(Iy, [
        ["__scopeId", "data-v-5a1984e9"]
    ]),
    Ay = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ty
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ky = {
        key: 0,
        class: "tips"
    },
    Sy = {
        class: "ml-1"
    },
    Ly = {
        key: 1,
        class: "label"
    },
    xy = q({
        __name: "TextTipDefault",
        props: {
            isParticipate: {
                type: Boolean
            },
            limitPlatformList: {},
            withdrawFlowStr: {}
        },
        setup(a) {
            return We(), (l, s) => {
                var o, u;
                return c(), _(ae, null, [a.withdrawFlowStr ? (c(), _("div", ky, [i(e(ne), {
                    class: "alert",
                    src: e(ii)
                }, null, 8, ["src"]), t("span", Sy, r(a.withdrawFlowStr), 1)])) : k("", !0), a.isParticipate && ((o = a.limitPlatformList) != null && o.length) ? (c(), _("div", Ly, [i(js, {
                    textContent: "".concat(l.$t("viewsTabbar.restrictedPlatform"), ":  ").concat((u = a.limitPlatformList) == null ? void 0 : u.toString())
                }, null, 8, ["textContent"])])) : k("", !0)], 64)
            }
        }
    }),
    ns = Y(xy, [
        ["__scopeId", "data-v-8426128c"]
    ]),
    Ny = {
        key: 0,
        class: "line"
    },
    Py = {
        class: "text-description"
    },
    Ry = q({
        __name: "TextDesc",
        props: {
            isParticipate: {
                type: Boolean
            },
            description: {},
            hideLine: {
                type: Boolean,
                default: !1
            }
        },
        setup(a) {
            return (l, s) => (c(), _(ae, null, [a.hideLine ? k("", !0) : (c(), _("div", Ny)), t("p", Py, [a.isParticipate ? k("", !0) : (c(), S(Fs, {
                key: 0,
                content: a.description,
                level: "moderate",
                class: "desc-text"
            }, null, 8, ["content"]))])], 64))
        }
    }),
    Do = Y(Ry, [
        ["__scopeId", "data-v-d81d0273"]
    ]),
    Ey = {
        class: "recharge-channel"
    },
    Oy = {
        key: 0,
        class: "text-center"
    },
    Vy = q({
        __name: "Channel",
        setup(a) {
            const {
                channelLoading: l,
                isParticipate: s,
                isVirtualCurrency: o,
                isHasBonus: u,
                readOnly: n,
                subTabList: d,
                subTabId: m,
                channelList: f,
                channelId: p,
                bankList: v,
                bankCode: h,
                amountInput: y,
                amountList: g,
                placeholder: w,
                maxAmount: C,
                minAmount: L,
                amountOfGift: $,
                limitPlatformList: T,
                withdrawFlowStr: B,
                description: N,
                merchantCy: A,
                subTabChange: R,
                payChannelChange: j,
                bankChange: V,
                amountHandle: O,
                amountInputChange: x,
                payConfigData: D
            } = ya(), {
                payInfo: Z
            } = Mo(D);
            return (Q, P) => {
                const M = Js("ion-spinner");
                return c(), _("div", Ey, [i(fa, {
                    title: Q.$t("viewsAssets.payment"),
                    onTabChange: e(R),
                    tabList: e(d),
                    "tab-id": e(m),
                    "onUpdate:tabId": P[0] || (P[0] = W => te(m) ? m.value = W : null)
                }, null, 8, ["title", "onTabChange", "tabList", "tab-id"]), e(l) ? (c(), _("div", Oy, [i(M, {
                    class: "ml-[14px] mt-[15px]",
                    name: "bubbles"
                })])) : k("", !0), e(f).length && !e(l) ? (c(), _(ae, {
                    key: 1
                }, [i(fa, {
                    title: Q.$t("viewsAssets.depositChannels"),
                    type: "channel",
                    tabList: e(f),
                    "tab-id": e(p),
                    "onUpdate:tabId": P[1] || (P[1] = W => te(p) ? p.value = W : null),
                    onTabChange: e(j)
                }, null, 8, ["title", "tabList", "tab-id", "onTabChange"]), i(Oo, {
                    bankList: e(v),
                    onBankChange: e(V),
                    bankCode: e(h),
                    "onUpdate:bankCode": P[2] || (P[2] = W => te(h) ? h.value = W : null)
                }, null, 8, ["bankList", "onBankChange", "bankCode"])], 64)) : k("", !0), e(f).length && !e(l) ? (c(), S(Qa, {
                    key: 2,
                    isVirtualCurrency: e(o),
                    amountInput: e(y),
                    merchantCy: e(A)
                }, {
                    textTip: b(() => [i(Do, {
                        isParticipate: e(s),
                        description: e(N),
                        "hide-line": !0
                    }, null, 8, ["isParticipate", "description"]), i(ns, {
                        isParticipate: e(s),
                        limitPlatformList: e(T),
                        withdrawFlowStr: e(B)
                    }, null, 8, ["isParticipate", "limitPlatformList", "withdrawFlowStr"])]),
                    amountBtn: b(() => [i(_a, {
                        amountBtnList: e(g),
                        amountInput: e(y),
                        onAmountHandle: e(O),
                        isVirtualCurrency: e(o)
                    }, null, 8, ["amountBtnList", "amountInput", "onAmountHandle", "isVirtualCurrency"])]),
                    amountInput: b(() => [i(ze, {
                        modelValue: e(y),
                        "onUpdate:modelValue": P[3] || (P[3] = W => te(y) ? y.value = W : null),
                        type: "recharge",
                        placeholder: e(w),
                        mode: "ios",
                        noBonus: !e(u),
                        isInteger: !0,
                        readOnly: e(n),
                        onInput: e(x),
                        maxAmount: e(C),
                        minAmount: e(L),
                        extra: "".concat(e(ue)(e($)))
                    }, null, 8, ["modelValue", "placeholder", "noBonus", "readOnly", "onInput", "maxAmount", "minAmount", "extra"])]),
                    _: 1
                }, 8, ["isVirtualCurrency", "amountInput", "merchantCy"])) : k("", !0), i(Vo, {
                    payConfigData: e(D),
                    modelValue: e(Z),
                    "onUpdate:modelValue": P[4] || (P[4] = W => te(Z) ? Z.value = W : null)
                }, null, 8, ["payConfigData", "modelValue"])])
            }
        }
    }),
    My = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    By = {
        slot: "start",
        class: "left-label"
    },
    Dy = {
        slot: "end",
        class: "end-wrapper"
    },
    Hy = {
        key: 0,
        class: "suffix"
    },
    Wy = {
        key: 1,
        class: "gift"
    },
    Uy = {
        class: "bonus"
    },
    Fy = q({
        __name: "InputMoney",
        props: {
            readOnly: {
                type: Boolean
            },
            placeholder: {},
            amountInput: {},
            amountOfGift: {},
            merchantCy: {},
            isHasBonus: {
                type: Boolean
            }
        },
        emits: ["amountInputChange", "handleKeydown", "update:amountInput"],
        setup(a, {
            emit: l
        }) {
            const s = a,
                o = l,
                u = qe(),
                n = F(() => {
                    var p, v;
                    return (v = (p = u.tenantInfo) == null ? void 0 : p.currencyConfig) == null ? void 0 : v.suffixSymbol
                }),
                d = ri(s, "amountInput", o),
                m = p => {
                    o("amountInputChange", p)
                },
                f = p => {
                    o("handleKeydown", p)
                };
            return (p, v) => (c(), S(e(da), {
                class: "money-input",
                modelValue: e(d),
                "onUpdate:modelValue": v[0] || (v[0] = h => te(d) ? d.value = h : null),
                type: "number",
                mode: "ios",
                readOnly: a.readOnly,
                placeholder: a.placeholder,
                required: "",
                clearInput: "",
                onIonInput: m,
                onKeydown: f
            }, {
                default: b(() => [t("label", By, r(a.merchantCy), 1), t("span", Dy, [e(n) ? (c(), _("span", Hy, r(e(n)), 1)) : k("", !0), a.isHasBonus ? (c(), _("span", Wy, [U(r(p.$t("tags.GIVE_AWAY")) + " ", 1), t("span", Uy, r("+".concat(e(ue)(a.amountOfGift))), 1)])) : k("", !0)])]),
                _: 1
            }, 8, ["modelValue", "readOnly", "placeholder"]))
        }
    }),
    Ho = Y(Fy, [
        ["__scopeId", "data-v-780a7534"]
    ]),
    jy = {
        class: "recharge-weight"
    },
    Gy = q({
        __name: "Weight",
        setup(a) {
            const {
                isParticipate: l,
                isVirtualCurrency: s,
                isHasBonus: o,
                readOnly: u,
                isShowWeight: n,
                subTabList: d,
                subTabId: m,
                amountInput: f,
                amountList: p,
                placeholder: v,
                amountOfGift: h,
                limitPlatformList: y,
                withdrawFlowStr: g,
                merchantCy: w,
                distance: C,
                subTabChange: L,
                amountHandle: $,
                amountInputChange: T,
                dismissWeight: B,
                submitForm: N
            } = ya();
            return (A, R) => (c(), _("div", jy, [i(Ho, {
                amountInput: e(f),
                placeholder: e(v),
                isHasBonus: e(o),
                readOnly: e(u),
                onAmountInputChange: e(T),
                amountOfGift: e(h),
                merchantCy: e(w)
            }, null, 8, ["amountInput", "placeholder", "isHasBonus", "readOnly", "onAmountInputChange", "amountOfGift", "merchantCy"]), i(ns, {
                isParticipate: e(l),
                limitPlatformList: e(y),
                withdrawFlowStr: e(g)
            }, null, 8, ["isParticipate", "limitPlatformList", "withdrawFlowStr"]), i(_a, {
                amountBtnList: e(p),
                amountInput: e(f),
                onAmountHandle: e($),
                isVirtualCurrency: e(s)
            }, null, 8, ["amountBtnList", "amountInput", "onAmountHandle", "isVirtualCurrency"]), e(n) ? (c(), S(zn, {
                key: 0,
                merchantCy: e(w),
                distance: e(C),
                amountInput: e(f),
                isHasBonus: e(o),
                amountOfGift: e(h),
                onDismissWeight: e(B),
                tabList: e(d),
                onTabChange: e(L),
                "tab-id": e(m),
                "onUpdate:tabId": R[0] || (R[0] = j => te(m) ? m.value = j : null),
                onSubmitForm: e(N)
            }, null, 8, ["merchantCy", "distance", "amountInput", "isHasBonus", "amountOfGift", "onDismissWeight", "tabList", "onTabChange", "tab-id", "onSubmitForm"])) : k("", !0)]))
        }
    }),
    zy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Gy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qy = ["onClick"],
    Ky = {
        key: 0,
        class: "tag"
    },
    Yy = q({
        __name: "SubTabDefault",
        props: Ne({
            tabList: {},
            className: {}
        }, {
            tabId: {
                required: !0
            },
            tabIdModifiers: {}
        }),
        emits: Ne(["tabChange", "update:tabId"], ["update:tabId"]),
        setup(a, {
            emit: l
        }) {
            const s = l,
                o = rt(a, "tabId"),
                u = n => {
                    n !== o.value && (s("tabChange", n), s("update:tabId", n))
                };
            return (n, d) => (c(), _("ul", {
                class: X(["tab-list flex-between", a.className])
            }, [(c(!0), _(ae, null, fe(a.tabList, m => (c(), _("li", {
                class: X(["item", {
                    active: o.value === m.id
                }]),
                key: m.id,
                onClick: () => u(m.id)
            }, [m.tagValue ? (c(), _("div", Ky, [t("i", null, r(m.tagValue), 1)])) : k("", !0), U(" " + r(m.name), 1)], 10, qy))), 128)), d[0] || (d[0] = t("li", null, null, -1))], 2))
        }
    }),
    Qy = Y(Yy, [
        ["__scopeId", "data-v-1de5d927"]
    ]),
    Jy = {
        class: "recharge-standard"
    },
    Xy = q({
        __name: "standard",
        setup(a) {
            const {
                isParticipate: l,
                isVirtualCurrency: s,
                isHasBonus: o,
                readOnly: u,
                subTabList: n,
                subTabId: d,
                subTabListAll: m,
                isOnlyPayTypeSub: f,
                amountInput: p,
                amountList: v,
                placeholder: h,
                amountOfGift: y,
                limitPlatformList: g,
                withdrawFlowStr: w,
                description: C,
                merchantCy: L,
                subTabChange: $,
                amountHandle: T,
                amountInputChange: B
            } = ya();
            return (N, A) => (c(), _("div", Jy, [e(f) ? (c(), S(fa, {
                key: 1,
                title: N.$t("viewsAssets.payment"),
                onTabChange: e($),
                tabList: e(m),
                "tab-id": e(d),
                "onUpdate:tabId": A[1] || (A[1] = R => te(d) ? d.value = R : null)
            }, null, 8, ["title", "onTabChange", "tabList", "tab-id"])) : (c(), S(Qy, {
                key: 0,
                tabList: e(n),
                "tab-id": e(d),
                "onUpdate:tabId": A[0] || (A[0] = R => te(d) ? d.value = R : null),
                onTabChange: e($)
            }, null, 8, ["tabList", "tab-id", "onTabChange"])), i(Do, {
                isParticipate: e(l),
                description: e(C)
            }, null, 8, ["isParticipate", "description"]), i(Ho, {
                amountInput: e(p),
                placeholder: e(h),
                isHasBonus: e(o),
                readOnly: e(u),
                onAmountInputChange: e(B),
                amountOfGift: e(y),
                merchantCy: e(L)
            }, null, 8, ["amountInput", "placeholder", "isHasBonus", "readOnly", "onAmountInputChange", "amountOfGift", "merchantCy"]), i(ns, {
                isParticipate: e(l),
                limitPlatformList: e(g),
                withdrawFlowStr: e(w)
            }, null, 8, ["isParticipate", "limitPlatformList", "withdrawFlowStr"]), i(_a, {
                amountBtnList: e(v),
                amountInput: e(p),
                onAmountHandle: e(T),
                isVirtualCurrency: e(s)
            }, null, 8, ["amountBtnList", "amountInput", "onAmountHandle", "isVirtualCurrency"])]))
        }
    }),
    Zy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xy
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    I1 as A, T1 as B, A1 as C, k1 as D, S1 as E, L1 as F, x1 as G, N1 as H, P1 as I, R1 as J, fa as N, ln as O, o1 as T, hu as W, Si as a, Ei as b, oo as c, vi as d, fi as e, i1 as f, so as g, r1 as h, l1 as i, u1 as j, c1 as k, d1 as l, m1 as m, p1 as n, f1 as o, to as p, h1 as q, v1 as r, b1 as s, g1 as t, aa as u, y1 as v, _1 as w, w1 as x, C1 as y, $1 as z
};