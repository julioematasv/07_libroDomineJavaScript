var chars = new Array();
for(var x = 0; x < 256; x++) {
    chars[x] = {code: x, char: String.fromCharCode(x)};
}
console.log(chars);