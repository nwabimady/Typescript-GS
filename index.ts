type Flatten<Type> = Type extends Array<infer Item> ?  Item : Type;

const firstArray = ["a", "b", "c"];
let flattenArray: Flatten<typeof firstArray>;

const secondArray = "fgh";
let flattenArray2: Flatten<typeof secondArray>;
