window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

// The following will have the devault values unless updated by the user
function setupIntialValues() {
  const defaultValues = { amount: 300000, years: 30, rate: 3 };
  const amountUI = document.querySelector('#loan-amount');
  amountUI.value = defaultValues.amount;
  console.log(amountUI);
  const yearsUI = document.querySelector('#loan-years');
  yearsUI.value = defaultValues.years;
  const rateUI = document.querySelector('#loan-rate');
  rateUI.value = defaultValues.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const updateValue = getCurrentUIValues();
  return;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // Amount of monthly rate
  let monthlyRate = rate / 100 / 12;
  let numberOfMonths = years * 12;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
