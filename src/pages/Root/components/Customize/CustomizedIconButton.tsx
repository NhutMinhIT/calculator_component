import { IconButton, IconButtonProps } from "@mui/material";
import { FC, memo } from "react";
import { styled } from '@mui/material/styles';

const CustomizedIconButton = styled(IconButton)
    `
    &.MuiIconButton-root{
        border: 1px solid gray;
        border-radius: 0.3rem;
        color: black;
        background: rgb(232,235,236);
        background: linear-gradient(180deg, rgba(232,235,236,1) 20%, rgb(179, 179, 184) 80%, rgba(246,246,255,1) 100%);
   }
`
const StyledComponents: FC<IconButtonProps> = (props) => {
    return (
        <CustomizedIconButton
            {...props}
        />
    )

}
export default memo(StyledComponents)