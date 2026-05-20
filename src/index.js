class Animals  {
    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    move(){ 
        console.log('I can move');
    } 

    say(){
        console.log(`I can't say`);
    } 
    
    eat(){
        console.log('I can eat everything');
    }
}

class Mammals extends Animals {

   static maxWeight = '150000 kg';
   static maxAge = '200 years';

    constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isMammals(obj){
       return obj instanceof Mammals;
    }

}

class Birds extends Animals {

   static maxWeight = '150 kg';
    static maxAge = '100 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isBirds(obj){
       return obj instanceof Birds;
    }

     move(){ 
        console.log('I can fly');
    } 

    say(){
        console.log(`I can say tweet-tweet`);
    } 
    
    eat(){
        console.log('I can eat worms');
    }

}

class Fish extends Animals {
    static maxWeight = '2300 kg';
    static maxAge = '200 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isFish(obj){
       return obj instanceof Fish;
    }

     move(){ 
        console.log('I can swim');
    } 

    say(){
        console.log(`I can't say`);
    } 
    
    eat(){
        console.log('I can eat another fish or planctone');
    }
}

class Predators extends Mammals {
    static maxWeight = '300 kg';
    static maxAge = '30 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isPredators(obj){
       return obj instanceof Predators;
    }

}

class Whales extends Mammals {
    static maxWeight = '150000 kg';
    static maxAge = '200 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isWhales(obj){
       return obj instanceof Whales;
    }

}

class Primates extends Mammals {
    static maxWeight = '250 kg';
    static maxAge = '120 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isPrimates(obj){
       return obj instanceof Primates;
    }

}

class Dog extends Predators {
    static maxWeight = '90 kg';
    static maxAge = '20 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isDog(obj){
       return obj instanceof Dog;
    }

     move(){ 
        console.log('I can run');
    } 

    say(){
        console.log(`I can say woof`);
    } 
    
    eat(){
        console.log('I can eat meat');
    }

}

class Dolphine extends Whales {
    static maxWeight = '400 kg';
    static maxAge = '50 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isDolphine(obj){
       return obj instanceof Dolphine;
    }

     move(){ 
        console.log('I can swim and jump');
    } 

    say(){
        console.log(`I can say whistle`);
    } 
    
    eat(){
        console.log('I can eat  fish and squid');
    }
}

class Human extends Primates {
    static maxWeight = '300 kg';
    static maxAge = '122 years';

     constructor (age, name, weight, limbAmount) {
        super (age, name, weight, limbAmount)
    }

    static isHuman(obj){
       return obj instanceof Human;
    }

    move(){ 
        console.log('I can walk, run and jump');
    } 

    say(){
        console.log(`I can say everything`);
    } 
    
    eat(){
        console.log('I can eat everything');
    }

}

const mammal1 = new Mammals(12, 'Elephant', 5000, 4);
const mammal2 = new Mammals(5, 'Tiger', 220, 4);

const bird1 = new Birds(2, 'Parrot', 1, 2);
const bird2 = new Birds(4, 'Eagle', 6, 2);

const fish1 = new Fish(1, 'Goldfish', 0.2, 0);
const fish2 = new Fish(15, 'Shark', 900, 0);

const predator1 = new Predators(6, 'Wolf', 50, 4);
const predator2 = new Predators(8, 'Lion', 190, 4);

const whale1 = new Whales(25, 'Blue Whale', 140000, 0);
const whale2 = new Whales(18, 'Humpback Whale', 30000, 0);

const primate1 = new Primates(7, 'Chimpanzee', 60, 4);
const primate2 = new Primates(12, 'Gorilla', 180, 4);

const dog1 = new Dog(3, 'Rex', 30, 4);
const dog2 = new Dog(5, 'Buddy', 25, 4);

const dolphine1 = new Dolphine(10, 'Flipper', 250, 0);
const dolphine2 = new Dolphine(7, 'Snow', 220, 0);

const human1 = new Human(20, 'Oleg', 75, 4);
const human2 = new Human(30, 'Anna', 60, 4);


const data = [
  [mammal1, Mammals], [mammal2, Mammals],
  [bird1, Birds], [bird2, Birds],
  [fish1, Fish], [fish2, Fish],
  [predator1, Predators], [predator2, Predators],
  [whale1, Whales], [whale2, Whales],
  [primate1, Primates], [primate2, Primates],
  [dog1, Dog], [dog2, Dog],
  [dolphine1, Dolphine], [dolphine2, Dolphine],
  [human1, Human], [human2, Human]
];

for (const [obj, ClassRef] of data) {
  console.log(`--- ${ClassRef.name.toUpperCase()} ---`);

  console.log(`info: ${obj.name}, ${obj.age}, ${obj.weight}, ${obj.limbAmount}`);

  obj.move();
  obj.say();
  obj.eat();

  console.log(ClassRef.maxAge, ClassRef.maxWeight);
  console.log(`is ${ClassRef.name}?`, ClassRef[`is${ClassRef.name}`]?.(obj));
}