import React, { FC } from 'react'
import styles from '../../style/calculator.module.css'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material'
import { ECalCulatorButtonColor, TCalculatorDialog } from '../../types/calculatorType'
import {
    CALCULATOR_DIALOG_BUTTON_TEXT_ACTION_CANCEL,
    CALCULATOR_DIALOG_BUTTON_TEXT_ACTION_OK,
    CALCULATOR_DIALOG_ACTION_OK_DATA_TEST_ID,
    CALCULATOR_DIALOG_DATA_TEST_ID,
    CALCULATOR_DIALOG_TITLE,
    CALCULATOR_DIALOG_TITLE_DATA_TEST_ID,
    CALCULATOR_DIALOG_TITLE_ID,
    CALCULATOR_DIALOG_ACTION_CANCEL_DATA_TEST_ID
} from '../../constant'
import { ECalendarButtonVariant } from '../../../Calendar/types'
import { CalculatorFrame } from '../index'

const CalculatorDialog: FC<TCalculatorDialog> = ({
    isOpen,
    handleClose
}) => {
    return (
        <Dialog
            data-testid={CALCULATOR_DIALOG_DATA_TEST_ID}
            open={isOpen}
            keepMounted
        >
            <DialogTitle
                id={CALCULATOR_DIALOG_TITLE_ID}
                data-testid={CALCULATOR_DIALOG_TITLE_DATA_TEST_ID}
            >
                {CALCULATOR_DIALOG_TITLE}
            </DialogTitle>
            <DialogContent>
                <CalculatorFrame />
            </DialogContent>
            <DialogActions>
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
                // onClick={handleClose}
                >
                    {CALCULATOR_DIALOG_BUTTON_TEXT_ACTION_OK}
                </Button>
            </DialogActions>
        </Dialog >
    )
}

export default CalculatorDialog