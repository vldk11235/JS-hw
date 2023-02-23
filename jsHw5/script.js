let commonFraction1 = {
    numerator: 3,
    denominator: 6,
}

let commonFraction2 = {
    numerator: 2,
    denominator: 10,
}


let fractionCalculator = {
    adding(a, b, c, d) {
        return {
            numerator: (a * d + c * b),
            denominator: b * d,
        }
    },
    subtracting(a, b, c, d) {
        return {
            numerator: (a * d - c * b),
            denominator: b * d,
        }
    },
    multiplying(a, b, c, d) {
        return {
            numerator: a * c,
            denominator: b * d,
        }
    },
    dividing(a, b, c, d) {
        return {
            numerator: a * d,
            denominator: b * c,
        }
    },
    reduction(a, b) {
        function greatestCommonDivisor(a, b) {
            while (a !== b) {
                (a > b) ? a -= b : a -= b;
            }
            return a;
        }

        return {
            numerator: a / greatestCommonDivisor(),
            denominator: b / greatestCommonDivisor(),
        }
    },

}

console.log(fractionCalculator.adding(commonFraction1.numerator, commonFraction1.denominator, commonFraction2.numerator, commonFraction2.denominator));
//adding
console.log(fractionCalculator.subtracting(commonFraction1.numerator, commonFraction1.denominator, commonFraction2.numerator, commonFraction2.denominator));
//subtracting
console.log(fractionCalculator.multiplying(commonFraction1.numerator, commonFraction1.denominator, commonFraction2.numerator, commonFraction2.denominator));
//multiplying
console.log(fractionCalculator.dividing(commonFraction1.numerator, commonFraction1.denominator, commonFraction2.numerator, commonFraction2.denominator));
//dividing
console.log(fractionCalculator.reduction(commonFraction1.numerator, commonFraction1.denominator));
//reduction






