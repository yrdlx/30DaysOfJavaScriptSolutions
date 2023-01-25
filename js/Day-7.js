/*Exercises: Level 1-1 Declare a function fullName and it print out your full name. */
function fullName(){
    console.log("Yurdal")
}
fullName()

/*Exercises: Level 1-2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.*/
function fullName(firstName,surname){
    return `${firstName} ${surname}`
}
let y= fullName("Yurdal","Ay")
console.log(y)

/*Exercises: Level 1-3 Declare a function addNumbers and it takes two two parameters and it returns sum.*/
function addNumbers(num1,num2){
    let sum= num1+num2
    return sum
}
console.log(addNumbers(1,2))

/*Exercises: Level 1-4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.*/
function areaOfRectangle(length, width){
    let area= length*width
    return area
}
console.log(areaOfRectangle(3,5))

/*Exercises: Level 1-5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.*/
function perimeterOfRectangle(length,width){
    let perimeter=2*(length+width)
    return perimeter
}
console.log(perimeterOfRectangle(3,5))

/*Exercises: Level 1-6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.*/
function volumeOfRectPrism(length,width,height){
    let volume= length*width*height
    return volume
}
console.log(volumeOfRectPrism(1,2,3))

/*Exercises: Level 1-7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle*/
function areaOfCircle(r){
    let area= (Math.PI)*Math.pow(r,2)
    return area
}
console.log(areaOfCircle(2))

/*Exercises: Level 1-8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle*/
function circumOfCircle(r){
    let circumference =2*(Math.PI)*r;
    return circumference;
}
console.log(circumOfCircle(3))

/*Exercises: Level 1-9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.*/
function density(mass,volume){
    let den = mass/volume
    return den
}
console.log(density(100,5))

/*Exercises: Level 1-10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.*/
function speed(distance,time){
    let speedOfMovingObject= distance/time;
    return speedOfMovingObject;
}
console.log(speed(100,5))

/*Exercises: Level 1-11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.*/
function weight(mass,gravity){
    let result = mass * gravity;
    return result;
}
console.log(weight(5,10))

/*Exercises: Level 1-12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.*/
function convertCelsiusToFahrenheit(celcius){
    let oF=(celcius*(1.8))+32;
    return oF;
}
console.log(convertCelsiusToFahrenheit(100))

/*Exercises: Level 1-13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
let weight = prompt("Weight ?"),
    height = prompt("Height ?"),
    calcBmi= bmi(weight,height)
console.log(calcBmi)

function bmi(weight,height){
    let result =weight/Math.pow(height,2);
    if(result<18.5){
        return "Underweight"
    }
    else if(18.5<=result&&result<=24.9){
        return "Normal weight"
    }
    else if(25<=result&&result<=29.9){
        return "Overweight"
    }
    else if(30<=result){
        return "Obese"
    }
    else{
        return "Error, Try again"
    }
}

/*Exercises: Level 1-14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.*/
let month = prompt("Please write a month")
console.log(checkSeason(month))
function checkSeason(month){
    const months= [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november"
    ]
    let index= months.indexOf(month.toLowerCase())
    if(0<=index&&index<=2){
        return "Winter"
    }
    else if(3<=index&&index<6){
        return "Spring"
    }
    else if(6<=index&&index<9){
        return "Summer"
    }
    else if(9<=index&&index<=11){
        return "Autumn"
    }
    else{
        return "Error, Try again"
    }
}

/*Exercises: Level 1-15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.*/
function findMax (arg1,arg2,arg3){
    let result=-Infinity
    for(i=0; i<=arguments.length; i++){
        if(+arguments[i]>result){
            result=+arguments[i]
        }
    }
    return result;
}
console.log(findMax(-5,-1,-6))

/*Exercises: Level 2-1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.*/
function solveLinEquation(a,b,c){
    let x= (-c/a),
        y= (-c/b)
        return (`${x}, ${y}`)
}
console.log(solveLinEquation(1,2,3))

/*Exercises: Level 2-2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.*/
let x=(a,b,c)=>{
    let discriminant= (Math.pow(b,2)-(4*a*c))
    if(discriminant>0){
        let x1= ((-b-Math.sqrt(discriminant))/(2*a)),
            x2= ((-b+Math.sqrt(discriminant))/(2*a));
        return `x1=${x1} , x2=${x2}`
    }
    else if(discriminant===0){
        let roots= ((-b)/(2*a));
        return `x1 and x2 = ${roots}`
    }
    else{return "No reel roots"
    }
}
console.log(x(4,12,9));

