// this 指向最后调用 this 的对象
// this 指向示例一
let name = 'foo'
let f = {
    name: "Lin",
    a: function () {
        console.log(this.name) // ==> Lin
    }
}

f.a() // f.a() == window.f.a()  
// 为什么是 Lin？因为 对象 f 调用了函数 a()，再调用了 this。上面 window 调用了 f 对象，但是 f 才是最后调用 this 的对象

// 再看示例二
var age = 18

function foo() {
    let age = 20
    console.log(this.age) // ==>18
}

foo() // == window.foo()
//为什么是18，不是20呢？上面 foo() 函数是 window 对象调用了，所以 this 指向 window，那么 使用的 age 也就是window下的 age


// 再看示例三
let name = 'LinYY'
let a = {
    name: 'lin',
    c: function () {
        return function () {
            console.log(this.name)
        }
    }
}
let b = a.c()
b()     // window.b()
// 为什么这里 打印的是 LinYY 呢？和示例二类似，b() 最后是被 window 对象调用了，所以还是 “this 指向最后调用 this 的对象”

// 问：如果就是想要使用对象 a 上下文呢？那么就可以使用 箭头函数。保存最近的上下文的this，也就是这里的对象 a
let name = 'LinYY'
let a = {
    name: 'lin',
    c: function () {
        return () =>  {
            console.log(this.name)
        }
    }
}
let b = a.c()
b()