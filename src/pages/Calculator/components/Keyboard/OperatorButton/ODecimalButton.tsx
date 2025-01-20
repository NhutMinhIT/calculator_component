import React, { FC, memo } from 'react'
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
            //set the button value to Decimal (.)
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_DECIMAL}
        </KeyboardButton>
    )
}

export default memo(ODecimalButton)