/*Exercises: Level 2-3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.*/
const printArray= arr =>{
    let str="";
    for(i=0; i<arr.length; i++){
        str+=arr[i]+",";
    }
    return str
}
const x= [1,2,"a","b"]
console.log(printArray(x))

/*Exercises: Level 2-4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.*/
const showDateTime= _ =>{
    let time = new Date
    let date=("0"+time.getDate()).slice(-2)
    let month =("0"+time.getMonth()+1).slice(-2)
    let year= time.getFullYear()
    let hour=("0"+time.getHours()).slice(-2)
    let min=("0"+time.getMinutes()).slice(-2)
    let dateTime= `${date}/${month}/${year} ${hour}:${min}`

    return dateTime
}
console.log(showDateTime())

/*Exercises: Level 2-5 Declare a function name swapValues. This function swaps value of x to y*/
const swapValues = (x,y)=>{
    let a=y,
        b=x
    return `${a},${b}`
}
console.log(swapValues(2,3))

/*Exercises: Level 2-6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).*/
function reverseArray(arg){
    let revArr=[];
    for(i=arg.length-1; 0<=i; i--){
      revArr.push((arg[i]))
    }
    return revArr
  }
  console.log(reverseArray([1, 2, 3, 4, 5]))

/*Exercises: Level 2-7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.*/
function capitalizeArray(arg){
    let capArr=[];
    for(i=0; i<arg.length; i++){
      capArr.push((arg[i]).toUpperCase())
    }
    return capArr
  }
  console.log(capitalizeArray(["a","b","c"]))

/*Exercises: Level 2-8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item*/
  const addItem=(...item)=>{
    const arr=[];
    arr.push(...item);
    return arr
}
console.log(addItem(1,"a"))

/*Exercises: Level 2-9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item*/
const removeitem = (index) => {
    let arr = ["a", 1]
    arr.splice(index-1);
    return arr
}
console.log(removeitem(2))


/*Exercises: Level 2-10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.*/
let entry = +prompt("Sayi Giriniz")
const sumOfNumbers=(entry)=>{
    let total=0;
    for(i=1; i<=entry; i++){
        total+=i
    }
    return total
}
console.log(sumOfNumbers(entry));

/*Exercises: Level 2-11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.*/
let entry = +prompt("Sayi Giriniz")
const sumOfOdds=(entry)=>{
    let total=0;
    for(i=1; i<=entry; i++){
        if(i%2!=0){
        total+=i
    }
    }
    return total
}
console.log(sumOfOdds(entry));

/*Exercises: Level 2-12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.*/
let entry = +prompt("Sayi Giriniz")
const sumOfEven=(entry)=>{
    let total=0;
    for(i=1; i<=entry; i++){
        if(i%2==0){
        total+=i
    }
    }
    return total
}
console.log(sumOfEven(entry));

/*Exercises: Level 2-13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.*/
let entry = +prompt("Sayi Giriniz")
const evensAndOdds=(entry)=>{
    let evens=0;
    let odds=0;
    for(i=0; i<=entry; i++){
        if(i%2==0){
        evens+=1
    }
    else{
        odds+=1
    }
    }
    return `Evens: ${evens}, Odds: ${odds}`
}
console.log(evensAndOdds(entry));

/*Exercises: Level 2-14 Write a function which takes any number of arguments and return the sum of the arguments*/
function sumOfArgs(...args){
    let sum=0;
    for(i=0; i<arguments.length; i++){
        sum+=arguments[i]
    }
    return sum
}
console.log(sumOfArgs(1,3,5,10));

/*Exercises: Level 2-15 Writ a function which generates a randomUserIp.*/
randomUserIp= _ =>{
    let first,
        second,
        third
    first=Math.round((Math.random())*256);
    second=Math.round((Math.random())*256);
    third=Math.round((Math.random())*256);
    return `Ip adress is: ${first}.${second}.${third}`
}
console.log(randomUserIp())

/*Exercises: Level 2-16 Write a function which generates a randomMacAddress*/
let randomMacAddress= "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
});
console.log(randomMacAddress)

