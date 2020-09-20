function getBC(data) {
    b = 23 - data.a;
    c = -21 - data.a;
    return { b, c }
}

module.exports = getBC