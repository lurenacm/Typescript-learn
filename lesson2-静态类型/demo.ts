// (1)基础类型。number string null undefined symbol boolean any void never。。。
const num: number = 123

const Name: string = 'LinYY'

const boolean: Boolean = true

let n: null = null

let u: undefined = undefined


// any 类型，any 类型可以修改成其他任何类型，TS 不对 any 类型作类型检测
let not: any
not = 2
not = '2'
not = true

// 处理不确定的数组类型 any 比较合适。
let listArr: any[] = ['1', 2, true]

// void 空类型，一般用于函数，
function noReturn(): void {
    console.log('no value return')
}

function fn(): void {
    // Error
    return 3;
  }

function fn5(): void {
}
let un: undefined = fn5(); // Error 不能将类型“void”分配给类型“undefined”

let voidValue: void = undefined
let voidValue2: void = null   // 不能将类型“null”分配给类型“void”


// never 类型，不会执行结束的函数类型
function errorFunc(): never {
    throw new Error()
    console.log('never')    // 抛出错误后 这段代码不打印。
}

function abs(): never {
    while (true) {
    }
    console.log('never')    // 上面的代码永远是true 这段代码不打印。
}

// undefined 类型
interface E {
    b: number
    c?: number
}

let e: E = {b: 12, c: 12}

e = {b: 23, c: undefined}

// 变量的类型可以有多个，比如可以是number或string类型。
let temp: number | string = 23
temp = '23'

// (2)对象类型 object type。object {}，array [], class {}， function
let person: {
    name: string,
    age: number
} = {
    name: 'LinYY',
    age: 12
}

// 数组类型也是对象类型，下面声明number型数组只能写入数字来初始化，写入字符串将会报错。
const list: number[] = [12, 23, 34]

//等同于，下面的数组泛型，泛型是什么之后会讲，先留一个印象。
const listA: Array<number> = [1, 2, 3]

// const listB: number[] = ['12', 23, 34]

// class  类 类型
class Person {}
const LinYY = new Person()

// function 函数类型, 下面的函数类型要求返回值是 number 数字类型，写成其他类型如 string 会报错。

const getNumber: () => number = () => {
    // return 'LinYY'   报错
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
