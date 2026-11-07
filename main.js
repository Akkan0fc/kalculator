const add = (a, b) => a+b;
const subtract = function(a, b) {return a-b};
const multiply = function(a, b) {return a*b};
const divide = function (a, b){
  if (b==0) return "cannot divide by 0";
  else return a/b;
}

const operate = function(operator, a, b){
  switch (operator){
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
  }
}
const result = document.querySelector('#result');
const nums = document.querySelectorAll('.nums');
nums.forEach((button)=>{
  button.addEventListener('click',()=>{
    if (result.textContent == 0){
      result.textContent = button.textContent;
    } else{
      result.textContent = result.textContent+button.textContent;
    }
  });
});
