import React from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_NINE,
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID,
} from '../../../constant'

const NNineButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_NINE_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_NINE}
        </KeyboardButton>
    )
}

export default NNineButton