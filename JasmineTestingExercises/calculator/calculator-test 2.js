// testing the function calculateMonthlyPayment. In this test, there are three datas to test for. Rate, amount, number of payments.

it('should calculate the monthly rate correctly', function () {
  const values = { amount: 100000, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual('1060.66');
});

// when the result has no numbers in the decimal places, it should return two 00s.
it('should return a result with 2 decimal places.', function () {
  const values = { amount: 99998, years: 20, rate: 10 };
  expect(calculateMonthlyPayment(values)).toEqual('965.00');
});
