let a = '';
let b = '';
let operator = '';
let isCalculated = false;
const updateDisplay = function() {
  if (a == '' && b == '' && operator == '') result.textContent = 0;
  else result.textContent = `${a} ${operator} ${b}`;  
};

const add = (a, b) => Number(a) + Number(b);
const subtract = function(a, b) { return Number(a) - Number(b); };
const multiply = function(a, b) { return Number(a) * Number(b); };
const divide = function(a, b) {
  if (b == 0) return "cannot divide by 0";
  else return Number(a) / Number(b);
};

const operate = function(operator, a, b) {
  let output;
  switch (operator) {
    case '+': output = add(a, b);
    case '-': output = subtract(a, b);
    case '*': output = multiply(a, b);
    case '/': output = divide(a, b);
  }
  return typeof output === 'number' ? Math.round(output * 10000) / 10000 : output;
};

const result = document.querySelector('#result');
const nums = document.querySelectorAll('.nums');

nums.forEach((button) => {
  button.addEventListener('click', () => {
    if (operator == '') {
      if (isCalculated){
        a=button.textContent;
        updateDisplay();
        isCalculated=false;
      } else{
      a += button.textContent;
      updateDisplay();
      }
    } else {
      b += button.textContent;
      updateDisplay();
    }
  });
});

const clear = document.querySelector('#btn-clear');
clear.addEventListener('click', () => {
  operator = "";
  a = '';
  b = '';
  updateDisplay();
});

const operation = document.querySelectorAll('.ops');
operation.forEach((button) => {
  button.addEventListener('click', () => {
    if (a == '') return;
    else {
      if (operator !== '' && b !== '') {
        a = String(operate(operator, a, b));
        isCalculated=true;
        b = '';
        operator = button.textContent;
        updateDisplay();
      } else {
        operator = button.textContent;
        updateDisplay();
      }
    }
  });
});

const equals = document.querySelector('#btn-equals');
equals.addEventListener('click', () => {
  if (a == '' || operator == '' || b == '') return;
  else {
    a = String(operate(operator, a, b));
    isCalculated=true;
    b = '';
    operator = '';
    updateDisplay();
  }
});
const decimal = document.querySelector('#btn-decimal');
decimal.addEventListener('click', ()=>{
  if (operator==''){
    if (a.includes('.')) return;
    else{ if (a=='') a = "0.";
      else a+='.';
      }
  }else{
    if (b.includes('.')) return;
    else{if(b=='') b="0.";
      else b+='.';
    } 
  }
  updateDisplay();
  });
