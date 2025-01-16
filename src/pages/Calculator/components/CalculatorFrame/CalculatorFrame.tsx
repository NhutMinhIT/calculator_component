import React from 'react'
import styles from '../../style/calculator.module.css'
import {
    Box,
    OutlinedInput,
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

const inputValue: number = 1200;

const CalculatorFrame = (): JSX.Element => {
    return (
        <Box
            data-testid={CALCULATOR_FRAME_DATA_TEST_ID}
            className={styles.calculatorFrame}
        >
            <OutlinedInput
                data-testid={CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID}
                className={styles.calculatorTextField}
                type='number'
                defaultValue={0}
                readOnly
            // value={inputValue}
            />
            <Box
                data-testid={CALCULATOR_RANGE_VALUE_DATA_TEST_ID}
                className={styles.calculatorRange}
            >
                <span
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID}
                    className={inputValue < 0 ? styles.minValueErr : styles.minValue}
                >
                    {CALCULTATOR_TEXT_INPUT_RANGE_MIN}
                </span>
                <span
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID}
                    className={inputValue > 1000 ? styles.maxValueErr : styles.maxValue}
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