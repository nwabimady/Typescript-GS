interface Materiable {
    material: string;
}
interface Measurable {
    width: number;
    height: number;
}

interface Physical extends Materiable, Measurable {}

const column: Physical = {
    material: "kjsjdfh",
    width: 1,
    height: 2
}