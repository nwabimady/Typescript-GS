class Column {
    rebarWeight: number;
}

class GlassWindow {
    frameCount: number;
}

type ConstructionElements  = Column | GlassWindow;

function getProperties(element: ConstructionElements) {
    if("rebarWeight" in element) {
        return element.rebarWeight;
    }
    else{
        return element.frameCount;
    }
}