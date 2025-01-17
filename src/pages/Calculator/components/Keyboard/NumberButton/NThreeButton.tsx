import React, { FC } from 'react'
import { KeyboardButton } from '../../index'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_THREE,
} from '../../../constant'
import { TCalculatorButton } from '../../../types/calculatorType'

const NThreeButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_THREE}
        </KeyboardButton>
    )
}

export default NThreeButton
