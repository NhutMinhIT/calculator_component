import React, { FC, memo } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_EIGHT,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NEightButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            // set the onClick event to the number eight button (value = 8)
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_EIGHT}
        </KeyboardButton>
    )
}

export default memo(NEightButton)
