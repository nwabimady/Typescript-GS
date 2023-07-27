interface Column {
    material: string;
    height?: number;
}

type StrictColumn = Required<Column>;

const column: StrictColumn = {
    material: "Concrete",
    height: 50,
}
