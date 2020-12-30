'use strict'

document.getElementById('button').addEventListener('click', ()=> {
  const fizz = document.querySelector('input[name="fizz"]').value;
  const fizzNum = Number.parseFloat(fizz, 10);
  const buzz = document.querySelector('input[name="buzz"]').value;
  const buzzNum = Number.parseFloat(buzz, 10);
  const error = () => {
    const errorMessage = document.createElement('li');
    errorMessage.textContent = '整数値を入力してください';
    document.querySelector('ul').appendChild(errorMessage);
    document.getElementById('button').addEventListener('click', () => {
      document.querySelector('ul').remove(errorMessage);
    })
  }
  if(fizz === '' || buzz === '') {
    error();
    return;
  }
  if(fizz.match(/\.d/) || buzz.match(/\.d/)) {
    error();
    return;
  }
  if(fizz.match(/[A-Za-z]/) || buzz.match(/[A-Za-z]/)) {
    error();
    return;
  }

  for (let i = 1; i < 100; i++) {
    if((i % fizzNum === 0) && (i % buzzNum === 0)) {
      const fizzBuzzList = document.createElement('li');
      fizzBuzzList.textContent = `FizzBuzz ${i}`;
      document.querySelector('ul').appendChild(fizzBuzzList);
      document.getElementById('button').addEventListener('click', () => {
        document.querySelector('ul').removeChild(fizzBuzzList);
      })
    } else if (i % buzzNum === 0) {
      const buzzList = document.createElement('li');
      buzzList.textContent = `Buzz ${i}`;
      document.querySelector('ul').appendChild(buzzList);
      document.getElementById('button').addEventListener('click', () => {
        document.querySelector('ul').removeChild(buzzList);
      })
    } else if (i % fizzNum === 0) {
      const fizzList = document.createElement('li');
      fizzList.textContent = `Fizz ${i}`;
      document.querySelector('ul').appendChild(fizzList);
      document.getElementById('button').addEventListener('click', () => {
        document.querySelector('ul').removeChild(fizzList);
      })
    }
  };
});
