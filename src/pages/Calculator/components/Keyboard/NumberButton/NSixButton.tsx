import React, { FC } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SIX,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NSixButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SIX}
        </KeyboardButton>
    )
}

export default NSixButton