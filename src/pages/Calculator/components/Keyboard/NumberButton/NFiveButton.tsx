import React, { FC, memo } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FIVE,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NFiveButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            // set the onClick event to the number five button (value = 5)
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FIVE}
        </KeyboardButton>
    )
}

export default memo(NFiveButton)