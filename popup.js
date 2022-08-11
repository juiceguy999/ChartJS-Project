let buttons = document.querySelectorAll('.ticks__btn');
let popup = document.querySelector('.popup')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.add('active');
    })

    button.addEventListener('blur', () => {
        popup.classList.remove('active');
    })
});