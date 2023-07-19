// Le abstract class in TS sono delle classi generiche in cui e' possibile evitare l' inizializzazione di alcune variabili e di metodi.
// Sono molto simili alle interfacce. La differenza sostanziale e' che nelle interfacce non e' assolutamente possibile inizializzare gli elementi,
// mentre nelle classi astratte e' possibile.
// Tornano utili quando si ha una struttura di partenza simile per ogni classe che si intende creare, ma che puo' variare solo per ALCUNI elementi
// Dalle abstract class NON e' possibile creare istanze

abstract class Veicoli {
    abstract velMax:number
    abstract nRuote:number
    protected vel:number = 0

    constructor(_velMax:number, _nRuote:number, public tipo:string ){}

    abstract accelerare():number
    abstract frenare():number
    fermarsi():number{
        return this.vel = 0
    }
}

class Auto extends Veicoli {
    velMax: number
    nRuote: number
    constructor(_velMax:number, _nRuote:number, public tipo:string){
        super(_velMax, _nRuote, tipo)
        this.velMax = _velMax
        this.nRuote = _nRuote
    }
    
    accelerare(): number {
       return this.vel = this.vel + 5
    }

    frenare():number {
       return this.vel = this.vel - 3
    }
}

const BMW = new Auto(260, 4, 'Auto')
console.log(BMW)