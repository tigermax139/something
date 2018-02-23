
export default function convertToRoman(n) {
    // Change me!
    if (n > 4000) {
        return "Sorry, but maximal range is 3999";
    }
    let thousands, hundreds, tens, units;
    let result = "";
    const romanian = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    };
    function converter(value, type) {
        let str = "";
        const val = Number(value);
        const decimal = Number(type);
        switch (val) {
            case 5: {
                return romanian[5 * decimal];
            }
            case 9: {
                return romanian[decimal] + romanian[10 * decimal];
            }
            case 6:
            case 7:
            case 8: {
                str = romanian[5 * decimal];
                for (let i = 0; i < (val - 5); i++) {
                    str = str + romanian[decimal];
                }
                return str;
            }
            case 1:
            case 2:
            case 3:
            case 4: {
                if (val === 4 && type !== 1) {
                    // В римских числах лиш 4 пишеться ІІІІ
                    return romanian[decimal] + romanian[5 * decimal];
                }
                for (let i = 0; i < val; i++) {
                    str = str + romanian[decimal];
                }
                return str;
            }
            default: return "";
        }
    }
    if (n !== 0) {
        const arr = String(n).split("");
        switch (arr.length) {
            case 1: {
                thousands = hundreds = tens = 0;
                units = arr[0];
                break;
            }
            case 2: {
                thousands = hundreds = 0;
                tens = arr[0];
                units = arr[1];
                break;
            }
            case 3: {
                thousands = 0;
                hundreds = arr[0];
                tens = arr[1];
                units = arr[2];
                break;
            }
            case 4: {
                thousands = arr[0];
                hundreds = arr[1];
                tens = arr[2];
                units = arr[3];
                break;
            }
            default : return "";
        }
        result = String(
            converter(thousands, 1000) + converter(hundreds, 100) + converter(tens, 10) + converter(units, 1)
        );
    }
    return result;
}
