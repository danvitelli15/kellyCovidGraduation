(this["webpackJsonpkelly-distanced-graduation"] = this["webpackJsonpkelly-distanced-graduation"] || []).push([
  [0],
  {
    25: function (e, n, s) {},
    32: function (e, n, s) {},
    33: function (e, n, s) {
      "use strict";
      s.r(n);
      var t = s(1),
        r = s.n(t),
        i = s(19),
        o = s.n(i),
        a = s(11),
        l = s(37),
        c = s(38),
        u = s(34),
        h = s(39),
        d = s(35),
        b = s(40),
        j = Object(t.createContext)({ score: 0, increaseScore: function () {} }),
        y = (s(25), s(2)),
        w = !1,
        g = function (e) {
          var n = Object(t.useState)(!1),
            s = Object(a.a)(n, 2),
            r = s[0],
            i = s[1],
            o = Object(t.useState)(-1),
            l = Object(a.a)(o, 2),
            c = l[0],
            h = l[1],
            g = Object(t.useState)(0),
            A = Object(a.a)(g, 2),
            f = A[0],
            W = A[1],
            O = Object(t.useState)([]),
            p = Object(a.a)(O, 2),
            m = p[0],
            v = p[1],
            x = Object(t.useRef)(null);
          Object(t.useEffect)(
            function () {
              x.current && x.current.focus(), i(!1), h(-1), (w = !1);
              var n = Math.floor(Math.random() * (e.Question.WrongAnswers.length + 1)),
                s = e.Question.WrongAnswers.map(function (e) {
                  return e;
                });
              s.splice(n, 0, e.Question.Answer), W(n), v(s);
            },
            [e.Question]
          );
          return Object(y.jsx)(u.a, {
            style: { width: "100%" },
            children: Object(y.jsxs)(d.a, {
              children: [
                Object(y.jsx)("p", { children: e.Question.Question }),
                Object(y.jsx)("legend", {
                  className: "col-form-label col-sm-2",
                  ref: x,
                  tabIndex: 0,
                  children: "Options",
                }),
                Object(y.jsx)(j.Consumer, {
                  children: function (n) {
                    var s = n.increaseScore;
                    return Object(y.jsx)(y.Fragment, {
                      children: m.map(function (n, t) {
                        return Object(y.jsx)(
                          b.a,
                          {
                            block: !0,
                            color: !r || (t !== c && t !== f) ? "secondary" : t === f ? "success" : "danger",
                            onClick: function () {
                              t === f && s(),
                                (function (n) {
                                  w ||
                                    ((w = !0),
                                    h(n),
                                    i(!0),
                                    setTimeout(function () {
                                      return e.SubmitAnswer();
                                    }, 1500));
                                })(t);
                            },
                            children: n,
                          },
                          "answer_".concat(t)
                        );
                      }),
                    });
                  },
                }),
              ],
            }),
          });
        },
        A = [
          { Question: "What is Kelly's middle name?", Answer: "Nicolle", WrongAnswers: ["Noelle", "Mary", "Marie"] },
          { Question: "What year was Kelly born?", Answer: "2002", WrongAnswers: ["2003", "2001", "2010"] },
          {
            Question: "What is Kelly allergic to?",
            Answer: "Tree nuts",
            WrongAnswers: ["Peanuts", "Chocolate", "Dairy"],
          },
          {
            Question: "In what month was Kelly born?",
            Answer: "December",
            WrongAnswers: ["November", "August", "January"],
          },
          { Question: "What day of the month was Kelly born?", Answer: "9th", WrongAnswers: ["18th", "28th", "12th"] },
          {
            Question: "What does Kelly want to study in college?",
            Answer: "Elementary Education",
            WrongAnswers: ["Programming", "Robotics", "English"],
          },
          {
            Question: "What is Kelly's favorite TV series?",
            Answer: "Friends",
            WrongAnswers: ["Brooklyn 99", "How I Met Your Mother", "Grey's Anatomy"],
          },
          {
            Question: "What job does Kelly have?",
            Answer: "Babysitting / Nanny",
            WrongAnswers: ["AMC", "Target", "Chipotle"],
          },
          { Question: "What is Kelly's favorite color?", Answer: "Blue", WrongAnswers: ["Green", "Pink", "Purple"] },
          {
            Question: "What is Kelly's favorite candy?",
            Answer: "Reeses",
            WrongAnswers: ["Hershey", "M&Ms", "Snickers"],
          },
          {
            Question: "What is Kelly's favorite fast casual restaurant?",
            Answer: "Chipotle",
            WrongAnswers: ["Noodles & Company", "Cafe Zupas", "Panera"],
          },
          {
            Question: "What pop does Kelly like to drink?",
            Answer: "Dr. Pepper / Dr. Thunder",
            WrongAnswers: ["Mountain Dew / Mountain Lightning", "Sprite / 7 Up / Twist Up", "No caffeine for Kelly!"],
          },
          {
            Question: "What international city would Kelly most like to travel to?",
            Answer: "Paris, France",
            WrongAnswers: ["London, England", "Madrid, Spain", "Galway, Ireland"],
          },
          {
            Question: "What school will Kelly be attending in the fall?",
            Answer: "University of Wisconsin River Falls",
            WrongAnswers: ["University of Saint Thomas", "Saint Scholastica", "University of Wisconsin Eau Claire"],
          },
          {
            Question: "Which extra cirricular activity did Kelly NOT participate in during high school?",
            Answer: "Costumes",
            WrongAnswers: ["Robotics", "Speech", "Drone Racing"],
          },
          {
            Question: "What is Kelly's favorite subject?",
            Answer: "English",
            WrongAnswers: ["Spanish", "Physics", "Math"],
          },
          {
            Question: "What is Kelly's least favorite subject?",
            Answer: "Math",
            WrongAnswers: ["English", "Religion", "History"],
          },
          {
            Question: 'Kelly is not a "strawberry blonde" but a what?',
            Answer: "blueberry blonde",
            WrongAnswers: ["raspberry blonde", "blackberry blonde", "canteloupe blonde"],
          },
          {
            Question: "What is Kelly's favorite nick name for Everest?",
            Answer: "My Bubby",
            WrongAnswers: ["Pupper", "Puppy", "Ev"],
          },
          {
            Question: "What is Kelly's favorite type of popcorn?",
            Answer: "White Cheddar (Aldi's)",
            WrongAnswers: ["Microwave Popcorn", "Puffcorn", "Plain Popcorn"],
          },
          {
            Question: "What is Kelly's favorite dessert?",
            Answer: "Wonder bars",
            WrongAnswers: ["Brownies", "Cookie bars", "Cake pops"],
          },
          {
            Question: "What is Kelly's favorite meal?",
            Answer: "Parmesan Crusted Chicken",
            WrongAnswers: ["Chicken Tenders", "Lasagna", "Stuffed Green Peppers"],
          },
          {
            Question: "What is Kelly's favorite Disney movie?",
            Answer: "Cinderella",
            WrongAnswers: ["The Little Mermaid", "Tangled", "Frozen"],
          },
          {
            Question: "What is Kelly's favorite Disney character?",
            Answer: "Mickey Mouse",
            WrongAnswers: ["Minnie Mouse", "Donald Duck", "Daisy Duck"],
          },
          {
            Question: "Which are Kelly's favorite Disney princesses?",
            Answer: "Cinderella and Jasmine",
            WrongAnswers: ["Cinderella and Ariel", "Jasmine and Ariel", "Cinderella and Elsa"],
          },
          {
            Question: "What instrument does Kelly play?",
            Answer: "Flute",
            WrongAnswers: ["Trombone", "Piano", "Piccolo"],
          },
          { Question: "How many years has Kelly participated in band?", Answer: "8", WrongAnswers: ["7", "6", "9"] },
          {
            Question: "What does Kelly volunteer for on Sundays?",
            Answer: "Sunday School",
            WrongAnswers: ["FMSC", "Partnership Academy", "ARC Value Village"],
          },
        ],
        f = s(36),
        W = function () {
          var e = function (e) {
            return e <= 10
              ? Object(y.jsx)("p", { children: "Maybe you should go ask Kelly a little about herself..." })
              : e <= 20
              ? Object(y.jsx)("p", { children: "You seem to know a fair amount about Kelly." })
              : Object(y.jsx)("p", { children: "You should go tell Kelly how well you know her." });
          };
          return Object(y.jsxs)(f.a, {
            children: [
              Object(y.jsx)(j.Consumer, {
                children: function (n) {
                  var s = n.score;
                  return Object(y.jsxs)(y.Fragment, {
                    children: [
                      Object(y.jsxs)("h2", {
                        children: ["Thanks for trying the trivia. You got ", s, " questions right!"],
                      }),
                      e(s),
                    ],
                  });
                },
              }),
              Object(y.jsx)("p", { children: "Food is availble in the garage." }),
            ],
          });
        },
        O = function (e) {
          var n = Object(t.useState)(!1),
            s = Object(a.a)(n, 2),
            r = s[0],
            i = s[1],
            o = Object(t.useState)(0),
            d = Object(a.a)(o, 2),
            b = d[0],
            w = d[1];
          return Object(y.jsxs)(l.a, {
            children: [
              Object(y.jsx)("h1", { children: "Trivia" }),
              Object(y.jsx)(c.a, {
                children: r
                  ? Object(y.jsx)(W, {})
                  : Object(y.jsxs)(u.a, {
                      style: { width: "100%" },
                      children: [
                        Object(y.jsx)(h.a, {
                          children: Object(y.jsx)(j.Consumer, {
                            children: function (e) {
                              var n = e.score;
                              return Object(y.jsxs)(y.Fragment, { children: ["Score: ", n] });
                            },
                          }),
                        }),
                        Object(y.jsx)(g, {
                          Question: A[b],
                          SubmitAnswer: function () {
                            b + 1 < A.length
                              ? w(function (e) {
                                  return e + 1;
                                })
                              : i(!0);
                          },
                        }),
                      ],
                    }),
              }),
            ],
          });
        },
        p = s(12),
        m = s(4),
        v = s.p + "/kellyCovidGraduation/static/media/kelly.545d4a74.jpg",
        x = function () {
          return Object(y.jsx)(l.a, {
            children: Object(y.jsxs)(f.a, {
              children: [
                Object(y.jsx)("h1", { children: "Welcome to Kelly's graduation party!" }),
                Object(y.jsx)("img", { src: v, alt: "Kelly", height: "75%", width: "75%" }),
                Object(y.jsx)("br", {}),
                Object(y.jsx)(p.b, {
                  className: "btn btn-primary",
                  to: "/trivia",
                  children: "See how well you know Kelly!",
                }),
              ],
            }),
          });
        };
      var K = function () {
          var e = Object(t.useState)(0),
            n = Object(a.a)(e, 2),
            s = n[0],
            r = n[1];
          return Object(y.jsx)(j.Provider, {
            value: {
              score: s,
              increaseScore: function () {
                return r(function (e) {
                  return s + 1;
                });
              },
            },
            children: Object(y.jsx)(p.a, {
              children: Object(y.jsxs)(m.c, {
                children: [
                  Object(y.jsx)(m.a, { path: "/trivia", children: Object(y.jsx)(O, {}) }),
                  Object(y.jsx)(m.a, { path: "/", children: Object(y.jsx)(x, {}) }),
                ],
              }),
            }),
          });
        },
        Q = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 41))
              .then(function (n) {
                var s = n.getCLS,
                  t = n.getFID,
                  r = n.getFCP,
                  i = n.getLCP,
                  o = n.getTTFB;
                s(e), t(e), r(e), i(e), o(e);
              });
        };
      s(32);
      o.a.render(Object(y.jsx)(r.a.StrictMode, { children: Object(y.jsx)(K, {}) }), document.getElementById("root")),
        Q();
    },
  },
  [[33, 1, 2]],
]);
//# sourceMappingURL=main.71127771.chunk.js.map
