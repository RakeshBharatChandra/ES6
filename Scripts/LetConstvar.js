"use strict";
/*

function sayHai(){
    for(var i=0;i<5;i++){
        console.log(i);
        //functional Scope
    }
}
sayHai();


*/
function sayHai() {
    for (var x = 0; x < 5; x++) {
        console.log(x);
    }
    //console.log(x);
    // block Scope
}
sayHai();
var n = 1;
//n=2;
//cannot assaign n because it is a const
//# sourceMappingURL=LetConstvar.js.map