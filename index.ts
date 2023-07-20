class Column {
    material?:string;
    dimensions?: {
        x: number;
        y: number;
    }
}

const column = new Column();
column.material = 'Concrete';
column.dimensions = {
    X: 30,
    y: 40
};

console.log(column.dimensions.x);