/*Exercises: Level 1-1 Explain the difference between forEach, map, filter, and reduce.
ForEach returns a value like number, string etc...
Map returns Array
Filter: İt looks condition like "a>0" and filter
Reduce: İt take callback and initial value, if there is no initial value, takes element index=0 of array
*/

/*Exercises: Level 1-2
A callback function is a function,it can be used in other function as a parameter.*/

/*Exercises: Level 1-3 Use forEach to console.log each country in the countries array.*/
countries.forEach(x=> console.log(x))

/*Exercises: Level 1-4 Use forEach to console.log each name in the names array.*/
names.forEach(x=> console.log(x))

/*Exercises: Level 1-5 Use forEach to console.log each number in the numbers array.*/
numbers.forEach(x=> console.log(x))

/*Exercises: Level 1-6 Use map to create a new array by changing each country to uppercase in the countries array.*/
let newArr= countries.map(arr => arr.toUpperCase())
console.log(newArr);

/*Exercises: Level 1-7 Use map to create an array of countries length from countries array.*/
let newArr = countries.map(arr => arr.length)
console.log(newArr);

/*Exercises: Level 1-8 Use map to create a new array by changing each number to square in the numbers array
*/
let square = numbers.map(number => number*number)
console.log(square);

/*Exercises: Level 1-9 Use map to change to each name to uppercase in the names array*/
let namesUpper = names.map(name => name.toUpperCase())
console.log(namesUpper);

/*Exercises: Level 1-10 Use map to map the products array to its corresponding prices.*/
let correspondingPrices = products.map(x => x.price)
console.log(correspondingPrices);

/*Exercises: Level 1-11 Use filter to filter out countries containing land.*/
let containingLand = countries.filter(x => x.toLowerCase().includes("land"))
console.log(containingLand);

/*Exercises: Level 1-12 Use filter to filter out countries having six character.*/
let sixCharacter = countries.filter(x => x.length==6)
console.log(sixCharacter);

/*Exercises: Level 1-13 Use filter to filter out countries containing six letters and more in the country array.*/
let sixLetters = countries.filter(x => x.length>=6)
console.log(sixLetters);

/*Exercises: Level 1-14 Use filter to filter out country start with 'E';*/
let startWithF = countries.filter(x => x.toLowerCase().startsWith("f"))
console.log(startWithF);

/*Exercises: Level 1-15 Use filter to filter out only prices with values.*/
let hasPrice = products.filter(x=> x.price!=""&&x.price!=" ")
console.log(hasPrice);

/*Exercises: Level 1-16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.*/
function getStringLists(arr){
    let newArr=[]
    newArr.push(arr.filter(x=> typeof(x)=="string"))
    return newArr
}
console.log(getStringLists(countries));

/*Exercises: Level 1-17 Use reduce to sum all the numbers in te numbers array.*/
let sum = numbers.reduce((acc,init)=>acc+init)
console.log(sum);

/*Exercises: Level 1-18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries*/
let newCountry =countries.pop()
let result =countries.reduce((acc,ini)=>acc+","+ini,"Estonia")
console.log(`${result} and ${newCountry} are north European countries`);

/*Exercises: Level 1-19 Explain the difference between some and every
Some: returns "True" only 1 element providing the condition
Every: returns "True" if all elements providing the condition
*/


/*Exercises: Level 1-20 Use some to check if some names' length greater than seven in names array*/
let namesSeven=names.some(name=> name.length>7)
console.log(namesSeven);

/*Exercises: Level 1-21 Use every to check if all the countries contain the word land*/
let containLand=countries.every(name=> name.includes("land"))
console.log(containLand);

/*Exercises: Level 1-22 Explain the difference between find and findIndex.
Find returns first element that providing the condition, findIndex returns index of first element, providing the condition
*/


/*Exercises: Level 1-23 Use find to find the first country containing only six letters in the countries array*/
let sixLetters=countries.find(country => country.length=6)
console.log(sixLetters)

/*Exercises: Level 1-24 Use findIndex to find the position of the first country containing only six letters in the countries array*/
let sixLetters=countries.findIndex(country => country.length=6)
console.log(sixLetters)

/*Exercises: Level 1-25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.*/
let nor = countries.findIndex(country => country=="Norway")
console.log(nor);

/*Exercises: Level 1-26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.*/
let russ = countries.findIndex(country => country=="Russia ")
console.log(russ);

/* Exercises: Level 2-1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))*/
let newArr = products.filter(hasPrice => typeof(hasPrice.price)=="number").reduce((acc,cur)=> acc+cur.price,0)
console.log(newArr);

/* Exercises: Level 2-2 Find the sum of price of products using only reduce reduce(callback))*/
let sum = products.reduce((acc,cur)=>{
    if(typeof(cur.price)=="number"){
    return acc+cur.price}
    else {return acc+0}
    },0)
console.log(sum);

/* Exercises: Level 2-3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).*/
let categorizeCountries = countries.filter(country=> country.name.toLowerCase().includes("land")+country.name.toLowerCase().includes("ia")+
country.name.toLowerCase().includes("island")+
country.name.toLowerCase().includes("stan"))
console.log(categorizeCountries);

