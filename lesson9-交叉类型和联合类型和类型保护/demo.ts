// 交叉类型
interface Colors{
    red: string
}

interface Rectangle {
    height: number
    width: number
    area: () => number
}

// param 参数可以访问类型 Colors 和 Rectangle 所有属性
function getArea(param: Colors & Rectangle) {
    param.height = 2
    param.width = 3
    param.red = 'red'
    param.area = (): number => {
        return param.height * param.width
    }
}

//  联合类型
interface Bird {
    fly: Boolean;
    sing: () => {}
}

interface Dog {
    fly: Boolean;
    dark: () => {}
}

// animal 参数可以是 Bird 或 Dog，语法提示可以直接提示出共有属性 fly，但是不能直接提示出 sing 和 dark。
function trainAnimal (animal: Bird | Dog) {
    animal.fly
    // animal.dark() 这里直接报错，因为不能确保 animal 包含 dark 方法。
}

//类型保护——类型断言 as
function trainAnimal1 (animal: Bird | Dog) {
    if (animal.fly){
        (animal as Bird).sing() //直接告诉 TS 这里 animal 是 Bird 类型
        // 或下面的一种写法
        // (<Bird>animal).sing()
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
