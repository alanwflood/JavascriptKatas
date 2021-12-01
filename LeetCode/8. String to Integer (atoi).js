function isDigit(code) {
    return code >= 48 && code <= 57;
}

/**
 * @param {string} str
 * @return {number}
 */
const INT_MIN = Math.pow(-2, 31);
const INT_MAX = Math.abs(INT_MIN) - 1;
var myAtoi = function(str) {
    str = str.trim();
    if (str.length === 0) return 0;

    let start = 0;
    let sum = 0;

    let sign = 1;
    const firstChar = str[0];
    if (firstChar === "+") {
        start++;
    } else if (firstChar === "-") {
        sign = -1;
        start++
    }

    for (let i = start; i < str.length; i++) {
        const c = str.charCodeAt(i)
        if (!isDigit(c)) return sum * sign
        sum += str.charAt(i);
        if (sign == 1 && sum > INT_MAX) return INT_MAX;
		if (sign == -1 && (-1) * sum < INT_MIN) return INT_MIN;
    }
    return sum * sign
};