/*Exercises: Level 2-17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.*/
let randomHexaNumberGenerator="#xxxxxx".replace(/x/g,function(){return "0123456789abcdef".charAt(Math.floor(Math.random() *16))})
console.log((randomHexaNumberGenerator));

/*Exercises: Level 2-18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.*/
let userIdGenerator = "xxxxxxx".replace(/x/g,function(){return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62))
})
console.log(userIdGenerator);

/*Exercises: Level 3-1 Modify the userIdGenerator function*/
let char=+prompt("how many char ?"),
    id=+prompt("how many id ?")
    let result=""
function userIdGeneratedByUser(char,id){
    for(k=0; k<id;k++){
        let x=""
        for(i=0; i<char; i++){
            x+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62))
        }
        result+=`\n${x}`
    }
    return result
}
console.log(userIdGeneratedByUser(char,id));

/*Exercises: Level 3-2 Write a function name rgbColorGenerator and it generates rgb colors.*/
let rgbColorGenerator = _ =>{
    let first , second, third
        first= Math.floor(Math.random() * 256),
        second= Math.floor(Math.random() * 256),
        third= Math.floor(Math.random() * 256)
    return `RGB(${first},${second},${third})`
}
console.log(rgbColorGenerator());

/*Exercises: Level 3-3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.*/
let arrayOfHexaColors = ["#xxxxxx"].join().replace(/x/g,function(){
    return "0123456789abcdef".charAt(Math.floor(Math.random() *16))}).split()
console.log(arrayOfHexaColors);

/*Exercises: Level 3-4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.*/
let arrayOfRgbColors  = ["RGB(x,y,z)"].join().replace(/x/g,function(){
    return (Math.floor(Math.random() *256))}).replace(/y/g,function(){
        return (Math.floor(Math.random() *256))}).replace(/z/g,function(){
            return (Math.floor(Math.random() *256))}).split()
console.log(arrayOfRgbColors);

/*Exercises: Level 3-5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.*/
let hex= (prompt("Hex code ?(without #)")+"").toLowerCase()
let dec = "0123456789abcdef"
let convertHexaToRgb =_=>{
    let r= parseInt(hex.charAt(0)+hex.charAt(1),16)
    let g= parseInt(hex.charAt(2)+hex.charAt(3),16)
    let b= parseInt(hex.charAt(4)+hex.charAt(5),16)
    return `RGB(${r},${g},${b})`
}
console.log(convertHexaToRgb());

/*Exercises: Level 3-6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.*/
let r= +prompt("Red for RGB"),
    g= +prompt("Green for RGB"),
    b= +prompt("Blue for RGB")
const convertRgbToHexa =(r,g,b) =>{
    let red=r.toString(16),
        green=g.toString(16),
        blue=b.toString(16)

    return `Hex is: #${red}${green}${blue}`
}
console.log(convertRgbToHexa(r,g,b))

/*Exercises: Level 3-7 Write a function generateColors which can generate any number of hexa or rgb colors.*/
let color = prompt("RGB or Hex ?").toLowerCase(),
    count = + (prompt("How many ?")),
    result=""
    let first , second, third
const generateColors = (color, count) =>{
    if(color==="rgb"){
    for(i=0; i<count; i++){
        first= Math.floor(Math.random() * 256),
        second= Math.floor(Math.random() * 256),
        third= Math.floor(Math.random() * 256)
        result+= `RGB(${first},${second},${third}) `
    }
    return result
    }
    else if(color ==="hex"){
        for(i=0; i<count; i++){
            first= Math.floor(Math.random() * 256).toString(16),
            second= Math.floor(Math.random() * 256).toString(16),
            third= Math.floor(Math.random() * 256).toString(16)
            result+= `#${first}${second}${third} `
        }
        return `Hex: ${result} `
    }
}
console.log(generateColors(color, count))

/*Exercises: Level 3-8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array*/
const shuffleArray = (arr)=>{
    let newArr = []
    while(newArr.length<arr.length){
        let x= Math.floor(Math.random() * arr.length)
        if(newArr.indexOf(arr[x])==-1){
            newArr.push(arr[x])
        }
    }
    return newArr
}
console.log(shuffleArray([1,2,"a",5,"b"]))

