import React, { FC, memo } from 'react';
import styles from '../../style/calculator.module.css';
import { Box, OutlinedInput } from '@mui/material';
import { CalculatorKeyboard } from '../index';
import {
    CALCULATOR_FRAME_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID,
    CALCULATOR_RANGE_VALUE_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID,
    CALCULTATOR_TEXT_INPUT_RANGE_MAX,
    CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID,
    CALCULTATOR_TEXT_INPUT_RANGE_MIN,
    CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID,
    CALCULTATOR_VALUE_INPUT_RANGE_MAX,
    CALCULTATOR_VALUE_INPUT_RANGE_MIN
} from '../../constant';
import { TCaculatorFrame } from '../../types/calculatorType';
import { handleCalculatorButton } from '../../utils/handleCalculatorButton';


const CalculatorFrame: FC<TCaculatorFrame> = ({
    inputValue,
    handleInputChange
}) => {

    const handleButtonClick = (value: string): void => {
        const newValue = handleCalculatorButton(value, inputValue);
        handleInputChange(newValue);
    };

    return (
        <Box
            data-testid={CALCULATOR_FRAME_DATA_TEST_ID}
            className={styles.calculatorFrame}
        >
            <div
                data-testid={CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID}
                className={styles.calculatorInputValue}
            >
                {inputValue}
            </div>
            <Box
                data-testid={CALCULATOR_RANGE_VALUE_DATA_TEST_ID}
                className={styles.calculatorRange}
            >
                <span
                    className={Number(inputValue) < CALCULTATOR_VALUE_INPUT_RANGE_MIN ? styles.minValueErr : styles.minValue}
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID}
                >
                    {CALCULTATOR_TEXT_INPUT_RANGE_MIN}
                </span>
                <span
                    className={
                        Number(inputValue) > CALCULTATOR_VALUE_INPUT_RANGE_MAX ? styles.maxValueErr : styles.maxValue}
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID}
                >
                    {CALCULTATOR_TEXT_INPUT_RANGE_MAX}
                </span>
            </Box>
            <Box
                data-testid={CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID}
            >
                <CalculatorKeyboard onButtonClick={handleButtonClick} />
            </Box>
        </Box>
    );
};

export default memo(CalculatorFrame);
