export const convertDateToString = (date: Date): string => {
    return date.toISOString().split('T')[0]
}
