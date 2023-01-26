class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    set name(name) {
        if (typeof value !== "string") {
            throw new TypeError("name must be a string");
        }
        this._name = name;
    }
    get name() {
      return this.name;
	}

    set length(length) {
        if (typeof value !== "number") {
            throw new TypeError("length must be a number");
        }
        this._length = length;
    }
    get length() {
      return this.length;
        }

    set students(students) {
        if (!Array.isArray(value)) {
            throw new TypeError("students must be an array of strings");
        }
        this._students = student;
    }
    get students() {
      return this.students;
        }

}

export default HolbertonCourse;

