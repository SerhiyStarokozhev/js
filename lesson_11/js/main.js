window.addEventListener('DOMContentLoaded', () => {
'use strict';

let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i ++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.classList.contains('info-header-tab')){
            tab.forEach((item,i) => {
                if (target == item) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }); 
        }
    });

    //Timer

    let deadLine = '2019-02-16';

    function getTimeReamining (endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds =  Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock () {
                let t = getTimeReamining (endtime);
                hours.textContent = fixTimer(t.hours);
                minutes.textContent = fixTimer(t.minutes);
                seconds.textContent = fixTimer(t.seconds);

                if (t.total<= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
    }

    function fixTimer(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    setClock ('timer', deadLine);

    //Modal 

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        allBtn = document.querySelectorAll('.more, .description-btn');

    function openPopup(btn) {
        if(!overlay.style.display || overlay.style.display === 'none') {
            overlay.style.display = 'block';
            btn.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.style.display = 'none';
            btn.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    }

        allBtn.forEach( item => {
            item.addEventListener('click', function () {
                openPopup(this);
            });
        });

        close.addEventListener('click', function () {
            openPopup(this);
        });


    //form 

    let message = {
        loading: 'Загрузка...',
        success: ' Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что то пошло не так...'
    };

    let form = document.querySelector('form.main-form'),
        contactForm = document.querySelector('form#form'),
        tel = document.querySelectorAll('[type=tel]'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    tel.forEach((item) =>{
        item.addEventListener('input', (event) =>{
            if (!event.target.value.match("^[ 0-9\+]+$")) {
                event.target.value = event.target.value.slice(0, -1);
            }
        });
    });

    form.addEventListener('submit', (event) => {
        // console.log(event);
        event.preventDefault();
        sendForm(event);

    });

    contactForm.addEventListener('submit', (event) => {

        event.preventDefault();
        sendForm(event);
    
    });
            
    function sendForm(event) {
        let form = event.target,
            input = form.getElementsByTagName('input');
        
        form.appendChild(statusMessage);
        
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


        let formData = new FormData(form);

        for (let i = 0; i < input.length; i++) {
            formData.delete(input[i].name);
            formData.append(input[i].type, input[i].value);
            input[i].value = '';
        }

        let obj ={};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState <4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

    }
});