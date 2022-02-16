//get input amount
function getInputAmount(inputId){
    const inputAmount = document.getElementById(inputId);
    const amount = parseFloat(inputAmount.value);
    inputAmount.value = '';
    return amount;
}

//update deposit and withdrow value
function getUpdateAmount(amountId, newamount){
    const amountTotalText = document.getElementById(amountId);
    const amountTotal = parseFloat(amountTotalText.innerText);

    amountTotalText.innerText = amountTotal + newamount;
}

//update balance
function getBalanceUpdate(newAmount, isAdd){
    const balanceInput = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceInput.innerText);

    if(isAdd){
        balanceInput.innerText = balanceTotal + newAmount;
    }else{
        balanceInput.innerText = balanceTotal - newAmount;
    }
}

//handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositError = document.getElementById('error-deposit');
    
    //get input amount
    const depositAmount = getInputAmount('deposit-amount');

    if(depositAmount <= 0 || isNaN(depositAmount)){
        depositError.style.display = 'block';
    }else{
        //update deposit amount
        getUpdateAmount('deposit-total', depositAmount);
       
        //balance update
        getBalanceUpdate(depositAmount, true);

        depositError.style.display = 'none';
    }
})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawError = document.getElementById('error-withdraw');
    const currentBalanceText = document.getElementById('balance-total');
    const currentBalance = parseFloat(currentBalanceText.innerText);
    const errorBalance = document.getElementById('error-balance');

    //get input amount
    const withdrawAmount = getInputAmount('withdraw-amount');
    
    //validation
    if(withdrawAmount <= 0){
        withdrawError.style.display = 'block';
        errorBalance.style.display = 'none';
    }else if(withdrawAmount <= currentBalance){
        //update withdraw amount
        getUpdateAmount('withdraw-total', withdrawAmount);
        
        //balance update
        getBalanceUpdate(withdrawAmount, false);
        
        withdrawError.style.display = 'none';
        errorBalance.style.display = 'none';
    }else{
        errorBalance.style.display = 'block';
        withdrawError.style.display = 'none';
    }
})