/*Exercises: Level 3-9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number*/
let number = +prompt("number ?")
const factorial = (number)=>{
    let i=1,
        result=1
    while(i<=number){
        result*=i
        i++
    }
    return result
}
console.log(factorial(number))

/*Exercises: Level 3-10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not*/
let entry = prompt("Enter a value")
const isEmpty = (entry)=>{
    if(entry !==""){
        return "not empty"
    }
    else{return "empty"}
}
console.log(isEmpty(entry));

/*Exercises: Level 3-11 Call your function sum, it takes any number of arguments and it returns the sum.*/
let number = +prompt("enter a number")
const sum = (number)=>{
    let i=1,
    result=0
    while(i<=number){
        result+=i
        i++
    }
    return result
}
console.log(sum(number));

/*Exercises: Level 3-12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.*/
const arr=[]
const sumOfArrayItems = (arr)=>{
    let sum=0
    for(i=0; i<arr.length;i++){
        if(typeof(arr[i])==="number"){
            sum+=arr[i]
        }
        else{return "Enter number"}
    }
    return sum
}
console.log(sumOfArrayItems([1,2,5,"a"]));
console.log(sumOfArrayItems([1,2,5]));

/*Exercises: Level 3-13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.*/
const arr=[]
const average = (arr)=>{
    let sum=0
    for(i=0; i<arr.length;i++){
        if(typeof(arr[i])==="number"){
            sum+=arr[i]
        }
        else{return "Enter number"}
    }
    return (sum/(arr.length))
}
console.log(average([1,2,5,"a"]));
console.log(average([1,2,5]));

/*Exercises: Level 3-14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.*/
const arr=[]
const modifyArray=(arr)=>{
    let newArr=[]
    if(arr.length>4){
        for(i=0; i<arr.length; i++){
            if(i==4){
                newArr.push((arr[i]).toUpperCase())
                i++
            }
            newArr.push(arr[i])
    }
        return newArr
    }
    else{ return "item not found"
    }
}
console.log(modifyArray([1,2,"a","x","b","c"]));

/*Exercises: Level 3-15 Write a function called isPrime, which checks if a number is prime number.*/
let number = +prompt("Enter a number")
const isPrime = (number)=>{
    for(i=2; i<number; i++){
        if(number%i==0){
            return "Not Prime"
        }
    }
    return "Prime Number"
}
console.log(isPrime(number));

/*Exercises: Level 3-16 Write a functions which checks if all items are unique in the array.*/
const checkUnique =(arr)=>{
    for(i=0;i<arr.length;i++){
        for(k=0;k<=i; k++){
            if(arr[i]==arr[k] && i!=k)
            {
                return "Not Unique"
            }
        }
    }
    return "Unique"
}
console.log(checkUnique([1,2,3,"a",4,2]));

/*Exercises: Level 3-17 Write a function which checks if all the items of the array are the same data type.*/
const sameDataType =(arr)=>{
    for(i=0;i<arr.length;i++){
        for(k=0;k<=i; k++){
            if(typeof(arr[i])!=typeof(arr[k]))
            {
                return "Not same data type"
            }
        }
    }
    return "same data type"
}
console.log(sameDataType(["a","s",8]));

/*Exercises: Level 3-18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.*/
let variable = prompt("Enter a variable name")+"".toLowerCase(),
    list= "abcdefghijklmnopqrstuvwxyz0123456789$_"
const isValidVariable =(variable)=>{
    for(i=0;i<variable.length;i++){
        if(list.indexOf(variable.charAt(i))==-1){
        return "invalid"
        }
    }
    return "Valid"
}
console.log(isValidVariable(variable));

/*Exercises: Level 3-19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.*/
const arr=[]
const sevenRandomNumbers =_=>{
    while(arr.length<7){
       let x = Math.floor(Math.random() * 10)
       if(arr.indexOf(x)==-1){
        arr.push(x)
       }
    }
    return arr
}
console.log(sevenRandomNumbers());

/*Exercises: Level 3-20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array*/
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']

const reverseCountries =_=>{
    const reverseArray=[]
    for(i=countries.length-1; i>=0;i--){
        reverseArray.push(countries[i])
    }
    return reverseArray
}
console.log(reverseCountries());
console.log(countries.reverse());