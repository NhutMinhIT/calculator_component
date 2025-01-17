import React, { FC, memo } from 'react';
import styles from '../../style/calculator.module.css';
import { Box } from '@mui/material';
import {
    AClearButton,
    ADeleteButton,
    NEightButton,
    NFiveButton,
    NFourButton,
    NNineButton,
    NOneButton,
    NSevenButton,
    NSixButton,
    NThreeButton,
    NTwoButton,
    NZeroButton,
    ODecimalButton,
    OPlusOrMinusButton
} from '../index';
import { ECalculatorOperator, TCalculatorKeyboardProps } from '../../types/calculatorType';
import {
    //test id
    CALCULATOR_KEYBOARD_BUTTON_CLEAR_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL,
    CALCULATOR_KEYBOARD_BUTTON_TEXT_PLUS_OR_MINUS,
    //value
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_EIGHT,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_FIVE,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_FOUR,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_NINE,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_ONE,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_SEVEN,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_SIX,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_THREE,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_TWO,
    CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_ZERO
} from '../../constant';

const CalculatorKeyboard: FC<TCalculatorKeyboardProps> = ({ onButtonClick }) => {
    return (
        <Box
            data-testid={CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID}
            className={styles.calculatorKeyboard}
        >
            <Box className={styles.gridContainerAction}>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_CLEAR_DATA_TEST_ID}
                    className={styles.clearButton}
                >
                    <AClearButton
                        onClick={() => onButtonClick(ECalculatorOperator.CLEAR)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID}
                    className={styles.deleteButton}
                >
                    <ADeleteButton
                        onClick={() => onButtonClick(ECalculatorOperator.DELETE)}
                    />
                </div>
            </Box>
            <Box className={styles.gridContainerNumber}>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID}
                    className={styles.sevenButton}
                >
                    <NSevenButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_SEVEN)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID}
                    className={styles.eightButton}
                >
                    <NEightButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_EIGHT)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID}
                    className={styles.nineButton}
                >
                    <NNineButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_NINE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID}
                    className={styles.fourButton}
                >
                    <NFourButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_FOUR)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID}
                    className={styles.fiveButton}
                >
                    <NFiveButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_FIVE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID}
                    className={styles.sixButton}
                >
                    <NSixButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_SIX)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID}
                    className={styles.oneButton}

                >
                    <NOneButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_ONE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID}
                    className={styles.twoButton}
                >
                    <NTwoButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_TWO)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID}
                    className={styles.threeButton}
                >
                    <NThreeButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_THREE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID}
                    className={styles.plusMinusButton}
                >
                    <OPlusOrMinusButton
                        onClick={() => onButtonClick(ECalculatorOperator.PLUSORMINUS)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID}
                    className={styles.zeroButton}
                >
                    <NZeroButton
                        onClick={() => onButtonClick(CALCULATOR_KEYBOARD_BUTTON_VALUE_NUMBER_ZERO)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID}
                    className={styles.decimalButton}
                >
                    <ODecimalButton
                        onClick={() => onButtonClick(ECalculatorOperator.DECIMAL)}
                    />
                </div>
            </Box>
        </Box>
    );
};

export default memo(CalculatorKeyboard);