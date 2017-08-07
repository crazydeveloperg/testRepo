//---------- From 01sylvester.js ----------
var Sylvester = {
    version: '0.1.3',
    precision: 1e-6
};

function Vector()
{}
Vector.prototype = {
    e: function(i)
    {
        return (i < 1 || i > this.elements.length) ? null : this.elements[i - 1]
    },
    dimensions: function()
    {
        return this.elements.length
    },
    modulus: function()
    {
        return Math.sqrt(this.dot(this))
    },
    eql: function(a)
    {
        var n = this.elements.length;
        var V = a.elements || a;
        if (n != V.length)
        {
            return false
        }
        do {
            if (Math.abs(this.elements[n - 1] - V[n - 1]) > Sylvester.precision)
            {
                return false
            }
        } while (--n);
        return true
    },
    dup: function()
    {
        return Vector.create(this.elements)
    },
    map: function(a)
    {
        var b = [];
        this.each(function(x, i)
        {
            b.push(a(x, i))
        });
        return Vector.create(b)
    },
    each: function(a)
    {
        var n = this.elements.length,
            k = n,
            i;
        do {
            i = k - n;
            a(this.elements[i], i + 1)
        } while (--n)
    },
    toUnitVector: function()
    {
        var r = this.modulus();
        if (r === 0)
        {
            return this.dup()
        }
        return this.map(function(x)
        {
            return x / r
        })
    },
    angleFrom: function(a)
    {
        var V = a.elements || a;
        var n = this.elements.length,
            k = n,
            i;
        if (n != V.length)
        {
            return null
        }
        var b = 0,
            mod1 = 0,
            mod2 = 0;
        this.each(function(x, i)
        {
            b += x * V[i - 1];
            mod1 += x * x;
            mod2 += V[i - 1] * V[i - 1]
        });
        mod1 = Math.sqrt(mod1);
        mod2 = Math.sqrt(mod2);
        if (mod1 * mod2 === 0)
        {
            return null
        }
        var c = b / (mod1 * mod2);
        if (c < -1)
        {
            c = -1
        }
        if (c > 1)
        {
            c = 1
        }
        return Math.acos(c)
    },
    isParallelTo: function(a)
    {
        var b = this.angleFrom(a);
        return (b === null) ? null : (b <= Sylvester.precision)
    },
    isAntiparallelTo: function(a)
    {
        var b = this.angleFrom(a);
        return (b === null) ? null : (Math.abs(b - Math.PI) <= Sylvester.precision)
    },
    isPerpendicularTo: function(a)
    {
        var b = this.dot(a);
        return (b === null) ? null : (Math.abs(b) <= Sylvester.precision)
    },
    add: function(a)
    {
        var V = a.elements || a;
        if (this.elements.length != V.length)
        {
            return null
        }
        return this.map(function(x, i)
        {
            return x + V[i - 1]
        })
    },
    subtract: function(a)
    {
        var V = a.elements || a;
        if (this.elements.length != V.length)
        {
            return null
        }
        return this.map(function(x, i)
        {
            return x - V[i - 1]
        })
    },
    multiply: function(k)
    {
        return this.map(function(x)
        {
            return x * k
        })
    },
    x: function(k)
    {
        return this.multiply(k)
    },
    dot: function(a)
    {
        var V = a.elements || a;
        var i, product = 0,
            n = this.elements.length;
        if (n != V.length)
        {
            return null
        }
        do {
            product += this.elements[n - 1] * V[n - 1]
        } while (--n);
        return product
    },
    cross: function(a)
    {
        var B = a.elements || a;
        if (this.elements.length != 3 || B.length != 3)
        {
            return null
        }
        var A = this.elements;
        return Vector.create([(A[1] * B[2]) - (A[2] * B[1]), (A[2] * B[0]) - (A[0] * B[2]), (A[0] * B[
            1]) - (A[1] * B[0])])
    },
    max: function()
    {
        var m = 0,
            n = this.elements.length,
            k = n,
            i;
        do {
            i = k - n;
            if (Math.abs(this.elements[i]) > Math.abs(m))
            {
                m = this.elements[i]
            }
        } while (--n);
        return m
    },
    indexOf: function(x)
    {
        var a = null,
            n = this.elements.length,
            k = n,
            i;
        do {
            i = k - n;
            if (a === null && this.elements[i] == x)
            {
                a = i + 1
            }
        } while (--n);
        return a
    },
    toDiagonalMatrix: function()
    {
        return Matrix.Diagonal(this.elements)
    },
    round: function()
    {
        return this.map(function(x)
        {
            return Math.round(x)
        })
    },
    snapTo: function(x)
    {
        return this.map(function(y)
        {
            return (Math.abs(y - x) <= Sylvester.precision) ? x : y
        })
    },
    distanceFrom: function(a)
    {
        if (a.anchor)
        {
            return a.distanceFrom(this)
        }
        var V = a.elements || a;
        if (V.length != this.elements.length)
        {
            return null
        }
        var b = 0,
            part;
        this.each(function(x, i)
        {
            part = x - V[i - 1];
            b += part * part
        });
        return Math.sqrt(b)
    },
    liesOn: function(a)
    {
        return a.contains(this)
    },
    liesIn: function(a)
    {
        return a.contains(this)
    },
    rotate: function(t, a)
    {
        var V, R, x, y, z;
        switch (this.elements.length)
        {
            case 2:
                V = a.elements || a;
                if (V.length != 2)
                {
                    return null
                }
                R = Matrix.Rotation(t).elements;
                x = this.elements[0] - V[0];
                y = this.elements[1] - V[1];
                return Vector.create(
                    [V[0] + R[0]
                        [0] * x + R[0]
                        [1] * y,
                        V[1] + R[1]
                        [0] * x + R[1]
                        [1] * y
                    ]);
                break;
            case 3:
                if (!a.direction)
                {
                    return null
                }
                var C = a.pointClosestTo(this).elements;
                R = Matrix.Rotation(t, a.direction).elements;
                x = this.elements[0] - C[0];
                y = this.elements[1] - C[1];
                z = this.elements[2] - C[2];
                return Vector.create(
                    [C[0] + R[0]
                        [0] * x + R[0]
                        [1] * y + R[0]
                        [2] * z,
                        C[1] + R[1]
                        [0] * x + R[1]
                        [1] * y + R[1]
                        [2] * z,
                        C[2] + R[2]
                        [0] * x + R[2]
                        [1] * y + R[2]
                        [2] * z
                    ]);
                break;
            default:
                return null
        }
    },
    reflectionIn: function(a)
    {
        if (a.anchor)
        {
            var P = this.elements.slice();
            var C = a.pointClosestTo(P).elements;
            return Vector.create(
                [C[0] + (C[0] - P[0]), C[1] + (C[1] - P[1]), C[2] + (C[2] - (P[2] || 0))])
        }
        else
        {
            var Q = a.elements || a;
            if (this.elements.length != Q.length)
            {
                return null
            }
            return this.map(function(x, i)
            {
                return Q[i - 1] + (Q[i - 1] - x)
            })
        }
    },
    to3D: function()
    {
        var V = this.dup();
        switch (V.elements.length)
        {
            case 3:
                break;
            case 2:
                V.elements.push(0);
                break;
            default:
                return null
        }
        return V
    },
    inspect: function()
    {
        return '[' + this.elements.join(', ') + ']'
    },
    setElements: function(a)
    {
        this.elements = (a.elements || a).slice();
        return this
    }
};
Vector.create = function(a)
{
    var V = new Vector();
    return V.setElements(a)
};
Vector.i = Vector.create([1, 0, 0]);
Vector.j = Vector.create([0, 1, 0]);
Vector.k = Vector.create([0, 0, 1]);
Vector.Random = function(n)
{
    var a = [];
    do {
        a.push(Math.random())
    } while (--n);
    return Vector.create(a)
};
Vector.Zero = function(n)
{
    var a = [];
    do {
        a.push(0)
    } while (--n);
    return Vector.create(a)
};

function Matrix()
{}
Matrix.prototype = {
    e: function(i, j)
    {
        if (i < 1 || i > this.elements.length || j < 1 || j > this.elements[0].length)
        {
            return null
        }
        return this.elements[i - 1][j - 1]
    },
    row: function(i)
    {
        if (i > this.elements.length)
        {
            return null
        }
        return Vector.create(this.elements[i - 1])
    },
    col: function(j)
    {
        if (j > this.elements[0].length)
        {
            return null
        }
        var a = [],
            n = this.elements.length,
            k = n,
            i;
        do {
            i = k - n;
            a.push(this.elements[i][j - 1])
        } while (--n);
        return Vector.create(a)
    },
    dimensions: function()
    {
        return {
            rows: this.elements.length,
            cols: this.elements[0].length
        }
    },
    rows: function()
    {
        return this.elements.length
    },
    cols: function()
    {
        return this.elements[0].length
    },
    eql: function(a)
    {
        var M = a.elements || a;
        if (typeof(M[0][0]) == 'undefined')
        {
            M = Matrix.create(M).elements
        }
        if (this.elements.length != M.length || this.elements[0].length != M[0].length)
        {
            return false
        }
        var b = this.elements.length,
            ki = b,
            i, nj, kj = this.elements[0].length,
            j;
        do {
            i = ki - b;
            nj = kj;
            do {
                j = kj - nj;
                if (Math.abs(this.elements[i][
                            j
                        ] - M[i]
                        [j]) > Sylvester.precision)
                {
                    return false
                }
            } while (--nj)
        } while (--b);
        return true
    },
    dup: function()
    {
        return Matrix.create(this.elements)
    },
    map: function(a)
    {
        var b = [],
            ni = this.elements.length,
            ki = ni,
            i, nj, kj = this.elements[0].length,
            j;
        do {
            i = ki - ni;
            nj = kj;
            b[i] = [];
            do {
                j = kj - nj;
                b[i][j] = a(this.elements[i][
                    j
                ], i + 1, j + 1)
            } while (--nj)
        } while (--ni);
        return Matrix.create(b)
    },
    isSameSizeAs: function(a)
    {
        var M = a.elements || a;
        if (typeof(M[0][0]) == 'undefined')
        {
            M = Matrix.create(M).elements
        }
        return (this.elements.length == M.length && this.elements[0].length == M[0].length)
    },
    add: function(a)
    {
        var M = a.elements || a;
        if (typeof(M[0][0]) == 'undefined')
        {
            M = Matrix.create(M).elements
        }
        if (!this.isSameSizeAs(M))
        {
            return null
        }
        return this.map(function(x, i, j)
        {
            return x + M[i - 1]
                [j - 1]
        })
    },
    subtract: function(a)
    {
        var M = a.elements || a;
        if (typeof(M[0][0]) == 'undefined')
        {
            M = Matrix.create(M).elements
        }
        if (!this.isSameSizeAs(M))
        {
            return null
        }
        return this.map(function(x, i, j)
        {
            return x - M[i - 1]
                [j - 1]
        })
    },
    canMultiplyFromLeft: function(a)
    {
        var M = a.elements || a;
        if (typeof(M[0][0]) == 'undefined')
        {
            M = Matrix.create(M).elements
        }
        return (this.elements[0].length == M.length)
    },
    multiply: function(a)
    {
        if (!a.elements)
        {
            return this.map(function(x)
            {
                return x * a
            })
        }
        var b = a.modulus ? true : false;
        var M = a.elements || a;
        if (typeof(M[0][0]) == 'undefined')
        {
            M = Matrix.create(M).elements
        }
        if (!this.canMultiplyFromLeft(M))
        {
            return null
        }
        var d = this.elements.length,
            ki = d,
            i, nj, kj = M[0].length,
            j;
        var e = this.elements[0].length,
            elements = [],
            sum, nc, c;
        do {
            i = ki - d;
            elements[i] = [];
            nj = kj;
            do {
                j = kj - nj;
                sum = 0;
                nc = e;
                do {
                    c = e - nc;
                    sum += this.elements[i][
                            c
                        ] * M[c]
                        [j]
                } while (--nc);
                elements[i][j] = sum
            } while (--nj)
        } while (--d);
        var M = Matrix.create(elements);
        return b ? M.col(1) : M
    },
    x: function(a)
    {
        return this.multiply(a)
    },
    minor: function(a, b, c, d)
    {
        var e = [],
            ni = c,
            i, nj, j;
        var f = this.elements.length,
            cols = this.elements[0].length;
        do {
            i = c - ni;
            e[i] = [];
            nj = d;
            do {
                j = d - nj;
                e[i][j] = this.elements[
                    (a + i - 1) % f][(b + j - 1) % cols]
            } while (--nj)
        } while (--ni);
        return Matrix.create(e)
    },
    transpose: function()
    {
        var a = this.elements.length,
            cols = this.elements[0].length;
        var b = [],
            ni = cols,
            i, nj, j;
        do {
            i = cols - ni;
            b[i] = [];
            nj = a;
            do {
                j = a - nj;
                b[i][j] = this.elements[j][i]
            } while (--nj)
        } while (--ni);
        return Matrix.create(b)
    },
    isSquare: function()
    {
        return (this.elements.length == this.elements[0].length)
    },
    max: function()
    {
        var m = 0,
            ni = this.elements.length,
            ki = ni,
            i, nj, kj = this.elements[0].length,
            j;
        do {
            i = ki - ni;
            nj = kj;
            do {
                j = kj - nj;
                if (Math.abs(this.elements[i][
                        j
                    ]) > Math.abs(m))
                {
                    m = this.elements[i][
                        j
                    ]
                }
            } while (--nj)
        } while (--ni);
        return m
    },
    indexOf: function(x)
    {
        var a = null,
            ni = this.elements.length,
            ki = ni,
            i, nj, kj = this.elements[0].length,
            j;
        do {
            i = ki - ni;
            nj = kj;
            do {
                j = kj - nj;
                if (this.elements[i][j] == x)
                {
                    return {
                        i: i + 1,
                        j: j + 1
                    }
                }
            } while (--nj)
        } while (--ni);
        return null
    },
    diagonal: function()
    {
        if (!this.isSquare)
        {
            return null
        }
        var a = [],
            n = this.elements.length,
            k = n,
            i;
        do {
            i = k - n;
            a.push(this.elements[i][i])
        } while (--n);
        return Vector.create(a)
    },
    toRightTriangular: function()
    {
        var M = this.dup(),
            els;
        var n = this.elements.length,
            k = n,
            i, np, kp = this.elements[0].length,
            p;
        do {
            i = k - n;
            if (M.elements[i][i] == 0)
            {
                for (j = i + 1; j < k; j++)
                {
                    if (M.elements[j][
                            i
                        ] != 0)
                    {
                        els = [];
                        np = kp;
                        do {
                            p = kp - np;
                            els.push(M.elements[i]
                                [
                                    p
                                ] + M.elements[j]
                                [
                                    p
                                ])
                        } while (--np);
                        M.elements[i] = els;
                        break
                    }
                }
            }
            if (M.elements[i][i] != 0)
            {
                for (j = i + 1; j < k; j++)
                {
                    var a = M.elements[j][
                        i
                    ] / M.elements[i][
                        i
                    ];
                    els = [];
                    np = kp;
                    do {
                        p = kp - np;
                        els.push(p <= i ? 0 : M.elements[j]
                            [
                                p
                            ] - M.elements[i]
                            [
                                p
                            ] * a)
                    } while (--np);
                    M.elements[j] = els
                }
            }
        } while (--n);
        return M
    },
    toUpperTriangular: function()
    {
        return this.toRightTriangular()
    },
    determinant: function()
    {
        if (!this.isSquare())
        {
            return null
        }
        var M = this.toRightTriangular();
        var a = M.elements[0][0],
            n = M.elements.length - 1,
            k = n,
            i;
        do {
            i = k - n + 1;
            a = a * M.elements[i][i]
        } while (--n);
        return a
    },
    det: function()
    {
        return this.determinant()
    },
    isSingular: function()
    {
        return (this.isSquare() && this.determinant() === 0)
    },
    trace: function()
    {
        if (!this.isSquare())
        {
            return null
        }
        var a = this.elements[0]
            [0],
            n = this.elements.length - 1,
            k = n,
            i;
        do {
            i = k - n + 1;
            a += this.elements[i][i]
        } while (--n);
        return a
    },
    tr: function()
    {
        return this.trace()
    },
    rank: function()
    {
        var M = this.toRightTriangular(),
            rank = 0;
        var a = this.elements.length,
            ki = a,
            i, nj, kj = this.elements[0].length,
            j;
        do {
            i = ki - a;
            nj = kj;
            do {
                j = kj - nj;
                if (Math.abs(M.elements[i][
                        j
                    ]) > Sylvester.precision)
                {
                    rank++;
                    break
                }
            } while (--nj)
        } while (--a);
        return rank
    },
    rk: function()
    {
        return this.rank()
    },
    augment: function(a)
    {
        var M = a.elements || a;
        if (typeof(M[0][0]) == 'undefined')
        {
            M = Matrix.create(M).elements
        }
        var T = this.dup(),
            cols = T.elements[0].length;
        var b = T.elements.length,
            ki = b,
            i, nj, kj = M[0].length,
            j;
        if (b != M.length)
        {
            return null
        }
        do {
            i = ki - b;
            nj = kj;
            do {
                j = kj - nj;
                T.elements[i][
                    cols + j
                ] = M[i][j]
            } while (--nj)
        } while (--b);
        return T
    },
    inverse: function()
    {
        if (!this.isSquare() || this.isSingular())
        {
            return null
        }
        var a = this.elements.length,
            ki = a,
            i, j;
        var M = this.augment(Matrix.I(a)).toRightTriangular();
        var b, kp = M.elements[0].length,
            p, els, divisor;
        var c = [],
            new_element;
        do {
            i = a - 1;
            els = [];
            b = kp;
            c[i] = [];
            divisor = M.elements[i][i];
            do {
                p = kp - b;
                new_element = M.elements[i]
                    [p] / divisor;
                els.push(new_element);
                if (p >= ki)
                {
                    c[i].push(new_element)
                }
            } while (--b);
            M.elements[i] = els;
            for (j = 0; j < i; j++)
            {
                els = [];
                b = kp;
                do {
                    p = kp - b;
                    els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i])
                } while (--b);
                M.elements[j] = els
            }
        } while (--a);
        return Matrix.create(c)
    },
    inv: function()
    {
        return this.inverse()
    },
    round: function()
    {
        return this.map(function(x)
        {
            return Math.round(x)
        })
    },
    snapTo: function(x)
    {
        return this.map(function(p)
        {
            return (Math.abs(p - x) <= Sylvester.precision) ? x : p
        })
    },
    inspect: function()
    {
        var a = [];
        var n = this.elements.length,
            k = n,
            i;
        do {
            i = k - n;
            a.push(Vector.create(this.elements[i]).inspect())
        } while (--n);
        return a.join('\n')
    },
    setElements: function(a)
    {
        var i, elements = a.elements || a;
        if (typeof(elements[0][
                0
            ]) != 'undefined')
        {
            var b = elements.length,
                ki = b,
                nj, kj, j;
            this.elements = [];
            do {
                i = ki - b;
                nj = elements[i].length;
                kj = nj;
                this.elements[i] = [];
                do {
                    j = kj - nj;
                    this.elements[i][
                        j
                    ] = elements[i][
                        j
                    ]
                } while (--nj)
            } while (--b);
            return this
        }
        var n = elements.length,
            k = n;
        this.elements = [];
        do {
            i = k - n;
            this.elements.push(
                [elements[i]])
        } while (--n);
        return this
    }
};
Matrix.create = function(a)
{
    var M = new Matrix();
    return M.setElements(a)
};
Matrix.I = function(n)
{
    var a = [],
        k = n,
        i, nj, j;
    do {
        i = k - n;
        a[i] = [];
        nj = k;
        do {
            j = k - nj;
            a[i][j] = (i == j) ? 1 : 0
        } while (--nj)
    } while (--n);
    return Matrix.create(a)
};
Matrix.Diagonal = function(a)
{
    var n = a.length,
        k = n,
        i;
    var M = Matrix.I(n);
    do {
        i = k - n;
        M.elements[i][i] = a[i]
    } while (--n);
    return M
};
Matrix.Rotation = function(b, a)
{
    if (!a)
    {
        return Matrix.create([
            [Math.cos(b), -Math.sin(b)],
            [Math.sin(b),
                Math.cos(b)
            ]
        ])
    }
    var d = a.dup();
    if (d.elements.length != 3)
    {
        return null
    }
    var e = d.modulus();
    var x = d.elements[0] / e,
        y = d.elements[1] / e,
        z = d.elements[2] / e;
    var s = Math.sin(b),
        c = Math.cos(b),
        t = 1 - c;
    return Matrix.create([
        [t * x * x + c, t * x * y - s * z,
            t * x * z + s * y
        ],
        [t * x * y + s * z,
            t * y * y + c,
            t * y * z - s * x
        ],
        [t * x * z - s * y,
            t * y * z + s * x, t * z * z + c
        ]
    ])
};
Matrix.RotationX = function(t)
{
    var c = Math.cos(t),
        s = Math.sin(t);
    return Matrix.create([
        [1, 0, 0],
        [0, c, -s],
        [0, s, c]
    ])
};
Matrix.RotationY = function(t)
{
    var c = Math.cos(t),
        s = Math.sin(t);
    return Matrix.create([
        [c, 0, s],
        [0, 1, 0],
        [-s, 0, c]
    ])
};
Matrix.RotationZ = function(t)
{
    var c = Math.cos(t),
        s = Math.sin(t);
    return Matrix.create([
        [c, -s, 0],
        [s, c, 0],
        [0, 0, 1]
    ])
};
Matrix.Random = function(n, m)
{
    return Matrix.Zero(n, m).map(function()
    {
        return Math.random()
    })
};
Matrix.Zero = function(n, m)
{
    var a = [],
        ni = n,
        i, nj, j;
    do {
        i = n - ni;
        a[i] = [];
        nj = m;
        do {
            j = m - nj;
            a[i][j] = 0
        } while (--nj)
    } while (--ni);
    return Matrix.create(a)
};

function Line()
{}
Line.prototype = {
    eql: function(a)
    {
        return (this.isParallelTo(a) && this.contains(a.anchor))
    },
    dup: function()
    {
        return Line.create(this.anchor, this.direction)
    },
    translate: function(a)
    {
        var V = a.elements || a;
        return Line.create([
            this.anchor.elements[0] + V[0], this.anchor.elements[1] + V[1], this.anchor.elements[
                2] + (V[2] || 0)
        ], this.direction)
    },
    isParallelTo: function(a)
    {
        if (a.normal)
        {
            return a.isParallelTo(this)
        }
        var b = this.direction.angleFrom(a.direction);
        return (Math.abs(b) <= Sylvester.precision || Math.abs(b - Math.PI) <= Sylvester.precision)
    },
    distanceFrom: function(a)
    {
        if (a.normal)
        {
            return a.distanceFrom(this)
        }
        if (a.direction)
        {
            if (this.isParallelTo(a))
            {
                return this.distanceFrom(a.anchor)
            }
            var N = this.direction.cross(a.direction).toUnitVector().elements;
            var A = this.anchor.elements,
                B = a.anchor.elements;
            return Math.abs((A[0] - B[0]) * N[0] + (A[1] - B[1]) * N[1] + (A[2] - B[2]) * N[2])
        }
        else
        {
            var P = a.elements || a;
            var A = this.anchor.elements,
                D = this.direction.elements;
            var b = P[0] - A[0],
                PA2 = P[1] - A[1],
                PA3 = (P[2] || 0) - A[2];
            var c = Math.sqrt(b * b + PA2 * PA2 + PA3 * PA3);
            if (c === 0) return 0;
            var d = (b * D[0] + PA2 * D[1] + PA3 * D[2]) / c;
            var e = 1 - d * d;
            return Math.abs(c * Math.sqrt(e < 0 ? 0 : e))
        }
    },
    contains: function(a)
    {
        var b = this.distanceFrom(a);
        return (b !== null && b <= Sylvester.precision)
    },
    liesIn: function(a)
    {
        return a.contains(this)
    },
    intersects: function(a)
    {
        if (a.normal)
        {
            return a.intersects(this)
        }
        return (!this.isParallelTo(a) && this.distanceFrom(a) <= Sylvester.precision)
    },
    intersectionWith: function(a)
    {
        if (a.normal)
        {
            return a.intersectionWith(this)
        }
        if (!this.intersects(a))
        {
            return null
        }
        var P = this.anchor.elements,
            X = this.direction.elements,
            Q = a.anchor.elements,
            Y = a.direction.elements;
        var b = X[0],
            X2 = X[1],
            X3 = X[2],
            Y1 = Y[0],
            Y2 = Y[1],
            Y3 = Y[2];
        var c = P[0] - Q[0],
            PsubQ2 = P[1] - Q[1],
            PsubQ3 = P[2] - Q[2];
        var d = -b * c - X2 * PsubQ2 - X3 * PsubQ3;
        var e = Y1 * c + Y2 * PsubQ2 + Y3 * PsubQ3;
        var f = b * b + X2 * X2 + X3 * X3;
        var g = Y1 * Y1 + Y2 * Y2 + Y3 * Y3;
        var h = b * Y1 + X2 * Y2 + X3 * Y3;
        var k = (d * g / f + h * e) / (g - h * h);
        return Vector.create([P[0] + k * b, P[1] + k * X2, P[2] + k * X3])
    },
    pointClosestTo: function(a)
    {
        if (a.direction)
        {
            if (this.intersects(a))
            {
                return this.intersectionWith(a)
            }
            if (this.isParallelTo(a))
            {
                return null
            }
            var D = this.direction.elements,
                E = a.direction.elements;
            var b = D[0],
                D2 = D[1],
                D3 = D[2],
                E1 = E[0],
                E2 = E[1],
                E3 = E[2];
            var x = (D3 * E1 - b * E3),
                y = (b * E2 - D2 * E1),
                z = (D2 * E3 - D3 * E2);
            var N = Vector.create(
                [x * E3 - y * E2, y * E1 - z * E3, z * E2 - x * E1]);
            var P = Plane.create(a.anchor, N);
            return P.intersectionWith(this)
        }
        else
        {
            var P = a.elements || a;
            if (this.contains(P))
            {
                return Vector.create(P)
            }
            var A = this.anchor.elements,
                D = this.direction.elements;
            var b = D[0],
                D2 = D[1],
                D3 = D[2],
                A1 = A[0],
                A2 = A[1],
                A3 = A[2];
            var x = b * (P[1] - A2) - D2 * (P[0] - A1),
                y = D2 * ((P[2] || 0) - A3) - D3 * (P[1] - A2),
                z = D3 * (P[0] - A1) - b * (
                    (P[2] || 0) - A3);
            var V = Vector.create(
                [D2 * x - D3 * z,
                    D3 * y - b * x,
                    b * z - D2 * y
                ]);
            var k = this.distanceFrom(P) / V.modulus();
            return Vector.create(
                [P[0] + V.elements[0] * k, P[1] + V.elements[1] * k, (P[2] || 0) + V.elements[2] *
                    k
                ])
        }
    },
    rotate: function(t, a)
    {
        if (typeof(a.direction) == 'undefined')
        {
            a = Line.create(a.to3D(), Vector.k)
        }
        var R = Matrix.Rotation(t, a.direction).elements;
        var C = a.pointClosestTo(this.anchor).elements;
        var A = this.anchor.elements,
            D = this.direction.elements;
        var b = C[0],
            C2 = C[1],
            C3 = C[2],
            A1 = A[0],
            A2 = A[1],
            A3 = A[2];
        var x = A1 - b,
            y = A2 - C2,
            z = A3 - C3;
        return Line.create([b + R[0][0] * x + R[0][1] * y + R[0][2] * z,
            C2 + R[1][0] * x + R[1][1] * y + R[1][2] * z, C3 + R[2]
            [0] * x + R[2][1] * y + R[2][2] * z
        ], [R[0][0] * D[0] + R[0][1] * D[1] + R[0]
            [2] * D[2],
            R[1][0] * D[0] + R[1][1] * D[1] + R[1]
            [2] * D[2],
            R[2][0] * D[0] + R[2][1] * D[1] + R[2]
            [2] * D[2]
        ])
    },
    reflectionIn: function(a)
    {
        if (a.normal)
        {
            var A = this.anchor.elements,
                D = this.direction.elements;
            var b = A[0],
                A2 = A[1],
                A3 = A[2],
                D1 = D[0],
                D2 = D[1],
                D3 = D[2];
            var c = this.anchor.reflectionIn(a).elements;
            var d = b + D1,
                AD2 = A2 + D2,
                AD3 = A3 + D3;
            var Q = a.pointClosestTo(
                [d, AD2,
                    AD3
                ]).elements;
            var e = [Q[0] + (Q[0] - d) - c[0], Q[1] + (Q[1] - AD2) - c[1], Q[2] + (Q[2] - AD3) - c[2]];
            return Line.create(c, e)
        }
        else if (a.direction)
        {
            return this.rotate(Math.PI, a)
        }
        else
        {
            var P = a.elements || a;
            return Line.create(this.anchor.reflectionIn(
                [P[0],
                    P[1], (P[2] || 0)
                ]), this.direction)
        }
    },
    setVectors: function(a, b)
    {
        a = Vector.create(a);
        b = Vector.create(b);
        if (a.elements.length == 2)
        {
            a.elements.push(0)
        }
        if (b.elements.length == 2)
        {
            b.elements.push(0)
        }
        if (a.elements.length > 3 || b.elements.length > 3)
        {
            return null
        }
        var c = b.modulus();
        if (c === 0)
        {
            return null
        }
        this.anchor = a;
        this.direction = Vector.create([b.elements[0] / c,
            b.elements[1] / c,
            b.elements[2] / c
        ]);
        return this
    }
};
Line.create = function(a, b)
{
    var L = new Line();
    return L.setVectors(a, b)
};
Line.X = Line.create(Vector.Zero(3), Vector.i);
Line.Y = Line.create(Vector.Zero(3), Vector.j);
Line.Z = Line.create(Vector.Zero(3), Vector.k);

function Plane()
{}
Plane.prototype = {
    eql: function(a)
    {
        return (this.contains(a.anchor) && this.isParallelTo(a))
    },
    dup: function()
    {
        return Plane.create(this.anchor, this.normal)
    },
    translate: function(a)
    {
        var V = a.elements || a;
        return Plane.create([
            this.anchor.elements[0] + V[0], this.anchor.elements[1] + V[1], this.anchor.elements[
                2] + (V[2] || 0)
        ], this.normal)
    },
    isParallelTo: function(a)
    {
        var b;
        if (a.normal)
        {
            b = this.normal.angleFrom(a.normal);
            return (Math.abs(b) <= Sylvester.precision || Math.abs(Math.PI - b) <= Sylvester.precision)
        }
        else if (a.direction)
        {
            return this.normal.isPerpendicularTo(a.direction)
        }
        return null
    },
    isPerpendicularTo: function(a)
    {
        var b = this.normal.angleFrom(a.normal);
        return (Math.abs(Math.PI / 2 - b) <= Sylvester.precision)
    },
    distanceFrom: function(a)
    {
        if (this.intersects(a) || this.contains(a))
        {
            return 0
        }
        if (a.anchor)
        {
            var A = this.anchor.elements,
                B = a.anchor.elements,
                N = this.normal.elements;
            return Math.abs((A[0] - B[0]) * N[0] + (A[1] - B[1]) * N[1] + (A[2] - B[2]) * N[2])
        }
        else
        {
            var P = a.elements || a;
            var A = this.anchor.elements,
                N = this.normal.elements;
            return Math.abs((A[0] - P[0]) * N[0] + (A[1] - P[1]) * N[1] + (A[2] - (P[2] || 0)) * N[2])
        }
    },
    contains: function(a)
    {
        if (a.normal)
        {
            return null
        }
        if (a.direction)
        {
            return (this.contains(a.anchor) && this.contains(a.anchor.add(a.direction)))
        }
        else
        {
            var P = a.elements || a;
            var A = this.anchor.elements,
                N = this.normal.elements;
            var b = Math.abs(N[0] * (A[0] - P[0]) + N[1] * (A[1] - P[1]) + N[2] * (A[2] - (P[2] || 0)));
            return (b <= Sylvester.precision)
        }
    },
    intersects: function(a)
    {
        if (typeof(a.direction) == 'undefined' && typeof(a.normal) == 'undefined')
        {
            return null
        }
        return !this.isParallelTo(a)
    },
    intersectionWith: function(a)
    {
        if (!this.intersects(a))
        {
            return null
        }
        if (a.direction)
        {
            var A = a.anchor.elements,
                D = a.direction.elements,
                P = this.anchor.elements,
                N = this.normal.elements;
            var b = (N[0] * (P[0] - A[0]) + N[1] * (P[1] - A[1]) + N[2] * (P[2] - A[2])) / (N[0] * D[
                0] + N[1] * D[1] + N[2] * D[2]);
            return Vector.create(
                [A[0] + D[0] * b, A[1] + D[1] * b, A[2] + D[2] * b])
        }
        else if (a.normal)
        {
            var c = this.normal.cross(a.normal).toUnitVector();
            var N = this.normal.elements,
                A = this.anchor.elements,
                O = a.normal.elements,
                B = a.anchor.elements;
            var d = Matrix.Zero(2, 2),
                i = 0;
            while (d.isSingular())
            {
                i++;
                d = Matrix.create(
                    [
                        [N[i % 3],
                            N[
                                (i + 1) % 3]
                        ],
                        [O[i % 3],
                            O[
                                (i + 1) % 3]
                        ]
                    ])
            }
            var e = d.inverse().elements;
            var x = N[0] * A[0] + N[1] * A[1] + N[2] * A[2];
            var y = O[0] * B[0] + O[1] * B[1] + O[2] * B[2];
            var f = [e[0][0] * x + e[0][1] * y, e[1][0] * x + e[1][1] * y];
            var g = [];
            for (var j = 1; j <= 3; j++)
            {
                g.push((i == j) ? 0 : f[(j + (5 - i) % 3) % 3])
            }
            return Line.create(g, c)
        }
    },
    pointClosestTo: function(a)
    {
        var P = a.elements || a;
        var A = this.anchor.elements,
            N = this.normal.elements;
        var b = (A[0] - P[0]) * N[0] + (A[1] - P[1]) * N[1] + (A[2] - (P[2] || 0)) * N[2];
        return Vector.create([P[0] + N[0] * b,
            P[1] + N[1] * b, (P[2] || 0) + N[2] * b
        ])
    },
    rotate: function(t, a)
    {
        var R = Matrix.Rotation(t, a.direction).elements;
        var C = a.pointClosestTo(this.anchor).elements;
        var A = this.anchor.elements,
            N = this.normal.elements;
        var b = C[0],
            C2 = C[1],
            C3 = C[2],
            A1 = A[0],
            A2 = A[1],
            A3 = A[2];
        var x = A1 - b,
            y = A2 - C2,
            z = A3 - C3;
        return Plane.create([b + R[0][0] * x + R[0][1] * y + R[0][2] * z,
            C2 + R[1][0] * x + R[1][1] * y + R[1][2] * z, C3 + R[2]
            [0] * x + R[2][1] * y + R[2][2] * z
        ], [R[0][0] * N[0] + R[0][1] * N[1] + R[0]
            [2] * N[2],
            R[1][0] * N[0] + R[1][1] * N[1] + R[1]
            [2] * N[2],
            R[2][0] * N[0] + R[2][1] * N[1] + R[2]
            [2] * N[2]
        ])
    },
    reflectionIn: function(a)
    {
        if (a.normal)
        {
            var A = this.anchor.elements,
                N = this.normal.elements;
            var b = A[0],
                A2 = A[1],
                A3 = A[2],
                N1 = N[0],
                N2 = N[1],
                N3 = N[2];
            var c = this.anchor.reflectionIn(a).elements;
            var d = b + N1,
                AN2 = A2 + N2,
                AN3 = A3 + N3;
            var Q = a.pointClosestTo(
                [d, AN2,
                    AN3
                ]).elements;
            var e = [Q[0] + (Q[0] - d) - c[0], Q[1] + (Q[1] - AN2) - c[1], Q[2] + (Q[2] - AN3) - c[2]];
            return Plane.create(c, e)
        }
        else if (a.direction)
        {
            return this.rotate(Math.PI, a)
        }
        else
        {
            var P = a.elements || a;
            return Plane.create(this.anchor.reflectionIn(
                [P[0],
                    P[1], (P[2] || 0)
                ]), this.normal)
        }
    },
    setVectors: function(a, b, c)
    {
        a = Vector.create(a);
        a = a.to3D();
        if (a === null)
        {
            return null
        }
        b = Vector.create(b);
        b = b.to3D();
        if (b === null)
        {
            return null
        }
        if (typeof(c) == 'undefined')
        {
            c = null
        }
        else
        {
            c = Vector.create(c);
            c = c.to3D();
            if (c === null)
            {
                return null
            }
        }
        var d = a.elements[0],
            A2 = a.elements[1],
            A3 = a.elements[2];
        var e = b.elements[0],
            v12 = b.elements[1],
            v13 = b.elements[2];
        var f, mod;
        if (c !== null)
        {
            var g = c.elements[0],
                v22 = c.elements[1],
                v23 = c.elements[2];
            f = Vector.create([
                (v12 - A2) * (v23 - A3) - (v13 - A3) * (v22 - A2), (v13 - A3) * (g - d) - (e -
                    d) * (v23 - A3), (e - d) * (v22 - A2) - (v12 - A2) * (g - d)
            ]);
            mod = f.modulus();
            if (mod === 0)
            {
                return null
            }
            f = Vector.create([
                f.elements[0] / mod, f.elements[1] / mod, f.elements[2] / mod
            ])
        }
        else
        {
            mod = Math.sqrt(e * e + v12 * v12 + v13 * v13);
            if (mod === 0)
            {
                return null
            }
            f = Vector.create([
                b.elements[0] / mod, b.elements[1] / mod, b.elements[2] / mod
            ])
        }
        this.anchor = a;
        this.normal = f;
        return this
    }
};
Plane.create = function(a, b, c)
{
    var P = new Plane();
    return P.setVectors(a, b, c)
};
Plane.XY = Plane.create(Vector.Zero(3), Vector.k);
Plane.YZ = Plane.create(Vector.Zero(3), Vector.i);
Plane.ZX = Plane.create(Vector.Zero(3), Vector.j);
Plane.YX = Plane.XY;
Plane.ZY = Plane.YZ;
Plane.XZ = Plane.ZX;
var $V = Vector.create;
var $M = Matrix.create;
var $L = Line.create;
var $P = Plane.create;
//---------- 01sylvester.js end ----------
//---------- From 02glUtils.js ----------
Matrix.Translation = function(v)
{
    if (v.elements.length == 2)
    {
        var r = Matrix.I(3);
        r.elements[2][0] = v.elements[0];
        r.elements[2][1] = v.elements[1];
        return r
    }
    if (v.elements.length == 3)
    {
        var r = Matrix.I(4);
        r.elements[0][3] = v.elements[0];
        r.elements[1][3] = v.elements[1];
        r.elements[2][3] = v.elements[2];
        return r
    }
    throw "Invalid length for Translation";
};
Matrix.prototype.flatten = function()
{
    var a = [];
    if (this.elements.length == 0) return [];
    for (var j = 0; j < this.elements[0].length; j++)
        for (var i = 0; i < this.elements.length; i++) a.push(this.elements[i][j]);
    return a
};
Matrix.prototype.ensure4x4 = function()
{
    if (this.elements.length == 4 && this.elements[0].length == 4) return this;
    if (this.elements.length > 4 || this.elements[0].length > 4) return null;
    for (var i = 0; i < this.elements.length; i++)
        for (var j = this.elements[i].length; j < 4; j++)
            if (i == j) this.elements[i].push(1);
            else this.elements[i].push(0);
    for (var i = this.elements.length; i < 4; i++)
        if (i == 0) this.elements.push(
            [1, 0, 0, 0]);
        else if (i == 1) this.elements.push([0, 1, 0, 0]);
    else if (i == 2) this.elements.push(
        [0, 0, 1, 0]);
    else if (i == 3) this.elements.push(
        [0, 0, 0, 1]);
    return this
};
Matrix.prototype.make3x3 = function()
{
    if (this.elements.length != 4 || this.elements[0].length != 4) return null;
    return Matrix.create([
        [this.elements[0][0],
            this.elements[0]
            [1], this.elements[0][2]
        ],
        [this.elements[1][0],
            this.elements[1]
            [1], this.elements[1][2]
        ],
        [this.elements[2][0],
            this.elements[2]
            [1], this.elements[2][2]
        ]
    ])
};
Vector.prototype.flatten = function()
{
    return this.elements
};

