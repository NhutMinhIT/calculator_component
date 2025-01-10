import { Button, ButtonProps } from "@mui/material";
import { FC, memo } from "react";
import styled from "styled-components";

type TStyledComponentProps = ButtonProps;

const CustomizedTodayButton = styled(Button)
    `
    &.css-1588512-MuiButtonBase-root-MuiButton-root{
        border: 1px solid gray;
        border-radius: 0.2rem;
        color: #333333;
        font-weight: 300;
        font-size: 0.8rem;
        padding: 0.55rem 0.5rem;
        background-color: rgba(252, 251, 251, 0.5);
        text-align: center;
        text-transform: capitalize;
   }
`

const StyledComponents: FC<TStyledComponentProps> = (props) => {
    return (
        <CustomizedTodayButton
            {...props}
        />
    )

}
export default memo(StyledComponents)