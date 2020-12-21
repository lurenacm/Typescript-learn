interface Person {
    name: string,
    age: number,
    age1?: number,   // age1 是接口可能用到的属性。
    readonly ID: number
}

const person: Person = {
    name: 'LinYY',
    age: 18,
    // age1: 0,
    ID: 101
}

// 不传入 age1 也可以通过校验
const getName = (person: Person) => {
    console.log(person.age)
    // console.log(person.age1)  ==> 0
    console.log(person.ID)
   // person.ID = 200     // 报错 ID只能读取，不能修改==> error TS2540: Cannot assign to 'ID' because it is a read-only property
}

getName(person)

// 示例二

const getAge = (person1: Person) => {
    console.log(person1.age)
}

const person1 = {
    name: 'LinYY',
    age: 18,
    ID: 201,
    sex: 'male'     // 不在 Person 接口内。
}
getAge(person1)

// 以字面量的形式传入，TS 会强校验导致校验不通过。
// getAge({
//     name: 'LinYY',
//     age: 18,
//     ID: 201,
//     sex: 'male'     // ==>  'sex' does not exist in type 'Person'
// })


// 示例三 [propName: string]: any
interface User {
    name: string,
    age: number,
    [propName: string]: any // 后期可能用到的 string 类型的属性
}

const getSex = (user: User) => {
    console.log(user.age)
}

const user = {
    name: 'LinYY',
    age: 18,
    ID: 201,
    sex: 'male'     // 不在 User 接口内，但也能通过
}

getSex(user)

// 以字面量的形式传入也可以。
getSex({
    name: 'LinYY',
    age: 18,
    ID: 201,
    sex: 'male'
})


// interface 中定义方法
interface Action {
    name: string,
    age: number,
    say(): string
}

const applySay = (action: Action) => {
    console.log(action.say())
}

const action = {
    name: 'LinYY',
    age: 18,
    say() {
        return 'hello TS'
    }
}

applySay(action)

// class implements

class test implements Person {
    name: 'LinYY'
    age: 18
    ID: 301
}

// 被其他接口继承 extends

interface Person {
    name: string,
    age: number,
    age1?: number,   // age1 是接口可能用到的属性。
    readonly ID: number
}

interface Teach extends Person {
    action(): string
}

const teach: Teach = {
    name: 'LinYY',
    age: 28,
    ID: 501,
    action() {
        return '222'
    }
}

// interface 定义函数类型
// 下面定义了一个 say 类型的接口 接受一个 string 的参数，返回 string 类型的字符串
interface Say {
    (word: string): string
}

const foo: Say = (word: string) => {
    return word
}

foo('hello TS')   //  ==> 'hello TS'








