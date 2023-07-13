// ফাংশন -1. ২টা ইনপুট ফিল্ড কেলকুলেশন একসাথে করতে একটি ফাংশন ডিক্লায়ার করলাম।
function getInputFieldValueByID(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

//ফাংশন-2. এবার ২টা টেক্সট ইলিমেন্টের (current deposit + total balance) মানটাকে নেওয়া জন্য আরেকটা ফাংশন ডিকলেয়ার করলাম।
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const elementValueString = textElement.innerText;
  const textElementValue = parseFloat(elementValueString);
  return textElementValue;
}

//ফাংশন-3. input amount ও calculated amount সেট করা
function setTextElementValueById(elementID, newValue) {
  const textElement = document.getElementById(elementID);
  textElement.innerText = newValue;
}

// বাটন ডিপোজিট ক্লিক করার সময় এগুলো হবে। এগুলোকে একটা ফাংশনে উপরের দিকে নিয়ে নিব।
document.getElementById("btn-deposit").addEventListener("click", function () {
  /*
    1. প্রথমে ইনপুরট ফিল্ড--এর ইলিমেন্ট নিব
    ২. ইনপুট ফিল্ডের ভেলূটাকে নেব
    ৩. ভেলুটা স্ট্রি থেকে নাম্বারে কনভার্ট করব।
    */

  //এখন উপরের getInputFieldValueByID (ফাংশন -1) ফাংশনটাকে একটা ভেরিয়াবেলের আন্ডারে এখানে কল করে দেব।

  const newDepositAmount = getInputFieldValueByID("deposit-field");

  //এবার উপরের getTextElementValueById (ফাংশন -2) ফাংশনটাকে একটা ভেরিয়াবেলের আন্ডারে এখানে কল করে দেব।

  const previousDepositTotal = getTextElementValueById("deposit-total");

  //  এখানে newDepositTotal এর মানটা পাওয়া যাবে। এটা এখন Deposit-এর ঘরে সেট করতে হবে। কাজটা যেহেতু totalBalance এর ক্ষেত্রেও সেইম তাই উপরে একটা ফাংশন ডিক্লেয়ার করে নিব, যাতে দুইটার কাজই এক সাথে করা যায় এবং ইনপুট হিসেবে দুইটা প্যারামিটার পাস করব, newTotal এবং যেখানে ইলমিন্টেটা আছে তার আাইডি আর্থাৎ  টেক্সটটার elementID
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //এবার উপরের setTextElementValueById (ফাংশন -3) ফাংশনটাকে এখানে কল করে দেব।
  setTextElementValueById("deposit-total", newDepositTotal);

  //   total Balance এর ক্ষেত্রে একইভাবে উপরের ফাংশনগুলো কল করব
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositTotal;
  setTextElementValueById("balance-total", newBalanceTotal);
});
