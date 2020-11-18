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