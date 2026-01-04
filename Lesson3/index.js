//Homework
const pinCodes = ["1111", "5678", "1234", "9999"];
const myPin = "1234";
for (const PIN of pinCodes) {
    if (PIN === myPin) {
        console.log("ПИН найден!");
        break;
    } else {
    console.log("Неверный пин...");
    }
}


/*
const files = ["cat.jpg", "dog.png", "document.pdf"];

files.push("music.mp3", "ice.png");

for (const file of files) {
    if (file === "cat.jpg") {
        console.log("Пропускаем данную картинку");
        continue;
    }
    
    if (file === "Virus.exe") {
        console.log("АЛАРМ! Вирус найден!");
        break;
    }
    
    console.log("Файл проверен" + file);

} */

//for (const file of files) {
//    console.log(file);
//}


/* let fuel = 100;

while (fuel > 0) {
    console.log("Едем" + "Топлива осталось: " + fuel);
    fuel -= 10; // fuel = fuel - 10;
}

    console.log("Приехали"); */

//for (let i = 0; i < files.length; /* i = i + 1 */ i++) {
//    console.log(files[i]);
//}