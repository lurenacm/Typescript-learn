function tsFunc(data) {
    console.log('demo ts');
    return Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2));
}
// tsFunc()  // 没有传入参数，这里的代码 vscode会提示错误,这就是动态语言在编写代码的时候就可以知道有错误。
tsFunc({ x: 3, y: 4 }); //需要将参数代码一起写入。
//动态语言的优势
