const s = console.log;

//boolean, number, string
//boolean[], number[], string[]
//any, null, undefined

let person: [string, number, boolean] = ['bob', 43, false]
s(Array.isArray(person)) //true

//*************** enum vs object
// enum eDays { Sun, Mon, Tue, Wed, Thu, Fri, Sat}
// let today: eDays = eDays.Thu
// s(today)

// enum peeps { Bob, Frank, Sam, Jim, Joe}
// s( Array.isArray(peeps)) //false
// s(peeps.Sam) //2
// s(peeps[2]) //Sam
// s( peeps[7] ) //undefined
// s( Object.keys(peeps).length / 2)
// s( Object.keys(peeps) )

//get a random peep from an enum
//s ( peeps[ ~~ (Math.random() * (Object.keys(peeps).length/2) ) ] )

// const oDays = { sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6}
// s(oDays.thu)
//s(oDays[4]) //not as nice as with an enum

//*************** casting an unknown to a type
// let myVar: unknown = 'e' //change unknown to any
// s(myVar as number)
// s(myVar as string)
// s(typeof myVar)

//*************** reassigning causes err
// let a = 10
// a = 'apples' //error, as ts has inferred a is a number

// let b; //if b isnt initialized, it gets no inferred type
// b = 10
// b = 'apples' //no error, as b was not initialized

//*************** multiple types (also called union types)
// let a: boolean | number = 0 //multitype
// s(typeof a) //number
// a = 'hello' //error
//s(a == false ? `a is falsy: ${a} ${typeof a}` : `a is truthy: ${a} ${typeof a}`) //error
//s(false == 0) //error, no type coercion!

//***************
// function add(n1: number, n2: number) :number {
//     return n1 + n2
// }
//s(add(3,3))
//// add(//note the intellisense: add(n1: number, n2: number): number

// function add2(n1: number, n2?: number) : number { //optional n2
//     return n2 ? n1 + n2 : n1
// }

// s( add2(6) )
// s( add2(6,7) )

// function foo(a: string|number, b?:number, c:number = 9) : void {
//     s(a,b,c)
// }
// foo('apples', 44)
// foo(4, 33, 22)

//const mul = (n1: number, n2: number = 5) : number => n1 * n2 //default arg in fat arrow func
// s(mul(4,3)) //12
// s( mul( 4 )) //20

// const square = (n1: number, n2: number = 2, n3?: number = 1) => { // error: parameter cant have both default and optional
//     return Math.pow(n1, n2) * n3
// }

//fat arrow taking a tuple of nums
// const sum = ( arr:[number, number]): number[]  => [arr[0] + arr[1]]
// s( sum([4,3]))

//*************** interfaces
// interface iPerson {
//     fname: string;
//     lname: string;
//     gender?: boolean; //optional property
//     age?: number;
// }

// let mike: iPerson = {
//     fname: 'mike',
//     lname: 'lee'
// }

// // // //force a function to take an object of a specific 'shape'
// function foo( person: iPerson, age: number ) : iPerson {
//     return {
//         ...person,
//         age,
//         gender: (Math.random() -.5 > 0 ? true:false)
//     }
// }

// let joe: iPerson = {
//     fname: 'joe',
//     lname: 'smith'
// }

// s( foo(joe, 30) )

//*************** classes
// class Animal {
//     name: string;

//     constructor(name: string) {
//         this.name = name
//     }

//     protected greet() {
//         s(`${this.name} greets you`)
//     }
// }

// interface iPetDetails {
//     owner: string;
//     age: number | string;
//     name: string;
// }

// class Pet extends Animal {

//     owner: string;
//     age: number | string;

//     constructor(name: string, owner:string, age?:number) {
//         super(name)

//         this.owner = owner
//         this.age = typeof age === 'undefined' ? 'not set' : age
//     }

//     private getOwner() : string {
//         return this.owner
//     }

//     getDetails() : iPetDetails {
//         return {
//             owner: this.getOwner(),
//             age : this.age,
//             name: this.name
//         }
//     }

// }

// let fido = new Pet('fido', 'jason', 5)
// s( fido.getDetails())

//*************** super fancy
//fat arrow taking:
//  an array of specific size and types
//  an optional boolean arg
//  an arg of type array of numbers with the default being [0,0]
//and returning nothing
// const fancy = (
//     arr:[string | boolean, number | boolean],
//     def: number[] = [0,0],
//     opt?: any
//     )
//     : void => {

//         s(`
//             arr[] : ${arr}
//             typeof arr[0] == 'string' : ${typeof arr[0] == 'string'}
//             number: ${def}
//             opt : ${opt}
//         `)
//         //return 1 //error, were returning void
// }
// fancy([false, 5], [4,3], 'dogs and cats')
// fancy(['hello', true])

//*************** function in an interface
// interface iBird {
//     fly(): void;
// }

// let x : iBird = {
//     fly: function() { return 1} //error not to have
// }

//***************

//*************** super fancy2
// interface iItem {
//     name: eItems;
//     weight: number;
//     desc: string;
//     flags: string;
// }

// enum eItems { rock, pen, key, feather }

// let myItem1: iItem = {
//     name: eItems.feather,
//     weight: 0.1,
//     desc: 'a small feather',
//     flags: '00101001'
// }

//*************** generics
// type numArray= Array<number>
// let p: numArray = [5,4,3]

// type strArray = Array<string>

// const last = (arr: number[]) => {

//     return arr.length - 1
// }

// const l = last([6,5,4,3])

// s(l)

// const first = <T>()

export { }; //makes ts see this file as a module, so it wont throw the error 'redeclared variable'
