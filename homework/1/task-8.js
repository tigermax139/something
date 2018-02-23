
export default function getTopLetter(str) {
    // Change me! getTopLetter("CAATGCCATA") --> "A";
    const arr = str.split("");
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        if (map.has(key)) {
            const value = map.get(key) + 1;
            map.set(key, value);
        } else {
            map.set(key, 1);
        }
    }
    const max = Math.max(...map.values());
    console.log(max);
    for (const key of map.keys()) {
        const value = map.get(key);
        if (value === max) {
            return key;
        }
    }
    return "";
}
