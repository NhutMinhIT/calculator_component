import React, { FC } from 'react'
import { TCalculatorButton } from '../../../types/calculatorType'
import KeyboardIconButton from '../../KeyboardButtonCustomize/KeyboardIconButton'

const KeyboardAction: FC<TCalculatorButton> = ({
    onClick,
    element
}) => {
    return (
        <KeyboardIconButton
            onClick={onClick}
        >
            {element}
        </KeyboardIconButton>
    )
}

export default KeyboardAction