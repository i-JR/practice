//script.js

document.getElementById('calculateBtn').addEventListener('click', function() {

    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    console.log("Bill Amount:", billAmount);
    console.log("Tip Percentage:", tipPercentage);

    if(isNaN(billAmount) || isNaN(tipPercentage) || billAmount <=0 || tipPercentage <0) {
        alert("Please enter valid inputs");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount =  billAmount + tipAmount;

    console.log("Tip Amount:", tipAmount);
    console.log("Total Amount:", totalAmount);

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);

});