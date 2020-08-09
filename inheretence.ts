class Girl{
    name: any;
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}
class teacher extends Girl{
    degree: any;
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }  
    teach(){
        console.log("teacher");
    }
}
const madam=new teacher('Lalli','B.Tech');
const mn=madam.name;
const md=madam.degree;
console.log(mn);
console.log(md);