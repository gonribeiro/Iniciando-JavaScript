/*
alert('Teste');

class Teste {
    metodo() {

    }

    outro(){

    }
}
*/

// 
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Fulano';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

// 
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(2, 2));

// constantes
const a = 1;
// a = 25; // erro ao redefinit

const cliente = { nome: 'Fulano '};
cliente.nome = 'Beltrano'; // sucesso ao mutar

// let
function teste(x) {
    let y = 2;

    if (x > 5) {
        // let y = 4;

        console.log(x, y);
    }
}

teste(10);

// operações em array
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);

// arrow functions
const newArr2 = arr.map(item => {
    return item * 2;
});

console.log(newArr2);

const newArr3 = arr.map(item => item * 2);

console.log(newArr3);

/*
const teste2 = () => { // função
    return 'teste';
}
*/

// const teste2 = () => [1, 2, 3]; // função

const teste2 = () => ({ nome: 'Fulano' }); // função

console.log(teste2());

// valores padrões
const soma2 = (a = 3, b = 6) => a + b;

console.log(soma2(1));
console.log(soma2());

// desestruturação
const cliente2 = {
    nome: 'Fulano',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const {nome, idade, endereco: { cidade } } = cliente2;

console.log(nome);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(cliente2);

// operadores rest / spread
// rest
const { nome2, ...resto } = cliente2;
console.log(nome2);
console.log(resto);

const arr2 = [1, 2, 3, 4];
const [ a2, b, ...c ] = arr2;

console.log(a2, b, c);

// 
function soma3(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma3(1, 3, 4));

// spread
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

const cliente3 = { ...cliente2, nome: 'Ciclano' };
console.log(cliente3);

// template literals
console.log('Meu nome é ' + cliente2.nome + ' e tenho ' + cliente2.idade + ' anos');
console.log(`Meu nome é ${cliente2.nome} e tenho ${cliente2.idade} anos`);

// object short syntax

const nome3 = 'Ciclano';
const idade3 = 23;

const cliente4 = {
    nome, 
    idade,
    cidade: 'Rio'
};

console.log(cliente4);