const Person={
    name :"Rakesh",
    walk :function(){},
    talk(){}
};

Person.talk();
Person.name='';

const targetMember= 'name';
Person[targetMember. /*value*/ valueOf()]='Raki';
