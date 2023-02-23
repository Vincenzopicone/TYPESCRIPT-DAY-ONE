var _a;
console.log("Start TypeScript");
/// $ tsc index.ts   per compilare  ////  index.ts -w si attiva il compilatore automatico
var x = "Ciao";
var y = "Sono";
var z = "TypeScript";
console.log(x, y, z);
/// con i due punti dopo il nome della variabile si assegna il TIPO
// TYPE INFERENCE è quando non viene dichiarato esplicitimanete il tipo
var boolean = true;
var myString = "Vincenzo";
var myString2 = "Picone";
var myNumber = 34;
console.log("Nome:", myString);
console.log("Cognome", myString2);
console.log("Anni:", myNumber);
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
var anyType = false;
anyType = 300; // puoi riassegnare il tipo senza il controllo di TypeScript
// inserendo il tipo vengono suggeriti i metodi correlati esclusivamente a tipo.. es: number.toFixed
///vecchio tipoo di somma in JavaScript
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(3, 5));
// con TypeScript si può stabilire il tipo direttamente nei parametri della funzione e 
//si può stabilire anche il valore in uscita dopo le parentesi dopo i parametri
var sumWhitTS = function (num1, num2) {
    return (num1 + num2).toString();
};
console.log(sumWhitTS(2, 18));
console.log(typeof sumWhitTS(2, 18));
var Alias = 3;
console.log(Alias);
Alias = "ciao";
console.log(Alias);
/// parte da unknow ma dentro il ciclo if diventa un valore conosciuto grazie a TS
var maybe;
if (maybe === true) {
    var myBoolean = maybe;
    console.log(typeof myBoolean);
}
////ARRAY 
var array = [1];
array.push(50);
console.log(array);
/// si possono tipizzare gli array
var myArray = [];
/// opppure const myArray:(string | number)[] = [] /// oppure const myArray: Array<StringOrNumber> = []
myArray.push("Enzo");
myArray.push(123);
myArray.push("Picone");
myArray.forEach(function (el) { return console.log(el.toString()); });
//// forzare le posizioni dentro gi array
var myArray2 = [];
myArray2.push("Vincenzo");
myArray2.push(34);
/// TUPLE
// bisogna rispettare l'ordine dentro l'array rispetto a quello che viene dichiarato
// oppure bisogna creare una condizione [string | number, number]
var myMixedTuple = ["", 0];
(_a = myMixedTuple[1]) === null || _a === void 0 ? void 0 : _a.toFixed.length;
///////
var obj = {
    name: "Vincenzo",
    surname: "Picone",
    age: 34
};
console.log(obj);
/// TS suggerirà anche il contenuto dell'oggetto
obj.age.toString;
