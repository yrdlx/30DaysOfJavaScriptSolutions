/* Exercises Level 1 - 1  Create an Animal class. The class will have name, age, color, legs properties and create different methods*/
class Animal{
    constructor(name, age, color, legs){
        this.name=name;
        this.age=age;
        this.color=color;
        this.legs=legs;
    }
    get animalInfo(){
        const info = this.name + "," + this.age + "," + this.color + ","+ this.legs;
        return info 
    }
}
const zebra = new Animal("Zebra",5,"white-black",4)
console.log(zebra.animalInfo);

/* Exercises Level 1 - 2  Create a Dog and Cat child class from the Animal Class.*/
class Animal{
    constructor(name, age, color, legs){
        this.name=name;
        this.age=age;
        this.color=color;
        this.legs=legs;
    }
    get animalInfo(){
        const info = this.name + "," + this.age + "," + this.color + ","+ this.legs;
        return info 
    }
}
class Dog extends Animal{}
class Cat extends Animal{}
const dog = new Dog("wolf",5,"brown",4)
console.log(dog.animalInfo);

/* Exercises Level 2 - 1 Override the method you create in Animal class*/
class Dog extends Animal{
    constructor(name, age, color, legs,type){
        super(name, age, color, legs)
        this.type=type
    }
    get animalInfo(){
        return super.animalInfo + ","+ this.type
    }

}
let dog = new Dog("woof",5,"brown",4,"wolf")
console.log(dog.animalInfo);

/* Exercises Level 3 - 1  */
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    count(){
        return ages.length
    }
    sum(){
        return ages.reduce((acc,cur)=> acc+cur)
      }
      min(){
      return Math.min(...ages)
      }
      max(){
      return Math.max(...ages)
      }
      range(){
      return this.max(ages) - this.min(ages)
      }
      mean(){
      return Math.round(this.sum(ages) / this.count(ages))
      }
      median(){
        let ind = Math.floor(this.count(ages)/2)
      return ages.sort()[ind]
      }
      mode(){
        return Object.entries(ages.reduce((acc,cur)=> {acc[cur]=acc[cur] ? acc[cur]+=1 : acc[cur]=1; return acc},{})).map(([key, value])=> ({mode: key, count: value})).sort((a,b)=> b.count-a.count)[0];
      }
      var(){
        let avr = this.sum(ages) / this.count(ages);
        let total= ages.reduce((acc,cur)=> {acc+= (cur-avr)**2;return acc},0);
      return total/this.count(ages)
      }
      std(){
        let avr = this.sum(ages) / this.count(ages);
        let total= ages.reduce((acc,cur)=> {acc+= (cur-avr)**2;return acc},0);
      return Math.sqrt(total/(this.count(ages)-1))
      }
      freqDist(){
      return Object.entries(ages.reduce((acc,cur)=> {acc[cur]=acc[cur] ? acc[cur]+=4 : acc[cur]=4; return acc},{})).map(([key , value])=> `(${key}, ${value})`)
      }
      describe(){
        return `
      Count: ${this.count()}
      Sum:  ${this.sum()}
      Min:  ${this.min()}
      Max:  ${this.max()}
      Range:  ${this.range()}
      Mean:  ${this.mean()}
      Median:  ${this.median()}
      Mode:  (${this.mode().mode} ,${this.mode().count})
      Variance:  ${this.var()}
      Standard Deviation:  ${this.std()}
      Frequency Distribution: [${this.freqDist()}]`
      }
}
let statistics = new Statistics;
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist())
console.log(statistics.describe())

/* Exercises Level 3 - 2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.  */
class PersonAccount{
    constructor(firstName, lastName, incomes, expenses){
        this.firstName=firstName;
        this.lastName=lastName;
        this.incomes=incomes;
        this.expenses=expenses
    }
    totalIncome(){

    }
    totalExpense(){

    } 
    accountInfo(){

    }
    addIncome(){

    }
    addExpense(){

    }
    accountBalance(){

    }
}
const personAccount = new PersonAccount()