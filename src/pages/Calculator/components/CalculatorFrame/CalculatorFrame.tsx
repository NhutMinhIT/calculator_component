import React from 'react'
import styles from '../../style/calculator.module.css'
import {
    Box,
    TextField
} from '@mui/material'
import { CalculatorKeyboard } from '../index'
import {
    CALCULATOR_FRAME_DATA_TEST_ID,
    CALCULATOR_RANGE_VALUE_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID,
    CALCULTATOR_TEXT_INPUT_RANGE_MAX,
    CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID,
    CALCULTATOR_TEXT_INPUT_RANGE_MIN,
    CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID
} from '../../constant'

const CalculatorFrame = (): JSX.Element => {
    return (
        <Box
            data-testid={CALCULATOR_FRAME_DATA_TEST_ID}
            className={styles.calculatorFrame}
        >
            <TextField
                data-testid={CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID}
                className={styles.calculatorTextField}
            />
            <Box
                data-testid={CALCULATOR_RANGE_VALUE_DATA_TEST_ID}
                className={styles.calculatorRange}
            >
                <span
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID}
                    className={styles.minValue}
                >
                    {CALCULTATOR_TEXT_INPUT_RANGE_MIN}
                </span>
                <span
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID}
                    className={styles.maxValue}
                >
                    {CALCULTATOR_TEXT_INPUT_RANGE_MAX}
                </span>
            </Box>
            <Box>
                <CalculatorKeyboard />
            </Box>
        </Box>
    )
}

export default CalculatorFrame