/* Exercises: Level 2-4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.*/
let numbersOfLetter = countries.map(x => x.name.toLowerCase().charAt(0)).reduce((arr,cur)=>{
    if(arr[cur]=arr[cur]){
      arr[cur]+=1}
      else{arr[cur]=1}
      return arr
  },{})
console.log(numbersOfLetter)

/* Exercises: Level 2-5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array*/
let getFirstTenCountries = countries.reduce((arr,cur,index)=>{if(index<10){arr.push(cur)}return arr} 
,[])
console.log(getFirstTenCountries);

/* Exercises: Level 2-6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.*/
let getLastTenCountries = countries.reduce((arr,cur,index)=>{if(index>countries.length-11){arr.push(cur)}return arr} 
,[])
console.log(getLastTenCountries);

/* Exercises: Level 2-7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)*/
let initialLetter = countries.map(x=> x.name.toLowerCase().charAt(0)).reduce((acc,cur)=>{
    acc[cur]=acc[cur] ? acc[cur]+=1 : acc[cur]=1;
    return acc},{})
  console.log(initialLetter);

/*Exercises: Level 3-1 Use the countriesinformation, in the data folder. Sort countries byname, by capital, by population*/
let sortByNames= countries.sort((a,b)=> a.namelocaleCompare(b.name))
let sortByCapital = countries.sort((a,b)=> acapital.localeCompare(b.capital))
let sortByPopulation = countries.sort((a,b)=> apopulation-b.population)
console.log(sortByNames);
console.log(sortByCapital);
console.log(sortByPopulation);

/*Exercises: Level 3-2 Use the countriesinformation, in the data folder. Sort countries byname, by capital, by population*/
let mostSpokenLanguages = (arr , len) =>{
  let newArr = (Object.entries(arr.reduce((acc, cur) =>
  (cur.languages.forEach(lang => acc[lang] ? acc[lang]++ : (acc[lang] = 1 )), acc), {})).map(([key, value]) => ({country: key, count: value})
  ).sort((a, b) => b.count - a.count)).slice(0,len)
  console.log(newArr);
  }
console.log(mostSpokenLanguages(countries, 5))

/*Exercises: Level 3-3 Use the countriesinformation, in the data folder. Sort countries byname, by capital, by population*/
let mostPopulatedCountries =(arr,len)=>(Object.entries(arr.reduce((acc,cur)=>{
  acc[cur.name] = cur.name ?
  acc[cur.name] = cur.population :
  acc[cur.name] = 1
  return acc
},{})).map(([key , value])=> ({country: key, population: value })).sort((a,b)=> b.population - a.population).slice(0,len))
console.log((mostPopulatedCountries(countries,5)));

/*Exercises: Level 3-4 Use the countriesinformation, in the data folder. Sort countries byname, by capital, by population*/
let statistics = {
  count: function(arr){
    return arr.length
  },
  sum: function(arr){
    return arr.reduce((acc,cur)=> acc+cur)
  },
  min: function(arr){
  return Math.min(...arr)
  },
  max: function(arr){
  return Math.max(...arr)
  },
  range: function(arr){
  return this.max(arr) - this.min(arr)
  },
  mean: function(arr){
  return Math.round(this.sum(arr) / this.count(arr))
  },
  median: function(arr){
    let ind = Math.floor(this.count(arr)/2)
  return arr.sort()[ind]
  },
  mode: function(arr){
    return Object.entries(arr.reduce((acc,cur)=> {acc[cur]=acc[cur] ? acc[cur]+=1 : acc[cur]=1; return acc},{})).map(([key, value])=> ({mode: key, count: value})).sort((a,b)=> b.count-a.count)[0];
  },
  var: function(arr){
    let avr = this.sum(arr) / this.count(arr);
    let total= arr.reduce((acc,cur)=> {acc+= (cur-avr)**2;return acc},0);
  return total/this.count(arr)
  },
  std: function(arr){
    let avr = this.sum(arr) / this.count(arr);
    let total= arr.reduce((acc,cur)=> {acc+= (cur-avr)**2;return acc},0);
  return Math.sqrt(total/(this.count(arr)-1))
  },
  freqDist: function(arr){
  return Object.entries(arr.reduce((acc,cur)=> {acc[cur]=acc[cur] ? acc[cur]+=4 : acc[cur]=4; return acc},{})).map(([key , value])=> `(${key}, ${value})`)
  },
  describe: function(arr){
    return `
  Count: ${this.count(arr)}
  Sum:  ${this.sum(arr)}
  Min:  ${this.min(arr)}
  Max:  ${this.max(arr)}
  Range:  ${this.range(arr)}
  Mean:  ${this.mean(arr)}
  Median:  ${this.median(arr)}
  Mode:  (${this.mode(arr).mode} ,${this.mode(arr).count})
  Variance:  ${this.var(arr)}
  Standard Deviation:  ${this.std(arr)}
  Frequency Distribution: [${this.freqDist(arr)}]`
  }
}
console.log(statistics.count(ages));
console.log(statistics.sum(ages));
console.log(statistics.min(ages));
console.log(statistics.max(ages));
console.log(statistics.range(ages));
console.log(statistics.mean(ages));
console.log(statistics.median(ages));
console.log(statistics.mode(ages));
console.log(statistics.var(ages));
console.log(statistics.std(ages));
console.log(statistics.freqDist(ages));
console.log(statistics.describe(ages));