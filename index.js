const remove = document.querySelector('.remove');
const result = document.querySelector('.screen');
const operators = document.querySelectorAll('.keys');
const numbers = document.getElementsByClassName('number');

const displayNumbers = () => {
    for (i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', e => {
            let value = result.innerHTML;
            if (result.innerHTML === '0') {
                result.innerHTML = ''
            }
            result.innerHTML += e.target.innerHTML;
        })
    }
}