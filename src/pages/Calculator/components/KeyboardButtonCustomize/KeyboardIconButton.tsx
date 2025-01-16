import { IconButton, IconButtonProps } from "@mui/material";
import { FC, memo } from "react";
import { styled } from '@mui/material/styles';

const KeyboardIconButton = styled(IconButton)
    `
   `
const KeyboardIconButtonCustomize: FC<IconButtonProps> = (props) => {
    return (
        <KeyboardIconButton
            {...props}
        />
    )

}
export default memo(KeyboardIconButtonCustomize)