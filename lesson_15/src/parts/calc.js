function calc () {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        // console.log(place);

        totalValue.innerHTML = 0;

    persons.addEventListener('keydown', (event) => {
        numbers(event);
    });

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        if(personsSum!=''){
            total = (daysSum+personsSum)*4000;
        } else {
            total = 0;
        }
        
        if(restDays.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('keydown', (event) => {
        numbers(event);
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        if(daysSum!=''){
            total = (daysSum+personsSum)*4000;
        } else {
            total = 0;
        }
        
        if(persons.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        }else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

    function numbers (event){

        let num = event.keyCode;

        if (num == 46 || num == 8 || num == 9 || num == 27 ||
            
           (num == 65 && event.ctrlKey === true) ||

           (num >= 35 && num <= 39)) {
           
            return;
    
        } else {
            
            if ((num < 48 || num > 57) && (num < 96 || num > 105)) {
                event.preventDefault();
            }
        }
    }
}

module.exports = calc;