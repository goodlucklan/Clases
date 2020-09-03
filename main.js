let input1 = document.getElementById('nombre');
let button = document.getElementById('Aceptar');

class Personaje {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduccion() {
        let h3 = document.querySelector('h3');
        h3.textContent = `Se ha creado el usuario ${this.name} de clase ${this.type}`
    }
}
class Wizard extends Personaje {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Hora de hacer hechizos porque soy un ${this.type}`);
    }
}
class Warrior extends Personaje {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Hora de hacer Ataques porque soy un ${this.type}`);
    }
}
class Archer extends Personaje {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Hora de tirar Flechas porque soy un ${this.type}`);
    }
}
class Monk extends Personaje {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Hora de hacer conjuros porque soy un ${this.type}`);
    }
}

const EligiendoClase = () => {
    let d = document.getElementById('clases').value;
    return d;
}

const Clases = () => {
    let ClaseElegida = '';
    switch (EligiendoClase()) {
        case 'Wizard':
            ClaseElegida = new Wizard(input1.value, EligiendoClase());
            break;
        case 'Warrior':
            ClaseElegida = new Warrior(input1.value, EligiendoClase());
            document.getElementById('Imagen').src = 'https://i.ibb.co/BBrtyLy/pngocean-com.png';
            break;
        case 'Archer':
            ClaseElegida = new Archer(input1.value, EligiendoClase())
            break;
        case 'Monk':
            ClaseElegida = new Monk(input1.value, EligiendoClase())
            break;
    }
    return ClaseElegida;
}
button.addEventListener('click', () => {
    if (input1.value.length === 0) {
        alertify.alert('Alerta', 'Debes llenar esta opcion!');
        return;
    }
    console.log(Clases());
    Clases().introduccion();
    Clases().play();
    input1.value = '';
    alertify.alert('Felicidades', 'Creaste tu personaje!', function () { alertify.success('Ok'); });
})