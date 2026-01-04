//Homework
let totalPrice = 3000,
    accountBalance = 4000; 
const isVIP = true;

let status = "wait...";
console.log(status);

if (isVIP) {
    totalPrice * (1 - 10 / 100);
    console.log("true 10%");
}

if (accountBalance >= totalPrice) {
    console.log("Успешно! Покупка сделана");
} else {
    console.log("Недостаточно средств");
}

/*

const fileSize = 5001;
const isAdmin = true;
let status = "Загружаем файл";

console.log(status)

if (fileSize === 0) {
    console.log("Файл пуст");
} else if (fileSize > 5000 && !isAdmin) {
    console.log("Слишком тяжолый");
} else {
    console.log("Загрузка...");
    status = "Файл был загружен";
}

console.log(status);

*/