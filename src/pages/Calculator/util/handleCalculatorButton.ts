export const handleCalculatorButton = (value: string, currentInput: string): string => {
    // Clear button: reset input
    if (value === 'clear') {
        return '';
    }

    // Delete button: remove last character
    if (value === 'delete') {
        // Handle negative sign case
        // if (currentInput === '-') {
        //     return '';
        // }
        // Handle last digit of negative number
        if (currentInput.startsWith('-') && currentInput.length === 2) {
            return '';
        }
        return currentInput.slice(0, -1);
    }

    // Toggle sign button
    if (value === '+/-') {
        if (!currentInput || currentInput === '-') {
            return ''; // Return empty if only minus sign
        }
        if (currentInput.startsWith('-')) {
            return currentInput.slice(1);  // Remove minus
        }
        return '-' + currentInput;  // Add minus
    }

    // Default: append value to input
    return currentInput + value;
};