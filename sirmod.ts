import {Kid} from './kidmod'

export class Sir extends Kid{
    degree: any;
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }  
    teach(){
        console.log("teacher");
    }
}
