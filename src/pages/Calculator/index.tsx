import React from 'react'
import styles from '../Calculator/style/calculator.module.css'
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from '@mui/material'
import {
    CALCULATOR_DIALOG_DATA_TEST_ID,
    CALCULATOR_PAGE_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_ID,
    CALCULATOR_TEXT_FIELD_LABEL
} from './constant'
import { CalculateOutlined } from '@mui/icons-material'
import { CalculatorDialog } from './components'
import { useCalculator } from './hooks/useCalculator'

const renderEndAdornmentInputField = (): JSX.Element => {
    return (
        <InputAdornment position="end">
            <IconButton>
                <CalculateOutlined />
            </IconButton>
        </InputAdornment>
    )
}

const Calculator = (): JSX.Element => {
    const {
        isOpenCalculatorDialog,
        handleOpenCalculatorDialog,
        handleCloseCalculatorDialog
    } = useCalculator()
    return (
        <Box
            className={styles.calculatorPage}
            data-testid={CALCULATOR_PAGE_DATA_TEST_ID}
        >
            <FormControl>
                <InputLabel htmlFor={CALCULATOR_TEXT_FIELD_ID}>
                    {CALCULATOR_TEXT_FIELD_LABEL}
                </InputLabel>
                <OutlinedInput
                    data-testid={CALCULATOR_TEXT_FIELD_DATA_TEST_ID}
                    id={CALCULATOR_TEXT_FIELD_ID}
                    label={CALCULATOR_TEXT_FIELD_LABEL}
                    readOnly
                    // value={}
                    onClick={handleOpenCalculatorDialog}
                    endAdornment={
                        renderEndAdornmentInputField()
                    }
                />
            </FormControl>

            <CalculatorDialog
                data-testid={CALCULATOR_DIALOG_DATA_TEST_ID}
                isOpen={isOpenCalculatorDialog}
                handleClose={handleCloseCalculatorDialog}
            />
        </Box>
    )
}

export default Calculator
