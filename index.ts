type WallType = "Inner" | "Partition" | "Facade";


interface Wall<Type extends WallType> {
    type: Type;
}

const wall: Wall<"Facade"> = { type: "Facade" }

wall.type