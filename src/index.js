module.exports = function toReadable(number) {
  const fromZeroToNineteen = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
  ];

  const tens = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
  ];

  function upToTwenty(n) {
      return fromZeroToNineteen[n];
  }

  function fromTwentyToOneHundred(n) {
      const array = n.toString().split("").map(Number);
      const remainder = n % 10;
      if (remainder !== 0) {
          return tens[array[0] - 2] + " " + upToTwenty(array[1]);
      }
      return tens[array[0] - 2];
  }

  function fromOneHundredToThousand(n) {
      const array = n.toString().split("").map(Number);
      const remainder = n % 100;

      if (remainder > 0 && remainder < 20) {
          return upToTwenty(array[0]) + " hundred " + upToTwenty(remainder);
      }

      if (remainder >= 20 && remainder < 100) {
          return (
              upToTwenty(array[0]) +
              " hundred " +
              fromTwentyToOneHundred(remainder)
          );
      }

      if (remainder === 0) {
          return upToTwenty(array[0]) + " hundred";
      }
  }

  function fromOneThousandFromTenThousand(n) {
      const array = n.toString().split("").map(Number);
      const remainder = n % 1000;

      if (remainder > 0 && remainder < 20) {
          return upToTwenty(array[0]) + " thousand " + upToTwenty(remainder);
      }

      if (remainder >= 20 && remainder < 99) {
          return (
              upToTwenty(array[0]) +
              " thousand " +
              fromTwentyToOneHundred(remainder)
          );
      }

      if (remainder >= 100 && remainder < 1000) {
          return (
              upToTwenty(array[0]) +
              " thousand " +
              fromOneHundredToThousand(remainder)
          );
      }

      if (remainder === 0) {
          return 10 + " thousand";
      }
  }

  if (number < 20) {
      return upToTwenty(number);
  } else if (number >= 20 && number < 100) {
      return fromTwentyToOneHundred(number);
  } else if (number >= 100 && number < 1000) {
      return fromOneHundredToThousand(number);
  } else if (number >= 1000) {
      return fromOneThousandFromTenThousand(number);
  }
};
