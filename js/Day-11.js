/*Exercises: Level 1-1 Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.*/
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp]=constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

/*Exercises: Level 1-2 Destructure and assign the elements of countries array to fin, est, sw, den, nor*/
const [fin, est, sw, den, nor]=countries
console.log(fin, est, sw, den, nor);

/*Exercises: Level 1-3 Destructure the rectangle object by its properties or keys.*/
const {width,height,area,perimeter} = rectangle
console.log(width,height,area,perimeter);

/*Exercises: Level 2-1 Iterate through the users array and get all the keys of the object using destructuring*/
for(let obj of users){
    let {name,scores,skills,age}=obj;
    console.log(name,scores,skills,age);
}

/*Exercises: Level 2-2 Find the persons who have less than two skills*/
for(let obj of users){
    let {name,scores,skills,age}=obj;
    if(skills.length<2){
        console.log(name);
    }
}

/*Exercises: Level 3-1 Destructure the countries object print name, capital, population and languages of all countries*/
for(let country of countries){
    let {name, capital, population, languages} = country
    console.log(name, capital, population, languages);
}

/*Exercises: Level 3-2 A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.*/
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name,skills,[htmlScore,cssScore,jsScore,reactScore]]=student;
console.log(`Name:${name}, Skills:${skills}, jsScore:${jsScore}, reactScore:${reactScore}`)

/*Exercises: Level 3-3 Write a function called convertArrayToObject which can convert the array to a structure object.*/
const convertArrayToObject = (arr) => {
    let newArr = []
    for( x of arr){
            let name = x[0]
            let skills= x[1]
            let score= x[2]
            newArr.push({name,skills,score})
    }
    return newArr
}
console.log(convertArrayToObject(students))

/*Exercises: Level 3-4a Add Bootstrap with level 8 to the front end skill sets*/
const newStudent ={
    ...student
}
newStudent.skills.frontEnd.push({skill: 'BootStrap',level: 8})
newStudent.skills.backEnd.push({skill: 'Express',level: 9})

console.log(newStudent);

/*Exercises: Level 3-1b Add Express with level 9 to the back end skill sets*/
const newStudent ={
    ...student
}
newStudent.skills.backEnd.push({skill: 'Express',level: 9})

console.log(newStudent);

/*Exercises: Level 3-1c Add SQL with level 8 to the data base skill sets*/
const newStudent ={
    ...student
}
newStudent.skills.dataBase.push({skill: 'SQL',level: 8})
console.log(newStudent);

/*Exercises: Level 3-1d Add SQL without level to the data science skill sets*/
const newStudent ={
    ...student
}
student.skills.dataScience.push("SQL")
console.log(newStudent);