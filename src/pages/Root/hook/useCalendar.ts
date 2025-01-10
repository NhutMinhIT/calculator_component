import { useState } from "react";
import { EConfirmType, TUseCalendar } from "../types";

export const useCalendar = (): TUseCalendar => {
    const [isOpenCalendarDialog, setIsOpenCalendarDialog] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [tempDate, setTempDate] = useState<Date | null>(null);

    const handleOpenCalendarDialog = (): void => {
        setTempDate(selectedDate);
        setIsOpenCalendarDialog(true);
    };

    const handleCloseCalendarDialog = (): void => {
        setIsOpenCalendarDialog(false);
    };

    const handleDateTemp = (date: Date | null): void => {
        setTempDate(date);
    };

    const handleConfirmDate = (type: string): void => {
        if (type === EConfirmType.CONFIRM) {
            setSelectedDate(tempDate);
            handleCloseCalendarDialog();
        }
        if (type === EConfirmType.TODAY) {
            setSelectedDate(new Date());
            handleCloseCalendarDialog();
        } else {
            handleCloseCalendarDialog();
        }
    };

    return {
        isOpenCalendarDialog,
        selectedDate,
        tempDate,
        handleOpenCalendarDialog,
        handleCloseCalendarDialog,
        // action choose Date
        handleDateTemp,
        handleConfirmDate,
    };
};
