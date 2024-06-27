function getSeason(month) {
    if (month < 1 || month > 12) {
        return "Токого месяца нет :)";
    }
    if (month === 12 || month === 1 || month === 2) {
        return "Зима";
    } else if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else {
        return "Осень";
    }
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Да";
    } else {
        return "Нет";
    }
}

let month = Math.floor(Math.random() * 12) + 1;
let year = 2022; 

console.log("Месяц:", month);
console.log("Пора года:", getSeason(month));
console.log("Год:", year);
console.log("Високосный год:", isLeapYear(year));
