interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}


class Director implements DirectorInterface {
  workFromHome() => 'Working from home';
  getToWork() => 'Getting a coffee break';
  workDirectorTasks() => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome() => 'Cannot work from home';
  getCoffeeBreak() => 'Cannot have a break';
  workTeacherTasks() => 'Getting to work';
}

export const createEmployee = (salary: string | number): Director | Teacher => Number(salary) < 500 ? new Teacher() : new Director();

export const isDirector = (employee: Director | Teacher): boolean => employee instanceof Director;

export const executeWork = (employee: Director | Teacher): void => {
  const work = employee instanceof Director ? employee.workDirectorTasks() : employee.workTeacherTasks();
  console.log(work)
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
