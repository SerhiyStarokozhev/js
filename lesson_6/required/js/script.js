//Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start'),
//Получить все блоки в правой части программы через классы
budgetValue = document.getElementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
//Получить поля(input) c обязательными расходами через класс.
expensesItems = document.querySelectorAll('.expenses-item'),
//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
buttons = document.getElementsByTagName('button'),
btnExpenses = buttons[0],
btnOptionalExpenses = buttons[1],
btnCountBudget = buttons[2],
//Получить поля для ввода необязательных расходов
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
chooseIncome = document.querySelector('.choose-income'),
savings = document.querySelector('#savings'),
sum = document.querySelector('.choose-sum'),
percent = document.querySelector('.choose-percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');

let money,
    time,
    appData = {
    budget: money,
    timaData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

document.addEventListener("DOMContentLoaded", function () {
    btnExpenses.setAttribute('disabled', true);
    btnOptionalExpenses.setAttribute('disabled', true);
    btnCountBudget.setAttribute('disabled', true);

});

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
    appData.budget = money;
    appData.time = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    btnExpenses.toggleAttribute('disabled', false);
    btnCountBudget.toggleAttribute('disabled', false);
});

btnExpenses.addEventListener('click', function () {
    
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = +expensesItems[++i].value;

        if ((typeof (a)) === 'string' && (typeof (b)) === 'number' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            //console.log('Done');
            appData.expenses[a] = b;
            sum += b;
        } 

    expensesValue.textContent = sum;
}
});

btnOptionalExpenses.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {

        let a = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
});


btnOptionalExpenses.addEventListener('click', function () {
    let arr = '';
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let a = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = a;
            arr += appData.optionalExpenses[i] + ' ';
        }
        optionalExpensesValue.textContent = arr;
});


btnCountBudget.addEventListener('click', function() {

    const exp = +expensesValue.textContent;

    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - exp) / 30).toFixed();

        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        } 
    } else {
        dayBudgetValue.textContent = "Произошла ошибка"; 
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sumValue = +sum.value,
            percentValue = +percent.value;
        appData.monthIncome = sumValue/100/12*percentValue;
        appData.yearIncome = sumValue/100*percentValue;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sumValue = +sum.value,
            percentValue = +percent.value;
        appData.monthIncome = sumValue/100/12*percentValue;
        appData.yearIncome = sumValue/100*percentValue;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

expensesItems.forEach(function(item, i, arr) {
        item.addEventListener('input', function () {
            if (item.getAttribute("placeholder") == "Наименование" && arr[i].value != '') {
                // console.log(typeof(arr[i].value));
                btnExpenses.toggleAttribute("disabled", false);
            } else if (item.getAttribute("placeholder") == "Цена" && arr[i].value != '') {
                // console.log(typeof(arr[i].value));
                btnExpenses.toggleAttribute("disabled", false);
            }
        });
    // console.log(i%2);
    if (i%2 != 0) {
        item.addEventListener('input', function () {
            if (!this.value.match("^[0-9]+$")) {
                this.value = this.value.slice(0, -1);
            }
        });
    }
  });

  optionalExpensesItem.forEach(function(item) {
    item.addEventListener('input', function () {
            btnOptionalExpenses.toggleAttribute("disabled", false);
    });
    item.addEventListener('input', function () {
        if (!this.value.match("^[a-zа-яё]+$")) {
            console.log(this.value);
            this.value = this.value.slice(0, -1);
        }
    });
  });


// // console.log(appData);

// let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice());

