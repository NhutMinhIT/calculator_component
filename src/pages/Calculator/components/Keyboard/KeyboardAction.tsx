import React, { FC, memo } from 'react'
import KeyboardIconButton from '../KeyboardButtonCustomize/KeyboardIconButton'
import { TCalculatorButton } from '../../types/calculatorType'

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

export default memo(KeyboardAction)