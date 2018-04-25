var calculate = function () {
    $('.usableAmount_data').text($('.Loan').val()+ " kr.");
    $('.rent_data').text($('.yearlyrent').val() + " %")
    $('.costs_data').text(($('.Loan').val() + ($('.Loan').val() * ($('.yearlyrent').val()*0.01)).toFixed(2)) + " kr.")
    $('.payment_data').text(($('.Loan').val() * 0.235).toFixed(2) +" kr.")
}