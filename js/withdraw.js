document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdraw-field");
    const newWithdrawString = withdrawAmount.value;
    const newWithdraw = parseFloat(newWithdrawString);

    withdrawAmount.value = "";

    if (isNaN(newWithdraw)) {
      alert("আন্দাজে কি-বোর্ড চাইপেন না। আল্লাহরওয়াস্তে নাম্বার ইনপুট দেন");
      return;
    }

    const withdrawElement = document.getElementById("withdraw-amount");

    const withdrawAmountString = withdrawElement.innerText;
    const previousWithdraw = parseFloat(withdrawAmountString);

    // adding deposit to total balance
    const totalBalanceElement = document.getElementById("total-amount");

    const totalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(totalBalanceString);

    if (newWithdraw >= previousTotalBalance) {
      alert(
        "ব্যাংকে এত টাকা নাই !! ব্যাংকের ব্যালেন্স 0/-(জিরো) বানানো যাবে না।"
      );
      return;
    }

    const totalWithdrawAmount = newWithdraw + previousWithdraw;
    withdrawElement.innerText = totalWithdrawAmount;

    const totalWIthdraw = previousTotalBalance - newWithdraw;
    totalBalanceElement.innerText = totalWIthdraw;
  });
