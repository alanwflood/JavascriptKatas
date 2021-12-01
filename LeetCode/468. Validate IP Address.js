/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  if (IP.indexOf(":") === -1) return testIPv4(IP) ? "IPv4" : "Neither";
  else return testIPv6(IP) ? "IPv6" : "Neither";
};

function testIPv4(ip) {
  ip = ip.split(".");
  return (
    ip.length === 4 &&
    ip.every((val) => {
      const num = Number(val);
      return num.toString() === val && num <= 255 && num >= 0;
    })
  );
}

function testIPv6(ip) {
  ip = ip.split(":");
  const hexDigits = "0123456789abcdefABCDEF";
  return (
    ip.length === 8 &&
    ip.every(
      (val) =>
        [...val].every((char) => hexDigits.indexOf(char) !== -1) &&
        val.length <= 4 &&
        val.length > 0
    )
  );
}
