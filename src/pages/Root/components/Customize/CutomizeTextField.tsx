import React, { FC, memo } from 'react';
import { styled } from '@mui/material/styles';
import {
    TextField,
    TextFieldProps
} from '@mui/material';

const CustomizedTextField = styled(TextField)`
 .MuiInputBase-root {
    background-color: #f7f7f7;
    font-weight: 500;
}

.MuiFormLabel-root {
    font-weight: 700;
}
`;

type TStyledComponentsProps = TextFieldProps

const StyledComponents: FC<TStyledComponentsProps> = (props) => {
    return (
        <CustomizedTextField
            {...props}
        />
    )
}
export default memo(StyledComponents)