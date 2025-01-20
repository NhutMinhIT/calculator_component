import { useState } from "react";
import { TUseCalculator } from "../types/calculatorType";

export const useCalculator = (): TUseCalculator => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [finalValue, setFinalValue] = useState<number>(0);

    const handleOpenCalculatorDialog = (): void => setIsOpenCalculatorDialog(true);
    const handleCloseCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(false);
        setInputValue("");
    };

    const handleInputChange = (value: string): void => {
        if (value.length <= 8) {
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