import React, { FC, memo } from 'react'
import styles from '../../style/calculator.module.css'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material'
import {
    ECalCulatorButtonColor,
    TCalculatorDialog
} from '../../types/calculatorType'
import {
    CALCULATOR_DIALOG_BUTTON_TEXT_ACTION_CANCEL,
    CALCULATOR_DIALOG_BUTTON_TEXT_ACTION_OK,
    CALCULATOR_DIALOG_TITLE,
    CALCULATOR_DIALOG_TITLE_ID,
    CALCULATOR_DIALOG_ACTION_OK_DATA_TEST_ID,
    CALCULATOR_DIALOG_DATA_TEST_ID,
    CALCULATOR_DIALOG_ACTION_CANCEL_DATA_TEST_ID,
    CALCULATOR_DIALOG_TITLE_DATA_TEST_ID,
    CALCULTATOR_VALUE_INPUT_RANGE_MIN,
    CALCULTATOR_VALUE_INPUT_RANGE_MAX,
    CALCULATOR_DIALOG_CONTENT_DATA_TEST_ID,
    CALCULATOR_DIALOG_ACTION_DATA_TEST_ID,
} from '../../constant';
import { ECalendarButtonVariant } from '../../../Calendar/types'
import CalculatorFrame from '../CalculatorFrame/CalculatorFrame';

const CalculatorDialog: FC<TCalculatorDialog> = ({
    isOpen,
    handleClose,
    handleConfirm,
    inputValue,
    handleInputChange,
}) => {
    return (
        <Dialog
            data-testid={CALCULATOR_DIALOG_DATA_TEST_ID}
            open={isOpen}
            keepMounted
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle
                id={CALCULATOR_DIALOG_TITLE_ID}
                data-testid={CALCULATOR_DIALOG_TITLE_DATA_TEST_ID}
                className={styles.dialogTitle}
            >
                {CALCULATOR_DIALOG_TITLE}
            </DialogTitle>
            <DialogContent
                data-testid={CALCULATOR_DIALOG_CONTENT_DATA_TEST_ID}
            >
                <CalculatorFrame
                    inputValue={inputValue}
                    handleInputChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions
                data-testid={CALCULATOR_DIALOG_ACTION_DATA_TEST_ID}
            >
                <Button
                    data-testid={CALCULATOR_DIALOG_ACTION_CANCEL_DATA_TEST_ID}
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalCulatorButtonColor.PRIMARY}
                    className={styles.btnActionCalculator}
                    onClick={handleClose}
                >
                    {CALCULATOR_DIALOG_BUTTON_TEXT_ACTION_CANCEL}
                </Button>
                <Button
                    data-testid={CALCULATOR_DIALOG_ACTION_OK_DATA_TEST_ID}
                    variant={ECalendarButtonVariant.CONTAINED}
                    color={ECalCulatorButtonColor.PRIMARY}
                    className={styles.btnActionCalculator}
                    disabled={Number(inputValue) <= CALCULTATOR_VALUE_INPUT_RANGE_MIN
                        || Number(inputValue) > CALCULTATOR_VALUE_INPUT_RANGE_MAX}
                    onClick={handleConfirm}
                >
                    {CALCULATOR_DIALOG_BUTTON_TEXT_ACTION_OK}
                </Button>
            </DialogActions>
        </Dialog >
    )
}

export default memo(CalculatorDialog)