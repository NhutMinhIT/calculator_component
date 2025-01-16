import React from 'react'
import { KeyboardIconButton } from '../../index'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const ADeleteButton = (): JSX.Element => {
    return (
        <KeyboardIconButton>
            <BackspaceOutlinedIcon fontSize='small' />
        </KeyboardIconButton>
    )
}

export default ADeleteButton