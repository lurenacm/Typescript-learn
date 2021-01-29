// this 指向最后调用 this 的对象
// this 指向示例一
let name = 'foo'
let f = {
    name: "Lin",
    a: function() {
        console.log(this.name)  // ==> Lin
    }
}

f.a()   // f.a() == window.f.a()  
// 为什么是 Lin？因为 对象 f 调用了函数 a()，再调用了 this。上面 window 调用了 f 对象，但是 f 才是最后调用 this 的对象

// 再看示例二
var age = 18
function foo() {
    let age = 20
    console.log(this.age)   // ==>18
}

foo()

// 
let a = {
    name: 'lin',
    c: function() {
        return function() {
              return {
                name: this.name
            }
        }
    }
}
a.c()   // 
