function form () {
    let message = {
        loading: 'Загрузка...',
        success: ' Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что то пошло не так...'
    };

    let form = document.querySelector('form.main-form'),
        contactForm = document.querySelector('form#form'),
        tel = document.querySelectorAll('[type=tel]'),
        statusMessage = document.createElement('div'),
        input = document.getElementsByTagName('input');

    statusMessage.classList.add('status');

    tel.forEach((item) =>{
        item.addEventListener('input', (event) =>{
            if (!event.target.value.match("^[ 0-9\+]+$")) {
                event.target.value = event.target.value.slice(0, -1);
            }
        });
    });

    function sendForm(event){
        event.addEventListener('submit', function(e){
          e.preventDefault();
            event.appendChild(statusMessage);
            let formData = new FormData(form);
    
            function postData(data) {
              return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
    
                request.open('POST', 'server.php');
    
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
                request.onreadystatechange = function() {
                  if (request < 4) {
                    resolve();
                  } else if (request.readyState === 4){
                    if (request.status == 200 && request.status < 300) {
                      resolve();
                    }
                    else {
                      reject();
                    }
                  }
                };
                request.send(data);
              });  
            }
            function clearInput() {
              for (let i = 0; i < input.length; i++) {
                input[i].value = '';
              }
            }
            postData(formData)
              .then(() => statusMessage.innerHTML = message.loading)
              .then(() => {
                statusMessage.innerHTML = message.success;
              })
              .catch(() => statusMessage.innerHTML = message.failure)
              .then(clearInput);
          }); 
      }

      sendForm(form);
      sendForm(contactForm);
}

module.exports = form;