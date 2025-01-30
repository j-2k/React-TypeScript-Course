let userName : string = "Juma";
let userAge : number = 1337;
let isAlive : boolean = false;

type StringOrNumber = string | number;

let userID : StringOrNumber;
userID = "Juma342";
userID = 342;

//let human : object;
type Human = {
    name: string;
    race: string;
    age: number;
    ID: StringOrNumber;
    isAlive: boolean;
}

let fakeHuman : Human;

fakeHuman = {
    name: "Armago",
    race: "Ork",
    age: 147,
    ID: 2164,
    isAlive: true
}

let hobbies: string[];

hobbies = ["Nothing", "Farming", "Enchanting"];

function add2(x: number, y: number): number{
    return x + y;
}

function multiply2(x: number, y: number): number{
    return x * y;
}

type AddFunction = (a: number, b: number) => number;
type MultiplyFunction = (a: number, b: number) => number;

type Intake2 = (a: number, b: number) => number;

function calculate(a: number, b: number, calculatingFunction: Intake2){     //calculatingFunction: AddFunction | MultiplyFunction){
    calculatingFunction(a,b);
}

console.log("Calculate Function : " + calculate(10,10, multiply2));


//Interfaces will force you to implement it's properties! Don't forget! :D

interface Enemy {
    name: string;
    health: number;
    level: number;
};

let bugFly : Enemy;

bugFly = {
    name: "Bugger",
    health: 20,
    level: 1,
};

class Bug implements Enemy{
    name = "BugBug";
    health = 30;
    level = 2;
}

function addEnemyToRoom(enemy : Enemy){
    console.log("Added the " + enemy.name + " to the room!");
}

addEnemyToRoom(new Bug());
addEnemyToRoom(bugFly);

interface EnemyBoss extends Enemy {
    phases: string[];
}

interface RoomBoss extends EnemyBoss {  //extends Enemy, EnemyBoss{
    isEndOfFloor : boolean;
}

let finalBoss : RoomBoss;

finalBoss = {
    name : "Buggracite",
    level : 5,
    health : 500,
    phases : ["Fly", "Walk"],
    isEndOfFloor : true,
}

type Role = "DMG" | "TANK" | "SUPP";

let playerQ : Role;

playerQ = "DMG";
playerQ = "TANK";
playerQ = "SUPP";
//playerQ = "HEAL"; //Wrong!

function RolesCheck(dungeon: string | number, P1: Role | "FILL"){
    if(P1 === "FILL" && typeof dungeon === 'string'){
        console.log("Player Fill + Dungeon is a string type!")
    }
}

let dungeonRoles : Array<Role>;
dungeonRoles = ["TANK", "DMG", "DMG","DMG","SUPP"];

type Data<T> = {
    storage: T[];
    add: (data: T) => void;
}

const textStorage: Data<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    },

}

const userStorage: Data<Role> = {
    storage: [],
    add(playerRole) {
        this.storage.push(playerRole);
    },

}


function merge<T, U>(a: T, b: U){
    return{
        ...a,
        ...b,
    };
}

const newEnemy = merge(
    {
        name : "Clown",
        level : 20
    },
    {
        health : 100,
        mana: 50,
    }
);

const newPlayer = merge(
    fakeHuman,playerQ
);



