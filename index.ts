class Collection<Type> {
    data: Type[] = [];
}

const texts = new Collection<string>();

const firstText = texts.data[0];

const numbers = new Collection<number>();

const firstNumber = numbers.data[0];