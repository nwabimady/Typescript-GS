type Structural = {
    loads: number [],
}

type NonStructural = {
    thermalInsulation: number;
}

type BaseGroup<Type> = {
    items: Type[];
}

type IsStructural<Type> = Type extends Structural 
    ? { getAllLoads: () => number[]} 
    : { getTotalInsulation: () => number };

type ItemGroup<Type> = BaseGroup<Type> & IsStructural<Type>;

const group: ItemGroup<Structural> = {
    items: [],

    getAllLoads() {
        const allLoads: number[] = [];
        for(const item of this.items) {
            allLoads.push(...item.loads);
        }
        return allLoads;
    }
}