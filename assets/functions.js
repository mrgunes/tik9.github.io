// console.log('functi')

function truncate(str) {
    //    console.log('trunc',truncate_cut)
    if (str.length <= truncate_cut) {
        return str
    }
    subString = str.substr(0, truncate_cut)
    return subString.substr(0, subString.lastIndexOf(' ')) + '..'
}

function rege() {
    reg1 = '<\/?[^>]+(>|$)'
    reg2 = '&quot;'
    // '
    reg3 = '&#39;'
    reg4 = '&gt;'
    regs = [reg1, reg2, reg3, reg4]
    for (reg of regs) {
        var re = new RegExp(reg, "g");
        bodyPost.replace(re, '')
        console.log(reg)
    }
}