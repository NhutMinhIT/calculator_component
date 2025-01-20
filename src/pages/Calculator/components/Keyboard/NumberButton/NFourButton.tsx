import React, { FC, memo } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NFourButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            // set the onClick event to the number four button (value = 4)  
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_FOUR}
        </KeyboardButton>
    )
}

export default memo(NFourButton);