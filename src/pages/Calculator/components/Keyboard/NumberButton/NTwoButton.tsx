import React, { FC, memo } from 'react'
import {
    KeyboardButton
} from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_TWO
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NTwoButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_TWO}
        </KeyboardButton>
    )
}

export default memo(NTwoButton)
