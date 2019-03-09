//Получить кнопку "Начать расчет" через id
let start = document.querySelector('#start'),
//Получить все блоки в правой части программы через классы
budgetValue = document.querySelector('.budget-value'),
daybudgetValue = document.querySelector('.daybudget-value'),
levelValue = document.querySelector('.level-value'),
expensesValue = document.querySelector('.expenses-value'),
optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
incomeValue = document.querySelector('.income-value'),
monthsavingsValue = document.querySelector('.monthsavings-value'),
yearsavingsValue = document.querySelector('.yearsavings-value'),
//Получить поля(input) c обязательными расходами через класс.
expensesItems = document.querySelectorAll('.expenses-item'),
//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
buttons = document.getElementsByTagName('button'),
btnExpenses = buttons[0],
btnOptionalexpenses = buttons[1],
btnCountBudget = buttons[2],
//Получить поля для ввода необязательных расходов
optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
chooseIncome = document.querySelector('.choose-income'),
savings = document.querySelector('#savings'),
sum = document.querySelector('.choose-sum'),
percent = document.querySelector('.choose-percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');