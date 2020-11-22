class Person {
    constructor(private _name: string){}    // 私有属性一般加下划线 '_'
    get name() {
        return this._name
    }
    set name(rename: string) {
        this._name = rename
    }
}

// get
const person = new Person('LinYY')
console.log(person.name)    // ==> LinYY

// set
person.name = 'LinYYB'
console.log(person.name)    // ==> LinYYB

