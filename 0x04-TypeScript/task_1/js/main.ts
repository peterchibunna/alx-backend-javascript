export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [contract: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0].toUpperCase()}. ${lastName}`;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export interface InterfaceStudentClass {
    workOnHomework(): string;

    displayName(): string;
}

export class StudentClass implements InterfaceStudentClass {
    private readonly _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName;
    }
}
