function duplicate(input: string | number) {
    if(typeof input === "string") {
        return input.concat(input);
    }
    const text = input.toString();
    return text.concat(text);
}
    
