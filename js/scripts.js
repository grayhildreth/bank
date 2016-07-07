// Business Logic

function BankAccount(balance) {
  this.balance = balance;

}

BankAccount.prototype.withdrawal = function(withdrawal) {
  return this.balance - withdrawal;
}
BankAccount.prototype.deposit = function(deposit) {
  return this.balance + deposit;
}







// User Interface

$(document).ready(function() {
  $("form#bank-account").submit(function(event) {
    event.preventDefault();
    $("#output").show();


    var balanceAmount = parseInt($("#balance-deposit").val());
    var withdrawalAmount = parseInt($("#withdrawal-amount").val());
    var depositAmount = parseInt($("#deposit-amount").val());

    var newAccount = new BankAccount(balanceAmount);
    newAccount.withdrawal(withdrawalAmount);
    newAccount.deposit(depositAmount);



  });
});
