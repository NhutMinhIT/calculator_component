import React from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID,
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR
} from '../../../constant'

const NFourButton = (): JSX.Element => {
    return (
        <KeyboardButton
            data-testid={CALCULATOR_KEYBOARD_BUTTON_NUMBER_FOUR_DATA_TEST_ID}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR}
        </KeyboardButton>
    )
}

export default NFourButton