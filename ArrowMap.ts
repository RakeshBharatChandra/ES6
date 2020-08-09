/*

const colors=['Red','Green','Blue'];
const items=colors.map(function(color){
    return '<li>' +color+ '</li>'
})
console.log(items);

*/

/*

const colors=['Red','Green','Blue'];
const items=colors.map((color)=>'<li>' +color+ '</li>')
console.log(items);

*/

const colors=['Red','Green','Blue'];
const items=colors.map((color)=>`<li> ${color} </li>`)
console.log(items);

