interface Bird {
    fly: Boolean;
    sing: () => {}
}

interface Dog {
    fly: Boolean;
    dark: () => {}
}

// 联合类型 animal 参数可以是 Bird 或 Dog，语法提示可以直接提示出共有属性 fly，但是不能直接提示出 sing 和 dark。
function trainAnimal (animal: Bird | Dog) {
    animal.fly
    // animal.dark() 这里直接报错，因为不能确保 animal 包含 dark 方法。
}

//类型保护——类型断言 as
function trainAnimal1 (animal: Bird | Dog) {
    if (animal.fly){
        (animal as Bird).sing() //直接告诉 TS 这里 animal 是 Bird 类型
    }else {
        (animal as Dog).dark()
    }
}

// in 判断
function trainAnimal2 (animal: Bird | Dog) {
    if ("sing" in animal) {   // 判断 animal中是否含有私有属性 sing
        animal.sing()
    }else {
        animal.dark()
    }
}

// typeof 类型保护
function trainAnimal3 (paramA: number | string, paramB: number | String) {
    if (typeof paramA === "string" && typeof paramB === "string") {
        return paramA + paramB
    }
    return
}
