import { useState } from "react";

export const useCalculator = () => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState(false);
    const [inputValue, setInputValue] = useState<number>(0);
    const [finalValue, setFinalValue] = useState<number>(0);

    const handleOpenCalculatorDialog = () => setIsOpenCalculatorDialog(true);
    const handleCloseCalculatorDialog = () => setIsOpenCalculatorDialog(false);

    const handleInputChange = (value: number) => setInputValue(value);

    const handleConfirm = () => {
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
