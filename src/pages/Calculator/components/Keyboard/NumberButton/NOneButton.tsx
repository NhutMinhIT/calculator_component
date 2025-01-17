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
            onClick={onClick}
        >
            {CALCULATOR_KEYBOARD_BUTTON_TEXT_NUMBER_ONE}
        </KeyboardButton>
    )
}

export default memo(NOneButton);
