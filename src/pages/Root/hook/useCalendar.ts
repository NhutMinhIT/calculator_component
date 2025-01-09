import { useState } from "react";
import { IUseCalendar } from "../types";

export const useCalendar = (): IUseCalendar => {
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

    const handleConfirmDate = (): void => {
        setSelectedDate(tempDate);
        handleCloseCalendarDialog();
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
