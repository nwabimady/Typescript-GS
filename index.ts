interface Column {
    material: string;
    height?: number;
}

type ColumnTypes = "Concrete" | "Steel" | "Wood";

const columnCataglogue: Record<ColumnTypes, Column> = {
    Concrete: {
        height: 50,
        material: "Concrete"
    },
    Steel: {
        height: 50,
        material: "Steel"
    },
    Wood: {
        height: 50,
        material: "Wood"
    }
}
