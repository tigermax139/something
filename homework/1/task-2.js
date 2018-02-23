
export default function getNthItem(a, n) {
    const S = [];
    if (n === 0 || a === 0) {
        return 0;
    }
    S[0] = 0;
    for (let i = 1; i <= n; i++) {
        S[i] = a - 2 * S[i - 1];
        console.log(S[i]);
    }
    return S[n];



    // S[0] = 0
    // S[i] = a - 2*S[i-1]


}
