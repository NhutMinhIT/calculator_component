import { Button, ButtonProps } from "@mui/material";
import { FC, memo } from "react";
import { styled } from '@mui/material/styles';

const CustomizedTodayButton = styled(Button)
    `   &.MuiButtonBase-root{
        border: 1px solid gray;
        border-radius: 0.2rem;
        color: #333333;
        font-weight: 300;
        font-size: 0.8rem;
        padding: 0.5rem 0.5rem;
        background: rgb(232,235,236);
        background: linear-gradient(180deg, rgba(232,235,236,1) 20%, rgb(179, 179, 184) 80%, rgba(246,246,255,1) 100%);
        text-align: center;
        text-transform: capitalize;
   }
`

const StyledComponents: FC<ButtonProps> = (props) => {
    return (
        <CustomizedTodayButton
            {...props}
        />
    )

}
export default memo(StyledComponents)