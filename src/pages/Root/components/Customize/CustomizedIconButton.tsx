import { IconButton, IconButtonProps } from "@mui/material";
import { FC, memo } from "react";
import styled from "styled-components";

type TStyledComponentProps = IconButtonProps;

const CustomizedIconButton = styled(IconButton)
    `
    &.MuiIconButton-root{
        border: 1px solid gray;
        border-radius: 0.3rem;
        color: black;
        background-color: rgba(236, 234, 234, 0.5);
       }
`

const StyledComponents: FC<TStyledComponentProps> = (props) => {
    return (
        <CustomizedIconButton
            {...props}
        />
    )

}
export default memo(StyledComponents)