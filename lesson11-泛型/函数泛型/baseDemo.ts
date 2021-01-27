// ReadonlyArray 的只读泛型，
let a: number[] = [1, 2, 3]
let b: ReadonlyArray<number> = a
b[0] = 2    // 索引签名仅允许读取