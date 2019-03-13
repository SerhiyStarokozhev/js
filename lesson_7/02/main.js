let body = document.getElementsByTagName('body')[0],
    timeCell = document.createElement('div');
    timeCell.classList.add('time');

    body.appendChild(timeCell);

   function clock(){

       let date = new Date(),

           hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),

           minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),

           seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

           document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
   }
   
   setInterval(clock, 1000);