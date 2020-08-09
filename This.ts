const Human={
    name : 'Raki',
    walk(){
        console.log(this);
    }
};

Human.walk();

const walk = Human.walk;
//walk();
console.log(walk);