import dayjs, { Dayjs } from 'dayjs';

const DATE_FORMAT = 'ddd';
const DISABLE_LAST_DAY = 'day'

export const handleDateSelectUtil = (onDateChangeTemp: (date: Date | null) => void) => {
    const handleDateSelect = (date: any) => {
        const selectedDate = dayjs(date).toDate();
        onDateChangeTemp(selectedDate);
    };
    return handleDateSelect;
};

export const dayOfWeekFormatter = (date: Dayjs) => {
    return date.format(DATE_FORMAT);
}

export const shouldDisableMonth = (date: Dayjs) => {
    return date.isBefore(dayjs(), DISABLE_LAST_DAY);
}
