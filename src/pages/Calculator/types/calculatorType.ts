// Button variant options
export enum ECalCulatorButtonVariant {
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
    TEXT = 'text',
}

// Button color options
export enum ECalCulatorButtonColor {
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    INHERIT = 'inherit',
    INFO = 'info',
}

// Button value input
export enum ECalculatorValue {
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    ZERO = "0",
}

// Button operator input
export enum ECalculatorOperator {
    PLUSORMINUS = '+/-',
    DECIMAL = '.',
    CLEAR = 'clear',
    DELETE = 'delete',
}

// Indefinite value of hook useCalculator
export type TUseCalculator = {
    isOpenCalculatorDialog: boolean;
    inputValue: string;
    finalValue: number;
    handleOpenCalculatorDialog: () => void;
    handleCloseCalculatorDialog: () => void;
    handleInputChange: (value: string) => void;
    handleConfirm: () => void;
}

// Indefinite data type of CalculatorDialog component props
export type TCalculatorDialog = {
    isOpen: boolean;
    handleClose: () => void;
    handleConfirm: () => void;
    inputValue: string;
    handleInputChange: (value: string) => void;
}

// Indefinite data type of CalculatorFrame component props
export type TCaculatorFrame = {
    inputValue: string;
    handleInputChange: (value: string) => void;
};

// Indefinite data type of CalculatorKeyboard component props (sigle value)
export type TCalculatorButton = {
    onClick: () => void;
}

// Indefinite data type of CalculatorKeyboard component props (list keyboard)
export type TCalculatorKeyboardProps = {
    onButtonClick: (value: string) => void;
}
