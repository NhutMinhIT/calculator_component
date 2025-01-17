import { useState } from "react";
import { TUseCalculator } from "../types/calculatorType";

export const useCalculator = (): TUseCalculator => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<number>(0);
    const [finalValue, setFinalValue] = useState<number>(0);

    const handleOpenCalculatorDialog = (): void => setIsOpenCalculatorDialog(true);
    const handleCloseCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(false);
        setInputValue(0);
    };

    const handleInputChange = (value: number): void => setInputValue(value);

    const handleConfirm = (): void => {
        setFinalValue(inputValue);
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
