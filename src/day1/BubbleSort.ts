export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i <= arr.length; ++i) {
        // [1,3,2,6,7,8]
        for (let j = 1; j <= arr.length - 1 - i; j++) {
            if (arr[j] < arr[j - 1]) {
                let swap = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = swap;
            }
        }
    }
}
