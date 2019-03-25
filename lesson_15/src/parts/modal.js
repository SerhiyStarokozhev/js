function modal () {
    let overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    allBtn = document.querySelectorAll('.more, .description-btn');

function modalWindow(btn) {
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
            modalWindow(this);
        });
    });

    close.addEventListener('click', function () {
        modalWindow(this);
    });
}

module.exports = modal;