import dayjs, { Dayjs } from 'dayjs';

export const useHandleDateSelect = (onDateChangeTemp: (date: Date | null) => void) => {
    const handleDateSelect = (date: any) => {
        const selectedDate = dayjs(date).toDate();
        onDateChangeTemp(selectedDate);
    };

    return handleDateSelect;
};


export const dayOfWeekFormatter = (date: Dayjs) => {
    return date.format('ddd');
}

export const shouldDisableMonth = (date: Dayjs) => {
    return date.isBefore(dayjs(), 'day');
}
