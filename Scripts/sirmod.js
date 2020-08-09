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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sir = void 0;
var kidmod_1 = require("./kidmod");
var Sir = /** @class */ (function (_super) {
    __extends(Sir, _super);
    function Sir(name, degree) {
        var _this = _super.call(this, name) || this;
        _this.degree = degree;
        return _this;
    }
    Sir.prototype.teach = function () {
        console.log("teacher");
    };
    return Sir;
}(kidmod_1.Kid));
exports.Sir = Sir;
//# sourceMappingURL=sirmod.js.map