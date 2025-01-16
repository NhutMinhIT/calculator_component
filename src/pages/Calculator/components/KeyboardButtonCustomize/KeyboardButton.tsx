import { Button, ButtonProps } from "@mui/material";
import { FC, memo } from "react";
import { styled } from '@mui/material/styles';

const KeyboardButton = styled(Button)
    `
   `
const KeyboardButtonCustomize: FC<ButtonProps> = (props) => {
    return (
        <KeyboardButton
            {...props}
        />
    )

}
export default memo(KeyboardButtonCustomize)