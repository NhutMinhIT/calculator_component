import { IconButton, IconButtonProps } from "@mui/material";
import { FC, memo } from "react";
import { styled } from '@mui/material/styles';

const KeyboardIconButton = styled(IconButton)
    `
    &.MuiIconButton-root{
        width: 100%;
        background-color:rgb(255, 255, 255);
        color: black;
        border-radius: 6px;
        padding: 18px auto 18px auto;
        box-shadow: 0 0 0.5rem 0.1rem rgba(204, 203, 203, 0.5);
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