export enum ECalendarButtonVariant {
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
    TEXT = 'text',
}
export enum ECalenderButtonColor {
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    INHERIT = 'inherit',
    INFO = 'info',
}

export enum ECalendarDialogTransition {
    DOWN = 'down',
    UP = 'up',
    LEFT = 'left',
    RIGHT = 'right',
}

export interface IUseCalendar {
    isOpenCalendarDialog: boolean
    handleOpenCalendarDialog: () => void
    handleCloseCalendarDialog: () => void
}

export type TCalendarDialogProps = {
    isOpen: boolean;
    onClose: () => void;
}
