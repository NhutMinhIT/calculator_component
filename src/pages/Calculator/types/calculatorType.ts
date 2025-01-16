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
    handleOpenCalculatorDialog: () => void;
    handleCloseCalculatorDialog: () => void;
    // handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TCalculatorDialog = {
    isOpen: boolean;
    handleClose: () => void;
}