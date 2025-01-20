import { useState } from "react";
import { TUseCalculator } from "../types/calculatorType";
import {
    CALCULATOR_FINAL_VALUE_DEFAULT,
    CALCULATOR_INPUT_VALUE_DEFAULT,
    CALCULATOR_INPUT_VALUE_MAX_LENGTH
} from "../constant";

export const useCalculator = (): TUseCalculator => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false); // set the default value of isOpenCalculatorDialog to false
    const [inputValue, setInputValue] = useState<string>(CALCULATOR_INPUT_VALUE_DEFAULT); //set the default value of inputValue to 0
    const [finalValue, setFinalValue] = useState<number>(CALCULATOR_FINAL_VALUE_DEFAULT); //set the default value of finalValue to 0

    // Open the dialog
    const handleOpenCalculatorDialog = (): void => setIsOpenCalculatorDialog(true);

    // Close the dialog
    const handleCloseCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(false);
        setInputValue(CALCULATOR_INPUT_VALUE_DEFAULT);
    };

    // Handle input change
    const handleInputChange = (value: string): void => {
        if (value.length <= CALCULATOR_INPUT_VALUE_MAX_LENGTH) {
            setInputValue(value);
        }
    };

    // Confirm the final value
    const handleConfirm = (): void => {
        setFinalValue(parseFloat(inputValue));
        handleCloseCalculatorDialog();
    };

    return {
        isOpenCalculatorDialog,
        inputValue,
        finalValue,
        handleOpenCalculatorDialog,
        handleCloseCalculatorDialog,
        handleInputChange,
        handleConfirm
    };
};