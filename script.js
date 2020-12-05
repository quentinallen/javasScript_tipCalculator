// creating a function that calculates tip amount
function calculate(){
  // assigning id's to variables
  let billInput = document.getElementById('billInput').value;
  let tipPercentage = document.getElementById('tipPercentage').value;
  
  //validate inputs
  if(billInput === "" || tipPercentage === 0){
    alert("PLEASE ENTER VALUES");
    return;
};


  // calculate tip
  let total = (billInput * tipPercentage);
  
  // round decimal
  total = Math.round(total * 100) / 100;
  // always have 2 digits after decimal point
  total = total.toFixed(2);
  
  // display tip
  document.getElementById('tipAmount').style.display = "block";
  document.getElementById('tip').innerHTML = total;
  
  
  
};

// call function
document.getElementById('submit').onclick = function(){
  calculate();
}
