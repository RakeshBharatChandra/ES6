"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Girl = /** @class */ (function () {
    function Girl(name) {
        this.name = name;
    }
    Girl.prototype.walk = function () {
        console.log("walk");
    };
    return Girl;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(name, degree) {
        var _this = _super.call(this, name) || this;
        _this.degree = degree;
        return _this;
    }
    teacher.prototype.teach = function () {
        console.log("teacher");
    };
    return teacher;
}(Girl));
var madam = new teacher('Lalli', 'B.Tech');
var mn = madam.name;
var md = madam.degree;
console.log(mn);
console.log(md);
//# sourceMappingURL=inheretence.js.map