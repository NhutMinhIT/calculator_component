import React from 'react'
import styles from '../../style/calculator.module.css'
import { Box } from '@mui/material'
import {
    AClearButton,
    ADeleteButton,
    NSevenButton,
    NEightButton,
    NNineButton,
    NFourButton,
    NFiveButton,
    NSixButton,
    NOneButton,
    NTwoButton,
    NThreeButton,
    NZeroButton,
    ODecimalButton,
    OPlusOrMinusButton
} from '../index'
import {
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
    CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID
} from '../../constant'

const CalculatorKeyboard = (): JSX.Element => {
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
                    <AClearButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DELETE_DATA_TEST_ID}
                    className={styles.deleteButton}
                >
                    <ADeleteButton />
                </div>
            </Box>
            <Box className={styles.gridContainerNumber}>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID}
                    className={styles.sevenButton}
                >
                    <NSevenButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID}
                    className={styles.eightButton}
                >
                    <NEightButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID}
                    className={styles.nineButton}
                >
                    <NNineButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID}
                    className={styles.fourButton}
                >
                    <NFourButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FIVE_DATA_TEST_ID}
                    className={styles.fiveButton}
                >
                    <NFiveButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SIX_DATA_TEST_ID}
                    className={styles.sixButton}
                >
                    <NSixButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ONE_DATA_TEST_ID}
                    className={styles.oneButton}
                >
                    <NOneButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID}
                    className={styles.twoButton}
                >
                    <NTwoButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_THREE_DATA_TEST_ID}
                    className={styles.threeButton}
                >
                    <NThreeButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID}
                >
                    <OPlusOrMinusButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID}
                    className={styles.zeroButton}
                >
                    <NZeroButton />
                </div>
                <div
                    data-testid={CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID}
                    className={styles.decimalButton}
                >
                    <ODecimalButton />
                </div>
            </Box>
        </Box>
    )
}

export default CalculatorKeyboard