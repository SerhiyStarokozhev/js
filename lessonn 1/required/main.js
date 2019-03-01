let money = prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    first,
    second,
    third,
    fourth;

let appData = {
    budget: money,
    timaData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

first = prompt("Введите обязательную статью расходов в этом месяце", "");
second = prompt("Во сколько обойдется?", "");
third = prompt("Введите обязательную статью расходов в этом месяце", "");
fourth = prompt("Во сколько обойдется?", "");

appData.expenses[first] = second;
appData.expenses[third] = fourth;

alert(Math.round(money / 30));

console.log(appData);