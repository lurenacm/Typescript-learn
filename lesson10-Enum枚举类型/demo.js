// 枚举是一种数据类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
var color;
color = Color.Red;
color = Color.Blue;
console.log('color', color);
// 枚举一般首字母大写
var Status;
(function (Status) {
    // OFFLINE = 1,
    Status[Status["OFFLINE"] = 0] = "OFFLINE";
    Status[Status["ONLINE"] = 1] = "ONLINE";
    Status[Status["OTHERS"] = 2] = "OTHERS";
})(Status || (Status = {}));
// 对比常用的 JS 代码
// const Status = {
//     OFFLINE : 0,
//     ONLINE: 1,
//     OTHERS: 2
// }
function getStatus(status) {
    if (status === Status.ONLINE) {
        return 'online';
    }
    else if (status === Status.OFFLINE) {
        return 'offline';
    }
    else if (status === Status.OTHERS) {
        return 'others';
    }
    return 'error';
}
var result = getStatus(Status.OFFLINE);
console.log(result);
// 下面代码直接打印出 enum 的下标值
console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.OTHERS);
// 打印下标对应的属性
console.log(Status[0]);
console.log(Status[1]);
console.log(Status[2]);
