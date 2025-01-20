import {
    CALCULATOR_CURRENT_INPUT_LENGTH,
    CALCULATOR_DECIMAL,
    CALCULATOR_EMPTRY_VALUE, CALCULATOR_INPUT_VALUE_START_DECIMAL, CALCULATOR_MINUS
} from "../constant";
import { ECalculatorOperator, ECalculatorValue } from "../types/calculatorType";

export const handleCalculatorButton = (value: string, currentInput: string): string => {
    // Clear button: reset input
    if (value === ECalculatorOperator.CLEAR) {
        return CALCULATOR_EMPTRY_VALUE;
    }

    // Delete button: remove last character
    if (value === ECalculatorOperator.DELETE) {
        // Handle negative sign case
        if (currentInput === CALCULATOR_MINUS) {
            return CALCULATOR_EMPTRY_VALUE;
        }
        // Handle last digit of negative number
        if (currentInput.startsWith(CALCULATOR_MINUS) && currentInput.length === CALCULATOR_CURRENT_INPUT_LENGTH) {
            return CALCULATOR_EMPTRY_VALUE;
        }
        return currentInput.slice(0, -1);
    }

    // Toggle sign button
    if (value === ECalculatorOperator.PLUSORMINUS) {
        if (!currentInput || currentInput === CALCULATOR_MINUS) {
            return CALCULATOR_EMPTRY_VALUE; // Return empty if only minus sign
        }
        if (currentInput.startsWith(CALCULATOR_MINUS)) {
            return currentInput.slice(1);  // Remove minus
        }
        return CALCULATOR_MINUS + currentInput;  // Add minus
    }

    // Decimal button
    if (value === ECalculatorOperator.DECIMAL) {
        // Prevent multiple decimals
        if (currentInput.includes(CALCULATOR_DECIMAL)) {
            return currentInput;
        }
        // Append decimal
        return currentInput === CALCULATOR_EMPTRY_VALUE ? CALCULATOR_INPUT_VALUE_START_DECIMAL : currentInput + CALCULATOR_DECIMAL;
    }

    // Default: append value to input
    if (currentInput === ECalculatorValue.ZERO) {
        return value;
    }

    return currentInput + value;
};