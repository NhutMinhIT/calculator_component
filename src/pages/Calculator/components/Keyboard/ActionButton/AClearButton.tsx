import React from 'react'
import { KeyboardIconButton } from '../../index'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AClearButton = (): JSX.Element => {
    return (
        <KeyboardIconButton>
            <DeleteForeverIcon fontSize='small' />
        </KeyboardIconButton>

    )
}

export default AClearButton