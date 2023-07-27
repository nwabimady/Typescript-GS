function getHeight() {
    return 50;
}

interface Column {
    material: string;
    height: number;
}

const column: Partial<Column> = {
    material: "Concrete",
}

column.height = getHeight();