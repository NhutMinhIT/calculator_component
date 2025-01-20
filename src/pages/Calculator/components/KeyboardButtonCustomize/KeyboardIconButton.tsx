import { FC, memo } from "react";
import { styled } from '@mui/material/styles';
import { IconButton, IconButtonProps } from "@mui/material";

const KeyboardIconButton = styled(IconButton)
    `
    &.MuiIconButton-root{
        width: 100%;
        background-color:rgb(255, 255, 255);
        color: black;
        border-radius: 6px;
        padding: 15px;
        box-shadow: 0 0 0.5rem 0.1rem rgba(201, 198, 198, 0.5);
    }

    &.MuiIconButton-root:hover{
        background-color:rgba(255, 255, 255, 0.7);
    }
        
`
const KeyboardIconButtonCustomize: FC<IconButtonProps> = (props) => {
    return (
        <KeyboardIconButton
            {...props}
        />
    )

}
export default memo(KeyboardIconButtonCustomize)