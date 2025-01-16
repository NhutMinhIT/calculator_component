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
        <Box>
            <FormControl>
                <InputLabel htmlFor="calculator-input">Enter Value</InputLabel>
                <OutlinedInput
                    id="calculator-input"
                    value={finalValue}
                    readOnly
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
