interface Column {
    material: string;
    height?: number;
}

type TrasnformColumn = Readonly<Column>;

const column: TrasnformColumn = {
    material: "Concrete",
    height: 50,
}
