"use strict";
var Human = {
    name: 'Raki',
    walk: function () {
        console.log(this);
    }
};
Human.walk();
var walk = Human.walk;
//walk();
console.log(walk);
//# sourceMappingURL=This.js.map