function mht(m)
{
    var s = "";
    if (m.length == 16)
        for (var i = 0; i < 4; i++) s += "<span style='font-family: monospace'>[" + m[i * 4 + 0].toFixed(4) +
            "," + m[i * 4 + 1].toFixed(4) + "," + m[i * 4 + 2].toFixed(4) + "," + m[i * 4 + 3].toFixed(4) +
            "]</span><br>";
    else if (m.length == 9)
        for (var i = 0; i < 3; i++) s += "<span style='font-family: monospace'>[" + m[i * 3 + 0].toFixed(4) +
            "," + m[i * 3 + 1].toFixed(4) + "," + m[i * 3 + 2].toFixed(4) + "]</font><br>";
    else return m.toString();
    return s
}

function makeLookAt(a, b, c, d, e, f, g, h, i)
{
    var j = $V([a, b, c]);
    var k = $V([d, e, f]);
    var l = $V([g, h, i]);
    var n;
    var z = j.subtract(k).toUnitVector();
    var x = l.cross(z).toUnitVector();
    var y = z.cross(x).toUnitVector();
    var m = $M([
        [x.e(1), x.e(2), x.e(3),
            0
        ],
        [y.e(1), y.e(2), y.e(3),
            0
        ],
        [z.e(1), z.e(2), z.e(3),
            0
        ],
        [0, 0, 0, 1]
    ]);
    var t = $M([
        [1, 0, 0, -a],
        [0, 1, 0, -b],
        [0, 0, 1, -c],
        [0, 0, 0, 1]
    ]);
    return m.x(t)
}

function makeOrtho(a, b, c, d, e, f)
{
    var g = -(b + a) / (b - a);
    var h = -(d + c) / (d - c);
    var i = -(f + e) / (f - e);
    return $M([
        [2 / (b - a), 0, 0, g],
        [0, 2 / (d - c), 0, h],
        [0, 0, -2 / (f - e), i],
        [0, 0, 0, 1]
    ])
}

function makePerspective(a, b, c, d)
{
    var e = c * Math.tan(a * Math.PI / 360);
    var f = -e;
    var g = f * b;
    var h = e * b;
    return makeFrustum(g, h, f, e, c, d)
}

function makeFrustum(a, b, c, d, e, f)
{
    var X = 2 * e / (b - a);
    var Y = 2 * e / (d - c);
    var A = (b + a) / (b - a);
    var B = (d + c) / (d - c);
    var C = -(f + e) / (f - e);
    var D = -2 * f * e / (f - e);
    return $M([
        [X, 0, A, 0],
        [0, Y, B, 0],
        [0, 0, C, D],
        [0, 0, -1, 0]
    ])
}

function makeOrtho(a, b, c, d, e, f)
{
    var g = -(b + a) / (b - a);
    var h = -(d + c) / (d - c);
    var i = -(f + e) / (f - e);
    return $M([
        [2 / (b - a), 0, 0, g],
        [0, 2 / (d - c), 0, h],
        [0, 0, -2 / (f - e), i],
        [0, 0, 0, 1]
    ])
};
//---------- 02glUtils.js end ----------
//---------- From 03gltexture.js ----------
var GLTexture = function(a, b, w, h, c)
{
    this._powerOf2 = c || true;
    this._width = w || b.naturalWidth;
    this._height = h || b.naturalHeight;
    if (this._width & this._width - 1 != 0) console.log("Warning: texture width is not a power of 2");
    if (this._height & this._height - 1 != 0) console.log("Warning: texture height is not a power of 2");
    this._trueWidth = this._powerOf2 ? get_next_power_of_2(this._width) : this._width;
    this._trueHeight = this._powerOf2 ? get_next_power_of_2(this._height) : this._height;
    this._clipRect = new Rect(0, 0, 1, 1);
    this._src = b && b.src || "";
    this._origin = {
        x: 0,
        y: 0
    };
    this._position = {
        x: 0,
        y: 0
    };
    this._scale = {
        x: 1,
        y: 1
    };
    this._angle = 0;
    this.gl = a;
    this._textureId = this.initTexture(b);
    this._vboId = this.initVBO();
    this._iboId = this.initIBO();
    this._tboId = this.initTBO();
    this._modelViewMatrix = Matrix.I(4)
};
GLTexture.prototype.setOrigin = function(x, y)
{
    if (x == "center") this._origin.x = this._width / 2;
    else if (x == "left") this._origin.x = 0;
    else if (x == "right") this._origin.x = this._width;
    else this._origin.x = x;
    if (y == "center") this._origin.y = this._height / 2;
    else if (y == "top") this._origin.y = 0;
    else if (y == "bottom") this._origin.y = this._height;
    else this._origin.y = y;
    this.updateVBO()
};
GLTexture.prototype.scaleTo = function(a, b, c)
{
    var d = a / this._width;
    var e = b / this._height;
    d /= this._scale.x;
    e /= this._scale.y;
    this.scale(d, e, c)
};
GLTexture.prototype.moveTo = function(x, y)
{
    this.translate(x - this._position.x, y - this._position.y)
};
GLTexture.prototype.rotateTo = function(a, b)
{
    this.rotate(a - this._angle, b)
};
GLTexture.prototype.translate = function(x, y)
{
    this._position.x += x;
    this._position.y += y;
    var a = $M([
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]);
    this._modelViewMatrix = a.multiply(this._modelViewMatrix)
};
GLTexture.prototype.scale = function(x, y, a)
{
    this._scale.x *= x;
    this._scale.y *= y;
    a = a || false;
    var b = {
        x: this._position.x,
        y: this._position.y
    };
    if (!a) this.translate(-this._position.x, -this._position.y);
    var c = Matrix.Diagonal([x, y,
        1, 1
    ]);
    this._modelViewMatrix = c.multiply(this._modelViewMatrix);
    if (!a) this.translate(b.x, b.y)
};
GLTexture.prototype.pscale = function(x, y, a)
{
    var b = this._scale.x;
    var c = this._scale.y;
    var d = x / b;
    var e = y / c;
    this.scale(d, e, a)
};
GLTexture.prototype.rotate = function(a, b)
{
    b = b || false;
    var c = {
        x: this._position.x,
        y: this._position.y
    };
    this._angle += a;
    while (this._angle < 0) this._angle += 360;
    this._angle %= 360;
    a = to_radians(a);
    if (!b) this.translate(-this._position.x, -this._position.y);
    var d = $M([
        [Math.cos(a), -Math.sin(a), 0, 0],
        [Math.sin(a), Math.cos(a), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]);
    this._modelViewMatrix = d.multiply(this._modelViewMatrix);
    if (!b) this.translate(c.x, c.y)
};
GLTexture.prototype.reclipTextureByRect = function(a)
{
    this._clipRect = a;
    var b = [this._width * a.w - this._origin.x, -this._origin.y, 0, -this._origin.x, -this._origin.y, 0,
        this._width * a.w - this._origin.x,
        this._height * a.h - this._origin.y, 0, -this._origin.x, this._height * a.h - this._origin.y,
        0
    ];
    var c = [a.x + a.w, a.y, a.x, a.y, a.x + a.w, a.y + a.h,
        a.x, a.h + a.y
    ];
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._vboId);
    this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, new Float32Array(b));
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._tboId);
    this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, new Float32Array(c))
};
GLTexture.prototype.resetDimensions = function(w, h)
{
    this._width = w;
    this._height = h;
    this.resetVBO()
};
GLTexture.prototype.updateVBO = function()
{
    var a = this._width * this._clipRect.w;
    var b = this._height * this._clipRect.h;
    var c = [a - this._origin.x, -this._origin.y, 0, -this._origin.x, -this._origin.y, 0, a - this._origin
        .x, b - this._origin.y,
        0, -this._origin.x, b - this._origin.y, 0
    ];
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._vboId);
    this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, new Float32Array(c))
};
GLTexture.prototype.resetTransformation = function()
{
    this._modelViewMatrix = Matrix.I(4);
    this._position.x = 0;
    this._position.y = 0;
    this._scale.x = 1;
    this._scale.y = 1;
    this._angle = 0
};
GLTexture.prototype.initTexture = function(a)
{
    var b = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, b);
    if (a == null) this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this._trueWidth, this._trueHeight,
        0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
    else
    {
        var c = document.createElement("canvas");
        c.width = this._trueWidth;
        c.height = this._trueHeight;
        c.getContext("2d").drawImage(a, 0, 0, this._trueWidth, this._trueHeight);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, c)
    }
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    return b
};
GLTexture.prototype.updateTextureContent = function(a, b, c)
{
    this.gl.bindTexture(this.gl.TEXTURE_2D, this._textureId);
    if (a && !b && !c)
    {
        this._src = a.src;
        this._width = a.naturalWidth;
        this._height = a.naturalHeight;
        this._trueWidth = this._powerOf2 ? get_next_power_of_2(this._width) : this._width;
        this._trueHeight = this._powerOf2 ? get_next_power_of_2(this._height) : this._height;
        var d = document.createElement("canvas");
        d.width = this._trueWidth;
        d.height = this._trueHeight;
        d.getContext("2d").drawImage(a, 0, 0, this._trueWidth, this._trueHeight);
        console.log(a);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, d)
    }
    else if (a && a.length && b && c)
    {
        this._width = b;
        this._height = c;
        this._trueWidth = b;
        this._trueHeight = c;
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this._trueWidth, this._trueHeight, 0,
            this.gl.RGBA, this.gl.UNSIGNED_BYTE, a)
    }
    else if (b && c)
    {
        this._width = b;
        this._height = c;
        this._trueWidth = this._powerOf2 ? get_next_power_of_2(this._width) : this._width;
        this._trueHeight = this._powerOf2 ? get_next_power_of_2(this._height) : this._height;
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this._trueWidth, this._trueHeight, 0,
            this.gl.RGBA, this.gl.UNSIGNED_BYTE, a)
    }
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    this.updateVBO();
    this._clipRect = new Rect(0, 0, 1, 1);
    var e = [1, 0, 0, 0, 1, 1, 0, 1];
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._tboId);
    this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, new Float32Array(e))
};
GLTexture.prototype.initVBO = function()
{
    var a = [this._width - this._origin.x, -this._origin.y, 0, -this._origin.x, -this._origin.y,
        0, this._width - this._origin.x, this._height - this._origin.y, 0, -this._origin.x, this._height -
        this._origin.y, 0
    ];
    var b = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(a), this.gl.DYNAMIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, undefined);
    return b
};
GLTexture.prototype.initIBO = function()
{
    var a = [0, 1, 2, 3];
    var b = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, b);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(a), this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, undefined);
    return b
};
GLTexture.prototype.initTBO = function()
{
    var a = [1, 0, 0, 0, 1, 1, 0, 1];
    var b = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(a), this.gl.DYNAMIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, undefined);
    return b
};
GLTexture.prototype.freeFromMemory = function()
{
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    this.gl.deleteTexture(this._textureId);
    this.gl.deleteBuffer(this._vboId);
    this.gl.deleteBuffer(this._iboId);
    this.gl.deleteBuffer(this._tboId)
};
var to_radians = function(a)
{
    return a * Math.PI / 180
};
var to_degrees = function(a)
{
    return a * 180 / Math.PI
};
var get_next_power_of_2 = function(v)
{
    v--;
    v |= v >> 1;
    v |= v >> 2;
    v |= v >> 4;
    v |= v >> 8;
    v |= v >> 16;
    v++;
    return v
};
//---------- 03gltexture.js end ----------
//---------- From 04glslshader.js ----------
var GLSLShader = function(a, b, c, d)
{
    this.gl = a;
    var e = null;
    var f = null;
    if (d == undefined) d = true;
    if (d == true)
    {
        e = this.getShaderFromElement(b);
        f = this.getShaderFromElement(c)
    }
    else
    {
        e = this.getShaderFromString(b, "v");
        f = this.getShaderFromString(c, "f")
    }
    this._programId = this.gl.createProgram();
    this.gl.attachShader(this._programId, e);
    this.gl.attachShader(this._programId, f);
    this.gl.linkProgram(this._programId);
    if (!this.gl.getProgramParameter(this._programId, this.gl.LINK_STATUS)) alert(
        "Linking shader failed : " + this.gl.getProgramInfoLog(this._programId))
};
GLSLShader.prototype.getShaderFromString = function(a, b)
{
    if (b == "f")
    {
        shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        b = "x-shader/x-fragment"
    }
    else if (b == "v") shader = this.gl.createShader(this.gl.VERTEX_SHADER);
    else return null;
    this.gl.shaderSource(shader, a);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
    {
        alert("An error occurred compiling the " + (b == "x-shader/x-fragment" ? "fragment" : "vertex") +
            " shader: " + this.gl.getShaderInfoLog(shader));
        return null
    }
    return shader
};
GLSLShader.prototype.freeFromMemory = function()
{
    this.gl.deleteProgram(this._programId)
};
GLSLShader.prototype.getShaderFromElement = function(a)
{
    var b, theSource, currentChild,
        shader;
    b = document.getElementById(a);
    if (!b) return null;
    theSource = "";
    currentChild = b.firstChild;
    while (currentChild)
        if (currentChild.nodeType == currentChild.TEXT_NODE)
        {
            theSource += currentChild.textContent;
            break
        }
    var c = b.type;
    if (c == "x-shader/x-fragment") shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    else if (c == "x-shader/x-vertex") shader = this.gl.createShader(this.gl.VERTEX_SHADER);
    else return null;
    currentChild = currentChild.nextSibling;
    this.gl.shaderSource(shader, theSource);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
    {
        alert("An error occurred compiling the " + (c == "x-shader/x-fragment" ? "fragment" : "vertex") +
            " shader: " + this.gl.getShaderInfoLog(shader));
        return null
    }
    return shader
};
GLSLShader.prototype.sendUniformMatrix = function(a, b)
{
    var c = this.gl.getUniformLocation(this._programId, a);
    if (c == -1) alert("Uniform '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.uniformMatrix4fv(c, false, new Float32Array(b.flatten()))
};
GLSLShader.prototype.sendUniformSampler = function(a, b)
{
    var c = this.gl.getUniformLocation(this._programId, a);
    if (c == -1) alert("Uniform '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.uniform1i(c, b)
};
GLSLShader.prototype.sendUniformFloat = function(a, b)
{
    var c = this.gl.getUniformLocation(this._programId, a);
    if (c == -1) alert("Uniform '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.uniform1f(c, b)
};
GLSLShader.prototype.sendUniformInt = function(a, b)
{
    var c = this.gl.getUniformLocation(this._programId, a);
    if (c == -1) alert("Uniform '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.uniform1i(c, b)
};
GLSLShader.prototype.sendUniformVec2 = function(a, b)
{
    var c = this.gl.getUniformLocation(this._programId, a);
    if (c == -1) alert("Uniform '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.uniform2fv(c, new Float32Array(b))
};
GLSLShader.prototype.sendUniformVec3 = function(a, b)
{
    var c = this.gl.getUniformLocation(this._programId, a);
    if (c == -1) alert("Uniform '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.uniform3fv(c, new Float32Array(b))
};
GLSLShader.prototype.sendUniformVec4 = function(a, b)
{
    var c = this.gl.getUniformLocation(this._programId, a);
    if (c == -1) alert("Uniform '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.uniform4fv(c, new Float32Array(b))
};
GLSLShader.prototype.sendAttribVec2 = function(a, b)
{
    var c = this.gl.getAttribLocation(this._programId, a);
    if (c == -1) alert("Attribute '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.vertexAttribPointer(c, 2, this.gl.FLOAT, false, 0, 0)
};
GLSLShader.prototype.sendAttribVec3 = function(a, b)
{
    var c = this.gl.getAttribLocation(this._programId, a);
    if (c == -1) alert("Attribute '" + a +
        "' doesn't exist or isn't used. Are you sure you spelled the //name properly?");
    this.gl.vertexAttribPointer(c, 3, this.gl.FLOAT, false, 0, 0)
};
GLSLShader.prototype.enableAttribPtr = function()
{
    for (var i = 0; i < arguments.length; i++)
    {
        var a = this.gl.getAttribLocation(this._programId, arguments[i]);
        if (a == -1) alert("Attribute '" + arguments[i] +
            "' doesn't exist or isn't used. Are you sure you //spelled the name properly?");
        this.gl.enableVertexAttribArray(a)
    }
};
GLSLShader.prototype.disableAttribPtr = function()
{
    for (var i = 0; i < arguments.length; i++)
    {
        var a = this.gl.getAttribLocation(this._programId, arguments[i]);
        if (a == -1) alert("Attribute '" + arguments[i] +
            "' doesn't exist or isn't used. Are you sure you //spelled the name properly?");
        this.gl.disableVertexAttribArray(a)
    }
};
GLSLShader.prototype.use = function()
{
    this.gl.useProgram(this._programId)
};
GLSLShader.prototype.unuse = function()
{
    this.gl.useProgram(null)
};
//---------- 04glslshader.js end ----------
//---------- From 05glframebufferobject.js ----------
var GLFramebufferObject = function(a, b, c, d)
{
    this.gl = a;
    this._requireDepth = d || false;
    this._fboId = this.gl.createFramebuffer();
    if (this._requireDepth)
    {
        this._width = b;
        this._height = c;
        this._renderBufferId = this.createRenderBuffer()
    }
    this._targetTexture = null
};
GLFramebufferObject.prototype.resize = function(w, h)
{
    this._width = w;
    this._height = h;
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._renderBufferId);
    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._width, this._height)
};
GLFramebufferObject.prototype.setTextureAsRenderTarget = function(a)
{
    this._targetTexture = a;
    if (a != null)
    {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._fboId);
        if (this._requireDepth) this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._renderBufferId);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D,
            a._textureId, 0);
        if (this._requireDepth) this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT,
            this.gl.RENDERBUFFER, this._renderBufferId);
        this.setViewport(a._clipRect)
    }
};
GLFramebufferObject.prototype.createRenderBuffer = function()
{
    var a = this.gl.createRenderbuffer();
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, a);
    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._width, this._height);
    return a
};
GLFramebufferObject.prototype.setViewport = function(a)
{
    this.gl.viewport(a.x * this._width, a.y * this._height, a.w * this._width, a.h * this._height)
};
GLFramebufferObject.prototype.getTargetTexture = function()
{
    return this._targetTexture
};
GLFramebufferObject.prototype.freeFromMemory = function()
{
    if (this._requireDepth) this.gl.deleteRenderbuffer(this._renderBufferId);
    this.gl.deleteFramebuffer(this._fboId)
};
//---------- 05glframebufferobject.js end ----------
//---------- From 06webgl2Dapp.js ----------
var WebGL2DApp = function(a, b, c)
{
    this._canvasWidth = b;
    this._canvasHeight = c;
    this._frameBufferObject = null;
    this._renderTarget = null;
    this._projectionMatrix = makeOrtho(0, b, c, 0, 1, -1);
    this.setupWebGL(a)
};
WebGL2DApp.prototype.setupWebGL = function(a)
{
    this._canvas = document.getElementById(a);
    try
    {
        this.gl = this._canvas.getContext("experimental-webgl",
        {
            premultipliedAlpha: false,
            preserveDrawingBuffer: true
        });
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.enable(this.gl.BLEND);
        this.gl.alphaFunc(this.gl.LEQUAL, .1)
    }
    catch (e)
    {}
    if (this.gl)
    {
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.disable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    }
    else alert("webGL isn't supported :/")
};
WebGL2DApp.prototype.getContext = function()
{
    return this.gl
};
WebGL2DApp.prototype.clearDisplay = function()
{
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
};
WebGL2DApp.prototype.makeFrameBufferObject = function(a, b, c)
{
    a = a || this._canvasWidth;
    b = b || this._canvasHeight;
    c = c || true;
    this._frameBufferObject = new GLFramebufferObject(this.gl, a, b, c);
    return this._frameBufferObject
};
WebGL2DApp.prototype.renderTextures = function(a)
{
    var b = arguments[1];
    var c;
    if (this._renderTarget != null)
    {
        c = this._projectionMatrix.dup();
        var d = $M([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]).multiply(Matrix.Diagonal(
            [1, -1, 1, 1]));
        this._projectionMatrix = d.multiply(this._projectionMatrix)
    }
    a.sendUniformFloat("uSamplerWidth", b._width);
    a.sendUniformFloat("uSamplerHeight", b._height);
    a.sendUniformMatrix("uProjectionMatrix", this._projectionMatrix);
    a.sendUniformMatrix("uModelViewMatrix", b._modelViewMatrix);
    for (var i = 0; i < arguments.length - 1; i++)
    {
        this.gl.activeTexture(this.gl.TEXTURE0 + i);
        this.gl.bindTexture(this.gl.TEXTURE_2D, arguments[i + 1]._textureId);
        a.sendUniformSampler("uSampler" + String(i), i)
    }
    a.enableAttribPtr("VertexPosition", "TexcoordPosition");
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b._vboId);
    a.sendAttribVec3("VertexPosition");
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b._tboId);
    a.sendAttribVec2("TexcoordPosition");
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, b._iboId);
    this.gl.drawElements(this.gl.TRIANGLE_STRIP, 4, this.gl.UNSIGNED_SHORT, 0);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    a.disableAttribPtr("VertexPosition", "TexcoordPosition");
    for (var i = 0; i < arguments.length - 1; i++)
    {
        this.gl.activeTexture(this.gl.TEXTURE0 + i);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        a.sendUniformSampler(i)
    }
    if (this._renderTarget != null) this._projectionMatrix = c.dup()
};
WebGL2DApp.prototype.renderTexturesToFrameBufferObject = function(a)
{
    var b = this._projectionMatrix.dup();
    var c = $M([
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]).multiply(Matrix.Diagonal(
        [1, -1, 1, 1]));
    this._projectionMatrix = c.multiply(this._projectionMatrix);
    this.renderTextures.apply(this, Array.prototype.slice.call(arguments));
    this._projectionMatrix = b.dup()
};
WebGL2DApp.prototype.setCanvasAsRenderTarget = function()
{
    this.setTextureAsRenderTargetForFbo(null)
};
WebGL2DApp.prototype.setTextureAsRenderTargetForFbo = function(a)
{
    this._renderTarget = a;
    this._frameBufferObject.setTextureAsRenderTarget(a);
    if (a == null)
    {
        this._renderTarget = null;
        this.gl.viewport(0, 0, this._canvas.width, this._canvas.height);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null)
    }
};
WebGL2DApp.prototype.setCanvasSize = function(a, b)
{
    this._canvasWidth = a;
    this._canvasHeight = b;
    this._canvas.width = a;
    this._canvas.height = b;
    this.gl.viewport(0, 0, this._canvas.width, this._canvas.height);
    this.setFrameBufferObjectSize(a, b);
    this._projectionMatrix = makeOrtho(0, a, b, 0, 1, -1)
};
WebGL2DApp.prototype.setFrameBufferObjectSize = function(a, b)
{
    if (this._frameBufferObject) this._frameBufferObject.resize(a, b)
};
WebGL2DApp.prototype.getTargetTexture = function()
{
    return this._frameBufferObject.getTargetTexture()
};
WebGL2DApp.prototype.setViewport = function(a)
{
    this.gl.viewport(a.x * this._canvas.width, (1 - a.y - a.h) * this._canvas.height, a.w * this._canvas.width,
        a.h * this._canvas.height)
};
WebGL2DApp.prototype.freeFromMemory = function()
{
    var a = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
    for (var b = 0; b < a; ++b)
    {
        this.gl.activeTexture(this.gl.TEXTURE0 + b);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null)
    }
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this._frameBufferObject.freeFromMemory()
};
var Rect = function(x, y, w, h)
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h
};
var HodgeRect = function(x, y, w, h)
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h
};
//---------- 06webgl2Dapp.js end ----------
//---------- From 07shaderstrings.js ----------
SHADER_STRINGS = {};
SHADER_STRINGS["basic-shader-vs"] =
    "\n\n\tattribute vec3 VertexPosition;\n\tattribute vec2 TexcoordPosition;\n\n\tvarying vec2 vTexcoordPosition;\n\tvarying vec4 vPosition;\n\n\tuniform mat4 uModelViewMatrix;\n\tuniform mat4 uProjectionMatrix;\n\n\tvoid main(void) {\n\t\tvPosition = uModelViewMatrix * vec4(VertexPosition, 1.0);\n\t\tgl_Position = uProjectionMatrix * vPosition;\n\t\tvTexcoordPosition = TexcoordPosition;\n\t}\n";
SHADER_STRINGS["horizontal-blur-shader-vs"] =
    "\n\tattribute vec3 VertexPosition;\n\tattribute vec2 TexcoordPosition;\n\n\tvarying vec2 vTexcoordPosition;\n\tvarying vec4 vPosition;\n\n\tuniform mat4 uModelViewMatrix;\n\tuniform mat4 uProjectionMatrix;\n\n\tvarying vec2 vBlurTexcoords[14];\n\n\tuniform float uStrength;\n\n\tvoid main()\n\t{\n\t\tvPosition = uModelViewMatrix * vec4(VertexPosition, 1.0);\n\t\tgl_Position = uProjectionMatrix * vPosition;\n\n\t\tvTexcoordPosition = TexcoordPosition;\n\t\tvBlurTexcoords[ 0] = vTexcoordPosition + vec2(-0.028, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 1] = vTexcoordPosition + vec2(-0.024, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 2] = vTexcoordPosition + vec2(-0.020, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 3] = vTexcoordPosition + vec2(-0.016, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 4] = vTexcoordPosition + vec2(-0.012, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 5] = vTexcoordPosition + vec2(-0.008, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 6] = vTexcoordPosition + vec2(-0.004, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 7] = vTexcoordPosition + vec2( 0.004, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 8] = vTexcoordPosition + vec2( 0.008, 0.0)*uStrength;\n\t\tvBlurTexcoords[ 9] = vTexcoordPosition + vec2( 0.012, 0.0)*uStrength;\n\t\tvBlurTexcoords[10] = vTexcoordPosition + vec2( 0.016, 0.0)*uStrength;\n\t\tvBlurTexcoords[11] = vTexcoordPosition + vec2( 0.020, 0.0)*uStrength;\n\t\tvBlurTexcoords[12] = vTexcoordPosition + vec2( 0.024, 0.0)*uStrength;\n\t\tvBlurTexcoords[13] = vTexcoordPosition + vec2( 0.028, 0.0)*uStrength;\n\t}\n";
SHADER_STRINGS["vertical-blur-shader-vs"] =
    "\n\tattribute vec3 VertexPosition;\n\tattribute vec2 TexcoordPosition;\n\n\tvarying vec2 vTexcoordPosition;\n\tvarying vec4 vPosition;\n\n\tuniform mat4 uModelViewMatrix;\n\tuniform mat4 uProjectionMatrix;\n\n\tvarying vec2 vBlurTexcoords[14];\n\n\tuniform float uStrength;\n\n\tvoid main()\n\t{\n\t\tvPosition = uModelViewMatrix * vec4(VertexPosition, 1.0);\n\t\tgl_Position = uProjectionMatrix * vPosition;\n\n\t\tvTexcoordPosition = TexcoordPosition;\n\t\tvBlurTexcoords[ 0] = vTexcoordPosition + vec2(0.0, -0.028)*uStrength;\n\t\tvBlurTexcoords[ 1] = vTexcoordPosition + vec2(0.0, -0.024)*uStrength;\n\t\tvBlurTexcoords[ 2] = vTexcoordPosition + vec2(0.0, -0.020)*uStrength;\n\t\tvBlurTexcoords[ 3] = vTexcoordPosition + vec2(0.0, -0.016)*uStrength;\n\t\tvBlurTexcoords[ 4] = vTexcoordPosition + vec2(0.0, -0.012)*uStrength;\n\t\tvBlurTexcoords[ 5] = vTexcoordPosition + vec2(0.0, -0.008)*uStrength;\n\t\tvBlurTexcoords[ 6] = vTexcoordPosition + vec2(0.0, -0.004)*uStrength;\n\t\tvBlurTexcoords[ 7] = vTexcoordPosition + vec2(0.0,  0.004)*uStrength;\n\t\tvBlurTexcoords[ 8] = vTexcoordPosition + vec2(0.0,  0.008)*uStrength;\n\t\tvBlurTexcoords[ 9] = vTexcoordPosition + vec2(0.0,  0.012)*uStrength;\n\t\tvBlurTexcoords[10] = vTexcoordPosition + vec2(0.0,  0.016)*uStrength;\n\t\tvBlurTexcoords[11] = vTexcoordPosition + vec2(0.0,  0.020)*uStrength;\n\t\tvBlurTexcoords[12] = vTexcoordPosition + vec2(0.0,  0.024)*uStrength;\n\t\tvBlurTexcoords[13] = vTexcoordPosition + vec2(0.0,  0.028)*uStrength;\n\t}\n";
