import React from 'react'
import CalendarDialog from './components/Dialog/CalendarDialog';
import { useCalendar } from './hook/useCalendar';
import { TextField } from '@mui/material';

const Root = (): JSX.Element => {
    const { isOpenCalendarDialog, handleOpenCalendarDialog, handleCloseCalendarDialog } = useCalendar()

    return (
        <>
            <TextField
                type="text"
                value={Date.now()}
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
