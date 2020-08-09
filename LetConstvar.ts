/*

function sayHai(){
    for(var i=0;i<5;i++){
        console.log(i);
        //functional Scope
    }
}
sayHai();


*/

function sayHai(){
    for(let x=0;x<5;x++){
        console.log(x);
    }
    //console.log(x);
    // block Scope
}
sayHai();

const n=1;
 //n=2;
 //cannot assaign n because it is a const