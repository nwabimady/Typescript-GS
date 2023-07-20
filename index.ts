class Column {
    rebarWeight: number;
}

class GlassWindow {
    frameCount: number;
}

type ConstructionElements  = Column | GlassWindow;

function getProperties(element: ConstructionElements) {
    if(element instanceof Column) {
        return element.rebarWeight;
    }
    else{
        return element.frameCount;
    }
}

const column = new Column();
const properties = getProperties (column);
console.log(properties);