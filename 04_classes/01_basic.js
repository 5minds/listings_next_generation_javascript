
class Auto {
    constructor(max_geschwindigkeit) {
        this._max_geschwindigkeit = max_geschwindigkeit;
        this._aktuelle_geschwindigkeit = 0;
    }

    get aktuelle_geschwindigkeit() {
        return this._aktuelle_geschwindigkeit;
    }

    set aktuelle_geschwindigkeit(value) {
        if (value >= this._max_geschwindigkeit) {
            throw new Error("Geschwindigkeit über '" + this._max_geschwindigkeit + "' ist nicht möglich.");
        }

        this._aktuelle_geschwindigkeit = value;
    }

    drive() {
        console.log("Fahre " + this._aktuelle_geschwindigkeit + ".");
    }
}

class LKW extends Auto {
    constructor() {
        super(80);
    }
}

class PKW extends Auto {
    constructor(max_geschwindigkeit) {
        super(max_geschwindigkeit);
    }

    get aktuelle_geschwindigkeit() {
        return this._aktuelle_geschwindigkeit;
    }

    set aktuelle_geschwindigkeit(value) {
        if (value >= this._max_geschwindigkeit) {
            throw new Error("Geschwindigkeit über '" + this._max_geschwindigkeit + "' ist nicht möglich.");
        }

        if (value > 130) {
            console.log("Verbrauch ist sehr hoch!");
        }

        this._aktuelle_geschwindigkeit = value;
    }

    drive() {
        super();
        if (this._aktuelle_geschwindigkeit > 130) {
            console.log("Bei einem Umfall muss mit der Zurechnung einer Teilschuld gerechnet werden.")
        }
    }
}

let lkw = new LKW();
let pkw = new PKW(250);

lkw.aktuelle_geschwindigkeit = 75;
console.log(lkw.aktuelle_geschwindigkeit);
lkw.drive();


pkw.aktuelle_geschwindigkeit = 180;
console.log(pkw.aktuelle_geschwindigkeit);
pkw.drive();

