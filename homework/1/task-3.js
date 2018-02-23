
export default function sumDigits(n) {
    const str = n.toString();
    let result = 0;
    for (let i = 0; i <= srt.length; i++) {
        result = result + Number(str.charAt(i));
    }
    return result;
}