SHADER_STRINGS["blur-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\tvarying vec2 vBlurTexcoords[14];\n\n\tvoid main()\n\t{\n\t\tgl_FragColor = vec4(0.0);\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 0])*0.0044299121055113265;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 1])*0.00895781211794;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 2])*0.0215963866053;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 3])*0.0443683338718;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 4])*0.0776744219933;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 5])*0.115876621105;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 6])*0.147308056121;\n\t\tgl_FragColor += texture2D(uSampler0, vTexcoordPosition         )*0.159576912161;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 7])*0.147308056121;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 8])*0.115876621105;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[ 9])*0.0776744219933;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[10])*0.0443683338718;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[11])*0.0215963866053;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[12])*0.00895781211794;\n\t\tgl_FragColor += texture2D(uSampler0, vBlurTexcoords[13])*0.0044299121055113265;\n\t}\n";
SHADER_STRINGS["simple-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\t\tgl_FragColor = texture2D(uSampler0, vTexcoordPosition);\n\t}\n";
SHADER_STRINGS["simple-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\t\tgl_FragColor = texture2D(uSampler0, vTexcoordPosition);\n\t}\n";
SHADER_STRINGS["simple-grey-alpha-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\t    vec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t    float avg = (col.r + col.g+col.b)/3.0;\n\t    gl_FragColor = vec4(avg, avg, avg, avg);\n\t}\n\n";
SHADER_STRINGS["alpha-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uAlpha;\n\n\tvarying vec2 vTexcoordPosition;\n\tvoid main(void) {\n\t    vec3 col = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t    gl_FragColor = vec4(col, uAlpha);\n\t}\n";
SHADER_STRINGS["basic-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tuniform float uBrightness;\n\tuniform float uContrast;\n\tuniform float uSaturation;\n\tuniform vec3 uRGB;\n\tuniform float uHueShift;\n\tuniform float uGamma;\n\tuniform float uExposure;\n\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\tfloat d = q.x - min(q.w, q.y);\n\t\tfloat e = 1.0e-10;\n\t\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\t\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\t\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n/*\n precision mediump float;\n varying vec2 v_texCoord;\n uniform sampler2D u_image;\n uniform float u_brightness;\n uniform float u_saturation;\n uniform float u_contrast;\n uniform float u_exposure;\n uniform float u_shadows;\n uniform float u_highlights;\n\n const vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\n void main() {\n\t vec4 texColor = texture2D(u_image, v_texCoord);\n\t vec4 color = texColor;\n\t float luminance = dot(color.rgb, luminanceWeighting);\n\n\t // apply shadows and highlights\n\t float shadow = clamp((pow(luminance, 1.0/(u_shadows+1.0)) + (-0.76)*pow(luminance, 2.0/(u_shadows+1.0))) - luminance, 0.0, 1.0);\n\t float highlight = clamp((1.0 - (pow(1.0-luminance, 1.0/(2.0-u_highlights)) + (-0.8)*pow(1.0-luminance, 2.0/(2.0-u_highlights)))) - luminance, -1.0, 0.0);\n\t color.rgb = (luminance + shadow + highlight) * (color.rgb / luminance );\n\n\t // Apply exposure\n\t color.rgb = color.rgb * pow(2.0, u_exposure);\n\n\t // Apply brightness\n\t color.rgb = (color.rgb + u_brightness);\n\n\t // Apply saturation\n\t vec3 greyScaleColor = vec3(luminance);\n\t color.rgb = mix(greyScaleColor, color.rgb, u_saturation);\n\n\t // Apply contrast\n\t color.rgb = (color.rgb - 0.5) * u_contrast + 0.5;\n\n\t // Apply alpha\n\t color = vec4(color.rgb * texColor.a, texColor.a);\n\t gl_FragColor = color;\n}\n\t*/\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\t//col.rgb = pow(col.rgb, vec3(1.0/uExposure));\n\t\tcol.rgb = col.rgb * pow(2.0, uExposure);\n\t\tcol.rgb = pow(col.rgb, vec3(uGamma));\n\t\tcol.rgb *= uContrast;\n\t\tcol.rgb += vec3(uBrightness, uBrightness, uBrightness);\n\t\tvec3 hsv = rgb2hsv(col.rgb);\n\t\thsv.x += uHueShift;\n\t\t//hsv.y += uSaturation;\n\t\t//hsv.y = clamp(hsv.y, 0.0, 1.0);\n\t\tif (hsv.x > 1.0)\n\t\t\thsv.x -= 1.0;\n\t\tcol.rgb = hsv2rgb(hsv);\n\t\tfloat average = (col.r + col.g + col.b) / 3.0;\n\t\tif (uSaturation > 0.0) {\n\t\t\tcol.rgb += (average - col.rgb) * (1.0 - 1.0 / (1.001 - uSaturation));\n\t\t} else {\n\t\t\tcol.rgb += (average - col.rgb) * (-uSaturation);\n\t\t}\n\t\tcol.rgb *= uRGB;\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["sepia-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tuniform float uAmount;\n\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\n\t\tfloat r = col.r;\n\t\tfloat g = col.g;\n\t\tfloat b = col.b;\n\n\t\tcol.r = min(1.0, (r * (1.0 - (0.607 * uAmount))) + (g * (0.769 * uAmount)) + (b * (0.189 * uAmount)));\n\t\tcol.g = min(1.0, (r * 0.349 * uAmount) + (g * (1.0 - (0.314 * uAmount))) + (b * 0.168 * uAmount));\n\t\tcol.b = min(1.0, (r * 0.272 * uAmount) + (g * 0.534 * uAmount) + (b * (1.0 - (0.869 * uAmount))));\n\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["erase-brush-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform vec2 uPosition;\n\tuniform float uBrushRadius;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main() {\n\t\tfloat a = uBrushRadius / uSamplerWidth;\n\t\tfloat b = uBrushRadius / uSamplerHeight;\n\t\tvec2 xy = (vTexcoordPosition - uPosition/vec2(uSamplerWidth, uSamplerHeight));\n\t\tfloat x = xy.x;\n\t\tfloat y = xy.y;\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tif (col == vec4(0.0, 0.0, 0.0, 1.0))\n\t\t\tdiscard;\n\t\tif (sqrt( (x*x)/(a*a) + (y*y)/(b*b) ) <= 1.0)\n\t\t\tcol = vec4(0.0, 0.0, 0.0, 0.0);\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["brush-overlay-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0; //image\n\tuniform sampler2D uSampler1; //mask\n\n        uniform float uOpacity;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main() {\n\t    vec4 colimg = texture2D(uSampler0, vTexcoordPosition);\n\t    vec4 colmask = texture2D(uSampler1, vTexcoordPosition);\n\t    // colmask white => hides => black reveals\n\t    //gl_FragColor = vec4(colmask);\n\t    gl_FragColor = vec4(colimg.rgb, (1.0-colmask.a)*colimg.a*uOpacity);\n\t    //gl_FragColor = vec4(1, 0, 0, 0.5);\n\t}\n";
SHADER_STRINGS["middle-circle-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uCircleRadius;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main() {\n\t\tfloat a = uCircleRadius / uSamplerWidth;\n\t\tfloat b = uCircleRadius / uSamplerHeight;\n\t\tvec2 xy = (vTexcoordPosition - vec2(0.5, 0.5));\n\t\tfloat x = xy.x;\n\t\tfloat y = xy.y;\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tfloat d = sqrt( (x*x)/(a*a) + (y*y)/(b*b) );\n\t\tif (d <= 1.0 && d >= 0.9)\n\t\t\tcol = vec4(1.0*d, 0.34*d, 0.133*d, 1.0);\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["hexagonal-pixelate-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform vec2 uCenter;\n\tuniform float uScale;\n\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tvarying vec2 vTexcoordPosition;\n\tvoid main() {\n\t\tvec2 tex = (vTexcoordPosition * vec2(uSamplerWidth, uSamplerHeight) - uCenter) / uScale;\n\t\ttex.y /= 0.866025404;\n\t\ttex.x -= tex.y * 0.5;\n\n\t\tvec2 a;\n\t\tif (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));\n\t\telse a = vec2(ceil(tex.x), ceil(tex.y));\n\t\tvec2 b = vec2(ceil(tex.x), floor(tex.y));\n\t\tvec2 c = vec2(floor(tex.x), ceil(tex.y));\n\n\t\tvec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);\n\t\tvec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n\t\tvec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n\t\tvec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n\t\tfloat alen = length(TEX - A);\n\t\tfloat blen = length(TEX - B);\n\t\tfloat clen = length(TEX - C);\n\n\t\tvec2 choice;\n\t\tif (alen < blen) {\n\t\t\tif (alen < clen) choice = a;\n\t\t\telse choice = c;\n\t\t} else {\n\t\t\tif (blen < clen) choice = b;\n\t\t\telse choice = c;\n\t\t}\n\n\t\tchoice.x += choice.y * 0.5;\n\t\tchoice.y *= 0.866025404;\n\t\tchoice *= uScale / vec2(uSamplerWidth, uSamplerHeight);\n\t\tgl_FragColor = texture2D(uSampler0, choice + uCenter / vec2(uSamplerWidth, uSamplerHeight));\n\t}\n";
SHADER_STRINGS["colorhalftone-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tuniform vec2 uCenter;\n\tuniform float uAngle;\n\tuniform float uScale;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tfloat pattern(float angle) {\n\t\tfloat s = sin(angle), c = cos(angle);\n\t\tvec2 tex = vTexcoordPosition * vec2(uSamplerWidth, uSamplerHeight) - uCenter;\n\t\tvec2 point = vec2(\n\t\t\tc * tex.x - s * tex.y,\n\t\t\ts * tex.x + c * tex.y\n\t\t) * uScale;\n\t\treturn (sin(point.x) * sin(point.y)) * 4.0;\n\t}\n\n\tvoid main() {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tvec3 cmy = 1.0 - col.rgb;\n\t\tfloat k = min(cmy.x, min(cmy.y, cmy.z));\n\t\tcmy = (cmy - k) / (1.0 - k);\n\t\tcmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(uAngle + 0.26179), pattern(uAngle + 1.30899), pattern(uAngle)), 0.0, 1.0);\n\t\tk = clamp(k * 10.0 - 5.0 + pattern(uAngle + 0.78539), 0.0, 1.0);\n\t\tgl_FragColor = vec4(1.0 - cmy - k, col.a);\n\t}\n";
SHADER_STRINGS["dotscreen-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tuniform vec2 uCenter;\n\tuniform float uAngle;\n\tuniform float uScale;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tfloat pattern(float angle) {\n\t\tfloat s = sin(angle), c = cos(angle);\n\t\tvec2 tex = vTexcoordPosition * vec2(uSamplerWidth, uSamplerHeight) - uCenter;\n\t\tvec2 point = vec2(\n\t\t\tc * tex.x - s * tex.y,\n\t\t\ts * tex.x + c * tex.y\n\t\t) * uScale;\n\t\treturn (sin(point.x) * sin(point.y)) * 4.0;\n\t}\n\n\tvoid main() {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tfloat average = (col.r + col.g + col.b) / 3.0;\n\t\tgl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern(uAngle)), col.a);\n\t}\n";
SHADER_STRINGS["vibrance-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tuniform float uAmount;\n\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\n\t\tfloat average = (col.r + col.g + col.b) / 3.0;\n\t\tfloat mx = max(col.r, max(col.g, col.b));\n\t\tfloat amt = (mx - average) * (-uAmount * 3.0);\n\t\tcol.rgb = mix(col.rgb, vec3(mx), amt);\n\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["noise-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tuniform float uAmount;\n\n\tfloat rand(vec2 co) {\n\t\treturn fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n\t}\n\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\n\t\tfloat diff = (rand(vTexcoordPosition + uAmount) - 0.5) * uAmount;\n\t\tcol.r += diff;\n\t\tcol.g += diff;\n\t\tcol.b += diff;\n\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["tiltshift-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uBlurRadius;\n\tuniform float uGradientRadius;\n\tuniform vec2 uStart;\n\tuniform vec2 uEnd;\n\tuniform vec2 uDelta;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tfloat random(vec3 scale, float seed) {\n\t\treturn fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n\t}\n\n\tvoid main() {\n\t\tvec4 color = vec4(0.0);\n\t\tfloat total = 0.0;\n\n\t\tfloat offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\t\tfloat m1 = (uStart.y-uEnd.y) / (uStart.x - uEnd.x);\n\t\tfloat m2 = -1.0/m1;\n\t\tfloat c1 = uStart.y - m1*uStart.x;\n\t\tfloat c2 = (vTexcoordPosition.y*uSamplerHeight) - m2*(vTexcoordPosition.x*uSamplerWidth);\n\t\tfloat x = (c2 - c1) / (m1 - m2);\n\t\tfloat y = m1 * x + c1;\n\t\tfloat val;\n\t\tif (uStart.y == uEnd.y){\n\t\t\tval = abs(vTexcoordPosition.y*uSamplerHeight - uStart.y)/uGradientRadius;\n\t\t}else if (uStart.x == uEnd.x){\n\t\t\tval = abs(vTexcoordPosition.x*uSamplerWidth - uStart.x)/uGradientRadius;\n\t\t}else{\n\t\t\tval = length(vec2(x,y)-(vTexcoordPosition*vec2(uSamplerWidth, uSamplerHeight)))/uGradientRadius;\n\t\t}\n\n\t\tfloat radius= smoothstep(0.0, 1.0, val) * uBlurRadius;\n\t\t// float radius;\n\t\t// if (val < 1.0)\n\t\t\t// radius = 0.0;\n\t\t// else\n\t\t\t// radius = uBlurRadius;\n\n\n\t\tfor (float t = -30.0; t <= 30.0; t++) {\n\t\t\tfloat percent = (t + offset - 0.5) / 30.0;\n\t\t\tfloat weight = 1.0 - abs(percent);\n\t\t\tvec4 sample = texture2D(uSampler0, vTexcoordPosition + uDelta / vec2(uSamplerWidth, uSamplerHeight) * percent * radius);\n\n\t\t\tsample.rgb *= sample.a;\n\n\t\t\tcolor += sample * weight;\n\t\t\ttotal += weight;\n\t\t}\n\n\t\tgl_FragColor = color / total;\n\n\t\tgl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n\t}\n";
SHADER_STRINGS["frame-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform sampler2D uSampler1;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tvec3 col2 = texture2D(uSampler1, vTexcoordPosition).rgb;\n\t\tif (col2 == vec3(0, 0, 0))\n\t\t\tdiscard;\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["edge-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0; // 0\n\tuniform float uVxOffset;\n\tuniform float uVxOffset2;\n\tuniform float uSamplerWidth; // GeeXLab built-in\n\tuniform float uSamplerHeight; // GeeXLab built-in\n\n\tvarying vec2 vTexcoordPosition;\n\n\tmat3 G[2];\n\tmat3 G2[9];\n\n\n\tvoid main()\n\t{\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tvec2 uv = vTexcoordPosition.xy;\n\t\tvec3 tc = vec3(1.0, 0.0, 0.0);\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tif (uv.x < (uVxOffset-0.005))\n\t\t{\n\t\t\tmat3 I;\n\t\t\tfloat cnv[2];\n\t\t\tvec3 sample;\n\t\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,-texelHeight)).rgb;\n\t\t\tI[0][0] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,0)).rgb;\n\t\t\tI[0][1] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,texelHeight)).rgb;\n\t\t\tI[0][2] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,-texelHeight)).rgb;\n\t\t\tI[1][0] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t\t\tI[1][1] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,texelHeight)).rgb;\n\t\t\tI[1][2] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,-texelHeight)).rgb;\n\t\t\tI[2][0] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,0)).rgb;\n\t\t\tI[2][1] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,texelHeight)).rgb;\n\t\t\tI[2][2] = length(sample);\n\n\n\t\t\t// calculate the convolution values for all the masks\n\t\t\tfloat dp3 = dot(G[0][0], I[0]) + dot(G[0][1], I[1]) + dot(G[0][2], I[2]);\n\t\t\tcnv[0] = dp3 * dp3;\n\t\t\tdp3 = dot(G[1][0], I[0]) + dot(G[1][1], I[1]) + dot(G[1][2], I[2]);\n\t\t\tcnv[1] = dp3 * dp3;\n\n\t\t\ttc = vec3(0.5 * sqrt(cnv[0]*cnv[0]+cnv[1]*cnv[1]));\n\t\t}/*\n\t\telse if ((uv.x >= (uVxOffset+0.005)) && (uv.x < (uVxOffset2-0.005)))\n\t\t{\n\t\t\tmat3 I;\n\t\t\tfloat cnv[9];\n\t\t\tvec3 sample;\n\n\t\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,-texelHeight)).rgb;\n\t\t\tI[0][0] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,0)).rgb;\n\t\t\tI[0][1] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,texelHeight)).rgb;\n\t\t\tI[0][2] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,-texelHeight)).rgb;\n\t\t\tI[1][0] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t\t\tI[1][1] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,texelHeight)).rgb;\n\t\t\tI[1][2] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,-texelHeight)).rgb;\n\t\t\tI[2][0] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,0)).rgb;\n\t\t\tI[2][1] = length(sample);\n\n\t\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,texelHeight)).rgb;\n\t\t\tI[2][2] = length(sample);\n\n\t\t\t// calculate the convolution values for all the masks\n\n\t\t\tfloat dp3 = dot(G2[0][0], I[0]) + dot(G2[0][1], I[1]) + dot(G2[0][2], I[2]);\n\t\t\tcnv[0] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[1][0], I[0]) + dot(G2[1][1], I[1]) + dot(G2[1][2], I[2]);\n\t\t\tcnv[1] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[2][0], I[0]) + dot(G2[2][1], I[1]) + dot(G2[2][2], I[2]);\n\t\t\tcnv[2] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[3][0], I[0]) + dot(G2[3][1], I[1]) + dot(G2[3][2], I[2]);\n\t\t\tcnv[3] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[4][0], I[0]) + dot(G2[4][1], I[1]) + dot(G2[4][2], I[2]);\n\t\t\tcnv[4] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[5][0], I[0]) + dot(G2[5][1], I[1]) + dot(G2[5][2], I[2]);\n\t\t\tcnv[5] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[6][0], I[0]) + dot(G2[6][1], I[1]) + dot(G2[6][2], I[2]);\n\t\t\tcnv[6] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[7][0], I[0]) + dot(G2[7][1], I[1]) + dot(G2[7][2], I[2]);\n\t\t\tcnv[7] = dp3 * dp3;\n\n\t\t\tdp3 = dot(G2[8][0], I[0]) + dot(G2[8][1], I[1]) + dot(G2[8][2], I[2]);\n\t\t\tcnv[8] = dp3 * dp3;\n\n\t\t\tfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]); // Edge detector\n\t\t\tfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\n\t\t\t//float M = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]); // Line detector\n\t\t\t//float S = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]) + (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + cnv[8];\n\n\t\t\ttc = vec3(sqrt(M/S));\n\t\t}*/\n\t\telse if (uv.x>=(uVxOffset2+0.005))\n\t\t{\n\t\t\ttc = texture2D(uSampler0, uv).rgb;\n\t\t}\n\t\t//tc = vec3(1, 0, 0);\n\t\tgl_FragColor = vec4(tc, 1.0);\n\t}\n";
SHADER_STRINGS["multi-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform sampler2D uSampler1;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\t\tvec4 col1 = texture2D(uSampler0, vTexcoordPosition) * 0.5;\n\t\tvec4 col2 = texture2D(uSampler1, vTexcoordPosition) * 0.5;\n\t\tgl_FragColor = col1 + col2;\n\t}\n";
SHADER_STRINGS["triangle-blur-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tuniform vec2 uDelta;\n\n\tfloat random(vec3 scale, float seed) {\n\t\t/* use the fragment position for a different seed per-pixel */\n\t\treturn fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n\t}\n\n\tvoid main() {\n\t\tvec4 color = vec4(0.0);\n\t\tfloat total = 0.0;\n\n\t\t/* randomize the lookup values to hide the fixed number of samples */\n\t\tfloat offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\n\n\n\t\tfloat percent = (-4.0 + offset - 0.5)/5.0;\n\t\tfloat weight = 1.0 - abs(percent);\n\t\tvec4 sample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (-3.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (-2.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (-1.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (0.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (1.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (2.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (3.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (4.0 + offset - 0.5)/5.0;\n\t\tweight = 1.0 - abs(percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + uDelta * percent);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tgl_FragColor = color / total;\n\n\t\t/* switch back from pre-multiplied alpha */\n\t\tgl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n\t}\n";
SHADER_STRINGS["twirl-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tuniform vec2 uTwirlCenter;\n\tuniform float uAmount;\n\tuniform float uRadius;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\t\tvec3 col = vec3(1., 0., 0.);\n\t\tvec2 uv = vTexcoordPosition.st-uTwirlCenter;\n\t\tfloat radius = length(uv);\n\t\tif (radius <= uRadius){\n\t\t\tfloat percent = (uRadius-radius)/uRadius;\n\t\t\tfloat theta = percent*percent*uAmount*8.0;\n\t\t\tfloat s = sin(theta);\n\t\t\tfloat c = cos(theta);\n\t\t\tuv = vec2(dot(uv, vec2(c, -s)), dot(uv, vec2(s, c)));\n\t\t}\n\t\tuv += uTwirlCenter;\n\t\tcol = texture2D(uSampler0, uv).rgb;\n\t\tgl_FragColor = vec4(col, 1.0);\n\t}\n";
SHADER_STRINGS["mirror-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tuniform float uAngle;\n\tuniform vec2 uMirrorCenter;\n\tuniform float uDistance;\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\n\t\tfloat radAngle= uAngle*3.1415/180.0;\n\t\tvec2 mirrorNormal = vec2(sin(radAngle), cos(radAngle));\n\t\tvec2 mirrorSurface = vec2(cos(radAngle), sin(radAngle));\n\t\tvec2 offset = mirrorNormal * uDistance;\n\t\tvec2 mirrorCenter = uMirrorCenter + offset;\n\t\tvec2 fragmentVectorFromMirror = vTexcoordPosition  - uMirrorCenter;\n\n\t\tvec2 uv = offset;\n\t\tif (dot(normalize(fragmentVectorFromMirror), mirrorNormal) < 0.0)\n\t\t\tuv = -reflect(-fragmentVectorFromMirror, mirrorNormal) + mirrorCenter - uv*2.0;\n\t\telse\n\t\t\tuv = vTexcoordPosition - uv;\n\t\t//uv += offset;\n\t\tvec3 col = texture2D(uSampler0, uv).rgb;\n\t\tgl_FragColor = vec4(col, 1.0);\n\t}\n";
SHADER_STRINGS["focus-blur-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tvarying vec2 vTexcoordPosition;\n\tuniform float uDistance; // 1.0\n\tuniform float uStrength; // 2.2\n\tuniform vec2 uCenter;\n\n\tvoid main(void)\n\t{\n\t\tfloat samples[10];\n\t\tsamples[0] = -0.08;\n\t\tsamples[1] = -0.05;\n\t\tsamples[2] = -0.03;\n\t\tsamples[3] = -0.02;\n\t\tsamples[4] = -0.01;\n\t\tsamples[5] =  0.01;\n\t\tsamples[6] =  0.02;\n\t\tsamples[7] =  0.03;\n\t\tsamples[8] =  0.05;\n\t\tsamples[9] =  0.08;\n\n\t\tvec2 dir = uCenter - vTexcoordPosition;\n\t\tfloat dist = sqrt(dir.x*dir.x + dir.y*dir.y);\n\t\tdir = dir/dist;\n\n\t\tvec4 color = texture2D(uSampler0, vTexcoordPosition);\n\t\tvec4 sum = color;\n\n\t\tfor (int i = 0; i < 10; i++)\n\t\t\tsum += texture2D( uSampler0, vTexcoordPosition + dir * samples[i] * uDistance );\n\n\t\tsum *= 1.0/11.0;\n\t\tfloat t = dist * uStrength;\n\t\tt = clamp( t ,0.0,1.0);\n\n\t\tgl_FragColor = mix( color, sum, t );\n\t}\n";
SHADER_STRINGS["tone-curve-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform sampler2D uSampler1; // map\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main()\n\t{\n\t\tvec4 color=texture2D(uSampler0,vTexcoordPosition);\n\t\tcolor.r=texture2D(uSampler1,vec2(color.r, 0)).r;\n\t\tcolor.g=texture2D(uSampler1,vec2(color.g, 0)).g;\n\t\tcolor.b=texture2D(uSampler1,vec2(color.b, 0)).b;\n\n\t\tgl_FragColor=color;\n\t}\n";
SHADER_STRINGS["tone-map-creation-shader-fs"] =
    "\n\t#define RED_SPLINES_MAX 5\n\t#define GREEN_SPLINES_MAX 5\n\t#define BLUE_SPLINES_MAX 5\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tuniform vec2 uRedSplines[RED_SPLINES_MAX];\n\tuniform vec2 uGreenSplines[GREEN_SPLINES_MAX];\n\tuniform vec2 uBlueSplines[BLUE_SPLINES_MAX];\n\tuniform int uRedSplinesCount;\n\tuniform int uGreenSplinesCount;\n\tuniform int uBlueSplinesCount;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\t\t// vec3 test = vec3(0,0,0);\n\t\tvec3 col = vec3(-1.0, -1.0, -1.0);\n\t\tvec2 lastVal = vec2(0, 0);\n\t\tfor (int i = 0; i < RED_SPLINES_MAX; i ++){\n\t\t\tif (i >= uRedSplinesCount){\n\t\t\t\t// test.g = 1.0;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif (vTexcoordPosition.s <= uRedSplines[i].s){\n\t\t\t\tvec2 newVal = uRedSplines[i];\n\t\t\t\tcol.r = mix(lastVal.t, newVal.t, (vTexcoordPosition.s - lastVal.s)/(newVal.s - lastVal.s));\n\t\t\t\tbreak;\n\t\t\t}else{\n\t\t\t\t// test.b = 1.0;\n\t\t\t\tlastVal = uRedSplines[i];\n\t\t\t}\n\t\t\t// test.r += 0.2;\n\t\t}\n\t\tif (col.r == -1.0)\n\t\t\tcol.r = lastVal.t;\n\n\t\tlastVal = vec2(0, 0);\n\t\tfor (int i = 0; i < GREEN_SPLINES_MAX; i ++){\n\t\t\tif (i >= uGreenSplinesCount)\n\t\t\t\tbreak;\n\t\t\tif (vTexcoordPosition.s <= uGreenSplines[i].s){\n\t\t\t\tvec2 newVal = uGreenSplines[i];\n\t\t\t\tcol.g = mix(lastVal.t, newVal.t, (vTexcoordPosition.s - lastVal.s)/(newVal.s - lastVal.s));\n\t\t\t\tbreak;\n\t\t\t}else{\n\t\t\t\tlastVal = uGreenSplines[i];\n\t\t\t}\n\t\t}\n\t\tif (col.g == -1.0)\n\t\t\tcol.g = lastVal.t;\n\n\t\tlastVal = vec2(0, 0);\n\t\tfor (int i = 0; i < BLUE_SPLINES_MAX; i ++){\n\t\t\tif (i >= uBlueSplinesCount)\n\t\t\t\tbreak;\n\t\t\tif (vTexcoordPosition.s <= uBlueSplines[i].s){\n\t\t\t\tvec2 newVal = uBlueSplines[i];\n\t\t\t\tcol.b = mix(lastVal.t, newVal.t, (vTexcoordPosition.s - lastVal.s)/(newVal.s - lastVal.s));\n\t\t\t\tbreak;\n\t\t\t}else{\n\t\t\t\tlastVal = uBlueSplines[i];\n\t\t\t}\n\t\t}\n\t\tif (col.b == -1.0)\n\t\t\tcol.b = lastVal.t;\n\t\tgl_FragColor = vec4(col, 1.0);\n\t\t//gl_FragColor = vec4(test, 1.0);\n\t\t//gl_FragColor = vec4(uRedSplines[1].x, uGreenSplines[1].x, uBlueSplines[1].x, 1.0);\n\t}\n";
SHADER_STRINGS["greyscale-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tuniform vec3 uRGB;\n\tuniform float uHSVPointer;\n\tuniform float uHSVWidth;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\tfloat d = q.x - min(q.w, q.y);\n\t\tfloat e = 1.0e-10;\n\t\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\t\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\t\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tvec3 hsv = rgb2hsv(col.rgb);\n\n\t\tfloat fromPoint = uHSVPointer - uHSVWidth/2.0;\n\t\tfloat toPoint = uHSVPointer + uHSVWidth/2.0;\n\n\t\tif (fromPoint < 0.0)\n\t\t\tfromPoint += 1.0;\n\t\tif (toPoint > 1.0)\n\t\t\ttoPoint -= 1.0;\n\t\tbool cond;\n\t\tif (toPoint > fromPoint){\n\t\t\tcond = (hsv.x >= fromPoint && hsv.x <= toPoint) && uHSVWidth != 0.0;\n\t\t}else{\n\t\t\tcond = !(hsv.x > toPoint && hsv.x < fromPoint) && uHSVWidth != 0.0;\n\t\t}\n\n\n\t\tif (cond)\n\t\t\tgl_FragColor = col;\n\t\telse{\n\t\t\tfloat avg = (col.r + col.g + col.b)/3.0;\n\t\t\tcol.rgb = vec3(avg, avg, avg);\n\t\t\tcol.rgb *= uRGB;\n\t\t\tgl_FragColor = col;\n\t\t}\n\t}\n";
SHADER_STRINGS["lighted-shader-vs"] =
    "\n\n\tattribute vec3 VertexPosition;\n\tattribute vec2 TexcoordPosition;\n\n\tvarying vec2 vTexcoordPosition;\n\tvarying vec4 vPosition;\n\tvarying vec4 vNormal;\n\tvarying mat4 vNormalMatrix;\n\n\tuniform mat4 uModelViewMatrix;\n\tuniform mat4 uProjectionMatrix;\n\tuniform mat4 uNormalMatrix;\n\n\tvoid main(void) {\n\t\tvPosition = uModelViewMatrix * vec4(VertexPosition, 1.0);\n\t\tgl_Position = uProjectionMatrix * vPosition;\n\t\tvNormal = uNormalMatrix * vec4(0, 0, 1, 0);\n\t\tvTexcoordPosition = TexcoordPosition;\n\t\tvNormalMatrix = uNormalMatrix;\n\t}\n";
SHADER_STRINGS["lighted-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tuniform float uLightIntensity;\n\tuniform vec3 uLightPosition;\n\tuniform vec3 uLightAmbient;\n\tuniform vec3 uLightDiffuse;\n\tuniform vec3 uLightSpecular;\n\tuniform float uMaterialShininess;\n\tuniform float uDoSpecularCalculation;\n\tuniform vec2 uViewerPosition;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tvarying vec2 vTexcoordPosition;\n\tvarying vec4 vPosition;\n\tvarying vec4 vNormal;\n\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tfloat distanceFromLight = length(vPosition.xyz-uLightPosition);\n\t\t//float attenuation = 1.0/(1.0/uLightIntensity+ 1.0/(uLightIntensity*distanceFromLight) + 1.0/(uLightIntensity*distanceFromLight*distanceFromLight));\n\t\t//float attenuation = distanceFromLight * (1.0 / (1.0 + (0.25 * distanceFromLight * distanceFromLight))) * 160.0;\n\t\tfloat attenuation = (1.0/(distanceFromLight+0.1))*uLightIntensity;\n\n\t\tvec3 surfaceToLight = normalize(uLightPosition - vPosition.xyz);\n\t\tvec3 cameraToSurface = normalize(vec3(uSamplerWidth*uViewerPosition.x, uSamplerHeight*uViewerPosition.y, 10)-vPosition.xyz);\n\n\t\tvec3 normal = normalize(vNormal.xyz);\n\t\tfloat diffuseCont = max(dot(normal, surfaceToLight), 0.0);\n\t\tfloat specularCont = max(dot(cameraToSurface, -reflect(surfaceToLight, normal)), 0.0);\n\t\tspecularCont = pow(specularCont, uMaterialShininess);\n\n\t\tspecularCont *= uDoSpecularCalculation;\n\n\t\tvec3 ambient = uLightAmbient * col.xyz;\n\t\tvec3 diffuse = (uLightDiffuse * col.xyz) * diffuseCont;\n\t\tvec3 specular = (uLightSpecular * col.xyz) * specularCont;\n\n\t\tgl_FragColor = vec4(ambient+(diffuse+specular)*attenuation, col.a);\n\t}\n";
SHADER_STRINGS["lighted-normalmap-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform sampler2D uSampler1;\n\n\tvarying mat4 vNormalMatrix;\n\n\tuniform float uLightIntensity;\n\tuniform vec3 uLightPosition;\n\tuniform vec3 uLightAmbient;\n\tuniform vec3 uLightDiffuse;\n\tuniform vec3 uLightSpecular;\n\tuniform float uMaterialShininess;\n\tuniform float uDoSpecularCalculation;\n\n\tvarying vec2 vTexcoordPosition;\n\tvarying vec4 vPosition;\n\tvarying vec4 vNormal;\n\n\tvoid main(void) {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tfloat distanceFromLight = length(vPosition.xyz-uLightPosition);\n\t\tfloat attenuation = 1.0/(1.0/uLightIntensity+ 1.0/(uLightIntensity*distanceFromLight) + 1.0/(uLightIntensity*distanceFromLight*distanceFromLight));\n\t\tattenuation = 1.0;\n\n\t\tvec3 surfaceToLight = normalize(uLightPosition - vPosition.xyz);\n\t\tvec3 cameraToSurface = normalize(vec3(512, 512, 10) - vPosition.xyz);\n\n\t\tvec3 normal = normalize(((texture2D(uSampler1, vTexcoordPosition)*2.0-vec4(1.0, 1.0, 1.0, 1.0))).xyz);\n\t\tnormal.y *= -1.0; // because textures get reversed in y direction\n\t\tfloat diffuseCont = max(dot(normal, surfaceToLight), 0.0);\n\t\tfloat specularCont = max(dot(cameraToSurface, -reflect(surfaceToLight, normal)), 0.0);\n\t\tspecularCont = pow(specularCont, uMaterialShininess);\n\n\t\tspecularCont *= uDoSpecularCalculation;\n\n\t\tvec3 ambient = uLightAmbient * col.xyz;\n\t\tvec3 diffuse = (uLightDiffuse * col.xyz) * diffuseCont;\n\t\tvec3 specular = (uLightSpecular * col.xyz) * specularCont;\n\n\t\tgl_FragColor = vec4(ambient+(diffuse+specular)*attenuation, col.a);\n\t}\n";
SHADER_STRINGS["sharpen-shader-fs"] =
    "\n\tprecision mediump float;\n\tuniform sampler2D uSampler0;\n\tvarying vec2 vTexcoordPosition;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tuniform float uSharpenAmount;\n\tvoid main(){\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\t\tvec2 singleStepOffset = vec2(texelWidth, texelHeight);\n\t\tvec4 sum = vec4(0,0,0,0);\n\t\tvec2 up = vec2(0.0, texelHeight);\n\t\tvec2 left = vec2(texelWidth, 0.0);\n\t\tsum += texture2D(uSampler0, vTexcoordPosition) * (1.0 + 4.0 * uSharpenAmount);\n\t\tsum += texture2D(uSampler0, vTexcoordPosition + up) * -uSharpenAmount;\n\t\tsum += texture2D(uSampler0, vTexcoordPosition - up) * -uSharpenAmount;\n\t\tsum += texture2D(uSampler0, vTexcoordPosition + left) * -uSharpenAmount;\n\t\tsum += texture2D(uSampler0, vTexcoordPosition - left) * -uSharpenAmount;\n\t\tgl_FragColor = sum;\n\t}\n";
SHADER_STRINGS["vignette-shader-fs"] =
    "\n\tprecision mediump float;\n\tuniform sampler2D uSampler0;\n\tvarying vec2 vTexcoordPosition;\n\tuniform vec2 uCenter;\n\tuniform vec3 uColor;\n\tuniform float uStart;\n\tuniform float uRange;\n\tvoid main(){\n\t\tlowp vec4 color = texture2D(uSampler0, vTexcoordPosition);\n\t\tmediump float d = distance(vTexcoordPosition, uCenter);\n\t\tlowp float percent = smoothstep(uStart, uStart+uRange, d);\n\t\tgl_FragColor = vec4(mix(color.rgb, uColor, percent), color.a);\n\t}\n";
SHADER_STRINGS["highlight-shadow-shader-fs"] =
    "\n\tprecision mediump float;\n\tuniform sampler2D uSampler0;\n\tuniform float uHighlight;\n\tuniform float uShadow;\n\tvarying vec2 vTexcoordPosition;\n\tconst vec3 luminanceWeighting = vec3(0.3, 0.3, 0.3);\n\tvoid main(){\n\t\tvec4 texColour = texture2D(uSampler0,vTexcoordPosition);\n\t\tfloat luminance = dot(texColour.rgb, luminanceWeighting);\n\t\tfloat s = clamp((pow(luminance, 1.0/(uShadow+1.0)) + (-0.76)*pow(luminance, 2.0/(uShadow+1.0))) - luminance, 0.0, 1.0);\n\t\tfloat h = clamp((1.0 - (pow(1.0-luminance, 1.0/(2.0-uHighlight)) + (-0.8)*pow(1.0-luminance, 2.0/(2.0-uHighlight)))) - luminance, -1.0, 0.0);\n\t\tvec3 result = vec3(0.0, 0.0, 0.0) + ((luminance + s + h) - 0.0) * ((texColour.rgb - vec3(0.0, 0.0, 0.0))/(luminance - 0.0));\n\t\tgl_FragColor = vec4(result, texColour.a);\n\t}\n";
SHADER_STRINGS["monochrome-shader-fs"] =
    "\n\tprecision mediump float;\n\tuniform sampler2D uSampler0;\n\tvarying vec2 vTexcoordPosition;\n\tuniform float uIntensity;\n\tuniform vec3 uColor;\n\tvec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\n\tvoid main(){\n\t\tvec4 color = texture2D(uSampler0,vTexcoordPosition);\n\t\tfloat luminance =  dot(color.rgb, luminanceWeighting);\n\t\tvec4 desat = vec4(vec3(luminance), 1.0);\n\t\tvec4 outputColour = vec4(\n\t\t\t(desat.r < 0.5 ? (2.0 * desat.r * uColor.r) : (1.0 - 2.0 * (1.0 - desat.r) * (1.0 - uColor.r))),\n\t\t\t(desat.g < 0.5 ? (2.0 * desat.g * uColor.g) : (1.0 - 2.0 * (1.0 - desat.g) * (1.0 - uColor.g))),\n\t\t\t(desat.b < 0.5 ? (2.0 * desat.b * uColor.b) : (1.0 - 2.0 * (1.0 - desat.b) * (1.0 - uColor.b))),\n\t\t\t1.0\n\t\t);\n\t\tgl_FragColor = vec4(mix(color.rgb, outputColour.rgb, uIntensity), color.a);\n\t}\n";
SHADER_STRINGS["overlay-shader-set-1-fs"] =
    "\n    precision mediump float;\n\n    uniform sampler2D uSampler0;\n    uniform sampler2D uSampler1;\n    uniform float uAmount;\n    uniform int uType;\n    uniform int uIsOverlayBackground;\n\n    varying vec2 vTexcoordPosition;\n\n\n    vec3 multiply(vec3 col1, vec3 col2)\n    {\n\treturn col1*col2*vec3(uAmount);\n    }\n\n    vec3 add(vec3 col1, vec3 col2)\n    {\n\treturn vec3(max(col1.r+col2.r*uAmount, 1.),\n\t\t    max(col1.g+col2.g*uAmount, 1.),\n\t\t    max(col1.b+col2.b*uAmount, 1.)\n\t\t   );\n    }\n\n    vec3 subtract(vec3 col1, vec3 col2)\n    {\n\treturn vec3(abs(col1.r-col2.r*uAmount),\n\t\t    abs(col1.g-col2.g*uAmount),\n\t\t    abs(col1.b-col2.b*uAmount));\n    }\n\n    vec3 blend(vec3 col1, vec3 col2)\n    {\n\treturn mix(col1, col2, uAmount);\n    }\n\n    vec3 materialize(vec3 col1, vec3 col2)\n    {\n\treturn vec3(1.0)-((vec3(1.0, 1.0, 1.0)-(col1*uAmount))*col2);\n    }\n\n    vec3 darken( vec3 s, vec3 d )\n    {\n\treturn min(s,d);\n    }\n\n    vec3 colorBurn( vec3 s, vec3 d )\n    {\n\treturn 1.0 - (1.0 - d) / s;\n    }\n\n\n    void main(void) {\n\tvec4 s = texture2D(uSampler0, vTexcoordPosition);\n\tvec4 d = texture2D(uSampler1, vTexcoordPosition);\n\tvec3 col1, col2;\n\tif (uIsOverlayBackground == 1){\n\t    col1 = s.rgb;\n\t    col2 = d.rgb;\n\t}else{\n\t    col1 = d.rgb;\n\t    col2 = s.rgb;\n\t}\n\n\tvec3 col = vec3(0, 0, 0);\n\tif (uType == 0)\n\t    col += add(col1, col2);\n\tif (uType == 1)\n\t    col += subtract(col1, col2);\n\tif (uType == 2)\n\t    col += multiply(col1, col2);\n\tif (uType == 3)\n\t    col += blend(col1, col2);\n\tif (uType == 4)\n\t    col += materialize(col1, col2);\n\n\tcol2 *= uAmount;\n\n\tif (uType == 5)\n\t    col += darken(col1, col2);\n\tif (uType == 6)\n\t    col += colorBurn(col1, col2);\n\n\tgl_FragColor = vec4(col, s.a);\n    }\n";
SHADER_STRINGS["overlay-shader-set-2-fs"] =
    "\n    precision mediump float;\n\n    uniform sampler2D uSampler0;\n    uniform sampler2D uSampler1;\n    uniform float uAmount;\n    uniform int uType;\n    uniform int uIsOverlayBackground;\n\n    varying vec2 vTexcoordPosition;\n\n    vec3 linearBurn( vec3 s, vec3 d )\n    {\n\treturn s + d - 1.0;\n    }\n\n    vec3 darkerColor( vec3 s, vec3 d )\n    {\n\treturn (s.x + s.y + s.z < d.x + d.y + d.z) ? s : d;\n    }\n\n    vec3 lighten( vec3 s, vec3 d )\n    {\n\treturn max(s,d);\n    }\n\n    vec3 screen( vec3 s, vec3 d )\n    {\n\treturn s + d - s * d;\n    }\n\n    vec3 colorDodge( vec3 s, vec3 d )\n    {\n\treturn d / (1.0001 - s);\n    }\n\n    vec3 linearDodge( vec3 s, vec3 d )\n    {\n\treturn s + d;\n    }\n\n    vec3 lighterColor( vec3 s, vec3 d )\n    {\n\treturn (s.x + s.y + s.z > d.x + d.y + d.z) ? s : d;\n    }\n\n    void main(void) {\n\tvec4 s = texture2D(uSampler0, vTexcoordPosition);\n\tvec4 d = texture2D(uSampler1, vTexcoordPosition);\n\tvec3 col1, col2;\n\tif (uIsOverlayBackground == 1){\n\t    col1 = s.rgb;\n\t    col2 = d.rgb;\n\t}else{\n\t    col1 = d.rgb;\n\t    col2 = s.rgb;\n\t}\n\n\tvec3 col = vec3(0, 0, 0);\n\tcol2 *= uAmount;\n\n\tif (uType == 7)\n\t    col += linearBurn(col1, col2);\n\tif (uType == 8)\n\t    col += darkerColor(col1, col2);\n\tif (uType == 9)\n\t    col += lighten(col1, col2);\n\tif (uType == 10)\n\t    col += screen(col1, col2);\n\tif (uType == 11)\n\t    col += colorDodge(col1, col2);\n\tif (uType == 12)\n\t    col += linearDodge(col1, col2);\n\tif (uType == 13)\n\t    col += lighterColor(col1, col2);\n\n\tgl_FragColor = vec4(col, s.a);\n    }\n";
SHADER_STRINGS["overlay-shader-set-3-fs"] =
    "\n    precision mediump float;\n\n    uniform sampler2D uSampler0;\n    uniform sampler2D uSampler1;\n    uniform float uAmount;\n    uniform int uType;\n    uniform int uIsOverlayBackground;\n\n    varying vec2 vTexcoordPosition;\n\n\n    float overlay( float s, float d )\n    {\n\treturn (d < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);\n    }\n\n    vec3 overlay( vec3 s, vec3 d )\n    {\n\tvec3 c;\n\tc.x = overlay(s.x,d.x);\n\tc.y = overlay(s.y,d.y);\n\tc.z = overlay(s.z,d.z);\n\treturn c;\n    }\n\n    float softLight( float s, float d )\n    {\n\treturn (s < 0.5) ? d - (1.0 - 2.0 * s) * d * (1.0 - d)\n\t    : (d < 0.25) ? d + (2.0 * s - 1.0) * d * ((16.0 * d - 12.0) * d + 3.0)\n\t    : d + (2.0 * s - 1.0) * (sqrt(d) - d);\n    }\n\n    vec3 softLight( vec3 s, vec3 d )\n    {\n\tvec3 c;\n\tc.x = softLight(s.x,d.x);\n\tc.y = softLight(s.y,d.y);\n\tc.z = softLight(s.z,d.z);\n\treturn c;\n    }\n\n    float hardLight( float s, float d )\n    {\n\treturn (s < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0003 - d);\n    }\n\n    vec3 hardLight( vec3 s, vec3 d )\n\n    {\n\tvec3 c;\n\tc.x = hardLight(s.x,d.x);\n\tc.y = hardLight(s.y,d.y);\n\tc.z = hardLight(s.z,d.z);\n\treturn c;\n    }\n\n    float vividLight( float s, float d )\n    {\n\treturn (s < 0.5) ? 1.0 - (1.0 - d) / (2.0 * s) : d / (2.0 * (1.0002 - s));\n    }\n\n    vec3 vividLight( vec3 s, vec3 d )\n    {\n\tvec3 c;\n\tc.x = vividLight(s.x,d.x);\n\tc.y = vividLight(s.y,d.y);\n\tc.z = vividLight(s.z,d.z);\n\treturn c;\n    }\n\n    vec3 linearLight( vec3 s, vec3 d )\n    {\n\treturn 2.0 * s + d - 1.0;\n    }\n\n    float pinLight( float s, float d )\n    {\n\treturn (2.0 * s - 1.0 > d) ? 2.0 * s - 1.0 : (s < 0.5 * d) ? 2.0 * s : d;\n    }\n\n    vec3 pinLight( vec3 s, vec3 d )\n    {\n\tvec3 c;\n\tc.x = pinLight(s.x,d.x);\n\tc.y = pinLight(s.y,d.y);\n\tc.z = pinLight(s.z,d.z);\n\treturn c;\n    }\n\n    vec3 hardMix( vec3 s, vec3 d )\n    {\n\treturn floor(s + d);\n    }\n\n\n    void main(void) {\n\tvec4 s = texture2D(uSampler0, vTexcoordPosition);\n\tvec4 d = texture2D(uSampler1, vTexcoordPosition);\n\tvec3 col1, col2;\n\tif (uIsOverlayBackground == 1){\n\t    col1 = s.rgb;\n\t    col2 = d.rgb;\n\t}else{\n\t    col1 = d.rgb;\n\t    col2 = s.rgb;\n\t}\n\n\tvec3 col = vec3(0, 0, 0);\n\tcol2 *= uAmount;\n\n\tif (uType == 14)\n\t    col += overlay(col1, col2);\n\tif (uType == 15)\n\t    col += softLight(col1, col2);\n\tif (uType == 16)\n\t    col += hardLight(col1, col2);\n\tif (uType == 17)\n\t    col += vividLight(col1, col2);\n\tif (uType == 18)\n\t    col += linearLight(col1, col2);\n\tif (uType == 19)\n\t    col += pinLight(col1, col2);\n\tif (uType == 20)\n\t    col += hardMix(col1, col2);\n\n\tgl_FragColor = vec4(col, s.a);\n    }\n";
SHADER_STRINGS["overlay-shader-set-4-fs"] =
    "\n    precision mediump float;\n\n    uniform sampler2D uSampler0;\n    uniform sampler2D uSampler1;\n    uniform float uAmount;\n    uniform int uType;\n    uniform int uIsOverlayBackground;\n    uniform vec3 uOverlayColor;\n    varying vec2 vTexcoordPosition;\n\n\n    vec3 difference( vec3 s, vec3 d )\n    {\n\treturn abs(d - s);\n    }\n\n    vec3 exclusion( vec3 s, vec3 d )\n    {\n\treturn s + d - 2.0 * s * d;\n    }\n\n    vec3 divide( vec3 s, vec3 d )\n    {\n\treturn s / d;\n    }\n\n    //\trgb<--\x3ehsv functions by Sam Hocevar\n    //\thttp://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl\n    vec3 rgb2hsv(vec3 c)\n    {\n\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\tfloat d = q.x - min(q.w, q.y);\n\tfloat e = 1.0e-10;\n\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n    }\n\n    vec3 hsv2rgb(vec3 c)\n    {\n\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }\n\n    vec3 hue( vec3 s, vec3 d )\n    {\n\td = rgb2hsv(d);\n\td.x = rgb2hsv(s).x;\n\treturn hsv2rgb(d);\n    }\n\n    vec3 color( vec3 s, vec3 d )\n    {\n\ts = rgb2hsv(s);\n\ts.z = rgb2hsv(d).z;\n\treturn hsv2rgb(s);\n    }\n\n    vec3 saturation( vec3 s, vec3 d )\n    {\n\td = rgb2hsv(d);\n\td.y = rgb2hsv(s).y;\n\treturn hsv2rgb(d);\n    }\n\n    vec3 luminosity( vec3 s, vec3 d )\n    {\n\tfloat dLum = dot(d, vec3(0.3, 0.59, 0.11));\n\tfloat sLum = dot(s, vec3(0.3, 0.59, 0.11));\n\tfloat lum = sLum - dLum;\n\tvec3 c = d + lum;\n\tfloat minC = min(min(c.x, c.y), c.z);\n\tfloat maxC = max(max(c.x, c.y), c.z);\n\tif(minC < 0.0) return sLum + ((c - sLum) * sLum) / (sLum - minC);\n\telse if(maxC > 1.0) return sLum + ((c - sLum) * (1.0 - sLum)) / (maxC - sLum);\n\telse return c;\n    }\n\n    void main(void) {\n\tvec4 s = texture2D(uSampler0, vTexcoordPosition);\n\tvec4 d = texture2D(uSampler1, vTexcoordPosition);\n\tvec3 col1, col2;\n\tif (uIsOverlayBackground == 1){\n\t    col1 = s.rgb;\n\t    col2 = d.rgb;\n\t}else{\n\t    col1 = d.rgb;\n\t    col2 = s.rgb;\n\t}\n\n\tvec3 col = vec3(0, 0, 0);\n\tcol2 *= uAmount;\n\n\tif (uType == 21)\n\t    col += difference(col1, col2);\n\tif (uType == 22)\n\t    col += exclusion(col1, col2);\n\tif (uType == 23)\n\t    col += divide(col1, col2);\n\tif (uType == 24)\n\t    col += hue(col1, col2);\n\tif (uType == 25)\n\t    col += color(col1, col2);\n\tif (uType == 26)\n\t    col += saturation(col1, col2);\n\tif (uType == 27)\n\t    col += luminosity(col1, col2);\n\tif (uType == 28)\n\t    col += s.rgb*(1.0-uAmount) + uOverlayColor*(uAmount);\n\n\tgl_FragColor = vec4(col, s.a);\n    }\n";
SHADER_STRINGS["overlay2-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform sampler2D uSampler1;\n\tuniform float uAmount;\n\tuniform int uType;\n\n\tvarying vec2 vTexcoordPosition;\n\n\n\n\tvec3 darken( vec3 s, vec3 d )\n\t{\n\treturn min(s,d);\n\t}\n\n\tvec3 multiply( vec3 s, vec3 d )\n\t{\n\treturn s*d;\n\t}\n\n\tvec3 colorBurn( vec3 s, vec3 d )\n\t{\n\treturn 1.0 - (1.0 - d) / s;\n\t}\n\n\tvec3 linearBurn( vec3 s, vec3 d )\n\t{\n\treturn s + d - 1.0;\n\t}\n\n\tvec3 darkerColor( vec3 s, vec3 d )\n\t{\n\treturn (s.x + s.y + s.z < d.x + d.y + d.z) ? s : d;\n\t}\n\n\tvec3 lighten( vec3 s, vec3 d )\n\t{\n\treturn max(s,d);\n\t}\n\n\tvec3 screen( vec3 s, vec3 d )\n\t{\n\treturn s + d - s * d;\n\t}\n\n\tvec3 colorDodge( vec3 s, vec3 d )\n\t{\n\treturn d / (1.0 - s);\n\t}\n\n\tvec3 linearDodge( vec3 s, vec3 d )\n\t{\n\treturn s + d;\n\t}\n\n\tvec3 lighterColor( vec3 s, vec3 d )\n\t{\n\treturn (s.x + s.y + s.z > d.x + d.y + d.z) ? s : d;\n\t}\n\n\tfloat overlay( float s, float d )\n\t{\n\treturn (d < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);\n\t}\n\n\tvec3 overlay( vec3 s, vec3 d )\n\t{\n\tvec3 c;\n\tc.x = overlay(s.x,d.x);\n\tc.y = overlay(s.y,d.y);\n\tc.z = overlay(s.z,d.z);\n\treturn c;\n\t}\n\n\tfloat softLight( float s, float d )\n\t{\n\treturn (s < 0.5) ? d - (1.0 - 2.0 * s) * d * (1.0 - d)\n\t\t: (d < 0.25) ? d + (2.0 * s - 1.0) * d * ((16.0 * d - 12.0) * d + 3.0)\n\t\t\t\t\t : d + (2.0 * s - 1.0) * (sqrt(d) - d);\n\t}\n\n\tvec3 softLight( vec3 s, vec3 d )\n\t{\n\tvec3 c;\n\tc.x = softLight(s.x,d.x);\n\tc.y = softLight(s.y,d.y);\n\tc.z = softLight(s.z,d.z);\n\treturn c;\n\t}\n\n\tfloat hardLight( float s, float d )\n\t{\n\treturn (s < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);\n\t}\n\n\tvec3 hardLight( vec3 s, vec3 d )\n\t{\n\tvec3 c;\n\tc.x = hardLight(s.x,d.x);\n\tc.y = hardLight(s.y,d.y);\n\tc.z = hardLight(s.z,d.z);\n\treturn c;\n\t}\n\n\tfloat vividLight( float s, float d )\n\t{\n\treturn (s < 0.5) ? 1.0 - (1.0 - d) / (2.0 * s) : d / (2.0 * (1.0 - s));\n\t}\n\n\tvec3 vividLight( vec3 s, vec3 d )\n\t{\n\tvec3 c;\n\tc.x = vividLight(s.x,d.x);\n\tc.y = vividLight(s.y,d.y);\n\tc.z = vividLight(s.z,d.z);\n\treturn c;\n\t}\n\n\tvec3 linearLight( vec3 s, vec3 d )\n\t{\n\treturn 2.0 * s + d - 1.0;\n\t}\n\n\tfloat pinLight( float s, float d )\n\t{\n\treturn (2.0 * s - 1.0 > d) ? 2.0 * s - 1.0 : (s < 0.5 * d) ? 2.0 * s : d;\n\t}\n\n\tvec3 pinLight( vec3 s, vec3 d )\n\t{\n\tvec3 c;\n\tc.x = pinLight(s.x,d.x);\n\tc.y = pinLight(s.y,d.y);\n\tc.z = pinLight(s.z,d.z);\n\treturn c;\n\t}\n\n\tvec3 hardMix( vec3 s, vec3 d )\n\t{\n\treturn floor(s + d);\n\t}\n\n\tvec3 difference( vec3 s, vec3 d )\n\t{\n\treturn abs(d - s);\n\t}\n\n\tvec3 exclusion( vec3 s, vec3 d )\n\t{\n\treturn s + d - 2.0 * s * d;\n\t}\n\n\n\tvec3 subtract( vec3 s, vec3 d )\n\t{\n\treturn s - d;\n\t}\n\n\tvec3 divide( vec3 s, vec3 d )\n\t{\n\treturn s / d;\n\t}\n\n\t//\trgb<--\x3ehsv functions by Sam Hocevar\n\t//\thttp://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\tfloat d = q.x - min(q.w, q.y);\n\tfloat e = 1.0e-10;\n\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n\n\tvec3 hue( vec3 s, vec3 d )\n\t{\n\td = rgb2hsv(d);\n\td.x = rgb2hsv(s).x;\n\treturn hsv2rgb(d);\n\t}\n\n\tvec3 color( vec3 s, vec3 d )\n\t{\n\ts = rgb2hsv(s);\n\ts.z = rgb2hsv(d).z;\n\treturn hsv2rgb(s);\n\t}\n\n\tvec3 saturation( vec3 s, vec3 d )\n\t{\n\td = rgb2hsv(d);\n\td.y = rgb2hsv(s).y;\n\treturn hsv2rgb(d);\n\t}\n\n\tvec3 luminosity( vec3 s, vec3 d )\n\t{\n\tfloat dLum = dot(d, vec3(0.3, 0.59, 0.11));\n\tfloat sLum = dot(s, vec3(0.3, 0.59, 0.11));\n\tfloat lum = sLum - dLum;\n\tvec3 c = d + lum;\n\tfloat minC = min(min(c.x, c.y), c.z);\n\tfloat maxC = max(max(c.x, c.y), c.z);\n\tif(minC < 0.0) return sLum + ((c - sLum) * sLum) / (sLum - minC);\n\telse if(maxC > 1.0) return sLum + ((c - sLum) * (1.0 - sLum)) / (maxC - sLum);\n\telse return c;\n\t}\n\n\tvoid main() {\n\t\tvec3 s = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t\tvec3 d = texture2D(uSampler1, vTexcoordPosition).rgb;\n\n\t}\n";
SHADER_STRINGS["barrel-distortion-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uBarrelPower;\n\tuniform vec2 uDistortCenter;\n\tuniform float uRadius;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main() {\n\t\tvec2 coord = vTexcoordPosition * vec2(uSamplerWidth, uSamplerHeight);\n\t\tcoord -= uDistortCenter*vec2(uSamplerWidth, uSamplerHeight);\n\t\tfloat distance = length(coord);\n\t\tif (distance < uRadius) {\n\t\t\tfloat percent = distance / uRadius;\n\t\t\tif (uBarrelPower > 0.0) {\n\t\t\t\tcoord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uBarrelPower * 0.75);\n\t\t\t} else {\n\t\t\t\tcoord *= mix(1.0, pow(percent, 1.0 + uBarrelPower * 0.75) * uRadius / distance, 1.0 - percent);\n\t\t\t}\n\t\t}\n\t\tcoord += uDistortCenter*vec2(uSamplerWidth, uSamplerHeight);\n\t\tgl_FragColor = texture2D(uSampler0, coord / vec2(uSamplerWidth, uSamplerHeight));\n\t\tvec2 clampedCoord = clamp(coord, vec2(0.0), vec2(uSamplerWidth, uSamplerHeight));\n\t\tif (coord != clampedCoord) {\n\t\t\t/* fade to transparent if we are outside the image */\n\t\t\tgl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));\n\t\t}\n\t}\n\n";
SHADER_STRINGS["fish-eye-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uPower;\n\tuniform float uSamplerHeight;\n\tuniform float uSamplerWidth;\n\n\tconst float PI = 3.1415926535;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main()\n\t{\n\t\tvec2 p = vTexcoordPosition.xy;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t //(assume 1:1 prop)\n\t\tfloat prop = 1.0;//screen proroption\n\t\tvec2 m = vec2(0.5, 0.5 / prop);//center coords\n\t\tvec2 d = p - m;//vector from center to current fragment\n\t\tfloat r= sqrt(dot(d, d)); // distance of pixel from center\n\n\t\tfloat power = ( 2.0 * 3.141592 / (2.0 * sqrt(dot(m, m))) ) *\n\t\tuPower;//amount of effect\n\n\t\tfloat bind;//radius of 1:1 effect\n\t\tif (power > 0.0) bind = sqrt(dot(m, m));//stick to corners\n\t\telse {if (prop < 1.0) bind = m.x; else bind = m.y;}//stick to borders\n\n\t\t//Weird formulas\n\t\tvec2 uv;\n\t\tif (power > 0.0)//fisheye\n\t\tuv = m + normalize(d) * tan(r * power) * bind / tan( bind * power);\n\t\telse if (power < 0.0)//antifisheye\n\t\tuv = m + normalize(d) * atan(r * -power * 10.0) * bind / atan(-power * bind * 10.0);\n\t\telse uv = p;//no effect for power = 1.0\n\n\t\tvec3 col = texture2D(uSampler0, vec2(uv.x, uv.y * prop)).xyz;//Second part of cheat\n\t\t\t\t\t  //for round effect, not elliptical\n\t\tgl_FragColor = vec4(col, 1.0);\n\t}\n";
SHADER_STRINGS["toon-2-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uEdgeThreshold; // 0.2;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tconst float PI = 3.1415926535;\n\n\tvarying vec2 vTexcoordPosition;\n\n\t#define HueLevCount 10\n\t#define SatLevCount 7\n\t#define ValLevCount 4\n\tfloat HueLevels[HueLevCount];\n\tfloat SatLevels[SatLevCount];\n\tfloat ValLevels[ValLevCount];\n\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\tfloat d = q.x - min(q.w, q.y);\n\t\tfloat e = 1.0e-10;\n\t\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\t\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\t\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n\n\tfloat nearestHue(float col)\n\t{\n\t\tfor (int i =1; i<HueLevCount; i++ ) {\n\t\t\tif (col >= HueLevels[i-1] && col <= HueLevels[i]) {\n\t\t\t\treturn HueLevels[i];\n\t\t\t}\n\t\t}\n\t\treturn 1.0;\n\t}\n\n\tfloat nearestSaturation(float col)\n\t{\n\t\tfor (int i =0; i < SatLevCount-1; i++ ) {\n\t\t\tif (col >= 0.166 * float(i) && col <= float(i+1) * 0.166) {\n\t\t\t  return float(i+1) * 0.166;\n\t\t\t}\n\t\t}\n\t\treturn 1.0;\n\t}\n\n\tfloat nearestValue(float col)\n\t{\n\t\tfor (int i =0; i < ValLevCount-1; i++ ) {\n\t\t\tif (col >= 0.33* float(i) && col <= 0.33*float(i+1)) {\n\t\t\t\treturn 0.33*float(i+1);\n\t\t\t}\n\t\t}\n\t\treturn 1.0;\n\t}\n\n\n\t// averaged pixel intensity from 3 color channels\n\tfloat avg_intensity(vec4 pix)\n\t{\n\t return (pix.r + pix.g + pix.b)/3.;\n\t}\n\n\tvec4 get_pixel(vec2 coords, float dx, float dy)\n\t{\n\t return texture2D(uSampler0,coords + vec2(dx, dy));\n\t}\n\n\t// returns pixel color\n\tfloat IsEdge(vec2 coords)\n\t{\n\t  float dxtex = 1.0 /float(uSamplerWidth) ;\n\t  float dytex = 1.0 /float(uSamplerHeight);\n\t  float pix[9];\n\t  int k = -1;\n\t  float delta;\n\n\t  pix[0] = avg_intensity(get_pixel(coords,-1.0*dxtex,-1.0*dytex));\n\t  pix[1] = avg_intensity(get_pixel(coords,-1.0*dxtex,0.0));\n\t  pix[2] = avg_intensity(get_pixel(coords,-1.0*dxtex,1.0*dytex));\n\t  pix[3] = avg_intensity(get_pixel(coords,0.0*dxtex,-1.0*dytex));\n\t  pix[4] = avg_intensity(get_pixel(coords,0.0,0.0*dytex));\n\t  pix[5] = avg_intensity(get_pixel(coords,0.0,1.0*dytex));\n\t  pix[6] = avg_intensity(get_pixel(coords,1.0*dxtex,-1.0*dytex));\n\t  pix[7] = avg_intensity(get_pixel(coords,1.0*dxtex,0.0));\n\t  pix[8] = avg_intensity(get_pixel(coords,1.0*dxtex,1.0*dytex));\n\n\t  // average color differences around neighboring pixels\n\t  delta = (abs(pix[1]-pix[7])+\n\t\t\t  abs(pix[5]-pix[3]) +\n\t\t\t  abs(pix[0]-pix[8])+\n\t\t\t  abs(pix[2]-pix[6])\n\t\t\t   )/4.;\n\n\t  return clamp(5.5*delta,0.0,1.0);\n\t  //return clamp(uEdgeThreshold2*delta,0.0,1.0);\n\t}\n\n\tvoid main()\n\t{\n\t\tHueLevels[0] = 0.0;\n\t\tHueLevels[1] = 30.0/360.;\n\t\tHueLevels[2] = 140.0/360.;\n\t\tHueLevels[3] = 160.0/360.;\n\t\tHueLevels[4] = 240.0/360.;\n\t\tHueLevels[5] = 240.0/360.;\n\t\tHueLevels[6] = 360.0/360.;\n\n\n\t\tvec2 uv = vTexcoordPosition.xy;\n\t\tvec4 tc = vec4(1.0, 0.0, 0.0, 1.0);\n\n\t\tvec3 colorOrg = texture2D(uSampler0, uv).rgb;\n\t\tvec3 vHSV =  rgb2hsv(vec3(colorOrg.r,colorOrg.g,colorOrg.b));\n\t\tvHSV.x = nearestHue(vHSV.x);\n\t\tvHSV.y = nearestSaturation(vHSV.y);\n\t\tvHSV.z = nearestValue(vHSV.z);\n\t\tfloat edg = IsEdge(uv);\n\t\tvec3 vRGB = (edg >= uEdgeThreshold)? vec3(0.0,0.0,0.0):hsv2rgb(vec3(vHSV.x,vHSV.y,vHSV.z));\n\t\ttc = vec4(vRGB.x,vRGB.y,vRGB.z, 1);\n\n\t\tgl_FragColor = tc;\n\t}\n";
SHADER_STRINGS["toon-greenish-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uEdgeThreshold; // 0.2;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\n\tconst float PI = 3.1415926535;\n\n\tvarying vec2 vTexcoordPosition;\n\n\t#define HueLevCount 6\n\t#define SatLevCount 7\n\t#define ValLevCount 4\n\tfloat HueLevels[HueLevCount];\n\tfloat SatLevels[SatLevCount];\n\tfloat ValLevels[ValLevCount];\n\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\tfloat d = q.x - min(q.w, q.y);\n\t\tfloat e = 1.0e-10;\n\t\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\t\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\t\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n\n\tfloat nearestHue(float col)\n\t{\n\t\tfor (int i =1; i<HueLevCount; i++ ) {\n\t\t\tif (col >= HueLevels[i-1] && col <= HueLevels[i]) {\n\t\t\t\treturn HueLevels[i];\n\t\t\t}\n\t\t}\n\t\treturn col;\n\t}\n\n\tfloat nearestSaturation(float col)\n\t{\n\t\tfor (int i =0; i < SatLevCount-1; i++ ) {\n\t\t\tif (col >= 0.166 * float(i) && col <= float(i+1) * 0.166) {\n\t\t\t  return float(i+1) * 0.166;\n\t\t\t}\n\t\t}\n\t\treturn col;\n\t}\n\n\tfloat nearestValue(float col)\n\t{\n\t\tfor (int i =0; i < ValLevCount-1; i++ ) {\n\t\t\tif (col >= 0.33* float(i) && col <= 0.33*float(i+1)) {\n\t\t\t\treturn 0.33*float(i+1);\n\t\t\t}\n\t\t}\n\t\treturn col;\n\t}\n\n\n\t// averaged pixel intensity from 3 color channels\n\tfloat avg_intensity(vec4 pix)\n\t{\n\t return (pix.r + pix.g + pix.b)/3.;\n\t}\n\n\tvec4 get_pixel(vec2 coords, float dx, float dy)\n\t{\n\t return texture2D(uSampler0,coords + vec2(dx, dy));\n\t}\n\n\t// returns pixel color\n\tfloat IsEdge(vec2 coords)\n\t{\n\t  float dxtex = 1.0 /float(uSamplerWidth) ;\n\t  float dytex = 1.0 /float(uSamplerHeight);\n\t  float pix[9];\n\t  int k = -1;\n\t  float delta;\n\n\t  pix[0] = avg_intensity(get_pixel(coords,-1.0*dxtex,-1.0*dytex));\n\t  pix[1] = avg_intensity(get_pixel(coords,-1.0*dxtex,0.0));\n\t  pix[2] = avg_intensity(get_pixel(coords,-1.0*dxtex,1.0*dytex));\n\t  pix[3] = avg_intensity(get_pixel(coords,0.0*dxtex,-1.0*dytex));\n\t  pix[4] = avg_intensity(get_pixel(coords,0.0,0.0*dytex));\n\t  pix[5] = avg_intensity(get_pixel(coords,0.0,1.0*dytex));\n\t  pix[6] = avg_intensity(get_pixel(coords,1.0*dxtex,-1.0*dytex));\n\t  pix[7] = avg_intensity(get_pixel(coords,1.0*dxtex,0.0));\n\t  pix[8] = avg_intensity(get_pixel(coords,1.0*dxtex,1.0*dytex));\n\n\t  // average color differences around neighboring pixels\n\t  delta = (abs(pix[1]-pix[7])+\n\t\t\t  abs(pix[5]-pix[3]) +\n\t\t\t  abs(pix[0]-pix[8])+\n\t\t\t  abs(pix[2]-pix[6])\n\t\t\t   )/4.;\n\n\t  return clamp(5.5*delta,0.0,1.0);\n\t  //return clamp(uEdgeThreshold2*delta,0.0,1.0);\n\t}\n\n\n\tfloat IsEdge2(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[2];\n\t\tvec3 sample;\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\n\t\t// calculate the convolution values for all the masks\n\t\tfloat dp3 = dot(G[0][0], I[0]) + dot(G[0][1], I[1]) + dot(G[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\t\tdp3 = dot(G[1][0], I[0]) + dot(G[1][1], I[1]) + dot(G[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\treturn 0.5 * sqrt(cnv[0]*cnv[0]+cnv[1]*cnv[1]);\n\t}\n\n\tfloat IsEdge3(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[9];\n\t\tvec3 sample;\n\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\t\t// calculate the convolution values for all the masks\n\n\t\tfloat dp3 = dot(G2[0][0], I[0]) + dot(G2[0][1], I[1]) + dot(G2[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[1][0], I[0]) + dot(G2[1][1], I[1]) + dot(G2[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[2][0], I[0]) + dot(G2[2][1], I[1]) + dot(G2[2][2], I[2]);\n\t\tcnv[2] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[3][0], I[0]) + dot(G2[3][1], I[1]) + dot(G2[3][2], I[2]);\n\t\tcnv[3] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[4][0], I[0]) + dot(G2[4][1], I[1]) + dot(G2[4][2], I[2]);\n\t\tcnv[4] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[5][0], I[0]) + dot(G2[5][1], I[1]) + dot(G2[5][2], I[2]);\n\t\tcnv[5] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[6][0], I[0]) + dot(G2[6][1], I[1]) + dot(G2[6][2], I[2]);\n\t\tcnv[6] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[7][0], I[0]) + dot(G2[7][1], I[1]) + dot(G2[7][2], I[2]);\n\t\tcnv[7] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[8][0], I[0]) + dot(G2[8][1], I[1]) + dot(G2[8][2], I[2]);\n\t\tcnv[8] = dp3 * dp3;\n\n\t\tfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]); // Edge detector\n\t\tfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\n\t\t//float M = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]); // Line detector\n\t\t//float S = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]) + (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + cnv[8];\n\n\t\treturn sqrt(M/S);\n\t}\n\n\tvoid main()\n\t{\n\t\tHueLevels[0] = 0.0;\n\t\tHueLevels[1] = 140.0/360.;\n\t\tHueLevels[2] = 160.0/360.;\n\t\tHueLevels[3] = 240.0/360.;\n\t\tHueLevels[4] = 240.0/360.;\n\t\tHueLevels[5] = 360.0/360.;\n\n\n\t\tvec2 uv = vTexcoordPosition.xy;\n\t\tvec4 tc = vec4(1.0, 0.0, 0.0, 1.0);\n\n\t\tvec3 colorOrg = texture2D(uSampler0, uv).rgb;\n\t\tvec3 vHSV =  rgb2hsv(vec3(colorOrg.r,colorOrg.g,colorOrg.b));\n\t\tvHSV.x = nearestHue(vHSV.x);\n\t\tvHSV.y = nearestSaturation(vHSV.y);\n\t\tvHSV.z = nearestValue(vHSV.z);\n\t\tfloat edg = IsEdge3(uv);\n\t\tvec3 vRGB = (edg >= uEdgeThreshold)? vec3(0.0,0.0,0.0):hsv2rgb(vec3(vHSV.x,vHSV.y,vHSV.z));\n\t\ttc = vec4(vRGB.x,vRGB.y,vRGB.z, 1);\n\n\t\tgl_FragColor = tc;\n\t}\n";
SHADER_STRINGS["toon-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tuniform float uEdgeThreshold;\n\tvarying vec2 vTexcoordPosition;\n\n\n\n\tconst int HueLevelCount = 12;\n\tconst int SatLevelCount = 7;\n\tconst int ValLevelCount = 4;\n\tvec4 err_color;\n\tbool limited = false;\n\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\tfloat d = q.x - min(q.w, q.y);\n\t\tfloat e = 1.0e-10;\n\t\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\t\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\t\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n\n\tfloat when_eq(float x, float y) {\n\t  return 1.0 - abs(sign(x - y));\n\t}\n\n\tfloat when_neq(float x, float y) {\n\t  return abs(sign(x - y));\n\t}\n\n\tfloat when_gt(float x, float y) {\n\t  return max(sign(x - y), 0.0);\n\t}\n\n\tfloat when_lt(float x, float y) {\n\t  return max(sign(y - x), 0.0);\n\t}\n\n\tfloat when_ge(float x, float y) {\n\t  return 1.0 - when_lt(x, y);\n\t}\n\n\tfloat when_le(float x, float y) {\n\t  return 1.0 - when_gt(x, y);\n\t}\n\n\tfloat and(float a, float b) {\n\t  return a * b;\n\t}\n\n\tfloat or(float a, float b) {\n\t  return min(a + b, 1.0);\n\t}\n\n\tfloat xor(float a, float b) {\n\t  return mod((a + b), 2.0);\n\t}\n\n\tfloat not(float a) {\n\t  return 1.0 - a;\n\t}\n\n\tfloat nearestHue(float col)\n\t{\n\t\tfloat col1 = 0.0, col2 = 0.0, ret = -1.0, i = 0.0;\n\n\t\tcol1 = 0.0*0.083;\n\t\tcol2 = (0.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 1.0*0.083;\n\t\tcol2 = (1.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 2.0*0.083;\n\t\tcol2 = (2.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 3.0*0.083;\n\t\tcol2 = (3.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 4.0*0.083;\n\t\tcol2 = (4.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 5.0*0.083;\n\t\tcol2 = (5.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 6.0*0.083;\n\t\tcol2 = (6.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 7.0*0.083;\n\t\tcol2 = (7.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 8.0*0.083;\n\t\tcol2 = (8.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 9.0*0.083;\n\t\tcol2 = (9.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 10.0*0.083;\n\t\tcol2 = (10.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 11.0*0.083;\n\t\tcol2 = (11.0+1.0)*0.083;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.03)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.03*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tret += when_eq(ret, -1.0) * (1.0 + col);\n\n\t\treturn clamp(ret, 0.0, 1.0);\n\t}\n\n\tfloat nearestSaturation(float col)\n\t{\n\t\tfloat col1 = 0.0, col2 = 0.0, ret = -1.0, i = 0.0;\n\n\t\tcol1 = 0.0*0.143;\n\t\tcol2 = (0.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 1.0*0.143;\n\t\tcol2 = (1.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 2.0*0.143;\n\t\tcol2 = (2.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 3.0*0.143;\n\t\tcol2 = (3.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 4.0*0.143;\n\t\tcol2 = (4.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 5.0*0.143;\n\t\tcol2 = (5.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 6.0*0.143;\n\t\tcol2 = (6.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tcol1 = 7.0*0.143;\n\t\tcol2 = (7.0+1.0)*0.143;\n\t\tret += and(and(and(when_eq(ret, -1.0), when_lt(col, col1 + 0.06)), when_ge(col, col1)), when_le(col, col2)) * (1.0+(col+(col-col1)/0.06*(col2-col)));\n\t\tret += and(and(when_eq(ret, -1.0), when_ge(col, col1)), when_le(col, col2)) * (1.0 + col2);\n\n\t\tret += when_eq(ret, -1.0) * (1.0 + col);\n\n\t\treturn clamp(ret, 0.0, 1.0);\n\t}\n\n\tfloat nearestValue(float col)\n\t{\n\t\tif (col <= 0.1)\n\t\t\treturn 0.05;\n\t\tfor (int i =0; i < ValLevelCount-1; i++ ) {\n\t\t\tif (col >= 0.3* float(i)+0.1 && col <= 0.3*float(i+1)+0.1) {\n\t\t\t\treturn 0.3*float(i+1);\n\t\t\t}\n\t\t}\n\t\treturn col;\n\t}\n\n\t/* averaged pixel intensity from 3 color channels*/\n\tfloat avg_intensity(vec4 pix) {\n\t return (pix.r + pix.g + pix.b)/3.;\n\t}\n\n\tvec4 get_pixel(vec2 coords, float dx, float dy) {\n\t return texture2D(uSampler0,coords + vec2(dx, dy));\n\t}\n\n\t/*returns pixel color*/\n\tfloat IsEdge(in vec2 coords){\n\t  float dxtex = 1.0 /float(uSamplerWidth);/*float(textureSize(uSampler0,0)*/\n\t  float dytex = 1.0 /float(uSamplerHeight);\n\t  float pix[9];\n\t  float delta;\n\n\t  /* read neighboring pixel intensities*/\n\t  pix[0] = avg_intensity(get_pixel(coords,-1.0*dxtex,-1.0*dytex));\n\t  pix[1] = avg_intensity(get_pixel(coords,-1.0*dxtex,0.0));\n\t  pix[2] = avg_intensity(get_pixel(coords,-1.0*dxtex,1.0*dytex));\n\t  pix[3] = avg_intensity(get_pixel(coords,0.0*dxtex,-1.0*dytex));\n\t  pix[4] = avg_intensity(get_pixel(coords,0.0,0.0*dytex));\n\t  pix[5] = avg_intensity(get_pixel(coords,0.0,1.0*dytex));\n\t  pix[6] = avg_intensity(get_pixel(coords,1.0*dxtex,-1.0*dytex));\n\t  pix[7] = avg_intensity(get_pixel(coords,1.0*dxtex,0.0));\n\t  pix[8] = avg_intensity(get_pixel(coords,1.0*dxtex,1.0*dytex));\n\n\n\t  /* average color differences around neighboring pixels*/\n\t  delta = (abs(pix[1]-pix[7])+\n\t\t\t  abs(pix[5]-pix[3]) +\n\t\t\t  abs(pix[0]-pix[8])+\n\t\t\t  abs(pix[2]-pix[6])\n\t\t\t   )/4.;\n\n\t  return clamp(5.5*delta,0.0,1.0);\n\t}\n\n\tfloat IsEdge2(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[2];\n\t\tvec3 sample;\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\n\t\t// calculate the convolution values for all the masks\n\t\tfloat dp3 = dot(G[0][0], I[0]) + dot(G[0][1], I[1]) + dot(G[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\t\tdp3 = dot(G[1][0], I[0]) + dot(G[1][1], I[1]) + dot(G[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\treturn 0.5 * sqrt(cnv[0]*cnv[0]+cnv[1]*cnv[1]);\n\t}\n\n\tfloat IsEdge3(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[9];\n\t\tvec3 sample;\n\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\t\t// calculate the convolution values for all the masks\n\n\t\tfloat dp3 = dot(G2[0][0], I[0]) + dot(G2[0][1], I[1]) + dot(G2[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[1][0], I[0]) + dot(G2[1][1], I[1]) + dot(G2[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[2][0], I[0]) + dot(G2[2][1], I[1]) + dot(G2[2][2], I[2]);\n\t\tcnv[2] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[3][0], I[0]) + dot(G2[3][1], I[1]) + dot(G2[3][2], I[2]);\n\t\tcnv[3] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[4][0], I[0]) + dot(G2[4][1], I[1]) + dot(G2[4][2], I[2]);\n\t\tcnv[4] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[5][0], I[0]) + dot(G2[5][1], I[1]) + dot(G2[5][2], I[2]);\n\t\tcnv[5] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[6][0], I[0]) + dot(G2[6][1], I[1]) + dot(G2[6][2], I[2]);\n\t\tcnv[6] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[7][0], I[0]) + dot(G2[7][1], I[1]) + dot(G2[7][2], I[2]);\n\t\tcnv[7] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[8][0], I[0]) + dot(G2[8][1], I[1]) + dot(G2[8][2], I[2]);\n\t\tcnv[8] = dp3 * dp3;\n\n\t\tfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]); // Edge detector\n\t\tfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\n\t\t//float M = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]); // Line detector\n\t\t//float S = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]) + (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + cnv[8];\n\n\t\treturn sqrt(M/S);\n\t}\n\n\tvoid main()\n\t{\n\t\tlimited = false;\n\n\t\tvec4 colorOrg = texture2D( uSampler0, vTexcoordPosition );\n\t\tvec3 vHSV =  rgb2hsv(vec3(colorOrg.r,colorOrg.g,colorOrg.b));\n\t\tvHSV.x = nearestHue(vHSV.x);\n\t\tvHSV.y = nearestSaturation(vHSV.y);\n\t\tvHSV.z = nearestValue(vHSV.z);\n\t\tfloat edg = IsEdge3(vTexcoordPosition);\n\n\t\tvec3 vRGB = (edg >= uEdgeThreshold)? vec3(0.0,0.0,0.0):hsv2rgb(vec3(vHSV.x,vHSV.y,vHSV.z));\n\n\t\tgl_FragColor = vec4(vRGB.x,vRGB.y,vRGB.z,1.0);\n\t}\n";
SHADER_STRINGS["a-sketch-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform sampler2D uSampler1;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tuniform float uSharpnessVal;\n\tvarying vec2 vTexcoordPosition;\n\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\tfloat d = q.x - min(q.w, q.y);\n\t\tfloat e = 1.0e-10;\n\t\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\t\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\t\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n\n\t/* averaged pixel intensity from 3 color channels*/\n\tfloat avg_intensity(vec4 pix) {\n\t return (pix.r + pix.g + pix.b)/3.;\n\t}\n\n\tvec4 get_pixel(vec2 coords, float dx, float dy) {\n\t return texture2D(uSampler0,coords + vec2(dx, dy));\n\t}\n\n\t/*returns pixel color*/\n\tfloat IsEdge(in vec2 coords){\n\t  float dxtex = 1.0 /float(uSamplerWidth);/*float(textureSize(uSampler0,0)*/\n\t  float dytex = 1.0 /float(uSamplerHeight);\n\t  float pix[9];\n\t  float delta;\n\n\t  /* read neighboring pixel intensities*/\n\t  pix[0] = avg_intensity(get_pixel(coords,-1.0*dxtex,-1.0*dytex));\n\t  pix[1] = avg_intensity(get_pixel(coords,-1.0*dxtex,0.0));\n\t  pix[2] = avg_intensity(get_pixel(coords,-1.0*dxtex,1.0*dytex));\n\t  pix[3] = avg_intensity(get_pixel(coords,0.0*dxtex,-1.0*dytex));\n\t  pix[4] = avg_intensity(get_pixel(coords,0.0,0.0*dytex));\n\t  pix[5] = avg_intensity(get_pixel(coords,0.0,1.0*dytex));\n\t  pix[6] = avg_intensity(get_pixel(coords,1.0*dxtex,-1.0*dytex));\n\t  pix[7] = avg_intensity(get_pixel(coords,1.0*dxtex,0.0));\n\t  pix[8] = avg_intensity(get_pixel(coords,1.0*dxtex,1.0*dytex));\n\n\n\t  /* average color differences around neighboring pixels*/\n\t  delta = (abs(pix[1]-pix[7])+\n\t\t\t  abs(pix[5]-pix[3]) +\n\t\t\t  abs(pix[0]-pix[8])+\n\t\t\t  abs(pix[2]-pix[6])\n\t\t\t   )/4.;\n\n\t  return clamp(5.5*delta,0.0,1.0);\n\t}\n\n\tfloat IsEdge2(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[2];\n\t\tvec3 sample;\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\n\t\t// calculate the convolution values for all the masks\n\t\tfloat dp3 = dot(G[0][0], I[0]) + dot(G[0][1], I[1]) + dot(G[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\t\tdp3 = dot(G[1][0], I[0]) + dot(G[1][1], I[1]) + dot(G[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\treturn 0.5 * sqrt(cnv[0]*cnv[0]+cnv[1]*cnv[1]);\n\t}\n\n\tfloat IsEdge3(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[9];\n\t\tvec3 sample;\n\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\t\t// calculate the convolution values for all the masks\n\n\t\tfloat dp3 = dot(G2[0][0], I[0]) + dot(G2[0][1], I[1]) + dot(G2[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[1][0], I[0]) + dot(G2[1][1], I[1]) + dot(G2[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[2][0], I[0]) + dot(G2[2][1], I[1]) + dot(G2[2][2], I[2]);\n\t\tcnv[2] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[3][0], I[0]) + dot(G2[3][1], I[1]) + dot(G2[3][2], I[2]);\n\t\tcnv[3] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[4][0], I[0]) + dot(G2[4][1], I[1]) + dot(G2[4][2], I[2]);\n\t\tcnv[4] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[5][0], I[0]) + dot(G2[5][1], I[1]) + dot(G2[5][2], I[2]);\n\t\tcnv[5] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[6][0], I[0]) + dot(G2[6][1], I[1]) + dot(G2[6][2], I[2]);\n\t\tcnv[6] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[7][0], I[0]) + dot(G2[7][1], I[1]) + dot(G2[7][2], I[2]);\n\t\tcnv[7] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[8][0], I[0]) + dot(G2[8][1], I[1]) + dot(G2[8][2], I[2]);\n\t\tcnv[8] = dp3 * dp3;\n\n\t\tfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]); // Edge detector\n\t\tfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\n\t\t//float M = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]); // Line detector\n\t\t//float S = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]) + (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + cnv[8];\n\n\t\treturn sqrt(M/S);\n\t}\n\n\tvec3 clamp_grey_scale_color(vec3 col)\n\t{\n\t\tfloat grey = (col.r + col.g + col.b) / 3.0;\n\t\tfloat finalGrey = -1.0;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey > 0.95) * 2.0;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey < 0.1) * 1.1;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.1 && grey <= 0.23) * 1.23;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.23 && grey <= 0.4) * 1.4;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.4 && grey <= 0.5) * 1.5;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.5 && grey <= 0.95) * 1.95;\n\t\treturn vec3(finalGrey, finalGrey, finalGrey);\n\t}\n\n\tvoid main()\n\t{\n\t\tvec4 colorOrg = texture2D( uSampler0, vTexcoordPosition );\n\t\tconst float contrast = 1.1;\n\t\tconst float saturation = 1.1;\n\t\tconst float brightness = 0.1;\n\t\t//colorOrg.rgb = (colorOrg.rgb-vec3(0.5))*contrast + vec3(0.5);\n\t\t//colorOrg.rgb*=saturation;\n\t\t//colorOrg.rgb+=brightness;\n\n\t\tfloat edg = IsEdge2(vTexcoordPosition);\n\t\tif (edg >= uSharpnessVal)\n\t\t\tgl_FragColor = vec4(0.3, 0.3, 0.3, 1.0);\n\t\telse{\n\t\t\tvec3 col = clamp_grey_scale_color(colorOrg.rgb);\n\n\t\t\t\tcol = vec3(1.0) - ((vec3(1.0) - col)*texture2D(uSampler1, vTexcoordPosition).rgb);\n\n\t\t\tgl_FragColor = vec4(col, 1.0);\n\t\t}\n\t}\n";
SHADER_STRINGS["a-sketch2-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform sampler2D uSampler1;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tuniform float uSharpnessVal;\n\tuniform float uVal1;\n\tuniform float uVal2;\n\tuniform float uVal3;\n\tvarying vec2 vTexcoordPosition;\n\n\tvec3 rgb2hsv(vec3 c)\n\t{\n\t\tvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\t\tvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n\t\tvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n\t\tfloat d = q.x - min(q.w, q.y);\n\t\tfloat e = 1.0e-10;\n\t\treturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n\t}\n\n\tvec3 hsv2rgb(vec3 c)\n\t{\n\t\tvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n\t\tvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n\t\treturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n\t}\n\n\t/* averaged pixel intensity from 3 color channels*/\n\tfloat avg_intensity(vec4 pix) {\n\t return (pix.r + pix.g + pix.b)/3.;\n\t}\n\n\tvec4 get_pixel(vec2 coords, float dx, float dy) {\n\t return texture2D(uSampler0,coords + vec2(dx, dy));\n\t}\n\n\t/*returns pixel color*/\n\tfloat IsEdge(in vec2 coords){\n\t  float dxtex = 1.0 /float(uSamplerWidth);/*float(textureSize(uSampler0,0)*/\n\t  float dytex = 1.0 /float(uSamplerHeight);\n\t  float pix[9];\n\t  float delta;\n\n\t  /* read neighboring pixel intensities*/\n\t  pix[0] = avg_intensity(get_pixel(coords,-1.0*dxtex,-1.0*dytex));\n\t  pix[1] = avg_intensity(get_pixel(coords,-1.0*dxtex,0.0));\n\t  pix[2] = avg_intensity(get_pixel(coords,-1.0*dxtex,1.0*dytex));\n\t  pix[3] = avg_intensity(get_pixel(coords,0.0*dxtex,-1.0*dytex));\n\t  pix[4] = avg_intensity(get_pixel(coords,0.0,0.0*dytex));\n\t  pix[5] = avg_intensity(get_pixel(coords,0.0,1.0*dytex));\n\t  pix[6] = avg_intensity(get_pixel(coords,1.0*dxtex,-1.0*dytex));\n\t  pix[7] = avg_intensity(get_pixel(coords,1.0*dxtex,0.0));\n\t  pix[8] = avg_intensity(get_pixel(coords,1.0*dxtex,1.0*dytex));\n\n\n\t  /* average color differences around neighboring pixels*/\n\t  delta = (abs(pix[1]-pix[7])+\n\t\t\t  abs(pix[5]-pix[3]) +\n\t\t\t  abs(pix[0]-pix[8])+\n\t\t\t  abs(pix[2]-pix[6])\n\t\t\t   )/4.;\n\n\t  return clamp(5.5*delta,0.0,1.0);\n\t}\n\n\tfloat IsEdge2(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[2];\n\t\tvec3 sample;\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, coords + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\n\t\t// calculate the convolution values for all the masks\n\t\tfloat dp3 = dot(G[0][0], I[0]) + dot(G[0][1], I[1]) + dot(G[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\t\tdp3 = dot(G[1][0], I[0]) + dot(G[1][1], I[1]) + dot(G[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\treturn 0.5 * sqrt(cnv[0]*cnv[0]+cnv[1]*cnv[1]);\n\t}\n\n\tfloat IsEdge3(in vec2 coords)\n\t{\n\t\tmat3 G[2];\n\t\tmat3 G2[9];\n\n\t\tG[0] = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\n\t\tG[1] = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\n\n\t\tG2[0] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, sqrt(2.0), 1.0, 0.0, 0.0, 0.0, -1.0, -sqrt(2.0), -1.0 );\n\t\tG2[1] = 1.0/(2.0*sqrt(2.0)) * mat3( 1.0, 0.0, -1.0, sqrt(2.0), 0.0, -sqrt(2.0), 1.0, 0.0, -1.0 );\n\t\tG2[2] = 1.0/(2.0*sqrt(2.0)) * mat3( 0.0, -1.0, sqrt(2.0), 1.0, 0.0, -1.0, -sqrt(2.0), 1.0, 0.0 );\n\t\tG2[3] = 1.0/(2.0*sqrt(2.0)) * mat3( sqrt(2.0), -1.0, 0.0, -1.0, 0.0, 1.0, 0.0, 1.0, -sqrt(2.0) );\n\t\tG2[4] = 1.0/2.0 * mat3( 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0 );\n\t\tG2[5] = 1.0/2.0 * mat3( -1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0 );\n\t\tG2[6] = 1.0/6.0 * mat3( 1.0, -2.0, 1.0, -2.0, 4.0, -2.0, 1.0, -2.0, 1.0 );\n\t\tG2[7] = 1.0/6.0 * mat3( -2.0, 1.0, -2.0, 1.0, 4.0, 1.0, -2.0, 1.0, -2.0 );\n\t\tG2[8] = 1.0/3.0 * mat3( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );\n\n\t\tfloat texelWidth = 1.0/uSamplerWidth;\n\t\tfloat texelHeight = 1.0/uSamplerHeight;\n\n\t\tmat3 I;\n\t\tfloat cnv[9];\n\t\tvec3 sample;\n\n\t\t// fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,-texelHeight)).rgb;\n\t\tI[0][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,0)).rgb;\n\t\tI[0][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-texelWidth,texelHeight)).rgb;\n\t\tI[0][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,-texelHeight)).rgb;\n\t\tI[1][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition).rgb;\n\t\tI[1][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0,texelHeight)).rgb;\n\t\tI[1][2] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,-texelHeight)).rgb;\n\t\tI[2][0] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,0)).rgb;\n\t\tI[2][1] = length(sample);\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(texelWidth,texelHeight)).rgb;\n\t\tI[2][2] = length(sample);\n\n\t\t// calculate the convolution values for all the masks\n\n\t\tfloat dp3 = dot(G2[0][0], I[0]) + dot(G2[0][1], I[1]) + dot(G2[0][2], I[2]);\n\t\tcnv[0] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[1][0], I[0]) + dot(G2[1][1], I[1]) + dot(G2[1][2], I[2]);\n\t\tcnv[1] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[2][0], I[0]) + dot(G2[2][1], I[1]) + dot(G2[2][2], I[2]);\n\t\tcnv[2] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[3][0], I[0]) + dot(G2[3][1], I[1]) + dot(G2[3][2], I[2]);\n\t\tcnv[3] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[4][0], I[0]) + dot(G2[4][1], I[1]) + dot(G2[4][2], I[2]);\n\t\tcnv[4] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[5][0], I[0]) + dot(G2[5][1], I[1]) + dot(G2[5][2], I[2]);\n\t\tcnv[5] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[6][0], I[0]) + dot(G2[6][1], I[1]) + dot(G2[6][2], I[2]);\n\t\tcnv[6] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[7][0], I[0]) + dot(G2[7][1], I[1]) + dot(G2[7][2], I[2]);\n\t\tcnv[7] = dp3 * dp3;\n\n\t\tdp3 = dot(G2[8][0], I[0]) + dot(G2[8][1], I[1]) + dot(G2[8][2], I[2]);\n\t\tcnv[8] = dp3 * dp3;\n\n\t\tfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]); // Edge detector\n\t\tfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\n\t\t//float M = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]); // Line detector\n\t\t//float S = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]) + (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + cnv[8];\n\n\t\treturn sqrt(M/S);\n\t}\n\n\tvec3 clamp_grey_scale_color(vec3 col)\n\t{\n\t\tfloat grey = (col.r + col.g + col.b) / 3.0;\n\t\tfloat finalGrey = -1.0;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey > 0.95) * 2.0;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey < 0.1) * 1.1;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.1 && grey <= 0.23) * 1.23;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.23 && grey <= 0.4) * 1.4;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.4 && grey <= 0.5) * 1.5;\n\t\tfinalGrey += float(finalGrey == -1.0 && grey >= 0.5 && grey <= 0.95) * 1.95;\n\t\treturn vec3(finalGrey, finalGrey, finalGrey);\n\t}\n\n\tvec3 get_sketch_color(vec2 uv,vec3 col)\n\t{\n\t\t//uv *= vec2(0.5, 0.5);\n\t\tuv = mod(uv, vec2(0.5, 0.5));\n\t\tfloat val = (col.r + col.g + col.b)/3.0;\n\n\t\tif (val >= uVal1) // 0,5\n\t\t\tuv += vec2(0, 0);\n\t\telse if (val >= uVal2) // 0.45\n\t\t\tuv += vec2(0.5, 0);\n\t\telse if (val >= uVal3) // 0.3\n\t\t\tuv += vec2(0.0, 0.5);\n\t\telse\n\t\t\tuv += vec2(0.5, 0.5);/*\n\t\tvec3 outa = texture2D(uSampler1, uv).rgb;\n\t\tfloat outVal = (outa.x+outa.y+outa.z)/3.0;\n\t\treturn (uVal1 < outVal ? outa : col);*/\n\t\treturn texture2D(uSampler1, uv).rgb;\n\t}\n\n\tvoid main()\n\t{\n\t\tvec4 colorOrg = texture2D( uSampler0, vTexcoordPosition );\n\n\t\tfloat edg = IsEdge2(vTexcoordPosition);\n\t\tif (edg >= uSharpnessVal)\n\t\t\tgl_FragColor = vec4(0.3, 0.3, 0.3, 1.0);\n\t\telse{\n\t\t\t//vec3 col = clamp_grey_scale_color(colorOrg.rgb);\n\n\t\t\t//\tcol = vec3(1.0) - ((vec3(1.0) - col)*texture2D(uSampler1, vTexcoordPosition).rgb);\n\n\t\t\tgl_FragColor = vec4(get_sketch_color(vTexcoordPosition.xy, colorOrg.rgb), 1.0);\n\t\t}\n\t}\n";
SHADER_STRINGS["radial-wave-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uAmplitude;\n\tuniform float uWaveLength;\n\tuniform vec2 uWaveCenter;\n\n\tconst float PI = 3.1415926535;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main()\n\t{\n\t\tfloat d = (length(vTexcoordPosition - uWaveCenter)/uWaveLength)*2.0*PI;\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition+vec2(sin(d),sin(d))*uAmplitude);\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["vertical-denoise-shader-fs"] =
    "\n\tprecision mediump float;\n\tuniform sampler2D uSampler0;\n\tuniform float uExponent;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tvarying vec2 vTexcoordPosition;\n\tvoid main() {\n\t\tvec4 center = texture2D(uSampler0, vTexcoordPosition);\n\t\tvec4 color = vec4(0.0);\n\t\tfloat total = 0.0;\n\n\t\tvec4 sample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, -4.0/uSamplerHeight));\n\t\tfloat weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, -3.0/uSamplerHeight));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, -2.0/uSamplerHeight));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, -1.0/uSamplerHeight));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition);\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, 1.0/uSamplerHeight));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, 2.0/uSamplerHeight));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, 3.0/uSamplerHeight));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(0.0, 4.0/uSamplerHeight));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tgl_FragColor = color / total;\n\t}\n";
SHADER_STRINGS["horizontal-denoise-shader-fs"] =
    "\n\tprecision mediump float;\n\tuniform sampler2D uSampler0;\n\tuniform float uExponent;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tvarying vec2 vTexcoordPosition;\n\tvoid main() {\n\t\tvec4 center = texture2D(uSampler0, vTexcoordPosition);\n\t\tvec4 color = vec4(0.0);\n\t\tfloat total = 0.0;\n\n\t\tvec4 sample = texture2D(uSampler0, vTexcoordPosition + vec2(-4.0/uSamplerWidth, 0));\n\t\tfloat weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-3.0/uSamplerWidth, 0));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-2.0/uSamplerWidth, 0));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(-1.0/uSamplerWidth, 0));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition);\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(1.0/uSamplerWidth, 0));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(2.0/uSamplerWidth, 0));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(3.0/uSamplerWidth, 0));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + vec2(4.0/uSamplerWidth, 0));\n\t\tweight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n\t\tweight = pow(weight, uExponent);\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tgl_FragColor = color / total;\n\t}\n";
SHADER_STRINGS["sketch-shader-fs0"] =
    "\n\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nuniform sampler2D uSampler2;\nvarying vec2 vTexcoordPosition;\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\nvec3 color;\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec4 texColour = texture2D(uSampler1,vTexcoordPosition);\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\nfloat gray = dot(sample4, W);\nif (gray > 0.20)\ncolor= vec3(1.0);\nelse if (gray > 0.05){\ncolor = texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0  + 0.5)).rgb;\nvec4 color2;\nvec4 color1;\ncolor2= vec4(color, 1.0);\ncolor1 = vec4(1.0*gray, 1.0*gray, 1.0*gray, 0.8);\ncolor = (color1 * (color2.a * (color1 / color1.a) + (2.0 * color2 * (1.0 - (color1 / color1.a)))) + color2 * (1.0 - color1.a) + color1 * (1.0 - color2.a)).rgb;\n}\nelse\ncolor = vec3(0.0);\ngl_FragColor = vec4(color, 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs1"] =
    "\n\n\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nuniform sampler2D uSampler2;\nvarying vec2 vTexcoordPosition;\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\nvec3 color;\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec4 texColour = texture2D(uSampler1,vTexcoordPosition);\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\nfloat gray = dot(sample4, W);\nif(gray > 0.30)\ncolor = vec3(1.0);\nelse if (gray > 0.20)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.11)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.04)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0 + 0.5)).rgb;\nelse\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0  + 0.5)).rgb;\ngl_FragColor = vec4(color, 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs2"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nuniform sampler2D uSampler2;\nvarying vec2 vTexcoordPosition;\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\nvec3 color;\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec4 texColour = texture2D(uSampler1,vTexcoordPosition);\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\nfloat gray = dot(sample4, W);\nif(gray > 0.70)\ncolor = vec3(1.0);\nelse if (gray > 0.38)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.15)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.03)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0 + 0.5)).rgb;\nelse\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0 + 0.5)).rgb;\nif (gray < 0.03){\nvec4 color1;\nvec4 color2;\ncolor1= vec4(color, 1.0);\ncolor2 = vec4(gray, gray, gray, 0.6);\nfloat r;\nif (2.0 * color2.r < color2.a) {\n r = 2.0 * color2.r * color1.r + color2.r * (1.0 - color1.a) + color1.r * (1.0 - color2.a);\n} else {\n r = color2.a * color1.a - 2.0 * (color1.a - color1.r) * (color2.a - color2.r) + color2.r * (1.0 - color1.a) + color1.r * (1.0 - color2.a);\n}\nfloat g;\nif (2.0 * color2.g < color2.a) {\n g = 2.0 * color2.g * color1.g + color2.g * (1.0 - color1.a) + color1.g * (1.0 - color2.a);\n} else {\n g = color2.a * color1.a - 2.0 * (color1.a - color1.g) * (color2.a - color2.g) + color2.g * (1.0 - color1.a) + color1.g * (1.0 - color2.a);\n}\nfloat b;\nif (2.0 * color2.b < color2.a) {\n b = 2.0 * color2.b * color1.b + color2.b * (1.0 - color1.a) + color1.b * (1.0 - color2.a);\n} else {\n b = color2.a * color1.a - 2.0 * (color1.a - color1.b) * (color2.a - color2.b) + color2.b * (1.0 - color1.a) + color1.b * (1.0 - color2.a);\n}\ncolor = vec3(r,g,b);\n}\ngl_FragColor = vec4(color, 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs3"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nuniform sampler2D uSampler2;\nvarying vec2 vTexcoordPosition;\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\nvec3 color;\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec4 texColour = texture2D(uSampler1,vTexcoordPosition);\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\nfloat gray = dot(sample4, W);\nif(gray > 0.75)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.50)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.25)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0 + 0.5)).rgb;\nelse\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0  + 0.5)).rgb;\ngl_FragColor = vec4(color, 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs4"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nuniform sampler2D uSampler2;\nvarying vec2 vTexcoordPosition;\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\nvec3 color;\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec4 texColour = texture2D(uSampler1,vTexcoordPosition);\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\nfloat gray = dot(sample4, W);\nif(gray > 0.75)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.50)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0)).rgb;\nelse if (gray > 0.25)\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0, vTexcoordPosition.y/2.0 + 0.5)).rgb;\nelse if (gray > 0.05)\n{\ncolor= texture2D(uSampler1, vec2(vTexcoordPosition.x/2.0 + 0.5, vTexcoordPosition.y/2.0 + 0.5)).rgb;\nvec4 color1;\nvec4 color2;\ncolor2= vec4(color, 0.8);\ncolor1 = vec4(gray, gray, gray, 1.0);\nfloat r;\nif (2.0 * color2.r < color2.a) {\n r = 2.0 * color2.r * color1.r + color2.r * (1.0 - color1.a) + color1.r * (1.0 - color2.a);\n} else {\n r = color2.a * color1.a - 2.0 * (color1.a - color1.r) * (color2.a - color2.r) + color2.r * (1.0 - color1.a) + color1.r * (1.0 - color2.a);\n}\nfloat g;\nif (2.0 * color2.g < color2.a) {\n g = 2.0 * color2.g * color1.g + color2.g * (1.0 - color1.a) + color1.g * (1.0 - color2.a);\n} else {\n g = color2.a * color1.a - 2.0 * (color1.a - color1.g) * (color2.a - color2.g) + color2.g * (1.0 - color1.a) + color1.g * (1.0 - color2.a);\n}\nfloat b;\nif (2.0 * color2.b < color2.a) {\n b = 2.0 * color2.b * color1.b + color2.b * (1.0 - color1.a) + color1.b * (1.0 - color2.a);\n} else {\n b = color2.a * color1.a - 2.0 * (color1.a - color1.b) * (color2.a - color2.b) + color2.b * (1.0 - color1.a) + color1.b * (1.0 - color2.a);\n}\ncolor = vec3(r,g,b);\n}\nelse\ncolor = vec3(0.0);\ngl_FragColor = vec4(color, 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs5"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\nvoid main(){\nvec3 sample = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nfloat gray = dot(sample, W);\nif (gray > 0.3){\nvec4 texColour = texture2D(uSampler0,vTexcoordPosition);\nfloat blueColor = texColour.b * 63.0;\nvec2 quad1;\nquad1.y = floor(floor(blueColor) / 8.0);\nquad1.x = floor(blueColor) - (quad1.y * 8.0);\nvec2 quad2;\nquad2.y = floor(ceil(blueColor) / 8.0);\nquad2.x = ceil(blueColor) - (quad2.y * 8.0);\nvec2 texPos1;\ntexPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.r);\ntexPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.g);\nvec2 texPos2;\ntexPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.r);\ntexPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.g);\nvec4 newColor1 = texture2D(uSampler1, texPos1);\nvec4 newColor2 = texture2D(uSampler1, texPos2);\nvec4 newColor = mix(newColor1, newColor2, fract(blueColor));\ngl_FragColor = vec4(newColor.rgb, texColour.a);\n}else{\nmat4 mat = mat4(vec4(1.0, 0.0,\t0.0, 0.2), vec4(0.0, 1.0, 0.0, 0.2), vec4(0.0,\t0.0, 1.0, 0.2), vec4(0.0, 0.0,\t0.0, 1.0));\nvec4 color = texture2D(uSampler0,vTexcoordPosition);\nvec4 matrixResult = vec4(color.rgb, 1.0) * mat;\ngl_FragColor = vec4(matrixResult.rgb, color.a);}\n}\n";
SHADER_STRINGS["sketch-shader-fs6"] =
    "\n\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nmediump float lum(lowp vec3 c) {\nreturn dot(c, vec3(0.3, 0.59, 0.11));\n}\nvec3 setlum(lowp vec3 c, mediump float l2) {\nfloat d = l2 - lum(c);\nc = c + vec3(d);\nfloat l = lum(c);\nfloat n = min(min(c.r, c.g), c.b);\nfloat x = max(max(c.r, c.g), c.b);\nif (n < 0.0) {\nc.r = l + ((c.r - l) * l) / (l - n);\nc.g = l + ((c.g - l) * l) / (l - n);\nc.b = l + ((c.b - l) * l) / (l - n);\n}\nif (x > 1.0) {\nc.r = l + ((c.r - l) * (1.0 - l)) / (x - l);\nc.g = l + ((c.g - l) * (1.0 - l)) / (x - l);\nc.b = l + ((c.b - l) * (1.0 - l)) / (x - l);\n}\nreturn c;\n}\nvoid main(){\nvec4 color1 = texture2D(uSampler0,vTexcoordPosition);\nvec4 color2 = texture2D(uSampler1,vTexcoordPosition);\ngl_FragColor = vec4(color1.rgb * (1.0 - color2.a) + setlum(color2.rgb, lum(color1.rgb)) * color2.a, color1.a);\n}\n";
SHADER_STRINGS["sketch-shader-fs7"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 color1 = texture2D(uSampler0,vTexcoordPosition);\nvec4 color2 = texture2D(uSampler1,vTexcoordPosition);\nfloat r;\nif (2.0 * color1.r < color1.a) {\n r = 2.0 * color2.r * color1.r + color2.r * (1.0 - color1.a) + color1.r * (1.0 - color2.a);\n} else {\n r = color2.a * color1.a - 2.0 * (color1.a - color1.r) * (color2.a - color2.r) + color2.r * (1.0 - color1.a) + color1.r * (1.0 - color2.a);\n}\nfloat g;\nif (2.0 * color1.g < color1.a) {\n g = 2.0 * color2.g * color1.g + color2.g * (1.0 - color1.a) + color1.g * (1.0 - color2.a);\n} else {\n g = color2.a * color1.a - 2.0 * (color1.a - color1.g) * (color2.a - color2.g) + color2.g * (1.0 - color1.a) + color1.g * (1.0 - color2.a);\n}\nfloat b;\nif (2.0 * color1.b < color1.a) {\n b = 2.0 * color2.b * color1.b + color2.b * (1.0 - color1.a) + color1.b * (1.0 - color2.a);\n} else {\n b = color2.a * color1.a - 2.0 * (color1.a - color1.b) * (color2.a - color2.b) + color2.b * (1.0 - color1.a) + color1.b * (1.0 - color2.a);\n}\ngl_FragColor = vec4(r, g, b, 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs8"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 color1 = texture2D(uSampler0,vTexcoordPosition);\nvec4 color2 = texture2D(uSampler1,vTexcoordPosition);\ngl_FragColor = color1 * (color2.a * (color1 / color1.a) + (2.0 * color2 * (1.0 - (color1 / color1.a)))) + color2 * (1.0 - color1.a) + color1 * (1.0 - color2.a);\n}\n";
SHADER_STRINGS["sketch-shader-fs9"] =
    "\n\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 color1 = texture2D(uSampler0,vTexcoordPosition);\nvec4 color2 = texture2D(uSampler1,vTexcoordPosition);\ngl_FragColor = color2 * color1 + color2 * (1.0 - color1.a) + color1 * (1.0 - color2.a);\n}\n";
SHADER_STRINGS["sketch-shader-fs10"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 color1 = texture2D(uSampler0,vTexcoordPosition);\nvec4 color2 = texture2D(uSampler1,vTexcoordPosition);\ngl_FragColor = vec4(clamp(color1.rgb + color2.rgb - vec3(1.0), vec3(0.0), vec3(1.0)), color1.a);\n}\n";
SHADER_STRINGS["sketch-shader-fs11"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 color1 = texture2D(uSampler0,vTexcoordPosition);\nvec4 color2 = texture2D(uSampler1,vTexcoordPosition);\ngl_FragColor = vec4(min(color2.rgb * color1.a, color1.rgb * color2.a) + color2.rgb * (1.0 - color1.a) + color1.rgb * (1.0 - color2.a), 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs12"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 color1 = texture2D(uSampler0,vTexcoordPosition);\nvec4 color2 = texture2D(uSampler1,vTexcoordPosition);\nvec4 whiteColor = vec4(1.0);\ngl_FragColor = whiteColor - (whiteColor - color1) / color2;\n}\n";
SHADER_STRINGS["sketch-shader-fs13"] =
    "\n\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 luminance = texture2D(uSampler0,vTexcoordPosition);\nvec4 blur = texture2D(uSampler1,vTexcoordPosition);\ngl_FragColor = vec4(vec3(step(blur - 0.05, luminance)), 1.0);\n}\n";
SHADER_STRINGS["sketch-shader-fs14"] =
    "\n\nprecision mediump float;\nuniform sampler2D uSampler0;\nuniform sampler2D uSampler1;\nvarying vec2 vTexcoordPosition;\nvoid main(){\nvec4 texColour = texture2D(uSampler0,vTexcoordPosition);\nfloat blueColor = texColour.b * 63.0;\nvec2 quad1;\nquad1.y = floor(floor(blueColor) / 8.0);\nquad1.x = floor(blueColor) - (quad1.y * 8.0);\nvec2 quad2;\nquad2.y = floor(ceil(blueColor) / 8.0);\nquad2.x = ceil(blueColor) - (quad2.y * 8.0);\nvec2 texPos1;\ntexPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.r);\ntexPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.g);\nvec2 texPos2;\ntexPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.r);\ntexPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * texColour.g);\nvec4 newColor1 = texture2D(uSampler1, texPos1);\nvec4 newColor2 = texture2D(uSampler1, texPos2);\nvec4 newColor = mix(newColor1, newColor2, fract(blueColor));\ngl_FragColor = vec4(newColor.rgb, texColour.a);\n}\n";
SHADER_STRINGS["effects-shader-fs0"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\n\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nvec3 StripsPattern(vec2 position)\n{\nvec2 p = (position - 0.5) * 500.;\n\nfloat angle = 0.7;\nvec2 direction = vec2(cos(angle), sin(angle));\n\nfloat brightness = cos(dot(p, direction));\nvec3 color = vec3(1.-brightness);\n\n\nfloat gray = dot(color, W);\nif(gray > 0.5)\nreturn vec3(220./255., 220./255., 220./255.);\nelse\nreturn vec3(120./255., 120./255., 120./255.);\n}\n\nvoid main()\n{\nvec3 color;\n\n//find the edge and draw\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\n\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\n\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\n\nfloat gray = dot(sample4, W);\n\nif (border.r > 0.5 || border.g > 0.5 || border.b > 0.5){\ncolor = vec3(0.0) ;\n}else{\nif(gray < 0.25)\ncolor = vec3(120./255., 20./255., 20./255.);\nelse if(gray >= 0.25 && gray < 0.4)\ncolor = vec3(20./255., 20./255., 120./255.);\nelse\ncolor = vec3(1.);\n}\n\ngl_FragColor = vec4(color, 1.0);\n}\n\n\n";
SHADER_STRINGS["effects-shader-fs1"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\n\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nvec3 StripsPattern(vec2 position)\n{\nvec2 p = (position - 0.5) * 500.;\n\nfloat angle = 0.7;\nvec2 direction = vec2(cos(angle), sin(angle));\n\nfloat brightness = cos(dot(p, direction));\nvec3 color = vec3(1.-brightness);\n\n\nfloat gray = dot(color, W);\nif(gray > 0.5)\nreturn vec3(220./255., 220./255., 220./255.);\nelse\nreturn vec3(120./255., 120./255., 120./255.);\n}\n\nvoid main()\n{\nvec3 color;\n\n//find the edge and draw\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\n\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\n\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\n\nfloat gray = dot(sample4, W);\n\nif (border.r > 0.5 || border.g > 0.5 || border.b > 0.5){\ncolor = vec3(0.0) ;\n}else{\nif(gray < 0.25)\ncolor = vec3(20./255., 20./255., 20./255.);\nelse if(gray >= 0.25 && gray < 0.4)\ncolor = StripsPattern(vTexcoordPosition);\nelse\ncolor = vec3(1.);\n}\n\ngl_FragColor = vec4(color, 1.0);\n}\n\n\n";
SHADER_STRINGS["effects-shader-fs2"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nfloat divation(float a, float b){\nfloat f = floor(a/b);\nfloat c = ceil(a/b);\nreturn min((a - b*f), (c*b - a));\n}\nfloat locate(vec2 pos, float dx, float dy, float radius, float interval){\nfloat x = pos.x/dx;\nfloat y = pos.y/dy;\nfloat mod_x = divation(x, interval);\nfloat mod_y = divation(y, interval);\nfloat mod_r = sqrt(mod_x*mod_x + mod_y*mod_y);\nif(mod_r < radius)\nreturn 0.0;\nelse\nreturn mod_r;\n}\nvec3 overlay(vec3 overlayComponent, vec3 underlayComponent, float alpha) {\nvec3 underlay = underlayComponent * alpha;\nreturn underlay * (underlay + (2.0 * overlayComponent * (1.0 - underlay)));\n}\nvec3 brightness(vec3 color, float brightness) {\nfloat scaled = brightness / 2.0;\nif (scaled < 0.0) {\nreturn color * (1.0 + scaled);\n} else {\nreturn color + ((1.0 - color) * scaled);\n}\n}\nvec3 contrast(vec3 color, float contrast) {\nconst float PI = 3.14159265;\nreturn min(vec3(1.0), ((color - 0.5) * (tan((contrast + 1.0) * PI / 4.0) ) + 0.5));\n}\nvec3 saturation(vec3 color, float sat) {\nfloat luminance = dot(color, W);\nvec3 gray = vec3(luminance, luminance, luminance);\nvec3 satColor = mix(gray, color, sat+1.0);\nreturn satColor;\n}\nvoid main()\n{\nvec3 color;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\ncolor = texture2D(uSampler0, vTexcoordPosition).rgb;\nfloat gray = dot(color, W);\n//if bright, set to white\nif(gray >= 0.9)\ncolor = vec3(1.);\n//middle gray, overlay with dot!\nif(gray >=0.4 && gray < 0.6){\nif(locate(vTexcoordPosition, dx, dy, 4., 16.) == 0.0)\ncolor = overlay(vec3(0.,0.,0.8), color, 1.0);\n}\n//if dark, set to black\nif(gray <= 0.1)\ncolor = vec3(0.);\ncolor = brightness(color, 0.1);\ncolor = contrast(color, 0.2);\ncolor = saturation(color, 0.3);\ngl_FragColor = vec4(color, 1.0);\n}\n\n\n";
SHADER_STRINGS["effects-shader-fs3"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\nfloat randd(vec2 uv) {\n\nfloat a = dot(uv, vec2(92., 80.));\nfloat b = dot(uv, vec2(41., 62.));\n\nfloat x = sin(a) + cos(b) * 51.;\nreturn fract(x);\n\n}\n\nvoid main()\n{\nvec2 uv = vTexcoordPosition;\n\nvec2 rnd = vec2(randd(uv), randd(uv));\n\nuv += rnd * .02;\ngl_FragColor = texture2D(uSampler0, uv);\n}\n\n\n";
SHADER_STRINGS["effects-shader-fs4"] =
    "\nprecision mediump float;\n\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition; // Texcoords\n\nfloat uScale = 1.0; // For imperfect, isotropic anti-aliasing in\nfloat uYrot = 1.0;  // absence of dFdx() and dFdy() functions\n\nfloat frequency = 80.0; // Needed globally for lame version of aastep()\n\nfloat aastep(float threshold, float value) {\n#ifdef GL_OES_standard_derivatives\nfloat afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));\n#else\nfloat afwidth = frequency * (1.0/200.0) / uScale / cos(uYrot);\n#endif\nreturn smoothstep(threshold-afwidth, threshold+afwidth, value);\n}\n\nvoid main() {\n// Distance to nearest point in a grid of\n// (frequency x frequency) points over the unit square\nvec2 st2 = mat2(0.707, -0.707, 0.707, 0.707) * vTexcoordPosition;\nvec2 nearest = 2.0*fract(frequency * st2) - 1.0;\nfloat dist = length(nearest);\n// Use a texture to modulate the size of the dots\nvec3 texcolor = texture2D(uSampler0, vTexcoordPosition).rgb; // Unrotated coords\nfloat radius = sqrt(1.0-length(texcolor.rgb)); // Use green channel\nvec3 white = vec3(1.0, 1.0, 1.0);\nvec3 black = vec3(0.3, 0.3, 0.3);\nvec3 fragcolor = mix(black, white, aastep(radius, dist));\ngl_FragColor = vec4(fragcolor, 1.0);\n}\n\n\n\n\n";
SHADER_STRINGS["effects-shader-fs5"] =
    "\nprecision mediump float;\n\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\nconst int radius = 6;\n\nfloat rand(vec2 co){\n// implementation found at: lumina.sourceforge.net/Tutorials/Noise.html\nreturn fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat noise2f( in vec2 p )\n{\nvec2 ip = vec2(floor(p));\nvec2 u = fract(p);\n// http://www.iquilezles.org/www/articles/morenoise/morenoise.htm\nu = u*u*(3.0-2.0*u);\n//u = u*u*u*((6.0*u-15.0)*u+10.0);\n\nfloat res = mix(\n\tmix(rand(ip),  rand(ip+vec2(1.0,0.0)),u.x),\n\tmix(rand(ip+vec2(0.0,1.0)),   rand(ip+vec2(1.0,1.0)),u.x),\n\tu.y)\n;\nreturn 0.0;\n//return 2.0* (res-10.7);\n}\n\nfloat fbm(vec2 c) {\nfloat f = 0.0;\nfloat w = 1.0;\nfor (int i = 0; i < 8; i++) {\n\tf+= w*noise2f(c);\n\tc*=2.0;\n\tw*=0.5;\n}\nreturn f;\n}\n\n\n\nvec2 cMul(vec2 a, vec2 b) {\nreturn vec2( a.x*b.x -  a.y*b.y,a.x*b.y + a.y * b.x);\n}\n\nfloat pattern(  vec2 p, out vec2 q, out vec2 r )\n{\nq.x = fbm( p ); // @SLIDER: 5. could represent velocity of water\nq.y = fbm( p + vec2(1.0));\n\nr.x = fbm( p +1.0*q + vec2(1.7,9.2)+0.15*1.0 * 2. );\nr.y = fbm( p+ 1.0*q + vec2(8.3,2.8)+0.126*1.0 * 2.);\n//r = cMul(q,q+0.1*time);\nreturn fbm(p +1.0*r);\n}\n\nconst vec3 color1 = vec3(0.101961,0.619608,0.666667);\nconst vec3 color2 = vec3(0.666667,0.666667,0.498039);\nconst vec3 color3 = vec3(0,0,0.164706);\nconst vec3 color4 = vec3(0.666667,1,1);\n\nvec3 darken( vec3 s, vec3 d )\n{\nreturn min(s,d);\n}\n\nvec3 multiply( vec3 s, vec3 d )\n{\nreturn s*d;\n}\n\nvec3 colorBurn( vec3 s, vec3 d )\n{\nreturn 1.0 - (1.0 - d) / s;\n}\n\nvec3 linearBurn( vec3 s, vec3 d )\n{\nreturn s + d - 1.0;\n}\n\nvec3 darkerColor( vec3 s, vec3 d )\n{\nreturn (s.x + s.y + s.z < d.x + d.y + d.z) ? s : d;\n}\n\nvec3 lighten( vec3 s, vec3 d )\n{\nreturn max(s,d);\n}\n\nvec3 screen( vec3 s, vec3 d )\n{\nreturn s + d - s * d;\n}\n\nvec3 colorDodge( vec3 s, vec3 d )\n{\nreturn d / (1.0 - s);\n}\n\nvec3 linearDodge( vec3 s, vec3 d )\n{\nreturn s + d;\n}\n\nvec3 lighterColor( vec3 s, vec3 d )\n{\nreturn (s.x + s.y + s.z > d.x + d.y + d.z) ? s : d;\n}\n\nfloat overlay( float s, float d )\n{\nreturn (d < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);\n}\n\nvec3 overlay( vec3 s, vec3 d )\n{\nvec3 c;\nc.x = overlay(s.x,d.x);\nc.y = overlay(s.y,d.y);\nc.z = overlay(s.z,d.z);\nreturn c;\n}\n\nfloat softLight( float s, float d )\n{\nreturn (s < 0.5) ? d - (1.0 - 2.0 * s) * d * (1.0 - d)\n\t: (d < 0.25) ? d + (2.0 * s - 1.0) * d * ((16.0 * d - 12.0) * d + 3.0)\n\t\t\t\t : d + (2.0 * s - 1.0) * (sqrt(d) - d);\n}\n\nvec3 softLight( vec3 s, vec3 d )\n{\nvec3 c;\nc.x = softLight(s.x,d.x);\nc.y = softLight(s.y,d.y);\nc.z = softLight(s.z,d.z);\nreturn c;\n}\n\nfloat hardLight( float s, float d )\n{\nreturn (s < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);\n}\n\nvec3 hardLight( vec3 s, vec3 d )\n{\nvec3 c;\nc.x = hardLight(s.x,d.x);\nc.y = hardLight(s.y,d.y);\nc.z = hardLight(s.z,d.z);\nreturn c;\n}\n\nfloat vividLight( float s, float d )\n{\nreturn (s < 0.5) ? 1.0 - (1.0 - d) / (2.0 * s) : d / (2.0 * (1.0 - s));\n}\n\nvec3 vividLight( vec3 s, vec3 d )\n{\nvec3 c;\nc.x = vividLight(s.x,d.x);\nc.y = vividLight(s.y,d.y);\nc.z = vividLight(s.z,d.z);\nreturn c;\n}\n\nvec3 linearLight( vec3 s, vec3 d )\n{\nreturn 2.0 * s + d - 1.0;\n}\n\nfloat pinLight( float s, float d )\n{\nreturn (2.0 * s - 1.0 > d) ? 2.0 * s - 1.0 : (s < 0.5 * d) ? 2.0 * s : d;\n}\n\nvec3 pinLight( vec3 s, vec3 d )\n{\nvec3 c;\nc.x = pinLight(s.x,d.x);\nc.y = pinLight(s.y,d.y);\nc.z = pinLight(s.z,d.z);\nreturn c;\n}\n\nvec3 hardMix( vec3 s, vec3 d )\n{\nreturn floor(s + d);\n}\n\nvec3 difference( vec3 s, vec3 d )\n{\nreturn abs(d - s);\n}\n\nvec3 exclusion( vec3 s, vec3 d )\n{\nreturn s + d - 2.0 * s * d;\n}\n\nvec3 subtract( vec3 s, vec3 d )\n{\nreturn s - d;\n}\n\nvec3 divide( vec3 s, vec3 d )\n{\nreturn s / d;\n}\n\n//\trgb<--\x3ehsv functions by Sam Hocevar\n//\thttp://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl\nvec3 rgb2hsv(vec3 c)\n{\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\nvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\nvec3 hsv2rgb(vec3 c)\n{\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvec3 hue( vec3 s, vec3 d )\n{\nd = rgb2hsv(d);\nd.x = rgb2hsv(s).x;\nreturn hsv2rgb(d);\n}\n\nvec3 color( vec3 s, vec3 d )\n{\ns = rgb2hsv(s);\ns.z = rgb2hsv(d).z;\nreturn hsv2rgb(s);\n}\n\nvec3 saturation( vec3 s, vec3 d )\n{\nd = rgb2hsv(d);\nd.y = rgb2hsv(s).y;\nreturn hsv2rgb(d);\n}\n\nvec3 luminosity( vec3 s, vec3 d )\n{\nfloat dLum = dot(d, vec3(0.3, 0.59, 0.11));\nfloat sLum = dot(s, vec3(0.3, 0.59, 0.11));\nfloat lum = sLum - dLum;\nvec3 c = d + lum;\nfloat minC = min(min(c.x, c.y), c.z);\nfloat maxC = max(max(c.x, c.y), c.z);\nif(minC < 0.0) return sLum + ((c - sLum) * sLum) / (sLum - minC);\nelse if(maxC > 1.0) return sLum + ((c - sLum) * (1.0 - sLum)) / (maxC - sLum);\nelse return c;\n}\nvec3 sample(const int x, const int y, vec2 delta, vec2 vTexcoordPosition)\n{\nvec2 uv = (vTexcoordPosition.xy + vec2(x, y));\nuv = uv + delta;\n//uv.y = 1.0 - uv.y;\n\nreturn texture2D(uSampler0, uv).xyz;\n}\n\n\n\nvoid main(void)\n{\n vec2 src_size = vec2 (0.001, 0.001);\n vec2 uv = vTexcoordPosition;\n float n = float((radius + 1) * (radius + 1));\n int i;\n int j;\n vec3 m0 = vec3(0.0); vec3 m1 = vec3(0.0); vec3 m2 = vec3(0.0); vec3 m3 = vec3(0.0);\n vec3 s0 = vec3(0.0); vec3 s1 = vec3(0.0); vec3 s2 = vec3(0.0); vec3 s3 = vec3(0.0);\n vec3 c;\n\n\t vec2 q;\nvec2 r;\nvec2 c3 = 1000.0*vTexcoordPosition;\nfloat f = pattern(c3*0.01,q,r);\nvec3 col = mix(color1,color2,clamp((f*f)*4.0,0.0,1.0));\ncol = color2;\ncol = mix(col,color3,clamp(length(q),0.0,1.0));\ncol = mix(col,color4,clamp(length(r.x),0.0,1.0));\n\nvec3 col2 = (0.2*f*f*f+0.6*f*f+0.5*f)*col;\nvec2 delta =  vec2(0.002, 0.002);\n\nconst vec3 lumi = vec3(0.2126, 0.7152, 0.0722);\n\nvec3 hc =sample(-1,-1,delta,vTexcoordPosition) *  1.0 + sample( 0,-1,delta,vTexcoordPosition) *  2.0\n\t\t+sample( 1,-1,delta,vTexcoordPosition) *  1.0 + sample(-1, 1,delta,vTexcoordPosition) * -1.0\n\t\t+sample( 0, 1,delta,vTexcoordPosition) * -2.0 + sample( 1, 1,delta,vTexcoordPosition) * -1.0;\n\nvec3 vc =sample(-1,-1,delta,vTexcoordPosition) *  1.0 + sample(-1, 0,delta,vTexcoordPosition) *  2.0\n\t\t+sample(-1, 1,delta,vTexcoordPosition) *  1.0 + sample( 1,-1,delta,vTexcoordPosition) * -1.0\n\t\t+sample( 1, 0,delta,vTexcoordPosition) * -2.0 + sample( 1, 1,delta,vTexcoordPosition) * -1.0;\n\nvec3 c2 = sample(0, 0,delta,vTexcoordPosition);\n\nc2 -= pow(c2, vec3(0.2126, 0.7152, 0.0722)) * pow(dot(lumi, vc*vc + hc*hc), 0.5);\n\n\nuv = uv + delta;\n\n for (int j = -radius; j <= 0; ++j)  {\n\t for (int i = -radius; i <= 0; ++i)  {\n\t\t c = texture2D(uSampler0, uv + vec2(i,j) * src_size).rgb;\n\t\t m0 += c;\n\t\t s0 += c * c;\n\t }\n }\n\n for (int j = -radius; j <= 0; ++j)  {\n\t for (int i = 0; i <= radius; ++i)  {\n\t\t c = texture2D(uSampler0, uv + vec2(i,j) * src_size).rgb;\n\t\t m1 += c;\n\t\t s1 += c * c;\n\t }\n }\n\n for (int j = 0; j <= radius; ++j)  {\n\t for (int i = 0; i <= radius; ++i)  {\n\t\t c = texture2D(uSampler0, uv + vec2(i,j) * src_size).rgb;\n\t\t m2 += c;\n\t\t s2 += c * c;\n\t }\n }\n\n for (int j = 0; j <= radius; ++j)  {\n\t for (int i = -radius; i <= 0; ++i)  {\n\t\t c = texture2D(uSampler0, uv + vec2(i,j) * src_size).rgb;\n\t\t m3 += c;\n\t\t s3 += c * c;\n\t }\n }\n\n\n vec4 result;\n float min_sigma2 = 1e+2;\n m0 /= n;\n s0 = abs(s0 / n - m0 * m0);\n\n float sigma2 = s0.r + s0.g + s0.b;\n if (sigma2 < min_sigma2) {\n\t min_sigma2 = sigma2;\n\t result = vec4(m0, 1.0);\n }\n\n m1 /= n;\n s1 = abs(s1 / n - m1 * m1);\n\n sigma2 = s1.r + s1.g + s1.b;\n if (sigma2 < min_sigma2) {\n\t min_sigma2 = sigma2;\n\t result = vec4(m1, 1.0);\n }\n\n m2 /= n;\n s2 = abs(s2 / n - m2 * m2);\n\n sigma2 = s2.r + s2.g + s2.b;\n if (sigma2 < min_sigma2) {\n\t min_sigma2 = sigma2;\n\t result = vec4(m2, 1.0);\n }\n\n m3 /= n;\n s3 = abs(s3 / n - m3 * m3);\n\n sigma2 = s3.r + s3.g + s3.b;\n if (sigma2 < min_sigma2) {\n\t min_sigma2 = sigma2;\n\t result = vec4(m3, 1.0);\n }\n\n\nvec4 res2 = vec4(overlay(screen( result.rgb,c2.rgb), result.rgb) , 1.0);\n\nvec3 col3 = texture2D(uSampler0, vTexcoordPosition + col2.xy * 0.05 ).xyz;\n\ngl_FragColor = vec4(saturation(col3,res2.rgb ),1.0);\n\n// fragColor = res2;\n\n}\n\n\n\n\n\n\n\n";
SHADER_STRINGS["effects-shader-fs6"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\nvec3 noise(float p){return texture2D(uSampler0,vec2(p,.0)).xyz;}\nvec3 noise(vec2 p){return texture2D(uSampler0, p).xyz;}\nvec3 noise(vec3 p){float m = mod(p.z,1.0);float s = p.z-m; float sprev = s-1.0;if (mod(s,2.0)==1.0) { s--; sprev++; m = 1.0-m; };return mix(texture2D(uSampler0,p.xy+noise(sprev).yz).xyz,texture2D(uSampler0,p.xy+noise(s).yz).xyz,m);}\n\n\nvoid main()\n{\nvec2 uv = vTexcoordPosition;\n\n//vec3 color = texture2D(uSampler0,uv).xyz;\nvec3 color = vec3(1.0);\nfloat iGlobalTime = 1.0;\n\nfloat var_size = 0.66;\nfloat var_alpha = .8;\nfloat var_distr = 1.0;\n\nfor (float q=.0; q<1.0; q+=.01)\n{\n\tfloat i = q;\n\tvec2 size = vec2(1.00-pow(i,var_distr)*.97) * var_size;\n\tsize.x *= 1024.0/720.0;\n\n\tvec2 m = mod(uv+noise(q).yz*24.0,size);\n\n\tvec2 s = uv-m;\n\n\tvec2 offs = (.2+.6*noise(s*1466.1550+vec2(iGlobalTime*.1)).xy);\n\tvec2 p = m/size - offs;\n\tvec3 sample_color = texture2D(uSampler0,s + .5*size).xyz;\n\n\tfloat alpha = 1.0-(length(p)-.2)*1024.0*length(size)*.5;\n\talpha = min(var_alpha,max(.0,alpha));\n\tcolor = mix(color,sample_color,alpha);\n\n}\n\ngl_FragColor = vec4(color,1.0);\n}\n";
SHADER_STRINGS["effects-shader-fs7"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\n\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nvec3 StripsPattern(vec2 position)\n{\nvec2 p = (position - 0.5) * 500.;\n\nfloat angle = 0.7;\nvec2 direction = vec2(cos(angle), sin(angle));\n\nfloat brightness = cos(dot(p, direction));\nvec3 color = vec3(1.-brightness);\n\n\nfloat gray = dot(color, W);\nif(gray > 0.5)\nreturn vec3(220./255., 220./255., 220./255.);\nelse\nreturn vec3(120./255., 120./255., 120./255.);\n}\n\nvoid main()\n{\nvec3 color;\n\n//find the edge and draw\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\n\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\n\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\n\nfloat gray = dot(sample4, W);\n\nif (border.r > 0.5 || border.g > 0.5 || border.b > 0.5){\ncolor = vec3(0.0) ;\n}else{\nif(gray < 0.1)\ncolor = vec3(gray/2.0);\nelse if(gray >= 0.1 && gray < 0.7)\ncolor = vec3(gray*2.0);\nelse\ncolor = vec3(1.);\n}\n\ngl_FragColor = vec4(color, 1.0);\n}\n\n\n";
SHADER_STRINGS["effects-shader-fs8"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\nfloat SCurve (float value, float amount, float correction) {\n\nfloat curve = 1.0;\n\nif (value < 0.5)\n{\n\n\tcurve = pow(value, amount) * pow(2.0, amount) * 0.5;\n}\n\nelse\n{\n\tcurve = 1.0 - pow(1.0 - value, amount) * pow(2.0, amount) * 0.5;\n}\n\nreturn pow(curve, correction);\n}\n\n\nvoid main()\n{\nvec2 uv = vTexcoordPosition;\n\nvec4 C = texture2D(uSampler0, uv);\nvec4 A = C;\n\n\t// Writing this as a sort of 'note to self'\n\n\t// Applies an S curve to the image, you can adjust the steepness\n\t// of the curve with the control values SCurve(input, steepness, gamma)\n\n\tC = vec4(SCurve(C.r, 4.0, 1.0), SCurve(C.g, 3.7, 0.7), SCurve(C.b, 2.6, 0.6), 1.0);\n\ngl_FragColor = C;\n}\n\n\n\n\n\n";
SHADER_STRINGS["effects-shader-fs9"] =
    "\nprecision mediump float;\n\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\nconst float steps = 2.0;\nconst float dotsize = 1.0 / steps ;\nconst float half_step = dotsize / 2.0;\n\n\nvoid main(void)\n{\nvec2 img    = vTexcoordPosition * steps;\nvec4 pel    = texture2D( uSampler0, img );\n\nvec4 tint;\n\n// Magenta Blue\n// Cyan    Yellow\nint ofs = int(vTexcoordPosition.x*steps) + int(vTexcoordPosition.y*steps)*2;\nif    (0 == ofs) {\n\ttint = vec4(1.0,1.0,0.0,0.0);\n} else if (1 == ofs) {\n\ttint = vec4(0.0,0.0,1.0,0.0);\n} else if (2 == ofs) {\n\ttint = vec4(1.0,0.0,1.0,0.0);\n} else { // (3 == ofs)\n\ttint = vec4(0.0,1.0,1.0,0.0);\n};\n\nfloat gray  = dot(pel.rgb,\n\t\t\t\t  vec3(0.3, 0.59, 0.11));\ngl_FragColor = mix( pel, tint, gray );\n}\n\n\n";
SHADER_STRINGS["effects-shader-fs10"] =
    "\nprecision mediump float;\nuniform sampler2D uSampler0;\nvarying vec2 vTexcoordPosition;\n\n\nconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nvec3 StripsPattern(vec2 position)\n{\nvec2 p = (position - 0.5) * 500.;\n\nfloat angle = 0.7;\nvec2 direction = vec2(cos(angle), sin(angle));\n\nfloat brightness = cos(dot(p, direction));\nvec3 color = vec3(1.-brightness);\n\n\nfloat gray = dot(color, W);\nif(gray > 0.5)\nreturn vec3(220./255., 220./255., 220./255.);\nelse\nreturn vec3(120./255., 120./255., 120./255.);\n}\n\nvoid main()\n{\nvec3 color;\nvec3 irgb = texture2D(uSampler0, vTexcoordPosition).rgb;\n\n//find the edge and draw\nvec3 border;\nfloat dx = 1./720.;\nfloat dy = 1./720.;\nvec3 sample0 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample1 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y)).rgb;\nvec3 sample2 = texture2D(uSampler0, vec2(vTexcoordPosition.x - dx, vTexcoordPosition.y - dy)).rgb;\nvec3 sample3 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y + dy)).rgb;\nvec3 sample4 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y)).rgb;\nvec3 sample5 = texture2D(uSampler0, vec2(vTexcoordPosition.x, vTexcoordPosition.y - dy)).rgb;\nvec3 sample6 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y + dy)).rgb;\nvec3 sample7 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y)).rgb;\nvec3 sample8 = texture2D(uSampler0, vec2(vTexcoordPosition.x + dx, vTexcoordPosition.y - dy)).rgb;\n\nvec3 horizEdge = sample2 + sample5 + sample8 - (sample0 + sample3 + sample6);\nvec3 vertEdge = sample0 + sample1 + sample2 - (sample6 + sample7 + sample8);\n\nborder = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));\n\nfloat gray = dot(sample4, W);\n\nif (border.r > 0.5 || border.g > 0.5 || border.b > 0.5){\ncolor = vec3(0.0) ;\n}else{\nif(gray < 0.20)\ncolor = vec3(20./255., 20./255., 20./255.);\nelse\ncolor = vec3(1.);\n}\n\ngl_FragColor = vec4(color, 1.0);\n}\n\n\n";
SHADER_STRINGS["zoom-blur-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\n\tuniform sampler2D uSampler0;\n\tuniform vec2 uCenter;\n\tuniform float uStrength;\n\tuniform float uSamplerWidth;\n\tuniform float uSamplerHeight;\n\tvarying vec2 vTexcoordPosition;\n\n\tfloat random(vec3 scale, float seed) {\n\t/* use the fragment position for a different seed per-pixel */\n\t\treturn fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n\t}\n\n\tvoid main() {\n\t\tvec2 texSize = vec2(uSamplerWidth, uSamplerHeight);\n\t\tvec4 color = vec4(0.0);\n\t\tfloat total = 0.0;\n\t\tvec2 toCenter = (uCenter - vTexcoordPosition) * texSize;\n\n\t\t/* randomize the lookup values to hide the fixed number of samples */\n\t\tfloat offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\n\t\tfloat percent = (8.0 + offset) / 8.0;\n\t\tfloat weight = 0.8 * (percent - percent * percent);\n\t\tvec4 sample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (7.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (6.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (5.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (4.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (3.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (2.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (1.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tpercent = (0.0 + offset) / 8.0;\n\t\tweight = 0.8 * (percent - percent * percent);\n\t\tsample = texture2D(uSampler0, vTexcoordPosition + toCenter * percent * uStrength / texSize);\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\n\t\tgl_FragColor = color / total;\n\n\t\t/* switch back from pre-multiplied alpha */\n\t\tgl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n\t}\n";
SHADER_STRINGS["bloom-filter-shader-fs"] =
    "\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\tuniform float uThreshold;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main() {\n\t\tvec4 col = texture2D(uSampler0, vTexcoordPosition);\n\t\tif ((col.r + col.g + col.b) / 3.0 <= 1.0 - uThreshold)\n\t\t\tcol = vec4(0, 0, 0, 1);\n\t\tgl_FragColor = col;\n\t}\n";
SHADER_STRINGS["mirror-wave-shader-fs"] =
    "\n\n\tprecision mediump float;\n\n\tuniform sampler2D uSampler0;\n\n\tuniform float uAngle;\n\tuniform vec2 uMirrorCenter;\n\tuniform float uDistance;\n\tuniform float uAmplitude;\n\tuniform float uWaveLength;\n\tuniform vec2 uWaveCenter;\n\n\tconst float PI = 3.1415926535;\n\n\tvarying vec2 vTexcoordPosition;\n\n\tvoid main(void) {\n\n\t\tfloat radAngle= uAngle*3.1415/180.0;\n\t\tvec2 mirrorNormal = vec2(sin(radAngle), cos(radAngle));\n\t\tvec2 mirrorSurface = vec2(cos(radAngle), sin(radAngle));\n\t\tvec2 offset = mirrorNormal * uDistance;\n\t\tvec2 mirrorCenter = uMirrorCenter + offset;\n\t\tfloat d = (length(vTexcoordPosition - uWaveCenter)/uWaveLength)*2.0*PI;\n\t\tvec2 fragmentVectorFromMirror = (vTexcoordPosition+vec2(sin(d),sin(d))*uAmplitude)  - uMirrorCenter;\n\n\t\tvec2 uv = offset;\n\t\tif (dot(normalize(fragmentVectorFromMirror), mirrorNormal) < 0.0)\n\t\t\tuv = -reflect(-fragmentVectorFromMirror, mirrorNormal) + mirrorCenter - uv*2.0;\n\t\telse\n\t\t\tuv = vTexcoordPosition - uv;\n\t\t//uv += offset;\n\n\t\tvec3 col = texture2D(uSampler0, uv).rgb;\n\t\tgl_FragColor = vec4(col, 1.0);\n\t}\n";
//---------- 07shaderstrings.js end ----------
//---------- From 08script.js ----------
var APP = {};

function reset_texture()
{
    APP.fboTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture._height);
    APP.pingPassTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture._height);
    APP.pongPassTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture._height);
    APP.fboTexture.resetTransformation();
    APP.fboTexture.setOrigin("center", "center");
    APP.fboTexture.translate(APP.fboTexture._origin.x, APP.fboTexture._origin.y);
    APP.pingPassTexture.resetTransformation();
    APP.pingPassTexture.setOrigin("center", "center");
    APP.pingPassTexture.translate(APP.pingPassTexture._origin.x, APP.pingPassTexture._origin.y);
    APP.pongPassTexture.resetTransformation();
    APP.pongPassTexture.setOrigin("center", "center");
    APP.pongPassTexture.translate(APP.pingPassTexture._origin.x, APP.pingPassTexture._origin.y);
    APP.app.setCanvasSize(APP.fboTexture._width, APP.fboTexture._height);
    APP.app.setFrameBufferObjectSize(APP.fboTexture._trueWidth, APP.fboTexture._trueHeight);
    APP.app.setTextureAsRenderTargetForFbo(APP.fboTexture);
    render_texture(APP.originalTexture);
    APP.app.setCanvasAsRenderTarget();
    set_defaults();
    update_screen()
}

function update_screen(a)
{
    a = a || APP.fboTexture;
    if (APP.isFilterRegionOn)
        if (APP.filterRegionType == "clip")
        {
            var b = new Rect(a._clipRect.x, a._clipRect.y, a._clipRect.w, a._clipRect.h);
            if (APP.filterRegionMode == "in")
            {
                render_texture(a);
                a.reclipTextureByRect(APP.filterRegion);
                a.translate(a._width * APP.filterRegion.x, a._height * APP.filterRegion.y);
                APP.pingPassTexture.reclipTextureByRect(APP.filterRegion);
                APP.pingPassTexture.translate(APP.pingPassTexture._width * APP.filterRegion.x, APP.pingPassTexture
                    ._height * APP.filterRegion.y);
                APP.pongPassTexture.reclipTextureByRect(APP.filterRegion);
                APP.pongPassTexture.translate(APP.pongPassTexture._width * APP.filterRegion.x, APP.pongPassTexture
                    ._height * APP.filterRegion.y);
                render_current_with(a)
            }
            else if (APP.filterRegionMode == "out")
            {
                render_current_with(a);
                a.reclipTextureByRect(APP.filterRegion);
                a.translate(a._width * APP.filterRegion.x, a._height * APP.filterRegion.y);
                APP.pingPassTexture.reclipTextureByRect(APP.filterRegion);
                APP.pingPassTexture.translate(APP.pingPassTexture._width * APP.filterRegion.x, APP.pingPassTexture
                    ._height * APP.filterRegion.y);
                APP.pongPassTexture.reclipTextureByRect(APP.filterRegion);
                APP.pongPassTexture.translate(APP.pongPassTexture._width * APP.filterRegion.x, APP.pongPassTexture
                    ._height * APP.filterRegion.y);
                render_texture(a)
            }
            a.reclipTextureByRect(b);
            a.moveTo(a._width / 2, a._height / 2);
            APP.pingPassTexture.reclipTextureByRect(b);
            APP.pingPassTexture.moveTo(APP.pingPassTexture._width / 2, APP.pingPassTexture._height / 2);
            APP.pongPassTexture.reclipTextureByRect(b);
            APP.pongPassTexture.moveTo(APP.pongPassTexture._width / 2, APP.pongPassTexture._height / 2)
        }
        else if (APP.filterRegionType == "scale")
        if (APP.filterRegionMode == "in")
        {
            render_texture(a);
            APP.pingPassTexture.scale(APP.filterScaleX, APP.filterScaleY);
            APP.pongPassTexture.scale(APP.filterScaleX, APP.filterScaleY);
            render_current_with(APP.miniTexture);
            APP.pingPassTexture.scale(1 / APP.filterScaleX, 1 / APP.filterScaleY);
            APP.pongPassTexture.scale(1 / APP.filterScaleX, 1 / APP.filterScaleY)
        }
        else
        {
            if (APP.filterRegionMode == "out")
            {
                render_current_with(a);
                render_texture(APP.miniTexture);
                a.scale(1 / APP.filterScaleX, 1 / APP.filterScaleY)
            }
        }
    else
    {
        if (APP.filterRegionType == "brush")
        {
            render_texture(APP.brushBackgroundTexture);
            render_texture_brush_overlay(APP.brushForegroundTexture);
            APP.app.gl.clearColor(0, 0, 0, 1);
            APP.app.gl.colorMask(false, false, false, true);
            APP.app.gl.clear(APP.app.gl.COLOR_BUFFER_BIT);
            APP.app.gl.colorMask(true, true, true, true);
            APP.app.gl.clearColor(0, 0, 0, 0)
        }
    }
    else render_current_with(a);
    if (APP.showColorWheel) render_current_with(APP.textures["colorwheel"])
}

function get_texture_pixel_data_2(a)
{
    APP.spareTexture.updateTextureContent(null, a._width, APP.fboTexture._height);
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.spareTexture);
    render_texture(a);
    var c = new Uint8Array(APP.spareTexture._trueWidth * APP.spareTexture._trueHeight * 4);
    APP.app.gl.pixelStorei(APP.app.gl.UNPACK_FLIP_Y_WEBGL, true);
    APP.app.gl.readPixels(0, 0, APP.spareTexture._trueWidth, APP.spareTexture._trueHeight, APP.app.gl.RGBA,
        APP.app.gl.UNSIGNED_BYTE, c);
    APP.app.setTextureAsRenderTargetForFbo(b);
    return c
}

function get_texture_pixel_data()
{
    APP.spareTexture.updateTextureContent(null, APP.fboTexture._width, APP.fboTexture._height);
    var a = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.spareTexture);
    render_current_with(APP.fboTexture);
    var b = new Uint8Array(APP.spareTexture._trueWidth * APP.spareTexture._trueHeight * 4);
    APP.app.gl.pixelStorei(APP.app.gl.UNPACK_FLIP_Y_WEBGL, true);
    APP.app.gl.readPixels(0, 0, APP.spareTexture._trueWidth, APP.spareTexture._trueHeight, APP.app.gl.RGBA,
        APP.app.gl.UNSIGNED_BYTE, b);
    APP.app.setTextureAsRenderTargetForFbo(a);
    return b
}

function set_filter_region_brush(a, b)
{
    a = a || APP.fboTexture;
    mode = "draw";
    APP.brushInitMaskColor = b || [0, 0,
        0, 0
    ];
    APP.brushMode = mode;
    APP.brushMode2 = "noemplace";
    copy_texture(a, APP.brushForegroundTexture);
    copy_texture(a, APP.brushBackgroundTexture);
    copy_texture(a, APP.brushOverlayTexture);
    APP.brushSandwitchTexture.updateTextureContent(null, a._trueWidth, a._trueHeight);
    var c = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.brushSandwitchTexture);
    APP.app.getContext().clearColor(APP.brushInitMaskColor[0], APP.brushInitMaskColor[1], APP.brushInitMaskColor[
        2], APP.brushInitMaskColor[3]);
    APP.app.clearDisplay();
    APP.app.setTextureAsRenderTargetForFbo(APP.brushBackgroundTexture);
    render_current_with(a);
    APP.app.setTextureAsRenderTargetForFbo(c);
    APP.isFilterRegionOn = true;
    APP.filterRegionType = "brush";
    APP.eraseBrushPosition = [100, 100];
    APP.eraseBrushRadius = 60;
    var d = Math.max(APP.brushBackgroundTexture._width, APP.brushBackgroundTexture._height) / 7;
    APP.brushOverviewTexture.updateTextureContent(null, d, d);
    APP.brushOverlayAmount = 1;
    APP.brushOverlayMode = -1;
    APP.brushOverlayIsOverlayBackground = false;
    APP.brushMaskOpacity = 1
}

function set_brush_filter(a)
{
    apply_screen_to_texture();
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.brushSandwitchTexture);
    APP.app.clearDisplay([0, 0, 0, 0]);
    APP.app.setTextureAsRenderTargetForFbo(APP.brushBackgroundTexture);
    APP.mode.name = a;
    set_defaults();
    render_current_with(APP.originalTexture);
    APP.app.setTextureAsRenderTargetForFbo(b)
}

function swap_brush_fg_bg()
{
    var a = APP.brushForegroundTexture;
    APP.brushForegroundTexture = APP.brushBackgroundTexture;
    APP.brushBackgroundTexture = a
}

function update_filter_mode_while_brush()
{
    copy_texture(APP.fboTexture, APP.brushForegroundTexture);
    var a = APP.app.getTargetTexture();
    APP.isFilterRegionOn = false;
    APP.app.setTextureAsRenderTargetForFbo(APP.brushBackgroundTexture);
    render_current_with(APP.fboTexture);
    APP.app.setTextureAsRenderTargetForFbo(a);
    APP.isFilterRegionOn = true
}

function set_filter_region_clip(a, b)
{
    APP.isFilterRegionOn = true;
    APP.filterRegion = a;
    APP.filterRegionType = "clip";
    APP.filterRegionMode = b
}

function set_filter_region_scale(x, y, a)
{
    APP.isFilterRegionOn = true;
    APP.filterRegionType = "scale";
    APP.filterScaleX = x;
    APP.filterScaleY = y;
    APP.filterRegionMode = a;
    APP.miniTexture.resetTransformation();
    APP.miniTexture.updateTextureContent(null, APP.fboTexture._width, APP.fboTexture._height);
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.miniTexture);
    render_texture(APP.fboTexture);
    APP.app.setTextureAsRenderTargetForFbo(b);
    APP.miniTexture.setOrigin("center", "center");
    APP.miniTexture.translate(APP.originalTexture._width / 2, APP.originalTexture._height / 2);
    APP.miniTexture.scale(APP.filterScaleX, APP.filterScaleY)
}

function crop_texture(a, b)
{
    store_undo_state("crop");
    b = b || APP.fboTexture;
    var c = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    render_texture(b);
    var w = b._width * a.w;
    var h = b._height * a.h;
    b.updateTextureContent(null, w, h);
    b.resetTransformation();
    b.setOrigin("center", "center");
    b.translate(b._origin.x, b._origin.y);
    console.log(b);
    console.log(APP.pingPassTexture);
    APP.app.setFrameBufferObjectSize(b._trueWidth, b._trueHeight);
    APP.app.setTextureAsRenderTargetForFbo(b);
    APP.pingPassTexture.resetTransformation();
    APP.pingPassTexture.reclipTextureByRect(a);
    APP.pingPassTexture.setOrigin(0, 0);
    APP.pingPassTexture.scale(APP.pingPassTexture._width / b._width, APP.pingPassTexture._height / b._height);
    render_texture(APP.pingPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(c);
    update_accessory_textures();
    APP.app.setCanvasSize(b._width, b._height);
    APP.app.setFrameBufferObjectSize(b._trueWidth, b._trueHeight)
}

function rotate_texture(a, b)
{
    store_undo_state("crop");
    b = b || APP.fboTexture;
    var w = Math.abs(Math.cos(to_radians(a)) * b._width + Math.sin(to_radians(a)) * b._height);
    var h = Math.abs(Math.cos(to_radians(a)) * b._height + Math.sin(to_radians(a)) * b._width);
    var c = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    render_texture(b);
    b.resetTransformation();
    b.updateTextureContent(null, w, h);
    b.setOrigin("center", "center");
    b.translate(b._origin.x, b._origin.y);
    APP.app.setFrameBufferObjectSize(b._trueWidth, b._trueHeight);
    APP.app.setTextureAsRenderTargetForFbo(b);
    APP.pingPassTexture.rotate(a);
    APP.pingPassTexture.scale(APP.pingPassTexture._width / w, APP.pingPassTexture._height / h);
    render_texture(APP.pingPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(c);
    update_accessory_textures();
    APP.app.setCanvasSize(b._width, b._height);
    APP.app.setFrameBufferObjectSize(b._trueWidth, b._trueHeight)
}

function flip_texture(a, b)
{
    store_undo_state("crop");
    b = b || APP.fboTexture;
    APP.fboTexture.scale(a == "x" ? -1 : 1, a == "y" ? -1 : 1);
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    render_texture(APP.fboTexture);
    APP.app.setTextureAsRenderTargetForFbo(APP.fboTexture);
    render_texture(APP.pingPassTexture);
    APP.fboTexture.scale(a == "x" ? -1 : 1, a == "y" ? -1 : 1);
    APP.app.setCanvasAsRenderTarget()
}

function render_current_with(a)
{
    if (APP.mode.name == "nofilter") render_texture(a);
    if (APP.mode.name == "basic") render_texture_basic(a);
    if (APP.mode.name == "lighted") render_texture_lighted(a);
    if (APP.mode.name == "light_with_normal_map") render_textures_normalmapped_lighted(a, APP.tex2);
    if (APP.mode.name == "twirl") render_texture_twirl(a);
    if (APP.mode.name == "grey_scale") render_texture_grey_scale(a);
    if (APP.mode.name == "fish_eye") render_texture_fish_eye(a);
    if (APP.mode.name == "barrel_distortion") render_texture_barrel_distortion(a);
    if (APP.mode.name == "radial_wave") render_texture_radial_wave(a);
    if (APP.mode.name == "toon_greenish") render_texture_toon_greenish(a);
    if (APP.mode.name == "toon") render_texture_toon(a);
    if (APP.mode.name == "toon_2") render_texture_toon_2(a);
    if (APP.mode.name == "focus_blur") render_texture_focus_blur(a);
    if (APP.mode.name == "blur") render_texture_blur(a);
    if (APP.mode.name == "mirror") render_texture_mirror(a);
    if (APP.mode.name == "triangle_blur") render_texture_triangle_blur(a);
    if (APP.mode.name == "monochrome") render_texture_monochrome(a);
    if (APP.mode.name == "sharpen") render_texture_sharpen(a);
    if (APP.mode.name == "denoise") render_texture_denoise(a);
    if (APP.mode.name == "bloom") render_texture_bloom(a);
    if (APP.mode.name == "zoom_blur") render_texture_zoom_blur(a);
    if (APP.mode.name == "vignette") render_texture_vignette(a);
    if (APP.mode.name == "highlight_shadow") render_texture_highlight_shadow(a);
    if (APP.mode.name == "a_sketch") render_texture_a_sketch(a);
    if (APP.mode.name == "a_sketch2") render_texture_a_sketch2(a);
    if (APP.mode.name == "overlay") render_texture_overlay(a);
    if (APP.mode.name == "edge") render_texture_edge(a);
    if (APP.mode.name == "frame") render_texture_frame(a);
    if (APP.mode.name == "sketch") render_texture_sketch(a);
    if (APP.mode.name == "effects") render_texture_effects(a);
    if (APP.mode.name == "colored_sketch_with_vignette") colored_sketch_with_vignette(a);
    if (APP.mode.name == "heavy_outlined_sketch") heavy_outlined_sketch(a);
    if (APP.mode.name == "water_paint_with_vignette") water_paint_with_vignette(a);
    if (APP.mode.name == "realistic_water_paint_with_vignette") realistic_water_paint_with_vignette(a);
    if (APP.mode.name == "tone_curve")
    {
        APP.thefilternumber = APP.thefilternumber === undefined ? 1E13 : APP.thefilternumber;
        if (thisApp.current_picker != undefined) eval("apply_effects_for_picker_" + thisApp.current_picker +
            "()");
        else apply_simple_filter()
    }
    if (APP.mode.name == "MixedEffects")
    {
        APP.thefilternumber = APP.thefilternumber === undefined ? 1E13 : APP.thefilternumber;
        if (thisApp.current_picker != undefined) eval("apply_effects_for_picker_" + thisApp.current_picker +
            "()")
    }
    if (APP.mode.name == "tiltshift") render_texture_tiltshift(a);
    if (APP.mode.name == "sepia") render_texture_sepia(a);
    if (APP.mode.name == "noise") render_texture_noise(a);
    if (APP.mode.name == "vibrance") render_texture_vibrance(a);
    if (APP.mode.name == "colorhalftone") render_texture_colorhalftone(a);
    if (APP.mode.name == "dotscreen") render_texture_dotscreen(a);
    if (APP.mode.name == "mirrorwave") render_texture_mirrorwave(a);
    if (APP.mode.name == "hexagonal_pixelate") render_texture_hexagonal_pixelate(a)
}

function update_brush_foreground_texture(x, y, a)
{
    var b = APP.app.getTargetTexture();
    if (APP.brushMode == "draw")
    {
        APP.app.getContext().blendEquation(APP.app.getContext().FUNC_ADD);
        APP.app.getContext().blendFunc(APP.app.getContext().ONE, APP.app.getContext().ONE)
    }
    else if (APP.brushMode == "erase")
    {
        APP.app.getContext().blendEquation(APP.app.getContext().FUNC_REVERSE_SUBTRACT);
        APP.app.getContext().blendFunc(APP.app.getContext().ONE, APP.app.getContext().ONE)
    }
    APP.app.setTextureAsRenderTargetForFbo(APP.brushSandwitchTexture);
    if (APP.brushMode2 == "emplace")
    {
        APP.app.gl.clearColor(APP.brushInitMaskColor[0], APP.brushInitMaskColor[1], APP.brushInitMaskColor[2],
            APP.brushInitMaskColor[3]);
        APP.app.clearDisplay();
        APP.app.gl.clearColor(0, 0, 0, 0)
    }
    APP.textures.a_brush.moveTo(x - APP.textures.a_brush._width * APP.textures.a_brush._scale.x / 2, y - APP.textures
        .a_brush._height * APP.textures.a_brush._scale.y / 2);
    if (APP.brushType == "alpha_grey") render_texture_grey_alpha(APP.textures.a_brush);
    else render_texture(APP.textures.a_brush);
    APP.app.getContext().blendEquation(APP.app.getContext().FUNC_ADD);
    APP.app.getContext().blendFunc(APP.app.getContext().SRC_ALPHA, APP.app.getContext().ONE_MINUS_SRC_ALPHA);
    if (true || !a)
    {
        APP.app.setTextureAsRenderTargetForFbo(b);
        return
    }
    var c = APP.brushOverviewTexture._width / APP.brushBackgroundTexture._width;
    var d = APP.brushOverviewTexture._height / APP.brushBackgroundTexture._height;
    var e = APP.eraseBrushPosition[0] - APP.brushBackgroundTexture._origin.x;
    var f = APP.eraseBrushPosition[1] - APP.brushBackgroundTexture._origin.y;
    e *= 1 / c;
    f *= 1 / d;
    APP.app.setFrameBufferObjectSize(APP.brushOverviewTexture._trueWidth, APP.brushOverviewTexture._trueHeight);
    APP.app.setTextureAsRenderTargetForFbo(APP.brushOverviewTexture);
    APP.brushBackgroundTexture.scale(1 / c, 1 / d);
    APP.brushForegroundTexture.scale(1 / c, 1 / d);
    APP.brushBackgroundTexture.translate(-e, -f);
    APP.brushForegroundTexture.translate(-e, -f);
    console.log("hodgepodge");
    render_texture(APP.brushBackgroundTexture);
    render_texture_brush_overlay();
    APP.brushBackgroundTexture.scale(c, d);
    APP.brushForegroundTexture.scale(c, d);
    APP.brushBackgroundTexture.translate(e, f);
    APP.brushForegroundTexture.translate(e, f);
    APP.app.setFrameBufferObjectSize(APP.fboTexture._trueWidth, APP.fboTexture._trueHeight);
    APP.app.setTextureAsRenderTargetForFbo(b)
}

function apply_screen_to_texture(a)
{
    if (a == undefined || a) store_undo_state();
    if (APP.isFilterRegionOn && APP.filterRegionType == "scale")
    {
        APP.spareTexture.updateTextureContent(null, APP.fboTexture._width, APP.fboTexture._height);
        APP.spareTexture.resetTransformation();
        APP.spareTexture.scale(b, c);
        APP.spareTexture.updateTextureContent(null, APP.fboTexture._width, APP.fboTexture._height);
        APP.spareTexture.resetTransformation();
        APP.spareTexture.scale(b, c);
        if (APP.filterRegionMode == "in")
        {
            var b = APP.fboTexture._scale.x;
            var c = APP.fboTexture._scale.y;
            APP.app.setTextureAsRenderTargetForFbo(APP.spareTexture);
            update_screen(APP.fboTexture);
            APP.app.setTextureAsRenderTargetForFbo(APP.fboTexture);
            APP.fboTexture.scale(1 / b, 1 / c);
            render_texture(APP.spareTexture);
            APP.fboTexture.scale(b, c);
            render_texture(tex);
            APP.pingPassTexture.scale(APP.filterScaleX, APP.filterScaleY);
            APP.pongPassTexture.scale(APP.filterScaleX, APP.filterScaleY);
            render_current_with(APP.miniTexture);
            APP.pingPassTexture.scale(1 / APP.filterScaleX, 1 / APP.filterScaleY);
            APP.pongPassTexture.scale(1 / APP.filterScaleX, 1 / APP.filterScaleY)
        }
        else if (APP.filterRegionMode == "out")
        {
            render_current_with(tex);
            render_texture(APP.miniTexture);
            tex.scale(1 / APP.filterScaleX, 1 / APP.filterScaleY)
        }
    }
    else
    {
        var b = APP.fboTexture._scale.x;
        var c = APP.fboTexture._scale.y;
        APP.spareTexture.updateTextureContent(null, APP.fboTexture._width, APP.fboTexture._height);
        APP.app.setTextureAsRenderTargetForFbo(APP.spareTexture);
        update_screen(APP.fboTexture);
        APP.app.setCanvasAsRenderTarget();
        render_texture(APP.spareTexture);
        APP.app.setTextureAsRenderTargetForFbo(APP.fboTexture);
        render_texture(APP.spareTexture)
    }
    APP.app.setCanvasAsRenderTarget();
    set_mode();
    if (APP.isFilterRegionOn) APP.isFilterRegionOn = false
}

function store_undo_state(a)
{
    if (a == "crop") APP.undoStates[APP.undoIndex].type = "crop";
    copy_texture(APP.fboTexture, APP.undoStates[APP.undoIndex].texture);
    APP.undoIndex += 1;
    APP.undoIndex %= APP.undoStates.length;
    APP.allowUndoSteps = Math.min(APP.undoStates.length - 1, APP.allowUndoSteps + 1);
    APP.allowRedoSteps = 0;
    if (APP.allowUndoSteps == 0) $(".undobutton").css("display", "none");
    else $(".undobutton").css("display", "inherit");
    if (APP.allowRedoSteps == 0) $(".redobutton").css("display", "none");
    else $(".redobutton").css("display", "inherit")
}

function store_brush_undo_state(a)
{
    APP.brushUndoStates[APP.brushUndoIndex].type = a || "filter";
    copy_texture(APP.brushForegroundTexture, APP.brushUndoStates[APP.brushUndoIndex].texture);
    APP.brushUndoIndex += 1;
    APP.brushUndoIndex %= APP.brushUndoStates.length;
    APP.brushAllowUndoSteps = Math.min(APP.brushUndoStates.length, APP.brushAllowUndoSteps + 1);
    APP.brushAllowRedoSteps = 0
}

function undo_brush()
{
    if (APP.brushAllowUndoSteps <= 0) return;
    APP.brushAllowUndoSteps--;
    APP.brushUndoIndex -= 1;
    while (APP.brushUndoIndex < 0) APP.brushUndoIndex += APP.brushUndoStates.length;
    if (APP.brushAllowRedoSteps == 0) copy_texture(APP.brushForegroundTexture, APP.brushUndoStates[APP.brushUndoIndex +
        1 % APP.brushUndoStates.length].texture);
    copy_texture(APP.brushUndoStates[APP.brushUndoIndex].texture, APP.brushForegroundTexture);
    APP.brushAllowRedoSteps++
}

function undo()
{
    if (APP.allowUndoSteps <= 0) return;
    APP.allowUndoSteps--;
    APP.undoIndex -= 1;
    while (APP.undoIndex < 0) APP.undoIndex += APP.undoStates.length;
    if (APP.allowRedoSteps == 0)
    {
        copy_texture(APP.fboTexture, APP.undoStates[APP.undoIndex + 1 % APP.undoStates.length].texture);
        APP.undoStates[APP.undoIndex + 1 % APP.undoStates.length].type = APP.undoStates[APP.undoIndex].type
    }
    if (APP.undoStates[APP.undoIndex].type == "crop")
    {
        APP.app.setCanvasSize(APP.undoStates[APP.undoIndex].texture._width, APP.undoStates[APP.undoIndex].texture
            ._height);
        APP.app.setFrameBufferObjectSize(APP.undoStates[APP.undoIndex].texture._trueWidth, APP.undoStates[APP
            .undoIndex].texture._trueHeight);
        update_accessory_textures(APP.undoStates[APP.undoIndex].texture._width, APP.undoStates[APP.undoIndex]
            .texture._height);
        UpdateCanvasSize()
    }
    copy_texture(APP.undoStates[APP.undoIndex].texture, APP.fboTexture);
    APP.allowRedoSteps++;
    update_screen();
    if (APP.allowUndoSteps == 0) $(".undobutton").css("display", "none");
    else $(".undobutton").css("display", "inherit");
    if (APP.allowRedoSteps == 0) $(".redobutton").css("display", "none");
    else $(".redobutton").css("display", "inherit")
}

function redo_brush()
{
    if (APP.brushAllowRedoSteps <= 0) return;
    APP.brushAllowRedoSteps--;
    APP.brushUndoIndex += 1;
    APP.brushUndoIndex %= APP.brushUndoStates.length;
    copy_texture(APP.brushUndoStates[APP.brushUndoIndex].texture, APP.brushForegroundTexture);
    APP.brushAllowUndoSteps++;
    update_screen()
}

function redo()
{
    if (APP.allowRedoSteps <= 0) return;
    APP.allowRedoSteps--;
    APP.undoIndex += 1;
    APP.undoIndex %= APP.undoStates.length;
    if (APP.undoStates[APP.undoIndex].type == "crop")
    {
        APP.app.setCanvasSize(APP.undoStates[APP.undoIndex].texture._width, APP.undoStates[APP.undoIndex].texture
            ._height);
        APP.app.setFrameBufferObjectSize(APP.undoStates[APP.undoIndex].texture._trueWidth, APP.undoStates[APP
            .undoIndex].texture._trueHeight);
        update_accessory_textures(APP.undoStates[APP.undoIndex].texture._width, APP.undoStates[APP.undoIndex]
            .texture._height)
    }
    copy_texture(APP.undoStates[APP.undoIndex].texture, APP.fboTexture);
    APP.allowUndoSteps++;
    update_screen();
    if (APP.allowUndoSteps == 0) $(".undobutton").css("display", "none");
    else $(".undobutton").css("display", "inherit");
    if (APP.allowRedoSteps == 0) $(".redobutton").css("display", "none");
    else $(".redobutton").css("display", "inherit")
}

function copy_texture(a, b)
{
    var c = APP.app.getTargetTexture();
    b.updateTextureContent(null, a._width, a._height);
    APP.app.setTextureAsRenderTargetForFbo(b);
    render_texture(a);
    b.setOrigin(a._origin.x, a._origin.y);
    b.moveTo(a._position.x, a._position.y);
    APP.app.setTextureAsRenderTargetForFbo(c)
}

function set_mode()
{
    $("#mode > option").each(function()
    {
        $("#" + $(this).val()).hide()
    });
    APP.mode = {
        name: $("#mode").val(),
        img_no: $("#mode option:selected").attr("img_no") || 1,
        identical_dimensions: $("#mode option:selected").attr("identical_dimensions") || 0
    };
    $("#" + APP.mode.name).show();
    set_defaults()
}

function load_images()
{
    load_main_image()
}

function load_main_image(w, h)
{
    console.log("noooo");
    APP.image1 = new Image;
    APP.image1.crossOrigin = "anonymous";
    APP.image1.APP = APP;
    APP.image1.onerror = function()
    {
        alert("'" + this.src + "' is not a valid url to an image")
    };
    APP.image1.onload = function()
    {
        if (APP.originalTexture === undefined || APP.originalTexture._src != this.APP.image1.src)
        {
            APP.originalTexture.updateTextureContent(this, w, h);
            APP.textures["original-texture"] = APP.originalTexture;
            APP.fboTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture._height);
            APP.pingPassTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture
                ._height);
            APP.pongPassTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture
                ._height);
            APP.originalTexture.setOrigin("center", "center");
            APP.fboTexture.setOrigin("center", "center");
            APP.originalTexture.resetTransformation();
            APP.fboTexture.resetTransformation();
            APP.originalTexture.translate(APP.originalTexture._width / 2, APP.originalTexture._height / 2);
            APP.fboTexture.translate(APP.originalTexture._width / 2, APP.originalTexture._height / 2);
            update_accessory_textures();
            APP.app.setCanvasSize(APP.originalTexture._width, APP.originalTexture._height);
            APP.app.setFrameBufferObjectSize(APP.originalTexture._trueWidth, APP.originalTexture._trueHeight);
            APP.app.setTextureAsRenderTargetForFbo(APP.fboTexture);
            render_texture(APP.originalTexture);
            APP.app.setCanvasAsRenderTarget()
        }
        load_image2()
    };
    APP.image1.src = "imgs/temp.png"
}

function load_image2()
{
    APP.image1 = new Image;
    APP.image1.crossOrigin = "anonymous";
    APP.image1.APP = APP;
    APP.image1.onerror = function()
    {
        alert("'" + this.src + "' is not a valid url to an image")
    };
    APP.image1.onload = function()
    {
        if (APP.originalTexture === undefined || APP.originalTexture._src != this.APP.image1.src)
        {
            APP.originalTexture.updateTextureContent(this);
            APP.textures["original-texture"] = APP.originalTexture;
            APP.fboTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture._height);
            APP.pingPassTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture
                ._height);
            APP.pongPassTexture.updateTextureContent(null, APP.originalTexture._width, APP.originalTexture
                ._height);
            APP.originalTexture.setOrigin("center", "center");
            APP.fboTexture.setOrigin("center", "center");
            APP.originalTexture.resetTransformation();
            APP.fboTexture.resetTransformation();
            APP.originalTexture.translate(APP.originalTexture._width / 2, APP.originalTexture._height / 2);
            APP.fboTexture.translate(APP.originalTexture._width / 2, APP.originalTexture._height / 2);
            update_accessory_textures();
            APP.app.setCanvasSize(APP.originalTexture._width, APP.originalTexture._height);
            APP.app.setFrameBufferObjectSize(APP.originalTexture._trueWidth, APP.originalTexture._trueHeight);
            APP.app.setTextureAsRenderTargetForFbo(APP.fboTexture);
            render_texture(APP.originalTexture);
            APP.app.setCanvasAsRenderTarget()
        }
        update_screen();
        UpdateCanvasSize();
        hide_loader()
    };
    if (APP.image1.src == "" || APP.image1.src != $("#image1Url").val()) APP.image1.src = ChosenImageUrl
}

function load_texture_from_url(a, b, c, d)
{
    var e = new Image;
    e.crossOrigin = "anonymous";
    e.texName = b;
    e.onerror = d;
    e.onSuccessCallback = c;
    e.onload = function()
    {
        if (APP.textures[this.texName]) APP.textures[this.texName].freeFromMemory();
        APP.textures[this.texName] = new GLTexture(APP.app.getContext(), this);
        if (this.onSuccessCallback) this.onSuccessCallback()
    };
    e.src = a
}

function load_texture_from_url(a, b, c, d, w, h)
{
    var e = new Image;
    e.crossOrigin = "anonymous";
    e.texName = b;
    e.onerror = d;
    e.onSuccessCallback = c;
    e.onload = function()
    {
        if (APP.textures[this.texName]) APP.textures[this.texName].freeFromMemory();
        APP.textures[this.texName] = new GLTexture(APP.app.getContext(), this, w, h);
        if (this.onSuccessCallback) this.onSuccessCallback()
    };
    e.src = a
}

function set_defaults(a)
{
    a = a || APP.mode.name;
    if (APP.mode.name == "basic")
    {
        APP.brightness = 0;
        APP.contrast = 1;
        APP.gamma = 1;
        APP.exposure = 0;
        APP.saturation = 0;
        APP.hueShift = 0;
        APP.redChannel = 1;
        APP.blueChannel = 1;
        APP.greenChannel = 1
    }
    if (APP.mode.name == "lighted")
    {
        APP.lightPosition = [APP.fboTexture._width / 2, APP.fboTexture._height / 2, 500];
        APP.lightAmbient = hex_to_rgb("#262626");
        APP.lightDiffuse = hex_to_rgb("#c0c0c0");
        APP.lightSpecular = hex_to_rgb("#ffffff");
        APP.materialShininess = 10;
        APP.lightIntensity = 200;
        APP.doSpecularCalculation = true;
        APP.lightViewerPosition = [.5,
            .5
        ]
    }
    if (APP.mode.name == "twirl")
    {
        APP.twirlCenter = [.5, .5];
        APP.twirlAmount = .1;
        APP.twirlRadius = 1
    }
    if (APP.mode.name == "grey_scale")
    {
        APP.greyScaleRedChannel = 1;
        APP.greyScaleBlueChannel = 1;
        APP.greyScaleGreenChannel = 1;
        APP.HSVPointer = 0;
        APP.HSVWidth = .1
    }
    if (APP.mode.name == "fish_eye") APP.fishEyePower = -.1;
    if (APP.mode.name == "barrel_distortion")
    {
        APP.barrelDistortCenter = [.5,
            .5
        ];
        APP.barrelPower = 1;
        APP.barrelRadius = 100
    }
    if (APP.mode.name == "radial_wave")
    {
        APP.radialWaveCenter = [.5, .5];
        APP.radialWaveLength = .05;
        APP.radialWaveAmplitude = .01
    }
    if (APP.mode.name == "toon_greenish") APP.toonGreenishEdgeThreshold = .5;
    if (APP.mode.name == "toon") APP.toonEdgeThreshold = .5;
    if (APP.mode.name == "edge")
    {
        APP.edgeVxOffset = 1;
        APP.edgeVxOffset2 = 1
    }
    if (APP.mode.name == "frame") APP.frameTexture = $("#frameTexture").val("arrow_frame").val();
    if (APP.mode.name == "toon_2") APP.toon2EdgeThreshold = .5;
    if (APP.mode.name == "focus_blur")
    {
        APP.focusBlurCenter = [.5, .5];
        APP.focusBlurDistance = 1;
        APP.focusBlurStrength = 2.2;
        APP.focusBlurStrength = 2.2
    }
    if (APP.mode.name == "blur")
    {
        APP.blurStrengthVertical = 0;
        APP.blurStrengthHorizontal = 0
    }
    if (APP.mode.name == "mirror")
    {
        APP.mirrorCenter = [.5, .5];
        APP.mirrorAngle = 0;
        APP.mirrorDistance = 0
    }
    if (APP.mode.name == "triangle_blur")
    {
        APP.triangleBlurDeltaHorizontal = .02;
        APP.triangleBlurDeltaVertical = .02
    }
    if (APP.mode.name == "monochrome")
    {
        APP.monochromeIntensity = .3;
        APP.monochromeColor = hex_to_rgb("#2196f3")
    }
    if (APP.mode.name == "sharpen") APP.sharpenAmount = 1.5;
    if (APP.mode.name == "denoise") APP.denoiseExponent = 25;
    if (APP.mode.name == "vignette")
    {
        APP.vignetteCenter = [.5, .5];
        APP.vignetteStart = .15;
        APP.vignetteRange = .5;
        APP.vignetteColor = hex_to_rgb("#000000")
    }
    if (APP.mode.name == "highlight_shadow")
    {
        APP.highlightShadowHighlight = 0;
        APP.highlightShadowShadow = 0
    }
    if (APP.mode.name == "a_sketch") APP.aSketchSharpness = .3;
    if (APP.mode.name == "a_sketch2")
    {
        APP.aSketch2Sharpness = .3;
        APP.aSketch2Val1 = .6;
        APP.aSketch2Val2 = .5;
        APP.aSketch2Val3 = .3
    }
    if (APP.mode.name == "overlay")
    {
        APP.overlayColor = [1, 0, 0];
        APP.overlayAmount = 1;
        APP.overlayMode = 14;
        APP.overlayIsOverlayBackground = false;
        APP.overlayTexture = "original-texture"
    }
    if (APP.mode.name == "sketch")
    {
        APP.sketchTexture = $("#sketchTexture").val("sketch1_overlay").val();
        APP.sketchShader = 0
    }
    if (APP.mode.name == "effects") APP.effectsShader = 0;
    if (APP.mode.name == "colored_sketch_with_vignette")
    {
        APP.vignetteCenter = [.5, .5];
        APP.vignetteStart = .39;
        APP.vignetteRange = .34;
        APP.sharpenAmount = 2.5;
        APP.toonEdgeThreshold = 1.4
    }
    if (APP.mode.name == "heavy_outlined_sketch")
    {
        APP.greyScaleRedChannel = 1;
        APP.greyScaleBlueChannel = 1;
        APP.greyScaleGreenChannel = 1;
        APP.HSVPointer = 0;
        APP.HSVWidth = .1
    }
    if (APP.mode.name == "water_paint_with_vignette")
    {
        APP.vignetteCenter = [.5, .5];
        APP.vignetteStart = .39;
        APP.vignetteRange = .34;
        APP.toonEdgeThreshold = $("#wpwv_toonEdgeThreshold").val(1.4).val()
    }
    if (APP.mode.name == "realistic_water_paint_with_vignette")
    {
        APP.vignetteCenter = [.5, .5];
        APP.vignetteStart = .39;
        APP.vignetteRange = .34
    }
    if (APP.mode.name == "sepia") APP.sepiaAmount = 1;
    if (APP.mode.name == "noise") APP.noiseAmount = .5;
    if (APP.mode.name == "vibrance") APP.vibranceAmount = 1;
    if (APP.mode.name == "hexagonal_pixelate")
    {
        APP.hexagonalPixelateCenter = [
            .5, .5
        ];
        APP.hexagonalPixelateScale = 9.01
    }
    if (APP.mode.name == "colorhalftone")
    {
        APP.colorhalftoneCenter = [.5,
            .5
        ];
        APP.colorhalftoneAngle = 0;
        APP.colorhalftoneScale = 5
    }
    if (APP.mode.name == "dotscreen")
    {
        APP.dotscreenCenter = [.5, .5];
        APP.dotscreenAngle = 0;
        APP.dotscreenScale = 5
    }
    if (APP.mode.name == "tiltshift")
    {
        APP.tiltshiftBlurRadius = 200;
        APP.tiltshiftGradientRadius = APP.fboTexture._height * 2;
        APP.tiltshiftStart = [0, APP.fboTexture._height / 2];
        APP.tiltshiftEnd = [APP.fboTexture._width, APP.fboTexture._height / 2]
    }
    if (APP.mode.name == "zoom_blur")
    {
        APP.zoomBlurCenter = [.5, .5];
        APP.zoomBlurStrength = .2
    }
    if (APP.mode.name == "bloom")
    {
        APP.bloomFilterThreshold = 0;
        APP.triangleBlurDeltaHorizontal = 0;
        APP.triangleBlurDeltaVertical = 0
    }
    if (APP.mode.name == "mirrorwave")
    {
        APP.mirrorCenter = [.5, .5];
        APP.mirrorAngle = 0;
        APP.mirrorDistance = 0;
        APP.radialWaveCenter = [.5, .5];
        APP.radialWaveLength = .05;
        APP.radialWaveAmplitude = .01
    }
}

function load_shaders()
{
    APP.simpleShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"], SHADER_STRINGS[
        "simple-shader-fs"], false);
    APP.simpleGreyAlphaShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["simple-grey-alpha-shader-fs"], false);
    APP.basicShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"], SHADER_STRINGS[
        "basic-shader-fs"], false);
    APP.sepiaShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"], SHADER_STRINGS[
        "sepia-shader-fs"], false);
    APP.vibranceShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["vibrance-shader-fs"], false);
    APP.noiseShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"], SHADER_STRINGS[
        "noise-shader-fs"], false);
    APP.hexagonalPixelateShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["hexagonal-pixelate-shader-fs"], false);
    APP.colorhalftoneShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["colorhalftone-shader-fs"], false);
    APP.toneMapCreationShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["tone-map-creation-shader-fs"], false);
    APP.toneCurveShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["tone-curve-shader-fs"], false);
    APP.radialWaveShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["radial-wave-shader-fs"], false);
    APP.triangleBlurShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["triangle-blur-shader-fs"], false);
    APP.sharpenShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["sharpen-shader-fs"], false);
    APP.verticalDenoiseShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["vertical-denoise-shader-fs"], false);
    APP.horizontalDenoiseShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["horizontal-denoise-shader-fs"], false);
    APP.vignetteShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["vignette-shader-fs"], false);
    APP.monochromeShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["monochrome-shader-fs"], false);
    APP.overlayShaderSet1 = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["overlay-shader-set-1-fs"], false);
    APP.overlayShaderSet2 = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["overlay-shader-set-2-fs"], false);
    APP.overlayShaderSet3 = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["overlay-shader-set-3-fs"], false);
    APP.overlayShaderSet4 = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["overlay-shader-set-4-fs"], false);
    APP.zoomBlurShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["zoom-blur-shader-fs"], false);
    APP.alphaShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"], SHADER_STRINGS[
        "alpha-shader-fs"], false);
    APP.brushOverlayShader = new GLSLShader(APP.app.getContext(), SHADER_STRINGS["basic-shader-vs"],
        SHADER_STRINGS["brush-overlay-shader-fs"], false)
}

