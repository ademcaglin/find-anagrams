function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

export const find_diff = (first, last) => {
    let firstArr = [...first];
    let lastArr = [...last];
    for (let f of first) {
        if (lastArr.includes(f)) {
            remove(firstArr, f);
            remove(lastArr, f);
        }
    }
    return firstArr.join("");
}