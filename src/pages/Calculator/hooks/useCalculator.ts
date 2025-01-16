import { useState } from "react";
import { TUseCalculator } from "../types/calculatorType";

export const useCalculator = (): TUseCalculator => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<number>(0);
    const [isValue, setIsValue] = useState<number>(0);

    const handleOpenCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(true);
    }
    const handleCloseCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(false);
    }
    // const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     if(focusButton===)
    // }
    const handleConfirm = (value: number): void => {
        setIsValue(inputValue);
    }
    return {
        isOpenCalculatorDialog,
        handleOpenCalculatorDialog,
        handleCloseCalculatorDialog,
        // handleOnChange
    }
}