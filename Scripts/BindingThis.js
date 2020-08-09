"use strict";
var Man = {
    name: 'Raki',
    talk: function () {
        console.log(this);
    }
};
Man.talk();
var talk = Man.talk.bind(this);
talk();
//console.log(talk);
//# sourceMappingURL=BindingThis.js.map