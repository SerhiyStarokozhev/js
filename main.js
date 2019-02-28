'use strict';

let money = prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    expenditure = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost = prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timaData: time,
    expenses: { [expenditure] : cost },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert(Math.round(money / 30));