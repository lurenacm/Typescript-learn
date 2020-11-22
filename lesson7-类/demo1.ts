import axios from 'axios'

class Person {
    constructor(private _name: string){}    // 私有属性一般加下划线 '_'
    get name() {
        return this._name
    }
    set name(rename: string) {
        this._name = rename
    }
}

// get
const person = new Person('LinYY')
console.log(person.name)    // ==> LinYY 调用 get 下面的 name 属性

// set
person.name = 'LinYYB'  // 调用 set 下面的 name 属性同时赋值
console.log(person.name)    // ==> LinYYB


// 装饰器`readonly`用来装饰“类”的`name`属性。
class PersonB {
    readonly name: string
    constructor(private _name: string){}    // 私有属性一般加下划线 '_'
}

// 抽象类 abstract
abstract class Classic {
    name: string
   async submit() {
        return 'LinYY'
    }
    abstract getApiData()   // 一个抽象方法
}

// const classic = new Classic() // 无法创建抽象类的实例

class Music extends Classic {
    async getApiData() {
      return await axios.get('api1').then( res => {
          console.log(res)
      }).catch( e => {
        console.log(e)
    })
    }
}

class Book extends Classic {
    async getApiData() {
      return await axios.get('api2').then( res => {
          console.log(res)
      }).catch( e => {
          console.log(e)
      })
    }
}

class Sentence extends Classic {
   async getApiData() {
      return await axios.get('api3').then( res => {
          console.log(res)
      }).catch( e => {
        console.log(e)
    })
    }
}
