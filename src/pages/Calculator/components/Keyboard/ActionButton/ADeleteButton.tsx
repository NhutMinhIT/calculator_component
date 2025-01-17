import React, { FC, memo } from 'react'
import { KeyboardIconButton } from '../../index'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { TCalculatorButton } from '../../../types/calculatorType';

const ADeleteButton: FC<TCalculatorButton> = ({
    onClick
}) => {
    return (
        <KeyboardIconButton
            onClick={onClick}
        >
            <BackspaceOutlinedIcon fontSize='medium' />
        </KeyboardIconButton>
    )
}

export default memo(ADeleteButton)