import React from 'react'
import style from './style/caculator-page.module.css'
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from '@mui/material'
import {
    CACULATOR_PAGE_DATA_TEST_ID,
    CACULATOR_TEXT_FIELD_DATA_TEST_ID,
    CACULATOR_TEXT_FIELD_ID,
    CACULATOR_TEXT_FIELD_LABEL
} from './constant'
import { CalculateOutlined } from '@mui/icons-material'

const renderEndAdornmentInputField = (): JSX.Element => {
    return (
        <InputAdornment position="end">
            <IconButton>
                <CalculateOutlined />
            </IconButton>
        </InputAdornment>
    )
}

const Caculator = (): JSX.Element => {
    return (
        <Box
            className={style.caculatorPage}
            data-testid={CACULATOR_PAGE_DATA_TEST_ID}
        >
            <FormControl>
                <InputLabel htmlFor={CACULATOR_TEXT_FIELD_ID}>
                    {CACULATOR_TEXT_FIELD_LABEL}
                </InputLabel>
                <OutlinedInput
                    data-testid={CACULATOR_TEXT_FIELD_DATA_TEST_ID}
                    id={CACULATOR_TEXT_FIELD_ID}
                    label={CACULATOR_TEXT_FIELD_LABEL}
                    // value={}
                    // onClick={}
                    endAdornment={
                        renderEndAdornmentInputField()
                    }
                />
            </FormControl>
        </Box>
    )
}

export default Caculator
