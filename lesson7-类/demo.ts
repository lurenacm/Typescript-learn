// TS 中类的定义
class Person {
    name= 'LinYY'
    getName() {
        return this.name
    }
}

const person = new Person()
console.log(person.getName())   // ==> LinYY

// TS 类的继承
class Student extends Person {
    say() {
        return this.name
    }
    getName() {
        return 'LinYY'  // 重写父类 getName方法
    }
}
const student = new Student()
console.log(student.say())   // ==> LinYY

// constructor 示例
class PersonB {
    public name
    constructor( name: string) {
        this.name = name
    }
}

// 简化写法。
// class PersonB {
//     constructor(public name: string) {
//     }
// }
const personB = new PersonB('LinYY')

class Teacher extends PersonB {
    constructor(public age: number ) {
        super('LinYY')  // 初始化父类的 name
    }
}

const teacher = new Teacher(18)