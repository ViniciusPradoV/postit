class Student{
    constructor(name: string, age: number, isGraduated: boolean){
        this.name = name;
        this.age = age;
        this.isGraduated = isGraduated;
    }

    public name: string = '';
    public age: number = 0;
    private isGraduated: boolean = false;

    public studentFormattedData(): string{
        return 'Nome: ' + this.name + 'Idade: ' + this.age;
    }
}

const student = new Student('Vinicius', 29, false);

const dataFormatted = student.studentFormattedData();

console.log(dataFormatted);