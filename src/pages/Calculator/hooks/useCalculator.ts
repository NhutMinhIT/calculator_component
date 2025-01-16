import { useState } from "react";
import { TUseCalculator } from "../types/calculatorType";

export const useCalculator = (): TUseCalculator => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
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
    return {
        isOpenCalculatorDialog,
        handleOpenCalculatorDialog,
        handleCloseCalculatorDialog,
        // handleOnChange
    }
}