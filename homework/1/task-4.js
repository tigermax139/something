
export default function formatTime(seconds) {
    let type = "AM";
    let hour;
    let min;
    let sec;
    if (seconds < 3600) {
        hour = 12;
        min = Math.floor((seconds % 3600) / 60);
        sec = seconds - min * 60;

    } else {
        hour = Math.floor(seconds / 3600);
        min = Math.floor((seconds % 3600) / 60);
        sec = seconds - hour * 3600 - min * 60;
        if (hour >= 12) {
            type = "PM";
            switch (hour) {
                case 12: hour = 12;
                    break;
                case 13: hour = 1;
                    break;
                case 14: hour = 2;
                    break;
                case 15: hour = 3;
                    break;
                case 16: hour = 4;
                    break;
                case 17: hour = 5;
                    break;
                case 18: hour = 6;
                    break;
                case 19: hour = 7;
                    break;
                case 20: hour = 8;
                    break;
                case 21: hour = 9;
                    break;
                case 22: hour = 10;
                    break;
                case 23: hour = 11;
                    break;
                default: return "Over max seconds";
            }
        }
    }
    ( sec < 10) ? sec = "0" + sec : sec;
    ( min < 10) ? min = "0" + min : min;
    ( hour < 10) ? hour = "0" + hour : hour;

    return `${hour}:${min}:${sec} ${type}`;
}