function load_overlay_textures()
{
    load_texture_from_url("imgs/cir.png", "a_brush");
    load_texture_from_url("imgs/colorwheel.png", "colorwheel");
    load_texture_from_url("imgs/colorwheel.png", "overlay-texture");
    load_texture_from_url("imgs/cir.png", "circleframe-texture")
}

function init(h)
{
    APP.app = new WebGL2DApp("gl_canvas", APP.viewWidth, APP.viewHeight);
    APP.textures = {};
    load_shaders();
    load_overlay_textures();
    APP.app.makeFrameBufferObject();
    APP.spareTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.originalTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.fboTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.pingPassTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.pongPassTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.filterTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.miniTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.bloomTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.brushForegroundTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.brushBackgroundTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.brushSandwitchTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.brushOverviewTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.brushOverlayTexture = new GLTexture(APP.app.getContext(), null, 1, 1);
    APP.undoStates = [
    {},
    {},
    {},
    {},
    {},
    {}];
    for (var i = 0; i < APP.undoStates.length; i++) APP.undoStates[i].texture = new GLTexture(APP.app.getContext(),
        null, 1, 1);
    APP.allowUndoSteps = 0;
    APP.allowRedoSteps = 0;
    APP.undoIndex = 0;
    APP.brushUndoStates = [
    {},
    {},
    {},
    {},
    {},
    {}];
    for (var i = 0; i < APP.brushUndoStates.length; i++) APP.brushUndoStates[i].texture = new GLTexture(APP.app
        .getContext(), null, 1, 1);
    APP.brushAllowUndoSteps = 0;
    APP.brushAllowRedoSteps = 0;
    APP.brushUndoIndex = 0;
    APP.mode = {
        name: "basic",
        img_no: 1,
        identical_dimensions: 0
    };
    set_defaults();
    load_images();
    $("#mode").val("basic");
    $("#mode > option").each(function()
    {
        $("#" + $(this).val()).hide()
    });
    $("#" + APP.mode.name).show();
    APP.isBrushing = false;
    APP.previousMousePosition = [0, 0];

    function mouseOnClick(e)
    {
        console.log("Asfd: ");
        APP.isBrushing = true;
        if (APP.isFilterRegionOn && APP.filterRegionType == "brush") store_brush_undo_state();
        if (APP.isFilterRegionOn && APP.filterRegionType == "brush")
        {
            APP.eraseBrushPosition = [e.layerX, e.layerY];
            update_brush_foreground_texture(APP.eraseBrushPosition[0], APP.eraseBrushPosition[1]);
            update_screen()
        }
        APP.previousMousePosition = [e.layerX,
            e.layerY
        ]
    }

    function mouseOnRelease(e)
    {
        APP.isBrushing = false
    }

    function mouseOnMove(e)
    {
        if (APP.isBrushing)
            if (APP.isFilterRegionOn && APP.filterRegionType == "brush")
            {
                APP.eraseBrushPosition = [
                    e.layerX, e.layerY
                ];
                var a = 20;
                var b = [e.layerX, e.layerY];
                var c = Math.sqrt(Math.pow(APP.previousMousePosition[0] - b[0], 2), Math.pow(APP.previousMousePosition[
                    1] - b[1], 2));
                var d = 0;
                var f = c;
                while (f > a)
                {
                    d++;
                    f -= a
                }
                for (var i = 0; i < d; i++)
                {
                    APP.eraseBrushPosition[0] += (APP.previousMousePosition[0] - b[0]) / c * a;
                    APP.eraseBrushPosition[1] += (APP.previousMousePosition[1] - b[1]) / c * a;
                    update_brush_foreground_texture(APP.eraseBrushPosition[0], APP.eraseBrushPosition[1])
                }
                APP.eraseBrushPosition = b;
                update_brush_foreground_texture(b[0], b[1], true);
                var g = [0, 0];
                g[0] = e.layerX - APP.brushOverviewTexture._width / 2;
                if (g[0] < 0) g[0] = 0;
                if (g[0] > APP.brushBackgroundTexture._width - APP.brushOverviewTexture._width) g[0] = APP.brushBackgroundTexture
                    ._width - APP.brushOverviewTexture._width;
                g[1] = e.layerY - APP.brushOverviewTexture._height - 30;
                if (g[1] < 0) g[1] = e.layerY + 30;
                APP.brushOverviewTexture.moveTo(g[0], g[1]);
                update_screen()
            }
        APP.previousMousePosition = [e.layerX,
            e.layerY
        ]
    }
    APP.app._canvas.addEventListener("mousedown", mouseOnClick);
    APP.app._canvas.addEventListener("mouseup", mouseOnRelease);
    APP.app._canvas.addEventListener("mousemove", mouseOnMove);
    if (h) h()
}

