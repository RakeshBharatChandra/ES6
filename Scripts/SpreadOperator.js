"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var first = [1, 2, 3];
var second = [4, 5, 6];
var comb = first.concat(second);
console.log(comb);
var combin = __spreadArrays(first, ['a'], second, ['b']);
console.log(combin);
var clone = __spreadArrays(first);
console.log(clone);
var fst = { name: 'raki' };
var snd = { job: 'learner' };
var combined = __assign(__assign(__assign({}, fst), { location: 'India' }), snd);
console.log(combined);
//# sourceMappingURL=SpreadOperator.js.map