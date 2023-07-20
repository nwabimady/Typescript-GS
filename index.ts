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

const column = new Column();
console.log();