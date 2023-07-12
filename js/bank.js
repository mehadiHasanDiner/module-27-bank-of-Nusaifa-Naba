document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-filed");
    const depositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(depositAmountString);
    depositAmount.value = "";

    if (isNaN(newDepositAmount)) {
      alert("আন্দাজে কি-বোর্ড চাইপেন না। আল্লাহরওয়াস্তে নাম্বার ইনপুট দেন");
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

    const totalBalance = currentTotalBalance + newDepositAmount;
    totalBalanceText.innerText = totalBalance;
  });
