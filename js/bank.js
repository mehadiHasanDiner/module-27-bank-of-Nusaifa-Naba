document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-filed");
    const depositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(depositAmountString);
    depositAmount.value = "";

    if (isNaN(newDepositAmount)) {
      alert("Please enter a valid deposit amount");
      return;
    }

    const currentDepositText = document.getElementById("deposit-amount");
    const currentDepositString = currentDepositText.innerText;
    const currentDeposit = parseFloat(currentDepositString);
    // Total Deposit calculation
    const newTotalDeposit = newDepositAmount + currentDeposit;
    currentDepositText.innerText = newTotalDeposit;

    // adding deposited amount to total balance
    const totalBalanceText = document.getElementById("total-amount");
    const totalBalanceString = totalBalanceText.innerText;
    const currentTotalBalance = parseFloat(totalBalanceString);

    const totalBalance = currentTotalBalance + newTotalDeposit;
    totalBalanceText.innerText = totalBalance;
  });
