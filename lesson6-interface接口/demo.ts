// 一个简单实例示例说明 interface 是一个类对象

/**  this is PersonA interface */
interface PersonA {
    firstName: string,
    lastName: string
}

function greeter(person: PersonA) {
    return person.firstName + person.lastName
}

let userA = {
    firstName: 'lin',
    lastName: 'YY'
}

greeter(userA)

// 或
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
function printName(obj: { name: string }) {
    console.log(obj.name)
}

let myObj = { name: 'LinYY', age: 18 }
printName(myObj)

// 或
const getAge = (person1: Person) => {
    console.log(person1.age)
}

const per = {
    name: 'LinYY',
    age: 18,
    ID: 201,
    sex: 'male'     // 不在 Person 接口内，也可以通过校验
}
getAge(per)

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
interface Search {
    (a: number, b: number): boolean
}

let search: Search
search = function (a: number, b: number): boolean {
    return a >= b
}
search(2, 3)

// 或
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

// implements 和 extend 不同 extend 是继承父类，implement 是实现接口 interface 而且可以使用多个接口，用逗号隔开。

// class A extends B implements C,D,E
class test implements Person {
    name = 'LinYY'
    age = 18
    ID = 301
}

// 被其他接口继承 extends
interface Music {
    click: boolean
}

interface Sentence {
    color: string
}

interface Classic extends Music, Sentence {
    time: number
}

let classic = {} as Classic
classic.click = false
classic.color = 'white'
classic.time = 220

// 或
interface PersonB {
    name: string,
    age: number,
    age1?: number,   // age1 是接口可能用到的属性。
    readonly ID: number
}

interface Teach extends PersonB {
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

const teachA = <Teach>{
    name: 'LinYY',
    age: 28,
    ID: 501,
    action() {
        return '222'
    }
}

// interface 继承 class 示例
class Animal {
    fly: any
}

interface Dog extends Animal {
    run(): void
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


// interface 和 type alias
/** ifc is interface */
interface Ifc {
    name: string,
    age: number
}

/** T is type alias */
type T = {
    name: string,
    age: number
}

/* interface 和 type alias 扩展示例 */
interface IfcName {
    name: string
}
interface IfcAge extends IfcName {
    age: number
}

type TName = {
    name: string
}
/** TAge 继承了 TName 的 name 属性*/
type TAge = TName & {
    age: number
}
const tAge : TAge = {
    name: 'LinYY',
    age: 18
}

/* interface 和 type alias 相互继承示例 */

/** interface  extends type alias */
interface IfcAge extends TName {
    age: number
}

/** type  extends interface alias */
type TypeName = IfcAge & {
    name: string
}
