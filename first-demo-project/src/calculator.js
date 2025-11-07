function calculateInstenet(data) {
    var intialAmount = data.intialAmount, annualCOntri = data.annualCOntri, expectedReturn = data.expectedReturn, duration = data.duration;
    if (intialAmount < 0) {
        return 'Amount should be > 0';
    }
    if (duration <= 0) {
        return 'less duration';
    }
    if (expectedReturn < 0) {
        return 'Incorrect return';
    }
    var total = intialAmount;
    var totalContri = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContri - intialAmount;
        totalContri = totalContri + annualCOntri;
        total = total + annualCOntri;
        annualResults.push({
            year: 'Year ${i + 1}',
            totalAmount: total,
            totalInterestEarned: totalInterestEarned,
            totalContri: totalContri
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var yearEndResult = results_1[_i];
        console.log(yearEndResult.year);
        console.log(yearEndResult.totalAmount.toFixed(0));
        console.log('--------------------------------');
    }
}
var investmentData = {
    intialAmount: 1000,
    annualCOntri: 500,
    expectedReturn: 0.08,
    duration: 10
};
var results = calculateInstenet(investmentData);
printResults(results);
