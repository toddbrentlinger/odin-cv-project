export function createDateSpanString(startDate, endDate) {
    if (!endDate) {
        return `${startDate} - current`;
    }
    
    if (startDate === endDate) {
        return startDate.toString();
    }

    return `${startDate} - ${endDate}`;
}
