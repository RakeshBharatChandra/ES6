"use strict";
/*

const person={
    talk(){
        console.log("this",this);
    }
};
person.talk();

*/
/*

const person={
    talk(){
        setTimeout(function(){
            console.log("this",this);
        },3000);
    }
};
person.talk();

*/
/*

const person={
    talk(){
        var self=this;
        setTimeout(function(){
            console.log("self",self);
        },1000);
    }
};
person.talk();

*/
var person = {
    talk: function () {
        var _this = this;
        //var self=this;
        setTimeout(function () {
            console.log("this", _this);
        }, 1000);
    }
};
person.talk();
//# sourceMappingURL=ArrowFun and This.js.map