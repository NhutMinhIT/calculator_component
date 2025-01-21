import React, { FC, memo } from 'react';
import styles from '../../style/calculator.module.css';
import { Box } from '@mui/material';
import {

    KeyboardValue,
} from '../index';
import {
    TCalculatorKeyboardProps
} from '../../types/calculatorType';

import {
    CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID,
} from '../../constant';
import { listAction, listKeyboard } from '../../constant/listKeyboard';
import KeyboardAction from './KeyboardAction';


const CalculatorKeyboard: FC<TCalculatorKeyboardProps> = ({ onButtonClick }) => {

    return (
        <Box
            data-testid={CALCULATOR_KEYBOARD_BUTTON_LIST_DATA_TEST_ID}
            className={styles.calculatorKeyboard}
        >
            <Box className={styles.gridContainerAction}>
                {listAction.map((action, index) => (
                    <div
                        key={index}
                        data-testid={action.dataTestId}
                    >
                        <KeyboardAction
                            onClick={() => onButtonClick(action.action)}
                            element={action.element}
                        />
                    </div>
                ))}
            </Box>
            <Box className={styles.gridContainerNumber}>
                {listKeyboard.map((keyboard, index) => (
                    <div
                        key={index}
                        data-testid={keyboard.dataTestId}
                    >
                        <KeyboardValue
                            onClick={() => onButtonClick(keyboard.value)}
                            keyboardButtonText={keyboard.buttonText}
                        />
                    </div>
                )
                )}
            </Box>
        </Box>
    );
};

export default memo(CalculatorKeyboard);