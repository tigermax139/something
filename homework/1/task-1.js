export default function isTriangle(a, b, c) {
    if (a + b > c) {
       if (a + c > b) {
           if (b + c > a) {
               return true;
           }
       }
    }
    return false;
}
