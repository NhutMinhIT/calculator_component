import { useState } from "react";

export const useCalculator = () => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<number>(0);
    const [finalValue, setFinalValue] = useState<number>(0);

    const handleOpenCalculatorDialog = (): void => setIsOpenCalculatorDialog(true);
    const handleCloseCalculatorDialog = (): void => setIsOpenCalculatorDialog(false);

    const handleInputChange = (value: number) => setInputValue(value);

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
