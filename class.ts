// Si definiscono ISTANZE quegli oggetti generati direttamente dalle classi

// TS fa largo uso delle classi, pertanto aggiunge novita' a JS quali i modificatori 
// E' possibile aggiungere i modificatori durante la dichiarazione di variabili, parametri, funzioni, ecc.
// public --> e' il modificatore di default degli elementi delle classi. Gli elementi public sono disponibili in classi, sottoclassi ed istanze
// private --> l'elemento a cui e' aggiunto e' disponibile solo all' interno della classe attuale
// protected --> e' disponibile sia nella classe attuale sia nella sottoclasse che la estende
// static --> l' elemento static e' accessibile SENZA le istanze
// readonly --> l' elemento e' di sola lettura, una volta definito non si potra' cambiare il valore

class Persona {
    nome?:string // Il ? durante la tipizzazione aggiunge undefined al tipo della variabile, bloccando gli errori dovuti alla mancata inizializzazione
    cognome!:string // Il ! ,invece, avvisa TS che l' inizializzazione sara' effettuata in seguito, bloccando gli errori
    eta!:number // Sono due modi per bloccare gli errori di TS durante la tipizzazione degli elementi delle classi
    readonly id!:number

    constructor(nome:string, cognome:string, eta:number, id:number) {
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
        this.id = id
        Persona.stampa() // --> Aggiungere un metodo all' interno del costruttore lo richiama al momento della creazione di un'istanza
        this.stampaNome()
    }
    static stampa():void { // --> Un metodo static si richiama usando la dot notation sulla classe di appartenenza
        console.log(this)
    }
    private stampaNome():void{
        console.log(this.nome)
    }

    // changeid():void{     
    //     this.id = 232    --> NON FUNZIONA, non e' possibile cambiare id perche' e' readonly
    // }
} 

Persona.stampa() // --> Si puo' richiamare anche fuori dalla classe perche' e' static, ma solo usando la dot notation della classe di appartenenza
// Persona.stampaNome() --> Essendo private non esiste al d fuori della classe di appartenenza

// -------RECAP--------
// PRIVATE conviene utilizzarlo quando dobbiamo fare operazioni direttamente all' interno della classe o su elementi che devono essere disponibili
// solo all' interno della classe attuale e non nelle sottoclassi o nelle istanze

// STATIC conviene utilizzarlo su metodi generali a cui puo' essere utile l' appartenenza diretta alla classe per una comprensione piu' semplice

// PROTECTED e' piu' utilizzato perche' concede maggiore liberta'. Gli elementi protected sono disponibili nella classe e nelle sottoclassi
// Utile per passare elementi o metodi alle sottoclassi, ma non alle istanze create

// READONLY e' un elemento che una volta inizializzato non puo' piu' essere cambiato, come una const


