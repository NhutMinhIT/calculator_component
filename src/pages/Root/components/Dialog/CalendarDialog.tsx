import React, { FC, memo } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import TransitionDialog from "../Transition/TransitionDialog";
import { ECalendarButtonVariant, ECalenderButtonColor, TCalendarDialogProps } from "../../types";
import { CALENDAR_DIALOG_CANCEL_BUTTON_TEXT, CALENDAR_DIALOG_CONFIRM_BUTTON_TEXT, CALENDAR_DIALOG_ID } from "../../constant";
import CustomizeCalendar from "../Customize/CustomizeCalendar";
import styled from "../../styles/style.module.css";
import { useHandleDateSelect } from "../../utils/datePicker";

const CalendarDialog: FC<TCalendarDialogProps> = ({
    isOpen,
    onClose,
    onDateChangeTemp,
    tempDate,
    onConfirm,
    onRefeshToday,
}) => {
    const handleDateSelect = useHandleDateSelect(onDateChangeTemp);

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={TransitionDialog}
            keepMounted
            onClose={onClose}
            aria-describedby={CALENDAR_DIALOG_ID}
        >
            <DialogContent>
                <CustomizeCalendar
                    value={tempDate}
                    onChangeDate={handleDateSelect}
                />
            </DialogContent>

            <DialogActions>
                <Button
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalenderButtonColor.PRIMARY}
                    onClick={onConfirm}
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
                <Button
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalenderButtonColor.PRIMARY}
                    className={styled.btnActionCalendar}
                    onClick={(): void => onRefeshToday(new Date())}
                >
                    Today
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default memo(CalendarDialog);
