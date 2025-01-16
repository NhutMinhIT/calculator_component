import React from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SEVEN,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID,
} from '../../../constant'

const NSevenButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_SEVEN_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SEVEN}
        </KeyboardButton>
    )
}

export default NSevenButton