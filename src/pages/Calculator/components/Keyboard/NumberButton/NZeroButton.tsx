import React from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ZERO,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID,
} from '../../../constant'

const NZeroButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_ZERO_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ZERO}
        </KeyboardButton>
    )
}

export default NZeroButton