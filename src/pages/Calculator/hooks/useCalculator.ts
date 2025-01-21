import { useState } from "react";
import { TUseCalculator } from "../types/calculatorType";
import {
    CALCULATOR_FINAL_VALUE_DEFAULT,
    CALCULATOR_INPUT_VALUE_DEFAULT,
    CALCULATOR_INPUT_VALUE_MAX_LENGTH
} from "../constant";

export const useCalculator = (): TUseCalculator => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(CALCULATOR_INPUT_VALUE_DEFAULT);
    const [finalValue, setFinalValue] = useState<number>(CALCULATOR_FINAL_VALUE_DEFAULT);

    const handleOpenCalculatorDialog = (): void => setIsOpenCalculatorDialog(true);

    const handleCloseCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(false);
        setInputValue(CALCULATOR_INPUT_VALUE_DEFAULT);
    };

    const handleInputChange = (value: string): void => {
        if (value.length <= CALCULATOR_INPUT_VALUE_MAX_LENGTH) {
            setInputValue(value);
        }
    };

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