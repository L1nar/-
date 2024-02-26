let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

// метод event.stopPropagation(); - препятствует продвижению события дальше, но на текущем элементе все обработчики обрабатывают
// метод event.stopImmediatePropagation(); - предотвращает всплытие и останавливает обработку событий на текущем элементе.

elem1.addEventListener('click', () => {
    console.log('зеленый погружение');
}, true);
elem1.addEventListener('click', () => {
    console.log('зеленый всплытие');
}, false);
elem2.addEventListener('click', (event) => {
    console.log('синий погружение');
    event.stopImmediatePropagation();
}, true);
elem2.addEventListener('click', () => {
    console.log('синий всплытие');
}, false);
elem3.addEventListener('click', () => {
    console.log('красный погружение');
}, true);
elem3.addEventListener('click', () => {
    console.log('красный всплытие');
}, false);

let parent = document.querySelector('#parent');
let btn = document.querySelector('button');
let block = document.querySelector('#block');

btn.addEventListener('click', (event) => {
    block.classList.add('active');
    event.stopPropagation();
})
parent.addEventListener('click', () => {
    block.classList.remove('active');
})