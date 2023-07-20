interface Rectangular {
    width: number;
    height: number;
    
}

class Column implements Rectangular{
    width: number;
    height: number;

    undefined() {
        return this.width * this.height;
    }
}

function sum(a, b){
    return a + b;
}

function add(a: string, b:number): number;
function add(a: string, b:string): string;
function add(a: number, b:number): number;
function add(a:any, b: any) {
    if(typeof a === 'string' && typeof b === "number") {
        const aNumber = parseFloat(a);
        return aNumber + b;
    }

    return a + b;
}

add("1", 2);