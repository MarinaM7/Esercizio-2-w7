class Person {
    constructor (_name, _age){
        this.name = _name;
        this.age = _age;
    }
};

var p1 = new Person ('Lucia', 20);
var p2 = new Person ('Giacomo', 35);
var p3 = new Person ('Marco', 58);

document.getElementById('uno').innerHTML = `${p1.name} ha ${p1.age} anni ed è piu giovane di ${p2.name} che ha ${p2.age} anni`;

document.getElementById('due').innerHTML = `${p3.name} ha ${p3.age} anni ed è piu vecchio sia di ${p2.name} che di ${p1.name}`;

document.getElementById('tre').innerHTML = `${p1.name}, ${p2.name} e ${p3.name} sono tutti maggiorenni`;