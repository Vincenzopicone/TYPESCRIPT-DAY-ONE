console.log("Start TypeScript")
/// $ tsc index.ts   per compilare  ////  index.ts -w si attiva il compilatore automatico
let x = "Ciao";
let y = "Sono";
let z = "TypeScript";
console.log(x,y,z)
/// con i due punti dopo il nome della variabile si assegna il TIPO
// TYPE INFERENCE è quando non viene dichiarato esplicitimanete il tipo
let boolean = true 
let myString: string = "Vincenzo"
let myString2: string  = "Picone"
let myNumber: number = 34 
console.log ("Nome:", myString)
console.log ("Cognome", myString2)
console.log("Anni:", myNumber)
/* myString = 19  --- non si può riassegnare il tipo di una varibile già assegnata*/
/// tipi primitivi:
// string
// number
// boolean
// null
// undefined
//////////////////////////////////////
// unknow - nel momento dell'assegnazione è un tipo sconosciuto e può essere riassegnato in futuro
// any - serve per spegnere il controllo di TypeScript
// Esempio ANY:
let anyType: any = false
anyType = 300 // puoi riassegnare il tipo senza il controllo di TypeScript
// inserendo il tipo vengono suggeriti i metodi correlati esclusivamente a tipo.. es: number.toFixed

///vecchio tipoo di somma in JavaScript
const sum = (num1, num2) => {
    return num1+num2
}

console.log(sum(3,5))

// con TypeScript si può stabilire il tipo direttamente nei parametri della funzione e 
//si può stabilire anche il valore in uscita dopo le parentesi dopo i parametri

const sumWhitTS = (num1: number,num2: number):string => {
    return (num1 + num2).toString()
}

console.log(sumWhitTS(2,18))
console.log(typeof sumWhitTS(2,18))


///const mixAddition = (par1:string| number, par2?:string| number ) --- si può inserire la condizione nei parametri 
/// mettendo "?" nei parametri si può render eun parametro opzionale 
// mentre se si inseriscono 2 o più parametri sono obbligatori farli arrivare


/// creando il type si può stabilire il tipo multiplo di un parametro o variabile

type StringOrNumber = string | number

let Alias: StringOrNumber = 3
console.log(Alias)
Alias = "ciao"
console.log(Alias)


/// parte da unknow ma dentro il ciclo if diventa un valore conosciuto grazie a TS

let maybe : unknown;

if (maybe === true) {
const myBoolean: boolean = maybe
console.log(typeof myBoolean)
}

////ARRAY 

const array = [1]
array.push(50)
console.log (array)

/// si possono tipizzare gli array

const myArray:StringOrNumber[] = [] 
/// opppure const myArray:(string | number)[] = [] /// oppure const myArray: Array<StringOrNumber> = []

myArray.push("Enzo")
myArray.push(123)
myArray.push("Picone")

myArray.forEach(el=> console.log(el.toString()))

//// forzare le posizioni dentro gi array


const myArray2: StringOrNumber[] = []

myArray2.push("Vincenzo")
myArray2.push(34)

/// TUPLE
// bisogna rispettare l'ordine dentro l'array rispetto a quello che viene dichiarato
// oppure bisogna creare una condizione [string | number, number]

const myMixedTuple: [string, number]=["",0]

myMixedTuple[1]?.toFixed.length

///////

const obj = {
    name: "Vincenzo",
    surname: "Picone",
    age: 34,

}

console.log(obj)

/// TS suggerirà anche il contenuto dell'oggetto

obj.age.toString
