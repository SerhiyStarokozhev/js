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
    savings: true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert( "Бюджет за один день: " + appData.moneyPerDay + "р.");
    },
    detectLevel: function () {
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
    },
    checkSavings: function () {
        let save,
        percent;
        
        if (appData.savings == true) {
            save = +prompt("Какова сумма накопленый");
            percent = +prompt("Какой процент");
        } 
        if (save) {
            appData.monthIncome = save/100/12*percent;
        } 
    
        alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));
    }, 
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {

            let a = prompt("Статья необязательных расходов?", "");
        
            if (typeof(a) === 'string' && typeof(a) != null && a.length < 50) {
                    appData.optionalExpenses[i] = a;
                } else {
                    i--;
                }
        }
    },
    chooseIncome: function() {
        
        for (let i = 1; i < 2; i++) {

            let items = prompt('Что принесет дополнительный доход? (Перечислить через зяпятую)', '');
            
            if ((typeof (items)) != null && items != '' && (typeof (items)) === 'string') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Вы ничего не забыли?', ''));
                appData.income.sort();
            } else {
                console.log("Некорректно введены данные");
                i--;
                continue;
            }
        }

        appData.income.forEach(function (item, i) {
            alert("Способы доп. заработка: " + item +" key " + ++i);
        });
    }
};

console.log("Наша программа включает в себя данные: ");
for (var key in appData) {
    console.log(key + ": " + appData[key]);
}

console.log(appData);