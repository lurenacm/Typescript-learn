function tsFunc (data: {x: number, y: number}) {
    console.log('demo ts')
    return Math.sqrt(data.x ** 2 + data.y ** 2)
}

// tsFunc()  // 没有传入参数，这里的代码 vscode 会提示错误,这就是静态语言在编写代码的时候就可以知道有错误。
tsFunc({x: 3, y: 4})  //需要将参数代码一起写入。

//动态语言的优势