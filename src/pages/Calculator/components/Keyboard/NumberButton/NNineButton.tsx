import React, { FC } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_NINE,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NNineButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_NINE}
        </KeyboardButton>
    )
}

export default NNineButton