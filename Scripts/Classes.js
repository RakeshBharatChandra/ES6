"use strict";
/*

const person1={
    name : 'raki',
    walk(){
        console.log("walk");
    }
};

const person2={
    name : 'raki',
    walk(){
        console.log("walk");
    }
};

*/
var coolBoy = {
    name: "raki",
};
var Boy = /** @class */ (function () {
    function Boy(name) {
        this.name = name;
    }
    Boy.prototype.walk = function () {
        console.log("walk");
    };
    return Boy;
}());
var boy = new Boy('raki');
var bn = boy.name;
console.log(bn);
//# sourceMappingURL=Classes.js.map