const users = [
    { id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 2, nome: 'Mario', cognome: 'Verdi', classe: 'A' },
    { id: 3, nome: 'Alvise', cognome: 'Gialli', classe: 'A' },
    { id: 4, nome: 'Lucia', cognome: 'Viola', classe: 'A' },
    { id: 5, nome: 'Polo', cognome: 'Neri', classe: 'A' },
    { id: 6, nome: 'Giacomo', cognome: 'Grigi', classe: 'A' },
    { id: 7, nome: 'Pietro', cognome: 'Azzurri', classe: 'A' },
    { id: 8, nome: 'Stefania', cognome: 'Porpora', classe: 'A' },
];

// console.log(users);

// const itemsPerPage = 2;
// const pages = users.length / itemsPerPage;

// console.log(pages);

// const pagination = Array.from({length: pages}, (_, index) => {
//     var start = index * itemsPerPage;
//     var values = users.slice(start, start + itemsPerPage);

//     return values;
// })

// console.log (pagination);

class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = Math.floor(pageSize);
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1;
        this.currentPage = 1;
    }

    prevPage() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
        return this;
    };

    nextPage() {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage;
        return this;
    };

    firstPage () {
        this.currentPage = 1;
        return this;
    };

    lastPage () {
        this.currentPage = this.totalPages;
        return this;
    };

    getVisibleItems () {
        const start = this.currentPage * this.pageSize - this.pageSize;
        const end = this.currentPage * this.pageSize;
        const lista = this.items.slice(start, end);
        const wrapper = document.getElementById('wrapper');
        let via = '';
        lista.forEach((item)=>{
            via += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td><td>${item.classe}</td>`;
        })
        wrapper.innerHTML = via;
    }
};

p = new Pagination (users, 2);
p.getVisibleItems();

const primo = document.getElementById('primo');
primo.addEventListener('click', function(){
    p.firstPage();
    p.getVisibleItems();
});

const ultimo = document.getElementById('ultimo');
ultimo.addEventListener('click', function(){
    p.lastPage();
    p.getVisibleItems();
});

const precedente = document.getElementById('precedente');
precedente.addEventListener('click', function(){
    p.prevPage();
    p.getVisibleItems();
});

const successivo = document.getElementById('successivo');
successivo.addEventListener('click', function(){
    p.nextPage();
    p.getVisibleItems();
});