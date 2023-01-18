// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Roman {
    constructor() public {}

    uint256 constant numeral_M = 1000;
    uint256 constant numeral_D = 500;
    uint256 constant numeral_C = 100;
    uint256 constant numeral_L = 50;
    uint256 constant numeral_X = 10;
    uint256 constant numeral_V = 5;
    uint256 constant numeral_I = 1;

    uint256[] numerals = [
        numeral_M,
        numeral_D,
        numeral_C,
        numeral_L,
        numeral_X,
        numeral_V,
        numeral_I
    ];
    string[] numeralStrings = ["M", "D", "C", "L", "X", "V", "I"];

    uint256 numeralCount = 7;

    string romanString;

    uint256 currentNumber;

    function toRoman(uint256 num) public returns (string memory) {
        currentNumber = num;

        while (currentNumber > 0) {
            bool numeralFound;

            for (uint256 i = 0; i < numerals.length; i++) {
                if (!numeralFound) {
                    numeralFound = checkNumeral(numeralStrings[i], numerals[i]);
                }
            }
        }

        return romanString;
    }

    function checkNumeral(string memory numeralString, uint256 numeralValue)
        internal
        returns (bool)
    {
        bool numeralFound;

        if (currentNumber >= numeralValue) {
            romanString = string.concat(romanString, numeralString);
            currentNumber -= numeralValue;
            numeralFound = true;
        }
        // else if (currentNumber >= (numeralValue - 10) && currentNumber - numeralValue - 10 >= 0) {
        //     romanString = string.concat("X", romanString, numeralString);
        //     currentNumber -= (numeralValue - 10);
        //     numeralFound = true;
        // }
        else if (currentNumber >= (numeralValue - 1)) {
            romanString = string.concat("I", romanString, numeralString);
            currentNumber -= (numeralValue - 1);
            numeralFound = true;
        }

        return numeralFound;
    }
}
