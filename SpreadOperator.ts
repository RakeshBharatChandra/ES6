const first=[1,2,3]
const second=[4,5,6]

const comb=first.concat(second);
console.log(comb);

const combin=[...first ,'a', ...second ,'b'];
console.log(combin);

const clone=[...first];
console.log(clone);

const fst={name:'raki'};
const snd={job :'learner'}

const combined=
{...fst, location:'India',...snd}

console.log(combined);