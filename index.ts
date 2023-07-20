interface Logeable {
    Log: () => void;
    
}

class Column {
    rebarWeight: number;
    Log() {
        console.log(this.rebarWeight);
    };
    
}

class GlassWindow {
    frameCount: number;
    Log() {
        console.log(this.frameCount);
    }
}

function LogItems(items: Logeable[]) {
    for(const item of items) {
        item.Log();
    }
}

const column = new Column();
const glassWindow = new GlassWindow();
const allItems = [column, glassWindow];
LogItems(allItems);