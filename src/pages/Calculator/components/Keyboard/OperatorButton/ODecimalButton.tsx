import React, { FC } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const ODecimalButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL}
        </KeyboardButton>
    )
}

export default ODecimalButton