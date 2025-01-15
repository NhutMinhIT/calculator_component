import React, { FC, memo } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent
} from "@mui/material";
import {
    ECalendarButtonVariant,
    ECalenderButtonColor,
    TCalendarDialogProps
} from "../../types";
import {
    CALENDAR_DIALOG_CANCEL_BUTTON_DATA_TEST_ID,
    CALENDAR_DIALOG_CANCEL_BUTTON_TEXT,
    CALENDAR_DIALOG_CONFIRM_BUTTON_DATA_TEST_ID,
    CALENDAR_DIALOG_CONFIRM_BUTTON_TEXT,
    CALENDAR_DIALOG_DATA_TEST_ID,
    CALENDAR_DIALOG_ID,
    CALENDAR_DIALOG_TODAY_BUTTON_DATA_TEST_ID,
    CALENDAR_DIALOG_TODAY_BUTTON_TEXT
} from "../../constant";
import styles from "../../styles/root-page.module.css";
import {
    CustomizeCalendar,
    CustomizedTodayButton,
    TransitionDialog
} from "../../components/index";
import { handleDateSelectUtil } from "../../utils/datePicker";
const CalendarDialog: FC<TCalendarDialogProps> = ({
    isOpen,
    onClose,
    onDateChangeTemp,
    tempDate,
    onConfirm,
    onRefeshToday,
}) => {
    const handleDateSelect = handleDateSelectUtil(onDateChangeTemp);
    const renderButtonToday = (): JSX.Element => {
        return (
            <CustomizedTodayButton
                variant={ECalendarButtonVariant.CONTAINED}
                color={ECalenderButtonColor.PRIMARY}
                onClick={(e) => onRefeshToday(null)}
                data-testid={CALENDAR_DIALOG_TODAY_BUTTON_DATA_TEST_ID}
            >
                {CALENDAR_DIALOG_TODAY_BUTTON_TEXT}
            </CustomizedTodayButton>
        )
    }
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={TransitionDialog}
            keepMounted
            onClose={onClose}
            aria-describedby={CALENDAR_DIALOG_ID}
            data-testid={CALENDAR_DIALOG_DATA_TEST_ID}

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
                    data-testid={CALENDAR_DIALOG_CANCEL_BUTTON_DATA_TEST_ID}
                    className={styles.btnActionCalendar}
                >
                    {CALENDAR_DIALOG_CANCEL_BUTTON_TEXT}
                </Button>
                <Button
                    data-testid={CALENDAR_DIALOG_CONFIRM_BUTTON_DATA_TEST_ID}
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
