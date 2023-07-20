enum Material {
    CONCRETE = "CONCRETE",
    WOOD = "WOOD",
    BRICK = "BRICK",
    STEEL = "STEEL",
}
class Column {
    material: Material;

    constructor(material: Material) {
        this.material = material;
    }
}

const column = new Column(Material["BRICK"]);
