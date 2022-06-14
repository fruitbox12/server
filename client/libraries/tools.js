const b64 = require("b64");
function encode(data) {
    let uEnv = b64.base64urlEncode(data)
    return String(uEnv)
  }
  
  function decode(encoded) {
    let uEnv = b64.base64urlDecode(encoded)
    return String(uEnv)
  }



  module.exports = {
   
    encode,
    decode
  }