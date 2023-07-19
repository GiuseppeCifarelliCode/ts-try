"use strict";
// Le abstract class in TS sono delle classi generiche in cui e' possibile evitare l' inizializzazione di alcune variabili e di metodi.
// Sono molto simili alle interfacce. La differenza sostanziale e' che nelle interfacce non e' assolutamente possibile inizializzare gli elementi,
// mentre nelle classi astratte e' possibile.
// Tornano utili quando si ha una struttura di partenza simile per ogni classe che si intende creare, ma che puo' variare solo per ALCUNI elementi
// Dalle abstract class NON e' possibile creare istanze
class Veicoli {
    constructor(_velMax, _nRuote, tipo) {
        this.tipo = tipo;
        this.vel = 0;
    }
    fermarsi() {
        return this.vel = 0;
    }
}
// const auto = new Veicoli --> Non e' possibile creare un'istanza da una abstract class
class Auto extends Veicoli {
    constructor(_velMax, _nRuote, tipo) {
        super(_velMax, _nRuote, tipo);
        this.tipo = tipo;
        this.velMax = _velMax;
        this.nRuote = _nRuote;
    }
    accelerare() {
        return this.vel = this.vel + 5;
    }
    frenare() {
        return this.vel = this.vel - 3;
    }
}
class Bici extends Veicoli {
    constructor(_velMax, _nRuote, tipo) {
        super(_velMax, _nRuote, tipo);
        this.tipo = tipo;
        this.velMax = _velMax;
        this.nRuote = _nRuote;
    }
    accelerare() {
        return this.vel = this.vel + 2;
    }
    frenare() {
        return this.vel = this.vel - 1;
    }
}
const BMW = new Auto(260, 4, 'Auto');
const bici = new Bici(40, 2, 'bici');
