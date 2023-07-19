// Scrivere npm i tsc per installare il pacchetto tsc sul progetto attuale (node_modules, package-lock.json, package.json)
// In Typescript scrivere tsc --init nel terminale per creare il file tsconfig.json
// Premere F1 e selezionare il debugger ts-add-to-debug, selezionare un nome al debug.
// Scrivere npm i ts-node ed npm i tsconfig-paths per installare i pacchetti ts che permettono di usare il debug.
// Il nome di questi pacchetti si puo' trovare nel file launch.json creato in precedenza
// Ora e' possibile usare il debugger da VS Code

import { log } from "console"

// Da terminale scrivere tsc -w per lasciarlo in "watch" e compilare il file.js ogni volta che si salva il file.ts
// Aprendo un altro terminale scrivere "node nomefile" per lanciare il file sul terminale e vederne il risultato 

// Su GitHub ricordare di pushare tutto tranne la cartella node_modules ed i file compilati (es. file.js)

// La particolarita' di TypeScript rispetto a JS e' la necessita' di tipizzare qualsiasi tipo di dato (variabile, funzione, ecc)

let numero:number = 1
let stringa:string = 'Hello World'
let any:any // any permette di avere qualsiasi tipo di dato, per questo e' sconsigliato
let unkown:unknown
let undefined:undefined
let stringArray:string[]
let numberArray:number[]
let oggetto:object

// E' possibile creare variaibli che accettano piu' di un tipo (UNION)
let mix:string|number

function somma(num1:number, num2:number){
    return num1+num2
}
console.log(somma(2, 3)) 
// Il risultato della funzione somma andrebbe tipizzato
// Grazie all' INFERENZA TypeScript capisce che il risultato sara' :number in quanto entrambi i parametri sono :number

function sottrazione(num1:number, num2:number):number{
    return num1 - num2
}
// Questa e' una funzione in cui anche il risultato e' tipizzato 

// Sostanzialmente TS implementa nuove funzionalita' a JS, mantenendo la stessa struttura
// Quindi tutto cio' presente in JS e' presente anche in TS

const myArray:number[] = [1,3,5,7]
myArray.push(11)
console.log(myArray.map(el => {
    return el * 2
}))
// In TS e' possibile utilizzare tutti i metodi degli Array visti in JS

enum Days {
    lunedi, // 0
    martedi, // 1
    mercoledi,
    giovedi = 1,
    venerdi,
    sabato,
    domenica,
}
console.log(Days);
// L' enum e' un modo di scrivere un oggetto con con un valore progressivo assegnato automaticamente ad ogni elemento
// Se non specificato il valore di partenza e' sempre uguale a 0 mantenendo la stessa progressivita' degli Array
// Il valore si puo'assegnare a qualsiasi elemento dell' enum

const tuple:[number, string, object] = [1, 'Mario',{
    saluto: 'Ciao'
}]
console.log(tuple);

// Il tuple e' un array, ma a differenza di quest'ultimo ha una lunghezza definita ed i suoi elementi sono tipizzati in maniera specifica














