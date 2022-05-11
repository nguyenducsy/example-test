// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function arrMax() {
    let newArr = [];
    let arr = [3, 4, 5, 3, 2, 1, 3, 10, 11];
    // let arr = [14, 12, 38, 17, 10, 36, 12, 29, 45, 34, 48, 22];
    // let arr = [10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22];
    arr.sort(function(a, b) {
        return a - b;
    });
    //xu ly
    for (let i = 0; i < arr.length; i++) {
        if (newArr.length < 5) {
            newArr.push(Math.max(...arr))
            arr.pop()
        }
    }
    alert("Nam so lon nhat trong mang la: " + newArr)
}