import { CALCULATOR_INPUT_VALUE_DEFAULT } from "../constant";

export const formatCurrency = (value: string | number): string => {
    // Handle empty or invalid input
    if (!value) return CALCULATOR_INPUT_VALUE_DEFAULT;

    const parts = value.toString().split('.');
    // Format whole number part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // Join with decimal part if exists
    return parts.join('.');
};

export const formatNumberWithThousands = (value: string | number): string => {
    return formatCurrency(value);
};