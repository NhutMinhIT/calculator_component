import { Button, ButtonProps } from "@mui/material";
import { FC, memo } from "react";
import styled from "styled-components";

type TStyledComponentProps = ButtonProps;

const CustomizedTodayButton = styled(Button)
    `
    &.css-1588512-MuiButtonBase-root-MuiButton-root{
        border: 1px solid gray;
        border-radius: 0.2rem;
        color: black;
        background-color: rgba(236, 234, 234, 0.5);
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