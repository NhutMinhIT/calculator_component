import { useState } from "react";
import { EConfirmType, TUseCalendar } from "../types";

export const useCalendar = (): TUseCalendar => {
    const [isOpenCalendarDialog, setIsOpenCalendarDialog] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [tempDate, setTempDate] = useState<Date | null>(null);

    const handleOpenCalendarDialog = (): void => {
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
            setSelectedDate(tempDate ? new Date(tempDate) : new Date());
        }
        handleCloseCalendarDialog();
    };

    const handleTodayTemp = (): void => {
        const today = new Date();
        setTempDate(today);
    };

    return {
        isOpenCalendarDialog,
        selectedDate,
        tempDate,
        handleOpenCalendarDialog,
        handleCloseCalendarDialog,
        handleDateTemp,
        handleConfirmDate,
        handleTodayTemp,
    };
};
