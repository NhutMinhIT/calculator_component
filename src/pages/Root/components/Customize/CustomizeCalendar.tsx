import { styled } from "@mui/material/styles";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FC, memo } from "react";
import { dayOfWeekFormatter, shouldDisableMonth } from "../../utils/datePicker";
import { TStyledComponentsProps } from "../../types";

const CustomizeCalendar = styled(DateCalendar)`
    .css-iupya1-MuiButtonBase-root-MuiIconButton-root-MuiPickersCalendarHeader-switchViewButton {
        display: none;
    }

    .css-1nxbkmn-MuiPickersCalendarHeader-root {
        position: relative;   
        width: auto;
        margin: 1rem 0;
    }

    .css-cyfsxc-MuiPickersCalendarHeader-labelContainer {
        font-size: 1.5rem;
        position: absolute;
        right: 0;
        left: 0;
        justify-content: center;
        text-align: center;
    }

    .MuiPickersCalendarHeader-root .MuiPickersArrowSwitcher-previousIconButton {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 1rem;
        background-color: rgb(216, 215, 215, 0.6);
        border: 1px solid #000;
        border-radius: 0.5rem;
    }
        
    .MuiPickersCalendarHeader-root .MuiPickersArrowSwitcher-nextIconButton {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.8rem;
        background-color: rgb(216, 215, 215, 0.6);
        border: 1px solid #000;
        border-radius: 0.5rem;
    }  

    .MuiDayCalendar-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
   

    .MuiDayCalendar-weekContainer {
        display: flex;
        justify-content: space-between;
    }      

    .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root {
        border-radius: 0.5rem;   
    } 
    .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root:hover{
          background-color: #1565c0;
          border-radius: 0.5rem;
          color:white;
    }

    .css-qct7wd-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected) {
        border-radius: 0.5rem;
    }

    .css-qct7wd-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
        background-color: #1565c0;
        border-radius: 0.5rem;
    }
    
    .css-1fx2l1t-MuiButtonBase-root-MuiPickersDay-root.Mui-selected, .css-1fx2l1t-MuiButtonBase-root-MuiPickersDay-root:hover{
        color: white;
        background-color: #1565c0;
        border-radius: 0.5rem;
    }

    .css-9mtva2-MuiButtonBase-root-MuiPickersDay-root.Mui-selected, .css-9mtva2-MuiButtonBase-root-MuiPickersDay-root:hover{
        color: white;
        background-color: #1565c0;
        border-radius: 0.5rem;
    }   

    .css-9mtva2-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected){
        border-radius: 0.5rem;
    }  

`


const StyledComponents: FC<TStyledComponentsProps> = ({ value, onChangeDate, ...props }) => {
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
        >
            <CustomizeCalendar
                {...props}
                showDaysOutsideCurrentMonth
                fixedWeekNumber={6}
                dayOfWeekFormatter={dayOfWeekFormatter}
                shouldDisableMonth={shouldDisableMonth}
                onChange={onChangeDate}
            />
        </LocalizationProvider>
    )
}
export default memo(StyledComponents)