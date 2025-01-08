import React from 'react'
import CalendarDialog from './components/Dialog/CalendarDialog';
import { useCalendar } from './hook/useCalendar';
import { TextField } from '@mui/material';
import { CALENDAR_TEXT_FIELD_LABEL, CALENDER_TEXT_FIELD_DATA_TEST_ID, CALENDER_TEXT_FIELD_ID } from './constant';
import { convertDateToString } from './utils';

const Root = (): JSX.Element => {
    const { isOpenCalendarDialog, handleOpenCalendarDialog, handleCloseCalendarDialog } = useCalendar()

    return (
        <>
            <TextField
                label={CALENDAR_TEXT_FIELD_LABEL}
                id={CALENDER_TEXT_FIELD_ID}
                data-testid={CALENDER_TEXT_FIELD_DATA_TEST_ID}
                type="text"
                value={convertDateToString(new Date())}
                onClick={handleOpenCalendarDialog}
            />
            <CalendarDialog
                isOpen={isOpenCalendarDialog}
                onClose={handleCloseCalendarDialog}
            />

        </>
    )
}

export default Root
