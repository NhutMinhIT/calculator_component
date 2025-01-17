import React, { FC } from 'react'
import { KeyboardIconButton } from '../../index'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TCalculatorButton } from '../../../types/calculatorType';

const AClearButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardIconButton
            onClick={onClick}
        >
            <DeleteForeverIcon fontSize='medium' />
        </KeyboardIconButton>

    )
}

export default AClearButton