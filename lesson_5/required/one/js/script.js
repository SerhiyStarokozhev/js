// Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu'),
    nav = document.querySelectorAll('.menu-item'),
    li = document.createElement('li');
    
li.classList.add('menu-item');
li.innerHTML = ('Пятый пункт');

menu.appendChild(li);
menu.insertBefore(nav[2], nav[1]);

// Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.querySelector('.title');

title.innerHTML = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');

column[1].removeChild(adv);

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let apple = prompt('Как вы относытесь к технике Apple?', ''),
    prom = document.querySelector('#prompt');

prom.innerHTML = (apple);