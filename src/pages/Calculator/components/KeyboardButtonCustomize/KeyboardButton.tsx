import { FC, memo } from "react";
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from "@mui/material";

const KeyboardButton = styled(Button)
    `
    &.MuiButton-root{
        width: 100%;
        background-color:rgb(255, 255, 255);
        color: black;
        border-radius: 6px;
        box-shadow: 0 0 0.5rem 0.1rem rgba(201, 198, 198, 0.5);
        font-size: 1.5rem;
        padding: 18px auto 18px auto;
    } 
        
    &.MuiButton-root:hover{
        background-color:rgba(255, 255, 255, 0.7);
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