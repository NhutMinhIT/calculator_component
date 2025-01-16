import React from 'react'
import {
    KeyboardButton
} from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_TWO
} from '../../../constant'

const NTwoButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_TWO_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_TWO}
        </KeyboardButton>
    )
}

export default NTwoButton
