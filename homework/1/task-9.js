
export default function merge(data) {
    const result = {};
    data.forEach(object => {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                if (key in result) {
                    result[key].push(object[key]);
                } else {
                    result[key] = [object[key]];
                }
            }
        }
    });

    return result;
}
