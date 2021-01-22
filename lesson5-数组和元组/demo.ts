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

// 数据结构一致 TS 不会报错
class Teacher {
    name: string = ''
    age: number = 0
}

// 这里是一个 Teacher 类，那么每一个元素都应该是 Teacher 的实例，但是由于下面的对象数据结构和 Teacher类一致，所以 TS 没有报错。
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
let arrT: [number, string, number]
arrT = [18, 'LinYY', 3]

// 元素操作方法
arrT[0].toExponential(1)
arrT[1].split('i')
arrT[2] = 4

// 类型不对应就会报错
arrT = [18, 'LinYY', '1']

// 越界元素，直接报错
arrT[3] = '12' // 不能将类型“"12"”分配给类型“undefined”

type tupleArr =  [number, string, number]
const arrTB: tupleArr = [18, 'LinYY', 3]

const attTC: tupleArr[] =[
    [18, 'LinYY', 3],
    [1, 'LinYY', 23],
    [2, 'LinYY', 13]
]

// 普通数组不能约束每一项元素的类型，下面元素的类型就不可以约束
let list: (number | string)[] = ['LinYY', 18] 
let listB: (number | string)[] = [18, 'LinYY']
