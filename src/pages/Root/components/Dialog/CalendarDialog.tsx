import React, { FC, memo } from 'react'
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import TransitionDialog from '../Transition/TransitionDialog'
import { ECalendarButtonVariant, ECalenderButtonColor, TCalendarDialogProps } from '../../types'
import { CALENDAR_DIALOG_CANCEL_BUTTON_TEXT, CALENDAR_DIALOG_CONFIRM_BUTTON_TEXT, CALENDAR_DIALOG_ID } from '../../constant'
import CustomizeCalendar from '../Customize/CustomizeCalendar'
import styled from '../../styles/style.module.css'

const renderCalendar = (): JSX.Element => {
    return (
        <CustomizeCalendar />
    )
}

const CalendarDialog: FC<TCalendarDialogProps> = ({
    isOpen,
    onClose
}) => {

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={TransitionDialog}
            keepMounted
            onClose={onClose}
            aria-describedby={CALENDAR_DIALOG_ID}
        >
            <DialogContent>
                {renderCalendar()}
            </DialogContent>

            <DialogActions>
                <Button
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalenderButtonColor.PRIMARY}
                    onClick={onClose}
                    className={styled.btnActionCalendar}
                >
                    {CALENDAR_DIALOG_CONFIRM_BUTTON_TEXT}
                </Button>
                <Button
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalenderButtonColor.PRIMARY}
                    onClick={onClose}
                    className={styled.btnActionCalendar}
                >
                    {CALENDAR_DIALOG_CANCEL_BUTTON_TEXT}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(CalendarDialog)