function brush_test(o, a)
{
    $(".canvas-container").hide();
    set_filter_region_brush(o, a);
    for (var i = 0; i <= 600; i += 10);
    update_screen()
}

function add_brush_listeners()
{
    var h = APP.app._canvas;
    APP.isBrushing = false;
    APP.previousMousePosition = [0, 0];

    function mouseOnClick(e)
    {
        APP.isBrushing = true;
        if (APP.isFilterRegionOn && APP.filterRegionType == "brush") store_brush_undo_state();
        if (APP.isFilterRegionOn && APP.filterRegionType == "brush")
        {
            APP.eraseBrushPosition = [e.layerX, e.layerY];
            update_brush_foreground_texture(APP.eraseBrushPosition[0], APP.eraseBrushPosition[1]);
            update_screen()
        }
        APP.previousMousePosition = [e.layerX,
            e.layerY
        ]
    }

    function mouseOnRelease(e)
    {
        APP.isBrushing = false
    }

    function mouseOnMove(e)
    {
        if (APP.isBrushing)
            if (APP.isFilterRegionOn && APP.filterRegionType == "brush")
            {
                APP.eraseBrushPosition = [
                    e.layerX, e.layerY
                ];
                var a = 20;
                var b = [e.layerX, e.layerY];
                var c = Math.sqrt(Math.pow(APP.previousMousePosition[0] - b[0], 2), Math.pow(APP.previousMousePosition[
                    1] - b[1], 2));
                var d = 0;
                var f = c;
                while (f > a)
                {
                    d++;
                    f -= a
                }
                for (var i = 0; i < d; i++)
                {
                    APP.eraseBrushPosition[0] += (APP.previousMousePosition[0] - b[0]) / c * a;
                    APP.eraseBrushPosition[1] += (APP.previousMousePosition[1] - b[1]) / c * a;
                    update_brush_foreground_texture(APP.eraseBrushPosition[0], APP.eraseBrushPosition[1])
                }
                APP.eraseBrushPosition = b;
                update_brush_foreground_texture(b[0], b[1], true);
                var g = [0, 0];
                g[0] = e.layerX - APP.brushOverviewTexture._width / 2;
                if (g[0] < 0) g[0] = 0;
                if (g[0] > APP.brushBackgroundTexture._width - APP.brushOverviewTexture._width) g[0] = APP.brushBackgroundTexture
                    ._width - APP.brushOverviewTexture._width;
                g[1] = e.layerY - APP.brushOverviewTexture._height - 30;
                if (g[1] < 0) g[1] = e.layerY + 30;
                APP.brushOverviewTexture.moveTo(g[0], g[1]);
                update_screen()
            }
        APP.previousMousePosition = [e.layerX,
            e.layerY
        ]
    }
    h.addEventListener("mousedown", mouseOnClick);
    h.addEventListener("mouseup", mouseOnRelease);
    h.addEventListener("mousemove", mouseOnMove)
}

