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
import { ECalculatorOperator, ECalculatorValue, TCalculatorKeyboardProps } from '../../types/calculatorType';
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
                        onClick={() => onButtonClick(ECalculatorValue.SEVEN)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID}
                    className={styles.eightButton}
                >
                    <NEightButton
                        onClick={() => onButtonClick(ECalculatorValue.EIGHT)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID}
                    className={styles.nineButton}
                >
                    <NNineButton
                        onClick={() => onButtonClick(ECalculatorValue.NINE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID}
                    className={styles.fourButton}
                >
                    <NFourButton
                        onClick={() => onButtonClick(ECalculatorValue.FOUR)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID}
                    className={styles.fiveButton}
                >
                    <NFiveButton
                        onClick={() => onButtonClick(ECalculatorValue.FIVE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID}
                    className={styles.sixButton}
                >
                    <NSixButton
                        onClick={() => onButtonClick(ECalculatorValue.SIX)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID}
                    className={styles.oneButton}

                >
                    <NOneButton
                        onClick={() => onButtonClick(ECalculatorValue.ONE)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID}
                    className={styles.twoButton}
                >
                    <NTwoButton
                        onClick={() => onButtonClick(ECalculatorValue.TWO)}
                    />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID}
                    className={styles.threeButton}
                >
                    <NThreeButton
                        onClick={() => onButtonClick(ECalculatorValue.THREE)}
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
                        onClick={() => onButtonClick(ECalculatorValue.ZERO)}
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