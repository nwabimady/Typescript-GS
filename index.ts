function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  const value = identity<string>("myString");

  const value = identity("myString");

  const stringValue:string = 'myString'
const value = identity(stringValue);


//Narrowing Generics
function logLength<Type>(arg: Type): Type {
    console.log(arg.length);
    return arg;
  }

  function logLength<Type>(arg: Type): Type {
    if (Array.isArray(arg)) {
      console.log(arg.length);
    }
    return arg;
  }

  //Generic Types
  interface Car<Type> {
    license: Type;
  }

const car: Car<string> = { license: "license" };
const car: Car<string> = { license: 3 };

class Car<Type> {
    license: Type;
    getLicense:()=>Type;
  }

  const car = new Car<string>();
car.license = "license";
const carLicense = car.getLicense();
//carLicense type is string


// Generic Constraints
interface WithLength {
    length: number;
  }

  function logLength<Type extends WithLength>(arg: Type) {
    console.log(arg.length);
  }

  logLength<number>(3);

  type SubType<Type extends ExtendedType, ExtendedType> = Type;

  let validSubType: SubType<string, WithLength>;
let validSubType: SubType<number, WithLength>;


//Union Types and Generics
type WithLength<Type> = Type & { length: number };

interface CustomType {
    attribute: string;
  }
  
  const customTypeWithLength: WithLength<CustomType> = {
    attribute: "myString",
    length: 3,
  };


  //Optional Generics
  type WithLengthDefaultNumber<Type = CustomType> = Type & { length: number };
const customTypeWithLength: WithLengthDefaultNumber = {
  attribute: "myString",
  length: 3,
};
