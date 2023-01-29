/*Exercises: Level 1-1 Create an empty object called dog*/
const dog= {}

/*Exercises: Level 1-2 Print the the dog object on the console*/
const dog= {}
console.log(dog);

/*Exercises: Level 1-3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof*/
const dog= {
    name: "Puppy",
    legs: 4,
    color: "black",
    age: 2,
    bark: function(){
        return "woof woof"
    }
}
console.log(dog);

/*Exercises: Level 1-4 Get name, legs, color, age and bark value from the dog object*/
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

/*Exercises: Level 1-5 Set new properties the dog object: breed, getDogInfo*/
dog.breed = "akita"
dog.getDogInfo= function(){
    return `Name:${this.name}, \nAge: ${this.age}, \nLegs: ${this.legs}, \ncolor: ${this.color},\nbreed: ${this.breed},\nand bark: ${this.bark()}`
}
console.log(dog.getDogInfo());

/*Exercises: Level 2-1 Find the person who has many skills in the users object.*/
let lengthMax=[]
let personHasMax
const manySkills = ()=>{
    for(let person in users){
        if(users[person].skills.length>lengthMax.length){
        lengthMax = users[person].skills
        personHasMax = person
    }
}
    return personHasMax
}
console.log(manySkills());

/*Exercises: Level 2-2 Count logged in users, count users having greater than equal to 50 points from the following object.*/
let count=0
let users50=""
const loggedIn = () =>{
    for(let person in users){
        if(users[person].isLoggedIn){
            count++
        }
        if(users[person].points>=50){
            users50+=`${person},`
        }
    }
    return `Logged in Users:${count}, \nUsers >= 50 points: ${users50}`
}
console.log(loggedIn());

/*Exercises: Level 2-3 Find people who are MERN stack developer from the users object*/
let hasMern=""
const mernDev=()=>{
    for(let person in users){
        if(users[person].skills.includes("MongoDB")&&users[person].skills.includes("React")&&
        users[person].skills.includes("Express")&&users[person].skills.includes("Node"))
        hasMern+=`${person}\n`
    }
    return hasMern
}
console.log(mernDev());

/*Exercises: Level 2-4 Set your name in the users object without modifying the original users object*/
const newName = {Eren: {
    "email":'eren@gmail.com',
    "skills": ['HTML', 'CSS', 'JavaScript'],
    "age": 35,
    "isLoggedIn": true,
    "points": 50
}
}
const newUsers = Object.assign({},users,newName)
console.log(users);
console.log(newUsers);

/*Exercises: Level 2-5 Get all keys or properties of users object*/
for(let person in users){
    console.log(person);
}

/*Exercises: Level 2-6 Get all the values of users object*/
for(let person in users){
    console.log(users[person]);
}

/*Exercises: Level 2-7 Use the countries object to print a country name, capital, populations and languages.*/
const countries = {
    Turkey: {
        name: "Turkey",
        capital:"Istanbul",
        population: "80 million",
        language: "Turkish"
    },
    Greece: {
        name: "Greece",
        capital:"Athens",
        population: "10.6 million",
        language: "Modern Greek"
    }
}
console.log(countries);

/*Exercises: Level 3-1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.*/
const personAccount ={
    firstName:"",
    lastName:"",
    incomes:"",
    expenses:"",
    totalIncome: function(){
    },
    totalExpense: function(){
    },
    accountInfo: function(){
    },
    addIncome: function(){
    },
    addExpense: function(){
    },
    accountBalance: function(){
    }
}
console.log(personAccount);

/*Exercises: Level 3-2 a,b */
let date = new Date()
let newUser={}
const signUp =()=>{
    let username = document.getElementById("user").value
    let password = document.getElementById("pass").value
    let newId=""
    for(k=0;k<6;k++){
       newId+="abcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()* 36))
    }
    for(i=0; i<users.length;i++){
        if(username==users[i].username&&password==users[i].password){
            return console.log("Logged In");
        }
    }
    for(l=0; l<users.length; l++){
        if(username==users[l].username&&password!=users[l].password){
            return console.log("You have already an account");
        }
    }
    for(m=0;m<users.length;m++){
        if(username!=users[m].username&&password!=users[m].password){
            Object.assign(newUser,
            {username: prompt("New username for Sign Up ?")+""},{email: prompt("New email ?")+""},
            {password: prompt("New pass ?")+""},
            {createdAt: `${date.toLocaleString('en-US', {hour12: true})}`},
            {IsLoggedIn: true},
            {_id: newId })
            users.push(newUser)
            return console.log(users , newUser)
        }
    }
}

/*Exercises: Level 3-3 a,b */
const rateProduct =()=>{
    let x
    let y=0
    for(i=0; i<products.length; i++){
        for(k=0; k<products[i].ratings.length; k++){
        x+= `\n${products[i].name} rate ${k+1} = ${products[i].ratings[k].rate}`
        }
    }
    return x
}
const averageRating =()=>{
    let ave
    for(m=0; m<products.length; m++){
        let y=0
        for(n=0; n<products[m].ratings.length; n++){
        y+= products[m].ratings[n].rate
        }
        ave =`${products[m].name} average rating : ${y / (n)}`
        console.log(ave);
    }
}

console.log(rateProduct());
console.log(averageRating());

/*Exercises: Level 3-4 */
const likeProduct=()=>{
    let liked="",
        notLiked=""
    for(i=0; i<users.length;i++){
        for(k=0; k<products.length;k++){
            if(products[k].likes.includes(users[i]._id)){
                liked+=`\n${users[i].username} liked product ${products[k].name}`
        }
        else{notLiked+=`\n${users[i].username} is not liked product ${products[k].name}`}
        }
    }
    return liked + notLiked
}
console.log(likeProduct())