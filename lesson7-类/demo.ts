// TS 中类的定义
class PersonA {
    name: string
    constructor(msg) {
        this.name = msg
    }
    getName() {
        return this.name
    }
}

const personA = new PersonA('LinYY')
console.log(personA.getName())   // ==> LinYY

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
    public name: string
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

class TeacherA extends PersonB {
    constructor(public age: number ) {
        super('LinYY')  // 初始化父类的 name
    }
}

const teacher = new TeacherA(18)



// static 
class GetAge {
    static  age = 18
    static printAge() {
        console.log(GetAge.age)
    }
    static setAge(msg: number) {
        this.age = msg
        this.printAge()
    }
}

// 将 class 当作接口使用
class A {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

interface B extends A {
    z: number
}

let printA: A = {x: 2, y: 3}

let printB: B = {x: 1, y: 2, z: 3}

