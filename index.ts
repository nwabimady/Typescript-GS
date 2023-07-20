interface Vector2D {
    x: number;
    y: number;
}

class Column {
    material: string;
    dimensions: Vector2D;

    constructor (material: string, dimensions: Vector2D) {
        this.material = material;
        this.dimensions = dimensions;
    } 
}

const column = new Column('Concrete', {x: 30, y:40} );

console.log(column.dimensions.x);