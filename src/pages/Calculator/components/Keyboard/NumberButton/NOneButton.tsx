import { FC, memo } from 'react'
import {
    CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ONE
} from '../../../constant'
import {
    KeyboardButton
} from '../../index'
import { TCalculatorButton } from '../../../types/calculatorType'
const NOneButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardButton
            // set the onClick event to the number one button (value = 1)
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ONE}
        </KeyboardButton>
    )
}

export default memo(NOneButton);
