import React from "react";
import { useCalendar } from "./hook/useCalendar";
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import { CalendarIcon } from "@mui/x-date-pickers";
import { CalendarDialog } from "./components";
import { EConfirmType } from "./types";
import {
    CALENDAR_DIALOG_DATA_TEST_ID,
    CALENDAR_TEXT_FIELD_LABEL,
    CALENDER_TEXT_FIELD_DATA_TEST_ID,
    ROOT_COMPONENT_DATA_TEST_ID
} from "./constant";
import styles from "./styles/root-page.module.css";


const Calendar = (): JSX.Element => {
    const {
        isOpenCalendarDialog,
        selectedDate,
        tempDate,
        handleOpenCalendarDialog,
        handleCloseCalendarDialog,
        handleDateTemp,
        handleConfirmDate,
        handleTodayTemp,
    } = useCalendar();

    return (
        <Box
            className={styles.rootPage}
            data-testid={ROOT_COMPONENT_DATA_TEST_ID}
        >
            <FormControl>
                <InputLabel htmlFor="calendarInput">
                    {CALENDAR_TEXT_FIELD_LABEL}
                </InputLabel>
                <OutlinedInput
                    data-testid={CALENDER_TEXT_FIELD_DATA_TEST_ID}
                    id="calendarInput"
                    onClick={handleOpenCalendarDialog}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <CalendarIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Date"
                    value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                />
            </FormControl>

            <CalendarDialog
                data-testid={CALENDAR_DIALOG_DATA_TEST_ID}
                isOpen={isOpenCalendarDialog}
                tempDate={tempDate}
                onDateChangeTemp={handleDateTemp}
                onClose={handleCloseCalendarDialog}
                onConfirm={() => handleConfirmDate(EConfirmType.CONFIRM)}
                onRefeshToday={handleTodayTemp}
            />
        </Box>
    );
};

export default Calendar;
