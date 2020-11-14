// type annotation 类型注解。
let count: number
count = 23

// type inference 类型推断。
let countB = 23

let num1 = 1
let num2 = 2
let sum = num1 + num2

let obj = {
    name: 'LinYY',
    age: 18
}

// obj.name = 23 // TS 推断出来的类型 同样不能再修改

// 需要类型注解
function getSum(a, b) {
    return a + b
}

const total = getSum(2, 3)