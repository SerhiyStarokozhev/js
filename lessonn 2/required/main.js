let money = prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timaData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ( typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log('Done');
            appData.expenses[a] = b;
            console.log(i);
        } else {
            i = i - 1;
        }
}


// let i = 0;
// while (i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log('Doneу');
//         appData.expenses[a] = b;
//         i++;
//         console.log(appData);
//         console.log(i);
//     } 
//     else {
//         i = i--;
//     };
// };


// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//     if ( typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null
//     && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//         i++; 
//         console.log(appData);
//         console.log(i);
//     } 
//     else {
//         i = i--;
//     }
// } while (i < 2);