function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evenNumbers.push(numbers[i]);
  }

  return evenNumbers;
}

function reverseString(text: string): string {
  let reversedText: string = "";
  const textSize = text.length;

  for (let i = 0; i < textSize; i++) {
    reversedText += text[textSize - 1 - i];
  }

  return reversedText;
}

type StringOrNumber = string | number;
function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  }
  return "Number";
}

function getProperty<X, Y extends keyof X>(obj: X, k: Y): X[Y] {
  return obj[k];
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}
