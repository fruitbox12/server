const b64 = require("b64");
function encode(data) {
 

    let uEnv = b64.base64urlEncode(data)
    return String(uEnv)
  }
  
  function decode(encoded) {
    let uEnv = b64.base64urlDecode(encoded)
    return String(uEnv)
  }
function dec(encoded) {
  const buff = Buffer.from(encoded, "base64");
  const str = buff.toString("utf8");
  return String(str)
}
  module.exports = {
   
    encode,
    decode,
    dec
  }