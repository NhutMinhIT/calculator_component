import React, { FC, memo } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import TransitionDialog from "../Transition/TransitionDialog";
import { ECalendarButtonVariant, ECalenderButtonColor, TCalendarDialogProps } from "../../types";
import { CALENDAR_DIALOG_CANCEL_BUTTON_TEXT, CALENDAR_DIALOG_CONFIRM_BUTTON_TEXT, CALENDAR_DIALOG_ID, CALENDAR_DIALOG_TODAY_BUTTON_TEXT } from "../../constant";
import CustomizeCalendar from "../Customize/CustomizeCalendar";
import styles from "../../styles/style.module.css";
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
    const renderButtonToday = (): JSX.Element => {
        return (
            <Button
                onClick={(): void => onRefeshToday(new Date())}
                className={styles.btnActionToday}
            >
                {CALENDAR_DIALOG_TODAY_BUTTON_TEXT}
            </Button>
        )
    }
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
                    renderButtonToday={renderButtonToday}
                />
            </DialogContent>

            <DialogActions>
                <Button
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalenderButtonColor.PRIMARY}
                    onClick={onClose}

                    className={styles.btnActionCalendar}
                >
                    {CALENDAR_DIALOG_CANCEL_BUTTON_TEXT}
                </Button>
                <Button
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalenderButtonColor.PRIMARY}
                    onClick={onConfirm}
                    className={styles.btnActionCalendar}
                >
                    {CALENDAR_DIALOG_CONFIRM_BUTTON_TEXT}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default memo(CalendarDialog);
