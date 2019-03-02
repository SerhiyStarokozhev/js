let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    day = 'пятница';

for(let i = 0; i < week.length; i++) {
	if (i == 5 || i == 6) {
        document.write('<b>' + week[i] + '<br>' + '</b>');
    } else if ( week[i] == day) {
        document.write('<em>' + week[i] + '<br>' + '</em>');
    }else {
        document.write(week[i] + '<br>');
    }
}

let arr = ['3986742', '7567343', '2346347', '1245725', '3124562', '6754245', '9987652'],
    three = 3,
    seven = 7;

for(let i = 0; i < arr.length; i++) {

    let number = arr[i];
    
    if(number[0] == three || number[0] == seven) {
        console.log(arr[i]);
    } 
}