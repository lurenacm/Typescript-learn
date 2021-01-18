function add(a: number | string, b: number | string) {
    return `${a}${b}`
}

// 如果要求输入的参数 a, b只能是同一个类型的参数该怎么实现？下面几种写法都不能实现
add(1, 2)
add('1', 1)
add(1, '1')

// 下面引用函数泛型实现，<T> 就是函数 add 要泛指的类型，后面的参数 a，b都要是这个类型。
function add<T>(a: T, b: T){
    return `${a}${b}`
}


//让输入的类型是 number 或 string，即<T>代表类型 Number或String
add<number>(1, 1)
add<string>('1', '2')


add<number>(1, '1') //提示报错 "1"的类型不是 number 型
add<string>('1', 2)  //提示报错 2 的类型不是 string 型

//泛型约束，约束函数的参数类型

//将函数的泛型指定为 ABC，参数的泛型是数组类型ABC，返回值也是数组类型ABC。
function func<ABC>(a:ABC[]): ABC[]{
    return a
}

// 或
// function func1<ABC>(a:Array<ABC>): Array<ABC> {
//     return a
// }
func<number>([123])
// 错误的输入
func<number>(123)  // 类型“123”的参数不能赋给类型“Number[]”的参数



// 多泛型约束
function moreT<T, Y>(a:T, b: Y) {
    return `${a}${b}`
}

moreT<number, string>(1, '2')