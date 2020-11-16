// 单类型
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['1', '2', '3']
const undefinedArr: undefined[] = [undefined]

// 多类型注解
const arr: (number | string)[] = [1, 2, '2']

// 对象数组
const objectArr: { name: string, age: 18 }[] = [{
    name: 'LinYY',
    age: 18
}]

// 采用类型别名 type alias
type User = { name: string, age: 18 }

const objectArr1: User[] = [{
    name: 'LinYY',
    age: 18
}]

// 数据结构一直 TS 不会报错
class Teacher {
    name: string
    age: number
}

// 这里是一个 Teacher 类，那么每一个元素都应该是Teacher 的实例，但是由于下面的对象数据结构和 Teacher类一致，所以 TS 没有报错。
const objectArr2: Teacher[] = [
    new Teacher(),
    {
    name: 'LinYY',
    age: 18
}]

// 因为 Teacher 类中没有 other 属性，TS 会提示 “other”不在类型“Teacher”中
// const objectArr3: Teacher[] = [
//     new Teacher(),
//     {
//     name: 'LinYY',
//     age: 18,
//     other: 0
// }]