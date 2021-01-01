'use strict';

const btn = document.getElementById('button');
btn.addEventListener('click', ()=> {
  
  const fizz = document.getElementById('fizz').value;
  const fizzNum = Number.parseFloat(fizz, 10);
  const isFizzInteger = fizz.match(/\d/g)
  const buzz = document.getElementById('buzz').value;
  const buzzNum = Number.parseFloat(buzz, 10);
  const isBuzzInteger = buzz.match(/\d/g)
  const error = () => {
    while(ul.firstChild) {
      ul.removeChild(ul.firstChild);
    };
    const errorMessage = document.createElement('li');
    errorMessage.textContent = '整数値を入力してください';
    ul.appendChild(errorMessage);
    }
    
    
  if(isFizzInteger && isBuzzInteger) {
    while(ul.firstChild) {
      ul.removeChild(ul.firstChild);
    };
    for (let i = 1; i < 100; i++) {
      if((i % fizzNum === 0) && (i % buzzNum === 0)) {
        const fizzBuzzList = document.createElement('li');
        fizzBuzzList.textContent = `FizzBuzz ${i}`;
        ul.appendChild(fizzBuzzList);

      } else if (i % buzzNum === 0) {
        const buzzList = document.createElement('li');
        buzzList.textContent = `Buzz ${i}`;
        ul.appendChild(buzzList);
      } else if (i % fizzNum === 0) {
        const fizzList = document.createElement('li');
        fizzList.textContent = `Fizz ${i}`;
        ul.appendChild(fizzList);
      }
    };
  } else {
    while(ul.firstChild) {
      ul.removeChild(ul.firstChild);
    };
    error();
    return;
  }
});
