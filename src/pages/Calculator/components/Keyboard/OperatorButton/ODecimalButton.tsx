import React from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL,
    CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID,
} from '../../../constant'

const ODecimalButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_DECIMAL_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL}
        </KeyboardButton>
    )
}

export default ODecimalButton