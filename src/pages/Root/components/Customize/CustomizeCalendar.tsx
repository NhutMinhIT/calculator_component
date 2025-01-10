import { styled } from "@mui/material/styles";
import styles from './style/calendar.module.css'

import {
    DateCalendar,
    LocalizationProvider,
    PickersCalendarHeaderProps
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FC, memo } from "react";
import {
    dayOfWeekFormatter,
    shouldDisableMonth
} from "../../utils/datePicker";
import { TStyledComponentsProps } from "../../types";
import { CALENDAR_FIXED_WEEK_NUMBER } from "../../constant";
import {
    SkipNext,
    SkipPrevious
} from "@mui/icons-material";
import { Dayjs } from "dayjs";
import {
    Box,
    IconButton,
    Stack
} from "@mui/material";

const CustomizeCalendar = styled(DateCalendar)`   

    .MuiDayCalendar-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }   
    .css-17f9e7e-MuiTypography-root-MuiDayCalendar-weekDayLabel{
        font-weight: 600;
    }

    .MuiDayCalendar-weekContainer {
        display: flex;
        justify-content: space-between;
    }      

    .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root {
        border-radius: 0.5rem;   
        font-weight: 600;
    } 
        
    .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root:hover{
          background-color: #1565c0;
          border-radius: 0.5rem;
          color:white;
          font-weight: 700;
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
const CALENDER_VALUE_MONTH_NUMBER: number = 1
const CALENDAR_HEADER_FORMAT: string = 'MMM YYYY'

const StyledComponents: FC<TStyledComponentsProps> = ({ value, onChangeDate, renderButtonToday, ...props }) => {
    const renderCustomeHeader = (props: PickersCalendarHeaderProps<Dayjs>) => {
        const { currentMonth, onMonthChange } = props;

        const selectNextMonth = (): void => onMonthChange(currentMonth.add(CALENDER_VALUE_MONTH_NUMBER, 'month'), 'left');
        const selectPreviousMonth = (): void =>
            onMonthChange(currentMonth.subtract(CALENDER_VALUE_MONTH_NUMBER, 'month'), 'right');

        return (
            <Box className={styles.boxHeaderCalendar}>
                <Stack>
                    <IconButton onClick={selectPreviousMonth} className={styles.iconPrevMonth}>
                        <SkipPrevious />
                    </IconButton>
                </Stack>
                <span
                    className={styles.textHeaderCalendar}
                >
                    {currentMonth.format(CALENDAR_HEADER_FORMAT)}
                </span>

                <Stack>
                    <IconButton onClick={selectNextMonth} className={styles.iconNextMonth}>
                        <SkipNext />
                    </IconButton>
                </Stack>
                {renderButtonToday()}
            </Box>
        )
    }


    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
        >
            <CustomizeCalendar
                {...props}
                showDaysOutsideCurrentMonth
                fixedWeekNumber={CALENDAR_FIXED_WEEK_NUMBER}
                dayOfWeekFormatter={dayOfWeekFormatter}
                shouldDisableMonth={shouldDisableMonth}
                onChange={onChangeDate}
                slots={{
                    calendarHeader: renderCustomeHeader
                }}
            />
        </LocalizationProvider>
    )
}
export default memo(StyledComponents)