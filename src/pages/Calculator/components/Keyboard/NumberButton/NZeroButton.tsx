import React, { FC } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ZERO,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NZeroButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ZERO}
        </KeyboardButton>
    )
}

export default NZeroButton