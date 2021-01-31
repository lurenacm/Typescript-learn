// 类泛型的普通写法
class GenericType<T> {
    numberVal: T
    constructor(numberVal: T) {
        this.numberVal = numberVal;
      } 
    add(x: T, y: T) {
    }
}

let numberType = new GenericType<number>(2)
numberType.numberVal = 1
numberType.add(2, 8)

let stringType = new GenericType<string>('a')
stringType.numberVal = 'b'
stringType.add('a', 'b')

// 或
class GetItem<T>{
    constructor(private data: T[]) { }
    getName(index: number) {
        return this.data[index]
    }
}

const getItem = new GetItem(['LinYY'])
const res = getItem.getName(0)
console.log(res)


// 继承示例 extends
interface personA {
    name: string,
    age: number
}

class GetItemSecond<T extends personA>{
    constructor(private data: T[]) { }
    getName(index: number) {
        return this.data[index].name
    }
}

const getItemSecond = new GetItemSecond([
    {
        name: 'LinYY',
        age: 18            // 这里不传入 age 时会飘红，必须传入所有属性
    }
])
const res1 = getItem.getName(0)
console.log(res1)

// 约束泛型的范围
function getData<T extends number | string>(param: T) {
    return param
}

getData(1)
getData('1')