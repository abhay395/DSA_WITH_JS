function stackTop(stack) {
    return stack[stack.length - 1]
}

function practice(data) {
    // let arr = new Array(data.length).fill(0);
    // let stack = [];
    // for (let i = 0; i < data.length; i++) {
    //     while (stack.length > 0 && data[i] > data[stack[stack.length - 1]]) {
    //         let top = stack.pop();
    //         arr[top] = i - top;
    //     }
    //     stack.push(i);
    // }
    // console.log(arr)
    let arr = new Array(data.length).fill(0);
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] < data[j]) {
                arr[i] = j - i;
                break
            }
        }
    }
    console.log(arr)
}
practice([73, 74, 75, 71, 69, 72, 76, 73])