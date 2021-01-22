// 枚举是一种数据类型
enum Color {
    Red,
    Blue,
    Black
}


let color: Color
// 类型也只能是枚举 Color 类型
color = Color.Red
color = Color.Blue
console.log('color', color) // ==> 打印出下标 1

// 枚举一般首字母大写
enum Status  {
    // OFFLINE = 1,
    OFFLINE,
    ONLINE,
    OTHERS
}

// 对比常用的 JS 代码
// const Status = {
//     OFFLINE : 0,
//     ONLINE: 1,
//     OTHERS: 2
// }

function getStatus(status: Number) {
    if(status === Status.ONLINE) {
        return 'online'
    }else if (status === Status.OFFLINE) {
        return 'offline'
    }else if(status === Status.OTHERS) {
        return 'others'
    }
    return 'error'
}

const result = getStatus(Status.OFFLINE)
console.log(result)

// 下面代码直接打印出 enum 的下标值
console.log(Status.OFFLINE)
console.log(Status.ONLINE)
console.log(Status.OTHERS)

// 打印下标对应的属性
console.log(Status[0])
console.log(Status[1])
console.log(Status[2])