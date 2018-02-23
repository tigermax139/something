
export default function trim(text, maxLength) {
    if (maxLength <= 0) {
        throw new RangeError("RangeError");
    }

    if (text.length > maxLength) {
        if (text === "") {
            return "";
        }
        return text.substring(0, maxLength - 1) + "\u2026";
    }
    return text;
}