function render_texture(a)
{
    APP.simpleShader.use();
    APP.app.renderTextures(APP.simpleShader, a);
    APP.simpleShader.unuse()
}

function render_texture_grey_alpha(a)
{
    APP.simpleGreyAlphaShader.use();
    APP.app.renderTextures(APP.simpleGreyAlphaShader, a);
    APP.simpleGreyAlphaShader.unuse()
}

function render_texture_alpha(a)
{
    APP.alphaShader.use();
    APP.alphaShader.sendUniformFloat("uAlpha", .5);
    APP.app.renderTextures(APP.alphaShader, a);
    APP.alphaShader.unuse()
}

function render_texture_erase_brush(a)
{
    APP.eraseBrushShader.use();
    APP.eraseBrushShader.sendUniformVec2("uPosition", APP.eraseBrushPosition);
    APP.eraseBrushShader.sendUniformFloat("uBrushRadius", APP.eraseBrushRadius);
    APP.app.renderTextures(APP.eraseBrushShader, a);
    APP.eraseBrushShader.unuse()
}

function render_texture_middle_circle(a)
{
    var b = APP.eraseBrushRadius;
    APP.middleCircleShader.use();
    APP.middleCircleShader.sendUniformFloat("uCircleRadius", b);
    APP.app.renderTextures(APP.middleCircleShader, a);
    APP.middleCircleShader.unuse()
}

