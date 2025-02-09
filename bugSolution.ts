function greet(person: string, date: Date): string {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
  return `Hello, ${person}`;
}

const myDate = new Date();
greet("John Doe", myDate); // Correct usage