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

const coolBoy={
    name :"raki",
};

class Boy{
    name: any;
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}
const boy=new Boy('raki');
const bn=boy.name
console.log(bn)