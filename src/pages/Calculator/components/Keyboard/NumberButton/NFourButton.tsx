import React, { FC } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NFourButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR}
        </KeyboardButton>
    )
}

export default NFourButton