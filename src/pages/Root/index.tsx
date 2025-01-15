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
import styles from "./styles/root-page.module.css";
import { EConfirmType } from "./types";

const Root = (): JSX.Element => {
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
        <Box className={styles.rootPage}>
            <FormControl>
                <InputLabel htmlFor="calendarInput">Date</InputLabel>
                <OutlinedInput
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

export default Root;
