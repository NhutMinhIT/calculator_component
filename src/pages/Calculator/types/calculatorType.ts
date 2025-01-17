export enum ECalCulatorButtonVariant {
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
    TEXT = 'text',
}
export enum ECalCulatorButtonColor {
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    INHERIT = 'inherit',
    INFO = 'info',
}

export enum ECalculatorValue {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    ZERO = 0,
}
export enum ECalculatorOperator {
    PlusOrMinus = '+/-',
    DOT = '.',
    CLEAR = 'clear',
    DELETE = 'delete',
}


export type TUseCalculator = {
    isOpenCalculatorDialog: boolean;
    inputValue: string;
    finalValue: string;
    handleOpenCalculatorDialog: () => void;
    handleCloseCalculatorDialog: () => void;
    handleInputChange: (value: string) => void;
    handleConfirm: () => void;
}

export type TCalculatorDialog = {
    isOpen: boolean;
    handleClose: () => void;
    handleConfirm: () => void;
    inputValue: string;
    handleInputChange: (value: string) => void;
}
export type TCaculatorFrame = {
    inputValue: string;
    handleInputChange: (value: string) => void;
};

export type TCalculatorButton = {
    onClick: () => void;
}