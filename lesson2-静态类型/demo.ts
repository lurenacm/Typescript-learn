// (1)基础类型。number string null undefined symbol boolean void 。。。
const num: number = 123

const Name: string = 'LinYY'

// (2)对象类型 object type。 object，array, class， function
let person: {
    name: string,
    age: number
} = {
    name: 'LinYY',
    age: 12
}

// 数组类型也是对象类型，下面声明number型数组只能写入数字来初始化，写入字符串将会报错。
const list: number[] = [12, 23, 34]

// const listB: number[] = ['12', 23, 34]

// class  类类型
class Person {}
const LinYY = new Person()

// function 函数类型, 下面的含糊类型要求返回值是number 数字类型，写成其他类型如 string 会报错。

const getNumber: () => number = () => {
    // return 'LinYY'
    return 123
}

// 要求返回值是string 字符类型
const getString: () => string = () => {
    return 'LinYY'
    // return 123
}


// (3)自定义类型
interface Point {
    x: number,
    y: number
}

const point: Point = {
    x: 2,
    y: 4
}

