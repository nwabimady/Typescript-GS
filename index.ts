interface Item {
    id: string;
}
interface Column extends Item {
    material: string;
}    

interface RectColumn extends Column {
    width: number;
    height: number;
    depth: number;
}

class ConcreteColumn implements  RectColumn {
    id: string;
    material: string;
    width: number;
    height: number;
    depth: number;
}