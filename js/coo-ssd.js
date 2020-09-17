/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!(function (e, a) {
  "object" == typeof exports && "undefined" != typeof module
    ? a(
        exports,
        require("@tensorflow/tfjs-converter"),
        require("@tensorflow/tfjs-core")
      )
    : "function" == typeof define && define.amd
    ? define([
        "exports",
        "@tensorflow/tfjs-converter",
        "@tensorflow/tfjs-core",
      ], a)
    : a(((e = e || self).cocoSsd = e.cocoSsd || {}), e.tf, e.tf);
})(this, function (e, a, i) {
  "use strict";
  function n(e, a, i, n) {
    return new (i || (i = Promise))(function (m, t) {
      function d(e) {
        try {
          o(n.next(e));
        } catch (e) {
          t(e);
        }
      }
      function s(e) {
        try {
          o(n.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        e.done
          ? m(e.value)
          : new i(function (a) {
              a(e.value);
            }).then(d, s);
      }
      o((n = n.apply(e, a || [])).next());
    });
  }
  function m(e, a) {
    var i,
      n,
      m,
      t,
      d = {
        label: 0,
        sent: function () {
          if (1 & m[0]) throw m[1];
          return m[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (t = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (t[Symbol.iterator] = function () {
          return this;
        }),
      t
    );
    function s(t) {
      return function (s) {
        return (function (t) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; d; )
            try {
              if (
                ((i = 1),
                n &&
                  (m =
                    2 & t[0]
                      ? n.return
                      : t[0]
                      ? n.throw || ((m = n.return) && m.call(n), 0)
                      : n.next) &&
                  !(m = m.call(n, t[1])).done)
              )
                return m;
              switch (((n = 0), m && (t = [2 & t[0], m.value]), t[0])) {
                case 0:
                case 1:
                  m = t;
                  break;
                case 4:
                  return d.label++, { value: t[1], done: !1 };
                case 5:
                  d.label++, (n = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = d.ops.pop()), d.trys.pop();
                  continue;
                default:
                  if (
                    !((m = d.trys),
                    (m = m.length > 0 && m[m.length - 1]) ||
                      (6 !== t[0] && 2 !== t[0]))
                  ) {
                    d = 0;
                    continue;
                  }
                  if (3 === t[0] && (!m || (t[1] > m[0] && t[1] < m[3]))) {
                    d.label = t[1];
                    break;
                  }
                  if (6 === t[0] && d.label < m[1]) {
                    (d.label = m[1]), (m = t);
                    break;
                  }
                  if (m && d.label < m[2]) {
                    (d.label = m[2]), d.ops.push(t);
                    break;
                  }
                  m[2] && d.ops.pop(), d.trys.pop();
                  continue;
              }
              t = a.call(e, d);
            } catch (e) {
              (t = [6, e]), (n = 0);
            } finally {
              i = m = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        })([t, s]);
      };
    }
  }
  var t = {
    1: { name: "/m/01g317", id: 1, displayName: "person" },
    2: { name: "/m/0199g", id: 2, displayName: "bicycle" },
    3: { name: "/m/0k4j", id: 3, displayName: "car" },
    4: { name: "/m/04_sv", id: 4, displayName: "motorcycle" },
    5: { name: "/m/05czz6l", id: 5, displayName: "airplane" },
    6: { name: "/m/01bjv", id: 6, displayName: "bus" },
    7: { name: "/m/07jdr", id: 7, displayName: "train" },
    8: { name: "/m/07r04", id: 8, displayName: "truck" },
    9: { name: "/m/019jd", id: 9, displayName: "boat" },
    10: { name: "/m/015qff", id: 10, displayName: "traffic light" },
    11: { name: "/m/01pns0", id: 11, displayName: "fire hydrant" },
    13: { name: "/m/02pv19", id: 13, displayName: "stop sign" },
    14: { name: "/m/015qbp", id: 14, displayName: "parking meter" },
    15: { name: "/m/0cvnqh", id: 15, displayName: "bench" },
    16: { name: "/m/015p6", id: 16, displayName: "bird" },
    17: { name: "/m/01yrx", id: 17, displayName: "cat" },
    18: { name: "/m/0bt9lr", id: 18, displayName: "dog" },
    19: { name: "/m/03k3r", id: 19, displayName: "horse" },
    20: { name: "/m/07bgp", id: 20, displayName: "sheep" },
    21: { name: "/m/01xq0k1", id: 21, displayName: "cow" },
    22: { name: "/m/0bwd_0j", id: 22, displayName: "elephant" },
    23: { name: "/m/01dws", id: 23, displayName: "bear" },
    24: { name: "/m/0898b", id: 24, displayName: "zebra" },
    25: { name: "/m/03bk1", id: 25, displayName: "giraffe" },
    27: { name: "/m/01940j", id: 27, displayName: "backpack" },
    28: { name: "/m/0hnnb", id: 28, displayName: "umbrella" },
    31: { name: "/m/080hkjn", id: 31, displayName: "handbag" },
    32: { name: "/m/01rkbr", id: 32, displayName: "tie" },
    33: { name: "/m/01s55n", id: 33, displayName: "suitcase" },
    34: { name: "/m/02wmf", id: 34, displayName: "frisbee" },
    35: { name: "/m/071p9", id: 35, displayName: "skis" },
    36: { name: "/m/06__v", id: 36, displayName: "snowboard" },
    37: { name: "/m/018xm", id: 37, displayName: "sports ball" },
    38: { name: "/m/02zt3", id: 38, displayName: "kite" },
    39: { name: "/m/03g8mr", id: 39, displayName: "baseball bat" },
    40: { name: "/m/03grzl", id: 40, displayName: "baseball glove" },
    41: { name: "/m/06_fw", id: 41, displayName: "skateboard" },
    42: { name: "/m/019w40", id: 42, displayName: "surfboard" },
    43: { name: "/m/0dv9c", id: 43, displayName: "tennis racket" },
    44: { name: "/m/04dr76w", id: 44, displayName: "bottle" },
    46: { name: "/m/09tvcd", id: 46, displayName: "wine glass" },
    47: { name: "/m/08gqpm", id: 47, displayName: "cup" },
    48: { name: "/m/0dt3t", id: 48, displayName: "fork" },
    49: { name: "/m/04ctx", id: 49, displayName: "knife" },
    50: { name: "/m/0cmx8", id: 50, displayName: "spoon" },
    51: { name: "/m/04kkgm", id: 51, displayName: "bowl" },
    52: { name: "/m/09qck", id: 52, displayName: "banana" },
    53: { name: "/m/014j1m", id: 53, displayName: "apple" },
    54: { name: "/m/0l515", id: 54, displayName: "sandwich" },
    55: { name: "/m/0cyhj_", id: 55, displayName: "orange" },
    56: { name: "/m/0hkxq", id: 56, displayName: "broccoli" },
    57: { name: "/m/0fj52s", id: 57, displayName: "carrot" },
    58: { name: "/m/01b9xk", id: 58, displayName: "hot dog" },
    59: { name: "/m/0663v", id: 59, displayName: "pizza" },
    60: { name: "/m/0jy4k", id: 60, displayName: "donut" },
    61: { name: "/m/0fszt", id: 61, displayName: "cake" },
    62: { name: "/m/01mzpv", id: 62, displayName: "chair" },
    63: { name: "/m/02crq1", id: 63, displayName: "couch" },
    64: { name: "/m/03fp41", id: 64, displayName: "potted plant" },
    65: { name: "/m/03ssj5", id: 65, displayName: "bed" },
    67: { name: "/m/04bcr3", id: 67, displayName: "dining table" },
    70: { name: "/m/09g1w", id: 70, displayName: "toilet" },
    72: { name: "/m/07c52", id: 72, displayName: "tv" },
    73: { name: "/m/01c648", id: 73, displayName: "laptop" },
    74: { name: "/m/020lf", id: 74, displayName: "mouse" },
    75: { name: "/m/0qjjc", id: 75, displayName: "remote" },
    76: { name: "/m/01m2v", id: 76, displayName: "keyboard" },
    77: { name: "/m/050k8", id: 77, displayName: "cell phone" },
    78: { name: "/m/0fx9l", id: 78, displayName: "microwave" },
    79: { name: "/m/029bxz", id: 79, displayName: "oven" },
    80: { name: "/m/01k6s3", id: 80, displayName: "toaster" },
    81: { name: "/m/0130jx", id: 81, displayName: "sink" },
    82: { name: "/m/040b_t", id: 82, displayName: "refrigerator" },
    84: { name: "/m/0bt_c3", id: 84, displayName: "book" },
    85: { name: "/m/01x3z", id: 85, displayName: "clock" },
    86: { name: "/m/02s195", id: 86, displayName: "vase" },
    87: { name: "/m/01lsmm", id: 87, displayName: "scissors" },
    88: { name: "/m/0kmg4", id: 88, displayName: "teddy bear" },
    89: { name: "/m/03wvsk", id: 89, displayName: "hair drier" },
    90: { name: "/m/012xff", id: 90, displayName: "toothbrush" },
  };
  var d = (function () {
    function e(e, a) {
      this.modelPath =
        a ||
        "https://storage.googleapis.com/tfjs-models/savedmodel/" +
          this.getPrefix(e) +
          "/model.json";
    }
    return (
      (e.prototype.getPrefix = function (e) {
        return "lite_mobilenet_v2" === e ? "ssd" + e : "ssd_" + e;
      }),
      (e.prototype.load = function () {
        return n(this, void 0, void 0, function () {
          var e, n, t;
          return m(this, function (m) {
            switch (m.label) {
              case 0:
                return (e = this), [4, a.loadGraphModel(this.modelPath)];
              case 1:
                return (
                  (e.model = m.sent()),
                  (n = i.zeros([1, 300, 300, 3], "int32")),
                  [4, this.model.executeAsync(n)]
                );
              case 2:
                return (
                  (t = m.sent()),
                  [
                    4,
                    Promise.all(
                      t.map(function (e) {
                        return e.data();
                      })
                    ),
                  ]
                );
              case 3:
                return (
                  m.sent(),
                  t.map(function (e) {
                    return e.dispose();
                  }),
                  n.dispose(),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.infer = function (e, a, t) {
        return n(this, void 0, void 0, function () {
          var n, d, s, o, r, l, p, c, y, u, f, b;
          return m(this, function (m) {
            switch (m.label) {
              case 0:
                return (
                  (n = i.tidy(function () {
                    return (
                      e instanceof i.Tensor || (e = i.browser.fromPixels(e)),
                      e.expandDims(0)
                    );
                  })),
                  (d = n.shape[1]),
                  (s = n.shape[2]),
                  [4, this.model.executeAsync(n)]
                );
              case 1:
                return (
                  (o = m.sent()),
                  (r = o[0].dataSync()),
                  (l = o[1].dataSync()),
                  n.dispose(),
                  i.dispose(o),
                  (p = this.calculateMaxScores(
                    r,
                    o[0].shape[1],
                    o[0].shape[2]
                  )),
                  (c = p[0]),
                  (y = p[1]),
                  (u = i.getBackend()),
                  i.setBackend("cpu"),
                  (f = i.tidy(function () {
                    var e = i.tensor2d(l, [o[1].shape[1], o[1].shape[3]]);
                    return i.image.nonMaxSuppression(e, c, a, t, t);
                  })),
                  (b = f.dataSync()),
                  f.dispose(),
                  i.setBackend(u),
                  [2, this.buildDetectedObjects(s, d, l, c, b, y)]
                );
            }
          });
        });
      }),
      (e.prototype.buildDetectedObjects = function (e, a, i, n, m, d) {
        for (var s = m.length, o = [], r = 0; r < s; r++) {
          for (var l = [], p = 0; p < 4; p++) l[p] = i[4 * m[r] + p];
          var c = l[0] * a,
            y = l[1] * e,
            u = l[2] * a,
            f = l[3] * e;
          (l[0] = y),
            (l[1] = c),
            (l[2] = f - y),
            (l[3] = u - c),
            o.push({
              bbox: l,
              class: t[d[m[r]] + 1].displayName,
              score: n[m[r]],
            });
        }
        return o;
      }),
      (e.prototype.calculateMaxScores = function (e, a, i) {
        for (var n = [], m = [], t = 0; t < a; t++) {
          for (var d = Number.MIN_VALUE, s = -1, o = 0; o < i; o++)
            e[t * i + o] > d && ((d = e[t * i + o]), (s = o));
          (n[t] = d), (m[t] = s);
        }
        return [n, m];
      }),
      (e.prototype.detect = function (e, a, i) {
        return (
          void 0 === a && (a = 20),
          void 0 === i && (i = 0.5),
          n(this, void 0, void 0, function () {
            return m(this, function (n) {
              return [2, this.infer(e, a, i)];
            });
          })
        );
      }),
      (e.prototype.dispose = function () {
        null != this.model && this.model.dispose();
      }),
      e
    );
  })();
  (e.ObjectDetection = d),
    (e.load = function (e) {
      return (
        void 0 === e && (e = {}),
        n(this, void 0, void 0, function () {
          var a, n, t;
          return m(this, function (m) {
            switch (m.label) {
              case 0:
                if (null == i)
                  throw new Error(
                    "Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model."
                  );
                if (
                  ((a = e.base || "lite_mobilenet_v2"),
                  (n = e.modelUrl),
                  -1 ===
                    [
                      "mobilenet_v1",
                      "mobilenet_v2",
                      "lite_mobilenet_v2",
                    ].indexOf(a))
                )
                  throw new Error(
                    "ObjectDetection constructed with invalid base model " +
                      a +
                      ". Valid names are 'mobilenet_v1', 'mobilenet_v2' and 'lite_mobilenet_v2'."
                  );
                return [4, (t = new d(a, n)).load()];
              case 1:
                return m.sent(), [2, t];
            }
          });
        })
      );
    }),
    (e.version = "2.1.0"),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=coco-ssd.min.js.map
