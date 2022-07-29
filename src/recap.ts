const myName = 'Nicolas';

const suma = (a: number, b: number) => {
  return a + b;
};

// suma('asd', 'asd');

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `Mi nombre es ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Nicolas');
