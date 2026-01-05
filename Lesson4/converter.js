//Homework
const usdToRub = (usd) => {
    return `From Usd to ${usd * 90} Rub`;
};

const euroToRub = (euro) => {
    return `From Euro to ${euro * 100} Rub`;
};

console.log(usdToRub(50));
console.log(euroToRub(100));


// 1 variant

const ages = [10, 18, 55, 3, 20];
const checkAccess = (age) => {
    if (age >= 18) {
        return `Access granted`;
    } else {
        return `Access denied`;
    }
};

for (const age of ages) {
    console.log(`Age ${age} ${checkAccess(age)}`);
};


// 2 variant
const ages = [10, 18, 55, 3, 20];

const checkAccess = (age) => {
    if (age >= 18) {
        return `Access granted`;
    } else {
        return `Access denied`;
    }
};

ages.forEach((age) => {
    console.log(`Age ${age} ${checkAccess(age)}`);
});