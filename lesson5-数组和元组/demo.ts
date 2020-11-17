// 单类型注解数组 [ ]
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['1', '2', '3']
const undefinedArr: undefined[] = [undefined]

// 多类型注解数组 [ ]
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

// tuple 元组的定义
const arrT: [number, string, number] = [18, 'LinYY', 3]

type tupleArr =  [number, string, number]
const arrTB: tupleArr = [18, 'LinYY', 3]

const attTC: tupleArr[] =[
    [18, 'LinYY', 3],
    [1, 'LinYY', 23],
    [2, 'LinYY', 13]
]

// 普通数组不能约束每一项元素的类型
let list: (number | string)[] = ['LinYY', 18] 
let listB: (number | string)[] = [18, 'LinYY']
