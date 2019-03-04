let money,
    time;

function start () {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
}

start();

let appData = {
    budget: money,
    timaData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log('Done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
}

function detectDayBudget () {

    alert( "Бюджет за один день: " + (money / 30).toFixed(2) + "р.");

}

detectDayBudget ();


function detectLevel () {

    appData.moneyPerDay = appData.budget / 30;

    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошыбка");
    }
}

detectLevel ();


function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накопленый"),
            percent = +prompt("Какой процент");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));
    }
}

checkSavings();

function chooseOptExpenses () {

    for (let i = 0; i < 3; i++) {

        let a = prompt("Статья необязательных расходов?", "");
    
        if (typeof(a) === 'string' && typeof(a) != null && a.length < 50) {
                appData.optionalExpenses[i] = a;
            } else {
                i--;
            }
    }
}

chooseOptExpenses();

console.log(appData);