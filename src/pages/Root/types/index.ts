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

export type TUseCalendar = {
    tempDate: Date | null
    selectedDate: Date | null
    isOpenCalendarDialog: boolean
    handleOpenCalendarDialog: () => void
    handleCloseCalendarDialog: () => void
    handleDateTemp: (date: Date | null) => void
    handleConfirmDate: (type: string) => void
}

export type TStyledComponentsProps = {
    value: Date | null;
    onChangeDate: (date: Date | null) => void;
}

export type TCalendarDialogProps = {
    tempDate: Date | null
    onConfirm: () => void
    isOpen: boolean;
    onClose: () => void;
    onDateChangeTemp: (date: Date | null) => void;
    onRefeshToday: (date: Date | null) => void;
}

export enum EConfirmType {
    CONFIRM = 'confirm',
    TODAY = 'today',
    CANCEL = 'cancel',
}