function render_texture_basic(a)
{
    APP.basicShader.use();
    APP.basicShader.sendUniformFloat("uBrightness", APP.brightness);
    APP.basicShader.sendUniformFloat("uContrast", APP.contrast);
    APP.basicShader.sendUniformFloat("uSaturation", APP.saturation);
    APP.basicShader.sendUniformFloat("uGamma", APP.gamma);
    APP.basicShader.sendUniformFloat("uExposure", APP.exposure);
    APP.basicShader.sendUniformFloat("uHueShift", APP.hueShift);
    APP.basicShader.sendUniformVec3("uRGB", [APP.redChannel,
        APP.greenChannel, APP.blueChannel
    ]);
    APP.app.renderTextures(APP.basicShader, a);
    APP.basicShader.unuse()
}

function render_texture_mirror(a)
{
    APP.mirrorShader.use();
    APP.mirrorShader.sendUniformVec2("uMirrorCenter", APP.mirrorCenter);
    APP.mirrorShader.sendUniformFloat("uAngle", APP.mirrorAngle);
    APP.mirrorShader.sendUniformFloat("uDistance", APP.mirrorDistance);
    APP.app.renderTextures(APP.mirrorShader, a);
    APP.mirrorShader.unuse()
}

function render_texture_mirrorwave(a)
{
    APP.mirrorwaveShader.use();
    APP.mirrorwaveShader.sendUniformVec2("uMirrorCenter", APP.mirrorCenter);
    APP.mirrorwaveShader.sendUniformFloat("uAngle", APP.mirrorAngle);
    APP.mirrorwaveShader.sendUniformFloat("uDistance", APP.mirrorDistance);
    APP.mirrorwaveShader.sendUniformFloat("uAmplitude", APP.radialWaveAmplitude);
    APP.mirrorwaveShader.sendUniformFloat("uWaveLength", APP.radialWaveLength);
    APP.mirrorwaveShader.sendUniformVec2("uWaveCenter", APP.radialWaveCenter);
    APP.app.renderTextures(APP.mirrorwaveShader, a);
    APP.mirrorwaveShader.unuse()
}

