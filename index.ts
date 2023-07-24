function computeArea(width: number, length: number) {
    return width * length;
}

function invokeDelegate(callback: typeof computeArea) {
    return callback(5, 10); // call the function with arguments (5
}

invokeDelegate(computeArea);