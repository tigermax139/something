// FIRST METHOD
// export default function unique(data) {
//     // Change me!
//     const arr = [];
//     nextIteration:
//     for (let i = 0; i < data.length; i++) {
//         const el = data[i];
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === el) {
//                 continue nextIteration;
//             }
//         }
//         arr.push(data[i]);
//     }
//     return arr;
// }
// SECOND METHOD
// export default function unique(data) {
//     // Change me!
//     const store = {};
//     data.forEach(el => {
//         const key = el;
//         store[key] = true; // it's not important
//     });
//     return Object.keys(store);
// }

// THIRD METHOD (ES6)
export default function(data) {
    return [... new Set(data)];
}
