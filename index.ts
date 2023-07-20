class Column {
    material?:string;
    dimensions?: {
        x: number;
        y: number;
    }
}

const column = new Column();
column.material = 'Concrete';
setupDimenions(column);

console.log(column.dimensions.x);


function setupDimenions(column: Column) {
    column.dimensions = {
        x:30,
        y:40
    }
}