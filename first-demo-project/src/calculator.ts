type InvestmentData = {
    intialAmount: number;
    annualCOntri: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContri: number;
    totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;

function calculateInstenet(data: InvestmentData): CalculationResult {
    const {intialAmount, annualCOntri, expectedReturn, duration} = data;

    if (intialAmount < 0) {
        return 'Amount should be > 0';
    }

    if (duration <= 0) {
        return 'less duration';
    }

    if (expectedReturn < 0) {
        return 'Incorrect return';
    }

    let total = intialAmount;
    let totalContri = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContri -  intialAmount;
        totalContri = totalContri + annualCOntri;
        total = total + annualCOntri;
        annualResults.push({
            year: 'Year ${i + 1}',
            totalAmount: total,
            totalInterestEarned,
            totalContri
        });
    }
    return annualResults;
}

function printResults(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(yearEndResult.totalAmount.toFixed(0));
        console.log('--------------------------------');
        
    }
}

const investmentData: InvestmentData = {
    intialAmount: 1000,
    annualCOntri: 500,
    expectedReturn: 0.08,
    duration: 10
};

const results = calculateInstenet(investmentData);

printResults(results);