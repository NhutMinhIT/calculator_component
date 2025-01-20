import React, { FC, memo } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_PLUS_OR_MINUS
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'


const OPlusOrMinusButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            // set the button value to Plus or Minus (+/-)
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_PLUS_OR_MINUS}
        </KeyboardButton>
    )
}

export default memo(OPlusOrMinusButton);