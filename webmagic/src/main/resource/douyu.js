(window.shark_room_jsonp = window.shark_room_jsonp || []).push([[13], {
    "072f1": function (e, t, s) {
    },
    10: function (e, t, s) {
        e.exports = s("1414f")
    },
    "1414f": function (e, t, s) {
        "use strict";
        s.r(t);
        s("c4dc3"),
            s("8f58d");
        var i = s("7ca7d")
            , r = s.n(i)
            , n = s("eb3e2")
            , a = s("96089")
            , o = s("f6898")
            , l = s("b0067")
            , u = s("2f135")
            , c = s("58638");

        function _inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function _defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var m, p, f, _, d, h, b, g, y, v, G = "MODIFY_BODY_RIGHT", N = "MODIFY_BODY_MAXRIGHT",
            S = "CHANGE_SLIDER_STATUS", T = "CHANGE_PANEL_RANK_STATUS", D = "SET_ROLE", E = "NO_GUESS_SHOW",
            w = "GUESSGAME_RECOMMEND_LIST_RECIEVE", P = "RECIEVE_GUESS_GAMEW_LIST", O = "UPDATE_GUESS_GAMEW_LIST",
            k = "RECIEVE_AUTHORITY_PANEL_SHOW", R = "MODIFY_STOP_BIDLIST", C = "SET_GUESSTYPE_STATE",
            j = "SET_GUESS_ISTICKET", M = "SWITCH_ANIMATE_STAUTS", z = "SEND_GITF_RETURN_YW",
            I = "GUESS_COMMON_TIP_SHOW", L = "RECIEVE_GUESS_PANEL_RANK", A = "RECIEVE_GUESS_PANEL_RANK_TOP",
            B = function (e) {
                function GuessGameAction() {
                    return function _classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessGameAction),
                        function _possibleConstructorReturn(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.apply(this, arguments))
                }

                return _inherits(GuessGameAction, e),
                    GuessGameAction.modifyBodyBoxRight = function modifyBodyBoxRight(e) {
                        return {
                            type: G,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.modifyBodyBoxMaxRight = function modifyBodyBoxMaxRight(e) {
                        return {
                            type: N,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.changeSliderStatus = function changeSliderStatus(e) {
                        return {
                            type: S,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.changePanelRankStatus = function changePanelRankStatus(e) {
                        return {
                            type: T,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.setRole = function setRole(e) {
                        return {
                            type: D,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.noGuessShow = function noGuessShow(e) {
                        return {
                            type: E,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.getRecommendList = function getRecommendList(e) {
                        return {
                            type: "GUESSGAME_RECOMMEND_LIST",
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.recieveRecommendList = function recieveRecommendList(e) {
                        return {
                            type: w,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.getAuthorityPanelShow = function getAuthorityPanelShow(e) {
                        return {
                            type: "GET_AUTHORITY_PANEL_SHOW",
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.recieveAuthorityPanelShow = function recieveAuthorityPanelShow(e) {
                        return {
                            type: k,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.modifyStopBidList = function modifyStopBidList(e) {
                        return {
                            type: R,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.recieveGuessList = function recieveGuessList(e) {
                        return {
                            type: P,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.updateGuessList = function updateGuessList(e) {
                        return {
                            type: O,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.setGuessTypeState = function setGuessTypeState(e) {
                        return {
                            type: C,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.setGuessIsTicketState = function setGuessIsTicketState(e) {
                        return {
                            type: j,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.switchAnimatedStatus = function switchAnimatedStatus(e) {
                        return {
                            type: M,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.sendGiftReturnYw = function sendGiftReturnYw(e) {
                        return {
                            type: z,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.receiveGuessPanelRank = function receiveGuessPanelRank(e) {
                        return {
                            type: L,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.receiveGuessPanelRankTop = function receiveGuessPanelRankTop(e) {
                        return {
                            type: A,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction.guessCommonTipSwitch = function guessCommonTipSwitch(e) {
                        return {
                            type: I,
                            payload: e
                        }
                    }
                    ,
                    GuessGameAction
            }(c.Action);

        function _initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessGameDto_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessGameDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessGameDto_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function _applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var x, q, U, H, Y, W, F, J = n.basicTypes.string, V = (0,
            n.basicTypes.mapping)({
            roomId: "room_id",
            playerCount: "player_count",
            nickname: "user_nickname",
            cateId: "room_cate_id",
            tagId: "room_tag_id",
            tagName: "room_tag_name",
            moneyType: "money_type"
        })((p = function (e) {
            function GuessGameRecommendDto() {
                var t, s;
                !function GuessGameDto_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessGameRecommendDto);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessGameDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    _initDefineProp(s, "roomId", f, s),
                    _initDefineProp(s, "playerCount", _, s),
                    _initDefineProp(s, "nickname", d, s),
                    _initDefineProp(s, "cateId", h, s),
                    _initDefineProp(s, "tagId", b, s),
                    _initDefineProp(s, "tagName", g, s),
                    _initDefineProp(s, "avatar", y, s),
                    _initDefineProp(s, "moneyType", v, s),
                    GuessGameDto_possibleConstructorReturn(s, t)
            }

            return GuessGameDto_inherits(GuessGameRecommendDto, e),
                GuessGameRecommendDto
        }(n.EntityDto),
            f = _applyDecoratedDescriptor(p.prototype, "roomId", [J], {
                enumerable: !0,
                initializer: null
            }),
            _ = _applyDecoratedDescriptor(p.prototype, "playerCount", [J], {
                enumerable: !0,
                initializer: null
            }),
            d = _applyDecoratedDescriptor(p.prototype, "nickname", [J], {
                enumerable: !0,
                initializer: null
            }),
            h = _applyDecoratedDescriptor(p.prototype, "cateId", [J], {
                enumerable: !0,
                initializer: null
            }),
            b = _applyDecoratedDescriptor(p.prototype, "tagId", [J], {
                enumerable: !0,
                initializer: null
            }),
            g = _applyDecoratedDescriptor(p.prototype, "tagName", [J], {
                enumerable: !0,
                initializer: null
            }),
            y = _applyDecoratedDescriptor(p.prototype, "avatar", [J], {
                enumerable: !0,
                initializer: null
            }),
            v = _applyDecoratedDescriptor(p.prototype, "moneyType", [J], {
                enumerable: !0,
                initializer: null
            }),
            m = p)) || m;

        function GuessAuthorityDto_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessAuthorityDto_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessAuthorityDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessAuthorityDto_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessAuthorityDto_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Q = n.basicTypes.number
            , $ = n.basicTypes.mapping
            , K = n.basicTypes.array
            , X = (x = $({
            canStartQuiz: "can_start_quiz",
            changeStart: "change_start",
            showField: "show_fild"
        }),
            q = K(String),
        x((H = function (e) {
            function GuessAuthorityDto() {
                var t, s;
                !function GuessAuthorityDto_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessAuthorityDto);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessAuthorityDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    GuessAuthorityDto_initDefineProp(s, "canStartQuiz", Y, s),
                    GuessAuthorityDto_initDefineProp(s, "changeStart", W, s),
                    GuessAuthorityDto_initDefineProp(s, "showField", F, s),
                    GuessAuthorityDto_possibleConstructorReturn(s, t)
            }

            return GuessAuthorityDto_inherits(GuessAuthorityDto, e),
                GuessAuthorityDto
        }(n.EntityDto),
            Y = GuessAuthorityDto_applyDecoratedDescriptor(H.prototype, "canStartQuiz", [Q], {
                enumerable: !0,
                initializer: null
            }),
            W = GuessAuthorityDto_applyDecoratedDescriptor(H.prototype, "changeStart", [Q], {
                enumerable: !0,
                initializer: null
            }),
            F = GuessAuthorityDto_applyDecoratedDescriptor(H.prototype, "showField", [q], {
                enumerable: !0,
                initializer: null
            }),
            U = H)) || U)
            , Z = s("97a85")
            , ee = s.n(Z)
            , te = s("722b8")
            , se = s("fc794")
            , ie = s.n(se)
            , re = s("e854a")
            , ne = s("3c4b9");

        function guessTicketActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessTicketActions_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var ae = "RECEIVE_GUESS_TICKET_NUM"
            , oe = "RECIEVE_BOLD_GUESS_FLAG"
            , le = "CLOSE_DEALER_TICKET_MODAL"
            , ue = "RECEIVE_GUESS_TICKET_NUM_BET"
            , ce = "CLOSE_BET_TICKET_MODAL"
            , me = function (e) {
            function GuessTicketAction() {
                return function guessTicketActions_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessTicketAction),
                    function guessTicketActions_possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }

            return guessTicketActions_inherits(GuessTicketAction, e),
                GuessTicketAction.getGuessTicketNum = function getGuessTicketNum(e) {
                    return {
                        type: "GET_GUESS_TICKET_NUM",
                        payload: e
                    }
                }
                ,
                GuessTicketAction.receiveGuessTicketNum = function receiveGuessTicketNum(e) {
                    return {
                        type: ae,
                        payload: e
                    }
                }
                ,
                GuessTicketAction.receiveGuessTicketNumBet = function receiveGuessTicketNumBet(e) {
                    return {
                        type: ue,
                        payload: e
                    }
                }
                ,
                GuessTicketAction.closeBetTicketModal = function closeBetTicketModal(e) {
                    return {
                        type: ce,
                        payload: e
                    }
                }
                ,
                GuessTicketAction.receiveBoldGuessFlag = function receiveBoldGuessFlag(e) {
                    return {
                        type: oe,
                        payload: e
                    }
                }
                ,
                GuessTicketAction.closeDealerTicketModal = function closeDealerTicketModal(e) {
                    return {
                        type: le,
                        payload: e
                    }
                }
                ,
                GuessTicketAction
        }(c.Action);

        function guessTitleListActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessTitleListActions_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var pe = "RECEIVE_GUESS_TITLE_LIST"
            , fe = "RECEIVE_GUESS_TITLE_SHOW"
            , _e = "RECEIVE_GUESS_TITLE_CLOSE"
            , de = "RECEIVE_GUESS_CLOSE_TITLE"
            , he = "RECEIVE_GUESS_TITLE_EDIT_CLOSE"
            , be = "GUESS_TITLE_EDIT_SHOW"
            , ge = "RECEIVE_GUESS_EDIT_ERROR"
            , ye = "GUESS_START_TYPE_CHOOSE"
            , ve = function (e) {
            function GuessTitleListAction() {
                return function guessTitleListActions_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessTitleListAction),
                    function guessTitleListActions_possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }

            return guessTitleListActions_inherits(GuessTitleListAction, e),
                GuessTitleListAction.guessTitleListPopShow = function guessTitleListPopShow(e) {
                    return {
                        type: fe,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.guessTitleListPopClose = function guessTitleListPopClose(e) {
                    return {
                        type: _e,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.getGuessTitleList = function getGuessTitleList(e) {
                    return {
                        type: "GET_GUESS_TITLE_LIST",
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.receiveGuessTitleList = function receiveGuessTitleList(e) {
                    return {
                        type: pe,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.guessStartQuiz = function guessStartQuiz(e) {
                    return {
                        type: "GUESS_START_QUIZ",
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.guessCloseTitle = function guessCloseTitle(e) {
                    return {
                        type: "GUESS_CLOSE_TITLE",
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.receiveGuessCloseTitle = function receiveGuessCloseTitle(e) {
                    return {
                        type: de,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.guessStartTypeChoose = function guessStartTypeChoose(e) {
                    return {
                        type: ye,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.guessTitleEditPopShow = function guessTitleEditPopShow(e) {
                    return {
                        type: be,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.guessEditCommit = function guessEditCommit(e) {
                    return {
                        type: "GUESS_EDIT_COMMIT",
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.receiveGuessEditCommit = function receiveGuessEditCommit(e) {
                    return {
                        type: he,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction.receiveGuessEditError = function receiveGuessEditError(e) {
                    return {
                        type: ge,
                        payload: e
                    }
                }
                ,
                GuessTitleListAction
        }(c.Action);

        function guessThemeItemActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessThemeItemActions_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Ge, Ne, Se, Te = "SWITCH_DEALER_STATUS", De = "SWITCH_BET_STATUS", Ee = "RECEIVE_BET_STATUS",
            we = "RECEIVE_BET_ERRMSG", Pe = "SWITCH_CORNER_STATUS", Oe = "GUESS_COMMIT_RESULT",
            ke = "SHUT_GUESS_COMMIT_RESULT", Re = "GUESS_RESULT_SHOW", Ce = "SHUT_GUESS_RESULT_SHOW",
            je = "SET_GUESS_RESULT_MODIFY", Me = "SHUT_GUESS_RESULT_MODIFY", ze = function (e) {
                function GuessThemeItemAction() {
                    return function guessThemeItemActions_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessThemeItemAction),
                        function guessThemeItemActions_possibleConstructorReturn(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.apply(this, arguments))
                }

                return guessThemeItemActions_inherits(GuessThemeItemAction, e),
                    GuessThemeItemAction.switchDealerModalStatus = function switchDealerModalStatus(e) {
                        return {
                            type: Te,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.guessGameEmptyAction = function guessGameEmptyAction(e) {
                        return {
                            type: "GUESS_GAME_EMPTY_ACTION",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.getGuessDealer = function getGuessDealer(e) {
                        return {
                            type: "GET_GUESS_DEALER",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.receiveGuessDealer = function receiveGuessDealer(e) {
                        return {
                            type: "RECEIVE_GUESS_DEALER",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.switchBetModalStatus = function switchBetModalStatus(e) {
                        return {
                            type: De,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.receiveBetModalStatus = function receiveBetModalStatus(e) {
                        return {
                            type: Ee,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.receiveBetAnimated = function receiveBetAnimated(e) {
                        return {
                            type: we,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.getGuessBetting = function getGuessBetting(e) {
                        return {
                            type: "GET_GUESS_BETTING",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.guessCommitResult = function guessCommitResult(e) {
                        return {
                            type: Oe,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.shutGuessResultCommit = function shutGuessResultCommit(e) {
                        return {
                            type: ke,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.guessSureCommitResult = function guessSureCommitResult(e) {
                        return {
                            type: "GET_GUESS_COMMIT_RESULT",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.guessResultShow = function guessResultShow(e) {
                        return {
                            type: Re,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.shutGuessResultShow = function shutGuessResultShow(e) {
                        return {
                            type: Ce,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.getGuessResultModify = function getGuessResultModify(e) {
                        return {
                            type: "GET_GUESS_RESULT_MODIFY",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.setGuessResultModify = function setGuessResultModify(e) {
                        return {
                            type: je,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.shutGuessResultModify = function shutGuessResultModify(e) {
                        return {
                            type: Me,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.guessModifyResultCommit = function guessModifyResultCommit(e) {
                        return {
                            type: "COMMIT_GUESS_RESULT_MODIFY",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.getCornerBylua = function getCornerBylua(e) {
                        return {
                            type: "GET_GUESS_CORNER",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.switchCornerByluaStatus = function switchCornerByluaStatus(e) {
                        return {
                            type: Pe,
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.getGuessCornerData = function getGuessCornerData(e) {
                        return {
                            type: "GET_GUESS_CORNER_DATA",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.receiveGuessTicketNum = function receiveGuessTicketNum(e) {
                        return {
                            type: "RECEIVE_GUESS_TICKET_NUM",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction.switchGuessCornerData = function switchGuessCornerData(e) {
                        return {
                            type: "SWITCH_CORNER_DATA_STATUS",
                            payload: e
                        }
                    }
                    ,
                    GuessThemeItemAction
            }(c.Action), Ie = s("eb4d3"), Le = s("db47a"), Ae = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ;

        function guessDYSubServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessDYSubServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessDYSubServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Be, xe, qe, Ue, He, Ye = {
            show_anchorquiz: !1
        }, We = (Ge = (0,
            r.a.Service)(n.DataCenter.global),
            Ne = function (e) {
                function GuessDYSubServices() {
                    var t, s;
                    !function guessDYSubServices_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessDYSubServices);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = guessDYSubServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        function guessDYSubServices_initDefineProp(e, t, s, i) {
                            s && Object.defineProperty(e, t, {
                                enumerable: s.enumerable,
                                configurable: s.configurable,
                                writable: s.writable,
                                value: s.initializer ? s.initializer.call(i) : void 0
                            })
                        }(s, "global", Se, s),
                        guessDYSubServices_possibleConstructorReturn(s, t)
                }

                return guessDYSubServices_inherits(GuessDYSubServices, e),
                    GuessDYSubServices.prototype.guessGameDYSub = function guessGameDYSub(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            , s = arguments[2];
                        s && !Ye[e] ? (Ye[e] = !0,
                            Object(Le.dysub)(e, Ae({}, t))) : s || Object(Le.dysub)(e, Ae({}, t))
                    }
                    ,
                    GuessDYSubServices.prototype.isAnchor = function isAnchor() {
                        return +this.global.get("USER_INFO.uid") === +this.global.get("$ROOM.owner_uid")
                    }
                    ,
                    GuessDYSubServices
            }(c.Service),
            Se = function guessDYSubServices_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(Ne.prototype, "global", [Ge], {
                enumerable: !0,
                initializer: null
            }),
            Ne), Fe = s("a5898"), Je = s("18995"), Ve = s("ac64b");

        function guessTicketServices_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessTicketServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessTicketServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessTicketServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function guessTicketServices_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Qe, $e, Ke, Xe, Ze, et, tt, st, it, rt, nt, at = r.a.Store, ot = r.a.Service, lt = (Be = at(),
                xe = ot(n.DataCenter.global),
                qe = function (e) {
                    function GuessTicketService() {
                        var t, s;
                        !function guessTicketServices_classCallCheck(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, GuessTicketService);
                        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                            r[n] = arguments[n];
                        return t = s = guessTicketServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                            guessTicketServices_initDefineProp(s, "store", Ue, s),
                            guessTicketServices_initDefineProp(s, "global", He, s),
                            guessTicketServices_possibleConstructorReturn(s, t)
                    }

                    return guessTicketServices_inherits(GuessTicketService, e),
                        GuessTicketService.prototype.getStore = function getStore(e) {
                            return this.store.getState()[e]
                        }
                        ,
                        GuessTicketService.prototype.getTicketNum = function getTicketNum(e) {
                            this.store.dispatch(me.getGuessTicketNum(e))
                        }
                        ,
                        GuessTicketService.prototype.receiveGuessTicketNum = function receiveGuessTicketNum(e) {
                            this.store.dispatch(me.receiveGuessTicketNum(e))
                        }
                        ,
                        GuessTicketService.prototype.closeDealerTicketModal = function closeDealerTicketModal() {
                            this.store.dispatch(me.closeDealerTicketModal())
                        }
                        ,
                        GuessTicketService.prototype.closeBetTicketModal = function closeBetTicketModal() {
                            this.store.dispatch(me.closeBetTicketModal())
                        }
                        ,
                        GuessTicketService
                }(c.Service),
                Ue = guessTicketServices_applyDecoratedDescriptor(qe.prototype, "store", [Be], {
                    enumerable: !0,
                    initializer: null
                }),
                He = guessTicketServices_applyDecoratedDescriptor(qe.prototype, "global", [xe], {
                    enumerable: !0,
                    initializer: null
                }),
                qe), ut = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ;

        function guessThemeItemServices_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessThemeItemServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessThemeItemServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessThemeItemServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function guessThemeItemServices_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var ct, mt, pt, ft, _t, dt, ht, bt, gt, yt, vt, Gt, Nt, St = r.a.Store, Tt = r.a.Service, Dt = (Qe = St(),
                $e = Tt(n.DataCenter.global),
                Ke = Tt(n.DataCenter.acj),
                Xe = Tt(Fe.a),
                Ze = Tt(lt),
                et = function (e) {
                    function GuessThemeItemService() {
                        var t, s;
                        !function guessThemeItemServices_classCallCheck(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, GuessThemeItemService);
                        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                            r[n] = arguments[n];
                        return t = s = guessThemeItemServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                            guessThemeItemServices_initDefineProp(s, "store", tt, s),
                            guessThemeItemServices_initDefineProp(s, "global", st, s),
                            guessThemeItemServices_initDefineProp(s, "acj", it, s),
                            guessThemeItemServices_initDefineProp(s, "commonDataService", rt, s),
                            guessThemeItemServices_initDefineProp(s, "guessTicketService", nt, s),
                            guessThemeItemServices_possibleConstructorReturn(s, t)
                    }

                    return guessThemeItemServices_inherits(GuessThemeItemService, e),
                        GuessThemeItemService.prototype.getStore = function getStore(e) {
                            return this.store.getState()[e]
                        }
                        ,
                        GuessThemeItemService.prototype.switchDealerModalStatus = function switchDealerModalStatus(e) {
                            this.store.dispatch(ze.switchDealerModalStatus(e))
                        }
                        ,
                        GuessThemeItemService.prototype.getGuessDealer = function getGuessDealer(e) {
                            this.store.dispatch(ze.getGuessDealer(e))
                        }
                        ,
                        GuessThemeItemService.prototype.switchBetModalStatus = function switchBetModalStatus(e) {
                            this.store.dispatch(ze.switchBetModalStatus(e))
                        }
                        ,
                        GuessThemeItemService.prototype.clearBetModalStatus = function clearBetModalStatus() {
                            this.store.dispatch(ze.receiveBetModalStatus({
                                errMsg: "",
                                errConfig: {
                                    balance: 0,
                                    bankerid: 0,
                                    loss: 0
                                }
                            }))
                        }
                        ,
                        GuessThemeItemService.prototype.receiveBetAnimated = function receiveBetAnimated(e) {
                            var t = this;
                            this.store.dispatch(ze.receiveBetAnimated(e)),
                            e && e.msg && e.flag && setTimeout(function () {
                                t.store.dispatch(ze.receiveBetAnimated({
                                    flag: !1,
                                    msg: e.msg
                                }))
                            }, 500)
                        }
                        ,
                        GuessThemeItemService.prototype.getGuessBetting = function getGuessBetting(e) {
                            this.store.dispatch(ze.getGuessBetting(e))
                        }
                        ,
                        GuessThemeItemService.prototype.guessCommitResult = function guessCommitResult(e) {
                            var t = [];
                            (this.getStore("guessThemeData") || []).list.forEach(function (s, i) {
                                +s.qs < 3 && ("all" !== e && i !== +e || t.push({
                                    qid: s.qid,
                                    qt: s.qt,
                                    fon: s.fon,
                                    son: s.son
                                }))
                            }),
                                this.store.dispatch(ze.guessCommitResult(t))
                        }
                        ,
                        GuessThemeItemService.prototype.shutGuessResultCommit = function shutGuessResultCommit(e) {
                            this.store.dispatch(ze.shutGuessResultCommit(e))
                        }
                        ,
                        GuessThemeItemService.prototype.guessSureCommitResult = function guessSureCommitResult(e) {
                            var t = this.store.getState().guessTicketData.isBoldGuess;
                            this.store.dispatch(ze.guessSureCommitResult(ut({}, e, {
                                money_type: t ? 2 : 1
                            })))
                        }
                        ,
                        GuessThemeItemService.prototype.guessModifyResult = function guessModifyResult(e) {
                            var t = (this.getStore("guessThemeData") || []).list;
                            t.length > 0 && t[e.index] && (3 === +t[e.index].qs || 4 === +t[e.index].qs) && this.store.dispatch(ze.getGuessResultModify({
                                quiz_id: t[e.index].qid,
                                quizTitle: t[e.index].qt,
                                optionOne: t[e.index].fon,
                                optionTwo: t[e.index].son,
                                old_win_option: +t[e.index].wo,
                                play_type: e.guessType
                            }))
                        }
                        ,
                        GuessThemeItemService.prototype.guessModifyResultCommit = function guessModifyResultCommit(e) {
                            var t = this.getStore("guessGameData").guessType;
                            this.store.dispatch(ze.guessModifyResultCommit(ut({
                                play_type: t
                            }, e)))
                        }
                        ,
                        GuessThemeItemService.prototype.shutGuessResultModify = function shutGuessResultModify(e) {
                            this.store.dispatch(ze.shutGuessResultModify(e))
                        }
                        ,
                        GuessThemeItemService.prototype.guessResultShow = function guessResultShow(e) {
                            this.store.dispatch(ze.guessResultShow(e))
                        }
                        ,
                        GuessThemeItemService.prototype.shutGuessResultShow = function shutGuessResultShow() {
                            this.store.dispatch(ze.shutGuessResultShow())
                        }
                        ,
                        GuessThemeItemService.prototype.getCornerBylua = function getCornerBylua(e) {
                            this.store.dispatch(ze.getCornerBylua(e))
                        }
                        ,
                        GuessThemeItemService.prototype.getCornerList = function getCornerList(e) {
                            this.store.dispatch(ze.shutGuessResultShow(e))
                        }
                        ,
                        GuessThemeItemService.prototype.switchCornerByluaStatus = function switchCornerByluaStatus(e) {
                            this.store.dispatch(ze.switchCornerByluaStatus(e))
                        }
                        ,
                        GuessThemeItemService.prototype.getGuessCornerData = function getGuessCornerData(e) {
                            this.store.dispatch(ze.getGuessCornerData(e))
                        }
                        ,
                        GuessThemeItemService.prototype.updateGuessDeJin = function updateGuessDeJin(e) {
                            this.store.getState().guessTicketData.isBoldGuess ? (this.guessTicketService.receiveGuessTicketNum({
                                ticketNum: e || 0
                            }),
                                this.acj.push(Ve.c.JS_BIGWHEEL_FRESHNUM, {
                                    data: Object(Je.g)(e)
                                })) : this.commonDataService.updateSilver({
                                data: e
                            })
                        }
                        ,
                        GuessThemeItemService
                }(c.Service),
                tt = guessThemeItemServices_applyDecoratedDescriptor(et.prototype, "store", [Qe], {
                    enumerable: !0,
                    initializer: null
                }),
                st = guessThemeItemServices_applyDecoratedDescriptor(et.prototype, "global", [$e], {
                    enumerable: !0,
                    initializer: null
                }),
                it = guessThemeItemServices_applyDecoratedDescriptor(et.prototype, "acj", [Ke], {
                    enumerable: !0,
                    initializer: null
                }),
                rt = guessThemeItemServices_applyDecoratedDescriptor(et.prototype, "commonDataService", [Xe], {
                    enumerable: !0,
                    initializer: null
                }),
                nt = guessThemeItemServices_applyDecoratedDescriptor(et.prototype, "guessTicketService", [Ze], {
                    enumerable: !0,
                    initializer: null
                }),
                et), Et = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ;

        function guessMainPanelServices_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessMainPanelServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessMainPanelServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessMainPanelServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function guessMainPanelServices_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var wt, Pt, Ot, kt, Rt, Ct = re.a.socketStream, jt = r.a.Store, Mt = r.a.Service, zt = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }, It = (ct = jt(),
                mt = Mt(Dt),
                pt = Mt(We),
                ft = Mt(n.DataCenter.global),
                _t = Mt(n.DataCenter.localStorage),
                dt = Mt(n.DataCenter.common),
                ht = function (e) {
                    function GuessMainPanelServices() {
                        var t, s;
                        !function guessMainPanelServices_classCallCheck(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, GuessMainPanelServices);
                        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                            r[n] = arguments[n];
                        return t = s = guessMainPanelServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                            guessMainPanelServices_initDefineProp(s, "store", bt, s),
                            guessMainPanelServices_initDefineProp(s, "guessThemeItemService", gt, s),
                            guessMainPanelServices_initDefineProp(s, "guessDYSubService", yt, s),
                            guessMainPanelServices_initDefineProp(s, "global", vt, s),
                            guessMainPanelServices_initDefineProp(s, "localStorage", Gt, s),
                            guessMainPanelServices_initDefineProp(s, "common", Nt, s),
                            s.defaultObj = {
                                fbid: "0",
                                fbmc: "0",
                                fbuid: "0",
                                fobc: "0",
                                folpc: "0",
                                sbid: "0",
                                sbmc: "0",
                                sbuid: "0",
                                sobc: "0",
                                solpc: "0",
                                scs: "0",
                                wo: "0",
                                fjoin: !1,
                                fjoinAmount: 0,
                                sjoin: !1,
                                sjoinAmount: 0,
                                feedback: !1,
                                fBankerList: [],
                                fBetList: [],
                                sBankerList: [],
                                sBetList: [],
                                op1pr: "0",
                                op2pr: "0",
                                op1to: "0",
                                op2to: "0",
                                fCurrentAmount: 0,
                                sCurrentAmount: 0,
                                hasShowHotTip: 0,
                                hasShowHotTipStatus: !1
                            },
                            guessMainPanelServices_possibleConstructorReturn(s, t)
                    }

                    return guessMainPanelServices_inherits(GuessMainPanelServices, e),
                        GuessMainPanelServices.prototype.isAnchor = function isAnchor() {
                            return +this.global.get("USER_INFO.uid") === +this.global.get("$ROOM.owner_uid")
                        }
                        ,
                        GuessMainPanelServices.prototype.getStore = function getStore(e) {
                            return this.store.getState()[e]
                        }
                        ,
                        GuessMainPanelServices.prototype.oppositeStatus = function oppositeStatus() {
                            this.store.dispatch(ne.m.oppositeStatus())
                        }
                        ,
                        GuessMainPanelServices.prototype.panelShow = function panelShow(e) {
                            void 0 === this.getStore("guessGameData").authorityData && ie.a.check() ? this.store.dispatch(B.getAuthorityPanelShow(e)) : this.modifyPanelShow(!0)
                        }
                        ,
                        GuessMainPanelServices.prototype.modifyPanelShow = function modifyPanelShow(e) {
                            this.store.dispatch(ne.m.modifyPanelShow(e)),
                                this.store.dispatch(ne.m.guessBottomPlaceholder())
                        }
                        ,
                        GuessMainPanelServices.prototype.guessCommonTipSwitch = function guessCommonTipSwitch(e) {
                            this.store.dispatch(B.guessCommonTipSwitch(e))
                        }
                        ,
                        GuessMainPanelServices.prototype.guessShowIconTips = function guessShowIconTips() {
                            var e = this;
                            this.localStorage.get("guessGame_isShowGuessTip") || (this.localStorage.set("guessGame_isShowGuessTip", 1, 600),
                                this.guessDYSubService.guessGameDYSub("show_quiz_msg", {}),
                                this.store.dispatch(ne.m.receiveGuessGameIconShowTip(!0)),
                                setTimeout(function () {
                                    e.store.dispatch(ne.m.receiveGuessGameIconShowTip(!1))
                                }, 1e4))
                        }
                        ,
                        GuessMainPanelServices.prototype.modifyBodyBoxRight = function modifyBodyBoxRight(e) {
                            this.store.dispatch(B.modifyBodyBoxRight(e))
                        }
                        ,
                        GuessMainPanelServices.prototype.modifyBodyBoxMaxRight = function modifyBodyBoxMaxRight(e) {
                            this.store.dispatch(B.modifyBodyBoxMaxRight(e))
                        }
                        ,
                        GuessMainPanelServices.prototype.changeSliderStatus = function changeSliderStatus(e) {
                            this.store.dispatch(B.changeSliderStatus(e))
                        }
                        ,
                        GuessMainPanelServices.prototype.changePanelRankStatus = function changePanelRankStatus(e) {
                            this.store.dispatch(B.changePanelRankStatus(e))
                        }
                        ,
                        GuessMainPanelServices.prototype.setRole = function setRole(e) {
                            this.store.dispatch(B.setRole(e))
                        }
                        ,
                        GuessMainPanelServices.prototype.getRecommendListByEpic = function getRecommendListByEpic() {
                            this.store.dispatch(B.getRecommendList())
                        }
                        ,
                        GuessMainPanelServices.prototype.switchGuessGameActive = function switchGuessGameActive(e) {
                            e ? this.store.dispatch(ne.m.sendGuessGameActive()) : this.store.dispatch(ne.m.switchGuessGameActive())
                        }
                        ,
                        GuessMainPanelServices.prototype.modifyStopBidMask = function modifyStopBidMask(e, t) {
                            var s = this.getStore("guessThemeData").stopBidList.slice();
                            s.map(function (s, i) {
                                return i === e ? Object.assign(s, {
                                    stopBidMask: t
                                }) : Object.assign(s, {
                                    stopBidMask: !1
                                }),
                                    ""
                            }),
                                this.store.dispatch(B.modifyStopBidList({
                                    stopBidList: s
                                }))
                        }
                        ,
                        GuessMainPanelServices.prototype.ensureStopBid = function ensureStopBid(e) {
                            var t = this
                                , s = this.getStore("guessThemeData")
                                , i = this.getStore("guessGameData")
                                , r = +s.list[e].qid
                                , a = i.guessType
                                , o = this.store.getState().guessTicketData.isBoldGuess
                                , l = {
                                room_id: +this.global.get("$ROOM.room_id"),
                                quiz_id: r,
                                play_type: a,
                                money_type: o ? 2 : 1
                            };
                            Object(Ie.a)().subscribe(function (s) {
                                var i, r = s.name, a = s.value;
                                n.httpClient.post(String, "/member/quiz/close_quiz", Et((i = {},
                                    i[r] = a,
                                    i), l), zt).subscribe(function (s) {
                                    var i = s.error
                                        , r = s.msg;
                                    0 === i ? te.a.success("\u5c01\u76d8\u6210\u529f") : te.a.error(r),
                                        t.modifyStopBidMask(e, !1)
                                })
                            })
                        }
                        ,
                        GuessMainPanelServices.prototype.mergeNewData = function mergeNewData(e) {
                            var t = e
                                , s = this.getStore("guessThemeData").list.slice();
                            return t.map(function (e) {
                                var t = e.qid
                                    , i = s.find(function (e) {
                                    return +e.qid === +t
                                }) || {};
                                return Object.assign(i, e)
                            }),
                                s
                        }
                        ,
                        GuessMainPanelServices.prototype.initSocket = function initSocket() {
                            var e = this;
                            Ct.subscribe("rquiziln", function (t) {
                                e.subReceiveGuessListInit(t, 1)
                            }),
                                Ct.subscribe("rquizisn", function (t) {
                                    e.subReceiveGuessListUpdate(t)
                                }),
                                Ct.subscribe("quen", function (t) {
                                    var s = t.quel;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s)
                                }),
                                Ct.subscribe("quizprn", function (t) {
                                    var s = t.qprl;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s, !0)
                                }),
                                Ct.subscribe("erquiziln", function (t) {
                                    e.subReceiveGuessListInit(t, 2)
                                }),
                                Ct.subscribe("erquizisn", function (t) {
                                    e.subReceiveGuessListUpdate(t)
                                }),
                                Ct.subscribe("equen", function (t) {
                                    var s = t.quel;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s)
                                }),
                                Ct.subscribe("equizprn", function (t) {
                                    var s = t.qprl;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s, !0)
                                }),
                                Ct.subscribe("tkrquiziln", function (t) {
                                    e.subReceiveGuessListInit(t, 1, !0)
                                }),
                                Ct.subscribe("tkrquizisn", function (t) {
                                    e.subReceiveGuessListUpdate(t)
                                }),
                                Ct.subscribe("tkquizprn", function (t) {
                                    var s = t.qprl;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s, !0)
                                }),
                                Ct.subscribe("tkquen", function (t) {
                                    var s = t.quel;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s)
                                }),
                                Ct.subscribe("tkerquiziln", function (t) {
                                    e.subReceiveGuessListInit(t, 2, !0)
                                }),
                                Ct.subscribe("tkerquizisn", function (t) {
                                    e.subReceiveGuessListUpdate(t)
                                }),
                                Ct.subscribe("tkequizprn", function (t) {
                                    var s = t.qprl;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s, !0)
                                }),
                                Ct.subscribe("tkequen", function (t) {
                                    var s = t.quel;
                                    e.isAnchor() || "" === s || e.subReceiveGuessListUpdateSingleItem(s)
                                }),
                                Ct.subscribe("quizeefbs", function (t) {
                                    t.cd && +t.cd > 0 && e.store.dispatch(B.sendGiftReturnYw(+t.cd))
                                }),
                                Ct.subscribe("quiz_audit", function (t) {
                                    var s = e
                                        , i = [{
                                        quizeid: t.qid,
                                        status: 1 === +t.is_pass ? 1 : 2,
                                        remark: t.remark
                                    }]
                                        , r = s.mergeTitleListData(i);
                                    s.store.dispatch(ve.receiveGuessTitleList(r))
                                }),
                                Ct.subscribe("roomrktpi", function (t) {
                                    var s = e
                                        , i = t.wtu || ""
                                        , r = t.ltu || ""
                                        , n = ee.a.decode;
                                    i || r ? s.store.dispatch(B.receiveGuessPanelRank(!0)) : s.store.dispatch(B.receiveGuessPanelRank(!1));
                                    var a = i ? 1 : 0
                                        , o = a ? n(i) : {};
                                    s.store.dispatch(B.receiveGuessPanelRankTop({
                                        showTopWin: Boolean(a),
                                        topWin: {
                                            uid: o.uid || "",
                                            nk: o.nk || "",
                                            avar: o.avar || ""
                                        }
                                    }));
                                    var l = r ? 1 : 0
                                        , u = l ? n(r) : {};
                                    s.store.dispatch(B.receiveGuessPanelRankTop({
                                        showTopLoss: Boolean(l),
                                        topLoss: {
                                            uid: u.uid || "",
                                            nk: u.nk || "",
                                            avar: u.avar || ""
                                        }
                                    }))
                                })
                        }
                        ,
                        GuessMainPanelServices.prototype.mergeTitleListData = function mergeTitleListData(e) {
                            var t = e
                                , s = this.getStore("guessGameTitleListData").list.slice();
                            return t.map(function (e) {
                                var t = e.quizeid
                                    , i = s.find(function (e) {
                                    return e.quizeid === t
                                });
                                return Object.assign(i, e)
                            }),
                                s
                        }
                        ,
                        GuessMainPanelServices.prototype.setGuessType = function setGuessType(e) {
                            var t = this;
                            this.store.dispatch(B.setGuessTypeState(e)),
                                this.guessThemeItemService.switchDealerModalStatus({
                                    state: !1
                                }),
                                this.guessThemeItemService.switchBetModalStatus({
                                    state: !1
                                }),
                                this.guessThemeItemService.shutGuessResultModify(!0),
                                this.store.dispatch(B.switchAnimatedStatus(!0)),
                                setTimeout(function () {
                                    t.store.dispatch(B.switchAnimatedStatus(!1))
                                }, 400)
                        }
                        ,
                        GuessMainPanelServices.prototype.setBoldGuess = function setBoldGuess(e) {
                            Object(Je.j)(e ? 1 : 0),
                                this.store.dispatch(me.receiveBoldGuessFlag(e || !1))
                        }
                        ,
                        GuessMainPanelServices.prototype.setIsTicketStatus = function setIsTicketStatus(e) {
                            this.store.dispatch(B.setGuessIsTicketState(e))
                        }
                        ,
                        GuessMainPanelServices.prototype.subReceiveGuessListInit = function subReceiveGuessListInit(e, t, s) {
                            var i = this
                                , r = ee.a.decode
                                , n = e.qril
                                , a = +e.fbcast
                                , o = !1;
                            if ("" === n && (o = !0),
                                !o) {
                                this.setGuessType(t),
                                    this.setBoldGuess(s),
                                    this.guessShowIconTips(),
                                    this.guessDYSubService.guessGameDYSub("show_quiz_popup_ing", {
                                        type: t
                                    });
                                var l = r(n).map(function (e) {
                                    var t = e && r(e);
                                    return Object.assign({}, i.defaultObj, t || {})
                                })
                                    , u = l.map(function () {
                                    return {
                                        stopBidMask: !1
                                    }
                                });
                                i.store.dispatch(B.recieveGuessList({
                                    list: l,
                                    stopBidList: u
                                })),
                                ie.a.check() && (a ? i.store.dispatch(ze.switchCornerByluaStatus(!0)) : i.getCornerBylua(t))
                            }
                        }
                        ,
                        GuessMainPanelServices.prototype.subReceiveGuessListUpdate = function subReceiveGuessListUpdate(e) {
                            var t = this
                                , s = e.qril
                                , i = ee.a.decode
                                , r = i(s)
                                , n = this.getStore("guessGameData").identy
                                , a = +this.global.get("USER_INFO.uid")
                                , o = r.map(function (e) {
                                var t = e && i(e);
                                return Object.assign({}, t || {})
                            })
                                , l = t.mergeNewData(o);
                            l.map(function (e) {
                                return e && +e.aktp > 0 && 3 === +e.qs && !e.hasShowHotTip && (+e.fobc > 0 || +e.sobc > 0 || +e.op1to > 0 && 2 === +e.wo || +e.op2to > 0 && 1 === +e.wo) && (3 === n || 2 === n && a === +e.suid) && t.addHot({
                                    qid: e.qid,
                                    flag: !0
                                }),
                                    e
                            }),
                                t.store.dispatch(B.updateGuessList({
                                    list: l
                                }))
                        }
                        ,
                        GuessMainPanelServices.prototype.subReceiveGuessListUpdateSingleItem = function subReceiveGuessListUpdateSingleItem(e, t) {
                            var s = this
                                , i = ee.a.decode
                                , r = i(e)
                                , n = this.getStore("guessGameData").identy
                                , a = +this.global.get("USER_INFO.uid")
                                , o = r.map(function (e) {
                                var t = e && i(e);
                                return Object.assign({}, t || {})
                            });
                            t && this.guessThemeItemService.guessResultShow(o);
                            var l = o
                                , u = this.getStore("guessThemeData").list.slice();
                            u.length > 0 && l.map(function (e) {
                                var t = u.find(function (t) {
                                    return t.qid === e.qid
                                });
                                return t && +t.aktp > 0 && !t.hasShowHotTip && 0 !== +e.ec && (1 === n || 2 === n && a !== +t.suid) && s.addHot({
                                    qid: e.qid,
                                    flag: !0
                                }),
                                    t ? Object.assign(t, {
                                        ec: e.ec,
                                        hasShowHotTip: 1
                                    }) : null
                            }),
                                s.store.dispatch(B.updateGuessList({
                                    list: u
                                }))
                        }
                        ,
                        GuessMainPanelServices.prototype.addHot = function addHot(e) {
                            var t = this;
                            if (e.flag && setTimeout(function () {
                                t.addHot({
                                    qid: e.qid,
                                    flag: !1
                                })
                            }, 6e3),
                                this.getStore("guessThemeData").list.slice().find(function (t) {
                                    return +t.qid === +e.qid
                                })) {
                                var s = this.mergeNewData([{
                                    qid: e.qid,
                                    hasShowHotTip: 1,
                                    hasShowHotTipStatus: e.flag
                                }]);
                                this.store.dispatch(B.updateGuessList({
                                    list: s
                                }))
                            }
                        }
                        ,
                        GuessMainPanelServices.prototype.getCornerBylua = function getCornerBylua(e) {
                            var t = this.getStore("guessThemeData").list.slice()
                                , s = []
                                , i = this.store.getState().guessTicketData.isBoldGuess;
                            t.forEach(function (e) {
                                s.push(e.qid)
                            });
                            var r = {
                                room_id: +this.global.get("$ROOM.room_id"),
                                user_id: +this.global.get("USER_INFO.uid"),
                                quiz_list: s.join(","),
                                t: (new Date).getTime(),
                                money_type: i ? 2 : 1
                            };
                            this.guessThemeItemService.getCornerBylua({
                                guessType: e,
                                configs: r
                            })
                        }
                        ,
                        GuessMainPanelServices.prototype.receiveCornerBylua = function receiveCornerBylua(e) {
                            var t = this
                                , s = e.map(function (e) {
                                return e.currentBetAmount && setTimeout(function () {
                                    t.receiveCornerBylua([{
                                        qid: e.qid,
                                        opt: e.opt,
                                        amount: e.amount,
                                        currentBetAmount: 0
                                    }])
                                }, 500),
                                    1 === +e.opt ? Object.assign({}, {
                                        qid: e.qid,
                                        fjoin: !0,
                                        fjoinAmount: e.amount || 0,
                                        fCurrentAmount: e.currentBetAmount || 0
                                    }) : Object.assign({}, {
                                        qid: e.qid,
                                        sjoin: !0,
                                        sjoinAmount: e.amount || 0,
                                        sCurrentAmount: e.currentBetAmount || 0
                                    })
                            })
                                , i = this.mergeNewData(s);
                            this.store.dispatch(B.updateGuessList({
                                list: i
                            }))
                        }
                        ,
                        GuessMainPanelServices.prototype.receiveCornerDataBylua = function receiveCornerDataBylua(e) {
                            var t = e.map(function (e) {
                                return 1 === +e.opt && (e.bankerList.length || e.betList.length) ? Object.assign({}, {
                                    qid: e.qid,
                                    fBankerList: e.bankerList || [],
                                    fBetList: e.betList || []
                                }) : Object.assign({}, {
                                    qid: e.qid,
                                    sBankerList: e.bankerList || [],
                                    sBetList: e.betList || []
                                })
                            })
                                , s = this.mergeNewData(t);
                            this.store.dispatch(B.updateGuessList({
                                list: s
                            }))
                        }
                        ,
                        GuessMainPanelServices.prototype.getCornerPanelData = function getCornerPanelData(e, t) {
                            var s = this.store.getState().guessTicketData.isBoldGuess
                                , i = {
                                room_id: +this.global.get("$ROOM.room_id"),
                                user_id: +this.global.get("USER_INFO.uid"),
                                quiz_id: e,
                                quiz_option: t,
                                money_type: s ? 2 : 1
                            };
                            this.guessThemeItemService.getGuessCornerData(i)
                        }
                        ,
                        GuessMainPanelServices.prototype.receiveResultModifyData = function receiveResultModifyData(e) {
                            var t = this.mergeNewData([{
                                qid: e,
                                flagc: 2
                            }]);
                            this.store.dispatch(B.updateGuessList({
                                list: t
                            }))
                        }
                        ,
                        GuessMainPanelServices.prototype.modifyResultShowIframPay = function modifyResultShowIframPay() {
                            this.common.push("RoomShowIframePay")
                        }
                        ,
                        GuessMainPanelServices
                }(c.Service),
                bt = guessMainPanelServices_applyDecoratedDescriptor(ht.prototype, "store", [ct], {
                    enumerable: !0,
                    initializer: null
                }),
                gt = guessMainPanelServices_applyDecoratedDescriptor(ht.prototype, "guessThemeItemService", [mt], {
                    enumerable: !0,
                    initializer: null
                }),
                yt = guessMainPanelServices_applyDecoratedDescriptor(ht.prototype, "guessDYSubService", [pt], {
                    enumerable: !0,
                    initializer: null
                }),
                vt = guessMainPanelServices_applyDecoratedDescriptor(ht.prototype, "global", [ft], {
                    enumerable: !0,
                    initializer: null
                }),
                Gt = guessMainPanelServices_applyDecoratedDescriptor(ht.prototype, "localStorage", [_t], {
                    enumerable: !0,
                    initializer: null
                }),
                Nt = guessMainPanelServices_applyDecoratedDescriptor(ht.prototype, "common", [dt], {
                    enumerable: !0,
                    initializer: null
                }),
                ht), Lt = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ;

        function guessGameEpics_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessGameEpics_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var At = r.a.Service
            , Bt = (wt = At(It),
            Pt = At(n.DataCenter.global),
            Ot = function () {
                function GuessGameEpics() {
                    !function guessGameEpics_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessGameEpics),
                        guessGameEpics_initDefineProp(this, "guessMainPanelServices", kt, this),
                        guessGameEpics_initDefineProp(this, "global", Rt, this)
                }

                return GuessGameEpics.prototype.getRecommend = function getRecommend(e) {
                    return e.ofType("GUESSGAME_RECOMMEND_LIST").pipe(Object(l.switchMap)(function () {
                        return function getRecommendList() {
                            return n.httpClient.get(V, "/actsc/quiz/get_recommend_quiz_list")
                        }()
                    }), Object(o.map)(function (e) {
                        return 0 === e.error ? B.recieveRecommendList(e.data) : B.recieveRecommendList([])
                    }), Object(u.catchError)(function (e) {
                        return Object(a.of)({
                            type: "error",
                            payload: e
                        })
                    }))
                }
                    ,
                    GuessGameEpics.prototype.getAuthority = function getAuthority(e) {
                        var t = this;
                        return e.ofType("GET_AUTHORITY_PANEL_SHOW").pipe(Object(l.switchMap)(function (e) {
                            return n.httpClient.get(X, "/lapi/interact/quiz/quizStartAuthority", {
                                room_id: t.global.get("$ROOM.room_id"),
                                cate2_id: e.payload.cate_id,
                                uid: +t.global.get("USER_INFO.uid"),
                                is_anchor: +t.global.get("USER_INFO.uid") === +t.global.get("$ROOM.owner_uid") ? 1 : 0,
                                is_manager: +e.payload.isRoomAdmin,
                                t: (new Date).getTime()
                            })
                        }), Object(o.map)(function (e) {
                            if (t.guessMainPanelServices.modifyPanelShow(!0),
                            0 === e.error) {
                                var s = e.data && 1 === e.data.canStartQuiz ? {
                                    identy: 2
                                } : {};
                                return B.recieveAuthorityPanelShow(Lt({
                                    authorityData: e.data
                                }, s))
                            }
                            return B.recieveAuthorityPanelShow({
                                authorityData: void 0
                            })
                        }), Object(u.catchError)(function (e) {
                            return Object(a.of)({
                                type: "error",
                                payload: e
                            })
                        }))
                    }
                    ,
                    GuessGameEpics
            }(),
            kt = guessGameEpics_applyDecoratedDescriptor(Ot.prototype, "guessMainPanelServices", [wt], {
                enumerable: !0,
                initializer: null
            }),
            Rt = guessGameEpics_applyDecoratedDescriptor(Ot.prototype, "global", [Pt], {
                enumerable: !0,
                initializer: null
            }),
            Ot)
            , xt = s("eeb07");

        function guessRankActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessRankActions_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var qt, Ut, Ht, Yt, Wt, Ft, Jt, Vt, Qt, $t = "SHOW_RANK", Kt = "HIDE_RANK", Xt = "CHANGE_RANK_TYPE",
            Zt = "CHANGE_RANK_PERIOD", es = "RECEIVE_RANK_LIST", ts = "RECEIVE_EMPTY_LIST", ss = "RECEIVE_ERROR",
            is = function (e) {
                function GuessRankAction() {
                    return function guessRankActions_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessRankAction),
                        function guessRankActions_possibleConstructorReturn(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.apply(this, arguments))
                }

                return guessRankActions_inherits(GuessRankAction, e),
                    GuessRankAction.showRank = function showRank(e) {
                        return {
                            type: $t,
                            payload: e
                        }
                    }
                    ,
                    GuessRankAction.hideRank = function hideRank(e) {
                        return {
                            type: Kt,
                            payload: e
                        }
                    }
                    ,
                    GuessRankAction.getRankList = function getRankList(e) {
                        return {
                            type: "GET_RANK_LIST",
                            payload: e
                        }
                    }
                    ,
                    GuessRankAction.receiveRankList = function receiveRankList(e, t) {
                        return {
                            type: es,
                            payload: e,
                            index: t
                        }
                    }
                    ,
                    GuessRankAction.receiveEmptyList = function receiveEmptyList(e) {
                        return {
                            type: ts,
                            payload: e
                        }
                    }
                    ,
                    GuessRankAction.receiveError = function receiveError(e) {
                        return {
                            type: ss,
                            payload: e
                        }
                    }
                    ,
                    GuessRankAction.changeType = function changeType(e) {
                        return {
                            type: Xt,
                            payload: e
                        }
                    }
                    ,
                    GuessRankAction.changePeriod = function changePeriod(e) {
                        return {
                            type: Zt,
                            payload: e
                        }
                    }
                    ,
                    GuessRankAction
            }(c.Action), rs = s("54992");

        function GuessRankDto_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessRankDto_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessRankDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessRankDto_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessRankDto_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var ns = n.basicTypes.string
            , as = (qt = (0,
                n.basicTypes.mapping)({
                avatarUrl: "avatar_url",
                nobelLevel: "noble_level",
                expLevel: "exp_level"
            }),
            Object(rs.log)(Ut = qt((Ht = function (e) {
                function RankItem() {
                    var t, s;
                    !function GuessRankDto_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, RankItem);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = GuessRankDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        GuessRankDto_initDefineProp(s, "nickname", Yt, s),
                        GuessRankDto_initDefineProp(s, "avatarUrl", Wt, s),
                        GuessRankDto_initDefineProp(s, "uid", Ft, s),
                        GuessRankDto_initDefineProp(s, "amount", Jt, s),
                        GuessRankDto_initDefineProp(s, "nobelLevel", Vt, s),
                        GuessRankDto_initDefineProp(s, "expLevel", Qt, s),
                        GuessRankDto_possibleConstructorReturn(s, t)
                }

                return GuessRankDto_inherits(RankItem, e),
                    RankItem
            }(n.EntityDto),
                Yt = GuessRankDto_applyDecoratedDescriptor(Ht.prototype, "nickname", [ns], {
                    enumerable: !0,
                    initializer: null
                }),
                Wt = GuessRankDto_applyDecoratedDescriptor(Ht.prototype, "avatarUrl", [ns], {
                    enumerable: !0,
                    initializer: null
                }),
                Ft = GuessRankDto_applyDecoratedDescriptor(Ht.prototype, "uid", [ns], {
                    enumerable: !0,
                    initializer: null
                }),
                Jt = GuessRankDto_applyDecoratedDescriptor(Ht.prototype, "amount", [ns], {
                    enumerable: !0,
                    initializer: null
                }),
                Vt = GuessRankDto_applyDecoratedDescriptor(Ht.prototype, "nobelLevel", [ns], {
                    enumerable: !0,
                    initializer: null
                }),
                Qt = GuessRankDto_applyDecoratedDescriptor(Ht.prototype, "expLevel", [ns], {
                    enumerable: !0,
                    initializer: null
                }),
                Ut = Ht)) || Ut) || Ut)
            , os = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ;
        var ls = function () {
            function GuessRankEpics() {
                !function guessRankEpics_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessRankEpics)
            }

            return GuessRankEpics.prototype.getRankListData = function getRankListData(e) {
                return e.ofType("GET_RANK_LIST").pipe(Object(l.switchMap)(function (e) {
                    var t = e.payload.type + "-" + e.payload.period;
                    return Object(xt.forkJoin)(Object(a.of)(t), n.httpClient.get(as, "/lapi/interact/quiz/ranklist", os({}, e.payload)))
                }), Object(o.map)(function (e) {
                    var t = e[1];
                    return 0 === t.error ? 0 === t.data.length ? is.receiveEmptyList([]) : is.receiveRankList(t.data, e[0]) : is.receiveError(t.msg)
                }), Object(u.catchError)(function (e) {
                    return Object(a.of)({
                        type: "error",
                        payload: e
                    })
                }))
            }
                ,
                GuessRankEpics
        }();

        function guessFeedbackAction_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessFeedbackAction_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var us, cs, ms, ps = "INIT/ggaf", fs = "CHANGE_TYPE/ggaf", _s = "HIDE/ggaf", ds = "START_SUBMIT/ggaf",
            hs = "END_SUBMIT/ggaf", bs = "OPEN_DIALOG/ggaf", gs = "CLOSE_DIALOG/ggaf", ys = function (e) {
                function RoomAction() {
                    return function guessFeedbackAction_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, RoomAction),
                        function guessFeedbackAction_possibleConstructorReturn(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.apply(this, arguments))
                }

                return guessFeedbackAction_inherits(RoomAction, e),
                    RoomAction.init = function init(e) {
                        return {
                            type: ps,
                            data: e
                        }
                    }
                    ,
                    RoomAction.changeType = function changeType(e) {
                        return {
                            type: fs,
                            index: e
                        }
                    }
                    ,
                    RoomAction.hide = function hide() {
                        return {
                            type: _s
                        }
                    }
                    ,
                    RoomAction.submit = function submit(e) {
                        return {
                            type: "SUBMIT/ggaf",
                            param: e
                        }
                    }
                    ,
                    RoomAction.startSubmit = function startSubmit() {
                        return {
                            type: ds
                        }
                    }
                    ,
                    RoomAction.endSubmit = function endSubmit() {
                        return {
                            type: hs
                        }
                    }
                    ,
                    RoomAction.openDialog = function openDialog() {
                        return {
                            type: bs
                        }
                    }
                    ,
                    RoomAction.closeDialog = function closeDialog() {
                        return {
                            type: gs
                        }
                    }
                    ,
                    RoomAction
            }(c.Action);

        function guessFeedbackServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessFeedbackServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessFeedbackServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var vs, Gs = (us = (0,
            r.a.Store)(),
            cs = function (e) {
                function RoomServices() {
                    var t, s;
                    !function guessFeedbackServices_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, RoomServices);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = guessFeedbackServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        function guessFeedbackServices_initDefineProp(e, t, s, i) {
                            s && Object.defineProperty(e, t, {
                                enumerable: s.enumerable,
                                configurable: s.configurable,
                                writable: s.writable,
                                value: s.initializer ? s.initializer.call(i) : void 0
                            })
                        }(s, "store", ms, s),
                        guessFeedbackServices_possibleConstructorReturn(s, t)
                }

                return guessFeedbackServices_inherits(RoomServices, e),
                    RoomServices.prototype.init = function init() {
                        this.store.dispatch(ys.init({
                            qid: 123,
                            title: "\u5c0f\u59d0\u59d0\u7ed3\u9519\u5e10\u5462",
                            chooseOne: "\u662f",
                            chooseTwo: "\u5426",
                            oldWinOption: {
                                wo: 1,
                                wo_name: "\u662f"
                            }
                        }))
                    }
                    ,
                    RoomServices.prototype.chooseType = function chooseType(e) {
                        this.store.dispatch(ys.changeType(e))
                    }
                    ,
                    RoomServices.prototype.hideWrap = function hideWrap() {
                        this.store.dispatch(ys.hide())
                    }
                    ,
                    RoomServices.prototype.submit = function submit(e) {
                        var t = this.store.getState().guessFeedback
                            , s = t.initData
                            , i = t.typeAct
                            , r = {
                            room_id: window.$ROOM.room_id,
                            quiz_id: +s.qid,
                            old_win_option: s.oldWinOption.wo,
                            new_win_option: i.indexOf("is-choose") + 1,
                            reason: e
                        };
                        -1 !== i.indexOf("is-choose") ? e ? r.old_win_option !== r.new_win_option ? (this.store.dispatch(ys.startSubmit()),
                            this.store.dispatch(ys.submit(r))) : te.a.info("\u63d0\u4ea4\u5931\u8d25\uff01\u60a8\u63d0\u4ea4\u7684\u7ed3\u679c\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff01") : te.a.info("\u8bf7\u586b\u5199\u66f4\u6539\u539f\u56e0") : te.a.info("\u8bf7\u9009\u62e9\u66f4\u6539\u7ed3\u679c")
                    }
                    ,
                    RoomServices.prototype.endSubmit = function endSubmit() {
                        this.store.dispatch(ys.endSubmit()),
                            this.store.dispatch(ys.openDialog())
                    }
                    ,
                    RoomServices.prototype.openDialog = function openDialog() {
                        this.store.dispatch(ys.openDialog())
                    }
                    ,
                    RoomServices.prototype.closeDialog = function closeDialog() {
                        this.store.dispatch(ys.closeDialog())
                    }
                    ,
                    RoomServices
            }(c.Service),
            ms = function guessFeedbackServices_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(cs.prototype, "store", [us], {
                enumerable: !0,
                initializer: null
            }),
            cs);

        function GuessFeedbackDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessFeedbackDto_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Ns, Ss, Ts, Ds = Object(rs.log)(vs = function (e) {
            function submitStatus() {
                return function GuessFeedbackDto_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, submitStatus),
                    function GuessFeedbackDto_possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }

            return GuessFeedbackDto_inherits(submitStatus, e),
                submitStatus
        }(n.EntityDto)) || vs;
        var Es, ws, Ps, Os, ks, Rs, Cs, js, Ms, zs, Is, Ls, As, Bs = (Ns = (0,
            r.a.Service)(Gs),
            Ss = function () {
                function RoomEpics() {
                    !function guessFeedbackEpics_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, RoomEpics),
                        function guessFeedbackEpics_initDefineProp(e, t, s, i) {
                            s && Object.defineProperty(e, t, {
                                enumerable: s.enumerable,
                                configurable: s.configurable,
                                writable: s.writable,
                                value: s.initializer ? s.initializer.call(i) : void 0
                            })
                        }(this, "roomService", Ts, this)
                }

                return RoomEpics.prototype.submit = function submit(e) {
                    var t = this;
                    return e.ofType("SUBMIT/ggaf").pipe(Object(l.switchMap)(function (e) {
                        return n.httpClient.get(Ds, "/member/quiz/anchor_change_result", e.param)
                    }), Object(o.map)(function (e) {
                        return t.roomService.endSubmit(),
                            e
                    }), Object(o.map)(ys.hide))
                }
                    ,
                    RoomEpics
            }(),
            Ts = function guessFeedbackEpics_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(Ss.prototype, "roomService", [Ns], {
                enumerable: !0,
                initializer: null
            }),
            Ss);

        function GuessTitleListDto_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessTitleListDto_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessTitleListDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessTitleListDto_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessTitleListDto_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var xs, qs, Us, Hs, Ys = n.basicTypes.string, Ws = n.basicTypes.number, Fs = n.basicTypes.oneOf, Js = (Es = (0,
            n.basicTypes.mapping)({
            quizeid: "quize_id",
            quizetheme: "quize_theme",
            firstoptionname: "first_option_name",
            secondoptionname: "second_option_name",
            stoptimestamp: "stop_timestamp",
            isinvalid: "is_invalid"
        }),
            ws = Fs(Ys, Ws),
            Ps = Fs(Ys, Ws),
        Es((ks = function (e) {
            function GuessTitleListDto() {
                var t, s;
                !function GuessTitleListDto_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessTitleListDto);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessTitleListDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    GuessTitleListDto_initDefineProp(s, "quizeid", Rs, s),
                    GuessTitleListDto_initDefineProp(s, "quizetheme", Cs, s),
                    GuessTitleListDto_initDefineProp(s, "firstoptionname", js, s),
                    GuessTitleListDto_initDefineProp(s, "secondoptionname", Ms, s),
                    GuessTitleListDto_initDefineProp(s, "stoptimestamp", zs, s),
                    GuessTitleListDto_initDefineProp(s, "status", Is, s),
                    GuessTitleListDto_initDefineProp(s, "remark", Ls, s),
                    GuessTitleListDto_initDefineProp(s, "isinvalid", As, s),
                    GuessTitleListDto_possibleConstructorReturn(s, t)
            }

            return GuessTitleListDto_inherits(GuessTitleListDto, e),
                GuessTitleListDto
        }(n.EntityDto),
            Rs = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "quizeid", [Ys], {
                enumerable: !0,
                initializer: null
            }),
            Cs = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "quizetheme", [Ys], {
                enumerable: !0,
                initializer: null
            }),
            js = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "firstoptionname", [Ys], {
                enumerable: !0,
                initializer: null
            }),
            Ms = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "secondoptionname", [Ys], {
                enumerable: !0,
                initializer: null
            }),
            zs = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "stoptimestamp", [ws], {
                enumerable: !0,
                initializer: null
            }),
            Is = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "status", [Ps], {
                enumerable: !0,
                initializer: null
            }),
            Ls = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "remark", [Ys], {
                enumerable: !0,
                initializer: null
            }),
            As = GuessTitleListDto_applyDecoratedDescriptor(ks.prototype, "isinvalid", [Ws], {
                enumerable: !0,
                initializer: null
            }),
            Os = ks)) || Os);

        function guessTitleListServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessTitleListServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessTitleListServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Vs, Qs, $s, Ks, Xs, Zs, ei, ti = (xs = (0,
                r.a.Store)(),
            Object(rs.log)((Us = function (e) {
                function GuessTitleListServices() {
                    var t, s;
                    !function guessTitleListServices_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessTitleListServices);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = guessTitleListServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        function guessTitleListServices_initDefineProp(e, t, s, i) {
                            s && Object.defineProperty(e, t, {
                                enumerable: s.enumerable,
                                configurable: s.configurable,
                                writable: s.writable,
                                value: s.initializer ? s.initializer.call(i) : void 0
                            })
                        }(s, "store", Hs, s),
                        guessTitleListServices_possibleConstructorReturn(s, t)
                }

                return guessTitleListServices_inherits(GuessTitleListServices, e),
                    GuessTitleListServices.prototype.getStore = function getStore(e) {
                        return this.store.getState()[e]
                    }
                    ,
                    GuessTitleListServices.prototype.init = function init() {
                        var e = this.getStore("guessIconConfigData")
                            , t = e.isOpen
                            , s = e.isSimpleOpen
                            , i = e.defaultPlayType
                            , r = t && !s ? 1 : i;
                        this.guessStartTypeChoose(r)
                    }
                    ,
                    GuessTitleListServices.prototype.getGuessTitleListEpic = function getGuessTitleListEpic(e) {
                        this.store.dispatch(ve.getGuessTitleList(e))
                    }
                    ,
                    GuessTitleListServices.prototype.guessStartQuiz = function guessStartQuiz(e) {
                        this.store.dispatch(ve.guessStartQuiz(e))
                    }
                    ,
                    GuessTitleListServices.prototype.guessCloseTitle = function guessCloseTitle(e) {
                        this.store.dispatch(ve.guessCloseTitle(e))
                    }
                    ,
                    GuessTitleListServices.prototype.guessTitleListPopShow = function guessTitleListPopShow() {
                        this.store.dispatch(ve.guessTitleListPopShow())
                    }
                    ,
                    GuessTitleListServices.prototype.guessTitleListPopClose = function guessTitleListPopClose() {
                        this.store.dispatch(ve.guessTitleListPopClose())
                    }
                    ,
                    GuessTitleListServices.prototype.guessTitleEditPopShow = function guessTitleEditPopShow() {
                        this.store.dispatch(ve.guessTitleEditPopShow())
                    }
                    ,
                    GuessTitleListServices.prototype.guessCloseEdit = function guessCloseEdit() {
                        this.store.dispatch(ve.receiveGuessEditCommit())
                    }
                    ,
                    GuessTitleListServices.prototype.guessEditCommit = function guessEditCommit(e) {
                        this.store.dispatch(ve.guessEditCommit(e))
                    }
                    ,
                    GuessTitleListServices.prototype.guessStartTypeChoose = function guessStartTypeChoose(e) {
                        this.store.dispatch(ve.guessStartTypeChoose(e))
                    }
                    ,
                    GuessTitleListServices.prototype.resetGuessEditError = function resetGuessEditError(e) {
                        this.store.dispatch(ve.receiveGuessEditError(e))
                    }
                    ,
                    GuessTitleListServices
            }(c.Service),
                Hs = function guessTitleListServices_applyDecoratedDescriptor(e, t, s, i, r) {
                    var n = {};
                    return Object.keys(i).forEach(function (e) {
                        n[e] = i[e]
                    }),
                        n.enumerable = !!n.enumerable,
                        n.configurable = !!n.configurable,
                    ("value" in n || n.initializer) && (n.writable = !0),
                        n = s.slice().reverse().reduce(function (s, i) {
                            return i(e, t, s) || s
                        }, n),
                    r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                        n.initializer = void 0),
                    void 0 === n.initializer && (Object.defineProperty(e, t, n),
                        n = null),
                        n
                }(Us.prototype, "store", [xs], {
                    enumerable: !0,
                    initializer: null
                }),
                qs = Us)) || qs), si = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            }
            : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;

        function guessTitleListEpics_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessTitleListEpics_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var ii, ri, ni, ai, oi, li, ui, ci, mi, pi = r.a.Service,
            fi = ["/member/quiz/get_quiz_list", "/member/quiz/user_get_quiz_list"],
            _i = ["/member/quiz/add_quiz", "/member/quiz/edit_quiz", "/member/quiz/user_add_quiz", "/member/quiz/user_edit_quiz"],
            di = ["/member/quiz/start_quiz_v2", "/member/quiz/user_start_quiz"],
            hi = ["/member/quiz/del_quiz", "/member/quiz/user_del_quiz"], bi = (Vs = pi(ti),
                Qs = pi(It),
                $s = pi(We),
                Ks = function () {
                    function GuessTitleListEpics() {
                        !function guessTitleListEpics_classCallCheck(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, GuessTitleListEpics),
                            guessTitleListEpics_initDefineProp(this, "GuessTitleListService", Xs, this),
                            guessTitleListEpics_initDefineProp(this, "guessMainPanelServices", Zs, this),
                            guessTitleListEpics_initDefineProp(this, "guessDYSubService", ei, this)
                    }

                    return GuessTitleListEpics.prototype.getTitleListData = function getTitleListData(e) {
                        var t = this;
                        return e.ofType("GET_GUESS_TITLE_LIST").pipe(Object(l.switchMap)(function (e) {
                            var t = e.payload.isAnchor ? 0 : 1
                                , s = {
                                t: (new Date).getTime()
                            };
                            return e.payload.isAnchor || (s.room_id = e.payload.roomId),
                                n.httpClient.get(Js, fi[t], s)
                        }), Object(o.map)(function (e) {
                            var s = void 0;
                            return 0 === +e.error ? (s = ve.receiveGuessTitleList(e.data),
                                setTimeout(function () {
                                    t.GuessTitleListService.guessTitleListPopShow()
                                }, 0)) : (te.a.error(e.msg),
                                s = ve.receiveGuessTitleList([])),
                                s
                        }), Object(u.catchError)(function (e) {
                            return Object(a.of)({
                                type: "error",
                                payload: e
                            })
                        }))
                    }
                        ,
                        GuessTitleListEpics.prototype.guessEditCommit = function guessEditCommit(e) {
                            var t = this;
                            return e.ofType("GUESS_EDIT_COMMIT").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, o = r.payload.isAnchor ? 0 : 2;
                                o += r.payload.id ? 1 : 0;
                                var l = ((t = {})[s] = i,
                                    t.quize_theme = r.payload.title,
                                    t.first_option_name = r.payload.one,
                                    t.second_option_name = r.payload.two,
                                    t.stop_timestamp = r.payload.time,
                                    t);
                                return r.payload.id && (l.quize_id = r.payload.id),
                                r.payload.isAnchor || (l.room_id = r.payload.roomId),
                                    Object(xt.forkJoin)(Object(a.of)({
                                        roomId: r.payload.roomId,
                                        isAnchor: r.payload.isAnchor
                                    }), n.httpClient.post(String, _i[o], l, {
                                        headers: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        }
                                    }))
                            }), Object(o.map)(function (e) {
                                var s = void 0
                                    , i = e[0]
                                    , r = e[1]
                                    , n = "";
                                return r && 0 === +r.error ? (te.a.success("\u5df2\u63d0\u4ea4\u5ba1\u6838\uff0c\u8bf7\u7b49\u5f851-2\u5206\u949f~"),
                                    t.guessDYSubService.guessGameDYSub("click_quiz_add_submit", {
                                        is_anch: +i.isAnchor
                                    }),
                                    t.GuessTitleListService.getGuessTitleListEpic(i),
                                    s = ve.receiveGuessEditCommit()) : (r && r.data && "object" === si(r.data) && r.data.key && (n = r.data.key),
                                    s = ve.receiveGuessEditError({
                                        key: n,
                                        err: r.msg
                                    })),
                                    s
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics.prototype.guessStartQuiz = function guessStartQuiz(e) {
                            var t = this;
                            return e.ofType("GUESS_START_QUIZ").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, o = r.payload.isAnchor ? 0 : 1,
                                    l = ((t = {})[s] = i,
                                        t.quize_ids = r.payload.ids,
                                        t.play_type = r.payload.guessStartType,
                                        t.money_type = r.payload.guessType,
                                        t);
                                return r.payload.isAnchor || (l.room_id = r.payload.roomId),
                                    Object(xt.forkJoin)(Object(a.of)({
                                        isAnchor: r.payload.isAnchor,
                                        num: r.payload.ids.length
                                    }), n.httpClient.post(n.Empty, di[o], l, {
                                        headers: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        }
                                    }))
                            }), Object(o.map)(function (e) {
                                var s = e[0]
                                    , i = e[1];
                                return t.guessDYSubService.guessGameDYSub("click_anchorquiz_invite", {
                                    is_anch: +s.isAnchor,
                                    stat: i && 0 === +i.error ? 1 : 2,
                                    type: s.num
                                }),
                                    i && -2 === +i.error ? t.guessMainPanelServices.guessCommonTipSwitch({
                                        status: !0,
                                        msg: i.msg
                                    }) : te.a.error(i.msg),
                                    ve.guessTitleListPopClose(e)
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics.prototype.guessCloseTitle = function guessCloseTitle(e) {
                            var t = this;
                            return e.ofType("GUESS_CLOSE_TITLE").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, o = r.payload.isAnchor ? 0 : 1,
                                    l = ((t = {})[s] = i,
                                        t.quize_id = r.payload.id,
                                        t);
                                return r.payload.isAnchor || (l.room_id = r.payload.roomId),
                                    Object(xt.forkJoin)(Object(a.of)({
                                        roomId: r.payload.roomId,
                                        isAnchor: r.payload.isAnchor
                                    }), n.httpClient.post(n.Empty, hi[o], l, {
                                        headers: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        }
                                    }))
                            }), Object(o.map)(function (e) {
                                var s = e[0]
                                    , i = e[1];
                                return i && 0 === +i.error ? t.GuessTitleListService.getGuessTitleListEpic(s) : te.a.error(i.msg),
                                    ve.receiveGuessCloseTitle(e)
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics
                }(),
                Xs = guessTitleListEpics_applyDecoratedDescriptor(Ks.prototype, "GuessTitleListService", [Vs], {
                    enumerable: !0,
                    initializer: null
                }),
                Zs = guessTitleListEpics_applyDecoratedDescriptor(Ks.prototype, "guessMainPanelServices", [Qs], {
                    enumerable: !0,
                    initializer: null
                }),
                ei = guessTitleListEpics_applyDecoratedDescriptor(Ks.prototype, "guessDYSubService", [$s], {
                    enumerable: !0,
                    initializer: null
                }),
                Ks), gi = s("c8aea"), yi = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ;

        function guessThemeItemEpics_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessThemeItemEpics_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var vi, Gi, Ni, Si, Ti, Di, Ei, wi = r.a.Service, Pi = {
                283: "\u4f59\u989d\u4e0d\u8db3\uff01",
                514006: "\u5f00\u731c\u5931\u8d25\uff0c\u7ade\u731c\u4e0d\u5b58\u5728\uff01",
                514007: "\u5f00\u731c\u5931\u8d25\uff0c\u7ade\u731c\u5df2\u5c01\u76d8\uff01",
                514008: "\u5f00\u731c\u5931\u8d25\uff0c\u7ade\u731c\u5df2\u7ed3\u675f\uff01",
                514015: "\u6b63\u5728\u5f00\u731c\u4e2d\uff0c\u8bf7\u52ff\u91cd\u590d\u64cd\u4f5c!"
            }, Oi = ["", "/member/quiz/user_bet", "/member/quiz/simple_bet"], ki = {
                283: "\u4f59\u989d\u4e0d\u8db3\uff01",
                514006: "\u6295\u6ce8\u5931\u8d25\uff0c\u7ade\u731c\u4e0d\u5b58\u5728\uff01",
                514007: "\u6295\u6ce8\u5931\u8d25\uff0c\u7ade\u731c\u5df2\u5c01\u76d8\uff01",
                514008: "\u6295\u6ce8\u5931\u8d25\uff0c\u7ade\u731c\u5df2\u7ed3\u675f\uff01",
                514009: "\u6295\u6ce8\u5931\u8d25\uff0c\u5f00\u731c\u4e0d\u5b58\u5728\uff01",
                514010: "\u8d54\u7387\u53d1\u751f\u53d8\u5316\uff0c\u8bf7\u91cd\u65b0\u6295\u6ce8\uff01"
            }, Ri = ["/member/quiz/finish_quiz", "/member/quiz/user_finish_quiz"],
            Ci = ["/lapi/interact/quiz/myPlayInfo", "/lapi/interact/quiz/myJoinStatus", "/lapi/interact/quiz/simpleMyJoinStatus"],
            ji = (ii = wi(Dt),
                ri = wi(Fe.a),
                ni = wi(It),
                ai = wi(We),
                oi = function () {
                    function GuessTitleListEpics() {
                        !function guessThemeItemEpics_classCallCheck(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, GuessTitleListEpics),
                            guessThemeItemEpics_initDefineProp(this, "guessThemeItemService", li, this),
                            guessThemeItemEpics_initDefineProp(this, "CommonDataServices", ui, this),
                            guessThemeItemEpics_initDefineProp(this, "guessMainPanelServices", ci, this),
                            guessThemeItemEpics_initDefineProp(this, "guessDYSubService", mi, this)
                    }

                    return GuessTitleListEpics.prototype.guessDealerCommit = function guessDealerCommit(e) {
                        var t = this;
                        return e.ofType("GET_GUESS_DEALER").pipe(Object(gi.throttleTime)(1e3), Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                            var t, s = e.name, i = e.value, r = e.payload;
                            return Object(xt.forkJoin)(Object(a.of)({
                                buff: r.payload.buff,
                                qid: r.payload.config.quiz_id,
                                option: r.payload.config.option,
                                odd: r.payload.config.loss_per_cent,
                                cost: r.payload.config.amount,
                                money_type: r.payload.config.money_type
                            }), n.httpClient.post(String, "/member/quiz/become_banker", yi(((t = {})[s] = i,
                                t), r.payload.config), {
                                headers: {
                                    "content-type": "application/x-www-form-urlencoded"
                                }
                            }))
                        }), Object(o.map)(function (e) {
                            var s = e[0]
                                , i = e[1];
                            switch (+i.error) {
                                case 0:
                                    var r = JSON.parse(i.data);
                                    r && +r.ndsdprop > 0 ? te.a.success("\u5f00\u731c\u6210\u529f\uff0c\u83b7\u5f97" + r.ndsdprop + "\u4e2a" + s.buff) : te.a.success("\u5f00\u731c\u6210\u529f\uff01"),
                                        t.guessThemeItemService.updateGuessDeJin(r.balance),
                                        t.guessMainPanelServices.receiveCornerBylua([{
                                            qid: s.qid,
                                            opt: s.option,
                                            amount: 0
                                        }]);
                                    break;
                                case -1:
                                    te.a.error(i.msg);
                                    break;
                                default:
                                    te.a.error(Pi[i.error])
                            }
                            return t.guessDYSubService.guessGameDYSub("click_quiz_popup_submit", {
                                stat: 0 === +i.error ? 1 : 2,
                                odd: s.loss_per_cent,
                                cost: s.amount,
                                quiz_t: s.money_type
                            }),
                                -1 === +i.error || 514015 === +i.error ? ze.guessGameEmptyAction() : ze.switchDealerModalStatus({
                                    state: !1
                                })
                        }), Object(u.catchError)(function (e) {
                            return Object(a.of)({
                                type: "error",
                                payload: e
                            })
                        }))
                    }
                        ,
                        GuessTitleListEpics.prototype.guessBetCommit = function guessBetCommit(e) {
                            var t = this;
                            return e.ofType("GET_GUESS_BETTING").pipe(Object(gi.throttleTime)(1e3), Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload;
                                return Object(xt.forkJoin)(Object(a.of)({
                                    buff: r.payload.buff,
                                    qid: r.payload.config.quiz_id,
                                    option: +r.payload.direct + 1,
                                    guessType: r.payload.guessType,
                                    joinAmount: +r.payload.joinAmount,
                                    betNum: +r.payload.config.bet_amount,
                                    moneyType: r.payload.config.money_type
                                }), n.httpClient.post(String, Oi[r.payload.guessType], yi(((t = {})[s] = i,
                                    t), r.payload.config), {
                                    headers: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    }
                                }))
                            }), Object(o.map)(function (e) {
                                var s = e[0]
                                    , i = e[1]
                                    , r = ""
                                    , n = {
                                    balance: 0,
                                    bankerid: 0,
                                    loss: 0
                                };
                                switch (+i.error) {
                                    case 0:
                                        var a = JSON.parse(i.data)
                                            , o = 0;
                                        if (a) {
                                            var l = +a.ndsdprop > 0 ? "\uff0c\u83b7\u5f97" + a.ndsdprop + "\u4e2a" + s.buff : ""
                                                ,
                                                u = 1 === +s.guessType && a.real_bet_amount < s.betNum ? "" + Object(Je.g)(a.real_bet_amount) : "";
                                            (l || u) && te.a.success("\u6295\u6ce8\u6210\u529f" + u + l),
                                                o = 1 === +s.guessType ? a.real_bet_amount : s.betNum
                                        }
                                        t.guessMainPanelServices.receiveCornerBylua([{
                                            qid: s.qid,
                                            opt: s.option,
                                            amount: 1 === s.guessType ? 0 : s.joinAmount + s.betNum,
                                            currentBetAmount: +o
                                        }]),
                                            t.guessThemeItemService.updateGuessDeJin(a.balance);
                                        break;
                                    case 283:
                                        r = ki[i.error],
                                            t.guessThemeItemService.updateGuessDeJin(i.data.balance),
                                            t.guessThemeItemService.receiveBetAnimated({
                                                flag: !0,
                                                msg: r
                                            });
                                        break;
                                    case 514010:
                                        i.data && i.data.banker_id > 0 ? (r = ki[i.error],
                                            n = {
                                                balance: i.data.max_count,
                                                bankerid: i.data.banker_id,
                                                loss: i.data.loss_per_cent
                                            },
                                            t.guessThemeItemService.receiveBetAnimated({
                                                flag: !0,
                                                msg: r
                                            })) : te.a.error("\u8d44\u91d1\u6c60\u88ab\u4e70\u5149\u4e86");
                                        break;
                                    default:
                                        te.a.error(ki[i.error] || i.msg)
                                }
                                return t.guessDYSubService.guessGameDYSub("click_quiz_popup_bet", {
                                    stat: 0 === +i.error ? 1 : 2,
                                    type: s.betNum,
                                    num: s.guessType,
                                    em: i.error,
                                    quiz_t: s.moneyType
                                }),
                                    -1 === +i.error ? (te.a.error(i.msg),
                                        ze.guessGameEmptyAction()) : ze.receiveBetModalStatus({
                                        errMsg: r,
                                        errConfig: n
                                    })
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics.prototype.submitGuessResult = function submitGuessResult(e) {
                            var t = this;
                            return e.ofType("GET_GUESS_COMMIT_RESULT").pipe(Object(gi.throttleTime)(1e3), Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, o = r.payload.isAnchor ? 0 : 1,
                                    l = ((t = {})[s] = i,
                                        t.quize_data = r.payload.quize_data,
                                        t.play_type = r.payload.guessType,
                                        t.money_type = r.payload.money_type,
                                        t);
                                return r.payload.isAnchor || (l.room_id = r.payload.roomId),
                                    Object(xt.forkJoin)(Object(a.of)({
                                        isAnchor: r.payload.isAnchor
                                    }), n.httpClient.post(String, Ri[o], l, {
                                        headers: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        }
                                    }))
                            }), Object(o.map)(function (e) {
                                var s = e[0]
                                    , i = e[1];
                                switch (+i.error) {
                                    case 0:
                                        t.guessDYSubService.guessGameDYSub("click_quiz_end_resubmit", {
                                            is_anch: +s.isAnchor
                                        }),
                                            te.a.error(i.msg);
                                        break;
                                    case -2:
                                        t.guessMainPanelServices.guessCommonTipSwitch({
                                            status: !0,
                                            msg: i.msg
                                        });
                                        break;
                                    default:
                                        te.a.error(i.msg)
                                }
                                return ze.shutGuessResultCommit(!0)
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics.prototype.getMyJoinStatus = function getMyJoinStatus(e) {
                            var t = this;
                            return e.ofType("GET_GUESS_CORNER").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, a = r.payload.guessType,
                                    o = yi(((t = {})[s] = i,
                                        t), r.payload.configs);
                                return n.httpClient.get(String, Ci[a], o, {
                                    headers: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    cacheTimeout: 5e3
                                })
                            }), Object(o.map)(function (e) {
                                switch (+e.error) {
                                    case 0:
                                        var s = JSON.parse(e.data);
                                        t.guessMainPanelServices.receiveCornerBylua(s.join_list);
                                        break;
                                    default:
                                        te.a.error(e.msg)
                                }
                                return ze.switchCornerByluaStatus(!0)
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics.prototype.getMyCornerData = function getMyCornerData(e) {
                            var t = this;
                            return e.ofType("GET_GUESS_CORNER_DATA").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, o = yi(((t = {})[s] = i,
                                    t), r.payload);
                                return Object(xt.forkJoin)(Object(a.of)({
                                    qid: r.payload.quiz_id,
                                    option: r.payload.quiz_option
                                }), n.httpClient.get(String, Ci[0], o, {
                                    headers: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    cacheTimeout: 5e3
                                }))
                            }), Object(o.map)(function (e) {
                                var s = e[0]
                                    , i = e[1];
                                switch (+i.error) {
                                    case 0:
                                        var r = JSON.parse(i.data);
                                        t.guessMainPanelServices.receiveCornerDataBylua([{
                                            qid: s.qid,
                                            opt: s.option,
                                            bankerList: r.banker_list,
                                            betList: r.bet_list
                                        }])
                                }
                                return ze.switchGuessCornerData(!0)
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics.prototype.getGuessResultModify = function getGuessResultModify(e) {
                            return e.ofType("GET_GUESS_RESULT_MODIFY").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, o = ((t = {})[s] = i,
                                    t.quiz_id = r.payload.quiz_id,
                                    t.play_type = r.payload.play_type,
                                    t.old_win_option = +r.payload.old_win_option,
                                    t);
                                return Object(xt.forkJoin)(Object(a.of)({
                                    qid: r.payload.quiz_id,
                                    quizTitle: r.payload.quizTitle,
                                    optionOne: r.payload.optionOne,
                                    optionTwo: r.payload.optionTwo,
                                    oldWon: +r.payload.old_win_option
                                }), n.httpClient.post(String, "/member/quiz/query_change_cost", o, {
                                    headers: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    }
                                }))
                            }), Object(o.map)(function (e) {
                                var t = e[0]
                                    , s = e[1]
                                    , i = {};
                                switch (+s.error) {
                                    case 0:
                                        if (s.data && s.data.length > 0) {
                                            i = {
                                                qid: t.qid,
                                                quizTitle: t.quizTitle,
                                                optionOne: t.optionOne,
                                                optionTwo: t.optionTwo,
                                                oldWon: t.oldWon,
                                                optionList: [{
                                                    join_count: "--",
                                                    fish_ball_num: "--",
                                                    yuchi_num: "--"
                                                }, {
                                                    joinCount: "--",
                                                    fishBallNum: "--",
                                                    yuchiNum: "--"
                                                }, {
                                                    joinCount: "--",
                                                    fishBallNum: "--",
                                                    yuchiNum: "--"
                                                }]
                                            };
                                            for (var r = 0; r < s.data.length; r++) {
                                                var n = JSON.parse(s.data[r]);
                                                i.optionList[+n.win_option - 1] = Object.assign({}, yi({}, n))
                                            }
                                        }
                                        break;
                                    default:
                                        te.a.error(s.msg)
                                }
                                return ze.setGuessResultModify(i)
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics.prototype.sumbitGuessResultModify = function sumbitGuessResultModify(e) {
                            var t = this;
                            return e.ofType("COMMIT_GUESS_RESULT_MODIFY").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                                var t, s = e.name, i = e.value, r = e.payload, o = ((t = {})[s] = i,
                                    t.quiz_id = r.payload.quiz_id,
                                    t.play_type = r.payload.play_type,
                                    t.old_win_option = +r.payload.old_win_option,
                                    t.new_win_option = +r.payload.new_win_option,
                                    t.yuchi_num = +r.payload.yuchi_num,
                                    t);
                                return Object(xt.forkJoin)(Object(a.of)({
                                    qid: r.payload.quiz_id
                                }), n.httpClient.post(String, "/member/quiz/anchor_change_result_v2", o, {
                                    headers: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    }
                                }))
                            }), Object(o.map)(function (e) {
                                var s = e[0]
                                    , i = e[1]
                                    , r = !1;
                                switch (+i.error) {
                                    case 0:
                                        r = !0,
                                            te.a.error("\u7ed3\u679c\u4fee\u6539\u6210\u529f"),
                                            t.guessMainPanelServices.receiveResultModifyData(s.qid);
                                        break;
                                    case 514029:
                                        r = !0,
                                            te.a.error("\u9c7c\u7fc5\u4f59\u989d\u4e0d\u8db3"),
                                            t.guessMainPanelServices.modifyResultShowIframPay();
                                        break;
                                    default:
                                        te.a.error(i.msg)
                                }
                                return ze.shutGuessResultModify(r)
                            }), Object(u.catchError)(function (e) {
                                return Object(a.of)({
                                    type: "error",
                                    payload: e
                                })
                            }))
                        }
                        ,
                        GuessTitleListEpics
                }(),
                li = guessThemeItemEpics_applyDecoratedDescriptor(oi.prototype, "guessThemeItemService", [ii], {
                    enumerable: !0,
                    initializer: null
                }),
                ui = guessThemeItemEpics_applyDecoratedDescriptor(oi.prototype, "CommonDataServices", [ri], {
                    enumerable: !0,
                    initializer: null
                }),
                ci = guessThemeItemEpics_applyDecoratedDescriptor(oi.prototype, "guessMainPanelServices", [ni], {
                    enumerable: !0,
                    initializer: null
                }),
                mi = guessThemeItemEpics_applyDecoratedDescriptor(oi.prototype, "guessDYSubService", [ai], {
                    enumerable: !0,
                    initializer: null
                }),
                oi);

        function GuessTicketEpics_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessTicketEpics_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Mi, zi, Ii, Li, Ai, Bi, xi, qi, Ui, Hi, Yi, Wi, Fi, Ji = r.a.Service, Vi = (vi = Ji(Dt),
            Gi = Ji(lt),
            Ni = Ji(n.DataCenter.acj),
            Si = function () {
                function GuessTicketEpics() {
                    !function GuessTicketEpics_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessTicketEpics),
                        GuessTicketEpics_initDefineProp(this, "guessThemeItemService", Ti, this),
                        GuessTicketEpics_initDefineProp(this, "guessTicketService", Di, this),
                        GuessTicketEpics_initDefineProp(this, "acj", Ei, this)
                }

                return GuessTicketEpics.prototype.getTicketNumResultModify = function getTicketNumResultModify(e) {
                    var t = this;
                    return e.ofType("GET_GUESS_TICKET_NUM").pipe(Object(l.switchMap)(function (e) {
                        return Object(xt.forkJoin)(Object(a.of)(e.payload), Object(Ie.a)())
                    }), Object(l.switchMap)(function (e) {
                        var t, s = e[0], i = e[1], r = i.name, o = i.value, l = ((t = {})[r] = o,
                            t);
                        return Object(xt.forkJoin)(Object(a.of)(s), n.httpClient.get(String, "/lapi/interact/quiz/queryUserTicket", l, {
                            headers: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            cacheTimeout: 5e3
                        }))
                    }), Object(o.map)(function (e) {
                        var s = e[0]
                            , i = s.type
                            , r = s.index
                            , n = s.direct
                            , a = e[1]
                            , o = JSON.parse(a.data);
                        return 0 !== a.error ? (te.a.error(a.msg),
                            "dealer" === i ? ze.switchDealerModalStatus({
                                state: !1
                            }) : ze.switchBetModalStatus({
                                state: !1
                            })) : (t.guessTicketService.receiveGuessTicketNum({
                            ticketNum: o.balance || 0
                        }),
                            "dealer" === i ? ze.switchDealerModalStatus({
                                state: !0,
                                index: r
                            }) : ze.switchBetModalStatus({
                                state: !0,
                                index: r,
                                direct: n
                            }))
                    }), Object(u.catchError)(function (e) {
                        return Object(a.of)({
                            type: "error",
                            payload: e
                        })
                    }))
                }
                    ,
                    GuessTicketEpics
            }(),
            Ti = GuessTicketEpics_applyDecoratedDescriptor(Si.prototype, "guessThemeItemService", [vi], {
                enumerable: !0,
                initializer: null
            }),
            Di = GuessTicketEpics_applyDecoratedDescriptor(Si.prototype, "guessTicketService", [Gi], {
                enumerable: !0,
                initializer: null
            }),
            Ei = GuessTicketEpics_applyDecoratedDescriptor(Si.prototype, "acj", [Ni], {
                enumerable: !0,
                initializer: null
            }),
            Si);

        function GuessPermissionsDto_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessPermissionsDto_classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }

        function GuessPermissionsDto_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessPermissionsDto_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessPermissionsDto_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessPermissionsDto_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Qi = n.basicTypes.number
            , $i = n.basicTypes.mapping
            , Ki = n.basicTypes.string
            , Xi = n.basicTypes.array
            , Zi = (Mi = function (e) {
            function List() {
                var t, s;
                GuessPermissionsDto_classCallCheck(this, List);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessPermissionsDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    GuessPermissionsDto_initDefineProp(s, "nickname", zi, s),
                    GuessPermissionsDto_initDefineProp(s, "icon", Ii, s),
                    GuessPermissionsDto_possibleConstructorReturn(s, t)
            }

            return GuessPermissionsDto_inherits(List, e),
                List
        }(n.EntityDto),
            zi = GuessPermissionsDto_applyDecoratedDescriptor(Mi.prototype, "nickname", [Ki], {
                enumerable: !0,
                initializer: null
            }),
            Ii = GuessPermissionsDto_applyDecoratedDescriptor(Mi.prototype, "icon", [Ki], {
                enumerable: !0,
                initializer: null
            }),
            Mi)
            , er = {
            GuessPermissionsDto: (Li = $i({
                management: "management",
                specificpermission: "specific_permission",
                specificuser: "specific_user"
            }),
                Ai = Xi(Zi),
            Li((xi = function (e) {
                function GuessPermissionsDto() {
                    var t, s;
                    GuessPermissionsDto_classCallCheck(this, GuessPermissionsDto);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = GuessPermissionsDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        GuessPermissionsDto_initDefineProp(s, "management", qi, s),
                        GuessPermissionsDto_initDefineProp(s, "specificpermission", Ui, s),
                        GuessPermissionsDto_initDefineProp(s, "specificuser", Hi, s),
                        GuessPermissionsDto_possibleConstructorReturn(s, t)
                }

                return GuessPermissionsDto_inherits(GuessPermissionsDto, e),
                    GuessPermissionsDto
            }(n.EntityDto),
                qi = GuessPermissionsDto_applyDecoratedDescriptor(xi.prototype, "management", [Qi], {
                    enumerable: !0,
                    initializer: null
                }),
                Ui = GuessPermissionsDto_applyDecoratedDescriptor(xi.prototype, "specificpermission", [Qi], {
                    enumerable: !0,
                    initializer: null
                }),
                Hi = GuessPermissionsDto_applyDecoratedDescriptor(xi.prototype, "specificuser", [Ai], {
                    enumerable: !0,
                    initializer: null
                }),
                Bi = xi)) || Bi),
            GuessPermissionsAddUser: (Yi = function (e) {
                function GuessPermissionsAddUser() {
                    var t, s;
                    GuessPermissionsDto_classCallCheck(this, GuessPermissionsAddUser);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = GuessPermissionsDto_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        GuessPermissionsDto_initDefineProp(s, "nickname", Wi, s),
                        GuessPermissionsDto_initDefineProp(s, "icon", Fi, s),
                        GuessPermissionsDto_possibleConstructorReturn(s, t)
                }

                return GuessPermissionsDto_inherits(GuessPermissionsAddUser, e),
                    GuessPermissionsAddUser
            }(n.EntityDto),
                Wi = GuessPermissionsDto_applyDecoratedDescriptor(Yi.prototype, "nickname", [Ki], {
                    enumerable: !0,
                    initializer: null
                }),
                Fi = GuessPermissionsDto_applyDecoratedDescriptor(Yi.prototype, "icon", [Ki], {
                    enumerable: !0,
                    initializer: null
                }),
                Yi)
        };

        function guessPermissionsActions_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessPermissionsActions_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var tr, sr, ir, rr, nr = "RECEIVE_PERMISSIONS_INIT", ar = "SET_MANAHEMENT", or = "SET_SPECIFIC",
            lr = "RECEIVE_NEW_USER", ur = "GUESS_DEL_ONE_USER", cr = "GUESS_PERMISSION_SWITCH_MODAL",
            mr = function (e) {
                function GuessPermissionsAction() {
                    return function guessPermissionsActions_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessPermissionsAction),
                        function guessPermissionsActions_possibleConstructorReturn(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.apply(this, arguments))
                }

                return guessPermissionsActions_inherits(GuessPermissionsAction, e),
                    GuessPermissionsAction.getGuessPermissions = function getGuessPermissions(e) {
                        return {
                            type: "GET_PERMISSIONS_INIT",
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.receiveGuessPermissions = function receiveGuessPermissions(e) {
                        return {
                            type: nr,
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.getNewUser = function getNewUser(e) {
                        return {
                            type: "GET_NEW_USER",
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.setManagement = function setManagement(e) {
                        return {
                            type: "SET_MANAHEMENT",
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.setSpecific = function setSpecific(e) {
                        return {
                            type: "SET_SPECIFIC",
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.receiveNewUser = function receiveNewUser(e) {
                        return {
                            type: lr,
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.receiveNewUserFail = function receiveNewUserFail(e) {
                        return {
                            type: "RECEIVE_NEW_USER_FAIL",
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.receiveSubmitUser = function receiveSubmitUser(e) {
                        return {
                            type: "RECEIVE_SUBMIT_USER",
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.delOneUser = function delOneUser(e) {
                        return {
                            type: ur,
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.submitAll = function submitAll(e) {
                        return {
                            type: "GUESS_SUBMIT_PERMISSION",
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction.switchModal = function switchModal(e) {
                        return {
                            type: cr,
                            payload: e
                        }
                    }
                    ,
                    GuessPermissionsAction
            }(c.Action);

        function guessPermissionsServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessPermissionsServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessPermissionsServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var pr, fr, _r, dr, hr, br, gr, yr = (tr = (0,
            r.a.Store)(),
        Object(rs.log)((ir = function (e) {
            function GuessPermissionsServices() {
                var t, s;
                !function guessPermissionsServices_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessPermissionsServices);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = guessPermissionsServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    function guessPermissionsServices_initDefineProp(e, t, s, i) {
                        s && Object.defineProperty(e, t, {
                            enumerable: s.enumerable,
                            configurable: s.configurable,
                            writable: s.writable,
                            value: s.initializer ? s.initializer.call(i) : void 0
                        })
                    }(s, "store", rr, s),
                    guessPermissionsServices_possibleConstructorReturn(s, t)
            }

            return guessPermissionsServices_inherits(GuessPermissionsServices, e),
                GuessPermissionsServices.prototype.getGuessPermissionsEpic = function getGuessPermissionsEpic(e) {
                    this.store.dispatch(mr.getGuessPermissions(e))
                }
                ,
                GuessPermissionsServices.prototype.setManagement = function setManagement(e) {
                    this.store.dispatch(mr.setManagement(e))
                }
                ,
                GuessPermissionsServices.prototype.setSpecific = function setSpecific(e) {
                    this.store.dispatch(mr.setSpecific(e))
                }
                ,
                GuessPermissionsServices.prototype.getNewUser = function getNewUser(e) {
                    this.store.dispatch(mr.getNewUser(e))
                }
                ,
                GuessPermissionsServices.prototype.delOne = function delOne(e) {
                    this.store.dispatch(mr.delOneUser(e))
                }
                ,
                GuessPermissionsServices.prototype.submitAll = function submitAll(e) {
                    this.store.dispatch(mr.submitAll(e))
                }
                ,
                GuessPermissionsServices.prototype.switchModal = function switchModal(e) {
                    this.store.dispatch(mr.switchModal(e))
                }
                ,
                GuessPermissionsServices
        }(c.Service),
            rr = function guessPermissionsServices_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(ir.prototype, "store", [tr], {
                enumerable: !0,
                initializer: null
            }),
            sr = ir)) || sr);

        function guessPermissionsEpics_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessPermissionsEpics_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var vr = r.a.Service
            , Gr = (pr = vr(yr),
            fr = vr(We),
            _r = vr(n.DataCenter.global),
            dr = function () {
                function GuessPermissionsEpics() {
                    !function guessPermissionsEpics_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessPermissionsEpics),
                        guessPermissionsEpics_initDefineProp(this, "guessPermissionsService", hr, this),
                        guessPermissionsEpics_initDefineProp(this, "guessDYSubService", br, this),
                        guessPermissionsEpics_initDefineProp(this, "global", gr, this)
                }

                return GuessPermissionsEpics.prototype.getPermissionsData = function getPermissionsData(e) {
                    var t = this;
                    return e.ofType("GET_PERMISSIONS_INIT").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                        var s, i = e.name, r = e.value, a = e.payload;
                        return n.httpClient.post(er.GuessPermissionsDto, "/member/quiz/get_start_setting", ((s = {})[i] = r,
                            s.room_id = t.global.get("$ROOM.room_id"),
                            s.cate2_id = a.payload.cateId,
                            s), {
                            headers: {
                                "content-type": "application/x-www-form-urlencoded"
                            }
                        })
                    }), Object(o.map)(function (e) {
                        return 0 === +e.error ? mr.receiveGuessPermissions(e.data) : mr.receiveGuessPermissions({})
                    }), Object(u.catchError)(function (e) {
                        return Object(a.of)({
                            type: "error",
                            payload: e
                        })
                    }))
                }
                    ,
                    GuessPermissionsEpics.prototype.getNewUserData = function getNewUserData(e) {
                        return e.ofType("GET_NEW_USER").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                            var t, s = e.name, i = e.value, r = e.payload;
                            return n.httpClient.post(er.GuessPermissionsAddUser, "/member/quiz/add_start_user", ((t = {})[s] = i,
                                t.specific_user = r.payload,
                                t), {
                                headers: {
                                    "content-type": "application/x-www-form-urlencoded"
                                }
                            })
                        }), Object(o.map)(function (e) {
                            var t = void 0;
                            return 0 === +e.error ? t = mr.receiveNewUser(e.data) : (te.a.error(e.msg),
                                t = mr.receiveNewUserFail()),
                                t
                        }), Object(u.catchError)(function (e) {
                            return Object(a.of)({
                                type: "error",
                                payload: e
                            })
                        }))
                    }
                    ,
                    GuessPermissionsEpics.prototype.submitPermissionData = function submitPermissionData(e) {
                        var t = this;
                        return e.ofType("GUESS_SUBMIT_PERMISSION").pipe(Object(l.switchMap)(Ie.a), Object(l.switchMap)(function (e) {
                            var t, s = e.name, i = e.value, r = e.payload, o = ((t = {})[s] = i,
                                t.management = r.payload.management,
                                t.specific_permission = r.payload.specific_permission,
                                t.specific_users = r.payload.specific_users,
                                t);
                            return Object(xt.forkJoin)(Object(a.of)({
                                is_admin: r.payload.management,
                                num: r.payload.specific_permission ? r.payload.specific_users.length : 0
                            }), n.httpClient.post(n.Empty, "/member/quiz/edit_start_setting", o, {
                                headers: {
                                    "content-type": "application/x-www-form-urlencoded"
                                }
                            }))
                        }), Object(o.map)(function (e) {
                            var s = e[0]
                                , i = e[1];
                            return 0 === +i.error ? (te.a.success("\u6743\u9650\u8bbe\u7f6e\u6210\u529f"),
                                t.guessDYSubService.guessGameDYSub("click_quizset_submit", {
                                    is_admin: s.betNum,
                                    num: s.guessType
                                }),
                                t.guessPermissionsService.switchModal(!1)) : te.a.success(i.msg),
                                mr.receiveSubmitUser()
                        }), Object(u.catchError)(function (e) {
                            return Object(a.of)({
                                type: "error",
                                payload: e
                            })
                        }))
                    }
                    ,
                    GuessPermissionsEpics
            }(),
            hr = guessPermissionsEpics_applyDecoratedDescriptor(dr.prototype, "guessPermissionsService", [pr], {
                enumerable: !0,
                initializer: null
            }),
            br = guessPermissionsEpics_applyDecoratedDescriptor(dr.prototype, "guessDYSubService", [fr], {
                enumerable: !0,
                initializer: null
            }),
            gr = guessPermissionsEpics_applyDecoratedDescriptor(dr.prototype, "global", [_r], {
                enumerable: !0,
                initializer: null
            }),
            dr)
            , Nr = (0,
            r.a.combineEpicsClass)(Bt, ls, Bs, bi, ji, Gr, Vi)
            , Sr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
            }
            return e
        }
            , Tr = {
            role: !1,
            identy: 1,
            noGuessShow: 0,
            recommendList: [],
            guessType: 0,
            sendGiftReturnYw: !1,
            sendGiftReturnYwCd: 0,
            commonTipsStatus: !1,
            isBoldGuess: !1,
            guessGameName: "\u9c7c\u4e38",
            commonTopsMsg: "",
            guessThemeAnimatedStatus: !1
        };
        var Dr = {
            currentRight: 0,
            maxRight: 0,
            step: 300,
            sliderStatus: 0,
            rankStatus: 1,
            rankWidth: 0
        };
        var Er = {
            showTopWin: !1,
            topWin: {
                uid: 0,
                nk: "",
                avar: ""
            },
            showTopLoss: !0,
            topLoss: {
                uid: 0,
                nk: "",
                avar: ""
            }
        };
        var wr = {
            guessGameData: function guessGameReducers_guessGame() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tr
                    , t = arguments[1];
                switch (t.type) {
                    case D:
                        return Object.assign({}, e, {
                            role: t.payload,
                            identy: t.payload
                        });
                    case E:
                        return Object.assign({}, e, {
                            noGuessShow: t.payload
                        });
                    case w:
                        return Object.assign({}, e, {
                            recommendList: t.payload
                        });
                    case k:
                        return Sr({}, e, t.payload);
                    case C:
                        return Sr({}, e, {
                            guessType: t.payload
                        });
                    case j:
                        return Sr({}, e, {
                            isGuessTicket: t.payload
                        });
                    case M:
                        return Sr({}, e, {
                            guessThemeAnimatedStatus: t.payload
                        });
                    case z:
                        return Sr({}, e, {
                            sendGiftReturnYw: t.payload > 0,
                            sendGiftReturnYwCd: t.payload
                        });
                    case I:
                        return Sr({}, e, {
                            commonTipsStatus: t.payload.status,
                            commonTipsMsg: t.payload.msg || ""
                        });
                    default:
                        return e
                }
            },
            guessThemeData: function guessTheme() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    list: [],
                    stopBidList: []
                }
                    , t = arguments[1];
                switch (t.type) {
                    case P:
                        return Sr({}, e, t.payload);
                    case O:
                        return Object.assign({}, e, Sr({}, t.payload));
                    case R:
                        return Sr({}, e, t.payload);
                    default:
                        return e
                }
            },
            guessSliderData: function guessSlider() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dr
                    , t = arguments[1];
                switch (t.type) {
                    case G:
                        return Object.assign({}, e, {
                            currentRight: t.payload
                        });
                    case N:
                        return Object.assign({}, e, {
                            maxRight: t.payload
                        });
                    case S:
                        return Object.assign({}, e, {
                            sliderStatus: t.payload
                        });
                    case T:
                        return Object.assign({}, e, {
                            rankStatus: t.payload
                        });
                    case L:
                        return Object.assign({}, e, {
                            rankWidth: t.payload ? 94 : 0
                        });
                    default:
                        return e
                }
            },
            guessPanelRankData: function guessPanelRank() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Er
                    , t = arguments[1];
                switch (t.type) {
                    case A:
                        return Object.assign.apply(Object, [{}, e].concat(t.payload));
                    default:
                        return e
                }
            }
        }
            , Pr = {
            rankShow: 0,
            rankList: {
                "1-1": [],
                "1-2": [],
                "2-1": [],
                "2-2": []
            },
            rankType: 1,
            rankPeriod: 1,
            isEmpty: !1,
            isLoading: !0,
            errorMsg: ""
        };
        var Or = {
            GuessRankData: function GuessRankData() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pr, s = arguments[1];
                switch (s.type) {
                    case $t:
                        return Object.assign({}, t, {
                            rankShow: 1
                        });
                    case Kt:
                        return Object.assign({}, t, {
                            rankShow: 0
                        });
                    case Xt:
                        return Object.assign({}, t, {
                            rankType: s.payload,
                            rankPeriod: 1
                        });
                    case Zt:
                        return Object.assign({}, t, {
                            rankPeriod: s.payload
                        });
                    case es:
                        for (var i = s.payload, r = s.index, n = {
                            amount: "",
                            uid: "",
                            nickname: "\u865a\u4f4d\u4ee5\u5f85",
                            nobelLevel: 0,
                            expLevel: "",
                            avatarUrl: ""
                        }, a = [], o = 0; o < 10; o++) {
                            var l = i[o];
                            l ? a.push(l) : a.push(n)
                        }
                        var u = a[0];
                        a[0] = a[1],
                            a[1] = u;
                        var c = Object.assign({}, t.rankList, ((e = {})[r] = a,
                            e));
                        return Object.assign({}, t, {
                            rankList: c,
                            isLoading: !1,
                            isEmpty: !1
                        });
                    case ts:
                        return Object.assign({}, t, {
                            isEmpty: !0,
                            isLoading: !1
                        });
                    case ss:
                        return Object.assign({}, t, {
                            errorMsg: s.payload,
                            isLoading: !1
                        });
                    default:
                        return t
                }
            }
        };
        var kr = {
            guessFeedback: function guessFeedback() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    initData: null,
                    typeAct: ["", "", ""],
                    isSubmiting: !1,
                    diaLog: !1
                }
                    , t = arguments[1]
                    , s = Object.assign({}, e);
                switch (t.type) {
                    case ps:
                        return s.initData = t.data,
                            s;
                    case fs:
                        var i = ["", "", ""];
                        return i[t.index] = "is-choose",
                            s.typeAct = i,
                            s;
                    case _s:
                        return s.initData = null,
                            s;
                    case ds:
                        return s.isSubmiting = !0,
                            s;
                    case hs:
                        return s.isSubmiting = !1,
                            s;
                    case bs:
                        return s.diaLog = !0,
                            s;
                    case gs:
                        return s.diaLog = !1,
                            s;
                    default:
                        return s
                }
            }
        }
            , Rr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
            }
            return e
        }
            , Cr = {
            management: 0,
            specificpermission: 0,
            specificuser: [],
            modelStatus: !1
        };
        var jr = {
            guessPermissionsData: function guessPermissionsData() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cr
                    , t = arguments[1];
                switch (t.type) {
                    case nr:
                        return Rr({}, e, t.payload);
                    case lr:
                        return t.payload && e.specificuser.push(t.payload),
                            Object.assign({}, e, {
                                specificuser: [].concat(e.specificuser)
                            });
                    case cr:
                        return Rr({}, e, {
                            modelStatus: t.payload
                        });
                    case ar:
                        return Rr({}, e, {
                            management: t.payload
                        });
                    case or:
                        return Rr({}, e, {
                            specificpermission: t.payload
                        });
                    case ur:
                        return e.specificuser.splice(e.specificuser.findIndex(function (e) {
                            return e.nickname === t.payload
                        }), 1),
                            Object.assign({}, e, {
                                specificuser: [].concat(e.specificuser)
                            });
                    default:
                        return e
                }
            }
        }
            , Mr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
            }
            return e
        }
            , zr = {
            guessStartType: 2,
            isGuessTitleShow: !1,
            isGuessTitleEditShow: !1,
            isGuessTitleGuideShow: !1,
            delGuessTitle: null,
            editGuessTitle: {
                key: "",
                err: ""
            },
            list: []
        };
        var Ir = {
            guessGameTitleListData: function guessGameTitleListData() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zr
                    , t = arguments[1];
                switch (t.type) {
                    case ye:
                        return Mr({}, e, {
                            guessStartType: t.payload
                        });
                    case fe:
                        return Mr({}, e, {
                            isGuessTitleShow: !0
                        });
                    case _e:
                        return Mr({}, e, {
                            isGuessTitleShow: !1
                        });
                    case pe:
                        return Mr({}, e, {
                            list: t.payload
                        });
                    case be:
                        return Mr({}, e, {
                            isGuessTitleEditShow: !0
                        });
                    case he:
                        return Mr({}, e, {
                            isGuessTitleEditShow: !1
                        });
                    case de:
                        return Mr({}, e, {
                            delGuessTitle: t.payload
                        });
                    case ge:
                        return Mr({}, e, {
                            editGuessTitle: t.payload
                        });
                    default:
                        return e
                }
            }
        }
            , Lr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
            }
            return e
        }
            , Ar = {
            dealerModalStatus: !1,
            betModalStatus: !1,
            betModalData: {},
            hasGetCornerStatus: !1,
            isBoldGuess: !1,
            betAnimated: !1,
            dealerIndex: -1,
            bettingIndex: -1,
            betDirect: -1,
            betAnimatedMsg: ""
        };
        var Br = {
            resultModalStatus: !1,
            resultList: []
        };
        var xr = {
            resultShowModalStatus: !1,
            resultShowList: []
        };
        var qr = {
            modifyModalStatus: !1,
            qid: 0,
            oldWon: 0,
            quizTitle: "",
            optionOne: "",
            optionTwo: "",
            optionThree: "\u6d41\u5c40",
            optionList: []
        };
        var Ur = {
            guessThemeItemData: function guessThemeItem() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ar
                    , t = arguments[1];
                switch (t.type) {
                    case Te:
                        return Lr({}, e, {
                            dealerModalStatus: t.payload.state,
                            dealerIndex: t.payload.state ? t.payload.index : -1
                        });
                    case De:
                        return Lr({}, e, {
                            betModalStatus: t.payload.state,
                            betIndex: t.payload.state ? t.payload.index : -1,
                            betDirect: t.payload.state ? t.payload.direct : -1
                        });
                    case we:
                        return Lr({}, e, {
                            betAnimated: t.payload.flag,
                            betAnimatedMsg: t.payload.msg
                        });
                    case Ee:
                        var s = Boolean(t.payload.errMsg);
                        return Lr({}, e, {
                            betModalStatus: s,
                            betIndex: s ? e.betIndex : -1,
                            betDirect: s ? e.betDirect : -1,
                            betModalData: t.payload
                        });
                    case Pe:
                        return Lr({}, e, {
                            hasGetCornerStatus: t.payload
                        });
                    default:
                        return e
                }
            },
            guessCommitResultData: function guessThemeItemReducers_guessCommitResult() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Br
                    , t = arguments[1];
                switch (t.type) {
                    case Oe:
                        return Lr({}, e, {
                            resultModalStatus: !0,
                            resultList: t.payload
                        });
                    case ke:
                        return t.payload ? Lr({}, e, {
                            resultModalStatus: !1,
                            resultList: []
                        }) : e;
                    default:
                        return e
                }
            },
            guessResultShowData: function guessThemeItemReducers_guessResultShow() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xr
                    , t = arguments[1];
                switch (t.type) {
                    case Re:
                        return Lr({}, e, {
                            resultShowModalStatus: !0,
                            resultShowList: t.payload
                        });
                    case Ce:
                        return Lr({}, e, {
                            resultShowModalStatus: !1,
                            resultShowList: []
                        });
                    default:
                        return e
                }
            },
            guessModifyResultData: function guessThemeItemReducers_guessModifyResult() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qr
                    , t = arguments[1];
                switch (t.type) {
                    case je:
                        return Lr({}, e, {
                            modifyModalStatus: Boolean(t.payload.qid)
                        }, t.payload);
                    case Me:
                        return t.payload ? Lr({}, e, {
                            modifyModalStatus: !1,
                            qid: 0,
                            oldWon: 0,
                            quizTitle: "",
                            optionOne: "",
                            optionTwo: "",
                            optionThree: "\u6d41\u5c40",
                            optionList: []
                        }) : e;
                    default:
                        return e
                }
            }
        }
            , Hr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
            }
            return e
        }
            , Yr = {
            isBoldGuess: !1,
            ticketNum: 0,
            dealerTicketVisible: !1,
            guessGameName: "\u9c7c\u4e38",
            isOpenGuess: !1
        };
        var Wr, Fr, Jr, Vr, Qr, $r = {
            guessTicketData: function guessTicket() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yr
                    , t = arguments[1];
                switch (t.type) {
                    case oe:
                        return Hr({}, e, {
                            isBoldGuess: t.payload,
                            guessGameName: t.payload ? "\u63a2\u9669\u5238" : "\u9c7c\u4e38"
                        });
                    case ae:
                    case ue:
                        return Hr({}, e, {
                            ticketNum: t.payload.ticketNum
                        });
                    case ce:
                        return Hr({}, e, {
                            betTicketVisible: !1
                        });
                    case le:
                        return Hr({}, e, {
                            dealerTicketVisible: !1
                        });
                    default:
                        return e
                }
            }
        }, Kr = Object.assign({}, jr, Ir, wr, Or, $r, Ur, kr), Xr = s("1a22b"), Zr = s.n(Xr), en = s("447d8");

        function guessRankServices_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessRankServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessRankServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessRankServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function guessRankServices_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var tn, sn = r.a.Store, rn = r.a.Service, nn = (Wr = sn(),
            Fr = rn(n.DataCenter.global),
            Jr = function (e) {
                function GuessRankServices() {
                    var t, s;
                    !function guessRankServices_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessRankServices);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = guessRankServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        guessRankServices_initDefineProp(s, "store", Vr, s),
                        guessRankServices_initDefineProp(s, "global", Qr, s),
                        guessRankServices_possibleConstructorReturn(s, t)
                }

                return guessRankServices_inherits(GuessRankServices, e),
                    GuessRankServices.prototype.getStore = function getStore(e) {
                        return this.store.getState()[e]
                    }
                    ,
                    GuessRankServices.prototype.showRank = function showRank() {
                        this.store.dispatch(is.showRank())
                    }
                    ,
                    GuessRankServices.prototype.hideRank = function hideRank() {
                        this.store.dispatch(is.hideRank())
                    }
                    ,
                    GuessRankServices.prototype.getRankListByEpic = function getRankListByEpic(e, t) {
                        var s = this.getStore("GuessRankData");
                        this.store.dispatch(is.getRankList({
                            room_id: +this.global.get("$ROOM.room_id"),
                            type: void 0 !== e ? e : s.rankType,
                            period: void 0 !== t ? t : s.rankPeriod,
                            t: (new Date).getTime()
                        }))
                    }
                    ,
                    GuessRankServices.prototype.changeType = function changeType(e) {
                        this.store.dispatch(is.changeType(e)),
                            this.getRankListByEpic(e)
                    }
                    ,
                    GuessRankServices.prototype.changePeriod = function changePeriod(e) {
                        this.store.dispatch(is.changePeriod(e)),
                            this.getRankListByEpic(void 0, e)
                    }
                    ,
                    GuessRankServices
            }(c.Service),
            Vr = guessRankServices_applyDecoratedDescriptor(Jr.prototype, "store", [Wr], {
                enumerable: !0,
                initializer: null
            }),
            Qr = guessRankServices_applyDecoratedDescriptor(Jr.prototype, "global", [Fr], {
                enumerable: !0,
                initializer: null
            }),
            Jr), an = s("ed724"), on = (s("69fda"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessMarquee/GuessMarquee.js");

        function GuessMarquee_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessMarquee_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var ln, un, cn, mn, pn = Object(rs.log)(tn = function (e) {
            function GuessMarquee(t) {
                !function GuessMarquee_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessMarquee);
                var s = function GuessMarquee_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return s.state = {
                    position: 0,
                    clearMarquee: !1
                },
                    s.scrollNews(),
                    s
            }

            return GuessMarquee_inherits(GuessMarquee, e),
                GuessMarquee.prototype.scrollNews = function scrollNews() {
                    var e = this
                        , t = this
                        , s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                        , i = this.props.MarqueeLineHeight;
                    s >= this.props.MarqueeList.length - 1 ? s = 0 : s += 1,
                    this.timer && clearTimeout(this.timer),
                    this.state.clearMarquee || (this.timer = setTimeout(function () {
                        e.setState({
                            position: i * s
                        }),
                            t.scrollNews(s)
                    }, 5e3))
                }
                ,
                GuessMarquee.prototype.marqueeInit = function marqueeInit(e) {
                    var t = {
                        transform: "translateY(-" + this.state.position + "px)"
                    };
                    return 0 !== this.state.position && (t.transition = "transform .5s"),
                        Zr.a.createElement("div", {
                            className: "Marquee-container",
                            style: t,
                            __source: {
                                fileName: on,
                                lineNumber: 61
                            },
                            __self: this
                        }, e)
                }
                ,
                GuessMarquee.prototype.componentWillUnmount = function componentWillUnmount() {
                    this.timer && clearTimeout(this.timer),
                        this.setState({
                            clearMarquee: !0
                        })
                }
                ,
                GuessMarquee.prototype.render = function render() {
                    var e = this;
                    if (!this.props.MarqueeLineHeight || !this.props.MarqueeList || !this.props.MarqueeList.length)
                        return null;
                    var t = {
                        lineHeight: this.props.MarqueeLineHeight + "px"
                    }
                        , s = this.props.MarqueeList.map(function (s, i) {
                        return Zr.a.createElement("p", {
                            key: i,
                            style: t,
                            __source: {
                                fileName: on,
                                lineNumber: 89
                            },
                            __self: e
                        }, s)
                    });
                    return Zr.a.createElement("div", {
                        className: "GuessMarqueeBox",
                        __source: {
                            fileName: on,
                            lineNumber: 93
                        },
                        __self: this
                    }, this.marqueeInit(s))
                }
                ,
                GuessMarquee
        }(Zr.a.Component)) || tn, fn = (s("6b163"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessPermissions/Permissions.js");

        function Permissions_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Permissions_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var _n, dn, hn, bn, gn, yn, vn, Gn, Nn = (ln = (0,
            r.a.Service)(yr),
        Object(rs.log)((cn = function (e) {
            function Permissions(t) {
                var s = this;
                !function Permissions_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Permissions);
                var i = function Permissions_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return function Permissions_initDefineProp(e, t, s, i) {
                    s && Object.defineProperty(e, t, {
                        enumerable: s.enumerable,
                        configurable: s.configurable,
                        writable: s.writable,
                        value: s.initializer ? s.initializer.call(i) : void 0
                    })
                }(i, "permissionsService", mn, i),
                    i.componentWillReceiveProps = function (e) {
                        var t = e.guessPermissionsData.modelStatus;
                        i.userName && !t && (i.userName.value = "")
                    }
                    ,
                    i.ifAdminToNo = function (e) {
                        var t = e ? 0 : 1;
                        i.permissionsService.setManagement(t),
                            i.setState({
                                management: e ? 0 : 1
                            })
                    }
                    ,
                    i.ifUserToNo = function (e) {
                        var t = e ? 0 : 1;
                        i.permissionsService.setSpecific(t)
                    }
                    ,
                    i.showAboutAdmin = function (e) {
                        return Zr.a.createElement("div", {
                            className: "guessUserPermissions-admin",
                            onClick: function onClick() {
                                i.ifAdminToNo(e)
                            },
                            __source: {
                                fileName: fn,
                                lineNumber: 64
                            },
                            __self: s
                        }, e ? Zr.a.createElement("div", {
                            className: "guessUserPermissions-adminIfSure",
                            __source: {
                                fileName: fn,
                                lineNumber: 68
                            },
                            __self: s
                        }) : Zr.a.createElement("div", {
                            className: "guessUserPermissions-adminIf",
                            __source: {
                                fileName: fn,
                                lineNumber: 69
                            },
                            __self: s
                        }), Zr.a.createElement("div", {
                            className: "guessUserPermissions-name",
                            __source: {
                                fileName: fn,
                                lineNumber: 71
                            },
                            __self: s
                        }, "\u623f\u7ba1"))
                    }
                    ,
                    i.addUser = function () {
                        var e = i.state.specificuser
                            , t = i.userName.value
                            , s = !1;
                        e.length >= 8 ? te.a.error("\u6700\u591a\u53ea\u80fd\u6dfb\u52a08\u4e2a\u7528\u6237") : (e.forEach(function (e) {
                            e.nickname === t && (te.a.error("\u8be5\u7528\u6237\u5df2\u88ab\u6dfb\u52a0"),
                                s = !0)
                        }),
                        s || i.permissionsService.getNewUser(t))
                    }
                    ,
                    i.delOne = function (e) {
                        var t = [];
                        i.state.specificuser.forEach(function (s) {
                            s.nickname !== e && t.push(s)
                        }),
                            i.permissionsService.delOne(e)
                    }
                    ,
                    i.showAboutUser = function (e) {
                        return Zr.a.createElement("div", {
                            className: "guessUserPermissions-user",
                            __source: {
                                fileName: fn,
                                lineNumber: 111
                            },
                            __self: s
                        }, e ? Zr.a.createElement("div", {
                            className: "guessUserPermissions-userSet",
                            __source: {
                                fileName: fn,
                                lineNumber: 113
                            },
                            __self: s
                        }, Zr.a.createElement("div", {
                            className: "guessUserPermissions-userIfSure",
                            onClick: function onClick() {
                                i.ifUserToNo(e)
                            },
                            __source: {
                                fileName: fn,
                                lineNumber: 114
                            },
                            __self: s
                        }), Zr.a.createElement("div", {
                            className: "guessUserPermissions-name",
                            __source: {
                                fileName: fn,
                                lineNumber: 117
                            },
                            __self: s
                        }, "\u6307\u5b9a\u7528\u6237"), Zr.a.createElement("input", {
                            className: "guessUserPermissions-inputYes",
                            maxLength: "50",
                            placeholder: "\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0",
                            ref: function ref(e) {
                                i.userName = e
                            },
                            __source: {
                                fileName: fn,
                                lineNumber: 118
                            },
                            __self: s
                        }), Zr.a.createElement("div", {
                            className: "guessUserPermissions-searchYes",
                            onClick: i.addUser,
                            __source: {
                                fileName: fn,
                                lineNumber: 125
                            },
                            __self: s
                        }, "\u6dfb\u52a0")) : Zr.a.createElement("div", {
                            className: "guessUserPermissions-userSet",
                            __source: {
                                fileName: fn,
                                lineNumber: 127
                            },
                            __self: s
                        }, Zr.a.createElement("div", {
                            className: "guessUserPermissions-userIf",
                            onClick: function onClick() {
                                i.ifUserToNo(e)
                            },
                            __source: {
                                fileName: fn,
                                lineNumber: 128
                            },
                            __self: s
                        }), Zr.a.createElement("div", {
                            className: "guessUserPermissions-name",
                            __source: {
                                fileName: fn,
                                lineNumber: 131
                            },
                            __self: s
                        }, "\u6307\u5b9a\u7528\u6237"), Zr.a.createElement("input", {
                            className: "guessUserPermissions-input",
                            maxLength: "50",
                            disabled: "disabled",
                            placeholder: "\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0",
                            __source: {
                                fileName: fn,
                                lineNumber: 132
                            },
                            __self: s
                        }), Zr.a.createElement("div", {
                            className: "guessUserPermissions-search",
                            __source: {
                                fileName: fn,
                                lineNumber: 137
                            },
                            __self: s
                        }, "\u6dfb\u52a0")), i.showAboutList())
                    }
                    ,
                    i.showAboutList = function () {
                        var e = i.props.guessPermissionsData
                            , t = e.specificpermission
                            , r = e.specificuser;
                        return 0 === r.length ? Zr.a.createElement("div", {
                            className: "guessUserPermissions-list",
                            __source: {
                                fileName: fn,
                                lineNumber: 152
                            },
                            __self: s
                        }, "\u6700\u591a\u6307\u5b9a8\u4e2a\u7528\u6237\u54e6", t ? "" : Zr.a.createElement("div", {
                            className: "guessUserPermissions-cover",
                            __source: {
                                fileName: fn,
                                lineNumber: 154
                            },
                            __self: s
                        })) : Zr.a.createElement("div", {
                            className: "guessUserPermissions-list",
                            __source: {
                                fileName: fn,
                                lineNumber: 161
                            },
                            __self: s
                        }, r.map(function (e, t) {
                            return Zr.a.createElement("div", {
                                className: "guessUserPermissions-userOne",
                                key: t,
                                title: e.nickname,
                                __source: {
                                    fileName: fn,
                                    lineNumber: 164
                                },
                                __self: s
                            }, Zr.a.createElement("div", {
                                className: "guessUserPermissions-userOneClose",
                                onClick: function onClick() {
                                    i.delOne(e.nickname)
                                },
                                __source: {
                                    fileName: fn,
                                    lineNumber: 169
                                },
                                __self: s
                            }), Zr.a.createElement("img", {
                                className: "guessUserPermissions-userPic",
                                src: e.icon,
                                alt: "",
                                __source: {
                                    fileName: fn,
                                    lineNumber: 172
                                },
                                __self: s
                            }), Zr.a.createElement("div", {
                                className: "guessUserPermissions-username",
                                __source: {
                                    fileName: fn,
                                    lineNumber: 177
                                },
                                __self: s
                            }, e.nickname))
                        }), t ? "" : Zr.a.createElement("div", {
                            className: "guessUserPermissions-cover",
                            __source: {
                                fileName: fn,
                                lineNumber: 182
                            },
                            __self: s
                        }))
                    }
                    ,
                    i.submitAll = function () {
                        var e = i.props.guessPermissionsData
                            , t = e.management
                            , s = e.specificpermission
                            , r = [];
                        e.specificuser.forEach(function (e) {
                            r.push(e.nickname)
                        });
                        var n = {
                            management: t,
                            specific_permission: s,
                            specific_users: r
                        };
                        i.permissionsService.submitAll(n)
                    }
                    ,
                    i.shutModal = function () {
                        i.permissionsService.switchModal(!1)
                    }
                    ,
                    i.state = {
                        specificuser: []
                    },
                    i.oldHistoryTimer = null,
                    i.overErrTimer = null,
                    i.marqueeList = ["\u88ab\u52fe\u9009\u7684\u7528\u6237\u5c06\u53ef\u4ee5\u5728\u60a8\u7684\u76f4\u64ad\u95f4\u53d1\u8d77\u7ade\u731c,\u4e3b\u64ad\u53ef\u4ee5\u4e13\u5fc3\u76f4\u64ad\u5566", "\u7528\u6237\u53d1\u8d77\u7684\u7ade\u731c\u6b63\u5e38\u7ed3\u675f\u540e\uff0c\u60a8\u4e5f\u53ef\u4ee5\u83b7\u5f97\u62bd\u6210\u6536\u76ca\u52a0\u70ed\u5ea6", "\u82e5\u60a8\u9700\u81ea\u5df1\u53d1\u8d77\u7ade\u731c\uff0c\u53ef\u968f\u65f6\u7ed3\u675f\u7528\u6237\u7684\u7ade\u731c\uff0c\u8bf7\u63d0\u4ea4\u6b63\u786e\u7ed3\u679c", "\u8bf7\u5408\u7406\u5206\u914d\u53d1\u8d77\u6743\u9650\uff0c\u82e5\u7528\u6237\u53d1\u8d77\u7ade\u731c\u8fdd\u89c4\uff0c\u5c06\u6536\u56de\u60a8\u7684\u6743\u9650"],
                    i
            }

            return Permissions_inherits(Permissions, e),
                Permissions.prototype.renderRuleHover = function renderRuleHover() {
                    var e = this
                        , t = this.marqueeList.map(function (t, s) {
                        return Zr.a.createElement("div", {
                            key: s,
                            __source: {
                                fileName: fn,
                                lineNumber: 214
                            },
                            __self: e
                        }, Zr.a.createElement("i", {
                            className: "iconNum",
                            __source: {
                                fileName: fn,
                                lineNumber: 214
                            },
                            __self: e
                        }, s + 1), t)
                    });
                    return Zr.a.createElement("div", {
                        className: "guessUserPermissions-ruleBoxHover",
                        __source: {
                            fileName: fn,
                            lineNumber: 218
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "ruleBoxHoverTitle",
                        __source: {
                            fileName: fn,
                            lineNumber: 219
                        },
                        __self: this
                    }, "\u6743\u9650\u8bbe\u7f6e\u8bf4\u660e"), t)
                }
                ,
                Permissions.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessPermissionsData
                        , s = t.management
                        , i = t.specificpermission
                        , r = t.modelStatus
                        , n = t.specificuser;
                    return Zr.a.createElement(an.a, {
                        visible: r,
                        footer: null,
                        closable: !1,
                        mask: !0,
                        maskClosable: !0,
                        onCancel: function onCancel() {
                            return e.shutModal()
                        },
                        center: !0,
                        bodyStyle: {
                            width: "460px",
                            boxShadow: "0 0 3px rgba(0, 0, 0, .3)",
                            background: "white",
                            borderRadius: "8px",
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            marginLeft: "-250px",
                            marginTop: "-258px",
                            padding: "0 30px 0 30px",
                            boxSizing: "borderBox",
                            zIndex: 220
                        },
                        __source: {
                            fileName: fn,
                            lineNumber: 246
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btnClose",
                        onClick: function onClick() {
                            return e.shutModal()
                        },
                        __source: {
                            fileName: fn,
                            lineNumber: 256
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "guessUserPermissions-title",
                        __source: {
                            fileName: fn,
                            lineNumber: 257
                        },
                        __self: this
                    }, "\u53d1\u8d77\u7ade\u731c\u6743\u9650\u8bbe\u7f6e"), Zr.a.createElement("div", {
                        className: "guessUserPermissions-tip",
                        __source: {
                            fileName: fn,
                            lineNumber: 258
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessUserPermissions-voice",
                        __source: {
                            fileName: fn,
                            lineNumber: 259
                        },
                        __self: this
                    }), r ? Zr.a.createElement(pn, {
                        MarqueeLineHeight: "26",
                        MarqueeList: this.marqueeList,
                        __source: {
                            fileName: fn,
                            lineNumber: 260
                        },
                        __self: this
                    }) : null, this.renderRuleHover()), this.showAboutAdmin(s), this.showAboutUser(i, n), Zr.a.createElement("div", {
                        className: "guessGame--btnBox",
                        __source: {
                            fileName: fn,
                            lineNumber: 265
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM",
                        onClick: this.submitAll,
                        __source: {
                            fileName: fn,
                            lineNumber: 266
                        },
                        __self: this
                    }, "\u786e \u5b9a")))
                }
                ,
                Permissions
        }(Zr.a.Component),
            mn = function Permissions_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(cn.prototype, "permissionsService", [ln], {
                enumerable: !0,
                initializer: null
            }),
            un = cn)) || un), Sn = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessPermissionsData: e.guessPermissionsData
            }
        })(Nn), Tn = (s("f7ea5"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessResultCommit/GuessResultCommit.js");

        function GuessResultCommit_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessResultCommit_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessResultCommit_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessResultCommit_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessResultCommit_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Dn, En, wn, Pn, On, kn, Rn, Cn, jn, Mn, zn, In, Ln, An, Bn, xn, qn, Un, Hn = r.a.Service, Yn = (_n = Hn(Dt),
            dn = Hn(We),
            hn = Hn(n.DataCenter.global),
        Object(rs.log)((gn = function (e) {
            function GuessResultCommit() {
                var t, s, i = this;
                !function GuessResultCommit_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessResultCommit);
                for (var r = arguments.length, n = Array(r), a = 0; a < r; a++)
                    n[a] = arguments[a];
                return t = s = GuessResultCommit_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))),
                    GuessResultCommit_initDefineProp(s, "guessThemeItemService", yn, s),
                    GuessResultCommit_initDefineProp(s, "guessDYSubService", vn, s),
                    GuessResultCommit_initDefineProp(s, "global", Gn, s),
                    s.state = {
                        num: [0, 0, 0],
                        toSureCommit: !1
                    },
                    s.showSureCommit = function () {
                        s.setState({
                            toSureCommit: !0
                        })
                    }
                    ,
                    s.shutSureCommit = function () {
                        s.setState({
                            toSureCommit: !1
                        })
                    }
                    ,
                    s.getSureList = function (e, t) {
                        return e.map(function (e, s) {
                            var r = s
                                , n = "";
                            switch (t[r]) {
                                case 1:
                                    n = e.fon;
                                    break;
                                case 2:
                                    n = e.son;
                                    break;
                                case 3:
                                    n = "\u6d41\u5c40"
                            }
                            return Zr.a.createElement("div", {
                                className: "sureCommit-item",
                                key: r,
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 77
                                },
                                __self: i
                            }, Zr.a.createElement("span", {
                                className: "itemLeft",
                                dangerouslySetInnerHTML: {
                                    __html: e.qt
                                },
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 78
                                },
                                __self: i
                            }), Zr.a.createElement("span", {
                                className: "itemRight",
                                dangerouslySetInnerHTML: {
                                    __html: "[ " + n + " ]"
                                },
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 79
                                },
                                __self: i
                            }))
                        })
                    }
                    ,
                    s.chooseOne = function (e, t) {
                        var i = [];
                        s.state.num.forEach(function (s, r) {
                            r === e ? i.push(t) : i.push(s)
                        }),
                            s.setState({
                                num: i
                            })
                    }
                    ,
                    s.shutGuessResultCommit = function () {
                        s.setState({
                            num: [0, 0, 0]
                        }),
                            s.guessThemeItemService.shutGuessResultCommit(!0)
                    }
                    ,
                    s.guessSureCommitResult = function (e) {
                        var t = s.props.guessGameData.isBoldGuess
                            , i = s.props.guessGameData.guessType
                            , r = s.props.guessGameData.role
                            , n = s.state.num
                            , a = void 0 === n ? [] : n
                            , o = []
                            , l = s.global.get("$ROOM.room_id");
                        e.forEach(function (e, t) {
                            o.push({
                                quize_id: e.qid,
                                option_type: a[t]
                            })
                        }),
                            s.guessDYSubService.guessGameDYSub("click_quiz_end_submit", {
                                is_anch: +r
                            }),
                            s.guessThemeItemService.guessSureCommitResult({
                                guessType: i,
                                isAnchor: r,
                                quize_data: o,
                                roomId: l,
                                money_type: t ? 2 : 1
                            })
                    }
                    ,
                    s.getList = function (e) {
                        return e.map(function (e, t) {
                            var r = t
                                , n = s.state.num;
                            return Zr.a.createElement("div", {
                                className: "guessResultCommit-itemBox",
                                key: r,
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 146
                                },
                                __self: i
                            }, Zr.a.createElement("span", {
                                className: "guessResultCommit-title",
                                dangerouslySetInnerHTML: {
                                    __html: e.qt
                                },
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 147
                                },
                                __self: i
                            }), Zr.a.createElement("div", {
                                className: "guessResultCommit-answerBox",
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 148
                                },
                                __self: i
                            }, Zr.a.createElement("span", {
                                className: 1 === n[r] ? "answerOption active" : "answerOption",
                                onClick: function onClick() {
                                    s.chooseOne(r, 1)
                                },
                                dangerouslySetInnerHTML: {
                                    __html: e.fon
                                },
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 149
                                },
                                __self: i
                            }), Zr.a.createElement("span", {
                                className: 2 === n[r] ? "answerOption active" : "answerOption",
                                onClick: function onClick() {
                                    s.chooseOne(r, 2)
                                },
                                dangerouslySetInnerHTML: {
                                    __html: e.son
                                },
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 154
                                },
                                __self: i
                            }), Zr.a.createElement("span", {
                                className: 3 === n[r] ? "answerOption active" : "answerOption",
                                onClick: function onClick() {
                                    s.chooseOne(r, 3)
                                },
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 159
                                },
                                __self: i
                            }, "\u6d41\u5c40"), Zr.a.createElement("div", {
                                className: "guessResultCommit-help",
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 163
                                },
                                __self: i
                            }, "?", Zr.a.createElement("div", {
                                className: "tipBox",
                                __source: {
                                    fileName: Tn,
                                    lineNumber: 164
                                },
                                __self: i
                            }, "\u9009\u4e2d\u6d41\u5c40\u540e\uff0c\u6b64\u7ade\u731c\u65e0\u6548\uff0c\u5c06\u8fd4\u8fd8\u7528\u6237\u53c2\u4e0e\u672c\u91d1"))))
                        })
                    }
                    ,
                    GuessResultCommit_possibleConstructorReturn(s, t)
            }

            return GuessResultCommit_inherits(GuessResultCommit, e),
                GuessResultCommit.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    e.guessCommitResultData.resultModalStatus || this.setState({
                        num: [0, 0, 0],
                        toSureCommit: !1
                    })
                }
                ,
                GuessResultCommit.prototype.render = function render() {
                    var e = this
                        , t = this.state
                        , s = t.num
                        , i = t.toSureCommit
                        , r = this.props.guessCommitResultData
                        , n = r.resultModalStatus
                        , a = r.resultList
                        , o = 0;
                    return s.forEach(function (e) {
                        0 !== e && (o += 1)
                    }),
                        a.length > 0 ? Zr.a.createElement(an.a, {
                            className: ["guessResultCommit guessGameModel", n ? "is-animated" : ""].join(" "),
                            visible: n,
                            footer: null,
                            closable: !1,
                            mask: !1,
                            maskClosable: !0,
                            width: 518,
                            onCancel: this.shutGuessResultCommit,
                            center: !0,
                            bodyStyle: {},
                            __source: {
                                fileName: Tn,
                                lineNumber: 197
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGame--btnClose is-white",
                            onClick: this.shutGuessResultCommit,
                            __source: {
                                fileName: Tn,
                                lineNumber: 209
                            },
                            __self: this
                        }), Zr.a.createElement("p", {
                            className: "guessGameModel-title",
                            __source: {
                                fileName: Tn,
                                lineNumber: 210
                            },
                            __self: this
                        }, "\u63d0\u4ea4\u7ed3\u679c"), Zr.a.createElement("p", {
                            className: "guessResultCommit-submitTips",
                            __source: {
                                fileName: Tn,
                                lineNumber: 211
                            },
                            __self: this
                        }, "\u8bf7\u8c28\u614e\u63d0\u4ea4\u7ed3\u679c\uff0c\u82e5\u7ed3\u7b97\u9519\u8bef\u9700\u4fee\u6539\u7ed3\u679c\uff0c\u5c06\u6263\u9664\u60a8\u5bf9\u5e94\u6570\u989d\u9c7c\u7fc5\u3002\u82e5\u7528\u6237\u591a\u6b21\u6295\u8bc9\uff0c\u5c06\u6536\u56de\u7ade\u731c\u6743\u9650\u3002"), this.getList(a), Zr.a.createElement("div", {
                            className: "guessGame--btnBox",
                            __source: {
                                fileName: Tn,
                                lineNumber: 215
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGame--btn guessGame--btn--sizeL is-empty guessGame--btnGap",
                            onClick: this.shutGuessResultCommit,
                            __source: {
                                fileName: Tn,
                                lineNumber: 216
                            },
                            __self: this
                        }, "\u53d6 \u6d88"), +o && +o === a.length ? Zr.a.createElement("div", {
                            className: "guessGame--btn guessGame--btn--sizeL",
                            onClick: this.showSureCommit,
                            __source: {
                                fileName: Tn,
                                lineNumber: 219
                            },
                            __self: this
                        }, "\u63d0 \u4ea4") : Zr.a.createElement("div", {
                            className: "guessGame--btn guessGame--btn--sizeL is-disabled",
                            __source: {
                                fileName: Tn,
                                lineNumber: 221
                            },
                            __self: this
                        }, "\u63d0 \u4ea4")), Zr.a.createElement(an.a, {
                            className: "sureCommit",
                            visible: i && n,
                            footer: null,
                            closable: !1,
                            mask: !0,
                            maskClosable: !0,
                            onCancel: this.shutSureCommit,
                            center: !0,
                            bodyStyle: {
                                width: "420px",
                                backgroundColor: "white",
                                borderRadius: "8px",
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                marginLeft: "-210px",
                                marginTop: "-130px",
                                boxShadow: "0 0 3px rgba(0, 0, 0, .3)",
                                padding: 0,
                                zIndex: 500
                            },
                            __source: {
                                fileName: Tn,
                                lineNumber: 225
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "sureCommit-top",
                            __source: {
                                fileName: Tn,
                                lineNumber: 236
                            },
                            __self: this
                        }, "\u8bf7\u518d\u6b21\u786e\u8ba4\u7ade\u731c\u7ed3\u679c\uff01", Zr.a.createElement("div", {
                            className: "guessGame--btnClose sureCommit-close",
                            onClick: this.shutSureCommit,
                            __source: {
                                fileName: Tn,
                                lineNumber: 238
                            },
                            __self: this
                        })), Zr.a.createElement("div", {
                            className: "sureCommit-content",
                            __source: {
                                fileName: Tn,
                                lineNumber: 240
                            },
                            __self: this
                        }, this.getSureList(a, s)), Zr.a.createElement("div", {
                            className: "guessGame--btnBox",
                            __source: {
                                fileName: Tn,
                                lineNumber: 243
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGame--btn guessGame--btn--sizeM is-empty guessGame--btnGap",
                            onClick: this.shutSureCommit,
                            __source: {
                                fileName: Tn,
                                lineNumber: 244
                            },
                            __self: this
                        }, "\u53d6 \u6d88"), Zr.a.createElement("div", {
                            className: "guessGame--btn guessGame--btn--sizeM",
                            onClick: function onClick() {
                                return e.guessSureCommitResult(a)
                            },
                            __source: {
                                fileName: Tn,
                                lineNumber: 245
                            },
                            __self: this
                        }, "\u786e \u8ba4")))) : null
                }
                ,
                GuessResultCommit
        }(Zr.a.Component),
            yn = GuessResultCommit_applyDecoratedDescriptor(gn.prototype, "guessThemeItemService", [_n], {
                enumerable: !0,
                initializer: null
            }),
            vn = GuessResultCommit_applyDecoratedDescriptor(gn.prototype, "guessDYSubService", [dn], {
                enumerable: !0,
                initializer: null
            }),
            Gn = GuessResultCommit_applyDecoratedDescriptor(gn.prototype, "global", [hn], {
                enumerable: !0,
                initializer: null
            }),
            bn = gn)) || bn), Wn = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                guessTicketData: e.guessTicketData,
                guessCommitResultData: e.guessCommitResultData
            }
        })(Yn), Fn = (s("7ebdd"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessGameHeader/GuessGameHeader.js");

        function GuessGameHeader_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessGameHeader_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessGameHeader_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessGameHeader_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Jn, Vn, Qn, $n, Kn, Xn, Zn, ea, ta = r.a.Service, sa = (Dn = ta(It),
                En = ta(yr),
                wn = ta(Dt),
                Pn = ta(nn),
                On = ta(We),
                kn = ta(n.DataCenter.global),
                Rn = ta(n.DataCenter.event),
                Cn = ta(n.DataCenter.localStorage),
            Object(rs.log)((Mn = function (e) {
                function GuessGameHeader(t) {
                    !function GuessGameHeader_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessGameHeader);
                    var s = function GuessGameHeader_possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.call(this, t));
                    return GuessGameHeader_initDefineProp(s, "guessMainPanelService", zn, s),
                        GuessGameHeader_initDefineProp(s, "guessPermissonsService", In, s),
                        GuessGameHeader_initDefineProp(s, "guessThemeItemService", Ln, s),
                        GuessGameHeader_initDefineProp(s, "guessRankService", An, s),
                        GuessGameHeader_initDefineProp(s, "guessDYSubService", Bn, s),
                        GuessGameHeader_initDefineProp(s, "global", xn, s),
                        GuessGameHeader_initDefineProp(s, "event", qn, s),
                        GuessGameHeader_initDefineProp(s, "localStorage", Un, s),
                        s.showPermissions = function () {
                            var e = s.props.guessIconRoomConfigData.cate_id || "";
                            s.guessDYSubService.guessGameDYSub("click_quizset", {}),
                            e && (s.guessPermissonsService.getGuessPermissionsEpic({
                                cateId: e
                            }),
                                s.guessPermissonsService.switchModal(!0))
                        }
                        ,
                        s.showRank = function () {
                            s.guessRankService.showRank()
                        }
                        ,
                        s.showGuessGameActive = function () {
                            s.guessMainPanelService.switchGuessGameActive(!0)
                        }
                        ,
                        s.closePanel = function () {
                            s.guessMainPanelService.modifyPanelShow(!1);
                            var e = setTimeout(function () {
                                s.guessMainPanelService.oppositeStatus(),
                                    clearTimeout(e),
                                    e = null
                            }, 300)
                        }
                        ,
                        s.guessCommitResult = function () {
                            var e = s.props.guessGameData.role;
                            s.guessDYSubService.guessGameDYSub("click_anchorquiz_end", {
                                is_anch: +e,
                                type: 2
                            }),
                                s.guessThemeItemService.guessCommitResult("all")
                        }
                        ,
                        s.clickFishMall = function () {
                            s.guessDYSubService.guessGameDYSub("click_yuwanstore", {});
                            var e = s.props.guessIconConfigData.shop
                                , t = JSON.stringify({
                                room_id: s.global.get("$ROOM.room_id")
                            })
                                , i = Object(Je.a)(t)
                                , r = e.mallurl + "?share_token=" + i;
                            window.open(r)
                        }
                        ,
                        s.clickMyGuess = function () {
                            s.guessDYSubService.guessGameDYSub("click_quiz_record", {})
                        }
                        ,
                        s.clickMyHelp = function () {
                            s.guessDYSubService.guessGameDYSub("click_quiz_help", {})
                        }
                        ,
                        s.switchMarqueeNotips = function () {
                            s.setState(function (e) {
                                return {
                                    marqueeNotips: !e.marqueeNotips
                                }
                            })
                        }
                        ,
                        s.closeMarquee = function () {
                            s.state.marqueeNotips && s.localStorage.set("guessModeSimpleTips", !0),
                                s.setState({
                                    marqueeShow: !1
                                })
                        }
                        ,
                        s.state = {
                            list: [],
                            marqueeShow: !0,
                            marqueeShowWidth: !1,
                            marqueeNotips: !1
                        },
                        s.marqueeList = ["\u81ea\u52a8\u8d54\u7387\u6a21\u5f0f\u4e2d\uff0c\u8d54\u7387\u7531\u7cfb\u7edf\u5b9e\u65f6\u8ba1\u7b97", "\u7ed3\u7b97\u4ee5\u6700\u7ec8\u5c01\u76d8\u8d54\u7387\u4e3a\u51c6", "\u6295\u6ce8\u65f6\u8d54\u7387\u4ec5\u4f5c\u53c2\u8003", "\u6295\u6ce8\u6570x\u5c01\u76d8\u8d54\u7387\u5373\u662f\u6700\u7ec8\u8fd4\u8fd8\u5956\u91d1\u6570"],
                        s
                }

                return GuessGameHeader_inherits(GuessGameHeader, e),
                    GuessGameHeader.prototype.guessIsEnd = function guessIsEnd() {
                        var e = this.props.guessThemedata.list
                            , t = !0
                            , s = 0
                            , i = 0
                            , r = ""
                            , n = +this.global.get("USER_INFO.uid");
                        return e.map(function (e) {
                            +e.qs < 3 && (t = !1,
                                s += 1);
                            var a = +e.suid;
                            return r = e.sname,
                                i = n !== a ? 1 : 0,
                                e
                        }),
                            {
                                isEndFlag: t,
                                guessingNum: s,
                                isOrtherStartGuess: i,
                                sname: r
                            }
                    }
                    ,
                    GuessGameHeader.prototype.showStartGuessUser = function showStartGuessUser() {
                        var e = this.props.guessThemedata.list
                            , t = this.props.guessGameData.identy
                            , s = this.guessIsEnd()
                            , i = "";
                        return 3 === t && e.length > 0 && !s.isEndFlag && s.isOrtherStartGuess && (i = Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-startGuessUser",
                            __source: {
                                fileName: Fn,
                                lineNumber: 128
                            },
                            __self: this
                        }, Zr.a.createElement("span", {
                            className: "guessGame--ell guessUserName",
                            title: s.sname,
                            __source: {
                                fileName: Fn,
                                lineNumber: 129
                            },
                            __self: this
                        }, s.sname), "\u53d1\u8d77\u7684\u7ade\u731c")),
                            i
                    }
                    ,
                    GuessGameHeader.prototype.renderMiddleBtn = function renderMiddleBtn() {
                        var e = this
                            , t = this.props.guessThemedata.list
                            , s = this.props.guessGameData.identy
                            , i = "guessGame--btn guessGame--btn--sizeS GuessMainPanelHeader-batch"
                            , r = this.guessIsEnd()
                            , n = null;
                        return t.length > 0 && (3 === s ? n = r.isEndFlag ? Zr.a.createElement("div", {
                            className: i,
                            onClick: function onClick() {
                                return e.props.startQuiz()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 149
                            },
                            __self: this
                        }, "\u91cd\u65b0\u53d1\u8d77\u7ade\u731c") : Zr.a.createElement("div", {
                            className: i,
                            onClick: function onClick() {
                                return e.guessCommitResult()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 152
                            },
                            __self: this
                        }, "\u6279\u91cf\u7ed3\u675f") : 2 !== s || r.isOrtherStartGuess ? 2 === s && r.isEndFlag && (n = Zr.a.createElement("div", {
                            className: i,
                            onClick: function onClick() {
                                return e.props.startQuiz()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 167
                            },
                            __self: this
                        }, "\u53d1\u8d77\u7ade\u731c")) : n = r.isEndFlag ? Zr.a.createElement("div", {
                            className: i,
                            onClick: function onClick() {
                                return e.props.startQuiz()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 158
                            },
                            __self: this
                        }, "\u53d1\u8d77\u7ade\u731c") : Zr.a.createElement("div", {
                            className: i,
                            onClick: function onClick() {
                                return e.guessCommitResult()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 161
                            },
                            __self: this
                        }, "\u6279\u91cf\u7ed3\u675f")),
                            n
                    }
                    ,
                    GuessGameHeader.prototype.renderMrqueeHover = function renderMrqueeHover() {
                        var e = this
                            , t = this.marqueeList.map(function (t, s) {
                            return Zr.a.createElement("p", {
                                key: s,
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 215
                                },
                                __self: e
                            }, t)
                        });
                        return Zr.a.createElement("div", {
                            className: "guessGame--bubble bubbleTips",
                            __source: {
                                fileName: Fn,
                                lineNumber: 219
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGameArrow is-down is-left is-grayDown",
                            __source: {
                                fileName: Fn,
                                lineNumber: 220
                            },
                            __self: this
                        }), Zr.a.createElement("p", {
                            className: "title",
                            __source: {
                                fileName: Fn,
                                lineNumber: 221
                            },
                            __self: this
                        }, "\u81ea\u52a8\u8d54\u7387\u73a9\u6cd5"), t, Zr.a.createElement("div", {
                            className: ["notips", this.state.marqueeNotips ? "active" : ""].join(" "),
                            onClick: this.switchMarqueeNotips,
                            __source: {
                                fileName: Fn,
                                lineNumber: 223
                            },
                            __self: this
                        }, "\u4e0d\u518d\u63d0\u793a"))
                    }
                    ,
                    GuessGameHeader.prototype.ifShowMarquee = function ifShowMarquee() {
                        var e = this
                            , t = document.getElementById("js-player-dialog");
                        if (t) {
                            var s = t.offsetWidth;
                            s < 1e3 && this.state.marqueeShowWidth ? setTimeout(function () {
                                e.setState({
                                    marqueeShowWidth: !1
                                })
                            }, 100) : s >= 1e3 && !this.state.marqueeShowWidth && setTimeout(function () {
                                e.setState({
                                    marqueeShowWidth: !0
                                })
                            }, 100)
                        }
                    }
                    ,
                    GuessGameHeader.prototype.componentDidMount = function componentDidMount() {
                        var e = this;
                        this.ifShowMarquee(),
                            this.register = this.event.register(window, "resize").subscribe(function () {
                                e.ifShowMarquee()
                            })
                    }
                    ,
                    GuessGameHeader.prototype.componentWillUnmount = function componentWillUnmount() {
                        this.register.unsubscribe()
                    }
                    ,
                    GuessGameHeader.prototype.render = function render() {
                        var e = this
                            , t = this.props.guessGameData.role
                            , s = this.props.guessGameData.guessType
                            , i = this.props.guessTicketData.isBoldGuess
                            , r = this.props.guessIconConfigData.active_status
                            , n = (this.props.guessIconConfigData.activity_info || {}).web_entry_button || ""
                            ,
                            a = !t && 2 === s && !this.localStorage.get("guessModeSimpleTips") && this.state.marqueeShow && this.state.marqueeShowWidth
                            , o = this.props.guessPermissionsData.modelStatus
                            , l = this.props.guessThemedata.list
                            , u = l && l.length > 0
                            ,
                            c = t ? "//www.douyu.com/cms/gong/201712/25/6965.shtml" : "//www.douyu.com/cms/gong/201712/05/6829.shtml"
                            , m = this.props.guessGameData.authorityData
                            , p = void 0 === m ? {} : m;
                        return Zr.a.createElement("div", {
                            className: "GuessMainPanelHeader clearfix",
                            __source: {
                                fileName: Fn,
                                lineNumber: 332
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "GuessMainPanelHeader-panelRight",
                            __source: {
                                fileName: Fn,
                                lineNumber: 333
                            },
                            __self: this
                        }, r && n ? Zr.a.createElement("img", {
                            className: "GuessMainPanelHeader-guessActive",
                            src: n,
                            onClick: function onClick() {
                                return e.showGuessGameActive()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 336
                            },
                            __self: this
                        }) : null, Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-icon myRank",
                            onClick: function onClick() {
                                return e.showRank()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 339
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGame--bubbleIcon iconTips",
                            __source: {
                                fileName: Fn,
                                lineNumber: 340
                            },
                            __self: this
                        }, "\u6392\u884c\u699c")), Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-division",
                            __source: {
                                fileName: Fn,
                                lineNumber: 342
                            },
                            __self: this
                        }), Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-icon myShop",
                            onClick: function onClick() {
                                return e.clickFishMall()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 343
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGame--bubbleIcon iconTips",
                            __source: {
                                fileName: Fn,
                                lineNumber: 344
                            },
                            __self: this
                        }, "\u9c7c\u4e38\u5546\u57ce")), t && p.changeStart ? Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-division",
                            __source: {
                                fileName: Fn,
                                lineNumber: 346
                            },
                            __self: this
                        }) : null, t && p.changeStart ? Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-icon mySet",
                            onClick: function onClick() {
                                return e.showPermissions()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 348
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGame--bubbleIcon iconTips",
                            __source: {
                                fileName: Fn,
                                lineNumber: 349
                            },
                            __self: this
                        }, "\u53d1\u8d77\u6743\u9650\u8bbe\u7f6e")) : null, t ? null : Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-division",
                            __source: {
                                fileName: Fn,
                                lineNumber: 352
                            },
                            __self: this
                        }), t ? null : Zr.a.createElement("a", {
                            href: "/member/quiz/history?action=answer",
                            target: "_blank",
                            className: "GuessMainPanelHeader-icon myGuess",
                            onClick: function onClick() {
                                return e.clickMyGuess()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 354
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGame--bubbleIcon iconTips",
                            __source: {
                                fileName: Fn,
                                lineNumber: 358
                            },
                            __self: this
                        }, "\u6211\u7684\u7ade\u731c")), Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-division",
                            __source: {
                                fileName: Fn,
                                lineNumber: 361
                            },
                            __self: this
                        }), Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-icon myMore",
                            __source: {
                                fileName: Fn,
                                lineNumber: 362
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "foldBox",
                            __source: {
                                fileName: Fn,
                                lineNumber: 363
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: "guessGameArrow is-up is-right is-grayUp",
                            __source: {
                                fileName: Fn,
                                lineNumber: 364
                            },
                            __self: this
                        }), t ? Zr.a.createElement("p", {
                            className: "foldOption",
                            __source: {
                                fileName: Fn,
                                lineNumber: 366
                            },
                            __self: this
                        }, Zr.a.createElement("a", {
                            href: "/member/quiz/history",
                            target: "_blank",
                            className: "J-myGuess",
                            onClick: function onClick() {
                                return e.clickMyGuess()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 367
                            },
                            __self: this
                        }, Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-icon myGuess iconGap",
                            __source: {
                                fileName: Fn,
                                lineNumber: 371
                            },
                            __self: this
                        }), "\u6211\u7684\u7ade\u731c")) : null, Zr.a.createElement("p", {
                            className: "foldOption",
                            __source: {
                                fileName: Fn,
                                lineNumber: 374
                            },
                            __self: this
                        }, Zr.a.createElement("a", {
                            href: "https://kefu.douyu.com/",
                            target: "_blank",
                            __source: {
                                fileName: Fn,
                                lineNumber: 375
                            },
                            __self: this
                        }, Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-icon myContact iconGap",
                            __source: {
                                fileName: Fn,
                                lineNumber: 376
                            },
                            __self: this
                        }), "\u5728\u7ebf\u5ba2\u670d")), Zr.a.createElement("p", {
                            className: "foldOption",
                            __source: {
                                fileName: Fn,
                                lineNumber: 378
                            },
                            __self: this
                        }, Zr.a.createElement("a", {
                            href: c,
                            target: "_blank",
                            className: "J-helpBtn",
                            onClick: function onClick() {
                                return e.clickMyHelp()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 379
                            },
                            __self: this
                        }, Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-icon myHelp iconGap",
                            __source: {
                                fileName: Fn,
                                lineNumber: 383
                            },
                            __self: this
                        }), "\u73a9\u6cd5\u4ecb\u7ecd")))), Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-division GuessMainPanelHeader-showInDiyRoom",
                            __source: {
                                fileName: Fn,
                                lineNumber: 387
                            },
                            __self: this
                        }), Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-close GuessMainPanelHeader-showInDiyRoom",
                            onClick: function onClick() {
                                return e.closePanel()
                            },
                            __source: {
                                fileName: Fn,
                                lineNumber: 388
                            },
                            __self: this
                        })), Zr.a.createElement("div", {
                            className: "GuessMainPanelHeader-panelLeft",
                            __source: {
                                fileName: Fn,
                                lineNumber: 390
                            },
                            __self: this
                        }, function renderTitle() {
                            return u ? i ? Zr.a.createElement("span", {
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 305
                                },
                                __self: e
                            }, Zr.a.createElement("span", {
                                className: "GuessMainPanelHeader-boldLogo",
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 306
                                },
                                __self: e
                            }), Zr.a.createElement("span", {
                                className: "GuessMainPanelHeader-slogon",
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 307
                                },
                                __self: e
                            }, "\u63a2\u9669\u5238\u7ade\u731c")) : Zr.a.createElement("span", {
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 313
                                },
                                __self: e
                            }, Zr.a.createElement("span", {
                                className: "GuessMainPanelHeader-logo",
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 314
                                },
                                __self: e
                            }), Zr.a.createElement("span", {
                                className: "GuessMainPanelHeader-slogon",
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 315
                                },
                                __self: e
                            }, "\u9c7c\u4e38\u7ade\u731c")) : Zr.a.createElement("span", {
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 321
                                },
                                __self: e
                            }, Zr.a.createElement("span", {
                                className: "GuessMainPanelHeader-logo",
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 322
                                },
                                __self: e
                            }), Zr.a.createElement("span", {
                                className: "GuessMainPanelHeader-slogon",
                                __source: {
                                    fileName: Fn,
                                    lineNumber: 323
                                },
                                __self: e
                            }, "\u4e92\u52a8\u7ade\u731c"))
                        }(), 2 === s ? Zr.a.createElement("span", {
                            className: "GuessMainPanelHeader-guessTypeIcon",
                            __source: {
                                fileName: Fn,
                                lineNumber: 392
                            },
                            __self: this
                        }) : null, this.state.marqueeShowWidth ? this.showStartGuessUser() : null, a ? Zr.a.createElement("div", {
                            className: "GuessMainPanelHeader-simpleGuessTipBox",
                            __source: {
                                fileName: Fn,
                                lineNumber: 395
                            },
                            __self: this
                        }, Zr.a.createElement("i", {
                            className: "iconHorn",
                            __source: {
                                fileName: Fn,
                                lineNumber: 396
                            },
                            __self: this
                        }), Zr.a.createElement(pn, {
                            MarqueeLineHeight: "17",
                            MarqueeList: this.marqueeList,
                            __source: {
                                fileName: Fn,
                                lineNumber: 397
                            },
                            __self: this
                        }), Zr.a.createElement("span", {
                            className: "guessGame--btnClose tipsClose",
                            onClick: this.closeMarquee,
                            __source: {
                                fileName: Fn,
                                lineNumber: 398
                            },
                            __self: this
                        }), this.renderMrqueeHover()) : null), this.renderMiddleBtn(), o ? Zr.a.createElement(Sn, {
                            __source: {
                                fileName: Fn,
                                lineNumber: 404
                            },
                            __self: this
                        }) : null, Zr.a.createElement(Wn, {
                            __source: {
                                fileName: Fn,
                                lineNumber: 405
                            },
                            __self: this
                        }))
                    }
                    ,
                    GuessGameHeader
            }(Zr.a.Component),
                zn = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "guessMainPanelService", [Dn], {
                    enumerable: !0,
                    initializer: null
                }),
                In = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "guessPermissonsService", [En], {
                    enumerable: !0,
                    initializer: null
                }),
                Ln = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "guessThemeItemService", [wn], {
                    enumerable: !0,
                    initializer: null
                }),
                An = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "guessRankService", [Pn], {
                    enumerable: !0,
                    initializer: null
                }),
                Bn = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "guessDYSubService", [On], {
                    enumerable: !0,
                    initializer: null
                }),
                xn = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "global", [kn], {
                    enumerable: !0,
                    initializer: null
                }),
                qn = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "event", [Rn], {
                    enumerable: !0,
                    initializer: null
                }),
                Un = GuessGameHeader_applyDecoratedDescriptor(Mn.prototype, "localStorage", [Cn], {
                    enumerable: !0,
                    initializer: null
                }),
                jn = Mn)) || jn), ia = Object(en.connect)(function mapStateToProps(e) {
                return {
                    guessThemedata: e.guessThemeData,
                    guessGameData: e.guessGameData,
                    guessIconConfigData: e.guessIconConfigData,
                    guessPermissionsData: e.guessPermissionsData,
                    guessIconRoomConfigData: e.guessIconRoomConfigData,
                    guessTicketData: e.guessTicketData
                }
            })(sa), ra = s("0ddf3"), na = s.n(ra), aa = s("66b96"), oa = s.n(aa), la = s("cf0a0"), ua = s.n(la),
            ca = s("3dfd7"), ma = s.n(ca), pa = s("00779"), fa = s("29218"), _a = s.n(fa);

        function CountDown_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var da, ha, ba, ga, ya = Object(pa.addNote)("\u5012\u8ba1\u65f6")((Qn = Vn = function (e) {
            function countDown() {
                var t, s, i;
                oa()(this, countDown);
                for (var r = arguments.length, n = Array(r), a = 0; a < r; a++)
                    n[a] = arguments[a];
                return t = s = ua()(this, e.call.apply(e, [this].concat(n))),
                    s.state = {
                        day: "00",
                        hour: "00",
                        minute: "00",
                        second: "00",
                        msec: "00"
                    },
                    s.time = s.props.time,
                    s.windowBlurTime = 0,
                    s.timeRemainder = 0,
                    i = t,
                    ua()(s, i)
            }

            return ma()(countDown, e),
                countDown.prototype.componentWillMount = function componentWillMount() {
                    var e = this;
                    document.addEventListener("visibilitychange", function () {
                        !0 === document.hidden ? (clearInterval(e.timer),
                            e.windowBlurTime = (new Date).getTime(),
                            e.timeRemainder = e.time) : e.windowBlurTime && (e.time = e.timeRemainder - ((new Date).getTime() - e.windowBlurTime),
                            e.countDown())
                    }),
                        this.countDown()
                }
                ,
                countDown.prototype.componentWillUnmount = function componentWillUnmount() {
                    clearInterval(this.timer)
                }
                ,
                countDown.prototype.countDown = function countDown() {
                    var e = this
                        , t = this.props.unit
                        , s = na()({}, this.state)
                        , i = "ms" === t ? 35 : 1e3
                        , r = function cutTime() {
                        var t = na()({}, s);
                        t.day = Math.floor(e.time / 864e5),
                            t.hour = Math.floor(e.time / 36e5) - 24 * t.day,
                            t.minute = Math.floor(e.time / 6e4) - 24 * t.day * 60 - 60 * t.hour,
                            t.second = Math.floor(e.time / 1e3) - 24 * t.day * 60 * 60 - 60 * t.hour * 60 - 60 * t.minute,
                            t.msec = parseInt((Math.floor(e.time) - 24 * t.day * 60 * 60 * 1e3 - 60 * t.hour * 60 * 1e3 - 60 * t.minute * 1e3 - 1e3 * t.second) / 10, 10),
                            Object.keys(t).forEach(function (e) {
                                t[e] <= 9 && (t[e] = "0" + t[e])
                            }),
                            e.time = e.time - i,
                            e.time <= 0 ? (clearInterval(e.timer),
                                e.setState(s)) : e.setState(t)
                    };
                    this.timer = setInterval(r, i),
                        r()
                }
                ,
                countDown.prototype.render = function render() {
                    var e = this.state
                        , t = e.day
                        , s = e.hour
                        , i = e.minute
                        , r = e.second
                        , n = e.msec;
                    return Zr.a.createElement("div", {
                        __self: this
                    }, t, ",", s, ",", i, ",", r, ",", n)
                }
                ,
                countDown
        }(Zr.a.Component),
            Vn.propTypes = ($n = Object(pa.addNoteToProp)("\u5012\u8ba1\u65f6\u7cbe\u5ea6"),
                Kn = Object(pa.addNoteToProp)("\u5012\u8ba1\u65f6\u95f4\u6233"),
                CountDown_applyDecoratedDescriptor(Xn = {
                    unit: fa.string,
                    time: fa.number
                }, "unit", [$n], (Zn = (Zn = Object.getOwnPropertyDescriptor(Xn, "unit")) ? Zn.value : void 0,
                    {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        initializer: function initializer() {
                            return Zn
                        }
                    }), Xn),
                CountDown_applyDecoratedDescriptor(Xn, "time", [Kn], (ea = (ea = Object.getOwnPropertyDescriptor(Xn, "time")) ? ea.value : void 0,
                    {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        initializer: function initializer() {
                            return ea
                        }
                    }), Xn),
                Xn),
            Vn.defaultProps = {
                unit: "s",
                time: 0
            },
            Jn = Qn)) || Jn, va = (s("916f8"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessThemeItemRightBar/GuessThemeItemRightBar.js");

        function GuessThemeItemRightBar_classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }

        function GuessThemeItemRightBar_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessThemeItemRightBar_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessThemeItemRightBar_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Ga, Na, Sa, Ta, Da, Ea, wa = r.a.Service, Pa = function (e) {
            function MyCountDown() {
                return GuessThemeItemRightBar_classCallCheck(this, MyCountDown),
                    GuessThemeItemRightBar_possibleConstructorReturn(this, e.apply(this, arguments))
            }

            return GuessThemeItemRightBar_inherits(MyCountDown, e),
                MyCountDown.prototype.render = function render() {
                    var e = this.state
                        , t = e.hour
                        , s = e.minute
                        , i = e.second;
                    return Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-et",
                        __source: {
                            fileName: va,
                            lineNumber: 23
                        },
                        __self: this
                    }, +t > 0 ? t + ":" + s + ":" + i + "\u540e\u5c01\u76d8" : s + ":" + i + "\u540e\u5c01\u76d8")
                }
                ,
                MyCountDown
        }(ya), Oa = (da = wa(Dt),
        Object(rs.log)((ba = function (e) {
            function GuessThemeItemRightBar(t) {
                GuessThemeItemRightBar_classCallCheck(this, GuessThemeItemRightBar);
                var s = GuessThemeItemRightBar_possibleConstructorReturn(this, e.call(this, t));
                return function GuessThemeItemRightBar_initDefineProp(e, t, s, i) {
                    s && Object.defineProperty(e, t, {
                        enumerable: s.enumerable,
                        configurable: s.configurable,
                        writable: s.writable,
                        value: s.initializer ? s.initializer.call(i) : void 0
                    })
                }(s, "guessThemeItemService", ga, s),
                    s.getGuessResultModify = function () {
                        var e = +s.props["data-index"]
                            , t = s.props.guessGameData.guessType;
                        s.guessThemeItemService.guessModifyResult({
                            index: e,
                            guessType: t
                        })
                    }
                    ,
                    s.state = {
                        visible: !1
                    },
                    s.renderRightbarUser = s.renderRightbarUser.bind(s),
                    s.renderRightbarAnchor = s.renderRightbarAnchor.bind(s),
                    s
            }

            return GuessThemeItemRightBar_inherits(GuessThemeItemRightBar, e),
                GuessThemeItemRightBar.prototype.mathAbs = function mathAbs(e) {
                    var t = +e;
                    return Math.abs(t)
                }
                ,
                GuessThemeItemRightBar.prototype.renderRightbarUser = function renderRightbarUser() {
                    var e = +this.props["data-index"]
                        , t = this.props.guessThemeData.list
                        , s = this.props.guessGameData.guessType
                        , i = t[e]
                        , r = void 0;
                    return i ? (1 === +i.qs && 2 === s ? r = +i.et > 0 ? Zr.a.createElement(Pa, {
                        time: 1e3 * +i.et,
                        __source: {
                            fileName: va,
                            lineNumber: 64
                        },
                        __self: this
                    }) : null : 2 === +i.qs && "0" === i.scs ? r = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar",
                        __source: {
                            fileName: va,
                            lineNumber: 67
                        },
                        __self: this
                    }, "\u5df2\u5c01\u76d8") : 2 === +i.qs && "1" === i.scs ? r = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar",
                        __source: {
                            fileName: va,
                            lineNumber: 71
                        },
                        __self: this
                    }, "\u4e3b\u64ad\u610f\u5916\u4e0b\u64ad\u5c01\u76d8", Zr.a.createElement("div", {
                        className: "GuessMainPanelBoxRight-sealTips",
                        __source: {
                            fileName: va,
                            lineNumber: 72
                        },
                        __self: this
                    }, "?", Zr.a.createElement("div", {
                        className: "tipsTextBox",
                        __source: {
                            fileName: va,
                            lineNumber: 73
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "tipsText",
                        __source: {
                            fileName: va,
                            lineNumber: 74
                        },
                        __self: this
                    }, "\u8d85\u8fc75\u5206\u949f\u540e\u672a\u5f00\u64ad\u5224\u4e3a\u6d41\u5c40\uff0c", Zr.a.createElement("p", {
                        __source: {
                            fileName: va,
                            lineNumber: 74
                        },
                        __self: this
                    }, "\u5c06\u8fd4\u8fd8\u60a8\u6295\u6ce8\u672c\u91d1")), Zr.a.createElement("div", {
                        className: "tipsArrow",
                        __source: {
                            fileName: va,
                            lineNumber: 75
                        },
                        __self: this
                    })))) : 3 === +i.qs && i.ec ? r = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar",
                        __source: {
                            fileName: va,
                            lineNumber: 82
                        },
                        __self: this
                    }, +i.ec >= 0 ? "\u8d62" : "\u8f93", Object(Je.g)(this.mathAbs(+i.ec))) : 4 === +i.qs && (3 === +i.ft ? r = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar",
                        __source: {
                            fileName: va,
                            lineNumber: 87
                        },
                        __self: this
                    }, "\u4e3b\u9898\u8fdd\u89c4\u6d41\u5c40") : i.ec && 0 === +i.ec && (r = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar",
                        __source: {
                            fileName: va,
                            lineNumber: 91
                        },
                        __self: this
                    }, "\u8fd4\u8fd8\u53c2\u4e0e\u672c\u91d1"))),
                        r) : null
                }
                ,
                GuessThemeItemRightBar.prototype.renderRightbarAnchor = function renderRightbarAnchor() {
                    var e = this
                        , t = +this.props["data-index"]
                        , s = this.props.guessThemeData.list
                        , i = this.props.guessGameData.guessType
                        , r = this.props.guessTicketData.isBoldGuess
                        , n = s[t]
                        , a = "";
                    return n ? (1 === +n.qs && 2 === i ? a = +n.et > 0 ? Zr.a.createElement(Pa, {
                        time: 1e3 * +n.et,
                        __source: {
                            fileName: va,
                            lineNumber: 123
                        },
                        __self: this
                    }) : null : 2 === +n.qs ? a = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar",
                        __source: {
                            fileName: va,
                            lineNumber: 126
                        },
                        __self: this
                    }, "\u5df2\u5c01\u76d8") : (3 === +n.qs && n.wo > 0 || 4 === +n.qs) && 1 === +n.flagc && !r ? a = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar is-modify",
                        onClick: function onClick() {
                            return e.getGuessResultModify()
                        },
                        __source: {
                            fileName: va,
                            lineNumber: 132
                        },
                        __self: this
                    }, "\u4fee\u6539\u7ed3\u679c") : (3 === +n.qs && n.wo > 0 || 4 === +n.qs) && 2 === +n.flagc ? a = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar is-hasmodify",
                        __source: {
                            fileName: va,
                            lineNumber: 138
                        },
                        __self: this
                    }, "\u5df2\u4fee\u6539") : 4 === +n.qs && 3 === +n.ft && (a = Zr.a.createElement("span", {
                        className: "GuessMainPanelBoxRight-rightBar",
                        __source: {
                            fileName: va,
                            lineNumber: 142
                        },
                        __self: this
                    }, "\u4e3b\u9898\u8fdd\u89c4\u6d41\u5c40")),
                        a) : null
                }
                ,
                GuessThemeItemRightBar.prototype.render = function render() {
                    var e = this.props.guessGameData.role;
                    return Zr.a.createElement("div", {
                        className: "GuessMainPanelBoxRight is-noEndBtn",
                        __source: {
                            fileName: va,
                            lineNumber: 153
                        },
                        __self: this
                    }, e ? this.renderRightbarAnchor() : this.renderRightbarUser())
                }
                ,
                GuessThemeItemRightBar
        }(Zr.a.Component),
            ga = function GuessThemeItemRightBar_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(ba.prototype, "guessThemeItemService", [da], {
                enumerable: !0,
                initializer: null
            }),
            ha = ba)) || ha), ka = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessThemeData: e.guessThemeData,
                guessGameData: e.guessGameData,
                guessTicketData: e.guessTicketData
            }
        })(Oa), Ra = s("f2b8b"), Ca = (s("4769a"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessThemeItemPrice/GuessThemeItemPrice.js");

        function GuessThemeItemPrice_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessThemeItemPrice_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessThemeItemPrice_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessThemeItemPrice_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var ja, Ma, za, Ia, La = r.a.Service, Aa = (Ga = La(It),
            Na = La(We),
        Object(rs.log)((Ta = function (e) {
            function GuessThemeItemPrice(t) {
                !function GuessThemeItemPrice_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessThemeItemPrice);
                var s = function GuessThemeItemPrice_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessThemeItemPrice_initDefineProp(s, "guessMainPanelServices", Da, s),
                    GuessThemeItemPrice_initDefineProp(s, "guessDYSubService", Ea, s),
                    s.bettingClick = function (e) {
                        if (e.stopPropagation(),
                            !ie.a.check())
                            return ie.a.show();
                        if (!s.props.guessThemeItemData.hasGetCornerStatus)
                            return null;
                        var t = s.props.guessGameData.role
                            , i = +e.currentTarget.getAttribute("data-qs") || 2
                            , r = +e.currentTarget.getAttribute("data-balance") || 0
                            , n = e.currentTarget.className.indexOf("is-waitGuess") >= 0 ? 1 : 0
                            , a = s.props.guessGameData.guessType
                            , o = +s.props["data-direct"];
                        return !t && n && s.showWaitGuessAnimation(),
                            i > 1 || t ? null : 1 !== a || !n && 0 !== r ? (s.guessDYSubService.guessGameDYSub("click_quiz_popup_choice", {
                                type: a
                            }),
                                s.props.showBet(o),
                                null) : null
                    }
                    ,
                    s.handleMouserOver = function () {
                        s.cornerTimer = setTimeout(function () {
                            s.getGuessCornerData(),
                                s.setState({
                                    showCorner: !0
                                }),
                                s.guessDYSubService.guessGameDYSub("show_quiz_realtime_record", {})
                        }, 300)
                    }
                    ,
                    s.handleMouseOut = function () {
                        clearTimeout(s.cornerTimer),
                            s.cornerTimer = setTimeout(function () {
                                s.setState({
                                    showCorner: !1
                                })
                            }, 300)
                    }
                    ,
                    s.panelMouserOver = function () {
                        clearTimeout(s.cornerTimer),
                            s.setState({
                                showCorner: !0
                            })
                    }
                    ,
                    s.panelMouseOut = function () {
                        s.setState({
                            showCorner: !1
                        })
                    }
                    ,
                    s.handleCornerClick = function (e) {
                        e.stopPropagation()
                    }
                    ,
                    s.getGuessCornerData = function () {
                        var e = s.props.guessThemeData.list
                            , t = +s.props["data-direct"]
                            , i = e[+s.props["data-index"]];
                        i && s.guessMainPanelServices.getCornerPanelData(i.qid, t + 1)
                    }
                    ,
                    s.state = {
                        showWaitGuessTip: !1,
                        showCorner: !1
                    },
                    s.quizSetting = s.props.guessIconConfigData.quiz_setting || {},
                    s.rate = s.quizSetting.divided_rate,
                    s.aktp = 0,
                    s.cornerTimer = null,
                    s
            }

            return GuessThemeItemPrice_inherits(GuessThemeItemPrice, e),
                GuessThemeItemPrice.prototype.calcSilver = function calcSilver(e, t) {
                    return Object(Je.c)(e, t, 100 - (this.aktp + this.systp))
                }
                ,
                GuessThemeItemPrice.prototype.getGuessItemClass = function getGuessItemClass(e, t) {
                    var s = this.props.guessGameData.guessType
                        , i = this.props.guessThemeData.list[e];
                    if (!i)
                        return null;
                    var r = 0 === t ? "is-left" : "is-right"
                        , n = 3 === +i.qs && +i.wo === [2, 1][t] || 4 === +i.qs ? "is-disabled" : ""
                        , a = +i.qs > 1 ? "is-closed" : "";
                    if (1 === s) {
                        var o = 1 !== +i.qs || 0 !== +i.folpc && i.folpc && 0 !== +i.fbmc && i.fbmc ? "" : "is-waitGuess"
                            ,
                            l = 1 !== +i.qs || 0 !== +i.solpc && i.solpc && 0 !== +i.sbmc && i.sbmc ? "" : "is-waitGuess";
                        return ["GuessContItem", r, 0 === t ? o : l, a, n].join(" ")
                    }
                    return ["GuessContItem", r, a, n].join(" ")
                }
                ,
                GuessThemeItemPrice.prototype.getGuessItemData = function getGuessItemData(e, t) {
                    var s = this.props.guessGameData.guessType
                        , i = this.props.guessThemeData.list[e];
                    return i ? 1 === s ? {
                        loss: 0 === t ? +i.folpc : i.solpc,
                        bankerid: 0 === t ? +i.fbid : +i.sbid,
                        balance: 0 === t ? +i.fbmc : +i.sbmc,
                        optionTitle: 0 === t ? i.fon : i.son,
                        betAmount: 0 === t ? i.fCurrentAmount : i.sCurrentAmount,
                        qs: +i.qs,
                        fjoin: i.fjoin || !1,
                        fjoinAmount: 0,
                        sjoin: i.sjoin || !1,
                        sjoinAmount: 0
                    } : 2 === s ? {
                        loss: 0 === t ? +i.op1pr : i.op2pr,
                        bankerid: 0 === t ? +i.fbid : +i.sbid,
                        balance: 0 === t ? +i.fbmc : +i.sbmc,
                        optionTitle: 0 === t ? i.fon : i.son,
                        betAmount: 0 === t ? i.fCurrentAmount : i.sCurrentAmount,
                        qs: +i.qs,
                        fjoin: i.fjoin || !1,
                        fjoinAmount: +i.fjoinAmount || 0,
                        sjoin: i.sjoin || !1,
                        sjoinAmount: +i.sjoinAmount || 0
                    } : {} : {}
                }
                ,
                GuessThemeItemPrice.prototype.getGuessItemContent = function getGuessItemContent(e, t) {
                    var s = this.props.guessGameData.guessType
                        , i = this.props.guessThemeData.list[e];
                    if (!i)
                        return null;
                    var r = 0 === t ? i.fon : i.son;
                    if (1 === s) {
                        var n = 0 === t ? +i.folpc : +i.solpc
                            , a = 1 !== +i.qs || 0 !== +i.folpc && i.folpc && 0 !== +i.fbmc && i.fbmc ? 0 : 1
                            , o = 1 !== +i.qs || 0 !== +i.solpc && i.solpc && 0 !== +i.sbmc && i.sbmc ? 0 : 1
                            , l = 0 === t ? a : o
                            , u = l ? "\u7b49\u5f85\u5f00\u731c" : "\u8d54\u7387" + Object(Je.f)(n);
                        return 2 === +i.qs && (u = "\u7b49\u5f85\u7ed3\u7b97"),
                            Zr.a.createElement("div", {
                                __source: {
                                    fileName: Ca,
                                    lineNumber: 143
                                },
                                __self: this
                            }, Zr.a.createElement("p", {
                                className: i.qs >= 3 ? "GuessContItem-itemTitle guessGame--topGapM" : "GuessContItem-itemTitle",
                                dangerouslySetInnerHTML: {
                                    __html: r
                                },
                                __source: {
                                    fileName: Ca,
                                    lineNumber: 144
                                },
                                __self: this
                            }), l || i.qs < 3 ? Zr.a.createElement("p", {
                                className: "GuessContItem-itemLoss",
                                __source: {
                                    fileName: Ca,
                                    lineNumber: 146
                                },
                                __self: this
                            }, u) : null)
                    }
                    if (2 === s) {
                        var c = 0 === t ? +i.op1pr : +i.op2pr;
                        return Zr.a.createElement("div", {
                            __source: {
                                fileName: Ca,
                                lineNumber: 154
                            },
                            __self: this
                        }, Zr.a.createElement("p", {
                            className: "GuessContItem-itemTitle",
                            dangerouslySetInnerHTML: {
                                __html: r
                            },
                            __source: {
                                fileName: Ca,
                                lineNumber: 155
                            },
                            __self: this
                        }), Zr.a.createElement("p", {
                            className: "GuessContItem-itemLoss",
                            __source: {
                                fileName: Ca,
                                lineNumber: 156
                            },
                            __self: this
                        }, "\u8d54\u7387", Object(Je.f)(c)))
                    }
                    return null
                }
                ,
                GuessThemeItemPrice.prototype.getGuessItemResult = function getGuessItemResult(e, t) {
                    var s = this.props.guessThemeData.list[e];
                    if (!s)
                        return {};
                    var i = [2, 1];
                    return 3 === +s.qs && +s.wo === i[t] ? Zr.a.createElement("i", {
                        className: "GuessContItem-failIcon",
                        __source: {
                            fileName: Ca,
                            lineNumber: 177
                        },
                        __self: this
                    }) : 3 === +s.qs && +s.wo !== i[t] && 0 !== +s.wo ? Zr.a.createElement("i", {
                        className: "GuessContItem-successIcon",
                        __source: {
                            fileName: Ca,
                            lineNumber: 179
                        },
                        __self: this
                    }) : 4 === +s.qs ? Zr.a.createElement("i", {
                        className: "GuessContItem-flowIcon",
                        __source: {
                            fileName: Ca,
                            lineNumber: 181
                        },
                        __self: this
                    }) : null
                }
                ,
                GuessThemeItemPrice.prototype.showWaitGuessAnimation = function showWaitGuessAnimation() {
                    var e = this;
                    this.state.showWaitGuessTip || (this.setState({
                        showWaitGuessTip: !0
                    }),
                        setTimeout(function () {
                            e.setState({
                                showWaitGuessTip: !1
                            })
                        }, 3e3))
                }
                ,
                GuessThemeItemPrice.prototype.getGuessCornerContent = function getGuessCornerContent(e) {
                    var t = this.props.guessGameData.guessType
                        , s = 0 === +this.props["data-direct"] ? "is-left" : "is-right";
                    return 2 === t ? Zr.a.createElement("span", {
                        className: "GuessContItem-bidIcon",
                        __source: {
                            fileName: Ca,
                            lineNumber: 289
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--bubble bubble",
                        __source: {
                            fileName: Ca,
                            lineNumber: 290
                        },
                        __self: this
                    }, "\u5df2\u6295\u6ce8\uff1a", Zr.a.createElement("div", {
                        className: ["guessGameArrow is-down is-orangeDown", s].join(" "),
                        __source: {
                            fileName: Ca,
                            lineNumber: 291
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: "guessGame--dyColor",
                        __source: {
                            fileName: Ca,
                            lineNumber: 292
                        },
                        __self: this
                    }, Object(Je.g)(e)))) : Zr.a.createElement("span", {
                        className: "GuessContItem-bidIcon",
                        onMouseEnter: this.handleMouserOver,
                        onMouseLeave: this.handleMouseOut,
                        onClick: this.handleCornerClick,
                        __source: {
                            fileName: Ca,
                            lineNumber: 299
                        },
                        __self: this
                    })
                }
                ,
                GuessThemeItemPrice.prototype.getGuessCornerPanel = function getGuessCornerPanel() {
                    var e = this
                        , t = +this.props["data-direct"]
                        , s = 0 === t ? "is-left" : "is-right"
                        , i = +this.props["data-index"]
                        , r = this.props.guessThemeData.list[i];
                    if (!r)
                        return null;
                    var n = 0 === t ? r.fBetList : r.sBetList
                        , a = 0 === t ? r.fBankerList : r.sBankerList;
                    this.aktp = +r.aktp ? +r.aktp : 0,
                        this.systp = +r.systp ? +r.systp : 0;
                    var o = n.map(function (t, s) {
                        return Zr.a.createElement("tr", {
                            key: s,
                            __source: {
                                fileName: Ca,
                                lineNumber: 339
                            },
                            __self: e
                        }, Zr.a.createElement("td", {
                            __source: {
                                fileName: Ca,
                                lineNumber: 340
                            },
                            __self: e
                        }, Object(Je.d)(Object(Je.g)(t.amount))), Zr.a.createElement("td", {
                            __source: {
                                fileName: Ca,
                                lineNumber: 341
                            },
                            __self: e
                        }, Object(Je.f)(t.loss_per_cent)), Zr.a.createElement("td", {
                            className: "guessGame--dyColor",
                            __source: {
                                fileName: Ca,
                                lineNumber: 342
                            },
                            __self: e
                        }, Object(Je.g)(t.income)))
                    })
                        , l = a.map(function (t, s) {
                        return Zr.a.createElement("tr", {
                            key: s,
                            __source: {
                                fileName: Ca,
                                lineNumber: 347
                            },
                            __self: e
                        }, Zr.a.createElement("td", {
                            __source: {
                                fileName: Ca,
                                lineNumber: 348
                            },
                            __self: e
                        }, Object(Je.d)(Object(Je.g)(t.amount))), Zr.a.createElement("td", {
                            __source: {
                                fileName: Ca,
                                lineNumber: 349
                            },
                            __self: e
                        }, Object(Je.f)(t.loss_per_cent)), Zr.a.createElement("td", {
                            className: "guessGame--dyColor",
                            __source: {
                                fileName: Ca,
                                lineNumber: 350
                            },
                            __self: e
                        }, Object(Je.g)(t.used)), Zr.a.createElement("td", {
                            className: "guessGame--dyColor",
                            __source: {
                                fileName: Ca,
                                lineNumber: 351
                            },
                            __self: e
                        }, Object(Je.g)(e.calcSilver(t.loss_per_cent, t.used))))
                    });
                    return n.length || a.length ? Zr.a.createElement("div", {
                        className: ["GuessRecordBox", s].join(" "),
                        onMouseEnter: this.panelMouserOver,
                        onMouseLeave: this.panelMouseOut,
                        __source: {
                            fileName: Ca,
                            lineNumber: 356
                        },
                        __self: this
                    }, Zr.a.createElement(Ra.Scrollbars, {
                        __source: {
                            fileName: Ca,
                            lineNumber: 359
                        },
                        __self: this
                    }, Zr.a.createElement("p", {
                        className: "GuessRecordBox-title",
                        __source: {
                            fileName: Ca,
                            lineNumber: 361
                        },
                        __self: this
                    }, Zr.a.createElement("i", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 361
                        },
                        __self: this
                    }), "\u7ade\u731c\u8bb0\u5f55"), n.length ? Zr.a.createElement("table", {
                        className: "GuessRecordBox-HeaderBag",
                        __source: {
                            fileName: Ca,
                            lineNumber: 362
                        },
                        __self: this
                    }, Zr.a.createElement("thead", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 363
                        },
                        __self: this
                    }, Zr.a.createElement("tr", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 364
                        },
                        __self: this
                    }, Zr.a.createElement("th", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 365
                        },
                        __self: this
                    }, "\u6295\u6ce8\u6570"), Zr.a.createElement("th", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 366
                        },
                        __self: this
                    }, "\u8d54\u7387"), Zr.a.createElement("th", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 367
                        },
                        __self: this
                    }, "\u8d62\u5219\u5f97"))), Zr.a.createElement("tbody", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 370
                        },
                        __self: this
                    }, o)) : null, a.length ? Zr.a.createElement("table", {
                        className: "GuessRecordBox-HeaderBag",
                        __source: {
                            fileName: Ca,
                            lineNumber: 373
                        },
                        __self: this
                    }, Zr.a.createElement("thead", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 374
                        },
                        __self: this
                    }, Zr.a.createElement("tr", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 375
                        },
                        __self: this
                    }, Zr.a.createElement("th", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 376
                        },
                        __self: this
                    }, "\u5f00\u731c\u5e95\u91d1"), Zr.a.createElement("th", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 377
                        },
                        __self: this
                    }, "\u8d54\u7387"), Zr.a.createElement("th", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 378
                        },
                        __self: this
                    }, "\u8f93\u5219\u6263", Zr.a.createElement("p", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 378
                        },
                        __self: this
                    }, "(\u88ab\u4e70\u5e95\u91d1)")), Zr.a.createElement("th", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 379
                        },
                        __self: this
                    }, "\u8d62\u5219\u5f97"))), Zr.a.createElement("tbody", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 382
                        },
                        __self: this
                    }, l)) : null)) : null
                }
                ,
                GuessThemeItemPrice.prototype.showBidAnimation = function showBidAnimation(e) {
                    return this.props.guessTicketData.isBoldGuess ? Zr.a.createElement("span", {
                        className: "guessBetAnimation",
                        __source: {
                            fileName: Ca,
                            lineNumber: 396
                        },
                        __self: this
                    }, "+", Object(Je.g)(e), Zr.a.createElement("i", {
                        className: "guessBetAnimation-ticketIcon",
                        __source: {
                            fileName: Ca,
                            lineNumber: 396
                        },
                        __self: this
                    })) : Zr.a.createElement("span", {
                        className: "guessBetAnimation",
                        __source: {
                            fileName: Ca,
                            lineNumber: 401
                        },
                        __self: this
                    }, "+", e, Zr.a.createElement("i", {
                        className: "guessBetAnimation-ywIcon",
                        __source: {
                            fileName: Ca,
                            lineNumber: 401
                        },
                        __self: this
                    }))
                }
                ,
                GuessThemeItemPrice.prototype.componentWillUnmount = function componentWillUnmount() {
                    clearTimeout(this.cornerTimer)
                }
                ,
                GuessThemeItemPrice.prototype.render = function render() {
                    var e = this.props.guessGameData.guessType;
                    if (0 === e)
                        return null;
                    var t = +this.props["data-index"]
                        , s = +this.props["data-direct"]
                        , i = this.getGuessItemClass(t, s)
                        , r = this.getGuessItemData(t, s)
                        , n = 0 === s ? r.fjoin : r.sjoin
                        , a = 0 === s ? r.fjoinAmount : r.sjoinAmount
                        , o = r.betAmount
                        , l = this.getGuessItemResult(t, s)
                        , u = this.getGuessItemContent(t, s);
                    return Zr.a.createElement("div", {
                        className: "guessGame--displayBFC",
                        __source: {
                            fileName: Ca,
                            lineNumber: 428
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessContItemHover",
                        __source: {
                            fileName: Ca,
                            lineNumber: 429
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: i,
                        "data-qs": r.qs,
                        "data-loss": r.loss,
                        "data-bankerid": r.bankrid,
                        "data-balance": r.balance,
                        onClick: this.bettingClick,
                        __source: {
                            fileName: Ca,
                            lineNumber: 430
                        },
                        __self: this
                    }, l, u, n ? this.getGuessCornerContent(a) : null), o > 0 ? this.showBidAnimation(o) : null), 1 === e && this.state.showCorner ? this.getGuessCornerPanel() : null, 1 === e && this.state.showWaitGuessTip ? Zr.a.createElement("div", {
                        className: "GuessContItemWaitTip",
                        __source: {
                            fileName: Ca,
                            lineNumber: 449
                        },
                        __self: this
                    }, Zr.a.createElement("i", {
                        __source: {
                            fileName: Ca,
                            lineNumber: 449
                        },
                        __self: this
                    }), "\u5f53\u524d\u65e0\u4eba\u5f00\u731c, \u5f00\u731c\u6709\u673a\u4f1a\u8d62\u66f4\u591a\u54e6~ ") : null)
                }
                ,
                GuessThemeItemPrice
        }(Zr.a.Component),
            Da = GuessThemeItemPrice_applyDecoratedDescriptor(Ta.prototype, "guessMainPanelServices", [Ga], {
                enumerable: !0,
                initializer: null
            }),
            Ea = GuessThemeItemPrice_applyDecoratedDescriptor(Ta.prototype, "guessDYSubService", [Na], {
                enumerable: !0,
                initializer: null
            }),
            Sa = Ta)) || Sa), Ba = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                guessThemeData: e.guessThemeData,
                guessIconConfigData: e.guessIconConfigData,
                guessThemeItemData: e.guessThemeItemData,
                guessTicketData: e.guessTicketData
            }
        })(Aa), xa = (s("489bc"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessSeal/GuessSeal.js");

        function GuessSeal_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessSeal_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var qa, Ua, Ha, Ya, Wa = (ja = (0,
            r.a.Service)(It),
        Object(rs.log)((za = function (e) {
            function GuessSeal(t) {
                !function GuessSeal_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessSeal);
                var s = function GuessSeal_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return function GuessSeal_initDefineProp(e, t, s, i) {
                    s && Object.defineProperty(e, t, {
                        enumerable: s.enumerable,
                        configurable: s.configurable,
                        writable: s.writable,
                        value: s.initializer ? s.initializer.call(i) : void 0
                    })
                }(s, "guessMainPanelService", Ia, s),
                    s.ensure = s.ensure.bind(s),
                    s.cancel = s.cancel.bind(s),
                    s
            }

            return GuessSeal_inherits(GuessSeal, e),
                GuessSeal.prototype.componentDidMount = function componentDidMount() {
                }
                ,
                GuessSeal.prototype.ensure = function ensure() {
                    var e = +this.props["data-index"];
                    this.guessMainPanelService.ensureStopBid(e)
                }
                ,
                GuessSeal.prototype.cancel = function cancel() {
                    var e = +this.props["data-index"];
                    this.guessMainPanelService.modifyStopBidMask(e, !1)
                }
                ,
                GuessSeal.prototype.render = function render() {
                    return Zr.a.createElement("div", {
                        className: "GuessEnsureOutBox",
                        __source: {
                            fileName: xa,
                            lineNumber: 44
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessEnsureBox",
                        __source: {
                            fileName: xa,
                            lineNumber: 45
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessEnsureBox-logo",
                        __source: {
                            fileName: xa,
                            lineNumber: 46
                        },
                        __self: this
                    }), Zr.a.createElement("p", {
                        className: "GuessEnsureBox-row1",
                        __source: {
                            fileName: xa,
                            lineNumber: 47
                        },
                        __self: this
                    }, "\u786e\u5b9a\u8981\u5c01\u76d8\u5417\uff1f"), Zr.a.createElement("p", {
                        className: "GuessEnsureBox-row2",
                        __source: {
                            fileName: xa,
                            lineNumber: 48
                        },
                        __self: this
                    }, "\u5c01\u76d8\u540e\u89c2\u4f17\u65e0\u6cd5\u6295\u6ce8\u548c\u5f00\u731c"), Zr.a.createElement("div", {
                        __source: {
                            fileName: xa,
                            lineNumber: 49
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM is-empty guessGame--btnGap",
                        onClick: this.cancel,
                        __source: {
                            fileName: xa,
                            lineNumber: 50
                        },
                        __self: this
                    }, "\u53d6 \u6d88"), Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM",
                        onClick: this.ensure,
                        __source: {
                            fileName: xa,
                            lineNumber: 51
                        },
                        __self: this
                    }, "\u786e \u5b9a")), Zr.a.createElement("div", {
                        className: "guessGameArrow is-down is-center is-grayDown",
                        __source: {
                            fileName: xa,
                            lineNumber: 53
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "GuessEnsureOutBox-mask",
                        __source: {
                            fileName: xa,
                            lineNumber: 55
                        },
                        __self: this
                    }))
                }
                ,
                GuessSeal
        }(Zr.a.Component),
            Ia = function GuessSeal_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(za.prototype, "guessMainPanelService", [ja], {
                enumerable: !0,
                initializer: null
            }),
            Ma = za)) || Ma), Fa = (s("cc7e0"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessDealer/DealerSure/DealerSure.js");

        function DealerSure_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function DealerSure_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Ja, Va, Qa, $a, Ka, Xa, Za, eo, to, so, io, ro, no = (qa = (0,
            r.a.Service)(n.DataCenter.localStorage),
        Object(rs.log)((Ha = function (e) {
            function DealerSure() {
                !function DealerSure_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, DealerSure);
                var t = function DealerSure_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this));
                return function DealerSure_initDefineProp(e, t, s, i) {
                    s && Object.defineProperty(e, t, {
                        enumerable: s.enumerable,
                        configurable: s.configurable,
                        writable: s.writable,
                        value: s.initializer ? s.initializer.call(i) : void 0
                    })
                }(t, "localStorage", Ya, t),
                    t.dealerSure = function () {
                        t.checkInput && t.checkInput.checked && t.localStorage.set("sureDealer", 1),
                            t.props.confirmDealerSure(),
                            t.props.shutDealerSure()
                    }
                    ,
                    t.checkInput = null,
                    t
            }

            return DealerSure_inherits(DealerSure, e),
                DealerSure.prototype.render = function render() {
                    var e = this;
                    return Zr.a.createElement(an.a, {
                        className: "guessDealerRemember",
                        visible: this.props.dealerSureShowStatus,
                        footer: null,
                        closable: !1,
                        mask: !0,
                        maskClosable: !0,
                        width: 460,
                        onCancel: this.props.shutDealerSure,
                        center: !0,
                        bodyStyle: {
                            position: "fixed",
                            left: 0,
                            top: 0,
                            background: "rgba(0, 0, 0, .5)",
                            padding: 0
                        },
                        __source: {
                            fileName: Fa,
                            lineNumber: 43
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessDealerRemember-in",
                        __source: {
                            fileName: Fa,
                            lineNumber: 55
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessDealerRemember-title",
                        __source: {
                            fileName: Fa,
                            lineNumber: 56
                        },
                        __self: this
                    }, Zr.a.createElement("i", {
                        className: "guessDealerRemember-tipIcon",
                        __source: {
                            fileName: Fa,
                            lineNumber: 56
                        },
                        __self: this
                    }), "\u7279\u522b\u63d0\u793a"), Zr.a.createElement("div", {
                        className: "guessDealerRemember-contentBox",
                        __source: {
                            fileName: Fa,
                            lineNumber: 57
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "item",
                        __source: {
                            fileName: Fa,
                            lineNumber: 58
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "index",
                        __source: {
                            fileName: Fa,
                            lineNumber: 58
                        },
                        __self: this
                    }, "1. "), "\u82e5\u5f00\u731c\u6ca1\u88ab\u5176\u4ed6\u7528\u6237\u4e70\u5b8c\uff0c\u8d62\u4e86\u53ef\u80fd\u65e0\u6cd5\u8d62\u5230\u9884\u671f\u7684\u5956\u91d1\uff0c\u6ca1\u6709\u88ab\u8d2d\u4e70\u7684\u5e95\u91d1\u4f1a\u8fd4\u8fd8\u7ed9\u60a8"), Zr.a.createElement("div", {
                        className: "item",
                        __source: {
                            fileName: Fa,
                            lineNumber: 59
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "index",
                        __source: {
                            fileName: Fa,
                            lineNumber: 59
                        },
                        __self: this
                    }, "2. "), "\u60a8\u5f00\u731c\u540e\uff0c\u8d54\u7387\u4f1a\u663e\u793a\u5728\u76f8\u53cd\u7684\u9009\u9879\u4e0a"), Zr.a.createElement("div", {
                        className: "item",
                        __source: {
                            fileName: Fa,
                            lineNumber: 60
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "index",
                        __source: {
                            fileName: Fa,
                            lineNumber: 60
                        },
                        __self: this
                    }, "3. "), "\u7cfb\u7edf\u4f1a\u4f18\u5148\u663e\u793a\u6700\u9ad8\u7684\u8d54\u7387\uff0c\u63d0\u9ad8\u8d54\u7387\u53ef\u4ee5\u5438\u5f15\u5176\u4ed6\u7528\u6237\u8d2d\u4e70")), Zr.a.createElement("div", {
                        className: "guessGame--topGapS",
                        __source: {
                            fileName: Fa,
                            lineNumber: 62
                        },
                        __self: this
                    }, Zr.a.createElement("input", {
                        className: "guessDealerRemember-input",
                        type: "checkbox",
                        ref: function ref(t) {
                            e.checkInput = t
                        },
                        __source: {
                            fileName: Fa,
                            lineNumber: 63
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: "guessDealerRemember-sureContent",
                        __source: {
                            fileName: Fa,
                            lineNumber: 66
                        },
                        __self: this
                    }, "\u6211\u5df2\u7ecf\u4e86\u89e3\u5f00\u731c\u89c4\u5219\uff0c\u4e0d\u518d\u63d0\u793a")), Zr.a.createElement("div", {
                        className: "guessGame--btnBox",
                        __source: {
                            fileName: Fa,
                            lineNumber: 68
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM guessGame--btnGap",
                        onClick: function onClick() {
                            e.dealerSure()
                        },
                        __source: {
                            fileName: Fa,
                            lineNumber: 69
                        },
                        __self: this
                    }, "\u786e\u5b9a\u5f00\u731c"), Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM is-empty",
                        onClick: this.props.shutDealerSure,
                        __source: {
                            fileName: Fa,
                            lineNumber: 70
                        },
                        __self: this
                    }, "\u53d6 \u6d88"))))
                }
                ,
                DealerSure
        }(Zr.a.Component),
            Ya = function DealerSure_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(Ha.prototype, "localStorage", [qa], {
                enumerable: !0,
                initializer: null
            }),
            Ua = Ha)) || Ua), ao = (s("6b49f"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessDealer/Dealer.js");

        function Dealer_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function Dealer_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function Dealer_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function Dealer_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var oo, lo, uo, co, mo, po, fo, _o, ho, bo, go = r.a.Service, yo = (Ja = go(Fe.a),
            Va = go(Dt),
            Qa = go(We),
            $a = go(n.DataCenter.localStorage),
            Ka = go(n.DataCenter.global),
        Object(rs.log)((Za = function (e) {
            function Dealer(t) {
                var s = this;
                !function Dealer_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Dealer);
                var i = function Dealer_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return Dealer_initDefineProp(i, "commonDataServices", eo, i),
                    Dealer_initDefineProp(i, "GuessThemeItemService", to, i),
                    Dealer_initDefineProp(i, "guessDYSubService", so, i),
                    Dealer_initDefineProp(i, "localStorage", io, i),
                    Dealer_initDefineProp(i, "global", ro, i),
                    i.chooseGuessWinner = function (e) {
                        var t = +i.props["data-index"]
                            , s = i.props.guessThemeData.list[t];
                        if (s) {
                            var r = +(s.folpc || 0)
                                , n = +(s.solpc || 0)
                                , a = 2 === e ? r + 10 : n + 10;
                            i.formatOdd(a / 100)
                        }
                        i.setState({
                            guessWinner: +e
                        })
                    }
                    ,
                    i.changeOdd = function (e) {
                        var t = Object(Je.i)(e.target.value, !0)
                            , s = e.which || e.keyCode;
                        1 === t.length && 8 !== s && (t += "."),
                        1 === t.length && 8 === s && (t = ""),
                            i.formatOdd(t)
                    }
                    ,
                    i.formatOdd = function (e) {
                        var t = +e > 9.9 ? 9.9 : e;
                        i.oddRef && (i.oddRef.value = t,
                            i.setState({
                                guessOdd: +t,
                                guessWinNum: i.calcSilver(+t, i.state.guessDejin)
                            }))
                    }
                    ,
                    i.changeDejin = function (e) {
                        var t = Object(Je.i)(e.target.value);
                        i.props.guessTicketData.isBoldGuess ? i.formatTicket(t) : i.formatDejin(t)
                    }
                    ,
                    i.addDejinNum = function (e) {
                        var t = +e + +i.deJinRef.value.trim();
                        i.props.guessTicketData.isBoldGuess ? i.formatTicket(t) : i.formatDejin(t)
                    }
                    ,
                    i.formatDejin = function (e) {
                        var t = Math.min(i.max, i.silver);
                        +e > t && !i.state.overErr && (clearTimeout(i.overErrTimer),
                            i.setState({
                                overErr: !0
                            }),
                            i.overErrTimer = setTimeout(function () {
                                i.setState({
                                    overErr: !1
                                })
                            }, 2e3)),
                        i.deJinRef && (i.deJinRef.value = +e < t ? e : t,
                            i.setState({
                                guessWinNum: i.calcSilver(i.state.guessOdd, i.deJinRef.value),
                                guessDejin: i.deJinRef.value
                            }))
                    }
                    ,
                    i.formatTicket = function (e) {
                        var t = i.props.guessTicketData.ticketNum
                            , s = Math.min(i.maxBaseTicket, Object(Je.g)(t));
                        +e > s && !i.state.overErr && (clearTimeout(i.overErrTimer),
                            i.setState({
                                overErr: !0
                            }),
                            i.overErrTimer = setTimeout(function () {
                                i.setState({
                                    overErr: !1
                                })
                            }, 2e3)),
                        i.deJinRef && (i.deJinRef.value = +e < s ? e : s,
                            i.setState({
                                guessWinNum: i.calcSilver(i.state.guessOdd, i.deJinRef.value),
                                guessDejin: i.deJinRef.value
                            }))
                    }
                    ,
                    i.showDealerSure = function () {
                        var e = i.props.guessTicketData.isBoldGuess;
                        0 !== i.state.guessWinner ? 0 !== +i.state.guessOdd ? +i.state.guessDejin < i.min && !e ? te.a.info("\u5e95\u91d1\u6700\u5c11\u4e3a" + i.min) : +i.state.guessDejin < i.minBaseTicket && e ? te.a.info("\u5e95\u91d1\u6700\u5c11\u4e3a" + i.minBaseTicket) : +i.state.guessDejin > i.max && !e ? te.a.info("\u5e95\u91d1\u6700\u591a\u4e3a" + i.max) : +i.state.guessDejin > i.maxBaseTicket && e ? te.a.info("\u5e95\u91d1\u6700\u591a\u4e3a" + i.maxBaseTicket) : (i.guessDYSubService.guessGameDYSub("click_quiz_popup_start", {}),
                            i.localStorage.get("sureDealer") || 0 ? i.confirmDealerSure() : i.setState({
                                visible: !0
                            })) : te.a.info("\u8d54\u7387\u4e0d\u80fd\u4e3a0") : te.a.info("\u8bf7\u9009\u62e9\u4f60\u8ba4\u4e3a\u7684\u80dc\u65b9")
                    }
                    ,
                    i.confirmDealerSure = function () {
                        var e = +i.props["data-index"]
                            , t = i.props.guessThemeData.list[e]
                            , s = i.props.guessTicketData.isBoldGuess;
                        if (t) {
                            var r = {
                                room_id: i.global.get("$ROOM.room_id"),
                                quiz_id: t.qid,
                                option: i.state.guessWinner,
                                amount: s ? Object(Je.h)(i.state.guessDejin) : i.state.guessDejin,
                                loss_per_cent: Math.round(100 * i.state.guessOdd),
                                money_type: s ? 2 : 1
                            }
                                , n = (i.props.guessIconConfigData.activity_info || {}).property_name || "";
                            i.setOldHistory(i.state.guessOdd),
                                i.GuessThemeItemService.getGuessDealer({
                                    buff: n,
                                    config: r
                                })
                        }
                    }
                    ,
                    i.shutDealerSure = function () {
                        i.setState({
                            visible: !1
                        })
                    }
                    ,
                    i.chooseOldHistory = function (e) {
                        clearTimeout(i.oldHistoryTimer),
                            i.formatOdd(e),
                            i.setState({
                                historyOddVisible: !1
                            })
                    }
                    ,
                    i.showOldHistory = function () {
                        i.setState({
                            historyOddVisible: !0
                        })
                    }
                    ,
                    i.hideOldHistory = function () {
                        clearTimeout(i.oldHistoryTimer),
                        i.state.historyOddVisible && setTimeout(function () {
                            i.setState({
                                historyOddVisible: !1
                            })
                        }, 300)
                    }
                    ,
                    i.renderOldHistory = function () {
                        var e = i.localStorage.get("oddHistory") || "";
                        if (e) {
                            var t = e.map(function (e, t) {
                                return Zr.a.createElement("div", {
                                    key: t,
                                    className: "oddsHistoryItem",
                                    onClick: function onClick() {
                                        return i.chooseOldHistory(e)
                                    },
                                    __source: {
                                        fileName: ao,
                                        lineNumber: 418
                                    },
                                    __self: s
                                }, e)
                            });
                            return Zr.a.createElement("div", {
                                className: "guessGame--bubble guessDealerPopup-oddsHistory",
                                __source: {
                                    fileName: ao,
                                    lineNumber: 422
                                },
                                __self: s
                            }, Zr.a.createElement("div", {
                                className: "guessGameArrow is-down is-left is-orangeDown ",
                                __source: {
                                    fileName: ao,
                                    lineNumber: 423
                                },
                                __self: s
                            }), Zr.a.createElement("div", {
                                className: "oddsHistoryTitle",
                                __source: {
                                    fileName: ao,
                                    lineNumber: 424
                                },
                                __self: s
                            }, "\u5386\u53f2\u8d54\u7387:"), Zr.a.createElement("div", {
                                className: "guessGame--btnClose oddsHistoryClose",
                                onClick: i.hideOldHistory,
                                __source: {
                                    fileName: ao,
                                    lineNumber: 425
                                },
                                __self: s
                            }), Zr.a.createElement("div", {
                                __source: {
                                    fileName: ao,
                                    lineNumber: 426
                                },
                                __self: s
                            }, t))
                        }
                        return null
                    }
                    ,
                    i.setOldHistory = function (e) {
                        if (+e) {
                            var t = [];
                            (i.localStorage.get("oddHistory") || []).map(function (e) {
                                return isNaN(e) || t.push(+e),
                                    e
                            }),
                            -1 === t.indexOf(+e) && (t.unshift(+e),
                                i.localStorage.set("oddHistory", t.slice(0, 9)))
                        }
                    }
                    ,
                    i.state = {
                        visible: !1,
                        historyOddVisible: !1,
                        guessWinner: 0,
                        guessWinNum: 0,
                        guessOdd: "",
                        guessDejin: "",
                        overErr: !1
                    },
                    i.oldHistoryTimer = null,
                    i.overErrTimer = null,
                    i.quizSetting = i.props.guessIconConfigData.quiz_setting || {},
                    i.rate = i.quizSetting.divided_rate || 0,
                    i.min = i.quizSetting.min_base_gold || 0,
                    i.max = i.quizSetting.max_base_gold || 0,
                    i.silver = 0,
                    i.deJinRef = null,
                    i.oddRef = null,
                    i.baseTicket = i.quizSetting.base_gold_ticket || [],
                    i.baseGold = i.quizSetting.base_gold || [],
                    i.minBaseTicket = Object(Je.g)(i.quizSetting.min_base_ticket) || 0,
                    i.maxBaseTicket = Object(Je.g)(i.quizSetting.max_base_ticket) || 0,
                    i
            }

            return Dealer_inherits(Dealer, e),
                Dealer.prototype.getRuleText = function getRuleText() {
                    return ["\u5f00\u731c\u540e\uff0c\u60a8\u7684\u5e95\u91d1\u4f1a\u88ab\u5176\u4ed6\u7528\u6237\u8d2d\u4e70", "\u731c\u5bf9\u5373\u53ef\u83b7\u5f97\u7528\u6237\u6295\u6ce8\u5230\u60a8\u7684\u5f00\u731c\u4e0a\u7684\u672c\u91d1", "\u8d54\u7387\u8bbe\u5f97\u8d8a\u9ad8\uff0c\u5f00\u731c\u8d8a\u5bb9\u6613\u88ab\u5176\u4ed6\u7528\u6237\u4e70", "\u82e5\u5f00\u731c\u6ca1\u6709\u88ab\u8d2d\u4e70\uff0c\u8fd9\u90e8\u5206\u5e95\u91d1\u4f1a\u8fd4\u8fd8\u7ed9\u60a8"]
                }
                ,
                Dealer.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.commonDataServices.getSilver().subscribe(function (t) {
                        var s = t.data;
                        e.silver = s
                    })
                }
                ,
                Dealer.prototype.componentWillUnmount = function componentWillUnmount() {
                    clearTimeout(this.oldHistoryTimer),
                        clearTimeout(this.overErrTimer)
                }
                ,
                Dealer.prototype.calcSilver = function calcSilver(e, t) {
                    var s = +this.props["data-index"]
                        , i = this.props.guessThemeData.list[s]
                        , r = +i.systp ? +i.systp : 0
                        , n = +i.aktp ? +i.aktp : 0;
                    if (!i)
                        return null;
                    var a = 100 - (n + r);
                    return Object(Je.c)(Math.round(100 * e), t, a)
                }
                ,
                Dealer.prototype.renderRuleHover = function renderRuleHover() {
                    var e = this
                        , t = this.getRuleText().map(function (t, s) {
                        return Zr.a.createElement("div", {
                            key: s,
                            __source: {
                                fileName: ao,
                                lineNumber: 459
                            },
                            __self: e
                        }, Zr.a.createElement("i", {
                            className: "iconNum",
                            __source: {
                                fileName: ao,
                                lineNumber: 459
                            },
                            __self: e
                        }, s + 1), t)
                    });
                    return Zr.a.createElement("div", {
                        className: "guessDealerPopup-ruleBoxHover",
                        __source: {
                            fileName: ao,
                            lineNumber: 463
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "ruleBoxHoverTitle",
                        __source: {
                            fileName: ao,
                            lineNumber: 464
                        },
                        __self: this
                    }, "\u5f00\u731c\u8bf4\u660e"), t)
                }
                ,
                Dealer.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessGameData.guessType
                        , s = this.props.guessTicketData
                        , i = s.isBoldGuess
                        , r = s.ticketNum;
                    if (1 !== t)
                        return null;
                    var n = +this.props["data-index"]
                        , a = this.props.guessThemeData.list[n];
                    if (!a)
                        return null;
                    var o = this.state
                        , l = o.guessWinner
                        , u = o.overErr
                        , c = "";
                    1 === l ? c = "\u82e5\u7ade\u731c\u7ed3\u679c\u4e3a\u3010" + a.fon + "\u3011\uff0c\u5219\u60a8\u83b7\u80dc" : 2 === l && (c = "\u82e5\u7ade\u731c\u7ed3\u679c\u4e3a\u3010" + a.son + "\u3011\uff0c\u5219\u60a8\u83b7\u80dc");
                    return Zr.a.createElement(an.a, {
                        className: "guessDealerPopup",
                        visible: this.props.dealerModalStatus,
                        footer: null,
                        closable: !1,
                        mask: !1,
                        maskClosable: !0,
                        width: 460,
                        draggable: !0,
                        handle: ".guessDealerPopup-title",
                        onCancel: this.props.shutDealer,
                        center: !0,
                        bodyStyle: {
                            display: "block",
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            width: "460px",
                            marginLeft: "-230px",
                            marginTop: "-180px",
                            boxSizing: "border-box",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            boxShadow: "0 0 3px rgba(0, 0, 0, .3)",
                            zIndex: "220",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                            userSelect: "none"
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 528
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btnClose",
                        onClick: this.props.shutDealer,
                        __source: {
                            fileName: ao,
                            lineNumber: 542
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "guessDealerPopup-title",
                        __source: {
                            fileName: ao,
                            lineNumber: 543
                        },
                        __self: this
                    }, "\u6211\u8981\u5f00\u731c", Zr.a.createElement("div", {
                        className: "guessDealerPopup-rulesBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 544
                        },
                        __self: this
                    }, Zr.a.createElement("i", {
                        className: "iconHorn",
                        __source: {
                            fileName: ao,
                            lineNumber: 545
                        },
                        __self: this
                    }), Zr.a.createElement(pn, {
                        MarqueeLineHeight: "18",
                        MarqueeList: this.getRuleText(),
                        __source: {
                            fileName: ao,
                            lineNumber: 546
                        },
                        __self: this
                    }), this.renderRuleHover())), Zr.a.createElement("div", {
                        className: "guessDealerPopup-lineBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 550
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "lineLable",
                        __source: {
                            fileName: ao,
                            lineNumber: 551
                        },
                        __self: this
                    }, "\u4e3b\u3000\u9898\uff1a"), Zr.a.createElement("span", {
                        className: "lineContent",
                        dangerouslySetInnerHTML: {
                            __html: a.qt
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 552
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "guessDealerPopup-lineBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 554
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "lineLable",
                        __source: {
                            fileName: ao,
                            lineNumber: 555
                        },
                        __self: this
                    }, "\u731c\u80dc\u65b9\uff1a"), Zr.a.createElement("span", {
                        className: ["chooseOption w-80", 1 === l ? "active" : ""].join(" "),
                        onClick: function onClick() {
                            return e.chooseGuessWinner(1)
                        },
                        dangerouslySetInnerHTML: {
                            __html: a.fon
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 556
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: ["chooseOption w-80", 2 === l ? "active" : ""].join(" "),
                        onClick: function onClick() {
                            return e.chooseGuessWinner(2)
                        },
                        dangerouslySetInnerHTML: {
                            __html: a.son
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 557
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: "chooseOption-notice",
                        dangerouslySetInnerHTML: {
                            __html: c
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 558
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "guessDealerPopup-lineBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 560
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "lineLable",
                        __source: {
                            fileName: ao,
                            lineNumber: 561
                        },
                        __self: this
                    }, "\u8d54\u3000\u7387\uff1a"), Zr.a.createElement("input", {
                        className: "delearInput",
                        maxLength: "3",
                        placeholder: "\u8f93\u51650.1-9.9",
                        onKeyUp: this.changeOdd,
                        onKeyDown: this.changeOdd,
                        onFocus: this.showOldHistory,
                        onBlur: this.hideOldHistory,
                        ref: function ref(t) {
                            e.oddRef = t
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 562
                        },
                        __self: this
                    }), this.state.historyOddVisible ? this.renderOldHistory() : null), Zr.a.createElement("div", {
                        className: "guessDealerPopup-lineBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 574
                        },
                        __self: this
                    }, u ? Zr.a.createElement("div", {
                        className: "overErr",
                        __source: {
                            fileName: ao,
                            lineNumber: 575
                        },
                        __self: this
                    }, "\u8d85\u51fa\u4f59\u989d\u4e0a\u9650") : null, Zr.a.createElement("span", {
                        className: "lineLable",
                        __source: {
                            fileName: ao,
                            lineNumber: 576
                        },
                        __self: this
                    }, "\u5e95\u3000\u91d1\uff1a"), Zr.a.createElement("input", {
                        className: "delearInput w-320",
                        maxLength: "9",
                        placeholder: "\u8bf7\u8f93\u5165" + (i ? this.minBaseTicket : this.min) + "\u53ca\u4ee5\u4e0a",
                        onChange: this.changeDejin,
                        ref: function ref(t) {
                            e.deJinRef = t
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 577
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "clearInput",
                        onClick: function onClick() {
                            return e.formatDejin("")
                        },
                        __source: {
                            fileName: ao,
                            lineNumber: 583
                        },
                        __self: this
                    })), function renderOption() {
                        var t = i ? e.baseTicket.map(function (e) {
                            return Object(Je.g)(e)
                        }) : e.baseGold;
                        return Zr.a.createElement("div", {
                            className: "guessDealerPopup-lineBox is-DejinBox",
                            __source: {
                                fileName: ao,
                                lineNumber: 519
                            },
                            __self: e
                        }, t.map(function (t, s) {
                            return Zr.a.createElement("span", {
                                key: s,
                                className: "chooseOption",
                                onClick: function onClick() {
                                    return e.addDejinNum(t)
                                },
                                __source: {
                                    fileName: ao,
                                    lineNumber: 521
                                },
                                __self: e
                            }, t)
                        }))
                    }(), Zr.a.createElement("div", {
                        className: "guessDealerPopup-lineBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 586
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "lineLable",
                        __source: {
                            fileName: ao,
                            lineNumber: 587
                        },
                        __self: this
                    }, "\u731c\u5bf9\u4e14\u5e95\u91d1\u88ab\u4e70\u5b8c\u5219\u83b7\u5f97\uff1a"), i ? Zr.a.createElement("span", {
                        className: "guessGame--dyColor",
                        __source: {
                            fileName: ao,
                            lineNumber: 590
                        },
                        __self: this
                    }, this.state.guessWinNum) : Zr.a.createElement("span", {
                        className: "guessGame--dyColor",
                        __source: {
                            fileName: ao,
                            lineNumber: 592
                        },
                        __self: this
                    }, this.state.guessWinNum)), i ? Zr.a.createElement("div", {
                        className: "guessDealerPopup-lineBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 598
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "lineLable",
                        __source: {
                            fileName: ao,
                            lineNumber: 599
                        },
                        __self: this
                    }, "\u6211\u7684\u63a2\u9669\u5238\uff1a"), Zr.a.createElement("span", {
                        className: "guessGame--dyColor",
                        __source: {
                            fileName: ao,
                            lineNumber: 600
                        },
                        __self: this
                    }, Object(Je.g)(r)), Zr.a.createElement("span", {
                        class: "guessMyTicketQuestion",
                        __source: {
                            fileName: ao,
                            lineNumber: 601
                        },
                        __self: this
                    }, "?", Zr.a.createElement("div", {
                        class: "myTicketQuestionCont",
                        __source: {
                            fileName: ao,
                            lineNumber: 602
                        },
                        __self: this
                    }, "\u8d60\u9001\u793c\u7269\u3010\u5c0f\u98de\u789f\u3011\u53ef\u83b7\u5f97\u63a2\u9669\u5238"))) : null, Zr.a.createElement("div", {
                        className: "guessGame--btnBox",
                        __source: {
                            fileName: ao,
                            lineNumber: 607
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM",
                        onClick: this.showDealerSure,
                        __source: {
                            fileName: ao,
                            lineNumber: 608
                        },
                        __self: this
                    }, "\u786e \u5b9a")), Zr.a.createElement(no, {
                        dealerSureShowStatus: this.state.visible,
                        confirmDealerSure: this.confirmDealerSure,
                        shutDealerSure: this.shutDealerSure,
                        __source: {
                            fileName: ao,
                            lineNumber: 610
                        },
                        __self: this
                    }))
                }
                ,
                Dealer
        }(Zr.a.Component),
            eo = Dealer_applyDecoratedDescriptor(Za.prototype, "commonDataServices", [Ja], {
                enumerable: !0,
                initializer: null
            }),
            to = Dealer_applyDecoratedDescriptor(Za.prototype, "GuessThemeItemService", [Va], {
                enumerable: !0,
                initializer: null
            }),
            so = Dealer_applyDecoratedDescriptor(Za.prototype, "guessDYSubService", [Qa], {
                enumerable: !0,
                initializer: null
            }),
            io = Dealer_applyDecoratedDescriptor(Za.prototype, "localStorage", [$a], {
                enumerable: !0,
                initializer: null
            }),
            ro = Dealer_applyDecoratedDescriptor(Za.prototype, "global", [Ka], {
                enumerable: !0,
                initializer: null
            }),
            Xa = Za)) || Xa), vo = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessThemeData: e.guessThemeData,
                guessGameData: e.guessGameData,
                guessTicketData: e.guessTicketData,
                guessIconConfigData: e.guessIconConfigData
            }
        })(yo), Go = (s("4576b"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessBetting/GuessBetting.js");

        function GuessBetting_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessBetting_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessBetting_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessBetting_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var No = r.a.Service
            , So = (oo = No(Fe.a),
            lo = No(Dt),
            uo = No(n.DataCenter.localStorage),
            co = No(n.DataCenter.global),
        Object(rs.log)((po = function (e) {
            function GuessBetting(t) {
                !function GuessBetting_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessBetting);
                var s = function GuessBetting_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessBetting_initDefineProp(s, "commonDataServices", fo, s),
                    GuessBetting_initDefineProp(s, "guessThemeItemService", _o, s),
                    GuessBetting_initDefineProp(s, "localStorage", ho, s),
                    GuessBetting_initDefineProp(s, "global", bo, s),
                    s.formatDejin = function (e) {
                        var t = s.props.guessGameData.guessType
                            , i = s.props.guessTicketData
                            , r = i.isBoldGuess
                            , n = i.ticketNum
                            , a = 0;
                        +e > (a = r ? 1 === t ? Math.min(Object(Je.g)(n), Object(Je.g)(s.balance)) : Math.min(Object(Je.g)(n), s.maxTicket) : 1 === t ? Math.min(s.silver, s.balance) : Math.min(s.silver, s.max_simple)) && s.showBettingErrorMsg(s.overErrMsg()[t]),
                        s.deJinRef && (s.deJinRef.value = +e < a ? e : a,
                            s.setState({
                                guessWinNum: s.calcSilver(s.deJinRef.value),
                                guessDejin: +s.deJinRef.value
                            }))
                    }
                    ,
                    s.changeDejin = function (e) {
                        var t = Object(Je.i)(e.target.value);
                        s.formatDejin(t)
                    }
                    ,
                    s.addDejinNum = function (e) {
                        var t = e + +s.deJinRef.value.trim();
                        s.clearAnimateMsg(),
                            s.formatDejin(t)
                    }
                    ,
                    s.allInDejinNum = function () {
                        var e = s.props.guessGameData.guessType
                            , t = s.props.guessTicketData
                            , i = t.isBoldGuess
                            , r = t.ticketNum
                            , n = 0;
                        n = i ? 1 === e ? Math.min(Object(Je.g)(r), Object(Je.g)(s.balance)) : Math.min(Object(Je.g)(r), s.maxTicket) : 1 === e ? Math.min(s.silver, s.balance) : Math.min(s.silver, s.max_simple),
                            s.clearAnimateMsg(),
                            s.formatDejin(n)
                    }
                    ,
                    s.betSure = function () {
                        var e = s.props.guessGameData.guessType
                            , t = 1 === e ? s.min : s.min_simple
                            , i = 1 === e ? s.max : s.max_simple
                            , r = s.props.guessTicketData.isBoldGuess;

                        0 !== s.state.guessDejin ? +s.state.guessDejin < t && !r ? s.showAnimateMsg("\u6700\u5c11\u6295\u6ce8" + t) : +s.state.guessDejin > i && !r ? s.showAnimateMsg("\u6700\u591a\u6295\u6ce8" + i) : +s.state.guessDejin > s.maxTicket && r ? s.showAnimateMsg("\u6700\u591a\u6295\u6ce8" + s.maxTicket) : +s.state.guessDejin < s.minTicket && r ? s.showAnimateMsg("\u6700\u5c11\u6295\u6ce8" + s.minTicket) : s.commitBetSure() : s.showAnimateMsg("\u8bf7\u8f93\u5165\u6295\u6ce8\u6570\u91cf")
                    }
                    ,
                    s.commitBetSure = function () {
                        var e = s.props.guessGameData.guessType
                            , t = +s.props["data-direct"]
                            , i = s.props.guessTicketData.isBoldGuess
                            , r = {
                            room_id: s.global.get("$ROOM.room_id"),
                            quiz_id: s.qid,
                            bet_amount: Object(Je.h)(s.state.guessDejin),
                            money_type: i ? 2 : 1
                        };
                        1 === e ? r.banker_id = s.bankerid : 2 === e && (r.option = t + 1);
                        var n = s.props.guessIconConfigData.activity_info.property_name || "";
                        s.guessThemeItemService.getGuessBetting({
                            joinAmount: s.joinAmount,
                            guessType: e,
                            direct: t,
                            buff: n,
                            config: r
                        })
                    }
                    ,
                    s.state = {
                        guessWinNum: 0,
                        guessDejin: 0,
                        overErr: !1,
                        overErrMsg: "",
                        animated: !1,
                        animatedMsg: ""
                    },
                    s.quizSetting = s.props.guessIconConfigData.quiz_setting || {},
                    s.rate = s.quizSetting.divided_rate || 0,
                    s.min = s.quizSetting.min_bet_gold || 0,
                    s.max = s.quizSetting.max_bet_gold || 0,
                    s.min_simple = s.quizSetting.min_simple_bet_gold || 0,
                    s.max_simple = s.quizSetting.max_simple_bet_gold || 0,
                    s.silver = 0,
                    s.deJinRef = null,
                    s.errRef = null,
                    s.loss = t.betData.loss || 0,
                    s.aktp = t.betData.aktp || 0,
                    s.systp = t.betData.systp || 0,
                    s.balance = Math.min(s.max, t.betData.balance || 0),
                    s.bankerid = t.betData.bankerid || 0,
                    s.qid = t.betData.qid || 0,
                    s.joinAmount = t.betData.joinAmount || 0,
                    s.joinAmount = t.betData.joinAmount || 0,
                    s.overErrMsg = function () {
                        return ["", "\u8d85\u51fa\u4f59\u989d\u6216\u8d44\u91d1\u6c60\u4e0a\u9650", "\u8d85\u51fa\u4f59\u989d\u4e0a\u9650"]
                    }
                    ,
                    s.betAmountTicket = s.quizSetting.bet_amount_ticket,
                    s.minTicket = Object(Je.g)(s.quizSetting.min_bet_ticket),
                    s.maxTicket = Object(Je.g)(s.quizSetting.max_bet_ticket),
                    s
            }

            return GuessBetting_inherits(GuessBetting, e),
                GuessBetting.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    var t = e.betData
                        , s = e.guessThemeItemData
                        , i = s.betModalData
                        , r = void 0 === i ? {} : i
                        , n = s.betAnimatedMsg;
                    this.aktp = t.aktp,
                        this.systp = t.systp || 0,
                        this.qs = t.qs,
                        this.qid = t.qid,
                        this.joinAmount = t.joinAmount,
                        +this.props["data-direct"] !== +e["data-direct"] ? (this.formatDejin(""),
                            this.clearAnimateMsg(),
                            this.loss = t.loss,
                            this.balance = Math.min(this.max, t.balance || 0),
                            this.bankerid = t.bankerid) : r.errMsg && r.errConfig && r.errConfig.bankerid && (this.loss = r.errConfig.loss,
                            this.balance = r.errConfig.balance,
                            this.bankerid = r.errConfig.bankerid,
                            this.setState({
                                guessWinNum: this.calcSilver(this.deJinRef.value)
                            })),
                    n && this.state.overErr && this.setState({
                        overErr: !1,
                        overErrMsg: ""
                    })
                }
                ,
                GuessBetting.prototype.componentWillUnmount = function componentWillUnmount() {
                    this.clearAnimateMsg(),
                        this.guessThemeItemService.clearBetModalStatus()
                }
                ,
                GuessBetting.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.commonDataServices.getSilver().subscribe(function (t) {
                        var s = t.data;
                        e.silver = s
                    })
                }
                ,
                GuessBetting.prototype.numToFix = function numToFix(e) {
                    var t = e / 100;
                    return e % 100 === 0 ? t.toFixed(1) : t
                }
                ,
                GuessBetting.prototype.calcSilver = function calcSilver(e) {
                    return Object(Je.b)(this.loss, e, 100 - (this.aktp + this.systp))
                }
                ,
                GuessBetting.prototype.showBettingErrorMsg = function showBettingErrorMsg(e) {
                    var t = this;
                    this.timer && clearTimeout(this.timer),
                        this.clearAnimateMsg(),
                        this.setState({
                            overErr: !0,
                            overErrMsg: e
                        }),
                        this.timer = setTimeout(function () {
                            t.setState({
                                overErr: !1,
                                overErrMsg: ""
                            })
                        }, 2e3)
                }
                ,
                GuessBetting.prototype.clearAnimateMsg = function clearAnimateMsg() {
                    this.props.guessThemeItemData.betAnimatedMsg && this.guessThemeItemService.receiveBetAnimated({
                        flag: !1,
                        msg: ""
                    })
                }
                ,
                GuessBetting.prototype.showAnimateMsg = function showAnimateMsg(e) {
                    var t = this;
                    this.deJinRef && this.deJinRef.focus(),
                        this.guessThemeItemService.receiveBetAnimated({
                            flag: !0,
                            msg: e
                        }),
                        setTimeout(function () {
                            t.guessThemeItemService.receiveBetAnimated({
                                flag: !1,
                                msg: e
                            })
                        }, 500)
                }
                ,
                GuessBetting.prototype.renderBetOptions = function renderBetOptions() {
                    var e = this
                        , t = this.props.guessGameData.guessType
                        , s = [];
                    return s = this.props.guessTicketData.isBoldGuess ? this.betAmountTicket.map(function (e) {
                        return Object(Je.g)(e)
                    }) || [] : 1 === +t ? this.quizSetting.bet_amount : this.quizSetting.simple_bet_amount,
                        Zr.a.createElement("div", {
                            className: "chooseOptionBox",
                            __source: {
                                fileName: Go,
                                lineNumber: 357
                            },
                            __self: this
                        }, s.map(function (t, s) {
                            return Zr.a.createElement("span", {
                                key: s,
                                className: "chooseOption",
                                onClick: function onClick() {
                                    return e.addDejinNum(t)
                                },
                                __source: {
                                    fileName: Go,
                                    lineNumber: 360
                                },
                                __self: e
                            }, t)
                        }), Zr.a.createElement("span", {
                            className: "chooseOption",
                            onClick: function onClick() {
                                return e.allInDejinNum()
                            },
                            __source: {
                                fileName: Go,
                                lineNumber: 363
                            },
                            __self: this
                        }, "\u5168\u90e8"))
                }
                ,
                GuessBetting.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessGameData.guessType
                        , s = this.props.guessThemeItemData
                        , i = s.betAnimated
                        , r = s.betAnimatedMsg
                        , n = this.props.guessTicketData
                        , a = n.isBoldGuess
                        , o = n.ticketNum;
                    if (t <= 0)
                        return null;
                    var l = +this.props["data-direct"]
                        , u = this.state
                        , c = u.guessWinNum
                        , m = u.overErr
                        , p = u.overErrMsg;
                    return Zr.a.createElement("div", {
                        className: ["guessBettingPopup", 0 === l ? "is-left" : "is-right"].join(" "),
                        __source: {
                            fileName: Go,
                            lineNumber: 380
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessBettingPopup-guessBettingContent",
                        __source: {
                            fileName: Go,
                            lineNumber: 381
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btnClose",
                        onClick: function onClick() {
                            return e.props.shutBet()
                        },
                        __source: {
                            fileName: Go,
                            lineNumber: 382
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "guessBettingPopup-infoBox",
                        __source: {
                            fileName: Go,
                            lineNumber: 383
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "guessBettingPopup-infoItem is-posTwo",
                        __source: {
                            fileName: Go,
                            lineNumber: 384
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "oddIcon",
                        __source: {
                            fileName: Go,
                            lineNumber: 385
                        },
                        __self: this
                    }), "\u8d54\u7387", Zr.a.createElement("span", {
                        className: "itemNum",
                        __source: {
                            fileName: Go,
                            lineNumber: 385
                        },
                        __self: this
                    }, this.numToFix(this.loss)), 2 === t ? Zr.a.createElement("span", {
                        className: "oddTips",
                        __source: {
                            fileName: Go,
                            lineNumber: 386
                        },
                        __self: this
                    }, "(\u4ee5\u5c01\u76d8\u65f6\u8d54\u7387\u4e3a\u51c6\uff0c\u7ed3\u7b97\u6536\u76ca)") : null), 2 === t ? Zr.a.createElement("span", {
                        className: "guessBettingPopup-infoItem is-posOne",
                        __source: {
                            fileName: Go,
                            lineNumber: 389
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "poolIcon",
                        __source: {
                            fileName: Go,
                            lineNumber: 390
                        },
                        __self: this
                    }), "\u8d62\u5219\u83b7\u5f97", Zr.a.createElement("span", {
                        className: "itemNum",
                        __source: {
                            fileName: Go,
                            lineNumber: 390
                        },
                        __self: this
                    }, c), Zr.a.createElement("span", {
                        className: "oddTips",
                        __source: {
                            fileName: Go,
                            lineNumber: 391
                        },
                        __self: this
                    }, "(\u542b\u672c\u91d1)")) : Zr.a.createElement("span", {
                        __source: {
                            fileName: Go,
                            lineNumber: 394
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "guessBettingPopup-infoItem is-posThree",
                        __source: {
                            fileName: Go,
                            lineNumber: 395
                        },
                        __self: this
                    }, "\u8d62\u5219\u83b7\u5f97", Zr.a.createElement("span", {
                        className: "itemNum",
                        __source: {
                            fileName: Go,
                            lineNumber: 395
                        },
                        __self: this
                    }, c)), Zr.a.createElement("span", {
                        className: "guessBettingPopup-infoItem is-posOne",
                        __source: {
                            fileName: Go,
                            lineNumber: 396
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "poolIcon",
                        __source: {
                            fileName: Go,
                            lineNumber: 397
                        },
                        __self: this
                    }), "\u8d44\u91d1\u6c60", Zr.a.createElement("span", {
                        className: "itemNum",
                        __source: {
                            fileName: Go,
                            lineNumber: 397
                        },
                        __self: this
                    }, Object(Je.g)(this.balance))))), Zr.a.createElement("div", {
                        className: "guessBettingPopup-betCoreBox",
                        __source: {
                            fileName: Go,
                            lineNumber: 403
                        },
                        __self: this
                    }, a ? Zr.a.createElement("div", {
                        class: "guessBettingPopup-myTicket",
                        __source: {
                            fileName: Go,
                            lineNumber: 406
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        class: "ticketIcon",
                        __source: {
                            fileName: Go,
                            lineNumber: 407
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        class: "guessTicketName",
                        __source: {
                            fileName: Go,
                            lineNumber: 408
                        },
                        __self: this
                    }, "\u6211\u7684\u63a2\u9669\u5238"), Zr.a.createElement("span", {
                        class: "myTicketNum",
                        __source: {
                            fileName: Go,
                            lineNumber: 409
                        },
                        __self: this
                    }, Object(Je.g)(o)), Zr.a.createElement("span", {
                        class: "guessMyTicketQuestion",
                        __source: {
                            fileName: Go,
                            lineNumber: 410
                        },
                        __self: this
                    }, "?", Zr.a.createElement("div", {
                        class: "myTicketQuestionCont",
                        __source: {
                            fileName: Go,
                            lineNumber: 411
                        },
                        __self: this
                    }, "\u8d60\u9001\u793c\u7269\u3010\u5c0f\u98de\u789f\u3011\u53ef\u83b7\u5f97\u63a2\u9669\u5238"))) : null, m ? Zr.a.createElement("div", {
                        className: "guessBettingPopup-err",
                        __source: {
                            fileName: Go,
                            lineNumber: 416
                        },
                        __self: this
                    }, p) : null, r ? Zr.a.createElement("div", {
                        className: "guessBettingPopup-err2",
                        __source: {
                            fileName: Go,
                            lineNumber: 417
                        },
                        __self: this
                    }, r) : null, Zr.a.createElement("div", {
                        className: "guessBettingPopup-inputBox",
                        __source: {
                            fileName: Go,
                            lineNumber: 418
                        },
                        __self: this
                    }, Zr.a.createElement("input", {
                        className: ["betInput", i ? "is-animated" : ""].join(" "),
                        maxLength: "9",
                        placeholder: "\u8bf7\u8f93\u5165\u6295\u6ce8\u6570\u91cf",
                        onChange: this.changeDejin,
                        ref: function ref(t) {
                            e.deJinRef = t
                        },
                        __source: {
                            fileName: Go,
                            lineNumber: 419
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "clearInput",
                        onClick: function onClick() {
                            return e.formatDejin("")
                        },
                        __source: {
                            fileName: Go,
                            lineNumber: 425
                        },
                        __self: this
                    })), this.renderBetOptions()), Zr.a.createElement("div", {
                        className: "guessGame--btnBox",
                        __source: {
                            fileName: Go,
                            lineNumber: 429
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM",
                        onClick: this.betSure,
                        __source: {
                            fileName: Go,
                            lineNumber: 430
                        },
                        __self: this
                    }, "\u786e \u5b9a"))))
                }
                ,
                GuessBetting
        }(Zr.a.Component),
            fo = GuessBetting_applyDecoratedDescriptor(po.prototype, "commonDataServices", [oo], {
                enumerable: !0,
                initializer: null
            }),
            _o = GuessBetting_applyDecoratedDescriptor(po.prototype, "guessThemeItemService", [lo], {
                enumerable: !0,
                initializer: null
            }),
            ho = GuessBetting_applyDecoratedDescriptor(po.prototype, "localStorage", [uo], {
                enumerable: !0,
                initializer: null
            }),
            bo = GuessBetting_applyDecoratedDescriptor(po.prototype, "global", [co], {
                enumerable: !0,
                initializer: null
            }),
            mo = po)) || mo)
            , To = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                guessThemeItemData: e.guessThemeItemData,
                guessIconConfigData: e.guessIconConfigData,
                guessTicketData: e.guessTicketData
            }
        })(So)
            , Do = s("e92f2")
            , Eo = s.n(Do)
            , wo = s("770d6");

        function GuessThemeItemBgkAd_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessThemeItemBgkAd_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessThemeItemBgkAd_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Po, Oo, ko, Ro, Co, jo, Mo, zo, Io, Lo, Ao, Bo, xo = function (e) {
            function GuessThemeItemBgkAd() {
                var t, s;
                !function GuessThemeItemBgkAd_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessThemeItemBgkAd);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessThemeItemBgkAd_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    s.handleClickSign = function (e) {
                        e.preventDefault()
                    }
                    ,
                    GuessThemeItemBgkAd_possibleConstructorReturn(s, t)
            }

            return GuessThemeItemBgkAd_inherits(GuessThemeItemBgkAd, e),
                GuessThemeItemBgkAd.prototype.render = function render() {
                    var e = this.state
                        , t = e.exConfig
                        , s = void 0 === t ? {} : t
                        , i = e.src
                        , r = e.link;
                    return Zr.a.createElement(wo.SignTemplate, {
                        propsData: {
                            hideSpec: !0
                        },
                        src: i,
                        link: r,
                        EC: s,
                        handleShowSign: this.handleShowSign,
                        handleClickSign: this.handleClickSign,
                        __source: {
                            fileName: "/shark/live/src/pages/roomPage/guessGameModule/components/GuessThemeItemBgkAd/GuessThemeItemBgkAd.js",
                            lineNumber: 21
                        },
                        __self: this
                    })
                }
                ,
                GuessThemeItemBgkAd
        }(Eo.a), qo = (s("8b0d7"),
            Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ), Uo = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessThemeItem/GuessThemeItem.js";

        function GuessThemeItem_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessThemeItem_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessThemeItem_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessThemeItem_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Ho, Yo, Wo, Fo, Jo, Vo, Qo, $o, Ko = r.a.Service, Xo = r.a.Region, Zo = (Po = Ko(It),
            Oo = Ko(Dt),
            ko = Ko(lt),
            Ro = Ko(We),
            Co = Ko(n.DataCenter.global),
        Object(rs.log)((Mo = function (e) {
            function GuessThemeItem(t) {
                !function GuessThemeItem_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessThemeItem);
                var s = function GuessThemeItem_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessThemeItem_initDefineProp(s, "guessMainPanelService", zo, s),
                    GuessThemeItem_initDefineProp(s, "guessThemeItemService", Io, s),
                    GuessThemeItem_initDefineProp(s, "guessTicketServices", Lo, s),
                    GuessThemeItem_initDefineProp(s, "guessDYSubService", Ao, s),
                    GuessThemeItem_initDefineProp(s, "global", Bo, s),
                    s.guessCommitOneResult = function (e) {
                        var t = s.props.guessGameData.role;
                        s.setState({
                            commitResultVisble: !0
                        }),
                            s.guessDYSubService.guessGameDYSub("click_anchorquiz_end", {
                                is_anch: +t,
                                type: 1
                            }),
                            s.guessThemeItemService.guessCommitResult(e)
                    }
                    ,
                    s.showDealer = function () {
                        if (!ie.a.check())
                            return ie.a.show();
                        s.shutBet();
                        var e = s.props.guessThemeItemData.hasGetCornerStatus
                            , t = s.props.guessTicketData.isBoldGuess;
                        if (!e)
                            return null;
                        if (s.state.dealerVisible)
                            return null;
                        var i = +s.props["data-index"]
                            , r = s.props.guessThemeData.list[i];
                        return !r || +r.qs > 1 ? null : (t ? s.guessTicketServices.getTicketNum({
                            type: "dealer",
                            index: s.index
                        }) : s.guessThemeItemService.switchDealerModalStatus({
                            state: !0,
                            index: s.index
                        }),
                            null)
                    }
                    ,
                    s.shutDealer = function () {
                        s.guessThemeItemService.switchDealerModalStatus({
                            state: !1
                        })
                    }
                    ,
                    // shouwBet
                    s.showBet = function (e) {
                        var t = s.props.guessThemeItemData
                            , i = t.betIndex
                            , r = t.betDirect
                            , n = t.betModalStatus
                            , a = s.props.guessTicketData.isBoldGuess;
                        if (!n || s.index !== i || e !== r) {
                            var o = +s.props["data-index"]
                                , l = s.props.guessGameData.guessType
                                , u = s.props.guessThemeData.list
                                , c = (void 0 === u ? [] : u)[o];
                            c && (1 === l ? s.setState({
                                betData: {
                                    loss: 0 === e ? +c.folpc : c.solpc,
                                    aktp: +c.aktp ? +c.aktp : 0,
                                    systp: +c.systp ? +c.systp : 0,
                                    balance: 0 === e ? +c.fbmc : +c.sbmc,
                                    bankerid: 0 === e ? +c.fbid : +c.sbid,
                                    qs: +c.qs,
                                    qid: +c.qid,
                                    joinAmount: 0 === e ? +c.fjoinAmount : +c.sjoinAmount
                                }
                            }) : 2 === l && s.setState({
                                betData: {
                                    loss: 0 === e ? +c.op1pr : c.op2pr,
                                    aktp: 0,
                                    balance: 0,
                                    bankerid: 0,
                                    qs: +c.qs,
                                    qid: +c.qid,
                                    joinAmount: 0 === e ? +c.fjoinAmount : +c.sjoinAmount
                                }
                            }),
                                a ? s.guessTicketServices.getTicketNum({
                                    type: "bet",
                                    index: s.index,
                                    direct: e
                                }) : s.guessThemeItemService.switchBetModalStatus({
                                    state: !0,
                                    index: s.index,
                                    direct: e
                                }))
                        }
                    }
                    ,
                    s.shutBet = function () {
                        s.guessThemeItemService.switchBetModalStatus({
                            state: !1
                        })
                    }
                    ,
                    s.state = {
                        commitResultVisble: !1,
                        betDirect: -1,
                        betData: {}
                    },
                    s.openStopBidMask = s.openStopBidMask.bind(s),
                    s.index = +s.props["data-index"],
                    s
            }

            return GuessThemeItem_inherits(GuessThemeItem, e),
                GuessThemeItem.prototype.per = function per(e, t, s) {
                    var i = parseInt(e, 10)
                        , r = i + parseInt(t, 10)
                        , n = void 0;
                    if (0 === r)
                        n = 0;
                    else {
                        var a = Math.floor(i / r * 100);
                        n = s ? a : 100 - a,
                            n = Math.max(n, 5),
                            n = Math.min(n, 95)
                    }
                    return {
                        width: n + "%"
                    }
                }
                ,
                GuessThemeItem.prototype.per2 = function per2(e, t, s) {
                    var i = parseInt(e, 10)
                        , r = i + parseInt(t, 10)
                        , n = void 0;
                    if (0 === r)
                        n = 0;
                    else {
                        var a = Math.floor(i / r * 100);
                        n = s ? a : 100 - a
                    }
                    return {
                        width: n + "%"
                    }
                }
                ,
                GuessThemeItem.prototype.openStopBidMask = function openStopBidMask() {
                    var e = this.props["data-index"];
                    this.guessMainPanelService.modifyStopBidMask(e, !0)
                }
                ,
                GuessThemeItem.prototype.renderFooter = function renderFooter(e, t, s) {
                    var i = this
                        , r = this.props.guessGameData.role
                        , n = this.props.guessGameData.identy
                        , a = +this.global.get("USER_INFO.uid");
                    return r || 2 === n && a === +e ? Zr.a.createElement("div", {
                        className: "GuessGameBox-footer",
                        __source: {
                            fileName: Uo,
                            lineNumber: 121
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "division",
                        __source: {
                            fileName: Uo,
                            lineNumber: 122
                        },
                        __self: this
                    }), 1 === t ? Zr.a.createElement("div", {
                        className: "footButton",
                        onClick: this.openStopBidMask,
                        __source: {
                            fileName: Uo,
                            lineNumber: 125
                        },
                        __self: this
                    }, "\u5c01 \u76d8") : Zr.a.createElement("div", {
                        className: "footButton is-disabled",
                        __source: {
                            fileName: Uo,
                            lineNumber: 127
                        },
                        __self: this
                    }, "\u5df2\u5c01\u76d8"), Zr.a.createElement("div", {
                        className: ["footButton", 1 === t || 2 === t ? "" : "is-disabled"].join(" "),
                        onClick: function onClick() {
                            i.guessCommitOneResult(s)
                        },
                        __source: {
                            fileName: Uo,
                            lineNumber: 129
                        },
                        __self: this
                    }, 1 === t || 2 === t ? "\u7ed3 \u675f" : "\u5df2\u7ed3\u675f")) : null
                }
                ,
                GuessThemeItem.prototype.renderMiddle = function renderMiddle(e) {
                    var t = this.props.guessGameData.guessType
                        , s = this.props.guessGameData.role;
                    if (2 === t || s)
                        return Zr.a.createElement("div", {
                            className: "GuessContItem-middle",
                            __source: {
                                fileName: Uo,
                                lineNumber: 257
                            },
                            __self: this
                        });
                    var i = "";
                    return 1 === e ? i = "available" : e >= 3 && (i = "disabled"),
                        Zr.a.createElement("div", {
                            className: "GuessGameBox-beginGuessBox",
                            __source: {
                                fileName: Uo,
                                lineNumber: 269
                            },
                            __self: this
                        }, Zr.a.createElement("div", {
                            className: ["beginGuess", i].join(" "),
                            onClick: this.showDealer,
                            __source: {
                                fileName: Uo,
                                lineNumber: 270
                            },
                            __self: this
                        }, "\u5f00\u731c", Zr.a.createElement("div", {
                            className: "beginGuessHoverTips",
                            __source: {
                                fileName: Uo,
                                lineNumber: 271
                            },
                            __self: this
                        }, "\u5f00\u731c\u6709\u673a\u4f1a\u8d62\u66f4\u591a\u54e6")))
                }
                ,
                GuessThemeItem.prototype.renderProcess = function renderProcess(e) {
                    var t = this.props.guessGameData.role
                        , s = this.props.guessGameData.guessType
                        , i = this.props.guessThemeData.list
                        , r = (void 0 === i ? [] : i)[e]
                        , n = 3 === +r.qs && 2 === +r.wo ? " guessProgressDisabled" : ""
                        , a = 3 === +r.qs && 1 === +r.wo ? " guessProgressDisabled" : "";
                    return r ? 1 === s ? Zr.a.createElement("div", {
                        className: "GuessGameBox-progress guessGame--clearfix",
                        __source: {
                            fileName: Uo,
                            lineNumber: 293
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "defaultLeft",
                        __source: {
                            fileName: Uo,
                            lineNumber: 294
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "defaultRight",
                        __source: {
                            fileName: Uo,
                            lineNumber: 295
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: ["progressLeft", n].join(""),
                        style: this.per(+r.fobc, +r.sobc, !0),
                        __source: {
                            fileName: Uo,
                            lineNumber: 296
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: ["progressRight", a].join(""),
                        style: this.per(+r.fobc, +r.sobc, !1),
                        __source: {
                            fileName: Uo,
                            lineNumber: 297
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: "bidNumLeft",
                        __source: {
                            fileName: Uo,
                            lineNumber: 298
                        },
                        __self: this
                    }, Object(Je.d)(Object(Je.g)(+r.fobc))), Zr.a.createElement("span", {
                        className: "bidNumRight",
                        __source: {
                            fileName: Uo,
                            lineNumber: 299
                        },
                        __self: this
                    }, Object(Je.d)(Object(Je.g)(+r.sobc))), t ? null : Zr.a.createElement("i", {
                        className: "vsIcon",
                        __source: {
                            fileName: Uo,
                            lineNumber: 300
                        },
                        __self: this
                    })) : 2 === s ? Zr.a.createElement("div", {
                        className: "GuessGameBox-progress guessGame--clearfix is-simple",
                        __source: {
                            fileName: Uo,
                            lineNumber: 305
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "progressLeft-box",
                        __source: {
                            fileName: Uo,
                            lineNumber: 306
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "progressLeft",
                        style: this.per2(+r.op1to, +r.op2to, !0),
                        __source: {
                            fileName: Uo,
                            lineNumber: 307
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "progressRight-box",
                        __source: {
                            fileName: Uo,
                            lineNumber: 309
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "progressRight",
                        style: this.per2(+r.op1to, +r.op2to, !1),
                        __source: {
                            fileName: Uo,
                            lineNumber: 310
                        },
                        __self: this
                    })), Zr.a.createElement("span", {
                        className: "bidNumLeft",
                        __source: {
                            fileName: Uo,
                            lineNumber: 312
                        },
                        __self: this
                    }, Object(Je.d)(Object(Je.g)(+r.op1to))), Zr.a.createElement("span", {
                        className: "bidNumRight",
                        __source: {
                            fileName: Uo,
                            lineNumber: 313
                        },
                        __self: this
                    }, Object(Je.d)(Object(Je.g)(+r.op2to)))) : null : null
                }
                ,
                GuessThemeItem.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessGameData.role
                        , s = +this.props["data-index"]
                        , i = this.props.guessThemeData
                        , r = i.list
                        , n = i.stopBidList
                        , a = r[s]
                        , o = n[s] && n[s].stopBidMask
                        , l = +a.qs >= 3 ? " is-guessEnd" : ""
                        , u = this.props.guessThemeItemData
                        , c = u.dealerModalStatus
                        , m = u.betModalStatus
                        , p = u.betIndex
                        , f = u.dealerIndex
                        , _ = u.betDirect
                        , d = this.props.guessTicketData.isBoldGuess;
                    return Zr.a.createElement("div", {
                        className: "GuessGameBox",
                        "data-qid": a.qid,
                        "data-qt": a.qt,
                        "data-fon": a.fon,
                        "data-son": a.son,
                        "data-index": s,
                        __source: {
                            fileName: Uo,
                            lineNumber: 337
                        },
                        __self: this
                    }, Zr.a.createElement(Xo, {
                        name: "sign",
                        belongTo: "ToolbarApp",
                        className: "GuessGameBox-ItemBgkAd",
                        data: {
                            id: "4112214",
                            viewRender: function viewRender() {
                                return Zr.a.createElement(xo, {
                                    data: {
                                        id: "4112214"
                                    },
                                    __source: {
                                        fileName: Uo,
                                        lineNumber: 346
                                    },
                                    __self: e
                                })
                            }
                        },
                        __source: {
                            fileName: Uo,
                            lineNumber: 339
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: ["GuessGameBox-theme", l].join(""),
                        "data-qs": a.qs,
                        "data-suid": a.suid,
                        "data-sname": a.sname,
                        __source: {
                            fileName: Uo,
                            lineNumber: 350
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessGameBox-main",
                        __source: {
                            fileName: Uo,
                            lineNumber: 351
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessGameBox-header guessGame--clearfix",
                        __source: {
                            fileName: Uo,
                            lineNumber: 352
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "boxLeft",
                        dangerouslySetInnerHTML: {
                            __html: a.qt
                        },
                        __source: {
                            fileName: Uo,
                            lineNumber: 353
                        },
                        __self: this
                    }), Zr.a.createElement(ka, {
                        "data-index": s,
                        __source: {
                            fileName: Uo,
                            lineNumber: 354
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "GuessGameBox-container",
                        __source: {
                            fileName: Uo,
                            lineNumber: 356
                        },
                        __self: this
                    }, Zr.a.createElement(Ba, {
                        "data-index": s,
                        "data-direct": "0",
                        showBet: this.showBet,
                        __source: {
                            fileName: Uo,
                            lineNumber: 357
                        },
                        __self: this
                    }), this.renderMiddle(+a.qs, d), Zr.a.createElement(Ba, {
                        "data-index": s,
                        "data-direct": "1",
                        showBet: this.showBet,
                        __source: {
                            fileName: Uo,
                            lineNumber: 359
                        },
                        __self: this
                    })), this.renderProcess(s)), this.renderFooter(+a.suid, +a.qs, s)), a.hasShowHotTipStatus ? Zr.a.createElement("div", {
                        className: "GuessGameBox-hotTip",
                        __source: {
                            fileName: Uo,
                            lineNumber: 365
                        },
                        __self: this
                    }, t ? "\u5df2\u4e3a\u60a8\u589e\u52a0\u70ed\u5ea6\u503c" : "\u5df2\u4e3a\u4e3b\u64ad\u589e\u52a0\u70ed\u5ea6\u503c") : null, o ? Zr.a.createElement(Wa, {
                        "data-index": s,
                        __source: {
                            fileName: Uo,
                            lineNumber: 366
                        },
                        __self: this
                    }) : null, c && this.index === f ? Zr.a.createElement(vo, {
                        dealerModalStatus: c,
                        shutDealer: this.shutDealer,
                        "data-index": s,
                        __source: {
                            fileName: Uo,
                            lineNumber: 369
                        },
                        __self: this
                    }) : null, m && this.index === p ? Zr.a.createElement(To, {
                        betModalStatus: m,
                        shutBet: this.shutBet,
                        "data-index": s,
                        "data-direct": _,
                        betData: qo({}, this.state.betData, {
                            isBoldGuess: d
                        }),
                        __source: {
                            fileName: Uo,
                            lineNumber: 377
                        },
                        __self: this
                    }) : null)
                }
                ,
                GuessThemeItem
        }(Zr.a.Component),
            zo = GuessThemeItem_applyDecoratedDescriptor(Mo.prototype, "guessMainPanelService", [Po], {
                enumerable: !0,
                initializer: null
            }),
            Io = GuessThemeItem_applyDecoratedDescriptor(Mo.prototype, "guessThemeItemService", [Oo], {
                enumerable: !0,
                initializer: null
            }),
            Lo = GuessThemeItem_applyDecoratedDescriptor(Mo.prototype, "guessTicketServices", [ko], {
                enumerable: !0,
                initializer: null
            }),
            Ao = GuessThemeItem_applyDecoratedDescriptor(Mo.prototype, "guessDYSubService", [Ro], {
                enumerable: !0,
                initializer: null
            }),
            Bo = GuessThemeItem_applyDecoratedDescriptor(Mo.prototype, "global", [Co], {
                enumerable: !0,
                initializer: null
            }),
            jo = Mo)) || jo), el = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessThemeData: e.guessThemeData,
                guessThemeItemData: e.guessThemeItemData,
                guessGameData: e.guessGameData,
                guessTicketData: e.guessTicketData
            }
        })(Zo), tl = (s("f30be"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessBodyTheme/GuessBodyTheme.js");

        function GuessBodyTheme_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessBodyTheme_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessBodyTheme_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessBodyTheme_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var sl, il = r.a.Service, rl = (Ho = il(It),
            Yo = il(n.DataCenter.event),
            Wo = il(n.DataCenter.global),
        Object(rs.log)((Jo = function (e) {
            function GuessBodyTheme(t) {
                !function GuessBodyTheme_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessBodyTheme);
                var s = function GuessBodyTheme_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessBodyTheme_initDefineProp(s, "guessMainPanelService", Vo, s),
                    GuessBodyTheme_initDefineProp(s, "event", Qo, s),
                    GuessBodyTheme_initDefineProp(s, "global", $o, s),
                    s.ifShowSliderBar = s.ifShowSliderBar.bind(s),
                    s.needResetSlider = !1,
                    s
            }

            return GuessBodyTheme_inherits(GuessBodyTheme, e),
                GuessBodyTheme.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.ifShowSliderBar(),
                        this.register = this.event.register(window, "resize").subscribe(function () {
                            e.ifShowSliderBar()
                        })
                }
                ,
                GuessBodyTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    var t = this.props.guessThemeData.list
                        , s = void 0 === t ? [] : t
                        , i = this.props.guessSliderData.rankWidth
                        , r = this.props.isFullScreen
                        , n = e.isFullScreen
                        , a = e.guessThemeData.list || []
                        , o = e.guessSliderData.rankWidth;
                    s.length !== a.length && (this.guessMainPanelService.modifyBodyBoxRight(0),
                        this.needResetSlider = !0),
                    i !== o && (this.needResetSlider = !0),
                    r !== n && (this.needResetSlider = !0)
                }
                ,
                GuessBodyTheme.prototype.componentDidUpdate = function componentDidUpdate() {
                    this.needResetSlider && (this.needResetSlider = !1,
                        this.ifShowSliderBar())
                }
                ,
                GuessBodyTheme.prototype.componentWillUnmount = function componentWillUnmount() {
                    this.guessMainPanelService.modifyBodyBoxRight(0),
                        this.register.unsubscribe()
                }
                ,
                GuessBodyTheme.prototype.ifShowSliderBar = function ifShowSliderBar() {
                    var e = this.hasGuessBox.clientWidth
                        , t = document.getElementById("js-player-dialog").offsetWidth || 0
                        , s = this.props.guessSliderData
                        , i = s.currentRight
                        , r = s.maxRight
                        , n = s.rankWidth
                        , a = s.rankStatus
                        , o = e - t;
                    if (o > 0 ? (r <= i && 0 !== i && o < r && this.guessMainPanelService.modifyBodyBoxRight(o),
                        this.guessMainPanelService.modifyBodyBoxMaxRight(o),
                        this.guessMainPanelService.changeSliderStatus(1)) : (this.guessMainPanelService.changeSliderStatus(0),
                        this.guessMainPanelService.modifyBodyBoxMaxRight(0),
                        this.guessMainPanelService.modifyBodyBoxRight(0)),
                    n > 0) {
                        var l = this.props.guessThemeData.list || []
                            , u = l.length >= 2 && t - [750, 1120][l.length - 2] >= n || l.length < 2 ? 1 : 0;
                        u !== a && this.guessMainPanelService.changePanelRankStatus(u)
                    }
                }
                ,
                GuessBodyTheme.prototype.guessBoxSize = function guessBoxSize() {
                    var e = this.props.guessThemeData.list
                        , t = this.props.guessGameData.guessThemeAnimatedStatus
                        ,
                        s = e.length > 0 ? "GuessMainPanel-body-" + ["one", "two", "three"][(e.length - 1) % 3] + "Box" : ""
                        , i = t ? "hasAnimated" : ""
                        , r = this.props.guessGameData.role
                        , n = this.props.guessGameData.identy
                        , a = +this.global.get("USER_INFO.uid");
                    return [s, i, r || 2 === +n && e.length > 0 && a === +e[0].suid ? "" : "guessGame--topGapM"].join(" ")
                }
                ,
                GuessBodyTheme.prototype.render = function render() {
                    var e = this
                        , t = this.guessBoxSize();
                    return Zr.a.createElement("div", {
                        className: t,
                        id: "guess-game-has-guessbox",
                        ref: function ref(t) {
                            return e.hasGuessBox = t
                        },
                        __source: {
                            fileName: tl,
                            lineNumber: 142
                        },
                        __self: this
                    }, this.props.guessThemeData.list.map(function (t, s) {
                        return Zr.a.createElement(el, {
                            "data-index": s,
                            key: s,
                            __source: {
                                fileName: tl,
                                lineNumber: 146
                            },
                            __self: e
                        })
                    }))
                }
                ,
                GuessBodyTheme
        }(Zr.a.Component),
            Vo = GuessBodyTheme_applyDecoratedDescriptor(Jo.prototype, "guessMainPanelService", [Ho], {
                enumerable: !0,
                initializer: null
            }),
            Qo = GuessBodyTheme_applyDecoratedDescriptor(Jo.prototype, "event", [Yo], {
                enumerable: !0,
                initializer: null
            }),
            $o = GuessBodyTheme_applyDecoratedDescriptor(Jo.prototype, "global", [Wo], {
                enumerable: !0,
                initializer: null
            }),
            Fo = Jo)) || Fo), nl = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                isFullScreen: e.guessIconEntryData.isFullScreen,
                guessThemeData: e.guessThemeData,
                guessSliderData: e.guessSliderData
            }
        })(rl), al = (s("072f1"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessAnchorNoPanel/GuessAnchorNoPanel.js");

        function GuessAnchorNoPanel_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessAnchorNoPanel_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var ol, ll, ul, cl, ml = Object(rs.log)(sl = function (e) {
            function GuessAnchorNo() {
                return function GuessAnchorNoPanel_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessAnchorNo),
                    function GuessAnchorNoPanel_possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }

            return GuessAnchorNoPanel_inherits(GuessAnchorNo, e),
                GuessAnchorNo.prototype.render = function render() {
                    var e = this;
                    return Zr.a.createElement("div", {
                        className: "GuessNoGuessBox is-show",
                        __source: {
                            fileName: al,
                            lineNumber: 16
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "noGuessTitle",
                        __source: {
                            fileName: al,
                            lineNumber: 17
                        },
                        __self: this
                    }, "\u5f53\u524d\u6ca1\u6709\u53d1\u8d77\u7ade\u731c~"), Zr.a.createElement("div", {
                        className: "secondTitle",
                        __source: {
                            fileName: al,
                            lineNumber: 18
                        },
                        __self: this
                    }, "\u60a8\u53ef\u4ee5\u53d1\u8d77\u7ade\u731c\uff0c\u5e26\u7ed9\u6c34\u53cb\u66f4\u591a\u6b22\u4e50\uff01"), Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeL",
                        onClick: function onClick() {
                            return e.props.startQuiz()
                        },
                        __source: {
                            fileName: al,
                            lineNumber: 19
                        },
                        __self: this
                    }, "\u53d1\u8d77\u7ade\u731c"))
                }
                ,
                GuessAnchorNo
        }(Zr.a.Component)) || sl, pl = (s("f976f"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessRecommendItem/GuessRecommendItem.js");

        function GuessRecommendItem_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessRecommendItem_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessRecommendItem_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var fl, _l, dl, hl, bl = (ol = (0,
            r.a.Service)(We),
        Object(rs.log)((ul = function (e) {
            function GuessRecommendItem() {
                var t, s;
                !function GuessRecommendItem_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessRecommendItem);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessRecommendItem_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    function GuessRecommendItem_initDefineProp(e, t, s, i) {
                        s && Object.defineProperty(e, t, {
                            enumerable: s.enumerable,
                            configurable: s.configurable,
                            writable: s.writable,
                            value: s.initializer ? s.initializer.call(i) : void 0
                        })
                    }(s, "guessDYSubService", cl, s),
                    s.clickRecommend = function (e) {
                        s.guessDYSubService.guessGameDYSub("click_quiz_room", {
                            rid: e
                        })
                    }
                    ,
                    GuessRecommendItem_possibleConstructorReturn(s, t)
            }

            return GuessRecommendItem_inherits(GuessRecommendItem, e),
                GuessRecommendItem.prototype.render = function render() {
                    var e = this
                        , t = this.props["data-item"] || {};
                    return Zr.a.createElement("a", {
                        href: "/" + t.roomId,
                        target: "_blank",
                        className: "GuessGuideList-item GuessGuideList-itemBox",
                        onClick: function onClick() {
                            return e.clickRecommend(t.roomId)
                        },
                        __source: {
                            fileName: pl,
                            lineNumber: 32
                        },
                        __self: this
                    }, 2 === +t.moneyType ? Zr.a.createElement("i", {
                        className: "GuessGuideList-ticketMark",
                        title: "\u63a2\u9669\u5238\u7ade\u731c",
                        __source: {
                            fileName: pl,
                            lineNumber: 35
                        },
                        __self: this
                    }) : null, Zr.a.createElement("div", {
                        className: "imageBox",
                        __source: {
                            fileName: pl,
                            lineNumber: 36
                        },
                        __self: this
                    }, Zr.a.createElement("img", {
                        src: t.avatar,
                        __source: {
                            fileName: pl,
                            lineNumber: 36
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "recommendBox",
                        __source: {
                            fileName: pl,
                            lineNumber: 37
                        },
                        __self: this
                    }, Zr.a.createElement("h2", {
                        className: "guessGame--ell name",
                        title: t.nickname,
                        __source: {
                            fileName: pl,
                            lineNumber: 38
                        },
                        __self: this
                    }, t.nickname), Zr.a.createElement("p", {
                        __source: {
                            fileName: pl,
                            lineNumber: 39
                        },
                        __self: this
                    }, t.playerCount, "\u4eba\u6b63\u5728\u7ade\u731c"), Zr.a.createElement("p", {
                        __source: {
                            fileName: pl,
                            lineNumber: 40
                        },
                        __self: this
                    }, t.tagName)))
                }
                ,
                GuessRecommendItem
        }(Zr.a.Component),
            cl = function GuessRecommendItem_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(ul.prototype, "guessDYSubService", [ol], {
                enumerable: !0,
                initializer: null
            }),
            ll = ul)) || ll), gl = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData
            }
        })(bl), yl = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessRecommend/GuessRecommend.js";

        function GuessRecommend_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessRecommend_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var vl, Gl, Nl, Sl, Tl, Dl, El = (fl = (0,
            r.a.Service)(n.DataCenter.global),
        Object(rs.log)((dl = function (e) {
            function GuessRecommend(t) {
                !function GuessRecommend_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessRecommend);
                var s = function GuessRecommend_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return function GuessRecommend_initDefineProp(e, t, s, i) {
                    s && Object.defineProperty(e, t, {
                        enumerable: s.enumerable,
                        configurable: s.configurable,
                        writable: s.writable,
                        value: s.initializer ? s.initializer.call(i) : void 0
                    })
                }(s, "global", hl, s),
                    s.state = {
                        isShow: !1
                    },
                    s
            }

            return GuessRecommend_inherits(GuessRecommend, e),
                GuessRecommend.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    setTimeout(function () {
                        e.setState({
                            isShow: !0
                        })
                    }, 150)
                }
                ,
                GuessRecommend.prototype.renderText = function renderText() {
                    var e = this
                        ,
                        t = 1 === +(this.props.guessIconRoomConfigData ? this.props.guessIconRoomConfigData.show_status : 0) ? 1 : 0;
                    return 1 === this.props.guessGameData.identy ? Zr.a.createElement("div", {
                        __source: {
                            fileName: yl,
                            lineNumber: 48
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "noGuessTitle",
                        __source: {
                            fileName: yl,
                            lineNumber: 49
                        },
                        __self: this
                    }, "\u672c\u623f\u95f4\u4e3b\u64ad\u6682\u672a\u53d1\u8d77\u7ade\u731c~"), Zr.a.createElement("div", {
                        className: "secondTitle2",
                        __source: {
                            fileName: yl,
                            lineNumber: 50
                        },
                        __self: this
                    }, "\u770b\u770b\u4e0b\u9762\u6b63\u5728\u8fdb\u884c\u7684\u7ade\u731c\u5427")) : Zr.a.createElement("div", {
                        __source: {
                            fileName: yl,
                            lineNumber: 53
                        },
                        __self: this
                    }, t ? Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeL userStartQuiz",
                        onClick: function onClick() {
                            return e.props.startQuiz()
                        },
                        __source: {
                            fileName: yl,
                            lineNumber: 56
                        },
                        __self: this
                    }, "\u53d1\u8d77\u7ade\u731c") : null, Zr.a.createElement("div", {
                        className: "secondTitle2",
                        __source: {
                            fileName: yl,
                            lineNumber: 59
                        },
                        __self: this
                    }, "\u672c\u623f\u95f4\u4e3b\u64ad\u6682\u672a\u53d1\u8d77\u7ade\u731c\uff0c\u770b\u770b\u4e0b\u9762\u7684\u7ade\u731c\u5427~"))
                }
                ,
                GuessRecommend.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessGameData.recommendList
                        , s = this.state.isShow;
                    return Zr.a.createElement("div", {
                        className: ["GuessNoGuessBox ", s ? "is-show" : ""].join(" "),
                        __source: {
                            fileName: yl,
                            lineNumber: 69
                        },
                        __self: this
                    }, this.renderText(), Zr.a.createElement("div", {
                        className: "GuessGuideList",
                        __source: {
                            fileName: yl,
                            lineNumber: 71
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessGuideList-box",
                        __source: {
                            fileName: yl,
                            lineNumber: 72
                        },
                        __self: this
                    }, t.map(function (t, s) {
                        return Zr.a.createElement(gl, {
                            "data-index": s,
                            "data-item": t,
                            key: s,
                            __source: {
                                fileName: yl,
                                lineNumber: 75
                            },
                            __self: e
                        })
                    })), Zr.a.createElement("a", {
                        className: "GuessGuideList-item GuessGuideList-moreGuess",
                        href: "/directory/all#quiz_rooms",
                        target: "_blank",
                        __source: {
                            fileName: yl,
                            lineNumber: 82
                        },
                        __self: this
                    }, Zr.a.createElement("i", {
                        className: "moreBtn",
                        __source: {
                            fileName: yl,
                            lineNumber: 83
                        },
                        __self: this
                    }), Zr.a.createElement("h2", {
                        __source: {
                            fileName: yl,
                            lineNumber: 84
                        },
                        __self: this
                    }, "\u66f4\u591a\u7ade\u731c"))))
                }
                ,
                GuessRecommend
        }(Zr.a.Component),
            hl = function GuessRecommend_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(dl.prototype, "global", [fl], {
                enumerable: !0,
                initializer: null
            }),
            _l = dl)) || _l), wl = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                guessIconRoomConfigData: e.guessIconRoomConfigData
            }
        })(El), Pl = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessUserNoPanel/GuessUserNoPanel.js";

        function GuessUserNoPanel_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessUserNoPanel_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessUserNoPanel_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessUserNoPanel_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Ol, kl, Rl, Cl, jl = r.a.Service, Ml = (vl = jl(It),
            Gl = jl(n.DataCenter.global),
        Object(rs.log)((Sl = function (e) {
            function GuessUserNo(t) {
                !function GuessUserNoPanel_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessUserNo);
                var s = function GuessUserNoPanel_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessUserNoPanel_initDefineProp(s, "guessMainPanelService", Tl, s),
                    GuessUserNoPanel_initDefineProp(s, "global", Dl, s),
                    s.state = {
                        isShow: !1
                    },
                    s
            }

            return GuessUserNoPanel_inherits(GuessUserNo, e),
                GuessUserNo.prototype.componentDidMount = function componentDidMount() {
                    this.guessMainPanelService.getRecommendListByEpic()
                }
                ,
                GuessUserNo.prototype.showNoRecomendPanel = function showNoRecomendPanel() {
                    var e = this
                        ,
                        t = 1 === +(this.props.guessIconRoomConfigData ? this.props.guessIconRoomConfigData.show_status : 0) ? 1 : 0;
                    return 2 === this.props.guessGameData.identy && t ? Zr.a.createElement("div", {
                        className: "GuessNoGuessBox is-show",
                        __source: {
                            fileName: Pl,
                            lineNumber: 45
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "noGuessTitle",
                        __source: {
                            fileName: Pl,
                            lineNumber: 46
                        },
                        __self: this
                    }, "\u672c\u623f\u95f4\u4e3b\u64ad\u6682\u672a\u53d1\u8d77\u7ade\u731c~"), Zr.a.createElement("div", {
                        className: "secondTitle",
                        __source: {
                            fileName: Pl,
                            lineNumber: 47
                        },
                        __self: this
                    }, "\u7ade\u731c\u5185\u5bb9\u7531\u4f60\u5b9a\uff0c\u731c\u4f60\u60f3\u731c\u7684"), Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeL",
                        onClick: function onClick() {
                            return e.props.startQuiz()
                        },
                        __source: {
                            fileName: Pl,
                            lineNumber: 48
                        },
                        __self: this
                    }, "\u53d1\u8d77\u7ade\u731c")) : Zr.a.createElement("div", {
                        className: "GuessNoGuessBox is-show",
                        __source: {
                            fileName: Pl,
                            lineNumber: 51
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "emptyIcon",
                        __source: {
                            fileName: Pl,
                            lineNumber: 52
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "noGuessTitle emptyTitle",
                        __source: {
                            fileName: Pl,
                            lineNumber: 53
                        },
                        __self: this
                    }, "\u672c\u623f\u95f4\u4e3b\u64ad\u6682\u672a\u53d1\u8d77\u7ade\u731c~"))
                }
                ,
                GuessUserNo.prototype.render = function render() {
                    return 0 === this.props.guessGameData.recommendList.length ? this.showNoRecomendPanel() : Zr.a.createElement(wl, {
                        startQuiz: this.props.startQuiz,
                        __source: {
                            fileName: Pl,
                            lineNumber: 64
                        },
                        __self: this
                    })
                }
                ,
                GuessUserNo
        }(Zr.a.Component),
            Tl = GuessUserNoPanel_applyDecoratedDescriptor(Sl.prototype, "guessMainPanelService", [vl], {
                enumerable: !0,
                initializer: null
            }),
            Dl = GuessUserNoPanel_applyDecoratedDescriptor(Sl.prototype, "global", [Gl], {
                enumerable: !0,
                initializer: null
            }),
            Nl = Sl)) || Nl), zl = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                guessIconRoomConfigData: e.guessIconRoomConfigData
            }
        })(Ml), Il = (s("ea0ff"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessMainPanelSlider/GuessMainPanelSlider.js");

        function GuessMainPanelSlider_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessMainPanelSlider_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessMainPanelSlider_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Ll = (Ol = (0,
            r.a.Service)(It),
        Object(rs.log)((Rl = function (e) {
            function GuessMainPanelSlider() {
                var t, s;
                !function GuessMainPanelSlider_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessMainPanelSlider);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessMainPanelSlider_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    function GuessMainPanelSlider_initDefineProp(e, t, s, i) {
                        s && Object.defineProperty(e, t, {
                            enumerable: s.enumerable,
                            configurable: s.configurable,
                            writable: s.writable,
                            value: s.initializer ? s.initializer.call(i) : void 0
                        })
                    }(s, "guessMainPanelService", Cl, s),
                    s.clickSlider = function (e) {
                        var t = s.props.guessSliderData
                            , i = t.step
                            , r = t.currentRight
                            , n = t.maxRight
                            , a = "left" === e ? Math.min(r + i, n) : Math.max(r - i, 0);
                        s.guessMainPanelService.modifyBodyBoxRight(a)
                    }
                    ,
                    GuessMainPanelSlider_possibleConstructorReturn(s, t)
            }

            return GuessMainPanelSlider_inherits(GuessMainPanelSlider, e),
                GuessMainPanelSlider.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessSliderData.sliderStatus ? "is-show" : "";
                    return Zr.a.createElement("div", {
                        __source: {
                            fileName: Il,
                            lineNumber: 32
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanelSliderBar GuessMainPanelSliderBar--rightBar " + t,
                        onClick: function onClick() {
                            return e.clickSlider("left")
                        },
                        __source: {
                            fileName: Il,
                            lineNumber: 33
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "GuessMainPanelSliderBar GuessMainPanelSliderBar--leftBar " + t,
                        onClick: function onClick() {
                            return e.clickSlider("right")
                        },
                        __source: {
                            fileName: Il,
                            lineNumber: 35
                        },
                        __self: this
                    }))
                }
                ,
                GuessMainPanelSlider
        }(Zr.a.Component),
            Cl = function GuessMainPanelSlider_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(Rl.prototype, "guessMainPanelService", [Ol], {
                enumerable: !0,
                initializer: null
            }),
            kl = Rl)) || kl)
            , Al = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessSliderData: e.guessSliderData
            }
        })(Ll)
            , Bl = (s("4fdf8"),
            s("5ae9d"))
            , xl = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
            }
            return e
        }
            , ql = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessRank/commonFrag.js";

        function commonFrag_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function commonFrag_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Ul, Hl = function HOC(e) {
            return function (t) {
                function _class() {
                    return function commonFrag_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, _class),
                        function commonFrag_possibleConstructorReturn(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, t.apply(this, arguments))
                }

                return commonFrag_inherits(_class, t),
                    _class.prototype.dealWealthText = function dealWealthText(e) {
                        var t;
                        return "" === e ? "" : (t = 1 === this.rankType ? "\u6536\u76ca" : "\u4e8f\u635f",
                        (1 === this.rankPeriod ? "\u65e5" : "\u5468") + t)
                    }
                    ,
                    _class.prototype.dealWealthColor = function dealWealthColor(e) {
                        return "" === e ? "" : 1 === this.rankType ? " is-orange" : " is-blue"
                    }
                    ,
                    _class.prototype.dealWealthAmount = function dealWealthAmount(e) {
                        var t = Number(e);
                        if (0 === t)
                            return "";
                        if (t < 1e4)
                            return t;
                        if (t >= 1e4 && t < 1e8) {
                            var s = "" + String(Math.round(t / 1e3) / 10);
                            return (s.indexOf(".") > -1 ? s : s + ".0") + "\u4e07"
                        }
                        if (t >= 1e8) {
                            var i = "" + String(Math.round(t / 1e7) / 10);
                            return (i.indexOf(".") > -1 ? i : i + ".0") + "\u4ebf"
                        }
                        return !1
                    }
                    ,
                    _class.prototype.returnWealthFragment = function returnWealthFragment(e) {
                        return Zr.a.createElement("div", {
                            __source: {
                                fileName: ql,
                                lineNumber: 52
                            },
                            __self: this
                        }, this.dealWealthText(e), Zr.a.createElement("span", {
                            className: "GuessGameRank-userwealthTop " + this.dealWealthColor(e),
                            __source: {
                                fileName: ql,
                                lineNumber: 54
                            },
                            __self: this
                        }, this.dealWealthAmount(e)))
                    }
                    ,
                    _class.prototype.render = function render() {
                        var t = xl({}, this.props, {
                            dealWealthText: this.dealWealthText,
                            dealWealthColor: this.dealWealthColor,
                            dealWealthAmount: this.dealWealthAmount,
                            WealthFragment: this.returnWealthFragment
                        });
                        return Zr.a.createElement(e, xl({}, t, {
                            __source: {
                                fileName: ql,
                                lineNumber: 69
                            },
                            __self: this
                        }))
                    }
                    ,
                    _class
            }(Xr.Component)
        }, Yl = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessRank/TopThree.js";

        function TopThree_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function TopThree_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Wl, Fl = Object(rs.log)(Ul = Hl(Ul = function (e) {
            function TopThree() {
                return function TopThree_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, TopThree),
                    function TopThree_possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }

            return TopThree_inherits(TopThree, e),
                TopThree.prototype.orderClassName = function orderClassName(e, t) {
                    var s = "";
                    switch (e) {
                        case 0:
                            s = "--top2";
                            break;
                        case 1:
                            s = "--top1";
                            break;
                        case 2:
                            s = "--top3"
                    }
                    return "GuessGameRank-" + t + s
                }
                ,
                TopThree.prototype.render = function render() {
                    var e = this
                        , t = this.props["data-index"]
                        , s = this.props.rankList[t]
                        , i = this.props["data-domain"];
                    return Zr.a.createElement("div", {
                        className: "GuessGameRank-topthree",
                        __source: {
                            fileName: Yl,
                            lineNumber: 45
                        },
                        __self: this
                    }, Zr.a.createElement("ul", {
                        __source: {
                            fileName: Yl,
                            lineNumber: 46
                        },
                        __self: this
                    }, s.map(function (t, s) {
                        return s <= 2 ? Zr.a.createElement("li", {
                            key: s,
                            className: e.orderClassName(s),
                            __source: {
                                fileName: Yl,
                                lineNumber: 50
                            },
                            __self: e
                        }, Zr.a.createElement("div", {
                            className: "GuessGameRank-userArea",
                            __source: {
                                fileName: Yl,
                                lineNumber: 51
                            },
                            __self: e
                        }, Zr.a.createElement("div", {
                            className: "GuessGameRank-userIcon " + e.orderClassName(s, "userIcon"),
                            __source: {
                                fileName: Yl,
                                lineNumber: 52
                            },
                            __self: e
                        }, t.avatarUrl ? Zr.a.createElement("img", {
                            src: "" + i + t.avatarUrl + "_middle.jpg",
                            __source: {
                                fileName: Yl,
                                lineNumber: 54
                            },
                            __self: e
                        }) : null), 1 === s ? Zr.a.createElement("div", {
                            className: "GuessGameRank-userIconSides",
                            __source: {
                                fileName: Yl,
                                lineNumber: 56
                            },
                            __self: e
                        }) : "", Zr.a.createElement("div", {
                            className: "GuessGameRank-mingci " + e.orderClassName(s, "mingci"),
                            __source: {
                                fileName: Yl,
                                lineNumber: 57
                            },
                            __self: e
                        })), Zr.a.createElement("p", {
                            className: "GuessGameRank-username " + e.orderClassName(s, "username"),
                            title: t.nickname,
                            __source: {
                                fileName: Yl,
                                lineNumber: 61
                            },
                            __self: e
                        }, t.nickname), Zr.a.createElement("div", {
                            className: "GuessGameRank-userlevels",
                            __source: {
                                fileName: Yl,
                                lineNumber: 63
                            },
                            __self: e
                        }, "" !== t.expLevel ? Zr.a.createElement(Bl.a, {
                            userLevel: Number(t.expLevel),
                            __source: {
                                fileName: Yl,
                                lineNumber: 66
                            },
                            __self: e
                        }) : "", "" === t.uid ? "-" : ""), Zr.a.createElement("div", {
                            className: "GuessGameRank-userwealthTop",
                            __source: {
                                fileName: Yl,
                                lineNumber: 69
                            },
                            __self: e
                        }, e.props.WealthFragment(t.amount))) : ""
                    })))
                }
                ,
                TopThree
        }(Zr.a.Component)) || Ul) || Ul, Jl = Object(en.connect)(function mapStateToProps(e) {
            return {
                rankList: e.GuessRankData.rankList,
                rankPeriod: e.GuessRankData.rankPeriod,
                rankType: e.GuessRankData.rankType
            }
        })(Fl), Vl = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessRank/RankList.js";

        function RankList_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function RankList_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Ql, $l, Kl, Xl, Zl, eu, tu, su, iu = Object(rs.log)(Wl = Hl(Wl = function (e) {
            function RankList() {
                return function RankList_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, RankList),
                    function RankList_possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }

            return RankList_inherits(RankList, e),
                RankList.prototype.render = function render() {
                    var e = this
                        , t = this.props["data-index"]
                        , s = this.props.rankList[t];
                    return Zr.a.createElement("div", {
                        className: "GuessGameRank-ranklist",
                        __source: {
                            fileName: Vl,
                            lineNumber: 23
                        },
                        __self: this
                    }, Zr.a.createElement("ul", {
                        __source: {
                            fileName: Vl,
                            lineNumber: 24
                        },
                        __self: this
                    }, s.map(function (t, s) {
                        return s >= 3 ? Zr.a.createElement("li", {
                            key: s,
                            __source: {
                                fileName: Vl,
                                lineNumber: 28
                            },
                            __self: e
                        }, Zr.a.createElement("span", {
                            className: "GuessGameRank-ranknum",
                            __source: {
                                fileName: Vl,
                                lineNumber: 29
                            },
                            __self: e
                        }, s + 1), Zr.a.createElement("span", {
                            className: "GuessGameRank-rankname",
                            title: t.nickname,
                            __source: {
                                fileName: Vl,
                                lineNumber: 32
                            },
                            __self: e
                        }, t.nickname), Zr.a.createElement("div", {
                            className: "GuessGameRank-userwealthList",
                            __source: {
                                fileName: Vl,
                                lineNumber: 34
                            },
                            __self: e
                        }, e.props.WealthFragment(t.amount))) : ""
                    })))
                }
                ,
                RankList
        }(Zr.a.Component)) || Wl) || Wl, ru = Object(en.connect)(function mapStateToProps(e) {
            return {
                rankList: e.GuessRankData.rankList,
                rankPeriod: e.GuessRankData.rankPeriod,
                rankType: e.GuessRankData.rankType
            }
        })(iu), nu = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessRank/GuessRank.js";

        function GuessRank_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessRank_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessRank_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessRank_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var au = r.a.Service
            , ou = (Ql = au(nn),
            $l = au(We),
            Kl = au(n.DataCenter.global),
        Object(rs.log)((Zl = function (e) {
            function GuessRank() {
                var t = this;
                !function GuessRank_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessRank);
                var s = function GuessRank_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this));
                return GuessRank_initDefineProp(s, "guessRankService", eu, s),
                    GuessRank_initDefineProp(s, "guessDYSubService", tu, s),
                    GuessRank_initDefineProp(s, "global", su, s),
                    s.contentType = function (e, t) {
                        return e === t ? " is-active" : ""
                    }
                    ,
                    s.showLoading = function (e, s) {
                        return e ? Zr.a.createElement("div", {
                            className: "GuessGameRank-rankloading",
                            __source: {
                                fileName: nu,
                                lineNumber: 60
                            },
                            __self: t
                        }) : s ? Zr.a.createElement("div", {
                            className: "GuessGameRank-rankempty",
                            __source: {
                                fileName: nu,
                                lineNumber: 62
                            },
                            __self: t
                        }) : ""
                    }
                    ,
                    s.getBangdanActive = function (e, t, s) {
                        var i = ""
                            , r = "";
                        return t === s && (i = "is-active",
                            r = 1 === e ? "SY" : "TT"),
                        i + r
                    }
                    ,
                    s.hideRank = s.hideRank.bind(s),
                    s.changeType = s.changeType.bind(s),
                    s.changePeriod = s.changePeriod.bind(s),
                    s
            }

            return GuessRank_inherits(GuessRank, e),
                GuessRank.prototype.componentDidMount = function componentDidMount() {
                    this.guessDYSubService.guessGameDYSub("show_quiz_toplist", {}),
                        this.guessRankService.getRankListByEpic()
                }
                ,
                GuessRank.prototype.hideRank = function hideRank() {
                    this.guessRankService.hideRank()
                }
                ,
                GuessRank.prototype.changeType = function changeType(e) {
                    this.guessRankService.changeType(e)
                }
                ,
                GuessRank.prototype.changePeriod = function changePeriod(e) {
                    this.guessRankService.changePeriod(e)
                }
                ,
                GuessRank.prototype.getRankText = function getRankText() {
                    var e = this.props.guessIconConfigData.quiz_setting
                        , t = "";
                    if (e && e.ranklist_intro && e.ranklist_intro.length > 0) {
                        var s = e.ranklist_intro;
                        switch (this.props.rankType + "-" + this.props.rankPeriod) {
                            case "1-1":
                                t = s[0];
                                break;
                            case "1-2":
                                t = s[1];
                                break;
                            case "2-1":
                                t = s[2];
                                break;
                            case "2-2":
                                t = s[3];
                                break;
                            default:
                                t = ""
                        }
                    }
                    return t
                }
                ,
                GuessRank.prototype.render = function render() {
                    var e = this
                        , t = this.props.rankShow
                        , s = this.props.rankType
                        , i = this.props.rankPeriod
                        , r = this.props.isLoading
                        , n = this.props.isEmpty
                        , a = this.global.get("$SYS.avatar_url") + "upload/";
                    return Zr.a.createElement(an.a, {
                        className: "GuessGameRank",
                        visible: !!t,
                        footer: null,
                        closable: !1,
                        mask: !1,
                        maskClosable: !0,
                        width: 380,
                        onCancel: this.hideRank,
                        center: !0,
                        bodyStyle: {},
                        __source: {
                            fileName: nu,
                            lineNumber: 124
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessGameRank-header",
                        __source: {
                            fileName: nu,
                            lineNumber: 136
                        },
                        __self: this
                    }, Zr.a.createElement("ul", {
                        __source: {
                            fileName: nu,
                            lineNumber: 137
                        },
                        __self: this
                    }, Zr.a.createElement("li", {
                        className: "GuessGameRank-profit" + (1 === s ? " is-active" : ""),
                        onClick: function onClick() {
                            e.changeType(1)
                        },
                        __source: {
                            fileName: nu,
                            lineNumber: 138
                        },
                        __self: this
                    }), Zr.a.createElement("li", {
                        className: "GuessGameRank-loss" + (2 === s ? " is-active" : ""),
                        onClick: function onClick() {
                            e.changeType(2)
                        },
                        __source: {
                            fileName: nu,
                            lineNumber: 143
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "GuessGameRank-close",
                        onClick: function onClick() {
                            e.hideRank()
                        },
                        __source: {
                            fileName: nu,
                            lineNumber: 149
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "GuessGameRank-body",
                        __source: {
                            fileName: nu,
                            lineNumber: 154
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessGameRank-pltime",
                        __source: {
                            fileName: nu,
                            lineNumber: 155
                        },
                        __self: this
                    }, Zr.a.createElement("p", {
                        className: "GuessGameRank-text",
                        __source: {
                            fileName: nu,
                            lineNumber: 156
                        },
                        __self: this
                    }, this.getRankText()), Zr.a.createElement("div", {
                        className: "GuessGameRank-priodTab",
                        __source: {
                            fileName: nu,
                            lineNumber: 157
                        },
                        __self: this
                    }, Zr.a.createElement("ul", {
                        __source: {
                            fileName: nu,
                            lineNumber: 158
                        },
                        __self: this
                    }, Zr.a.createElement("li", {
                        className: "GuessGameRank-priodTabLi " + this.getBangdanActive(s, i, 1),
                        onClick: function onClick() {
                            e.changePeriod(1)
                        },
                        __source: {
                            fileName: nu,
                            lineNumber: 159
                        },
                        __self: this
                    }, "\u65e5\u699c"), Zr.a.createElement("li", {
                        className: "GuessGameRank-priodTabLi " + this.getBangdanActive(s, i, 2),
                        onClick: function onClick() {
                            e.changePeriod(2)
                        },
                        __source: {
                            fileName: nu,
                            lineNumber: 165
                        },
                        __self: this
                    }, "\u5468\u699c")))), Zr.a.createElement("div", {
                        className: "GuessGameRank-plcontent",
                        __source: {
                            fileName: nu,
                            lineNumber: 175
                        },
                        __self: this
                    }, ["1-1", "1-2", "2-1", "2-2"].map(function (t, o) {
                        return Zr.a.createElement("div", {
                            className: ["GuessGameRank-dw-", t, e.contentType(t, s + "-" + i)].join(""),
                            key: o,
                            __source: {
                                fileName: nu,
                                lineNumber: 178
                            },
                            __self: e
                        }, e.showLoading(r, n) ? e.showLoading(r, n) : Zr.a.createElement("div", {
                            __source: {
                                fileName: nu,
                                lineNumber: 184
                            },
                            __self: e
                        }, Zr.a.createElement(Jl, {
                            "data-domain": a,
                            "data-index": t,
                            __source: {
                                fileName: nu,
                                lineNumber: 185
                            },
                            __self: e
                        }), Zr.a.createElement(ru, {
                            "data-index": t,
                            __source: {
                                fileName: nu,
                                lineNumber: 186
                            },
                            __self: e
                        })))
                    }))))
                }
                ,
                GuessRank
        }(Zr.a.Component),
            eu = GuessRank_applyDecoratedDescriptor(Zl.prototype, "guessRankService", [Ql], {
                enumerable: !0,
                initializer: null
            }),
            tu = GuessRank_applyDecoratedDescriptor(Zl.prototype, "guessDYSubService", [$l], {
                enumerable: !0,
                initializer: null
            }),
            su = GuessRank_applyDecoratedDescriptor(Zl.prototype, "global", [Kl], {
                enumerable: !0,
                initializer: null
            }),
            Xl = Zl)) || Xl);
        ou.propTypes = {
            rankShow: _a.a.number.isRequired
        };
        var lu, uu, cu, mu, pu, fu, _u, du, hu = Object(en.connect)(function mapStateToProps(e) {
            return {
                rankShow: e.GuessRankData.rankShow,
                rankList: e.GuessRankData.rankList,
                rankPeriod: e.GuessRankData.rankPeriod,
                rankType: e.GuessRankData.rankType,
                isLoading: e.GuessRankData.isLoading,
                isEmpty: e.GuessRankData.isEmpty,
                guessIconConfigData: e.guessIconConfigData
            }
        })(ou), bu = (s("dc67e"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessRankPanel/GuessRankPanel.js");

        function GuessRankPanel_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessRankPanel_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessRankPanel_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessRankPanel_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessRankPanel_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var gu, yu, vu, Gu = r.a.Service, Nu = (lu = Gu(nn),
            uu = Gu(We),
            cu = Gu(n.DataCenter.global),
        Object(rs.log)((pu = function (e) {
            function GuessRankPanel() {
                var t, s;
                !function GuessRankPanel_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessRankPanel);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessRankPanel_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    GuessRankPanel_initDefineProp(s, "guessRankService", fu, s),
                    GuessRankPanel_initDefineProp(s, "guessDYSubService", _u, s),
                    GuessRankPanel_initDefineProp(s, "global", du, s),
                    s.showRank = function () {
                        s.guessRankService.showRank()
                    }
                    ,
                    GuessRankPanel_possibleConstructorReturn(s, t)
            }

            return GuessRankPanel_inherits(GuessRankPanel, e),
                GuessRankPanel.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessPanelRankData
                        , s = t.showTopWin
                        , i = t.topWin
                        , r = void 0 === i ? {} : i
                        , n = t.showTopLoss
                        , a = t.topLoss
                        , o = void 0 === a ? {} : a
                        , l = s && !n || !s && n ? "is-single" : ""
                        , u = this.global.get("$SYS.avatar_url") + "upload/";
                    return Zr.a.createElement("div", {
                        className: "GuessRankPanel",
                        __source: {
                            fileName: bu,
                            lineNumber: 36
                        },
                        __self: this
                    }, s ? Zr.a.createElement("div", {
                        className: ["GuessRankPanel-top is-win", l].join(" "),
                        __source: {
                            fileName: bu,
                            lineNumber: 39
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessRankPanel-topAvatar is-win",
                        __source: {
                            fileName: bu,
                            lineNumber: 40
                        },
                        __self: this
                    }, r.avar ? Zr.a.createElement("img", {
                        className: "GuessRankPanel-imgAvatar",
                        src: "" + u + r.avar + "_middle.jpg",
                        __source: {
                            fileName: bu,
                            lineNumber: 41
                        },
                        __self: this
                    }) : null), Zr.a.createElement("div", {
                        className: "GuessRankPanel-topFlag is-win",
                        __source: {
                            fileName: bu,
                            lineNumber: 43
                        },
                        __self: this
                    }, "\u6536\u76ca\u7b2c\u4e00"), Zr.a.createElement("div", {
                        className: "GuessRankPanel-topName",
                        __source: {
                            fileName: bu,
                            lineNumber: 44
                        },
                        __self: this
                    }, r.nk || "--")) : null, n ? Zr.a.createElement("div", {
                        className: ["GuessRankPanel-top is-loss", l].join(" "),
                        __source: {
                            fileName: bu,
                            lineNumber: 50
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessRankPanel-topAvatar is-loss",
                        __source: {
                            fileName: bu,
                            lineNumber: 51
                        },
                        __self: this
                    }, o.avar ? Zr.a.createElement("img", {
                        className: "GuessRankPanel-imgAvatar",
                        src: "" + u + o.avar + "_middle.jpg",
                        __source: {
                            fileName: bu,
                            lineNumber: 52
                        },
                        __self: this
                    }) : null), Zr.a.createElement("div", {
                        className: "GuessRankPanel-topFlag is-loss",
                        __source: {
                            fileName: bu,
                            lineNumber: 54
                        },
                        __self: this
                    }, "\u5929\u53f0\u7b2c\u4e00"), Zr.a.createElement("div", {
                        className: "GuessRankPanel-topName",
                        __source: {
                            fileName: bu,
                            lineNumber: 55
                        },
                        __self: this
                    }, o.nk || "--")) : null, Zr.a.createElement("div", {
                        className: "GuessRankPanel-rank",
                        onClick: function onClick() {
                            return e.showRank()
                        },
                        __source: {
                            fileName: bu,
                            lineNumber: 59
                        },
                        __self: this
                    }, "\u7ade\u731c\u65e5\u699c >"))
                }
                ,
                GuessRankPanel
        }(Zr.a.Component),
            fu = GuessRankPanel_applyDecoratedDescriptor(pu.prototype, "guessRankService", [lu], {
                enumerable: !0,
                initializer: null
            }),
            _u = GuessRankPanel_applyDecoratedDescriptor(pu.prototype, "guessDYSubService", [uu], {
                enumerable: !0,
                initializer: null
            }),
            du = GuessRankPanel_applyDecoratedDescriptor(pu.prototype, "global", [cu], {
                enumerable: !0,
                initializer: null
            }),
            mu = pu)) || mu), Su = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessPanelRankData: e.guessPanelRankData
            }
        })(Nu), Tu = s("20ec0");

        function guessGameServices_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessGameServices_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessGameServices_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Du, Eu, wu, Pu, Ou, ku, Ru, Cu, ju = (gu = (0,
            r.a.Store)(),
            yu = function (e) {
                function GuessGameServices() {
                    var t, s;
                    !function guessGameServices_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessGameServices);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = guessGameServices_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        function guessGameServices_initDefineProp(e, t, s, i) {
                            s && Object.defineProperty(e, t, {
                                enumerable: s.enumerable,
                                configurable: s.configurable,
                                writable: s.writable,
                                value: s.initializer ? s.initializer.call(i) : void 0
                            })
                        }(s, "store", vu, s),
                        guessGameServices_possibleConstructorReturn(s, t)
                }

                return guessGameServices_inherits(GuessGameServices, e),
                    GuessGameServices.prototype.noGuessShow = function noGuessShow(e) {
                        this.store.dispatch(B.noGuessShow(e))
                    }
                    ,
                    GuessGameServices.prototype.sendGiftReturnYw = function sendGiftReturnYw(e) {
                        this.store.dispatch(B.sendGiftReturnYw(e))
                    }
                    ,
                    GuessGameServices
            }(c.Service),
            vu = function guessGameServices_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(yu.prototype, "store", [gu], {
                enumerable: !0,
                initializer: null
            }),
            yu), Mu = (s("eed88"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessReturnYw/GuessReturnYw.js");

        function GuessReturnYw_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessReturnYw_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessReturnYw_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessReturnYw_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var zu, Iu, Lu, Au, Bu = r.a.Service, xu = (Du = Bu(Tu.a),
            Eu = Bu(ju),
            wu = Bu(We),
        Object(rs.log)((Ou = function (e) {
            function GuessReturnYw(t) {
                !function GuessReturnYw_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessReturnYw);
                var s = function GuessReturnYw_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessReturnYw_initDefineProp(s, "nobleBuyServices", ku, s),
                    GuessReturnYw_initDefineProp(s, "guessGameServices", Ru, s),
                    GuessReturnYw_initDefineProp(s, "guessDYSubService", Cu, s),
                    s.cancel = function () {
                        s.timer && clearTimeout(s.timer),
                            s.guessGameServices.sendGiftReturnYw(0)
                    }
                    ,
                    s.ensureSendGift = function () {
                        s.cancel(),
                            s.nobleBuyServices.sendGift(s.giftId, 1, function () {
                                s.guessDYSubService.guessGameDYSub("click_quiz_ywsale_send", {
                                    stat: 1
                                }),
                                    te.a.info("\u606d\u559c\u83b7\u5f97" + s.multiple + "\u500d\u9c7c\u4e38\u8fd4\u5229\uff0c\u8bf7\u5237\u65b0\u4f59\u989d\u67e5\u6536~")
                            })
                    }
                    ,
                    s.quizSetting = s.props.guessIconConfigData.quiz_setting || {},
                    s.giftId = s.quizSetting.gift_return_ball_id,
                    s.multiple = s.quizSetting.gift_return_ball_multiple,
                    s.guessDYSubService.guessGameDYSub("show_quiz_ywsale"),
                    s
            }

            return GuessReturnYw_inherits(GuessReturnYw, e),
                GuessReturnYw.prototype.componentWillUnmount = function componentWillUnmount() {
                    this.timer && clearTimeout(this.timer)
                }
                ,
                GuessReturnYw.prototype.countDown = function countDown() {
                    var e = this
                        , t = this.props.guessGameData
                        , s = t.sendGiftReturnYw
                        , i = t.sendGiftReturnYwCd;
                    this.timer && clearTimeout(this.timer),
                    s && 0 !== i && (this.timer = setTimeout(function () {
                        e.guessGameServices.sendGiftReturnYw(i - 1)
                    }, 1e3))
                }
                ,
                GuessReturnYw.prototype.countDownTpl = function countDownTpl() {
                    this.countDown();
                    var e = this.props.guessGameData.sendGiftReturnYwCd
                        , t = Math.floor(e / 60 % 60);
                    t < 10 && (t = "0" + t);
                    var s = Math.floor(e % 60);
                    return s < 10 && (s = "0" + s),
                        Zr.a.createElement("span", {
                            __source: {
                                fileName: Mu,
                                lineNumber: 75
                            },
                            __self: this
                        }, Zr.a.createElement("span", {
                            className: "timer",
                            __source: {
                                fileName: Mu,
                                lineNumber: 76
                            },
                            __self: this
                        }, t), " : ", Zr.a.createElement("span", {
                            className: "timer",
                            __source: {
                                fileName: Mu,
                                lineNumber: 76
                            },
                            __self: this
                        }, s))
                }
                ,
                GuessReturnYw.prototype.setGiftInfo = function setGiftInfo() {
                    for (var e = this.props.allGift, t = void 0 === e ? [] : e, s = 0; s < t.length; s++)
                        if (t[s].id === this.giftId)
                            return Object.assign({}, t[s]);
                    return null
                }
                ,
                GuessReturnYw.prototype.render = function render() {
                    var e = this
                        , t = this.setGiftInfo();
                    if (!t)
                        return setTimeout(function () {
                            e.cancel()
                        }, 1e3),
                            null;
                    var s = +this.multiple * +t.ry
                        , i = this.countDownTpl();
                    return Zr.a.createElement("div", {
                        className: "GuessReturnYwBox",
                        __source: {
                            fileName: Mu,
                            lineNumber: 129
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "close",
                        onClick: this.cancel,
                        __source: {
                            fileName: Mu,
                            lineNumber: 130
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "GuessReturnYwBox-headBox",
                        __source: {
                            fileName: Mu,
                            lineNumber: 131
                        },
                        __self: this
                    }, Zr.a.createElement("p", {
                        className: "desc1",
                        __source: {
                            fileName: Mu,
                            lineNumber: 132
                        },
                        __self: this
                    }, "\u7ade\u731c\u6ca1\u9c7c\u4e38\uff1f"), Zr.a.createElement("p", {
                        className: "desc2",
                        __source: {
                            fileName: Mu,
                            lineNumber: 133
                        },
                        __self: this
                    }, "\u9650\u65f6", Zr.a.createElement("span", {
                        className: "mutiple",
                        __source: {
                            fileName: Mu,
                            lineNumber: 133
                        },
                        __self: this
                    }, this.multiple, "\u500d"), "\u8fd4\u8fd8")), Zr.a.createElement("div", {
                        className: "GuessReturnYwBox-giftBox",
                        __source: {
                            fileName: Mu,
                            lineNumber: 135
                        },
                        __self: this
                    }, Zr.a.createElement("img", {
                        src: t.giftPic,
                        __source: {
                            fileName: Mu,
                            lineNumber: 136
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "giftDesc",
                        __source: {
                            fileName: Mu,
                            lineNumber: 137
                        },
                        __self: this
                    }, Zr.a.createElement("p", {
                        className: "desc1",
                        __source: {
                            fileName: Mu,
                            lineNumber: 138
                        },
                        __self: this
                    }, t.name), Zr.a.createElement("p", {
                        className: "desc2",
                        __source: {
                            fileName: Mu,
                            lineNumber: 139
                        },
                        __self: this
                    }, t.priceName, "\u53ef\u8fd4", Zr.a.createElement("span", {
                        className: "normalYw",
                        __source: {
                            fileName: Mu,
                            lineNumber: 139
                        },
                        __self: this
                    }, t.ry, "\u9c7c\u4e38"), Zr.a.createElement("span", {
                        className: "returnYw",
                        __source: {
                            fileName: Mu,
                            lineNumber: 139
                        },
                        __self: this
                    }, s, "\u9c7c\u4e38")))), Zr.a.createElement("div", {
                        className: "GuessReturnYwBox-clockBox",
                        __source: {
                            fileName: Mu,
                            lineNumber: 142
                        },
                        __self: this
                    }, i), Zr.a.createElement("div", {
                        className: "GuessReturnYwBox-sendGiftBtn",
                        onClick: this.ensureSendGift,
                        __source: {
                            fileName: Mu,
                            lineNumber: 143
                        },
                        __self: this
                    }))
                }
                ,
                GuessReturnYw
        }(Zr.a.Component),
            ku = GuessReturnYw_applyDecoratedDescriptor(Ou.prototype, "nobleBuyServices", [Du], {
                enumerable: !0,
                initializer: null
            }),
            Ru = GuessReturnYw_applyDecoratedDescriptor(Ou.prototype, "guessGameServices", [Eu], {
                enumerable: !0,
                initializer: null
            }),
            Cu = GuessReturnYw_applyDecoratedDescriptor(Ou.prototype, "guessDYSubService", [wu], {
                enumerable: !0,
                initializer: null
            }),
            Pu = Ou)) || Pu), qu = Object(en.connect)(function mapStateToProps(e) {
            return {
                allGift: e.giftData.allGift,
                guessGameData: e.guessGameData,
                guessIconConfigData: e.guessIconConfigData
            }
        })(xu), Uu = (s("ae76a"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessResultShow/GuessResultShow.js");

        function GuessResultShow_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessResultShow_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessResultShow_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var Hu, Yu, Wu, Fu, Ju, Vu, Qu, $u, Ku = (zu = (0,
            r.a.Service)(Dt),
        Object(rs.log)((Lu = function (e) {
            function GuessResultShow() {
                var t, s, i = this;
                !function GuessResultShow_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessResultShow);
                for (var r = arguments.length, n = Array(r), a = 0; a < r; a++)
                    n[a] = arguments[a];
                return t = s = GuessResultShow_possibleConstructorReturn(this, e.call.apply(e, [this].concat(n))),
                    function GuessResultShow_initDefineProp(e, t, s, i) {
                        s && Object.defineProperty(e, t, {
                            enumerable: s.enumerable,
                            configurable: s.configurable,
                            writable: s.writable,
                            value: s.initializer ? s.initializer.call(i) : void 0
                        })
                    }(s, "guessThemeItemService", Au, s),
                    s.renderResultList = function (e) {
                        return e.map(function (e, t) {
                            var s = t
                                , r = 2 === +e.qet ? "resultAnswer resultFail" : "resultAnswer";
                            return Zr.a.createElement("div", {
                                className: "guessResultShow-item",
                                key: s,
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 30
                                },
                                __self: i
                            }, Zr.a.createElement("div", {
                                className: "resultTitle",
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 31
                                },
                                __self: i
                            }, s + 1, "\u3001", Zr.a.createElement("span", {
                                dangerouslySetInnerHTML: {
                                    __html: e.qt
                                },
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 31
                                },
                                __self: i
                            })), Zr.a.createElement("div", {
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 32
                                },
                                __self: i
                            }, Zr.a.createElement("span", {
                                className: r,
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 33
                                },
                                __self: i
                            }, 2 === +e.qet ? "" : "\u80dc\u5229\u65b9\uff1a", Zr.a.createElement("span", {
                                dangerouslySetInnerHTML: {
                                    __html: e.won
                                },
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 33
                                },
                                __self: i
                            })), 1 === +e.qet && +e.ec >= 0 ? Zr.a.createElement("span", {
                                className: "resultNum",
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 36
                                },
                                __self: i
                            }, "+", Object(Je.g)(e.ec)) : "", 2 === +e.qet ? Zr.a.createElement("span", {
                                className: "resultNum",
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 41
                                },
                                __self: i
                            }, "\u8fd4\u8fd8\u53c2\u4e0e\u672c\u91d1") : "", +e.ec < 0 ? Zr.a.createElement("span", {
                                className: "resultNum resultFail",
                                __source: {
                                    fileName: Uu,
                                    lineNumber: 46
                                },
                                __self: i
                            }, Object(Je.g)(e.ec)) : ""))
                        })
                    }
                    ,
                    s.closeThis = function () {
                        s.guessThemeItemService.shutGuessResultShow()
                    }
                    ,
                    GuessResultShow_possibleConstructorReturn(s, t)
            }

            return GuessResultShow_inherits(GuessResultShow, e),
                GuessResultShow.prototype.render = function render() {
                    var e = this.props.guessResultShowData
                        , t = e.resultShowModalStatus
                        , s = e.resultShowList;
                    return Zr.a.createElement(an.a, {
                        className: "guessResultShow",
                        visible: t,
                        footer: null,
                        closable: !1,
                        mask: !1,
                        maskClosable: !0,
                        onCancel: this.closeThis,
                        center: !0,
                        bodyStyle: {
                            position: "fixed",
                            width: "512px",
                            top: "50%",
                            left: "50%",
                            marginLeft: "-256px",
                            marginTop: "-250px",
                            zIndex: 220
                        },
                        __source: {
                            fileName: Uu,
                            lineNumber: 71
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessResultShow-head",
                        __source: {
                            fileName: Uu,
                            lineNumber: 82
                        },
                        __self: this
                    }, Zr.a.createElement("p", {
                        className: "guessResultShow-headTips",
                        __source: {
                            fileName: Uu,
                            lineNumber: 83
                        },
                        __self: this
                    }, "\u82e5\u4e3b\u64ad\u7ed3\u9519\u8d26\uff0c\u8bf7\u8054\u7cfb\u4e3b\u64ad\u534f\u5546\u5904\u7406\uff0c\u82e5\u4e3b\u64ad\u4e0d\u53d7\u7406\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d\uff0c\u5b98\u65b9\u5c06\u89c6\u60c5\u8282\u5bf9\u4e3b\u64ad\u8fdb\u884c\u5904\u7f5a\u3002")), Zr.a.createElement("div", {
                        className: "guessResultShow-content",
                        __source: {
                            fileName: Uu,
                            lineNumber: 85
                        },
                        __self: this
                    }, this.renderResultList(s), Zr.a.createElement("div", {
                        className: "guessResultShow-knowBtn",
                        onClick: this.closeThis,
                        __source: {
                            fileName: Uu,
                            lineNumber: 87
                        },
                        __self: this
                    }, "\u6211\u77e5\u9053\u4e86")))
                }
                ,
                GuessResultShow
        }(Zr.a.Component),
            Au = function GuessResultShow_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(Lu.prototype, "guessThemeItemService", [zu], {
                enumerable: !0,
                initializer: null
            }),
            Iu = Lu)) || Iu), Xu = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessResultShowData: e.guessResultShowData
            }
        })(Ku), Zu = (s("7f598"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessResultModify/GuessResultModify.js");

        function GuessResultModify_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessResultModify_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessResultModify_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessResultModify_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessResultModify_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var ec, tc, sc, ic, rc, nc, ac = r.a.Service, oc = (Hu = ac(Dt),
            Yu = ac(We),
            Wu = ac(n.DataCenter.global),
        Object(rs.log)((Ju = function (e) {
            function GuessResultModify() {
                var t, s;
                !function GuessResultModify_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessResultModify);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessResultModify_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    GuessResultModify_initDefineProp(s, "guessThemeItemService", Vu, s),
                    GuessResultModify_initDefineProp(s, "guessDYSubService", Qu, s),
                    GuessResultModify_initDefineProp(s, "global", $u, s),
                    s.state = {
                        newWon: 0,
                        modifyTitle: "--",
                        modifyYw: "--",
                        modifyUser: "--",
                        modifyYc: "--",
                        modifyYcNum: 0
                    },
                    s.chooseModify = function (e, t, i) {
                        if (+t !== e) {
                            var r = s.props.guessModifyResultData.optionList
                                , n = void 0 === r ? [] : r;
                            n[e - 1] && s.setState({
                                newWon: e,
                                modifyTitle: i,
                                modifyYw: n[e - 1].fish_ball_num,
                                modifyUser: n[e - 1].join_count,
                                modifyYc: +n[e - 1].yuchi_num / 100,
                                modifyYcNum: n[e - 1].yuchi_num || 0
                            })
                        }
                    }
                    ,
                    s.sureModify = function () {
                        var e = s.props.guessModifyResultData
                            , t = e.qid
                            , i = e.oldWon
                            , r = s.state
                            , n = r.newWon
                            , a = r.modifyYcNum;
                        s.guessThemeItemService.guessModifyResultCommit({
                            quiz_id: t,
                            old_win_option: i,
                            new_win_option: n,
                            yuchi_num: a
                        })
                    }
                    ,
                    s.shutGuessResultModify = function () {
                        s.guessThemeItemService.shutGuessResultModify(!0)
                    }
                    ,
                    GuessResultModify_possibleConstructorReturn(s, t)
            }

            return GuessResultModify_inherits(GuessResultModify, e),
                GuessResultModify.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    e.guessModifyResultData.modifyModalStatus && this.setState({
                        newWon: 0,
                        modifyTitle: "--",
                        modifyYw: "--",
                        modifyUser: "--",
                        modifyYc: "--",
                        modifyYcNum: 0
                    })
                }
                ,
                GuessResultModify.prototype.render = function render() {
                    var e = this
                        , t = this.state
                        , s = t.newWon
                        , i = t.modifyTitle
                        , r = t.modifyYw
                        , n = t.modifyUser
                        , a = t.modifyYc
                        , o = this.props.guessModifyResultData
                        , l = o.modifyModalStatus
                        , u = o.oldWon
                        , c = o.quizTitle
                        , m = o.optionOne
                        , p = o.optionTwo
                        , f = o.optionThree;
                    return Zr.a.createElement(an.a, {
                        className: "guessResultModify",
                        visible: l,
                        footer: null,
                        closable: !1,
                        mask: !1,
                        maskClosable: !0,
                        width: 518,
                        onCancel: this.shutGuessResultModify,
                        center: !0,
                        bodyStyle: {
                            width: "460px",
                            backgroundColor: "white",
                            borderRadius: "4px",
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            marginLeft: "-230px",
                            marginTop: "-200px",
                            boxShadow: "0 0 3px rgba(0, 0, 0, .3)",
                            padding: 0,
                            zIndex: 500
                        },
                        __source: {
                            fileName: Zu,
                            lineNumber: 112
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessResultModify-title",
                        __source: {
                            fileName: Zu,
                            lineNumber: 124
                        },
                        __self: this
                    }, "\u4fee\u6539\u7ade\u731c\u7ed3\u679c"), Zr.a.createElement("div", {
                        className: "guessGame--btnClose",
                        onClick: this.shutGuessResultModify,
                        __source: {
                            fileName: Zu,
                            lineNumber: 125
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "guessResultModify-tips",
                        __source: {
                            fileName: Zu,
                            lineNumber: 126
                        },
                        __self: this
                    }, "\u4fee\u6539\u7ed3\u679c\u53ea\u4f1a\u7ed9\u7ed3\u9519\u5e10\u7528\u6237\u8865\u53d1\u9c7c\u4e38\uff0c\u4e0d\u4f1a\u8ffd\u56de\u9c7c\u4e38\u3002\u8865\u53d1\u9c7c\u4e38\u5c06\u6263\u9664\u60a8\u5bf9\u5e94\u6570\u989d\u9c7c\u7fc5\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01"), Zr.a.createElement("div", {
                        className: "guessResultModify-quizBox",
                        __source: {
                            fileName: Zu,
                            lineNumber: 127
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessResultModify-quizPay",
                        __source: {
                            fileName: Zu,
                            lineNumber: 128
                        },
                        __self: this
                    }, "\u4e3b\u9898\uff1a", Zr.a.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: c
                        },
                        __source: {
                            fileName: Zu,
                            lineNumber: 128
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "guessResultModify-quizPay",
                        __source: {
                            fileName: Zu,
                            lineNumber: 129
                        },
                        __self: this
                    }, "\u4fee\u6539\u7ed3\u679c\u4e3a\uff1a", Zr.a.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: i
                        },
                        __source: {
                            fileName: Zu,
                            lineNumber: 129
                        },
                        __self: this
                    })), Zr.a.createElement("div", {
                        className: "guessResultModify-quizOptionBox guessResultModify-quizGap",
                        __source: {
                            fileName: Zu,
                            lineNumber: 130
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: ["guessResultModify-quizOptionItem", 1 === +u ? "is-disabled" : "", 1 === +s ? "is-active" : ""].join(" "),
                        onClick: function onClick() {
                            return e.chooseModify(1, u, m)
                        },
                        dangerouslySetInnerHTML: {
                            __html: m
                        },
                        __source: {
                            fileName: Zu,
                            lineNumber: 131
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: ["guessResultModify-quizOptionItem", 2 === +u ? "is-disabled" : "", 2 === +s ? "is-active" : ""].join(" "),
                        onClick: function onClick() {
                            return e.chooseModify(2, u, p)
                        },
                        dangerouslySetInnerHTML: {
                            __html: p
                        },
                        __source: {
                            fileName: Zu,
                            lineNumber: 136
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: ["guessResultModify-quizOptionItem", 3 === +u ? "is-disabled" : "", 3 === +s ? "is-active" : ""].join(" "),
                        onClick: function onClick() {
                            return e.chooseModify(3, u, f)
                        },
                        __source: {
                            fileName: Zu,
                            lineNumber: 141
                        },
                        __self: this
                    }, f)), Zr.a.createElement("div", {
                        className: "guessResultModify-quizPay guessResultModify-quizGap",
                        __source: {
                            fileName: Zu,
                            lineNumber: 146
                        },
                        __self: this
                    }, "\u8865\u53d1\u9c7c\u4e38\u6570\uff1a", Zr.a.createElement("span", {
                        __source: {
                            fileName: Zu,
                            lineNumber: 146
                        },
                        __self: this
                    }, r)), Zr.a.createElement("div", {
                        className: "guessResultModify-quizPay",
                        __source: {
                            fileName: Zu,
                            lineNumber: 147
                        },
                        __self: this
                    }, "\u8865\u53d1\u7528\u6237\u6570\uff1a", Zr.a.createElement("span", {
                        __source: {
                            fileName: Zu,
                            lineNumber: 147
                        },
                        __self: this
                    }, n)), Zr.a.createElement("div", {
                        className: "guessResultModify-quizPay guessResultModify-quizPayYc",
                        __source: {
                            fileName: Zu,
                            lineNumber: 148
                        },
                        __self: this
                    }, "\u6d88\u8017\u9c7c\u7fc5\uff1a", Zr.a.createElement("span", {
                        __source: {
                            fileName: Zu,
                            lineNumber: 148
                        },
                        __self: this
                    }, a)), Zr.a.createElement("div", {
                        className: "guessResultModify-submit",
                        __source: {
                            fileName: Zu,
                            lineNumber: 149
                        },
                        __self: this
                    }, this.state.newWon > 0 ? Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeL",
                        onClick: function onClick() {
                            return e.sureModify()
                        },
                        __source: {
                            fileName: Zu,
                            lineNumber: 152
                        },
                        __self: this
                    }, "\u786e\u8ba4\u4fee\u6539") : Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeL is-disabled",
                        __source: {
                            fileName: Zu,
                            lineNumber: 154
                        },
                        __self: this
                    }, "\u786e\u8ba4\u4fee\u6539"))))
                }
                ,
                GuessResultModify
        }(Zr.a.Component),
            Vu = GuessResultModify_applyDecoratedDescriptor(Ju.prototype, "guessThemeItemService", [Hu], {
                enumerable: !0,
                initializer: null
            }),
            Qu = GuessResultModify_applyDecoratedDescriptor(Ju.prototype, "guessDYSubService", [Yu], {
                enumerable: !0,
                initializer: null
            }),
            $u = GuessResultModify_applyDecoratedDescriptor(Ju.prototype, "global", [Wu], {
                enumerable: !0,
                initializer: null
            }),
            Fu = Ju)) || Fu), lc = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessModifyResultData: e.guessModifyResultData
            }
        })(oc), uc = (s("2059a"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessTitleEdit/GuessTitleEdit.js");

        function GuessTitleEdit_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessTitleEdit_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessTitleEdit_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessTitleEdit_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var cc, mc, pc, fc, _c, dc, hc, bc, gc, yc, vc = r.a.Service, Gc = (ec = vc(ti),
            tc = vc(n.DataCenter.global),
        Object(rs.log)((ic = function (e) {
            function GuessTitleEdit(t) {
                var s = this;
                !function GuessTitleEdit_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessTitleEdit);
                var i = function GuessTitleEdit_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessTitleEdit_initDefineProp(i, "guessTitleListService", rc, i),
                    GuessTitleEdit_initDefineProp(i, "global", nc, i),
                    i.changeTitle = function (e) {
                        i.setState({
                            title: e.target.value.trim(),
                            titleStatus: 1,
                            err: ""
                        })
                    }
                    ,
                    i.changeOne = function (e) {
                        i.setState({
                            one: e.target.value.trim(),
                            oneStatus: 1,
                            twoStatus: 1,
                            err: ""
                        })
                    }
                    ,
                    i.changeTwo = function (e) {
                        i.setState({
                            two: e.target.value.trim(),
                            oneStatus: 1,
                            twoStatus: 1,
                            err: ""
                        })
                    }
                    ,
                    i.changeTime = function (e) {
                        var t = e.target.getAttribute("data-time");
                        i.setState({
                            time: t
                        })
                    }
                    ,
                    i.guessEditCommitAct = function () {
                        var e = i.state
                            , t = e.id
                            , s = e.title
                            , r = e.one
                            , n = e.two
                            , a = e.time
                            , o = i.global.get("$ROOM.room_id")
                            , l = i.props.guessGameData.role
                            , u = i.props.guessIconConfigData.quiz_setting || {};
                        if ("" !== s && "" !== r && "" !== n)
                            if (r !== n) {
                                var c = {
                                    title: s,
                                    one: r,
                                    two: n,
                                    time: a,
                                    roomId: o,
                                    isAnchor: l
                                };
                                0 === +a && u.stop_timestamp && u.stop_timestamp[0] && (c.time = u.stop_timestamp[0]),
                                t && (c.id = t),
                                    i.guessTitleListService.guessEditCommit(c)
                            } else
                                i.setState({
                                    err: "\u9009\u9879\u4e0d\u80fd\u76f8\u540c",
                                    oneStatus: 0,
                                    twoStatus: 0
                                });
                        else
                            i.setState({
                                err: "\u7ade\u731c\u4e3b\u9898\u672a\u586b\u5199\u5b8c\u6574",
                                titleStatus: "" === s ? 0 : 1,
                                oneStatus: "" === r ? 0 : 1,
                                twoStatus: "" === n ? 0 : 1
                            })
                    }
                    ,
                    i.getStopTimestamp = function (e) {
                        return e.map(function (e, t) {
                            var r = t
                                , n = i.state.time
                                , a = +n === +e || 0 === +n && 0 === t ? "editTime active" : "editTime";
                            return Zr.a.createElement("span", {
                                className: a,
                                "data-time": e,
                                onClick: i.changeTime,
                                key: r,
                                __source: {
                                    fileName: uc,
                                    lineNumber: 149
                                },
                                __self: s
                            }, e / 60, "\u5206\u949f")
                        })
                    }
                    ,
                    i.shutModal = function () {
                        i.guessTitleListService.guessTitleListPopClose(),
                            i.guessTitleListService.guessCloseEdit()
                    }
                    ,
                    i.state = {
                        id: t.editTitle.quizeid || 0,
                        title: t.editTitle.quizeTheme || "",
                        one: t.editTitle.firstOptionName || "",
                        two: t.editTitle.secondOptionName || "",
                        time: t.editTitle.time || 0,
                        err: "",
                        titleStatus: 1,
                        oneStatus: 1,
                        twoStatus: 1
                    },
                    i
            }

            return GuessTitleEdit_inherits(GuessTitleEdit, e),
                GuessTitleEdit.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    var t = e.guessGameTitleListData.editGuessTitle
                        , s = void 0 === t ? {} : t;
                    (s.key || s.err) && this.setState({
                        err: s.err || "",
                        titleStatus: "quize_theme" === s.key ? 0 : 1,
                        oneStatus: "first_option_name" === s.key ? 0 : 1,
                        twoStatus: "second_option_name" === s.key ? 0 : 1
                    })
                }
                ,
                GuessTitleEdit.prototype.componentWillUnmount = function componentWillUnmount() {
                    this.guessTitleListService.resetGuessEditError({
                        key: "",
                        err: ""
                    })
                }
                ,
                GuessTitleEdit.prototype.render = function render() {
                    var e = this
                        , t = this.state
                        , s = t.id
                        , i = t.title
                        , r = t.one
                        , n = t.two
                        , a = t.err
                        , o = this.props.guessIconConfigData.quiz_setting || {}
                        , l = this.props.guessGameTitleListData.isGuessTitleEditShow;
                    return Zr.a.createElement(an.a, {
                        className: "guessSettingEdit guessGameModel",
                        visible: l,
                        footer: null,
                        closable: !1,
                        mask: !1,
                        maskClosable: !0,
                        destroyOnClose: !0,
                        width: 518,
                        onCancel: function onCancel() {
                            e.shutModal()
                        },
                        center: !0,
                        bodyStyle: {},
                        __source: {
                            fileName: uc,
                            lineNumber: 169
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btnClose is-white",
                        onClick: function onClick() {
                            e.shutModal()
                        },
                        __source: {
                            fileName: uc,
                            lineNumber: 182
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "guessSettingEdit-back",
                        onClick: function onClick() {
                            e.guessTitleListService.guessCloseEdit()
                        },
                        __source: {
                            fileName: uc,
                            lineNumber: 183
                        },
                        __self: this
                    }, "\u8fd4\u56de"), Zr.a.createElement("p", {
                        className: "guessGameModel-title",
                        __source: {
                            fileName: uc,
                            lineNumber: 184
                        },
                        __self: this
                    }, s ? "\u7f16\u8f91" : "\u6dfb\u52a0", "\u7ade\u731c\u4e3b\u9898"), Zr.a.createElement("div", {
                        className: "guessGameModel-subtitle",
                        __source: {
                            fileName: uc,
                            lineNumber: 185
                        },
                        __self: this
                    }, "\u8f93\u5165\u7ade\u731c\u5185\u5bb9", Zr.a.createElement("span", {
                        className: "guessSettingEdit-err",
                        __source: {
                            fileName: uc,
                            lineNumber: 186
                        },
                        __self: this
                    }, a)), Zr.a.createElement("div", {
                        className: "guessSettingEdit-main",
                        __source: {
                            fileName: uc,
                            lineNumber: 188
                        },
                        __self: this
                    }, Zr.a.createElement("input", {
                        className: ["editInput editTitle", this.state.titleStatus ? "" : "editInputErr"].join(" "),
                        maxLength: "15",
                        placeholder: "\u7ade\u731c\u4e3b\u9898\uff081-15\u4e2a\u5b57\uff09",
                        value: i,
                        onChange: this.changeTitle,
                        __source: {
                            fileName: uc,
                            lineNumber: 189
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "guessGame--topGapS",
                        __source: {
                            fileName: uc,
                            lineNumber: 196
                        },
                        __self: this
                    }, Zr.a.createElement("input", {
                        className: ["editInput editOptions", this.state.oneStatus ? "" : "editInputErr"].join(" "),
                        maxLength: "5",
                        placeholder: "\u9009\u9879A\uff081-5\u4e2a\u5b57\uff09",
                        value: r,
                        onChange: this.changeOne,
                        __source: {
                            fileName: uc,
                            lineNumber: 197
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: "editVs",
                        __source: {
                            fileName: uc,
                            lineNumber: 204
                        },
                        __self: this
                    }, "VS"), Zr.a.createElement("input", {
                        className: ["editInput editOptions", this.state.twoStatus ? "" : "editInputErr"].join(" "),
                        maxLength: "5",
                        placeholder: "\u9009\u9879B\uff081-5\u4e2a\u5b57\uff09",
                        value: n,
                        onChange: this.changeTwo,
                        __source: {
                            fileName: uc,
                            lineNumber: 205
                        },
                        __self: this
                    }))), Zr.a.createElement("div", {
                        className: "guessGameModel-subtitle",
                        __source: {
                            fileName: uc,
                            lineNumber: 214
                        },
                        __self: this
                    }, "\u81ea\u52a8\u8d54\u7387\u6a21\u5f0f\u5c01\u76d8\u65f6\u95f4", Zr.a.createElement("span", {
                        className: "guessSettingEdit-err",
                        __source: {
                            fileName: uc,
                            lineNumber: 214
                        },
                        __self: this
                    }, "\uff08\u4ec5\u9488\u5bf9\u81ea\u52a8\u8d54\u7387\u6a21\u5f0f\u7ade\u731c\u6709\u6548\uff09")), Zr.a.createElement("p", {
                        className: "guessSettingEdit-timeTip",
                        __source: {
                            fileName: uc,
                            lineNumber: 215
                        },
                        __self: this
                    }, "\u81ea\u52a8\u8d54\u7387\u6a21\u5f0f\u5fc5\u987b\u5b9a\u65f6\u5c01\u76d8\uff1b\u6c34\u53cb\u5f00\u731c\u6a21\u5f0f\u65e0\u5b9a\u65f6\u5c01\u76d8\uff0c\u53ea\u80fd\u624b\u52a8\u5c01\u76d8\u3002"), Zr.a.createElement("div", {
                        className: "guessSettingEdit-main",
                        __source: {
                            fileName: uc,
                            lineNumber: 216
                        },
                        __self: this
                    }, this.getStopTimestamp(o.stop_timestamp)), Zr.a.createElement("div", {
                        className: "guessGame--btnBox",
                        __source: {
                            fileName: uc,
                            lineNumber: 219
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeXL",
                        onClick: this.guessEditCommitAct,
                        __source: {
                            fileName: uc,
                            lineNumber: 220
                        },
                        __self: this
                    }, "\u63d0\u4ea4\u5ba1\u6838")))
                }
                ,
                GuessTitleEdit
        }(Zr.a.Component),
            rc = GuessTitleEdit_applyDecoratedDescriptor(ic.prototype, "guessTitleListService", [ec], {
                enumerable: !0,
                initializer: null
            }),
            nc = GuessTitleEdit_applyDecoratedDescriptor(ic.prototype, "global", [tc], {
                enumerable: !0,
                initializer: null
            }),
            sc = ic)) || sc), Nc = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameTitleListData: e.guessGameTitleListData,
                guessGameData: e.guessGameData,
                guessIconConfigData: e.guessIconConfigData
            }
        })(Gc), Sc = (s("a197c"),
            Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
        ), Tc = "/shark/live/src/pages/roomPage/guessGameModule/components/GuessTitleList/GuessTitleList.js";

        function GuessTitleList_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessTitleList_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessTitleList_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessTitleList_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Dc, Ec, wc, Pc, Oc = r.a.Service, kc = (cc = Oc(ti),
            mc = Oc(We),
            pc = Oc(n.DataCenter.localStorage),
            fc = Oc(n.DataCenter.global),
        Object(rs.log)((dc = function (e) {
            function GuessTitleList(t) {
                var s = this;
                !function GuessTitleList_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessTitleList);
                var i = function GuessTitleList_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessTitleList_initDefineProp(i, "guessTitleListService", hc, i),
                    GuessTitleList_initDefineProp(i, "guessDYSubService", bc, i),
                    GuessTitleList_initDefineProp(i, "localStorage", gc, i),
                    GuessTitleList_initDefineProp(i, "global", yc, i),
                    i.guessTitleSwitch = function (e, t) {
                        var s = i.state.titleStatus;
                        if (s.length >= 3 && s.indexOf(+e) < 0)
                            te.a.error("\u6700\u591a\u53ea\u80fd\u540c\u65f6\u53d1\u5e033\u4e2a\u4e3b\u9898\u54e6~");
                        else if (2 === +i.props.listData.guessStartType && t <= 0)
                            te.a.error("\u81ea\u52a8\u8d54\u7387\u6a21\u5f0f\u5fc5\u987b\u8bbe\u7f6e\u5c01\u76d8\u65f6\u95f4~");
                        else {
                            var r = [];
                            s.map(function (t) {
                                return t !== +e && r.push(t),
                                    null
                            }),
                            s.indexOf(+e) < 0 && r.push(+e),
                                i.setState({
                                    titleStatus: r
                                })
                        }
                    }
                    ,
                    i.showGuessTitleEdit = function (e) {
                        e.stopPropagation();
                        var t = i.props.listData.list
                            , s = i.props.guessGameData.role;
                        !e.target.getAttribute("quizeid") && t.length >= 10 ? te.a.error("\u6700\u591a\u6dfb\u52a010\u4e2a\u4e3b\u9898~") : (i.guessDYSubService.guessGameDYSub("click_quiz_add", {
                            is_anch: +s
                        }),
                            i.setState({
                                editTitle: {
                                    quizeid: e.target.getAttribute("quizeid") || 0,
                                    quizeTheme: i.HTMLDecode(e.target.getAttribute("quizetheme")) || "",
                                    firstOptionName: i.HTMLDecode(e.target.getAttribute("firstoptionname")) || "",
                                    secondOptionName: i.HTMLDecode(e.target.getAttribute("secondoptionname")) || "",
                                    time: e.target.getAttribute("stoptimestamp") || 0
                                }
                            }),
                            i.guessTitleListService.guessTitleEditPopShow())
                    }
                    ,
                    i.HTMLDecode = function (e) {
                        var t = document.createElement("div");
                        t.innerHTML = e;
                        var s = t.innerText || t.textContent;
                        return t = null,
                            s
                    }
                    ,
                    i.shutThisTitle = function (e) {
                        e.stopPropagation();
                        var t = +e.target.getAttribute("data-title")
                            , s = i.global.get("$ROOM.room_id")
                            , r = i.props.guessGameData.role;
                        i.guessTitleListService.guessCloseTitle({
                            id: t,
                            roomId: s,
                            isAnchor: r
                        }),
                            i.guessTitleSwitch(t, 1)
                    }
                    ,
                    i.closeGuide = function (e) {
                        e.stopPropagation(),
                            i.setGuideStatus(),
                            i.setState({
                                boldGuessGuideIsShow: !1
                            })
                    }
                    ,
                    i.setGuideStatus = function () {
                        i.localStorage.set("guessGame-boldGuessGuide", !0)
                    }
                    ,
                    i.getThisStatus = function (e) {
                        return e.map(function (e, t) {
                            var r = t
                                , n = i.state.titleStatus
                                , a = i.props.listData.guessStartType
                                ,
                                o = e.isinvalid ? "\u4e3b\u9898\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u7f16\u8f91\u6216\u5220\u9664" : e.remark
                                , l = Zr.a.createElement("div", {
                                    className: "guessSettingHave-themeContain",
                                    __source: {
                                        fileName: Tc,
                                        lineNumber: 155
                                    },
                                    __self: s
                                }, Zr.a.createElement("span", {
                                    className: "guessSettingHave-err",
                                    __source: {
                                        fileName: Tc,
                                        lineNumber: 156
                                    },
                                    __self: s
                                }, o), Zr.a.createElement("span", {
                                    className: "guessSettingHave-delete",
                                    "data-title": e.quizeid,
                                    onClick: i.shutThisTitle,
                                    __source: {
                                        fileName: Tc,
                                        lineNumber: 157
                                    },
                                    __self: s
                                }), Zr.a.createElement("div", {
                                    className: "itemLine",
                                    __source: {
                                        fileName: Tc,
                                        lineNumber: 158
                                    },
                                    __self: s
                                }, Zr.a.createElement("span", {
                                    className: "themeTitle",
                                    dangerouslySetInnerHTML: {
                                        __html: e.quizetheme
                                    },
                                    __source: {
                                        fileName: Tc,
                                        lineNumber: 159
                                    },
                                    __self: s
                                }), 0 !== +e.stoptimestamp && 2 === a ? Zr.a.createElement("span", {
                                    className: "themeTime",
                                    __source: {
                                        fileName: Tc,
                                        lineNumber: 162
                                    },
                                    __self: s
                                }, "\u53d1\u8d77\u540e", e.stoptimestamp / 60, "\u5206\u949f\u5c01\u76d8") : ""), Zr.a.createElement("div", {
                                    className: "itemLine",
                                    dangerouslySetInnerHTML: {
                                        __html: e.firstoptionname + '<span className="themeVs"> vs </span>' + e.secondoptionname
                                    },
                                    __source: {
                                        fileName: Tc,
                                        lineNumber: 166
                                    },
                                    __self: s
                                }));
                            return 0 === +e.status ? Zr.a.createElement("div", {
                                className: "guessSettingHave-one",
                                key: r,
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 172
                                },
                                __self: s
                            }, Zr.a.createElement("div", {
                                className: "guessSettingHave-audit auditWait",
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 173
                                },
                                __self: s
                            }), Zr.a.createElement("span", {
                                className: "guessSettingHave-chooseDisabled",
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 174
                                },
                                __self: s
                            }), Zr.a.createElement("span", {
                                className: "guessSettingHave-edit",
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 175
                                },
                                __self: s
                            }), l) : 1 === +e.status ? Zr.a.createElement("div", {
                                className: "guessSettingHave-one",
                                key: r,
                                onClick: function onClick() {
                                    i.guessTitleSwitch(e.quizeid, e.stoptimestamp)
                                },
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 181
                                },
                                __self: s
                            }, Zr.a.createElement("span", {
                                className: n.indexOf(+e.quizeid) >= 0 ? "guessSettingHave-choosed" : "guessSettingHave-unChoose",
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 182
                                },
                                __self: s
                            }), Zr.a.createElement("span", Sc({
                                className: "guessSettingHave-edit ableEdit"
                            }, e, {
                                onClick: i.showGuessTitleEdit,
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 183
                                },
                                __self: s
                            })), l) : 2 === +e.status ? Zr.a.createElement("div", {
                                className: "guessSettingHave-one",
                                key: r,
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 189
                                },
                                __self: s
                            }, Zr.a.createElement("div", {
                                className: "guessSettingHave-audit auditFail",
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 190
                                },
                                __self: s
                            }), Zr.a.createElement("span", {
                                className: "guessSettingHave-chooseDisabled",
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 191
                                },
                                __self: s
                            }), Zr.a.createElement("span", Sc({
                                className: "guessSettingHave-edit ableEdit"
                            }, e, {
                                onClick: i.showGuessTitleEdit,
                                __source: {
                                    fileName: Tc,
                                    lineNumber: 192
                                },
                                __self: s
                            })), l) : null
                        })
                    }
                    ,
                    i.startQuiz = function (e) {
                        var t = e;
                        return function () {
                            var e = i.state.titleStatus
                                , s = []
                                , r = i.global.get("$ROOM.room_id")
                                , n = i.props.guessGameData.role
                                , a = i.props.listData.guessStartType
                                , o = i.props.guessTicketData.isBoldGuess;
                            if (e.forEach(function (e) {
                                s.push(e)
                            }),
                            s.length > 0) {
                                i.guessDYSubService.guessGameDYSub("click_anchorquiz_create", {
                                    is_anch: +n,
                                    type: a,
                                    quiz_t: o ? 2 : 1
                                });
                                var l = {
                                    ids: s,
                                    roomId: r,
                                    isAnchor: n,
                                    guessStartType: a,
                                    guessType: t
                                };
                                i.guessTitleListService.guessStartQuiz(l)
                            } else
                                te.a.error("\u8bf7\u81f3\u5c11\u52fe\u9009\u4e00\u4e2a\u7ade\u731c\u4e3b\u9898\uff01")
                        }
                    }
                    ,
                    i.state = {
                        titleStatus: [],
                        boldGuessGuideIsShow: !1,
                        editTitle: {}
                    },
                    i
            }

            return GuessTitleList_inherits(GuessTitleList, e),
                GuessTitleList.prototype.componentWillMount = function componentWillMount() {
                    this.guessTitleListService.init()
                }
                ,
                GuessTitleList.prototype.chooseGuessStartType = function chooseGuessStartType(e) {
                    this.guessTitleListService.guessStartTypeChoose(e)
                }
                ,
                GuessTitleList.prototype.componentDidMount = function componentDidMount() {
                    var e = this.props.guessIconConfigData.isOpenTicket
                        , t = this.props.guessGameData.role;
                    !this.localStorage.get("guessGame-boldGuessGuide") && e && t && (this.setState({
                        boldGuessGuideIsShow: !0
                    }),
                        this.setGuideStatus())
                }
                ,
                GuessTitleList.prototype.render = function render() {
                    var e = this
                        , t = this.props.listData
                        , s = this.state
                        , i = s.titleStatus
                        , r = s.editTitle
                        , n = this.props.guessIconConfigData
                        , a = n.isOpen
                        , o = n.isSimpleOpen
                        , l = n.isOpenTicket
                        , u = t.isGuessTitleEditShow
                        , c = this.props.guessGameData.role
                        , m = this.state.boldGuessGuideIsShow && l && c;
                    return Zr.a.createElement(an.a, {
                        className: ["guessSettingHave", "guessGameModel", 1 === t.guessStartType ? "" : "guessStartEasy"].join(" "),
                        visible: t.isGuessTitleShow,
                        footer: null,
                        closable: !1,
                        mask: !1,
                        maskClosable: !0,
                        destroyOnClose: !0,
                        width: 518,
                        onCancel: function onCancel() {
                            e.guessTitleListService.guessTitleListPopClose()
                        },
                        center: !0,
                        bodyStyle: {},
                        __source: {
                            fileName: Tc,
                            lineNumber: 285
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "guessGame--btnClose is-white",
                        onClick: function onClick() {
                            e.guessTitleListService.guessTitleListPopClose()
                        },
                        __source: {
                            fileName: Tc,
                            lineNumber: 298
                        },
                        __self: this
                    }), Zr.a.createElement("a", {
                        href: "https://www.douyu.com/cms/gong/201712/25/6965.shtml",
                        target: "_blank",
                        className: "guessSettingHave-ruleInfo",
                        __source: {
                            fileName: Tc,
                            lineNumber: 299
                        },
                        __self: this
                    }, "\u73a9\u6cd5\u4ecb\u7ecd"), Zr.a.createElement("p", {
                        className: "guessGameModel-title",
                        __source: {
                            fileName: Tc,
                            lineNumber: 300
                        },
                        __self: this
                    }, "\u7ade\u731c\u4e3b\u9898\u8bbe\u7f6e"), Zr.a.createElement("div", {
                        className: "guessGameModel-subtitle",
                        __source: {
                            fileName: Tc,
                            lineNumber: 301
                        },
                        __self: this
                    }, Zr.a.createElement("p", {
                        className: "tip",
                        __source: {
                            fileName: Tc,
                            lineNumber: 302
                        },
                        __self: this
                    }, "\u60a8\u6700\u591a\u53ef\u540c\u65f6\u53d1\u8d773\u4e2a\u4e3b\u9898(", Zr.a.createElement("span", {
                        className: "guessGame--dyColor",
                        __source: {
                            fileName: Tc,
                            lineNumber: 302
                        },
                        __self: this
                    }, "\u5df2\u9009\u4e2d\uff1a", i.length, "\u4e2a"), ")"), Zr.a.createElement("span", {
                        className: "guessSettingHave-rule",
                        onClick: this.showGuessTitleEdit,
                        __source: {
                            fileName: Tc,
                            lineNumber: 303
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 303
                        },
                        __self: this
                    }, "+"), "\xa0\xa0\u6dfb\u52a0\u4e3b\u9898")), Zr.a.createElement("div", {
                        className: "guessSettingHave-main",
                        __source: {
                            fileName: Tc,
                            lineNumber: 305
                        },
                        __self: this
                    }, Zr.a.createElement(Ra.Scrollbars, {
                        __source: {
                            fileName: Tc,
                            lineNumber: 306
                        },
                        __self: this
                    }, this.getThisStatus(t.list))), Zr.a.createElement("div", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 310
                        },
                        __self: this
                    }, a ? Zr.a.createElement("div", {
                        className: "guessSettingHave-guessModeBox",
                        onClick: function onClick() {
                            e.chooseGuessStartType(1)
                        },
                        __source: {
                            fileName: Tc,
                            lineNumber: 312
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: ["guessStartItem", 1 === t.guessStartType ? "active" : ""].join(" "),
                        __source: {
                            fileName: Tc,
                            lineNumber: 313
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--bubble bubble",
                        __source: {
                            fileName: Tc,
                            lineNumber: 314
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGameArrow is-down is-left is-orangeDown ",
                        __source: {
                            fileName: Tc,
                            lineNumber: 315
                        },
                        __self: this
                    }), Zr.a.createElement("p", {
                        className: "guessModeBoxTitle",
                        __source: {
                            fileName: Tc,
                            lineNumber: 316
                        },
                        __self: this
                    }, "\u6c34\u53cb\u5f00\u731c\u8bbe\u7f6e\u8d54\u7387\uff1a"), Zr.a.createElement("p", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 317
                        },
                        __self: this
                    }, "\u7528\u6237\u53ef\u5f00\u731c\u3001\u6295\u6ce8\uff0c\u4ee5\u53c2\u4e0e\u65f6\u7684\u8d54\u7387\u7ed3\u7b97"))), Zr.a.createElement("span", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 320
                        },
                        __self: this
                    }, "\u6c34\u53cb\u5f00\u731c\u8bbe\u7f6e\u8d54\u7387")) : null, o ? Zr.a.createElement("div", {
                        className: "guessSettingHave-guessModeBox",
                        onClick: function onClick() {
                            e.chooseGuessStartType(2)
                        },
                        __source: {
                            fileName: Tc,
                            lineNumber: 324
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: ["guessStartItem", 1 === t.guessStartType ? "" : "active"].join(" "),
                        __source: {
                            fileName: Tc,
                            lineNumber: 325
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--bubble bubble",
                        __source: {
                            fileName: Tc,
                            lineNumber: 326
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGameArrow is-down is-left is-orangeDown ",
                        __source: {
                            fileName: Tc,
                            lineNumber: 327
                        },
                        __self: this
                    }), Zr.a.createElement("p", {
                        className: "guessModeBoxTitle",
                        __source: {
                            fileName: Tc,
                            lineNumber: 328
                        },
                        __self: this
                    }, "\u81ea\u52a8\u8d54\u7387\uff1a"), Zr.a.createElement("p", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 329
                        },
                        __self: this
                    }, "\u7528\u6237\u53ea\u80fd\u6295\u6ce8\uff0c\u7cfb\u7edf\u5b9e\u65f6\u8ba1\u7b97\u8d54\u7387\uff0c\u4ee5\u5c01\u76d8\u65f6\u8d54\u7387\u7ed3\u7b97"), Zr.a.createElement("span", {
                        className: "newIcon",
                        __source: {
                            fileName: Tc,
                            lineNumber: 330
                        },
                        __self: this
                    }))), Zr.a.createElement("span", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 333
                        },
                        __self: this
                    }, "\u81ea\u52a8\u8d54\u7387\uff08\u5e73\u53f0\u5b9e\u65f6\u8ba1\u7b97\u8d54\u7387\uff09")) : null), Zr.a.createElement("div", {
                        className: "guessGame--btnBox",
                        __source: {
                            fileName: Tc,
                            lineNumber: 337
                        },
                        __self: this
                    }, l && c ? Zr.a.createElement("div", {
                        className: "guessSettingHave--btn guessSettingHave--btn--sizeXL guessSettingHave--btnGap",
                        onClick: this.startQuiz(2),
                        __source: {
                            fileName: Tc,
                            lineNumber: 339
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 340
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "tipsArrow",
                        __source: {
                            fileName: Tc,
                            lineNumber: 340
                        },
                        __self: this
                    }), "\u7528\u6237\u4f7f\u7528\u63a2\u9669\u5238\u53c2\u4e0e\u7ade\u731c\uff0c\u4e3b\u64ad\u53ef\u4ee5\u52a0\u70ed\u5ea6\u8fd8\u53ef\u4ee5\u83b7\u5f97", Zr.a.createElement("span", {
                        className: "guessSettingHave--orange",
                        __source: {
                            fileName: Tc,
                            lineNumber: 340
                        },
                        __self: this
                    }, "\u63a2\u9669\u5238\u5956\u52b1"))) : null, Zr.a.createElement("div", {
                        className: "guessSettingHave--btn guessSettingHave--btn--sizeXL is-yuwan",
                        onClick: this.startQuiz(1),
                        __source: {
                            fileName: Tc,
                            lineNumber: 344
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        __source: {
                            fileName: Tc,
                            lineNumber: 345
                        },
                        __self: this
                    }, Zr.a.createElement("span", {
                        className: "tipsArrow",
                        __source: {
                            fileName: Tc,
                            lineNumber: 345
                        },
                        __self: this
                    }), "\u7528\u6237\u4f7f\u7528\u9c7c\u4e38\u53c2\u4e0e\u7ade\u731c\uff0c\u4e3b\u64ad\u53ef\u4ee5\u52a0\u70ed\u5ea6~"))), function boldGuessGuide(t) {
                        return t ? Zr.a.createElement("div", {
                            className: "guessSettingHave-guessBoldGuide",
                            __source: {
                                fileName: Tc,
                                lineNumber: 273
                            },
                            __self: e
                        }, Zr.a.createElement("div", {
                            className: "guessSettingHave-guessBoldGuide--backImg",
                            __source: {
                                fileName: Tc,
                                lineNumber: 274
                            },
                            __self: e
                        }, Zr.a.createElement("div", {
                            className: "guessSettingHave-guessBoldGuide--text",
                            __source: {
                                fileName: Tc,
                                lineNumber: 275
                            },
                            __self: e
                        }, "\u7528\u6237\u4f7f\u7528\u63a2\u9669\u5238\u53c2\u4e0e\u7ade\u731c\uff0c\u4e3b\u64ad\u53ef\u4ee5\u52a0\u70ed\u5ea6"), Zr.a.createElement("div", {
                            className: "guessSettingHave-guessBoldGuide--text topnine",
                            __source: {
                                fileName: Tc,
                                lineNumber: 276
                            },
                            __self: e
                        }, "\u8fd8\u53ef\u4ee5\u83b7\u5f97", Zr.a.createElement("span", {
                            className: "orange",
                            __source: {
                                fileName: Tc,
                                lineNumber: 277
                            },
                            __self: e
                        }, "\u63a2\u9669\u5238\u5956\u52b1")), Zr.a.createElement("a", {
                            className: "guessSettingHave-guessBoldGuide--close",
                            onClick: e.closeGuide,
                            __source: {
                                fileName: Tc,
                                lineNumber: 279
                            },
                            __self: e
                        }, "\u77e5\u9053\u4e86"))) : null
                    }(m), u ? Zr.a.createElement(Nc, {
                        editTitle: r,
                        __source: {
                            fileName: Tc,
                            lineNumber: 349
                        },
                        __self: this
                    }) : null)
                }
                ,
                GuessTitleList
        }(Zr.a.Component),
            hc = GuessTitleList_applyDecoratedDescriptor(dc.prototype, "guessTitleListService", [cc], {
                enumerable: !0,
                initializer: null
            }),
            bc = GuessTitleList_applyDecoratedDescriptor(dc.prototype, "guessDYSubService", [mc], {
                enumerable: !0,
                initializer: null
            }),
            gc = GuessTitleList_applyDecoratedDescriptor(dc.prototype, "localStorage", [pc], {
                enumerable: !0,
                initializer: null
            }),
            yc = GuessTitleList_applyDecoratedDescriptor(dc.prototype, "global", [fc], {
                enumerable: !0,
                initializer: null
            }),
            _c = dc)) || _c), Rc = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                guessIconConfigData: e.guessIconConfigData,
                guessTicketData: e.guessTicketData,
                listData: e.guessGameTitleListData
            }
        })(kc), Cc = (s("3a412"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessTitleTip/GuessTitleTip.js");

        function GuessTitleTip_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessTitleTip_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessTitleTip_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        var jc, Mc, zc, Ic, Lc, Ac, Bc = (Dc = (0,
            r.a.Service)(It),
        Object(rs.log)((wc = function (e) {
            function GuessTitleTip() {
                var t, s;
                !function GuessTitleTip_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessTitleTip);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessTitleTip_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    function GuessTitleTip_initDefineProp(e, t, s, i) {
                        s && Object.defineProperty(e, t, {
                            enumerable: s.enumerable,
                            configurable: s.configurable,
                            writable: s.writable,
                            value: s.initializer ? s.initializer.call(i) : void 0
                        })
                    }(s, "guessMainPanelServices", Pc, s),
                    s.shutModal = function () {
                        s.guessMainPanelServices.guessCommonTipSwitch({
                            status: !1,
                            msg: ""
                        })
                    }
                    ,
                    GuessTitleTip_possibleConstructorReturn(s, t)
            }

            return GuessTitleTip_inherits(GuessTitleTip, e),
                GuessTitleTip.prototype.render = function render() {
                    var e = this
                        , t = this.props.guessGameData
                        , s = t.commonTipsStatus
                        , i = t.commonTipsMsg;
                    return Zr.a.createElement(an.a, {
                        className: "guessTitleTip",
                        visible: s,
                        footer: null,
                        closable: !1,
                        mask: !1,
                        maskClosable: !0,
                        destroyOnClose: !0,
                        width: 400,
                        onCancel: function onCancel() {
                            e.shutModal()
                        },
                        center: !0,
                        bodyStyle: {},
                        __source: {
                            fileName: Cc,
                            lineNumber: 33
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btnClose",
                        onClick: function onClick() {
                            e.shutModal()
                        },
                        __source: {
                            fileName: Cc,
                            lineNumber: 46
                        },
                        __self: this
                    }), Zr.a.createElement("p", {
                        className: "guessTitleTip-title",
                        __source: {
                            fileName: Cc,
                            lineNumber: 47
                        },
                        __self: this
                    }, "\u63d0\u793a"), Zr.a.createElement("div", {
                        className: "guessTitleTip-content",
                        __source: {
                            fileName: Cc,
                            lineNumber: 48
                        },
                        __self: this
                    }, i), Zr.a.createElement("div", {
                        className: "guessGame--btnBox",
                        __source: {
                            fileName: Cc,
                            lineNumber: 49
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeM",
                        onClick: function onClick() {
                            e.shutModal()
                        },
                        __source: {
                            fileName: Cc,
                            lineNumber: 50
                        },
                        __self: this
                    }, "\u77e5\u9053\u5566")))
                }
                ,
                GuessTitleTip
        }(Zr.a.Component),
            Pc = function GuessTitleTip_applyDecoratedDescriptor(e, t, s, i, r) {
                var n = {};
                return Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }),
                    n.enumerable = !!n.enumerable,
                    n.configurable = !!n.configurable,
                ("value" in n || n.initializer) && (n.writable = !0),
                    n = s.slice().reverse().reduce(function (s, i) {
                        return i(e, t, s) || s
                    }, n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                    n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                    n = null),
                    n
            }(wc.prototype, "guessMainPanelServices", [Dc], {
                enumerable: !0,
                initializer: null
            }),
            Ec = wc)) || Ec), xc = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData
            }
        })(Bc), qc = (s("72c9a"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessTitleNone/GuessTitleNone.js");

        function GuessTitleNone_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessTitleNone_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessTitleNone_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessTitleNone_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessTitleNone_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var Uc, Hc, Yc, Wc, Fc, Jc, Vc, Qc, $c, Kc, Xc, Zc, em = r.a.Service, tm = (jc = em(ti),
            Mc = em(We),
        Object(rs.log)((Ic = function (e) {
            function GuessTitleNone() {
                var t, s;
                !function GuessTitleNone_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessTitleNone);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessTitleNone_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    GuessTitleNone_initDefineProp(s, "guessTitleListService", Lc, s),
                    GuessTitleNone_initDefineProp(s, "guessDYSubService", Ac, s),
                    s.state = {
                        step: 0,
                        editTitle: {}
                    },
                    s.preStep = function () {
                        s.state.step > 0 && s.setState(function (e) {
                            return {
                                step: (e.step - 1 + 3) % 3
                            }
                        })
                    }
                    ,
                    s.nextStep = function () {
                        s.state.step < 2 && s.setState(function (e) {
                            return {
                                step: (e.step + 1 + 3) % 3
                            }
                        })
                    }
                    ,
                    s.jumpStep = function (e) {
                        s.setState({
                            step: e
                        })
                    }
                    ,
                    s.shutThis = function () {
                        s.guessTitleListService.guessTitleListPopClose()
                    }
                    ,
                    s.showGuessTitleEdit = function (e) {
                        e.stopPropagation();
                        var t = s.props.guessGameData.role;
                        s.guessDYSubService.guessGameDYSub("click_quiz_add", {
                            is_anch: +t
                        }),
                            s.shutThis(),
                            s.guessTitleListService.guessTitleEditPopShow()
                    }
                    ,
                    GuessTitleNone_possibleConstructorReturn(s, t)
            }

            return GuessTitleNone_inherits(GuessTitleNone, e),
                GuessTitleNone.prototype.render = function render() {
                    var e = this
                        , t = this.state
                        , s = t.step
                        , i = t.editTitle
                        , r = this.props.listData
                        , n = this.props.guessGameData.role
                        , a = {
                        left: "-" + 500 * this.state.step + "px"
                    };
                    return Zr.a.createElement(an.a, {
                        className: "guessTitleNone",
                        visible: r.isGuessTitleShow,
                        footer: null,
                        closable: !1,
                        mask: !0,
                        maskClosable: !0,
                        onCancel: this.shutThis,
                        center: !0,
                        bodyStyle: {
                            position: "fixed",
                            width: "500px",
                            height: "360px",
                            top: "50%",
                            left: "50%",
                            marginLeft: "-180px",
                            marginTop: "-231px",
                            padding: "0",
                            boxSizing: "border-box",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 0 3px rgba(0, 0, 0, .3)",
                            zIndex: 220
                        },
                        __source: {
                            fileName: qc,
                            lineNumber: 101
                        },
                        __self: this
                    }, n ? Zr.a.createElement("ul", {
                        className: "guessTitleNone-ul",
                        style: a,
                        __source: {
                            fileName: qc,
                            lineNumber: 114
                        },
                        __self: this
                    }, Zr.a.createElement("li", {
                        className: "guessTitleNone-liItem",
                        __source: {
                            fileName: qc,
                            lineNumber: 115
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessTitleNone-img anchorOne",
                        __source: {
                            fileName: qc,
                            lineNumber: 115
                        },
                        __self: this
                    })), Zr.a.createElement("li", {
                        className: "guessTitleNone-liItem",
                        __source: {
                            fileName: qc,
                            lineNumber: 116
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessTitleNone-img anchorTwo",
                        __source: {
                            fileName: qc,
                            lineNumber: 116
                        },
                        __self: this
                    })), Zr.a.createElement("li", {
                        className: "guessTitleNone-liItem",
                        __source: {
                            fileName: qc,
                            lineNumber: 117
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessTitleNone-img anchorThree",
                        __source: {
                            fileName: qc,
                            lineNumber: 117
                        },
                        __self: this
                    }))) : Zr.a.createElement("ul", {
                        className: "guessTitleNone-ul",
                        style: a,
                        __source: {
                            fileName: qc,
                            lineNumber: 120
                        },
                        __self: this
                    }, Zr.a.createElement("li", {
                        className: "guessTitleNone-liItem",
                        __source: {
                            fileName: qc,
                            lineNumber: 121
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessTitleNone-img userOne",
                        __source: {
                            fileName: qc,
                            lineNumber: 121
                        },
                        __self: this
                    })), Zr.a.createElement("li", {
                        className: "guessTitleNone-liItem",
                        __source: {
                            fileName: qc,
                            lineNumber: 122
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessTitleNone-img userTwo",
                        __source: {
                            fileName: qc,
                            lineNumber: 122
                        },
                        __self: this
                    })), Zr.a.createElement("li", {
                        className: "guessTitleNone-liItem",
                        __source: {
                            fileName: qc,
                            lineNumber: 123
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "guessTitleNone-img userThree",
                        __source: {
                            fileName: qc,
                            lineNumber: 123
                        },
                        __self: this
                    }))), Zr.a.createElement("div", {
                        className: "guessGame--btnClose",
                        onClick: this.shutThis,
                        __source: {
                            fileName: qc,
                            lineNumber: 127
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "guessTitleNone-title",
                        __source: {
                            fileName: qc,
                            lineNumber: 128
                        },
                        __self: this
                    }, "\u7ade\u731c\u4e3b\u9898\u8bbe\u7f6e"), Zr.a.createElement("span", {
                        className: "guessTitleNone-pre",
                        onClick: this.preStep,
                        __source: {
                            fileName: qc,
                            lineNumber: 129
                        },
                        __self: this
                    }), Zr.a.createElement("span", {
                        className: "guessTitleNone-next",
                        onClick: this.nextStep,
                        __source: {
                            fileName: qc,
                            lineNumber: 130
                        },
                        __self: this
                    }), Zr.a.createElement("a", {
                        href: "https://www.douyu.com/cms/gong/201712/25/6965.shtml",
                        target: "_blank",
                        className: "guessTitleNone-rule",
                        __source: {
                            fileName: qc,
                            lineNumber: 131
                        },
                        __self: this
                    }, "\u73a9\u6cd5\u4ecb\u7ecd"), Zr.a.createElement("div", {
                        className: "guessGame--btn guessGame--btn--sizeXL is-empty guessTitleNone-add",
                        onClick: this.showGuessTitleEdit,
                        __source: {
                            fileName: qc,
                            lineNumber: 132
                        },
                        __self: this
                    }, "+\u6dfb\u52a0\u4e3b\u9898"), Zr.a.createElement("ol", {
                        className: "guessTitleNone-jump",
                        __source: {
                            fileName: qc,
                            lineNumber: 133
                        },
                        __self: this
                    }, Zr.a.createElement("li", {
                        className: 0 === s ? "active" : "",
                        onClick: function onClick() {
                            return e.jumpStep(0)
                        },
                        __source: {
                            fileName: qc,
                            lineNumber: 134
                        },
                        __self: this
                    }), Zr.a.createElement("li", {
                        className: 1 === s ? "active" : "",
                        onClick: function onClick() {
                            return e.jumpStep(1)
                        },
                        __source: {
                            fileName: qc,
                            lineNumber: 135
                        },
                        __self: this
                    }), Zr.a.createElement("li", {
                        className: 2 === s ? "active" : "",
                        onClick: function onClick() {
                            return e.jumpStep(2)
                        },
                        __source: {
                            fileName: qc,
                            lineNumber: 136
                        },
                        __self: this
                    })), Zr.a.createElement(Nc, {
                        editTitle: i,
                        __source: {
                            fileName: qc,
                            lineNumber: 138
                        },
                        __self: this
                    }))
                }
                ,
                GuessTitleNone
        }(Zr.a.Component),
            Lc = GuessTitleNone_applyDecoratedDescriptor(Ic.prototype, "guessTitleListService", [jc], {
                enumerable: !0,
                initializer: null
            }),
            Ac = GuessTitleNone_applyDecoratedDescriptor(Ic.prototype, "guessDYSubService", [Mc], {
                enumerable: !0,
                initializer: null
            }),
            zc = Ic)) || zc), sm = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                listData: e.guessGameTitleListData
            }
        })(tm), im = s("a1693"), rm = (s("71167"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessMainPanel/GuessMainPanel.js");

        function GuessMainPanel_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessMainPanel_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessMainPanel_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessMainPanel_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var nm, am, om, lm, um, cm, mm, pm, fm, _m = r.a.Service, dm = r.a.Region, hm = (Uc = _m(It),
            Hc = _m(ti),
            Yc = _m(We),
            Wc = _m(n.DataCenter.global),
            Fc = _m(n.DataCenter.localStorage),
        Object(rs.log)((Vc = function (e) {
            function GuessMainPanel(t) {
                !function GuessMainPanel_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessMainPanel);
                var s = function GuessMainPanel_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, e.call(this, t));
                return GuessMainPanel_initDefineProp(s, "guessMainPanelService", Qc, s),
                    GuessMainPanel_initDefineProp(s, "guessTitleListService", $c, s),
                    GuessMainPanel_initDefineProp(s, "guessDYSubService", Kc, s),
                    GuessMainPanel_initDefineProp(s, "global", Xc, s),
                    GuessMainPanel_initDefineProp(s, "localStorage", Zc, s),
                    s.showGuessTitleList = function () {
                        var e = s.global.get("$ROOM.room_id")
                            , t = s.checkIndetify();
                        s.guessTitleListService.getGuessTitleListEpic({
                            roomId: e,
                            isAnchor: t
                        })
                    }
                    ,
                    s.closeTicketGuide = function (e) {
                        e.stopPropagation(),
                            s.localStorage.set("guessGame-boldGuessUserGuide", !0),
                            s.setState({
                                boldGuessUserGuideIsShow: !1
                            })
                    }
                    ,
                    s.guessDYSubService.guessGameDYSub("show_anchorquiz", {}, !0),
                    s.state = {
                        boldGuessUserGuideIsShow: !1
                    },
                    s.closeTicketGuide.bind(s),
                    s
            }

            return GuessMainPanel_inherits(GuessMainPanel, e),
                GuessMainPanel.prototype.checkIndetify = function checkIndetify() {
                    return +this.global.get("USER_INFO.uid") === +this.global.get("$ROOM.owner_uid")
                }
                ,
                GuessMainPanel.prototype.componentWillMount = function componentWillMount() {
                    this.checkIndetify() && this.guessMainPanelService.setRole(3)
                }
                ,
                GuessMainPanel.prototype.componentWillReceiveProps = function componentWillReceiveProps(e) {
                    var t = e.guessTicketData.isBoldGuess;
                    !this.localStorage.get("guessGame-boldGuessUserGuide") && t && (this.setState({
                        boldGuessUserGuideIsShow: !0
                    }),
                        this.localStorage.set("guessGame-boldGuessUserGuide", !0))
                }
                ,
                GuessMainPanel.prototype.componentDidMount = function componentDidMount() {
                    var e = this
                        , t = this.props.guessIconRoomConfigData.cate_id
                        , s = this.props.userRoleData.isRoomAdmin
                        , i = setTimeout(function () {
                        e.guessMainPanelService.panelShow({
                            cate_id: t,
                            isRoomAdmin: s
                        }),
                            clearTimeout(i),
                            i = null
                    }, 100)
                }
                ,
                GuessMainPanel.prototype.render = function render() {
                    var e = this
                        , t = this.checkIndetify()
                        , s = this.props.guessThemedata.list
                        , i = {
                        right: this.props.guessSliderData.currentRight + "px"
                    }
                        , r = void 0;
                    r = s.length ? Zr.a.createElement(nl, {
                        __source: {
                            fileName: rm,
                            lineNumber: 122
                        },
                        __self: this
                    }) : t ? Zr.a.createElement(ml, {
                        startQuiz: this.showGuessTitleList,
                        __source: {
                            fileName: rm,
                            lineNumber: 124
                        },
                        __self: this
                    }) : Zr.a.createElement(zl, {
                        startQuiz: this.showGuessTitleList,
                        __source: {
                            fileName: rm,
                            lineNumber: 126
                        },
                        __self: this
                    });
                    var n = this.props.guessIconEntryData
                        , a = n.panelShow
                        , o = n.roomType
                        , l = n.isFullScreen
                        , u = this.props.guessTicketData.isBoldGuess
                        , c = a ? "is-show" : ""
                        , m = this.props.guessSliderData
                        , p = m.rankWidth
                        , f = m.rankStatus
                        , _ = o && p > 0 && f && !u ? "is-showRank" : ""
                        , d = this.props.guessGameData
                        , h = d.sendGiftReturnYw
                        , b = d.sendGiftReturnYwCd
                        , g = d.commonTipsStatus
                        , y = !t && h && b > 0
                        , v = o && !l ? "" : "GuessMainPanel-ticketGuideDiy"
                        , G = this.props.guessGameTitleListData.list
                        , N = void 0 === G ? [] : G
                        , S = N && N.length > 0;
                    return Zr.a.createElement("div", {
                        className: ["GuessMainPanel", c, _].join(" "),
                        id: "guess-main-panel",
                        __source: {
                            fileName: rm,
                            lineNumber: 146
                        },
                        __self: this
                    }, Zr.a.createElement(ia, {
                        startQuiz: this.showGuessTitleList,
                        __source: {
                            fileName: rm,
                            lineNumber: 147
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "GuessMainPanel-body",
                        style: i,
                        __source: {
                            fileName: rm,
                            lineNumber: 148
                        },
                        __self: this
                    }, r), u && !t && this.state.boldGuessUserGuideIsShow ? Zr.a.createElement("div", {
                        class: ["GuessMainPanel-ticketGuide", v].join(" "),
                        __source: {
                            fileName: rm,
                            lineNumber: 152
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItemBox",
                        __source: {
                            fileName: rm,
                            lineNumber: 153
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItem",
                        __source: {
                            fileName: rm,
                            lineNumber: 154
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItemCotent",
                        __source: {
                            fileName: rm,
                            lineNumber: 155
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--card1",
                        __source: {
                            fileName: rm,
                            lineNumber: 156
                        },
                        __self: this
                    }), Zr.a.createElement("p", {
                        className: "GuessMainPanel-ticketGuide--guideTitle",
                        __source: {
                            fileName: rm,
                            lineNumber: 157
                        },
                        __self: this
                    }, "\u83b7\u5f97", Zr.a.createElement("span", {
                        className: "GuessMainPanel-ticketGuide--guideTitleSpan",
                        __source: {
                            fileName: rm,
                            lineNumber: 157
                        },
                        __self: this
                    }, "\u63a2\u9669\u5238")), Zr.a.createElement("p", {
                        className: "GuessMainPanel-ticketGuide--desc",
                        __source: {
                            fileName: rm,
                            lineNumber: 158
                        },
                        __self: this
                    }, "\u8d60\u9001\u793c\u7269\u3010\u5c0f\u98de\u789f\u3011"))), Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItemSep",
                        __source: {
                            fileName: rm,
                            lineNumber: 161
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItem",
                        __source: {
                            fileName: rm,
                            lineNumber: 162
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItemCotent",
                        __source: {
                            fileName: rm,
                            lineNumber: 163
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--card2",
                        __source: {
                            fileName: rm,
                            lineNumber: 164
                        },
                        __self: this
                    }), Zr.a.createElement("p", {
                        className: "GuessMainPanel-ticketGuide--guideTitle",
                        __source: {
                            fileName: rm,
                            lineNumber: 165
                        },
                        __self: this
                    }, "\u8d62\u5f97\u66f4\u591a", Zr.a.createElement("span", {
                        className: "guideTitleSpan",
                        __source: {
                            fileName: rm,
                            lineNumber: 165
                        },
                        __self: this
                    }, "\u63a2\u9669\u5238")), Zr.a.createElement("p", {
                        className: "GuessMainPanel-ticketGuide--desc",
                        __source: {
                            fileName: rm,
                            lineNumber: 166
                        },
                        __self: this
                    }, "\u4f7f\u7528\u63a2\u9669\u5238\u6295\u6ce8\u6216\u5f00\u731c"))), Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItemSep",
                        __source: {
                            fileName: rm,
                            lineNumber: 169
                        },
                        __self: this
                    }), Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItem",
                        __source: {
                            fileName: rm,
                            lineNumber: 170
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItemCotent",
                        __source: {
                            fileName: rm,
                            lineNumber: 171
                        },
                        __self: this
                    }, Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--card3",
                        __source: {
                            fileName: rm,
                            lineNumber: 172
                        },
                        __self: this
                    }), Zr.a.createElement("p", {
                        className: "GuessMainPanel-ticketGuide--guideTitle",
                        __source: {
                            fileName: rm,
                            lineNumber: 173
                        },
                        __self: this
                    }, "\u53c2\u4e0e", Zr.a.createElement("span", {
                        className: "GuessMainPanel-ticketGuide--guideTitleSpan",
                        __source: {
                            fileName: rm,
                            lineNumber: 173
                        },
                        __self: this
                    }, "\u592a\u7a7a\u63a2\u9669")), Zr.a.createElement("p", {
                        className: "GuessMainPanel-ticketGuide--desc",
                        __source: {
                            fileName: rm,
                            lineNumber: 174
                        },
                        __self: this
                    }, "\u83b7\u5f97\u66f4\u591a\u7684\u9053\u5177\u793c\u7269"))), Zr.a.createElement("div", {
                        className: "GuessMainPanel-ticketGuide--guideItemBoxCloseBtn",
                        onClick: this.closeTicketGuide,
                        __source: {
                            fileName: rm,
                            lineNumber: 177
                        },
                        __self: this
                    }))) : null, Zr.a.createElement(Al, {
                        __source: {
                            fileName: rm,
                            lineNumber: 182
                        },
                        __self: this
                    }), this.props.rankShow ? Zr.a.createElement(hu, {
                        __source: {
                            fileName: rm,
                            lineNumber: 183
                        },
                        __self: this
                    }) : "", y ? Zr.a.createElement(qu, {
                        __source: {
                            fileName: rm,
                            lineNumber: 184
                        },
                        __self: this
                    }) : "", S ? Zr.a.createElement(Rc, {
                        __source: {
                            fileName: rm,
                            lineNumber: 185
                        },
                        __self: this
                    }) : Zr.a.createElement(sm, {
                        __source: {
                            fileName: rm,
                            lineNumber: 185
                        },
                        __self: this
                    }), g ? Zr.a.createElement(xc, {
                        __source: {
                            fileName: rm,
                            lineNumber: 186
                        },
                        __self: this
                    }) : null, Zr.a.createElement(Xu, {
                        __source: {
                            fileName: rm,
                            lineNumber: 187
                        },
                        __self: this
                    }), _ ? Zr.a.createElement(Su, {
                        __source: {
                            fileName: rm,
                            lineNumber: 188
                        },
                        __self: this
                    }) : null, Zr.a.createElement(lc, {
                        __source: {
                            fileName: rm,
                            lineNumber: 189
                        },
                        __self: this
                    }), t ? null : Zr.a.createElement(dm, {
                        className: ["GuessGameAdContainer", _].join(" "),
                        name: "sign",
                        belongTo: "ToolbarApp",
                        data: {
                            id: "411101",
                            viewRender: function viewRender() {
                                return Zr.a.createElement(im.a, {
                                    data: {
                                        id: "411101",
                                        icon: "icon-hot"
                                    },
                                    __source: {
                                        fileName: rm,
                                        lineNumber: 197
                                    },
                                    __self: e
                                })
                            }
                        },
                        __source: {
                            fileName: rm,
                            lineNumber: 191
                        },
                        __self: this
                    }))
                }
                ,
                GuessMainPanel
        }(Zr.a.Component),
            Qc = GuessMainPanel_applyDecoratedDescriptor(Vc.prototype, "guessMainPanelService", [Uc], {
                enumerable: !0,
                initializer: null
            }),
            $c = GuessMainPanel_applyDecoratedDescriptor(Vc.prototype, "guessTitleListService", [Hc], {
                enumerable: !0,
                initializer: null
            }),
            Kc = GuessMainPanel_applyDecoratedDescriptor(Vc.prototype, "guessDYSubService", [Yc], {
                enumerable: !0,
                initializer: null
            }),
            Xc = GuessMainPanel_applyDecoratedDescriptor(Vc.prototype, "global", [Wc], {
                enumerable: !0,
                initializer: null
            }),
            Zc = GuessMainPanel_applyDecoratedDescriptor(Vc.prototype, "localStorage", [Fc], {
                enumerable: !0,
                initializer: null
            }),
            Jc = Vc)) || Jc), bm = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessGameData: e.guessGameData,
                guessSliderData: e.guessSliderData,
                guessIconEntryData: e.guessIconEntryData,
                guessIconRoomConfigData: e.guessIconRoomConfigData,
                userRoleData: e.userRoleData,
                guessTicketData: e.guessTicketData,
                guessThemedata: e.guessThemeData,
                rankShow: e.GuessRankData.rankShow,
                guessGameTitleListData: e.guessGameTitleListData
            }
        })(hm), gm = s("16358");

        function guessGameCommonService_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function guessGameCommonService_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function guessGameCommonService_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function guessGameCommonService_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function guessGameCommonService_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var ym, vm, Gm, Nm, Sm, Tm, Dm, Em, wm, Pm, Om = r.a.Store, km = r.a.Service, Rm = (nm = Om(),
            am = km(n.DataCenter.global),
            om = km(n.DataCenter.localStorage),
            lm = km(gm.a),
            um = function (e) {
                function GuessGameCommonService() {
                    var t, s;
                    !function guessGameCommonService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GuessGameCommonService);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return t = s = guessGameCommonService_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                        guessGameCommonService_initDefineProp(s, "store", cm, s),
                        guessGameCommonService_initDefineProp(s, "global", mm, s),
                        guessGameCommonService_initDefineProp(s, "localStorage", pm, s),
                        guessGameCommonService_initDefineProp(s, "commonToolbarService", fm, s),
                        guessGameCommonService_possibleConstructorReturn(s, t)
                }

                return guessGameCommonService_inherits(GuessGameCommonService, e),
                    GuessGameCommonService.prototype.getStore = function getStore(e) {
                        return this.store.getState()[e]
                    }
                    ,
                    GuessGameCommonService.prototype.fullScreenSwitch = function fullScreenSwitch(e) {
                        var t = this.global.get("CUSTOM.roomType") ? 0 : 1
                            , s = this.getStore("guessIconRoomConfigData");
                        if (t && (1 === e ? this.store.dispatch(ne.m.oppositeFullScreenStatus(1)) : 0 === e && this.store.dispatch(ne.m.oppositeFullScreenStatus(0))),
                        s && s.can_send_gift) {
                            var i = JSON.parse(s.can_send_gift);
                            if (!(+i.credit <= +i.stop_gift_credit)) {
                                2 === e && this.store.dispatch(ne.m.oppositeFullScreenStatus(1));
                                var r = this.getStore("guessIconConfigData")
                                    , n = r && (r.isOpen || r.isSimpleOpen);
                                t && n && (1 === e ? gm.a.toolbarActivityShow("anchor_quiz") : 0 === e && gm.a.toolbarActivityHide("anchor_quiz"))
                            }
                        }
                    }
                    ,
                    GuessGameCommonService
            }(c.Service),
            cm = guessGameCommonService_applyDecoratedDescriptor(um.prototype, "store", [nm], {
                enumerable: !0,
                initializer: null
            }),
            mm = guessGameCommonService_applyDecoratedDescriptor(um.prototype, "global", [am], {
                enumerable: !0,
                initializer: null
            }),
            pm = guessGameCommonService_applyDecoratedDescriptor(um.prototype, "localStorage", [om], {
                enumerable: !0,
                initializer: null
            }),
            fm = guessGameCommonService_applyDecoratedDescriptor(um.prototype, "commonToolbarService", [lm], {
                enumerable: !0,
                initializer: null
            }),
            um), Cm = (s("25f35"),
            "/shark/live/src/pages/roomPage/guessGameModule/components/GuessGame/GuessGame.js");

        function GuessGame_initDefineProp(e, t, s, i) {
            s && Object.defineProperty(e, t, {
                enumerable: s.enumerable,
                configurable: s.configurable,
                writable: s.writable,
                value: s.initializer ? s.initializer.call(i) : void 0
            })
        }

        function GuessGame_possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function GuessGame_inherits(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function GuessGame_defaults(e, t) {
                for (var s = Object.getOwnPropertyNames(t), i = 0; i < s.length; i++) {
                    var r = s[i]
                        , n = Object.getOwnPropertyDescriptor(t, r);
                    n && n.configurable && void 0 === e[r] && Object.defineProperty(e, r, n)
                }
                return e
            }(e, t))
        }

        function GuessGame_applyDecoratedDescriptor(e, t, s, i, r) {
            var n = {};
            return Object.keys(i).forEach(function (e) {
                n[e] = i[e]
            }),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
            ("value" in n || n.initializer) && (n.writable = !0),
                n = s.slice().reverse().reduce(function (s, i) {
                    return i(e, t, s) || s
                }, n),
            r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
            void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
        }

        var jm = r.a.Service
            , Mm = (ym = jm(Rm),
            vm = jm(It),
            Gm = jm(n.DataCenter.global),
            Nm = jm(n.DataCenter.acj),
        Object(rs.log)((Tm = function (e) {
            function GuessGame() {
                var t, s;
                !function GuessGame_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, GuessGame);
                for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
                    r[n] = arguments[n];
                return t = s = GuessGame_possibleConstructorReturn(this, e.call.apply(e, [this].concat(r))),
                    GuessGame_initDefineProp(s, "guessGameCommonService", Dm, s),
                    GuessGame_initDefineProp(s, "guessMainPanelService", Em, s),
                    GuessGame_initDefineProp(s, "global", wm, s),
                    GuessGame_initDefineProp(s, "acj", Pm, s),
                    GuessGame_possibleConstructorReturn(s, t)
            }

            return GuessGame_inherits(GuessGame, e),
                GuessGame.prototype.componentDidMount = function componentDidMount() {
                    var e = this;
                    this.guessMainPanelService.initSocket(),
                        this.acj.get(Ve.d.ROOM_BUS_PAGESCR).subscribe(function (t) {
                            (t || {}).flag ? e.guessGameCommonService.fullScreenSwitch(0) : e.guessGameCommonService.fullScreenSwitch(1)
                        }),
                        this.acj.get(Ve.c.JS_PAGE_FULLSCREEN_STATE).subscribe(function () {
                            e.guessGameCommonService.fullScreenSwitch(2)
                        })
                }
                ,
                GuessGame.prototype.isAnchor = function isAnchor() {
                    return +this.global.get("USER_INFO.uid") === +this.global.get("$ROOM.owner_uid")
                }
                ,
                GuessGame.prototype.render = function render() {
                    var e = this.props
                        , t = e.guessIconEntryData
                        , s = e.guessIconConfigData
                        , i = e.guessIconRoomConfigData
                        , r = e.userRoleData
                        , n = t && t.panelStatus
                        , a = s && s.configStatus
                        , o = i && i.roomConfigStatus
                        , l = s && (s.isOpen || s.isSimpleOpen)
                        , u = r && r.hasGetData
                        , c = this.isAnchor()
                        , m = t && t.isFullScreen
                        , p = t && t.roomType && !m ? "is-normalRoom" : "is-diyRoom";
                    return n && a && o && l && (u || c) ? Zr.a.createElement("div", {
                        className: ["guessGameContainer", p].join(" "),
                        __source: {
                            fileName: Cm,
                            lineNumber: 83
                        },
                        __self: this
                    }, Zr.a.createElement(bm, {
                        __source: {
                            fileName: Cm,
                            lineNumber: 84
                        },
                        __self: this
                    })) : null
                }
                ,
                GuessGame
        }(Zr.a.Component),
            Dm = GuessGame_applyDecoratedDescriptor(Tm.prototype, "guessGameCommonService", [ym], {
                enumerable: !0,
                initializer: null
            }),
            Em = GuessGame_applyDecoratedDescriptor(Tm.prototype, "guessMainPanelService", [vm], {
                enumerable: !0,
                initializer: null
            }),
            wm = GuessGame_applyDecoratedDescriptor(Tm.prototype, "global", [Gm], {
                enumerable: !0,
                initializer: null
            }),
            Pm = GuessGame_applyDecoratedDescriptor(Tm.prototype, "acj", [Nm], {
                enumerable: !0,
                initializer: null
            }),
            Sm = Tm)) || Sm)
            , zm = Object(en.connect)(function mapStateToProps(e) {
            return {
                guessIconEntryData: e.guessIconEntryData,
                guessIconConfigData: e.guessIconConfigData,
                userRoleData: e.userRoleData,
                guessIconRoomConfigData: e.guessIconRoomConfigData
            }
        })(Mm)
            , Im = r.a.StoreFactory
            , Lm = new (r.a.createApp({
            name: "GuessGameApp",
            providers: [{
                name: "component",
                useFactory: function useFactory() {
                    return zm
                }
            }, {
                name: "store",
                useFactory: function useFactory() {
                    return Im.getInstance(window.__INITIAL_STATE__, Kr, Nr)
                }
            }]
        }));
        r.a.render(Lm, document.getElementById("js-player-guessgame"))
    },
    "170d6": function (e, t) {
        e.exports = sdkb7773bf1bb64145a3611
    },
    "2059a": function (e, t, s) {
    },
    "25f35": function (e, t, s) {
    },
    "3a412": function (e, t, s) {
    },
    "4576b": function (e, t, s) {
    },
    "4769a": function (e, t, s) {
    },
    "489bc": function (e, t, s) {
    },
    "4fdf8": function (e, t, s) {
    },
    "69fda": function (e, t, s) {
    },
    "6b163": function (e, t, s) {
    },
    "6b49f": function (e, t, s) {
    },
    71167: function (e, t, s) {
    },
    "72c9a": function (e, t, s) {
    },
    "7ebdd": function (e, t, s) {
    },
    "7f598": function (e, t, s) {
    },
    "8b0d7": function (e, t, s) {
    },
    "916f8": function (e, t, s) {
    },
    a197c: function (e, t, s) {
    },
    ae76a: function (e, t, s) {
    },
    cc7e0: function (e, t, s) {
    },
    d0e63: function (e, t) {
        e.exports = vendorfb2fa32ced5174f6f0ec
    },
    dc67e: function (e, t, s) {
    },
    ea0ff: function (e, t, s) {
    },
    eed88: function (e, t, s) {
    },
    f30be: function (e, t, s) {
    },
    f7ea5: function (e, t, s) {
    },
    f976f: function (e, t, s) {
    }
}, [[10, 0, 1]]]);
//# sourceMappingURL=http://fedci.dz11.com:4567/room/online/sourcemaps/guessGame_10ddaa6.js.map
