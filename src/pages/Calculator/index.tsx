import React from 'react';
import {
    Box,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    IconButton,
} from '@mui/material';
import { CalculateOutlined } from '@mui/icons-material';
import CalculatorDialog from './components/Dialog/CalculatorDialog';
import { useCalculator } from './hooks/useCalculator';
import {
    CALCULATOR_DIALOG_DATA_TEST_ID,
    CALCULATOR_PAGE_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_ID,
    CALCULATOR_TEXT_FIELD_LABEL
} from './constant';

const Calculator = (): JSX.Element => {
    const {
        isOpenCalculatorDialog,
        inputValue,
        finalValue,
        handleOpenCalculatorDialog,
        handleCloseCalculatorDialog,
        handleInputChange,
        handleConfirm
    } = useCalculator();

    return (
        <Box
            data-testid={CALCULATOR_PAGE_DATA_TEST_ID}
        >
            <FormControl>
                <InputLabel
                    htmlFor={CALCULATOR_TEXT_FIELD_ID}
                >
                    {CALCULATOR_TEXT_FIELD_LABEL}
                </InputLabel>
                <OutlinedInput
                    data-testid={CALCULATOR_TEXT_FIELD_DATA_TEST_ID}
                    id={CALCULATOR_TEXT_FIELD_ID}
                    value={finalValue}
                    onClick={handleOpenCalculatorDialog}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <CalculateOutlined />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <CalculatorDialog
                data-testid={CALCULATOR_DIALOG_DATA_TEST_ID}
                isOpen={isOpenCalculatorDialog}
                handleClose={handleCloseCalculatorDialog}
                handleConfirm={handleConfirm}
                inputValue={inputValue.toString()}
                handleInputChange={(value: string) => handleInputChange(Number(value))}
            />
        </Box>
    );
};

export default Calculator;
