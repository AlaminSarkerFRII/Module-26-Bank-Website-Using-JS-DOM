// handle deposit button Event 

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value; // input value pabo
    const newDepositAmount = parseFloat(newDepositAmountText); //integer a convert
    // console.log(depositAmount);

    //update deposit total

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal; //set newDepositTotal

 //update account Balance.......
const balanceTotal = document.getElementById('balance-total');

const balanceTotalText = balanceTotal.innerText;
const previousBalaceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalaceTotal + newDepositTotal;

balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field........
    depositInput.value = '';


});

// withraw Balance ..& Event Handler......................

document.getElementById('withdraw-btn').addEventListener('click',function(){
    
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    console.log(newWithdrawAmount);

    //set withdraw total;

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance (main)

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount; // main balance - withdraw amount.........

    balanceTotal.innerText = newBalanceTotal; // new main balance

    //clear withdraw set

    withdrawInput.value = '';

});