const repeatString = function(string, num) {
    if (num < 0) {
        return string = "ERROR"
        } else if (num == 0) {
        return string = ""
        } else for (let i = num; i > 0; i --) {
        return string.repeat(num)
        }
};
// Do not edit below this line
module.exports = repeatString;
