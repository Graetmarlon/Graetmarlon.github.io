( () => {
    var e, t = {
        641: () => {
            document.documentElement.className = "js";
            var e, t = (e = navigator.userAgent || navigator.vendor || window.opera,
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)));
            window.onload = function() {
                var e = document.getElementById("Shader")
                  , o = e.getContext("experimental-webgl", {
                    alpha: !1,
                    depth: !1,
                    antialias: !1,
                    powerPreference: "low-power"
                })
                  , i = o.createBuffer();
                o.bindBuffer(o.ARRAY_BUFFER, i),
                o.bufferData(o.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), o.STATIC_DRAW);
                var a = o.createShader(o.VERTEX_SHADER);
                o.shaderSource(a, "#version 100\nattribute vec2 pos;void main(){gl_Position=vec4(pos,0.,1.);}"),
                o.compileShader(a),
                console.log(o.getShaderInfoLog(a));
                var n = o.createShader(o.FRAGMENT_SHADER);

                const fragmentShaderSource = `
                precision mediump float;

                uniform float time;
                uniform vec2 imageSize;

                void main() {
                    vec2 fragCoord = gl_FragCoord.xy;
                    vec2 q = 10.0 * fragCoord.xy / imageSize.xy;

                    for (int j = 0; j < 5; j++) {
                        float i = 1.0 + float(j) * 0.2; // or some fixed progression
                        vec2 o = q;
                        o.x += (0.5 / i) * cos(i * q.y + time * 0.297 + 0.03 * i);
                        q = o;
                    }

                    vec3 col = vec3(
                        0.5 * sin(3.0 * q.x) + 0.5,
                        0.5 * sin(3.0 * q.y) + 0.5,
                        sin(1.3 * q.x + 1.7 * q.y)
                    );

                    float f = 0.43 * (col.x + col.y + col.z);
                    f += step(0.5, f);

                    gl_FragColor = vec4(0.6 * f, 0.0, 0.2 * f, 1.0);
                }`;

                o.shaderSource(n, fragmentShaderSource);

                o.compileShader(n),
                console.log(o.getShaderInfoLog(n));
                var r, c, s, l = o.createProgram();
                if (o.attachShader(l, a),
                o.attachShader(l, n),
                o.linkProgram(l),
                o.getProgramParameter(l, o.LINK_STATUS)) {
                    var m = function() {
                        var t = window.innerWidth
                          , i = window.innerHeight;
                        e.width = t,
                        e.height = i,
                        o.uniform2f(s, t, i),
                        o.viewport(0, 0, t, i)
                    }
                      , d = 0;
                    o.useProgram(l),
                    r = o.getAttribLocation(l, "pos"),
                    o.enableVertexAttribArray(r),
                    o.vertexAttribPointer(r, 2, o.FLOAT, !1, 0, 0),
                    c = o.getUniformLocation(l, "time"),
                    s = o.getUniformLocation(l, "imageSize"),
                    m(),
                    window.addEventListener("resize", m, !1),
                    function e(i) {
                        d++ % (t ? 4 : 2) == 0 && (o.uniform1f(c, i / 1500),
                        o.drawArrays(o.TRIANGLES, 0, 6)),
                        window.requestAnimationFrame(e)
                    }()
                } else
                    e.style.display = "none";
                document.body.children.item(1).offsetHeight,
                document.documentElement.className = "js loaded"
            }
        }
        ,
        837: () => {}
    }, o = {};
    function i(e) {
        var a = o[e];
        if (void 0 !== a)
            return a.exports;
        var n = o[e] = {
            exports: {}
        };
        return t[e](n, n.exports, i),
        n.exports
    }
    i.m = t,
    e = [],
    i.O = (t, o, a, n) => {
        if (!o) {
            var r = 1 / 0;
            for (m = 0; m < e.length; m++) {
                for (var [o,a,n] = e[m], c = !0, s = 0; s < o.length; s++)
                    (!1 & n || r >= n) && Object.keys(i.O).every((e => i.O[e](o[s]))) ? o.splice(s--, 1) : (c = !1,
                    n < r && (r = n));
                if (c) {
                    e.splice(m--, 1);
                    var l = a();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        n = n || 0;
        for (var m = e.length; m > 0 && e[m - 1][2] > n; m--)
            e[m] = e[m - 1];
        e[m] = [o, a, n]
    }
    ,
    i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    ( () => {
        var e = {
            347: 0,
            363: 0
        };
        i.O.j = t => 0 === e[t];
        var t = (t, o) => {
            var a, n, [r,c,s] = o, l = 0;
            if (r.some((t => 0 !== e[t]))) {a
                for (a in c)
                    i.o(c, a) && (i.m[a] = c[a]);
                if (s)
                    var m = s(i)
            }
            for (t && t(o); l < r.length; l++)
                n = r[l],
                i.o(e, n) && e[n] && e[n][0](),
                e[r[l]] = 0;
            return i.O(m)
        }
          , o = self.webpackChunknotitg_website = self.webpackChunknotitg_website || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }
    )(),
    i.O(void 0, [363], ( () => i(641)));
    var a = i.O(void 0, [363], ( () => i(837)));
    a = i.O(a)
}
)();
