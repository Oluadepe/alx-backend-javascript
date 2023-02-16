interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

function printTeacher (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


class StudentClass {
  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayName = (): string => this.firstNaame;
}

interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}
