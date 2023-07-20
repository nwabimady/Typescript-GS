type Materiable = {
    material: string;
}
type Measurable = {
    width: number;
    height: number;
}

type  Physical = Materiable & Measurable;

const column: Physical = {
    material: "kjsjdfh",
    width: 1,
    height: 2
}