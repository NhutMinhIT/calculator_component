import React from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_TEXT_PLUS_OR_MINUS
} from '../../../constant'


const OPlusOrMinusButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_PLUS_OR_MINUS_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_PLUS_OR_MINUS}
        </KeyboardButton>
    )
}

export default OPlusOrMinusButton