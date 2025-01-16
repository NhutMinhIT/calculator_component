import { useState } from "react";
import { TUseCalculator } from "../types/calculatorType";

export const useCalculator = (): TUseCalculator => {
    const [isOpenCalculatorDialog, setIsOpenCalculatorDialog] = useState<boolean>(false);
    const handleOpenCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(true);
    }
    const handleCloseCalculatorDialog = (): void => {
        setIsOpenCalculatorDialog(false);
    }

    return {
        isOpenCalculatorDialog,
        handleOpenCalculatorDialog,
        handleCloseCalculatorDialog,
    }
}