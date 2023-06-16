export function createDateSpanString(startDate, endDate) {
    if (!endDate) {
        return `${startDate} - present`;
    }
    
    if (startDate === endDate) {
        return startDate.toString();
    }

    return `${startDate} - ${endDate}`;
}
