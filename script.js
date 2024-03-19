//1.Создаем вопрос с помощью prompt()
let age = prompt('What is your age?');

if (age >= 18){
    alert('you can enter the site');
} else {
    alert('you can\'t enter the site');
}

//2.Создаем квиз.
//(первая ошибка) Я ошибочно использовал оператор присваивания '=', заменил их на операторов сравнения "==="
let quiz =  parseInt(prompt('10 + 10'));

if (quiz === 20){
    alert('it\'s correct');
} else {
    alert('it\'s incorrect');
}

let quiz1 = parseInt(prompt('9*9'));

if (quiz1 === 81){
    alert('it\'s correct');
} else {
    alert('it\'s incorrect');
}

let quiz2 =parseInt(prompt('100/10'));

if (quiz2 === 10){
    alert('it\'s correct');
} else {
    alert('it\'s incorrect');
}

//3.я почитал про оператор '?' он нужен для создания компактного кода, вот пример:
let age1 = 20;
let massage = (age < 18) ? "Доступ запрещен" : "Доступ разрещен";
console.log(massage);
