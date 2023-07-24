interface Column {
    material: string;
    width: number;
    depth: number;
    height: number;
}

const columnPropertyName: keyof Column = "depth";

class ConcreteColumn implements Column {
    material: "Concrete";
    width: number;
    depth: number;
    height: number;

    constructor(width = 30, depth = 30, height = 3000) {
        this.width = width;
        this.depth = depth;
        this.height = height;
    }

    LogData(data: keyof Column) {
        console.log(this[data]);
    }
}

const column = new ConcreteColumn();
column.LogData("depth");