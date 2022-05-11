function arrRepeat(arr) {
    let temp = 0;
    for (let index = 0; index < arr.length; index++) {

        let resource = arr.findIndex(check);

        function check(nb) {
            return nb === arr[index]
        }
        if (resource === 0) {
            temp = arr[index]
        }

    }
    alert("Gia tri duoc lap nhieu nhat trong mang [" + arr + "] la: " + temp)
}

arrRepeat([3, 7, 3])
    // arrRepeat([null, "hello", true, null])
    // arrRepeat([false, "up", "down", "left", "right", true, false])