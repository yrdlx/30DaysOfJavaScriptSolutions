/*Exercises:Level 1-1 Display the countries array as a table */
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)
/*Exercises:Level 1-2 Display the countries object as a table
*/
console.table(countries)
/*Exercises:Level 1-3 Use console.group() to group logs
*/
console.group("Countries")
console.log(countries)
console.groupEnd()
/*Exercises:Level 2-1 10 > 2 * 10 use console.assert()
*/
console.assert(10>2*10 , "10 is not greater than 2*10")
/*Exercises:Level 2-2 Write a warning message using console.warn()
*/
console.warn("This is a warning message")
/*Exercises:Level 2-3 Write an error message using console.error()
*/
console.error("This is a error message")
/*Exercises:Level 3-1 Check the speed difference among the following loops: while, for, for of, forEach
*/
console.time("regular")
for(i=0;i<countries.length;i++){
    console.log(countries[i][0],countries[i][1]);
}
console.timeEnd("regular")
console.time("while")
let x = 0;
while(x<=countries.length){
    console.log(countries[x])
    x++
}
console.timeEnd("while")

console.time("forOf")
for([country,city] of countries){
    console.log(country,city);
}
console.timeEnd("forOf")

console.time("forEach")
countries.forEach(([country,city])=>{
    console.log(country , city);
})
console.timeEnd("forEach")