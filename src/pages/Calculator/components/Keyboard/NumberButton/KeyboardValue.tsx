import React, { FC, memo } from 'react'
import { KeyboardButton } from '../../index'
import { TCalculatorButton } from '../../../types/calculatorType'

const KeyboardValue: FC<TCalculatorButton> = ({
    onClick,
    keyboardButtonText
}) => {
    return (
        <KeyboardButton
            onClick={onClick}
        >
            {keyboardButtonText}
        </KeyboardButton>
    )
}

export default memo(KeyboardValue)
