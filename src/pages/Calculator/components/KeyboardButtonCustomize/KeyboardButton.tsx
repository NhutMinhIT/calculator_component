import { Button, ButtonProps } from "@mui/material";
import { FC, memo } from "react";
import { styled } from '@mui/material/styles';

const KeyboardButton = styled(Button)
    `
    &.MuiButton-root{
        width: 100%;
        background-color:rgb(255, 255, 255);
        color: black;
        border-radius: 6px;
        box-shadow: 0 0 0.5rem 0.1rem rgba(204, 203, 203, 0.5);
        font-size: 1rem;
        padding: 18px auto 18px auto;
    }        
   `
const KeyboardButtonCustomize: FC<ButtonProps> = (props) => {
    return (
        <KeyboardButton
            {...props}
        />
    )

}
export default memo(KeyboardButtonCustomize)