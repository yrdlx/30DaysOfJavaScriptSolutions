/*Exercises:Level 1-1 create an empty set */
const newSet = new Set();

/*Exercises:Level 1-2 Create a set containing 0 to 10 using loop*/
const newSet = new Set()
for(i=0; i<10;i++){
    newSet.add(i)
}
console.log(newSet);

/*Exercises:Level 1-3Remove an element from a set*/
newSet.delete(5)

/*Exercises:Level 1-4 Clear a set*/
newSet.clear()

/*Exercises:Level 1-5 Create a set of 5 string elements from array*/
const arr = [
    "England",
    "Sweden",
    "Italy",
    "Denmark",
    "Turkey"
]
const newSet= new Set(arr)

/*Exercises:Level 1-6 Create a map of countries and number of characters of a country*/
const countries = ['Finland', 'Sweden', 'Norway']
const newMap = new Map()
countries.forEach(x=> {
    newMap.set(x , x.length)
})
console.log(newMap);

/* Exercises:Level 2-1 Find a union b */
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const newSet = new Set([...a,...b])
console.log(newSet);

/* Exercises:Level 2-2 Find a intersection b */
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const B = new Set(b)
let c = a.filter(num => B.has(num))
const newSet = new Set(c)

/* Exercises:Level 2-3 Find a with b */
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const B = new Set(b)
let c = a.filter(num => !B.has(num))
const newSet = new Set(c)

/* Exercises:Level 3-1 How many languages are there in the countries object file.*/
let mostSpokenLanguages = (arr) =>{
    let newMap = new Map()
    newMap =(Object.entries(arr.reduce((acc, cur) =>
    (cur.languages.forEach(lang => acc[lang] ? acc[lang]++ : (acc[lang] = 1 )), acc), {})).map(([key, value]) => ({country: key, count: value})
    ).sort((a, b) => b.count - a.count))
    console.log(newMap);
    }
console.log(mostSpokenLanguages(countries))

/* Exercises:Level 3-2 Use the countries data to find the 10 most spoken languages */
let mostSpokenLanguages = (arr, len) =>{
    let newMap = new Map()
    newMap =(Object.entries(arr.reduce((acc, cur) =>
    (cur.languages.forEach(lang => acc[lang] ? acc[lang]++ : (acc[lang] = 1 )), acc), {})).map(([key, value]) => ({country: key, count: value})
    ).sort((a, b) => b.count - a.count)).slice(0,len)
    console.log(newMap);
    }
console.log(mostSpokenLanguages(countries,10))