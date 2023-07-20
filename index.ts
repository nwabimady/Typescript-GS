type Material = "concrete" | "brick" | "steel";

class Column {
    material: Material;

    constructor(material: Material) {
        this.material = material;
    }
}

const column = new Column('brick');
