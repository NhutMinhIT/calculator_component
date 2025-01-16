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

export type TUseCalculator = {
    isOpenCalculatorDialog: boolean;
    handleOpenCalculatorDialog: () => void;
    handleCloseCalculatorDialog: () => void;
}

export type TCalculatorDialog = {
    isOpen: boolean;
    handleClose: () => void;
}