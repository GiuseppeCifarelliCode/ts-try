// Data la forte tipizzazione di TS e' possibile creare dei tipi personalizzati
// Questo meccanismo in TS e' chiamato Interfaccia
// Per convenzione le interfacce si denominano con una I all' inizio del nome
// Le interfacce non accettano assegnazioni di variabili al loro interno, solo tipizzazioni
// E' possibile inserire nelle interfacce anche dei metodi che saranno definiti in seguito 

interface IUser {
    nome:string,
    cognome:string,
    eta:number,
    stampa():void
}

const persona:IUser = {
    nome:'Giuseppe',
    cognome: 'Cifarelli',
    eta: 28,
    stampa(){
        console.log(persona)
    }
}
persona.stampa();
// Il metodo viene definito durante la creazione di una variabile dello stesso tipo dell' interfaccia

// Le interfacce possono tornare utili anche durante la creazione di classi

class User implements IUser {
    nome:string
    cognome:string
    eta:number
    constructor(nome: string, cognome:string, eta:number) {
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
    }
    stampa(){
        console.log(this)
    }
}
// La peculiarita' delle interfacce e' che se ne possono implementare piu' di una per volta durante la creazione di classi
// class User implements IUser, IStudent --> Un esempio di scrittura implementando piu' interfacce allo stesso tempo

const firstUser = new User('Giuseppe', 'Cifarelli', 28)
firstUser.stampa()