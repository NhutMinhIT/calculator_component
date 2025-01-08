import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { forwardRef, memo } from "react";
import { ECalendarDialogTransition } from "../../types";

const TransitionDialog = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction={ECalendarDialogTransition.UP} ref={ref} {...props} />;
});
export default memo(TransitionDialog);