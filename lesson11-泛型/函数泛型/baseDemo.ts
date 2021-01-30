//泛型简单示例
function id<T>(a: T, b: T, c: T): T {
    return a || b || c
}

// 不针对某一特定类型，可以是 number，string，Boolean，interface等类型，且使用的类型必须一致。
interface Type {
    a: number
    b: number
    c: number
}
let t: Type = {a: 2, b: 3, c: 4}

id(1,2,3)
id('1', '2', '3')
id(false, true, false)
id(t.a, t.b, t.c)

// 接口 推荐写法，直接使用泛型参数 T 代表指定类型
interface Uni<T> {
    a: T
    b: T
    c: T
}

let uni: Uni<number> = {a: 2, b:3, c:4}
id(uni.a, uni.b, uni.c)

// ReadonlyArray 的只读泛型，
let a: number[] = [1, 2, 3]
let b: ReadonlyArray<number> = a
b[0] = 2    // 索引签名仅允许读取-*