function render_texture_toon_greenish(a)
{
    APP.toonGreenishShader.use();
    APP.toonGreenishShader.sendUniformFloat("uEdgeThreshold", APP.toonGreenishEdgeThreshold);
    APP.app.renderTextures(APP.toonGreenishShader, a);
    APP.toonGreenishShader.unuse()
}

function render_texture_toon(a)
{
    APP.toonShader.use();
    APP.toonShader.sendUniformFloat("uEdgeThreshold", APP.toonEdgeThreshold);
    APP.app.renderTextures(APP.toonShader, a);
    APP.toonShader.unuse()
}

function render_texture_toon_2(a)
{
    APP.toon2Shader.use();
    APP.toon2Shader.sendUniformFloat("uEdgeThreshold", APP.toon2EdgeThreshold);
    APP.app.renderTextures(APP.toon2Shader, a);
    APP.toon2Shader.unuse()
}

function render_texture_twirl(a)
{
    APP.twirlShader.use();
    APP.twirlShader.sendUniformFloat("uRadius", APP.twirlRadius);
    APP.twirlShader.sendUniformFloat("uAmount", APP.twirlAmount);
    APP.twirlShader.sendUniformVec2("uTwirlCenter", APP.twirlCenter);
    APP.app.renderTextures(APP.twirlShader, a);
    APP.twirlShader.unuse()
}

function render_texture_focus_blur(a)
{
    APP.focusBlurShader.use();
    APP.focusBlurShader.sendUniformFloat("uDistance", APP.focusBlurDistance);
    APP.focusBlurShader.sendUniformFloat("uStrength", APP.focusBlurStrength);
    APP.focusBlurShader.sendUniformVec2("uCenter", APP.focusBlurCenter);
    APP.app.renderTextures(APP.focusBlurShader, a);
    APP.focusBlurShader.unuse()
}

function render_texture_blur(a)
{
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.filterTexture);
    APP.verticalBlurShader.use();
    APP.verticalBlurShader.sendUniformFloat("uStrength", APP.blurStrengthVertical);
    APP.app.renderTextures(APP.verticalBlurShader, a);
    APP.app.setTextureAsRenderTargetForFbo(b);
    APP.horizontalBlurShader.use();
    APP.horizontalBlurShader.sendUniformFloat("uStrength", APP.blurStrengthHorizontal);
    APP.app.renderTextures(APP.horizontalBlurShader, APP.filterTexture);
    APP.horizontalBlurShader.unuse()
}

function render_texture_triangle_blur(a)
{
    APP.triangleBlurShader.use();
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.filterTexture);
    APP.triangleBlurShader.sendUniformVec2("uDelta", [APP.triangleBlurDeltaHorizontal,
        0
    ]);
    APP.app.renderTextures(APP.triangleBlurShader, a);
    APP.app.setTextureAsRenderTargetForFbo(b);
    APP.triangleBlurShader.sendUniformVec2("uDelta", [0, APP.triangleBlurDeltaVertical]);
    APP.app.renderTextures(APP.triangleBlurShader, APP.filterTexture);
    APP.triangleBlurShader.unuse()
}

function render_texture_radial_wave(a)
{
    APP.radialWaveShader.use();
    APP.radialWaveShader.sendUniformFloat("uAmplitude", APP.radialWaveAmplitude);
    APP.radialWaveShader.sendUniformFloat("uWaveLength", APP.radialWaveLength);
    APP.radialWaveShader.sendUniformVec2("uWaveCenter", APP.radialWaveCenter);
    APP.app.renderTextures(APP.radialWaveShader, a);
    APP.radialWaveShader.unuse()
}

function render_texture_fish_eye(a)
{
    APP.fishEyeShader.use();
    APP.fishEyeShader.sendUniformFloat("uPower", APP.fishEyePower);
    APP.app.renderTextures(APP.fishEyeShader, a);
    APP.fishEyeShader.unuse()
}

function render_texture_barrel_distortion(a)
{
    APP.barrelDistortionShader.use();
    APP.barrelDistortionShader.sendUniformFloat("uBarrelPower", APP.barrelPower);
    APP.barrelDistortionShader.sendUniformFloat("uRadius", APP.barrelRadius);
    APP.barrelDistortionShader.sendUniformVec2("uDistortCenter", APP.barrelDistortCenter);
    APP.app.renderTextures(APP.barrelDistortionShader, a);
    APP.barrelDistortionShader.unuse()
}

function render_texture_grey_scale(a)
{
    APP.greyScaleShader.use();
    APP.greyScaleShader.sendUniformFloat("uHSVPointer", APP.HSVPointer);
    APP.greyScaleShader.sendUniformFloat("uHSVWidth", APP.HSVWidth);
    APP.greyScaleShader.sendUniformVec3("uRGB", [APP.greyScaleRedChannel,
        APP.greyScaleGreenChannel,
        APP.greyScaleBlueChannel
    ]);
    APP.app.renderTextures(APP.greyScaleShader, a);
    APP.greyScaleShader.unuse()
}

function render_texture_lighted(a)
{
    APP.lightShader.use();
    APP.lightShader.sendUniformMatrix("uNormalMatrix", a._modelViewMatrix.inverse().transpose());
    APP.lightShader.sendUniformFloat("uLightIntensity", APP.lightIntensity);
    APP.lightShader.sendUniformFloat("uMaterialShininess", APP.materialShininess);
    APP.lightShader.sendUniformFloat("uDoSpecularCalculation", APP.doSpecularCalculation);
    APP.lightShader.sendUniformVec3("uLightPosition", APP.lightPosition);
    APP.lightShader.sendUniformVec3("uLightAmbient", APP.lightAmbient);
    APP.lightShader.sendUniformVec3("uLightDiffuse", APP.lightDiffuse);
    APP.lightShader.sendUniformVec3("uLightSpecular", APP.lightSpecular);
    APP.lightShader.sendUniformVec2("uViewerPosition", APP.lightViewerPosition);
    APP.app.renderTextures(APP.lightShader, a);
    APP.lightShader.unuse()
}

function render_texture_tone_curve(a, b, c, d)
{
    var h = APP.filterTexture._height;
    var w = APP.filterTexture._width;
    render_tone_map(a, b, c, APP.filterTexture);
    APP.toneCurveShader.use();
    APP.app.renderTextures(APP.toneCurveShader, d, APP.filterTexture);
    APP.toneCurveShader.unuse();
    APP.filterTexture.updateTextureContent(null, w, h)
}

function render_tone_map(d, e, f, g)
{
    var h = [-1, -1, -1];
    var k = [0, 0];
    var l = null;
    var m = [d, e, f];
    var n = [];
    var o = function(a, b, c)
    {
        return a * (1 - c) + b * c
    };
    for (var t = 0; t < g._width; t++)
    {
        l = t / (g._width - 1);
        h = [-1, -1, -1];
        for (var j = 0; j < 3; j++)
        {
            k = [0, 0];
            for (var i = 0; i < m[j].length; i++)
                if (l < m[j][i][0])
                {
                    var p = m[j][i];
                    h[j] = o(k[1], p[1], Math.min(1, Math.max(0, (l - k[0]) / (p[0] - k[0] + 1E-6))));
                    break
                }
                else k = m[j][i];
            if (h[j] == -1) h[j] = k[1]
        }
        n.push(h[0] * 255);
        n.push(h[1] * 255);
        n.push(h[2] * 255);
        n.push(255)
    }
    g.updateTextureContent(new Uint8Array(n), g._width, 1)
}

function render_textures_normalmapped_lighted(a)
{
    APP.lightNormalmapShader.use();
    APP.lightNormalmapShader.sendUniformMatrix("uNormalMatrix", arguments[0]._modelViewMatrix.inverse().transpose());
    APP.lightNormalmapShader.sendUniformFloat("uLightIntensity", 10);
    APP.lightNormalmapShader.sendUniformFloat("uMaterialShininess", APP.materialShininess);
    APP.lightNormalmapShader.sendUniformFloat("uDoSpecularCalculation", APP.doSpecularCalculation);
    APP.lightNormalmapShader.sendUniformVec3("uLightPosition", APP.lightPosition);
    APP.lightNormalmapShader.sendUniformVec3("uLightAmbient", APP.lightAmbient);
    APP.lightNormalmapShader.sendUniformVec3("uLightDiffuse", APP.lightDiffuse);
    APP.lightNormalmapShader.sendUniformVec3("uLightSpecular", APP.lightSpecular);
    APP.app.renderTextures(APP.lightNormalmapShader, a);
    APP.lightNormalmapShader.unuse()
}

function render_texture_overlay(a)
{
    var b;
    if (APP.overlayMode >= 0 && APP.overlayMode <= 6) b = APP.overlayShaderSet1;
    else if (APP.overlayMode >= 7 && APP.overlayMode <= 13) b = APP.overlayShaderSet2;
    else if (APP.overlayMode >= 14 && APP.overlayMode <= 20) b = APP.overlayShaderSet3;
    else if (APP.overlayMode >= 21 && APP.overlayMode <= 28) b = APP.overlayShaderSet4;
    else alert("ERROR SHOULD NEVER HAPPEN");
    b.use();
    if (APP.overlayMode >= 21 && APP.overlayMode <= 28) b.sendUniformVec3("uOverlayColor", APP.overlayColor);
    b.sendUniformFloat("uAmount", APP.overlayAmount);
    b.sendUniformInt("uType", APP.overlayMode);
    b.sendUniformInt("uIsOverlayBackground", APP.overlayIsOverlayBackground);
    APP.app.renderTextures(b, a, APP.textures[APP.overlayTexture]);
    b.unuse()
}

function render_texture_frame(a)
{
    APP.frameShader.use();
    APP.app.renderTextures(APP.frameShader, a, APP.textures[APP.frameTexture]);
    APP.frameShader.unuse()
}

function render_texture_sharpen(a)
{
    APP.sharpenShader.use();
    APP.sharpenShader.sendUniformFloat("uSharpenAmount", APP.sharpenAmount);
    APP.app.renderTextures(APP.sharpenShader, a);
    APP.sharpenShader.unuse()
}

function render_texture_denoise(a)
{
    if (APP.denoiseExponent >= 31)
    {
        render_texture(a);
        return
    }
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.filterTexture);
    APP.verticalDenoiseShader.use();
    APP.verticalDenoiseShader.sendUniformFloat("uExponent", APP.denoiseExponent);
    APP.app.renderTextures(APP.verticalDenoiseShader, a);
    APP.app.setTextureAsRenderTargetForFbo(b);
    APP.horizontalDenoiseShader.use();
    APP.horizontalDenoiseShader.sendUniformFloat("uExponent", APP.denoiseExponent);
    APP.app.renderTextures(APP.horizontalDenoiseShader, APP.filterTexture);
    APP.horizontalDenoiseShader.unuse()
}

function render_texture_vignette(a)
{
    APP.vignetteShader.use();
    APP.vignetteShader.sendUniformFloat("uStart", APP.vignetteStart);
    APP.vignetteShader.sendUniformFloat("uRange", APP.vignetteRange);
    APP.vignetteShader.sendUniformVec2("uCenter", APP.vignetteCenter);
    APP.vignetteShader.sendUniformVec3("uColor", APP.vignetteColor);
    APP.app.renderTextures(APP.vignetteShader, a);
    APP.vignetteShader.unuse()
}

function render_texture_highlight_shadow(a)
{
    APP.highlightShadowShader.use();
    APP.highlightShadowShader.sendUniformFloat("uHighlight", APP.highlightShadowHighlight);
    APP.highlightShadowShader.sendUniformFloat("uShadow", APP.highlightShadowShadow);
    APP.app.renderTextures(APP.highlightShadowShader, a);
    APP.highlightShadowShader.unuse()
}

function render_texture_monochrome(a)
{
    APP.monochromeShader.use();
    APP.monochromeShader.sendUniformFloat("uIntensity", APP.monochromeIntensity);
    APP.monochromeShader.sendUniformVec3("uColor", APP.monochromeColor);
    APP.app.renderTextures(APP.monochromeShader, a);
    APP.monochromeShader.unuse()
}

function render_texture_edge(a)
{
    APP.edgeShader.use();
    APP.edgeShader.sendUniformFloat("uVxOffset", APP.edgeVxOffset);
    APP.edgeShader.sendUniformFloat("uVxOffset2", APP.edgeVxOffset2);
    APP.app.renderTextures(APP.edgeShader, a);
    APP.edgeShader.unuse()
}

function render_texture_sketch(a)
{
    APP.sketchShaders[APP.sketchShader].use();
    APP.app.renderTextures(APP.sketchShaders[APP.sketchShader], a, APP.textures[APP.sketchTexture]);
    APP.sketchShaders[APP.sketchShader].unuse()
}

function render_texture_a_sketch(a)
{
    APP.aSketchShader.use();
    APP.aSketchShader.sendUniformFloat("uSharpnessVal", APP.aSketchSharpness);
    APP.app.renderTextures(APP.aSketchShader, a, APP.textures["a_sketch_overlay"]);
    APP.aSketchShader.unuse()
}

function render_texture_a_sketch2(a)
{
    APP.aSketch2Shader.use();
    APP.aSketch2Shader.sendUniformFloat("uVal1", APP.aSketch2Val1);
    APP.aSketch2Shader.sendUniformFloat("uVal2", APP.aSketch2Val2);
    APP.aSketch2Shader.sendUniformFloat("uVal3", APP.aSketch2Val3);
    APP.aSketch2Shader.sendUniformFloat("uSharpnessVal", APP.aSketch2Sharpness);
    APP.app.renderTextures(APP.aSketch2Shader, a, APP.textures["blue_overlay"]);
    APP.aSketch2Shader.unuse()
}

function render_texture_effects(a)
{
    APP.effectsShaders[APP.effectsShader].use();
    APP.app.renderTextures(APP.effectsShaders[APP.effectsShader], a);
    APP.effectsShaders[APP.effectsShader].unuse()
}

function render_texture_brush_overlay()
{
    if (APP.brushOverlayMode == -1)
    {
        APP.brushOverlayShader.use();
        APP.brushOverlayShader.sendUniformFloat("uOpacity", APP.brushMaskOpacity);
        APP.app.renderTextures(APP.brushOverlayShader, APP.brushForegroundTexture, APP.brushSandwitchTexture);
        APP.brushOverlayShader.unuse();
        return
    }
    var a = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.brushOverlayTexture);
    APP.app.getContext().clearColor(0, 0, 0, 0);
    APP.app.clearDisplay();
    APP.brushOverlayShader.use();
    APP.brushOverlayShader.sendUniformFloat("uOpacity", APP.brushMaskOpacity);
    APP.app.renderTextures(APP.brushOverlayShader, APP.brushForegroundTexture, APP.brushSandwitchTexture);
    APP.brushOverlayShader.unuse();
    APP.app.setTextureAsRenderTargetForFbo(a);
    var b;
    if (APP.brushOverlayMode >= 0 && APP.brushOverlayMode <= 6) b = APP.overlayShaderSet1;
    else if (APP.brushOverlayMode >= 7 && APP.brushOverlayMode <= 13) b = APP.overlayShaderSet2;
    else if (APP.brushOverlayMode >= 14 && APP.brushOverlayMode <= 20) b = APP.overlayShaderSet3;
    else if (APP.brushOverlayMode >= 21 && APP.brushOverlayMode <= 27) b = APP.overlayShaderSet4;
    else alert("ERROR SHOULD NEVER HAPPEN");
    b.use();
    b.sendUniformFloat("uAmount", APP.brushOverlayAmount);
    b.sendUniformInt("uType", APP.brushOverlayMode);
    b.sendUniformInt("uIsOverlayBackground", APP.brushOverlayIsOverlayBackground);
    APP.app.renderTextures(b, APP.brushOverlayTexture, APP.brushBackgroundTexture);
    b.unuse()
}

function hex_to_rgb(a)
{
    var b = parseInt(a.slice(1), 16);
    var c = b >> 16 & 255;
    var d = b >> 8 & 255;
    var e = b & 255;
    return [c / 255, d / 255, e / 255]
}

function colored_sketch_with_vignette(a)
{
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    render_texture_sharpen(a);
    APP.app.setTextureAsRenderTargetForFbo(APP.pongPassTexture);
    APP.vignetteColor = hex_to_rgb("#ffffff");
    render_texture_vignette(APP.pingPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    render_texture_toon(APP.pongPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(APP.pongPassTexture);
    APP.effectsShader = 8;
    render_texture_effects(APP.pingPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    APP.sketchTexture = "sketch1_overlay-1";
    APP.sketchShader = 7;
    render_texture_sketch(APP.pongPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(b);
    render_texture(APP.pingPassTexture)
}

function heavy_outlined_sketch(a)
{
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    APP.effectsShader = 0;
    render_texture_effects(a);
    APP.app.setTextureAsRenderTargetForFbo(APP.pongPassTexture);
    render_texture_grey_scale(APP.pingPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    APP.sketchTexture = "sketch1_overlay-3";
    APP.sketchShader = 7;
    render_texture_sketch(APP.pongPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(b);
    render_texture(APP.pingPassTexture)
}

function water_paint_with_vignette(a)
{
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.pongPassTexture);
    APP.vignetteColor = hex_to_rgb("#ffffff");
    render_texture_vignette(a);
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    render_texture_toon(APP.pongPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(APP.pongPassTexture);
    APP.sketchTexture = "brush_overlay-0";
    APP.sketchShader = 7;
    render_texture_sketch(APP.pingPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(b);
    render_texture(APP.pongPassTexture)
}

function realistic_water_paint_with_vignette(a)
{
    var b = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.pongPassTexture);
    APP.vignetteColor = hex_to_rgb("#ffffff");
    render_texture_vignette(a);
    APP.app.setTextureAsRenderTargetForFbo(APP.pingPassTexture);
    APP.sketchTexture = "brush_overlay-0";
    APP.sketchShader = 7;
    render_texture_sketch(APP.pongPassTexture);
    APP.app.setTextureAsRenderTargetForFbo(b);
    render_texture(APP.pingPassTexture)
}

function ping_pong_effects()
{
    var a = APP.app.getTargetTexture();
    var b = [APP.pingPassTexture, APP.pongPassTexture];
    var c = 0;
    var d = arguments[0];
    APP.app.setTextureAsRenderTargetForFbo(b[c]);
    arguments[1](d);
    c = Number(!c);
    for (var i = 2; i < arguments.length; i++)
    {
        APP.app.setTextureAsRenderTargetForFbo(b[c]);
        arguments[i](b[Number(!c)]);
        c = Number(!c)
    }
    APP.app.setTextureAsRenderTargetForFbo(a);
    render_texture(b[Number(!c)])
}

function update_accessory_textures(w, h)
{
    w = w || APP.fboTexture._width;
    h = h || APP.fboTexture._height;
    APP.pingPassTexture.updateTextureContent(null, w, h);
    APP.pingPassTexture.resetTransformation();
    APP.pingPassTexture.setOrigin("center", "center");
    APP.pingPassTexture.translate(APP.pingPassTexture._origin.x, APP.pingPassTexture._origin.y);
    APP.pongPassTexture.updateTextureContent(null, w, h);
    APP.pongPassTexture.resetTransformation();
    APP.pongPassTexture.setOrigin("center", "center");
    APP.pongPassTexture.translate(APP.pongPassTexture._origin.x, APP.pongPassTexture._origin.y);
    APP.filterTexture.updateTextureContent(null, w, h);
    APP.filterTexture.resetTransformation();
    APP.filterTexture.setOrigin("center", "center");
    APP.filterTexture.translate(APP.pongPassTexture._origin.x, APP.pongPassTexture._origin.y);
    var f = function()
    {
        do
            if (APP.textures["colorwheel"] != undefined)
            {
                var a = APP.fboTexture._width / APP.textures["colorwheel"]._width;
                APP.textures["colorwheel"].scale(a, a)
            }
        while (APP.textures["colorwheel"] == undefined)
    };
    setTimeout(f, 0)
}

function render_texture_colorhalftone(a)
{
    APP.colorhalftoneShader.use();
    APP.colorhalftoneShader.sendUniformFloat("uScale", Math.PI / APP.colorhalftoneScale);
    APP.colorhalftoneShader.sendUniformFloat("uAngle", APP.colorhalftoneAngle);
    APP.colorhalftoneShader.sendUniformVec2("uCenter", APP.colorhalftoneCenter);
    APP.app.renderTextures(APP.colorhalftoneShader, a);
    APP.colorhalftoneShader.unuse()
}

function render_texture_dotscreen(a)
{
    APP.dotscreenShader.use();
    APP.dotscreenShader.sendUniformFloat("uScale", Math.PI / APP.dotscreenScale);
    APP.dotscreenShader.sendUniformFloat("uAngle", APP.dotscreenAngle);
    APP.dotscreenShader.sendUniformVec2("uCenter", APP.dotscreenCenter);
    APP.app.renderTextures(APP.dotscreenShader, a);
    APP.dotscreenShader.unuse()
}

function render_texture_hexagonal_pixelate(a)
{
    APP.hexagonalPixelateShader.use();
    APP.hexagonalPixelateShader.sendUniformFloat("uScale", APP.hexagonalPixelateScale);
    APP.hexagonalPixelateShader.sendUniformVec2("uCenter", APP.hexagonalPixelateCenter);
    APP.app.renderTextures(APP.hexagonalPixelateShader, a);
    APP.hexagonalPixelateShader.unuse()
}

function render_texture_sepia(a)
{
    APP.sepiaShader.use();
    APP.sepiaShader.sendUniformFloat("uAmount", APP.sepiaAmount);
    APP.app.renderTextures(APP.sepiaShader, a);
    APP.sepiaShader.unuse()
}

function render_texture_vibrance(a)
{
    APP.vibranceShader.use();
    APP.vibranceShader.sendUniformFloat("uAmount", APP.vibranceAmount);
    APP.app.renderTextures(APP.vibranceShader, a);
    APP.vibranceShader.unuse()
}

function render_texture_noise(a)
{
    APP.noiseShader.use();
    APP.noiseShader.sendUniformFloat("uAmount", APP.noiseAmount);
    APP.app.renderTextures(APP.noiseShader, a);
    APP.noiseShader.unuse()
}

function render_texture_tiltshift(a)
{
    APP.tiltshiftShader.use();
    var b = -APP.tiltshiftStart[1] + APP.tiltshiftEnd[1];
    var c = APP.tiltshiftEnd[0] - APP.tiltshiftStart[0];
    var d = Math.sqrt(b * b + c * c);
    APP.tiltshiftShader.sendUniformFloat("uBlurRadius", APP.tiltshiftBlurRadius);
    APP.tiltshiftShader.sendUniformFloat("uGradientRadius", APP.tiltshiftGradientRadius);
    APP.tiltshiftShader.sendUniformVec2("uStart", APP.tiltshiftStart);
    APP.tiltshiftShader.sendUniformVec2("uEnd", APP.tiltshiftEnd);
    APP.tiltshiftShader.sendUniformVec2("uDelta", [c / d, b / d]);
    var e = APP.app.getTargetTexture();
    APP.app.setTextureAsRenderTargetForFbo(APP.filterTexture);
    APP.app.renderTextures(APP.tiltshiftShader, a);
    APP.tiltshiftShader.sendUniformVec2("uDelta", [-b / d, c / d]);
    APP.app.setTextureAsRenderTargetForFbo(e);
    APP.app.renderTextures(APP.tiltshiftShader, APP.filterTexture);
    APP.tiltshiftShader.unuse()
}

function render_texture_zoom_blur(a)
{
    APP.zoomBlurShader.use();
    APP.zoomBlurShader.sendUniformFloat("uStrength", APP.zoomBlurStrength);
    APP.zoomBlurShader.sendUniformVec2("uCenter", APP.zoomBlurCenter);
    APP.app.renderTextures(APP.zoomBlurShader, a);
    APP.zoomBlurShader.unuse()
}

function render_texture_bloom(a)
{
    var b = APP.app.getTargetTexture();
    APP.bloomTexture.updateTextureContent(null, a._trueWidth, a._trueHeight);
    APP.app.setTextureAsRenderTargetForFbo(APP.bloomTexture);
    APP.app.clearDisplay();
    APP.bloomFilterShader.use();
    APP.bloomFilterShader.sendUniformFloat("uThreshold", APP.bloomFilterThreshold);
    APP.app.renderTextures(APP.bloomFilterShader, a);
    APP.bloomFilterShader.unuse();
    APP.triangleBlurShader.use();
    APP.app.setTextureAsRenderTargetForFbo(APP.filterTexture);
    APP.triangleBlurShader.sendUniformVec2("uDelta", [APP.triangleBlurDeltaHorizontal,
        0
    ]);
    APP.app.renderTextures(APP.triangleBlurShader, APP.bloomTexture);
    APP.app.setTextureAsRenderTargetForFbo(b);
    APP.triangleBlurShader.sendUniformVec2("uDelta", [0, APP.triangleBlurDeltaVertical]);
    APP.app.renderTextures(APP.triangleBlurShader, APP.filterTexture);
    APP.triangleBlurShader.unuse();
    render_texture(a);
    APP.app.gl.blendFunc(APP.app.gl.ONE, APP.app.gl.ONE);
    render_texture_triangle_blur(APP.bloomTexture);
    APP.app.gl.blendFunc(APP.app.gl.SRC_ALPHA, APP.app.gl.ONE_MINUS_SRC_ALPHA)
};
//---------- 08script.js end ----------