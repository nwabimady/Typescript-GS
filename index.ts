interface Column {
    material: string;
    height: number;
}
type SpatialColumn = Pick<Column, "material"> & Omit<Column, "height">

//
type Color = "red" | "green" | "blue" | "black" | "white";
type MonochromeColours = Exclude<Color, "red" | " green" | "blue">

//
type Material = "Wood" | "Concrete" | "Brick" | null;
type StrictMaterial = NonNullable<Material>;


//
function computeArea(width: number, height: number) {
    return width * height;
}
type AreaParameter = Parameters<typeof computeArea>;