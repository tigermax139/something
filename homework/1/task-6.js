
export default function getStats(data) {
    // Change me!
    if (data.length > 0) {
        const min = Math.min(...data);
        const max = Math.max(...data);
        const sum = data.reduce((sum, cur) => sum + cur, 0);
        const avg = sum / data.length;
        return {
            min,
            max,
            avg
        };
    }
    return {
        min: null,
        max: null,
        avg: null
    };
}
