export default function two_crystal_balls(breaks: boolean[]): number {
    let numberOfSteps = Math.floor(Math.cbrt(breaks.length)); // 25 -> 5
    let i = numberOfSteps; // 5
    for (; i < breaks.length; i += numberOfSteps) {
        //5,10,15,20,25 -> 3 17
        if (breaks[i]) {
            break;
        }
    }

    i -= numberOfSteps; // 20

    for (let j = 0; j < numberOfSteps && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
