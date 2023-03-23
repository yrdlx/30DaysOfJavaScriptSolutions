/*Exercises: Level 1-1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’*/
const rgx = /\d+/g
const rslt = txt.match(rgx)
const sum =rslt.reduce((acc,cur)=>{
    acc+=parseInt(cur);
    return acc
},0)
console.log(sum);
/*Exercises: Level 1-2: The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.*/
const rgx = /\-?\d+/g
const rslt = txt.match(rgx).sort((a,b) => a-b)
console.log(rslt[rslt.length-1]-rslt[0]);

/*Exercises: Level 1-3: Write a pattern which identify if a string is a valid JavaScript variable*/
let rgx = /[a-z]{1,}\_?\w+/g
is_valid_variable=(str)=>{
    if(str.match(rgx) == str){
        return true
    }
    else{return false}
}
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))
/*Exercises: Level 2-1 Write a function called tenMostFrequentWords which get the ten most frequent word from a string?*/
const rgx = /[a-zA-Z]{1,}/g
const newArr = text.match(rgx)
const tenMostFrequentWords = (arr , len) =>{
return Object.entries(arr.reduce((acc,cur)=>{
    acc[cur]=acc[cur] ? acc[cur]+=1 : acc[cur]=1;
    return acc
},{})).map(([key, value]) => ({word: key, count: value})).sort((a,b)=> b.count - a.count).slice(0,len)
}
console.log(tenMostFrequentWords(newArr,10));
/*Exercises: Level 3-1 Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.*/
let rgx = /[\%|\$|\@|\&|\#\;\!|\,]/gi
let newText = text.replace(rgx,"").match(/\w+/g)
let mostFrequentWords = (arr , len)=>{
    return Object.entries(arr.reduce((acc,cur)=>{
    acc[cur]=acc[cur] ? acc[cur]+=1 : acc[cur]=1;
    return acc},{})).map(([key , value])=>({word:key , count:value})).sort((a,b)=> b.count - a.count).slice(0,len)
    }
console.log(mostFrequentWords(newText , 3));
/*Exercises: Level 3-2 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.*/