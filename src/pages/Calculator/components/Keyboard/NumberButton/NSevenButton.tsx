import React, { FC, memo } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SEVEN,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NSevenButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_SEVEN}
        </KeyboardButton>
    )
}

export default memo(NSevenButton);