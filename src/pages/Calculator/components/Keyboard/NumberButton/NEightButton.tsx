import React from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_EIGHT,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID,
} from '../../../constant'

const NEightButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_EIGHT_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_EIGHT}
        </KeyboardButton>
    )
}

export default NEightButton