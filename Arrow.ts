/*

const square =function(number){
    return number * number ;
}
console.log(square(4));

*/

/*

const square = (number) =>
{
    return number * number ;
}
console.log(square(8));

*/

/*
const square = number => number*number;
console.log(square(3));

*/

//USAGE OF ARROWS

const Jobs=[
    {id :1 , isActive : true},
    {id :2 , isActive : true},
    {id :3 , isActive : false}
];

/*

const activeJobs=Jobs.filter(function(Jobs){
    return Jobs.isActive
});

console.log(activeJobs);

*/

const activeJobs=Jobs.filter( Jobs  => {
    return Jobs.isActive
});
console.log(activeJobs);

